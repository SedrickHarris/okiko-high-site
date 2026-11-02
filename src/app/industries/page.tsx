import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { QuestionAnswerIllustration } from "@/components/illustrations/QuestionAnswerIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon } from "@/components/ui/icons";
import {
  audiences,
  chooseSteps,
  faqs,
  heroPanel,
  hubPage as page,
  approachNote,
  workflowSteps,
} from "@/content/industries/hub";
import { hubServices } from "@/content/services/hub";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);

// Organization, CollectionPage with an ItemList of the published industry pages,
// BreadcrumbList, and FAQPage matching the visible FAQ (docs/07). No Service node,
// prices, ratings, areaServed, address, or LocalBusiness properties. All four
// industry pages are published and in the sitemap; the service cards link to
// service pages that the services hub already lists.
const structuredData = graph([
  organizationNode(),
  {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.h1,
    description: page.description,
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    mainEntity: { "@id": `${pageUrl}#industries-list` },
  },
  {
    "@type": "ItemList",
    "@id": `${pageUrl}#industries-list`,
    name: "Industries OKIKO HIGH writes about",
    itemListElement: audiences.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: absoluteUrl(item.path),
    })),
  },
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "Industries", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

const accents = ["border-t-brand-blue", "border-t-brand-green", "border-t-brand-yellow"] as const;

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

const contactButton =
  "font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:brightness-95 hover:shadow-md motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0";

const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Industries" }]} />

      <div className="mt-8 space-y-16">
        {/* A. Hero */}
        <header className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="hero-in-h1 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              <strong className="font-semibold text-neutral-900">
                Digital marketing and automation built around how your business works.
              </strong>{" "}
              OKIKO HIGH combines marketing strategy with automation to help
              businesses connect with customers and simplify everyday marketing and
              customer-management tasks. Choose your industry to see how a website,
              follow-up, reviews, Google Business Profile support, and AI chat or
              voice fit the way your customers actually reach you.
            </p>
            <div className="hero-in hero-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#industries">Choose your industry</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Discuss your business workflow
              </ButtonLink>
            </div>
            <div className="hero-in hero-delay-2 mt-6 flex max-w-2xl items-start gap-3.5 rounded-lg border border-brand-blue/30 bg-surface-muted p-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-blue text-brand-ink"
              >
                <NamedIcon name="message" className="h-6 w-6" />
              </span>
              <p className="text-neutral-800">
                Tell us about your industry, current systems, and priorities so we can
                assess the right fit. Service fit depends on your systems and
                requirements, so we look at whether a service, or something simpler,
                suits how customers reach you today.
              </p>
            </div>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                How industries and services connect
              </p>
              <ol>
                {heroPanel.map((step, i) => (
                  <li key={step.stage}>
                    {i > 0 && (
                      <div aria-hidden="true" className="ml-[19px] h-4 w-0.5 bg-neutral-800" />
                    )}
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-muted text-brand-blue-strong"
                      >
                        <NamedIcon name={step.icon} className="h-6 w-6" />
                      </span>
                      <span className="text-lg font-semibold leading-snug">{step.stage}</span>
                    </div>
                    <p className="ml-[52px] text-sm text-neutral-700">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </figure>
        </header>

        {/* B. Industry cards */}
        <PageSection
          id="industries"
          heading="Choose Your Industry"
          intro={<p>{approachNote}</p>}
        >
          <ul className="grid gap-6 md:grid-cols-2">
            {audiences.map((item, index) => (
              <li
                key={item.path}
                style={{ "--reveal-i": index % 3 } as CSSProperties}
                className={`card-lift reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
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

        {/* C. Service cards */}
        <PageSection
          id="services"
          heading="Services Used Across Every Industry"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Each industry page draws on the same six services. Open a service page
              for its scope, limits, and FAQs, or browse them together on the{" "}
              <Link href="/services" className={linkClass}>
                services overview
              </Link>
              .
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hubServices.map((service, index) => (
              <li
                key={service.slug}
                style={{ "--reveal-i": index % 3 } as CSSProperties}
                className={`card-lift reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={service.icon} title={service.title} />
                <p className="mt-4 text-neutral-700">{service.description}</p>
                <div className="mt-auto pt-6">
                  <ButtonLink href={service.path} variant="secondary">
                    {service.buttonLabel}
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* C2. Workflow example */}
        <PageSection
          id="workflow"
          heading="Built Around the Customer Workflow"
          intro={
            <p>
              Rather than a list of disconnected tools, each industry page starts with
              what happens after a customer reaches out. This is an example of how the
              services can connect. It is a proposed framework, not a confirmed
              package, a client deployment, or a result.
            </p>
          }
        >
          <ol className="grid gap-3 sm:grid-cols-5">
            {workflowSteps.map((step, i) => (
              <li
                key={step.label}
                className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3 sm:flex-col sm:items-start"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-muted text-brand-blue-strong"
                >
                  <NamedIcon name={step.icon} className="h-6 w-6" />
                </span>
                <span className="font-semibold leading-snug">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                    Step {i + 1}
                  </span>
                  <span className="block">{step.label}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-neutral-700">
            Which steps apply, who on your team owns each handoff, and which services
            support them is confirmed with you before any work begins.
          </p>
        </PageSection>

        {/* D. How to choose */}
        <PageSection id="how-to-choose" heading="How to Find Where to Start">
          <ol className="grid gap-6 md:grid-cols-3">
            {chooseSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-blue bg-white p-5"
              >
                <p className="mb-3 inline-block rounded-full bg-brand-yellow px-2.5 py-0.5 font-heading text-xs font-bold text-brand-ink">
                  Step {index + 1}
                </p>
                <IconCardHeading icon={step.icon} title={step.title} />
                <p className="mt-2 text-neutral-800">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-neutral-700">
            None of these services comes with a guarantee of rankings, leads, or
            review outcomes, and prices are not published on this site.
          </p>
        </PageSection>

        {/* E. FAQs */}
        <FaqSection id="faq" heading="Industries Questions, Answered" faqs={faqs} />

        {/* F. Final CTA */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Not Sure Which Page Fits?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
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
                <ButtonLink href="/contact">Discuss your business workflow</ButtonLink>
              </div>
              <p className="mt-6 text-neutral-700">Prefer to reach out directly?</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={`mailto:${siteConfig.email}`} className={`${contactButton} bg-brand-yellow`}>
                  <NamedIcon name="mail" className="h-5 w-5" />
                  {siteConfig.email}
                </a>
                <a href={telHref} className={`${contactButton} bg-brand-green`}>
                  <NamedIcon name="phone" className="h-5 w-5" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <figure className="flex flex-col items-center md:items-end">
              <QuestionAnswerIllustration />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
