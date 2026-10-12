import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { ProfessionalServicesHeroIllustration } from "@/components/illustrations/ProfessionalServicesHeroIllustration";
import { ProfessionalServicesScopeIllustration } from "@/components/illustrations/ProfessionalServicesScopeIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { RelatedIndustries } from "@/components/sections/RelatedIndustries";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon } from "@/components/ui/icons";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import {
  canHandle,
  compatibilityChecks,
  exclusions,
  failedTransfer,
  faqs,
  handoffNote,
  measurementNote,
  metricDefinitions,
  mustEscalate,
  problems,
  problemsStat,
  processNote,
  processSteps,
  professionalServicesPage as page,
  scenarioNote,
  scenarios,
  serviceCards,
  softwareNote,
  stackNote,
} from "@/content/industries/professional-services";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
} from "@/lib/schema";

// Professional Services is a FUTURE opportunity in docs/01, not a current client
// category, and every service this page describes is still TBD or only partly
// confirmed. The owner approved indexing on 2026-10-11, so the page is indexable
// and listed in src/app/sitemap.ts. It still states no availability, pricing,
// tested integrations, results, or experience: keep it that way until docs/01
// confirms those facts.
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);

// Organization, WebPage, BreadcrumbList, and FAQPage (matching the visible FAQ).
// No Service node until the offerings and scope are confirmed, and no prices,
// ratings, areaServed, address, or LocalBusiness properties (docs/07).
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
    { name: "Industries", path: "/industries" },
    { name: "Professional Services", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

const accents = ["border-t-brand-blue", "border-t-brand-green", "border-t-brand-yellow"] as const;

// IconCardHeading tones that use the logo blue, green, and yellow as fills with
// brand-ink glyphs (docs/05).
const chipTones = ["optional", "included", "default"] as const;

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

const contactButton =
  "font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:brightness-95 hover:shadow-md motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0";

const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Professional Services" },
        ]}
      />

      <div className="mt-8 space-y-16">
        {/* A. Hero */}
        <header className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-center">
          {/* Text comes first so the heading leads on mobile and for screen
              readers; on large screens the illustration sits to its right. */}
          <div>
            <h1 className="hero-in-h1 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-4 max-w-3xl font-heading text-xl font-semibold text-brand-blue-strong">
              A credible website. Clear intake. Dependable follow-up.
            </p>
            <p className="hero-in hero-delay-1 mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">
              This page is for owners, managing partners, and operations leads at
              professional firms of about 1 to 25 people. It describes a proposed
              approach that connects your website with how prospective clients
              reach you and what happens next. The right starting point depends on
              your firm&apos;s bottleneck, and the scope is confirmed before any
              implementation.
            </p>
            <div className="hero-in hero-delay-2 mt-8">
              <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
            </div>
          </div>
          <figure className="hero-in hero-delay-2 mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <ProfessionalServicesHeroIllustration />
            <figcaption className="mt-3 text-sm text-neutral-600">
              Illustrative journey. This page shows a proposed approach, not client
              work or results.
            </figcaption>
          </figure>
        </header>

        {/* B. Problems */}
        <PageSection
          id="intake-breakdowns"
          heading="Where Credibility and Client Intake Break Down"
          intro={
            <p>
              A strong reputation does not guarantee a smooth first contact. These
              are the places where a prospective client&apos;s path most often
              stalls.
            </p>
          }
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, index) => (
              <li
                key={problem.title}
                style={{ "--reveal-i": index % 4 } as CSSProperties}
                className={`reveal-on-scroll rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={problem.icon} title={problem.title} />
                <p className="mt-3 text-neutral-700">{problem.body}</p>
              </li>
            ))}
          </ul>
          <QuickAnswer lead={problemsStat.lead} detail={problemsStat.detail} source={problemsStat.source} />
        </PageSection>

        {/* C. Service cards */}
        <PageSection
          id="services"
          heading="Start With the Bottleneck, Not Every Tool"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Six services can support a professional firm. You do not need all of
              them. A website and dependable human follow-up form the proposed
              foundation, reputation and Google Business Profile support depend on
              your situation, and AI chat and voice are optional additions. Each
              service has its own page.{" "}
              <Link href="/services" className={linkClass}>
                Explore marketing and automation services
              </Link>
              .
            </p>
          }
        >
          <p className="mb-6 inline-flex items-start gap-3 rounded-lg border border-brand-yellow bg-white p-4 text-neutral-800">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-yellow text-brand-ink"
            >
              <NamedIcon name="flag" className="h-5 w-5" />
            </span>
            <span>
              <span className="font-semibold">{stackNote.scopeLabel}: </span>
              {stackNote.scopeNote}
            </span>
          </p>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service, index) => (
              <li
                key={service.slug}
                style={{ "--reveal-i": index % 3 } as CSSProperties}
                className={`card-lift reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <p className="mb-3 inline-block self-start rounded-full bg-brand-yellow px-2.5 py-0.5 font-heading text-xs font-bold text-brand-ink">
                  {service.layer}
                </p>
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
          <QuickAnswer lead={stackNote.lead} detail={stackNote.detail} source={stackNote.source} />
        </PageSection>

        {/* D. Audience-specific workflows */}
        <PageSection
          id="different-workflows"
          heading="Different Firms Need Different Intake Workflows"
          intro={
            <p>
              A law practice, a bookkeeping firm, and an engineering firm do not
              handle first contact the same way. These five examples show how the
              workflow changes with the profession. Select one to read it.
            </p>
          }
        >
          <ul className="grid items-start gap-4 lg:grid-cols-2">
            {scenarios.map((scenario) => (
              <li key={scenario.title}>
                <details className="group rounded-lg border border-neutral-200 bg-white p-5">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-muted text-brand-blue-strong"
                      >
                        <NamedIcon name={scenario.icon} className="h-6 w-6" />
                      </span>
                      <span>
                        <h3 className="text-lg font-semibold leading-snug">{scenario.title}</h3>
                        <span className="block text-sm text-neutral-600">{scenario.summary}</span>
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-2xl leading-none text-brand-blue-strong transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-neutral-700">{scenario.body}</p>
                </details>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex max-w-3xl items-start gap-3 rounded-lg border border-neutral-300 bg-white p-4 text-neutral-800">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-200 text-neutral-800"
            >
              <NamedIcon name="shield" className="h-5 w-5" />
            </span>
            <span>{scenarioNote}</span>
          </p>
        </PageSection>

        {/* E. Existing software */}
        <PageSection
          id="existing-software"
          heading="Build Around the Software Your Firm Already Uses"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Whether a connection works depends on the actions you need, not on
              the name of your software. These are the points to check before any
              compatibility is promised.
            </p>
          }
        >
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {compatibilityChecks.map((check) => (
              <li key={check.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <h3 className="flex items-start gap-3 text-lg font-semibold leading-snug">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-green text-brand-ink"
                  >
                    <NamedIcon name="check" className="h-5 w-5" />
                  </span>
                  {check.title}
                </h3>
                <p className="mt-3 text-neutral-700">{check.body}</p>
              </li>
            ))}
          </ul>
          <QuickAnswer lead={softwareNote.lead} detail={softwareNote.detail} source={softwareNote.source} />
          <div className="mt-8">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
          </div>
        </PageSection>

        {/* F. Discretion and human handoffs */}
        <PageSection
          id="human-handoffs"
          heading="Keep Professional Judgment With Your Team"
          intro={
            <p>
              Any automation here is administrative. It collects minimal
              information, follows approved answers, and hands off to a named
              person. These are proposed boundaries, not confirmed terms.
            </p>
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-green bg-white p-6">
              <IconCardHeading icon="check" title="Can handle" tone="included" />
              <ul className="mt-4 space-y-3 text-neutral-700">
                {canHandle.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-brand-blue-strong">
                      <NamedIcon name="check" className="h-5 w-5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-yellow bg-white p-6">
              <IconCardHeading icon="flag" title="Must escalate to a person" />
              <ul className="mt-4 space-y-3 text-neutral-700">
                {mustEscalate.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-neutral-800">
                      <NamedIcon name="transfer" className="h-5 w-5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex max-w-3xl items-start gap-3 rounded-lg border border-brand-blue/30 bg-surface-muted p-5">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-blue text-brand-ink"
            >
              <NamedIcon name="call" className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">{failedTransfer.title}</h3>
              <p className="mt-2 text-neutral-700">{failedTransfer.body}</p>
            </div>
          </div>
          <QuickAnswer lead={handoffNote.lead} detail={handoffNote.detail} source={handoffNote.source} />
        </PageSection>

        {/* G. Measurement */}
        <PageSection
          id="measurement"
          heading="Measure Whether the Workflow Is Working"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Establish a baseline first, then track useful work rather than
              activity. These sample definitions keep the two apart. No results
              are shown here.
            </p>
          }
        >
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {metricDefinitions.map((item, index) => (
              <li
                key={item.metric}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={item.icon} title={item.metric} tone={chipTones[index % chipTones.length]} />
                <p className="mt-3 text-neutral-700">{item.meaning}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-neutral-700">{measurementNote.body}</p>
        </PageSection>

        {/* H. Process and scope */}
        <PageSection
          id="process"
          heading="A Clear Scope Before Anything Goes Live"
          intro={
            <p>
              Uncertainty about cost, responsibilities, and staff adoption is
              reasonable. The process is built to settle those points in writing
              first.
            </p>
          }
        >
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-blue bg-white p-5"
              >
                <p className="mb-3 inline-block rounded-full bg-brand-yellow px-2.5 py-0.5 font-heading text-xs font-bold text-brand-ink">
                  Step {index + 1}
                </p>
                <IconCardHeading icon={step.icon} title={step.title} />
                <p className="mt-3 text-neutral-700">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-lg border border-neutral-200 bg-white p-6">
            <IconCardHeading icon="minus" title="Not included in the proposed scope" tone="muted" />
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-neutral-700 md:grid-cols-2">
              {exclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-neutral-700">
                    <NamedIcon name="minus" className="h-5 w-5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 max-w-3xl text-neutral-700">{processNote}</p>
          <div className="mt-8">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
          </div>
        </PageSection>

        {/* I. FAQ (two-column layout from FaqSection) */}
        <FaqSection
          id="faq"
          heading="Questions About Marketing and Automation for Your Firm"
          faqs={faqs}
        />

        <RelatedIndustries currentPath="/industries/professional-services" />

        {/* J. Final CTA. The brief's inquiry form is not built yet: the contact path
            and consent wording are TBD (docs/01), so this points to /contact. */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Discuss Your Firm&apos;s Website and Intake Workflow
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-neutral-700">
                Tell us where inquiries slow down today, which software you already
                use, and how you prefer to be contacted. Scope and suitability are
                determined before any implementation. We use what you send to respond
                to your inquiry; see our{" "}
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
              <p className="mt-4 flex max-w-3xl items-start gap-3 rounded-lg border border-brand-yellow bg-white p-4 text-neutral-800">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-yellow text-brand-ink"
                >
                  <NamedIcon name="shield" className="h-5 w-5" />
                </span>
                <span>
                  Please do not submit confidential client, case, financial, health, or
                  other sensitive information through the contact form, email, or text.
                </span>
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
            <figure className="mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
              <ProfessionalServicesScopeIllustration />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
