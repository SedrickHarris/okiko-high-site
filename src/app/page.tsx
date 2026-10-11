import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";
import { absoluteUrl, graph, organizationNode, pageNode, websiteNode } from "@/lib/schema";

// Title and description come from the root layout defaults.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const pageUrl = absoluteUrl("/");

// Home page schema per docs/07: Organization, WebSite, WebPage. No logo, sameAs,
// address, hours, or LocalBusiness until the owner supplies and confirms them.
const structuredData = graph([
  organizationNode(),
  websiteNode(),
  pageNode(pageUrl, { name: siteConfig.name, description: siteConfig.description, breadcrumb: false }),
]);

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <h1 className="text-3xl font-extrabold tracking-tight">OKIKO HIGH Digital Marketing Agency</h1>
      <p className="mt-4 text-neutral-600">Digital marketing, marketing automation, and SaaS solutions to make marketing smarter, business operations easier, and growth more achievable.</p>
    </>
  );
}
