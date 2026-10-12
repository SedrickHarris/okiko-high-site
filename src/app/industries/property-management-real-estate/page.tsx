import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { PropertyRealEstateCtaIllustration } from "@/components/illustrations/PropertyRealEstateCtaIllustration";
import { PropertyRealEstateHeroIllustration } from "@/components/illustrations/PropertyRealEstateHeroIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { RelatedIndustries } from "@/components/sections/RelatedIndustries";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon } from "@/components/ui/icons";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import {
  businessTypes,
  businessTypesNote,
  businessTypesQuickAnswer,
  canHandle,
  compatibilityChecks,
  existingFirstNote,
  exclusions,
  failedTransfer,
  faqs,
  gapNotes,
  handoffNote,
  inquiryMatrix,
  inquiryPrompts,
  introNote,
  introPoints,
  measureGroups,
  measurementNote,
  mustEscalate,
  noticesNote,
  problems,
  problemsNote,
  processNote,
  processSteps,
  propertyRealEstatePage as page,
  scenarioNote,
  scenarios,
  serviceCards,
  serviceLayers,
  softwareNote,
  stackNote,
} from "@/content/industries/property-management-real-estate";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
} from "@/lib/schema";

// Property management and real estate is a FUTURE opportunity in docs/01 (real
// estate sits under Professional Services), not a current client category, and
// every service this page describes is still TBD or only partly confirmed. The page
// states no availability, pricing, tested integrations, results, or experience:
// keep it that way until docs/01 confirms those facts. The owner approved
// indexing on 2026-10-11, so the page is indexable and listed in src/app/sitemap.ts.
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
    { name: "Property Management & Real Estate", path: page.path },
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
          { name: "Property Management & Real Estate" },
        ]}
      />

      <div className="mt-8 space-y-16">
        {/* Hero: H1, short intro, both CTAs, and the four-stage journey */}
        <header className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-center">
          {/* Text comes first so the heading leads on mobile and for screen
              readers; on large screens the illustration sits to its right. */}
          <div>
            <h1 className="hero-in-h1 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-4 max-w-3xl font-heading text-xl font-semibold text-brand-blue-strong">
              Clear paths for owners, renters, and buyers. Dependable follow-up.
            </p>
            <p className="hero-in hero-delay-1 mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">
              This page is for property management companies, landlords, short and
              midterm rental operators, and real estate agents and brokerages. It
              describes a proposed approach that connects your website, calls, and
              messages with who answers and what happens next. It works with the
              software you already use, and the scope is confirmed before any
              implementation.
            </p>
            <div className="hero-in hero-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
              <ButtonLink href={page.secondaryCta.href} variant="secondary">
                {page.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <figure className="hero-in hero-delay-2 mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <PropertyRealEstateHeroIllustration />
          </figure>
        </header>

        {/* 1. Audience introduction */}
        <PageSection
          id="connect-follow-through"
          heading="Connect Your Online Presence With Customer Follow-Through"
          intro={
            <p>
              A website, a Google profile, or a phone number only helps when the
              inquiry behind it reaches the right person and gets an answer. The
              approach here starts with that path, then looks at which services
              support it. Jump to{" "}
              <a href="#business-types" className={linkClass}>
                your business type
              </a>
              , the{" "}
              <a href="#services" className={linkClass}>
                services that may fit
              </a>
              , or{" "}
              <a href="#existing-software" className={linkClass}>
                how it works with your existing software
              </a>
              . You can also{" "}
              <Link href="/services" className={linkClass}>
                explore marketing and automation services
              </Link>
              .
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-3">
            {introPoints.map((point, index) => (
              <li
                key={point.title}
                style={{ "--reveal-i": index % 3 } as CSSProperties}
                className={`reveal-on-scroll rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={point.icon} title={point.title} tone={chipTones[index % chipTones.length]} />
                <p className="mt-3 text-neutral-700">{point.body}</p>
              </li>
            ))}
          </ul>
          <QuickAnswer lead={introNote.lead} detail={introNote.detail} source={introNote.source} />
        </PageSection>

        {/* 2. Business types */}
        <PageSection
          id="business-types"
          heading="Find the Workflow That Fits Your Business"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Residential managers, landlords, rental operators, and brokerages do
              not handle first contact the same way. Find the closest match, then
              follow the links to the services that apply.
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
              <span className="font-semibold">{businessTypesNote.scopeLabel}: </span>
              {businessTypesNote.body}
            </span>
          </p>
          <ul className="grid gap-6 md:grid-cols-2">
            {businessTypes.map((type, index) => (
              <li
                key={type.title}
                style={{ "--reveal-i": index % 2 } as CSSProperties}
                className={`card-lift reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={type.icon} title={type.title} tone={chipTones[index % chipTones.length]} />
                <p className="mt-4 text-sm font-bold uppercase tracking-wider text-neutral-600">
                  Common needs
                </p>
                <p className="mt-1 text-neutral-700">{type.needs}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-wider text-neutral-600">
                  Related services
                </p>
                <ul className="mt-1 space-y-1">
                  {type.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <QuickAnswer
            lead={businessTypesQuickAnswer.lead}
            detail={businessTypesQuickAnswer.detail}
            sources={businessTypesQuickAnswer.sources}
          />
        </PageSection>

        {/* 3. Shared problems, different consequences */}
        <PageSection
          id="communication-gaps"
          heading="Similar Communication Gaps, Different Customer Journeys"
          intro={
            <p>
              The gaps look alike from the outside: calls that go unanswered,
              inquiries with no owner, and the same questions asked again. What
              each contact needs next is different.
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

          <h3 className="mt-10 text-xl font-bold tracking-tight">
            Inquiry type, needed response, responsible person
          </h3>
          <p className="mt-2 max-w-3xl text-neutral-700">
            Each contact type needs its own response and a named person who owns it.
          </p>
          <ul className="mt-5 space-y-4">
            {inquiryMatrix.map((row, index) => (
              <li
                key={row.type}
                className={`rounded-lg border border-neutral-200 border-l-4 bg-white p-5 ${
                  ["border-l-brand-blue", "border-l-brand-green", "border-l-brand-yellow"][index % 3]
                }`}
              >
                <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)] md:items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                      Inquiry type
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-lg font-semibold leading-snug">
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-surface-muted text-brand-blue-strong"
                      >
                        <NamedIcon name={row.icon} className="h-5 w-5" />
                      </span>
                      {row.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                      Needed response
                    </p>
                    <p className="mt-1 text-neutral-700">{row.response}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                      Responsible person
                    </p>
                    <p className="mt-1 text-neutral-700">{row.person}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {gapNotes.map((note, index) => (
              <li
                key={note.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[(index + 1) % accents.length]}`}
              >
                <IconCardHeading icon={note.icon} title={note.title} tone={index === 0 ? "optional" : "default"} />
                <p className="mt-3 text-neutral-700">{note.body}</p>
              </li>
            ))}
          </ul>
          <QuickAnswer lead={problemsNote.lead} detail={problemsNote.detail} source={problemsNote.source} />
        </PageSection>

        {/* 4. Service options, grouped */}
        <PageSection
          id="services"
          heading="Match the Service to the Gap"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Six services can support a property business, and you do not need all
              of them. A clear website and dependable follow-up form the proposed
              foundation. Reputation and Google Business Profile support depend on
              your situation, and AI chat and voice are optional additions. Each
              service has its own page.
            </p>
          }
        >
          <p className="mb-8 inline-flex items-start gap-3 rounded-lg border border-brand-yellow bg-white p-4 text-neutral-800">
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
          <div className="space-y-10">
            {serviceLayers.map((group) => (
              <div key={group.layer}>
                <h3 className="text-xl font-bold tracking-tight">{group.layer}</h3>
                <p className="mt-1 text-neutral-700">{group.summary}</p>
                <ul className="mt-4 grid gap-6 md:grid-cols-2">
                  {serviceCards
                    .filter((service) => service.layer === group.layer)
                    .map((service, index) => (
                      <li
                        key={service.slug}
                        style={{ "--reveal-i": index % 2 } as CSSProperties}
                        className={`card-lift reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[serviceCards.indexOf(service) % accents.length]}`}
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
              </div>
            ))}
          </div>
          <QuickAnswer lead={stackNote.lead} detail={stackNote.detail} source={stackNote.source} />
        </PageSection>

        {/* 5. Illustrative scenarios */}
        <PageSection
          id="different-workflows"
          heading="What a Better-Organized Workflow Could Look Like"
          intro={
            <p>
              A 20-unit landlord, a 250-unit leasing team, a rental operator, and a
              brokerage would not organize first contact the same way. These five
              hypothetical examples show how the gap, the next step, and the
              measure change.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((scenario, index) => (
              <li
                key={scenario.title}
                style={{ "--reveal-i": index % 3 } as CSSProperties}
                className={`reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <p className="mb-3 inline-block self-start rounded-full bg-brand-yellow px-2.5 py-0.5 font-heading text-xs font-bold text-brand-ink">
                  Illustrative scenario
                </p>
                <IconCardHeading icon={scenario.icon} title={scenario.title} />
                <dl className="mt-4 space-y-3 text-neutral-700">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                      Workflow gap
                    </dt>
                    <dd className="mt-1">{scenario.gap}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                      Proposed next step
                    </dt>
                    <dd className="mt-1">{scenario.next}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                      Measure
                    </dt>
                    <dd className="mt-1">{scenario.measure}</dd>
                  </div>
                </dl>
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
          <div className="mt-8">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
          </div>
        </PageSection>

        {/* 6. Existing software */}
        <PageSection
          id="existing-software"
          heading="Start With the Systems You Already Use"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Whether a connection works depends on the actions you need, not on the
              name of your software. These are the places to look before any
              compatibility is promised.
            </p>
          }
        >
          <p className="mb-6 inline-flex items-start gap-3 rounded-lg border border-brand-yellow bg-white p-4 text-neutral-800">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-yellow text-brand-ink"
            >
              <NamedIcon name="search" className="h-5 w-5" />
            </span>
            <span>
              <span className="font-semibold">{existingFirstNote.label}: </span>
              {existingFirstNote.body}
            </span>
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
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
          <QuickAnswer lead={softwareNote.lead} detail={softwareNote.detail} sources={softwareNote.sources} />
        </PageSection>

        {/* 7. Boundaries and human responsibility */}
        <PageSection
          id="human-handoffs"
          heading="Keep People in Control of Sensitive Requests"
          intro={
            <p>
              Any automation here is administrative. It follows approved answers,
              captures minimal information, and hands off to a named person. These
              are proposed boundaries, not confirmed terms.
            </p>
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-green bg-white p-6">
              <IconCardHeading icon="check" title="Automation can assist" tone="included" />
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
              <IconCardHeading icon="flag" title="A person must decide" />
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
          <div className="mt-6 flex max-w-3xl items-start gap-3 rounded-lg border border-brand-blue/30 bg-white p-5">
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
          <QuickAnswer lead={noticesNote.lead} detail={noticesNote.detail} source={noticesNote.source} icon="file" />
        </PageSection>

        {/* 8. Fit and measurement */}
        <PageSection
          id="fit-and-measurement"
          heading="Define the Gap Before Adding Another Tool"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Uncertainty about cost, responsibilities, and staff adoption is
              reasonable. The process starts with one narrow workflow and a
              baseline, then expands only if it works. There is no fixed timeline.
            </p>
          }
        >
          <ol className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
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
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {measureGroups.map((group, index) => (
              <li
                key={group.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[(index + 1) % accents.length]}`}
              >
                <IconCardHeading icon={group.icon} title={group.title} tone={chipTones[index % chipTones.length]} />
                <ul className="mt-4 space-y-2 text-neutral-700">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 shrink-0 text-brand-blue-strong">
                        <NamedIcon name="check" className="h-5 w-5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-neutral-700">{measurementNote.body}</p>
          <div className="mt-8 rounded-lg border border-neutral-200 bg-white p-6">
            <IconCardHeading icon="minus" title="Not included in the proposed scope" tone="negative" />
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-neutral-700 md:grid-cols-2">
              {exclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-red-600">
                    <NamedIcon name="minus" className="h-5 w-5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 max-w-3xl text-neutral-700">{processNote}</p>
        </PageSection>

        {/* 9. FAQ (two-column layout from FaqSection) */}
        <FaqSection
          id="faq"
          heading="Property Management and Real Estate Marketing Automation FAQs"
          faqs={faqs}
        />

        <RelatedIndustries currentPath="/industries/property-management-real-estate" />

        {/* Final CTA. The brief's inquiry form is not built yet: the contact path and
            consent wording are TBD (docs/01), so this lists what to include and
            points to /contact. */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Find the Right Starting Point for Your Business
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-neutral-700">
                Tell us where communication breaks down and which software you
                already use. Scope, compatibility, and pricing are confirmed with
                you before any implementation. A helpful message includes:
              </p>
              <ul className="mt-4 max-w-3xl space-y-2 text-neutral-700">
                {inquiryPrompts.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-brand-blue-strong">
                      <NamedIcon name="check" className="h-5 w-5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-3xl text-neutral-700">
                We use what you send to respond to your inquiry; see our{" "}
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
                  Please do not submit tenant, applicant, resident, financial, or other
                  sensitive personal information through the contact form, email, or
                  text.
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
              <PropertyRealEstateCtaIllustration />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
