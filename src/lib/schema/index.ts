import { siteConfig } from "@/data/site";

// Entity IDs use siteConfig.url, whose default is the confirmed apex host
// (https://okikohigh.com, see docs/07).
const base = siteConfig.url.replace(/\/$/, "");

export const organizationId = `${base}/#organization`;
export const websiteId = `${base}/#website`;

export function absoluteUrl(path: string): string {
  return `${base}${path === "/" ? "" : path}`;
}

type JsonLdNode = Record<string, unknown>;

/**
 * The one Organization node. Every page's graph carries this exact object (see `graph`),
 * so the same `@id` never has different properties. It reads only siteConfig, the single
 * business-data source. Only facts visible on every indexable page go in: email,
 * telephone and foundingDate are left out because some pages do not show them. No sameAs, address, hours, LocalBusiness subtype or contactPoint
 * until the owner confirms them (docs/01, docs/07).
 */
export function organizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: base,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logo.path),
      width: siteConfig.logo.width,
      height: siteConfig.logo.height,
    },
  };
}

/**
 * Entity ID for a page-level node. The home page URL has no trailing slash, so its
 * fragment IDs are written `/#…` to match `/#organization` and `/#website`.
 */
export function entityId(pageUrl: string, fragment: string): string {
  return pageUrl === base ? `${base}/#${fragment}` : `${pageUrl}#${fragment}`;
}

export function breadcrumbListNode(
  pageUrl: string,
  items: ReadonlyArray<{ name: string; path: string }>,
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": entityId(pageUrl, "breadcrumb"),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageNode(
  pageUrl: string,
  faqs: ReadonlyArray<{ question: string; answer: string }>,
): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": entityId(pageUrl, "faq"),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/**
 * Wraps page nodes in a graph. Organization and WebSite are added here, once, so every
 * page carries them identically (callers must not add their own). Every page-type node
 * (WebPage, AboutPage, ContactPage, CollectionPage; not FAQPage) gets `isPartOf` the WebSite.
 */
export function graph(nodes: JsonLdNode[]): JsonLdNode {
  const shared = new Set([organizationId, websiteId]);
  const pageNodes = nodes
    .filter((node) => !shared.has(node["@id"] as string))
    .map((node) =>
      typeof node["@type"] === "string" &&
      node["@type"].endsWith("Page") &&
      node["@type"] !== "FAQPage" &&
      !node.isPartOf
        ? { ...node, isPartOf: { "@id": websiteId } }
        : node,
    );
  return { "@context": "https://schema.org", "@graph": [organizationNode(), websiteNode(), ...pageNodes] };
}

/** The one WebSite node, added to every graph by `graph` (docs/07). No SearchAction: the site has no search. */
export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: base,
    name: siteConfig.name,
    publisher: { "@id": organizationId },
  };
}

/**
 * Page node for non-service pages. `type` follows docs/07: WebPage, AboutPage,
 * ContactPage, or CollectionPage. Only visible, verified facts go in.
 */
export function pageNode(
  pageUrl: string,
  {
    type = "WebPage",
    name,
    description,
    breadcrumb = true,
  }: {
    type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
    name: string;
    description?: string;
    breadcrumb?: boolean;
  },
): JsonLdNode {
  return {
    "@type": type,
    "@id": entityId(pageUrl, "webpage"),
    url: pageUrl,
    name,
    ...(description ? { description } : {}),
    ...(breadcrumb ? { breadcrumb: { "@id": entityId(pageUrl, "breadcrumb") } } : {}),
  };
}

/**
 * Service node for a published service page or combo page (`audience` is for combos). No prices, ratings, areaServed,
 * address, or LocalBusiness properties (docs/07).
 */
export function serviceNode(
  pageUrl: string,
  {
    name,
    serviceType,
    description,
    audience,
  }: { name: string; serviceType: string; description: string; audience?: string },
): JsonLdNode {
  return {
    "@type": "Service",
    "@id": entityId(pageUrl, "service"),
    name,
    serviceType,
    description,
    provider: { "@id": organizationId },
    ...(audience ? { audience: { "@type": "Audience", audienceType: audience } } : {}),
    url: pageUrl,
  };
}
