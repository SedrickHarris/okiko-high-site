import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbListNode, graph, organizationNode, pageNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
};

const pageUrl = absoluteUrl("/about");

// Verified facts only (docs/07): page type and breadcrumb for the visible page.
// Add contact details, descriptions, or list items here only once they appear on
// the page itself.
const structuredData = graph([
  organizationNode(),
  pageNode(pageUrl, { type: "AboutPage", name: "About OKIKO HIGH" }),
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]),
]);

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <h1 className="text-3xl font-extrabold tracking-tight">About OKIKO HIGH</h1>
      <p className="mt-4 text-neutral-600">Content coming soon.</p>
    </>
  );
}
