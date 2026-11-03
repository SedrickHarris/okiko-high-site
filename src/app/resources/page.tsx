import type { Metadata } from "next";
import { placeholderRobots } from "@/data/placeholder-pages";

// Noindex until real content is approved. Remove this and restore the sitemap entry when published.
// (Both are driven by `published` in src/data/placeholder-pages.ts.)
export const metadata: Metadata = {
  title: "Resources",
  description: "OKIKO HIGH resources are coming soon. This page is not published yet.",
  alternates: { canonical: "/resources" },
  ...placeholderRobots("/resources"),
};

// No JSON-LD while this page is noindex (docs/07: only indexable pages carry schema).
// When it becomes indexable, restore it: import JsonLd, absoluteUrl, breadcrumbListNode,
// graph and pageNode, build
//   graph([pageNode(absoluteUrl("/resources"), { type: "CollectionPage", name: "Resources" }),
//          breadcrumbListNode(...Home > Resources)])
// and render <JsonLd data={structuredData} /> first in the page. Add descriptions or
// list items only once they appear on the page itself.

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight">Resources</h1>
      <p className="mt-4 text-neutral-600">Content coming soon.</p>
    </>
  );
}
