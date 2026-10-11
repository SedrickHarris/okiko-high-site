import { siteConfig } from "@/data/site";

// Entity IDs use siteConfig.url. The canonical host (www vs apex) is still TBD,
// so these IDs must be revisited once it is confirmed (see docs/07).
const base = siteConfig.url.replace(/\/$/, "");

export const organizationId = `${base}/#organization`;

export function absoluteUrl(path: string): string {
  return `${base}${path === "/" ? "" : path}`;
}

type JsonLdNode = Record<string, unknown>;

/**
 * Minimal Organization node. Only verified facts are included. No logo, sameAs,
 * address, hours or LocalBusiness subtype until the owner confirms them.
 */
export function organizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: base,
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
