import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { placeholderRobots } from "@/data/placeholder-pages";
import { absoluteUrl, breadcrumbListNode, graph, organizationNode, pageNode } from "@/lib/schema";

// Noindex until real content is approved. Remove this and restore the sitemap entry when published.
// (Both are driven by `published` in src/data/placeholder-pages.ts.)
export const metadata: Metadata = {
  title: "Case Studies",
  alternates: { canonical: "/case-studies" },
  ...placeholderRobots("/case-studies"),
};

const pageUrl = absoluteUrl("/case-studies");

// Verified facts only (docs/07): page type and breadcrumb for the visible page.
// Add contact details, descriptions, or list items here only once they appear on
// the page itself.
const structuredData = graph([
  organizationNode(),
  pageNode(pageUrl, { type: "CollectionPage", name: "Case Studies" }),
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ]),
]);

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <h1 className="text-3xl font-extrabold tracking-tight">Case Studies</h1>
      <p className="mt-4 text-neutral-600">Content coming soon.</p>
    </>
  );
}
