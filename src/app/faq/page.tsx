import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { QuestionAnswerIllustration } from "@/components/illustrations/QuestionAnswerIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { RelatedIndustries } from "@/components/sections/RelatedIndustries";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon } from "@/components/ui/icons";
import { allFaqs, faqGroups, faqPage as page } from "@/content/faq";
import { hubServices } from "@/content/services/hub";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
  pageNode,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);

// Organization, WebPage, BreadcrumbList, and FAQPage matching every visible
// question and answer (docs/07). No Service node, prices, ratings, areaServed,
// address, or LocalBusiness properties. FAQ markup is not expected to produce a
// rich result.
const structuredData = graph([
  organizationNode(),
  pageNode(pageUrl, { type: "WebPage", name: page.h1, description: page.description }),
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "FAQ", path: page.path },
  ]),
  faqPageNode(pageUrl, allFaqs),
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
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />

      <div className="mt-8 space-y-16">
        {/* A. Hero */}
        <header className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="hero-in-h1 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Straight answers about how OKIKO HIGH services fit the customer
              journey, from being found online to staying in touch after the job.
              The questions follow that order, and each group links to the pages
              with the full detail. What applies to every stage, such as pricing,
              ownership, and support, has its own section.
            </p>
            <div className="hero-in hero-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
              <ButtonLink href={page.secondaryCta.href} variant="secondary">
                {page.secondaryCta.label}
              </ButtonLink>
            </div>
            <div className="hero-in hero-delay-2 mt-6 flex max-w-2xl items-start gap-3.5 rounded-lg border border-brand-blue/30 bg-surface-muted p-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-blue text-white"
              >
                <NamedIcon name="message" className="h-6 w-6" />
              </span>
              <p className="text-neutral-800">
                Do not see your question? Tell us how customers reach you today
                and where things slip, and we can look at whether a service, or
                something simpler, fits.
              </p>
            </div>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Jump to a topic
              </p>
              <ul className="divide-y divide-neutral-200">
                {faqGroups.map((group) => (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="flex min-h-11 items-center justify-between gap-3 py-2 font-semibold text-neutral-900 hover:text-brand-blue-strong"
                    >
                      {group.label}
                      <span aria-hidden="true" className="text-brand-blue-strong">
                        &darr;
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </figure>
        </header>

        {/* B. Service cards */}
        <PageSection
          id="services"
          heading="Our Services for Local Businesses"
          intro={
            <p>
              Each service has its own page with scope, limits, FAQs, and next
              steps. Open the one closest to the problem you want to fix.
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

        {/* C. FAQ groups, each in two columns */}
        {faqGroups.map((group) => (
          <FaqSection
            key={group.id}
            id={group.id}
            heading={group.heading}
            intro={
              <p>
                {group.intro} Full detail:{" "}
                {group.more.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 && (index === group.more.length - 1 ? " and " : ", ")}
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </span>
                ))}
                .
              </p>
            }
            faqs={group.faqs}
          />
        ))}

        <RelatedIndustries
          twoColumns
          heading="See How the Services Fit Your Industry"
          intro="The six services apply differently depending on how your customers reach you. Choose your industry to see the proposed approach."
        />

        {/* D. Final CTA */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Still Have a Question?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                Tell us about your business, how customers reach you today, and what you
                want to improve. We look at which service, if any, fits and what a
                realistic scope would be. We use what you send to respond to your
                inquiry; see our{" "}
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
              <div className="mt-8">
                <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
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
