import type { Metadata } from "next";
import { placeholderRobots } from "@/data/placeholder-pages";

// Noindex until real content is approved. Remove this and restore the sitemap entry when published.
// (Both are driven by `published` in src/data/placeholder-pages.ts.)
export const metadata: Metadata = {
  title: "Case Studies",
  description: "OKIKO HIGH case studies are coming soon. This page is not published yet.",
  alternates: { canonical: "/case-studies" },
  ...placeholderRobots("/case-studies"),
};

// No JSON-LD while this page is noindex (docs/07: only indexable pages carry schema).
// When it becomes indexable, restore it: import JsonLd, absoluteUrl, breadcrumbListNode,
// graph and pageNode, build
//   graph([pageNode(absoluteUrl("/case-studies"), { type: "CollectionPage", name: "Case Studies" }),
//          breadcrumbListNode(...Home > Case Studies)])
// and render <JsonLd data={structuredData} /> first in the page. Add descriptions or
// list items only once they appear on the page itself.

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight">Case Studies</h1>
      <p className="mt-4 text-neutral-600">Content coming soon.</p>
    </>
  );
}
