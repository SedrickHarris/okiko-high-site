// JSON-LD checks over the built site (`out/`), run by scripts/check-combos.mjs.
// Plain Node, no dependencies. Needs a production build first (`npm run build`).
//
// Fails on, for every built page:
// - a JSON-LD block that does not parse
// - an indexable page without schema, or a noindex page with it
// - not exactly one Organization and one WebSite in the graph, or an Organization
//   that is not byte-identical to the one on the other pages
// - an `@id` reference that does not resolve inside the graph
// - a schema URL that is not absolute on https://okikohigh.com, a page node whose `url`
//   differs from the canonical tag, or www / pages.dev / localhost anywhere in schema
// - Organization email/telephone/foundingDate not visible on a page, or a Service name not visible
// - "powered by GoHighLevel" / "GoHighLevel ... ecosystem" wording anywhere in a built page
// - FAQPage text that differs from the visible FAQ text
// - a route type missing a required schema type (see `requirementsFor`)

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const ORIGIN = "https://okikohigh.com";

// Owner instruction: say "built on GoHighLevel", never "powered by" or "ecosystem".
const GHL = "(?:go ?)?high ?level";
const GHL_PHRASES = [
  new RegExp(`powered by ${GHL}`, "i"),
  new RegExp(`${GHL} and its ecosystem`, "i"),
  new RegExp(`${GHL}[^.<\"]{0,40}ecosystem|ecosystem[^.<\"]{0,40}${GHL}`, "i"),
];

function walkHtml(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name !== "_next") walkHtml(full, out);
    } else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

const decode = (text) =>
  text
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

// Visible text with all whitespace removed, so tag boundaries and line breaks do not matter.
const visible = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, "")
      .replace(/<style[\s\S]*?<\/style>/g, "")
      .replace(/<[^>]+>/g, ""),
  )
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, "");

const squash = (text) => text.replace(/[‘’]/g, "'").replace(/\s+/g, "");

const typesOf = (node) => [].concat(node["@type"] ?? []);
const hasType = (nodes, type) => nodes.some((node) => typesOf(node).includes(type));
// WebPage, AboutPage, ContactPage, CollectionPage (FAQPage is a content block, not a page node).
const isPageNode = (node) => typesOf(node).some((type) => type.endsWith("Page") && type !== "FAQPage");

/** Required schema per route type (docs/07 and docs/audit-schema.md). Returns messages for gaps. */
function requirementsFor(route, nodes, hasFaq) {
  const problems = [];
  const need = (ok, message) => {
    if (!ok) problems.push(message);
  };
  const pageNode = nodes.find(isPageNode);
  const segments = route.split("/").filter(Boolean);
  const service = nodes.find((node) => typesOf(node).includes("Service"));

  if (route !== "/") need(hasType(nodes, "BreadcrumbList"), "missing BreadcrumbList");
  else need(!hasType(nodes, "BreadcrumbList"), "home page must not have a BreadcrumbList");
  need(!hasFaq || hasType(nodes, "FAQPage"), "visible FAQ but no FAQPage");

  if (route === "/") {
    need(hasType(nodes, "WebPage"), "home: missing WebPage");
    need(pageNode?.about?.["@id"] === `${ORIGIN}/#organization`, "home: WebPage.about must reference /#organization");
  } else if (route === "/about") {
    need(hasType(nodes, "AboutPage"), "about: missing AboutPage");
    need(pageNode?.mainEntity?.["@id"] === `${ORIGIN}/#organization`, "about: mainEntity must be the Organization");
  } else if (route === "/contact") {
    need(hasType(nodes, "ContactPage"), "contact: missing ContactPage");
  } else if (route === "/services") {
    need(hasType(nodes, "CollectionPage"), "services hub: missing CollectionPage");
    const list = nodes.find((node) => typesOf(node).includes("ItemList"));
    need(list?.itemListElement?.length === 6, "services hub: ItemList must list the six services");
  } else if (route === "/industries") {
    need(hasType(nodes, "CollectionPage"), "industries hub: missing CollectionPage");
    need(hasType(nodes, "ItemList"), "industries hub: missing ItemList");
  } else if (segments[0] === "services" && segments.length === 2) {
    need(hasType(nodes, "WebPage"), "service page: missing WebPage");
    need(!!service, "service page: missing Service");
    if (service) {
      need(service.provider?.["@id"] === `${ORIGIN}/#organization`, "service page: Service.provider must reference the Organization");
      need(!!service.serviceType, "service page: Service.serviceType missing");
      need(!!service.description, "service page: Service.description missing");
    }
  } else if (segments[0] === "industries" && segments.length === 2) {
    // Audience pages: WebPage. A Service is optional, but if present it needs `audience`.
    need(hasType(nodes, "WebPage"), "audience page: missing WebPage");
    if (service) need(!!service.audience, "audience page: Service without audience");
  } else if (segments[0] === "industries" && segments.length === 3) {
    need(hasType(nodes, "WebPage"), "combo page: missing WebPage");
    need(!!service, "combo page: missing Service");
    if (service) {
      need(service.provider?.["@id"] === `${ORIGIN}/#organization`, "combo page: Service.provider must reference the Organization");
      need(!!service.audience?.audienceType, "combo page: Service.audience missing");
    }
  } else if (route === "/privacy-policy" || route === "/terms-of-service" || route === "/faq") {
    need(hasType(nodes, "WebPage"), `${route}: missing WebPage`);
    need(typesOf(pageNode ?? {}).join() === "WebPage", `${route}: page type must be WebPage only`);
  }
  return problems;
}

