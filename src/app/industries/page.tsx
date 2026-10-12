import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { audiences, hubPage as page, statusNote } from "@/content/industries/hub";
import { absoluteUrl, breadcrumbListNode, graph, organizationNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);

// Organization, WebPage, BreadcrumbList. No Service node, FAQPage, prices, ratings,
// areaServed, address, or LocalBusiness properties (docs/07).
const structuredData = graph([
  organizationNode(),
  {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.h1,
    description: page.description,
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  },
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "Industries", path: page.path },
  ]),
]);

const accents = ["border-t-brand-blue", "border-t-brand-green", "border-t-brand-yellow"] as const;

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Industries" }]} />

      <div className="mt-8 space-y-16">
        <header>
          <h1 className="hero-in-h1 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {page.h1}
          </h1>
          <p className="hero-in hero-delay-1 mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">
            The same marketing and automation services apply differently in each
            kind of business. Choose your industry to see how a website, follow-up,
            reviews, Google Business Profile support, and AI chat or voice fit the
            way your customers actually reach you.
          </p>
        </header>

        <PageSection
          id="industries"
          heading="Choose Your Industry"
          intro={<p>{statusNote}</p>}
        >
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item, index) => (
              <li
                key={item.path}
                style={{ "--reveal-i": index % 3 } as CSSProperties}
                className={`card-lift reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <p className="mb-3 inline-block self-start rounded-full bg-brand-yellow px-2.5 py-0.5 font-heading text-xs font-bold text-brand-ink">
                  {item.status}
                </p>
                <IconCardHeading icon={item.icon} title={item.title} />
                <p className="mt-4 text-neutral-700">{item.description}</p>
                <div className="mt-auto pt-6">
                  <ButtonLink href={item.path} variant="secondary">
                    {item.buttonLabel}
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </PageSection>

        <section
          aria-labelledby="industries-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <h2 id="industries-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Not Sure Which Page Fits?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-neutral-700">
            Tell us about your business and how customers reach you. You can also
            look at the individual{" "}
            <Link href="/services" className={linkClass}>
              marketing and automation services
            </Link>
            . We use what you send to respond to your inquiry; see our{" "}
            <Link href="/privacy-policy" className={linkClass}>
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Discuss Your Business</ButtonLink>
          </div>
        </section>
      </div>
    </>
  );
}
