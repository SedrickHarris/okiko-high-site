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
 * Minimal Organization node. Only verified facts are included. No logo, sameAs,
 * address, hours or LocalBusiness subtype until the owner confirms them.
 * `withContact` adds the public email and phone; use it only on a page that shows both.
 * `foundingDate` (ISO date, e.g. 2026-05-03) is for a page that shows the date visibly.
 */
export function organizationNode({
  withContact = false,
  foundingDate,
}: { withContact?: boolean; foundingDate?: string } = {}): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: base,
    ...(foundingDate ? { foundingDate } : {}),
    ...(withContact
      ? {
          email: siteConfig.email,
          telephone: `+1-${siteConfig.phone.replace(/\D/g, "").replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3")}`,
        }
      : {}),
  };
}

export function breadcrumbListNode(
  pageUrl: string,
  items: ReadonlyArray<{ name: string; path: string }>,
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
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
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function graph(nodes: JsonLdNode[]): JsonLdNode {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** WebSite node for the home page (docs/07). No SearchAction: the site has no search. */
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
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    ...(description ? { description } : {}),
    ...(breadcrumb ? { breadcrumb: { "@id": `${pageUrl}#breadcrumb` } } : {}),
  };
}

/**
 * Service node for a published service page. No prices, ratings, areaServed,
 * address, or LocalBusiness properties (docs/07).
 */
export function serviceNode(
  pageUrl: string,
  { name, serviceType, description }: { name: string; serviceType: string; description: string },
): JsonLdNode {
  return {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name,
    serviceType,
    description,
    provider: { "@id": organizationId },
    url: pageUrl,
  };
}