export function checkSchema(outDir, fail) {
  if (!existsSync(outDir)) {
    fail(`schema: ${path.basename(outDir)}/ not found. Run "npm run build" first (or pass --no-schema).`);
    return 0;
  }
  let orgJson;
  let orgWhere;
  let pages = 0;

  for (const file of walkHtml(outDir).sort()) {
    const html = readFileSync(file, "utf8");
    const where = path.relative(path.dirname(outDir), file).split(path.sep).join("/");
    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
    const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "";
    const indexable = !/noindex/i.test(robots);
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);

    // No wording that implies an official GoHighLevel relationship, anywhere in the page
    // (copy, metadata, JSON-LD), indexable or not.
    for (const pattern of GHL_PHRASES) {
      if (pattern.test(html)) fail(`${where}: contains banned GoHighLevel wording (${pattern})`);
    }

    if (!indexable) {
      if (blocks.length) fail(`${where}: noindex page must not carry JSON-LD`);
      continue;
    }
    pages += 1;
    if (!canonical) {
      fail(`${where}: indexable page has no canonical tag`);
      continue;
    }
    if (!blocks.length) {
      fail(`${where}: indexable page has no JSON-LD`);
      continue;
    }

    const nodes = [];
    for (const block of blocks) {
      try {
        const data = JSON.parse(block);
        nodes.push(...(data["@graph"] ?? [data]));
      } catch (error) {
        fail(`${where}: JSON-LD does not parse (${error.message})`);
      }
    }
    if (!nodes.length) continue;

    // Organization and WebSite: exactly one each, Organization identical on every page.
    const orgs = nodes.filter((n) => typesOf(n).includes("Organization"));
    const sites = nodes.filter((n) => typesOf(n).includes("WebSite"));
    if (orgs.length !== 1) fail(`${where}: expected exactly one Organization, found ${orgs.length}`);
    if (sites.length !== 1) fail(`${where}: expected exactly one WebSite, found ${sites.length}`);
    if (orgs.length === 1) {
      const json = JSON.stringify(orgs[0]);
      if (orgJson === undefined) {
        orgJson = json;
        orgWhere = where;
      } else if (json !== orgJson) fail(`${where}: Organization differs from the one on ${orgWhere}`);
    }

    // Organization contact facts and foundingDate must be visible text on this page, not only
    // in a tel:/mailto: attribute. Some pages do not show them, so the shared Organization
    // omits them; this fails if one is added back while a page lacks it.
    const pageText = visible(html);
    const org = orgs[0] ?? {};
    if (org.email && !pageText.includes(squash(org.email))) fail(`${where}: Organization.email is not visible on this page`);
    if (org.telephone) {
      const digits = org.telephone.replace(/\D/g, "").slice(-10);
      if (!pageText.replace(/\D/g, "").includes(digits)) fail(`${where}: Organization.telephone is not visible on this page`);
    }
    if (org.foundingDate) {
      const [y, m, d] = org.foundingDate.split("-").map(Number);
      const month = new Date(Date.UTC(y, m - 1, 1)).toLocaleString("en-US", { month: "long", timeZone: "UTC" });
      if (!pageText.includes(squash(`${month} ${d}, ${y}`))) fail(`${where}: Organization.foundingDate is not visible on this page`);
    }

    // Each Service name must be visible text on its page (h1, breadcrumb, or intro).
    for (const svc of nodes.filter((n) => typesOf(n).includes("Service"))) {
      if (!pageText.includes(squash(svc.name))) fail(`${where}: Service name is not visible on the page: "${svc.name}"`);
    }

    // @id references must resolve inside the graph.
    const ids = new Set(nodes.map((n) => n["@id"]).filter(Boolean));
    const refs = [];
    (function collect(value) {
      if (Array.isArray(value)) value.forEach(collect);
      else if (value && typeof value === "object") {
        const keys = Object.keys(value);
        if (keys.length === 1 && keys[0] === "@id") refs.push(value["@id"]);
        else Object.values(value).forEach(collect);
      }
    })(nodes);
    for (const ref of refs) if (!ids.has(ref)) fail(`${where}: @id reference does not resolve: ${ref}`);

    // URLs: absolute on the apex; page nodes equal the canonical tag.
    const raw = JSON.stringify(nodes);
    if (/www\.|pages\.dev|localhost/i.test(raw)) fail(`${where}: schema contains www, pages.dev, or localhost`);
    (function urls(value, key) {
      if (Array.isArray(value)) value.forEach((item) => urls(item, key));
      else if (value && typeof value === "object") for (const [k, v] of Object.entries(value)) urls(v, k);
      else if (typeof value === "string" && ["url", "item", "@id"].includes(key)) {
        if (!(value === ORIGIN || value.startsWith(`${ORIGIN}/`) || value.startsWith(`${ORIGIN}#`))) {
          fail(`${where}: "${key}" is not an absolute ${ORIGIN} URL: ${value}`);
        }
      }
    })(nodes);
    for (const node of nodes.filter(isPageNode)) {
      if (node.url !== canonical) fail(`${where}: page url ${node.url} differs from canonical ${canonical}`);
    }

    // FAQPage text must appear in the visible page text.
    const text = visible(html);
    for (const faq of nodes.filter((n) => typesOf(n).includes("FAQPage"))) {
      for (const q of faq.mainEntity ?? []) {
        if (!text.includes(squash(q.name))) fail(`${where}: FAQ question not visible: "${q.name.slice(0, 70)}"`);
        const answer = q.acceptedAnswer?.text ?? "";
        if (!text.includes(squash(answer))) fail(`${where}: FAQ answer not visible: "${answer.slice(0, 70)}"`);
      }
    }

    // Route-type requirements.
    const route = canonical === ORIGIN ? "/" : canonical.slice(ORIGIN.length);
    const hasFaq = /id="faq[^"]*"/.test(html);
    for (const problem of requirementsFor(route, nodes, hasFaq)) fail(`${where}: ${problem}`);
  }
  return pages;
}
