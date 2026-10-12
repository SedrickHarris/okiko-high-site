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
  audienceProfessions,
  boundariesNote,
  buyerMap,
  buyerPoints,
  buyerStat,
  canHandle,
  compatibilityChecks,
  discoveryChecklist,
  existingSystemsFlow,
  failedTransfer,
  faqs,
  handoffNote,
  measurementNote,
  measures,
  mustEscalate,
  problems,
  problemsStat,
  professionalServicesPage as page,
  scenarioNote,
  scenarios,
  segmentNote,
  segments,
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

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

const fieldClass =
  "mt-1 block w-full rounded-md border border-neutral-400 bg-white px-3 py-2 text-base";

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
              {page.theme}
            </p>
            <p className="hero-in hero-delay-1 mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">
              This page is for owners, managing partners, and operations leads at
              professional firms of about 1 to 25 people, including {audienceProfessions}.
              It follows a prospective client from first hearing about your firm to
              the next step. Credibility, a clear way to make contact, and
              dependable follow-up are connected needs, and the right starting point
              depends on your firm&apos;s workflow and the software you already use.
            </p>
            <p className="hero-in hero-delay-1 mt-4 max-w-3xl text-neutral-700">
              Listing a profession here does not mean OKIKO HIGH has served it.
              Relevant experience and service fit are confirmed directly.
            </p>
            <div className="hero-in hero-delay-2 mt-8">
              <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
            </div>
          </div>
          <figure className="hero-in hero-delay-2 mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <ProfessionalServicesHeroIllustration />
          </figure>
        </header>

        {/* B. Buyer journey */}
        <PageSection
          id="buyer-journey"
          heading="Help Prospective Clients Evaluate Your Firm"
          intro={
            <p>
              A referral opens the door, and your website is often where the
              prospect decides whether to walk through it.{" "}
              <Link href="/services/website-design" className={linkClass}>
                Website design for a clearer client journey
              </Link>{" "}
              starts with the questions buyers are already asking.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-3">
            {buyerMap.map((item, index) => (
              <li
                key={item.question}
                style={{ "--reveal-i": index } as CSSProperties}
                className={`reveal-on-scroll rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={item.icon} title={`“${item.question}”`} />
                <p className="mt-3 flex items-center gap-2 font-heading text-sm font-bold text-brand-blue-strong">
                  <NamedIcon name="transfer" className="h-4 w-4" />
                  Answered by: {item.content}
                </p>
                <p className="mt-2 text-neutral-700">{item.body}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-8 max-w-3xl space-y-3 text-neutral-700">
            {buyerPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-0.5 shrink-0 text-brand-blue-strong">
                  <NamedIcon name="check" className="h-5 w-5" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <QuickAnswer lead={buyerStat.lead} detail={buyerStat.detail} source={buyerStat.source} />
        </PageSection>

        {/* C. Pain points */}
        <PageSection
          id="intake-breakdowns"
          heading="Where Credibility and Inquiry Handling Break Down"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              A strong reputation does not guarantee a smooth first contact. If
              your goal is better-fit inquiries rather than more of them, these are
              also the places to look.
            </p>
          }
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, index) => (
              <li
                key={problem.title}
                style={{ "--reveal-i": index % 4 } as CSSProperties}
                className={`reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={problem.icon} title={problem.title} />
                <p className="mt-3 text-neutral-700">{problem.body}</p>
                {problem.link && (
                  <p className="mt-auto pt-4">
                    <Link href={problem.link.href} className={linkClass}>
                      {problem.link.label}
                    </Link>
                  </p>
                )}
              </li>
            ))}
          </ul>
          <QuickAnswer lead={problemsStat.lead} detail={problemsStat.detail} source={problemsStat.source} />
        </PageSection>

        {/* D. Segment needs */}
        <PageSection
          id="professions"
          heading="Different Professions Need Different Workflows"
          intro={
            <p>
              Law, accounting, consulting, financial advice, insurance, and
              engineering are not interchangeable. Buyer questions, qualification,
              proof, and approval requirements all change. Fit by profession is a
              question for discovery, not something this page assumes.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {segments.map((segment, index) => (
              <li
                key={segment.title}
                style={{ "--reveal-i": index % 3 } as CSSProperties}
                className={`reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={segment.icon} title={segment.title} />
                <h4 className="mt-4 font-heading text-sm font-bold uppercase tracking-wider text-neutral-700">
                  Needs to consider
                </h4>
                <ul className="mt-2 space-y-2 text-neutral-700">
                  {segment.needs.map((need) => (
                    <li key={need} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 shrink-0 text-brand-blue-strong">
                        <NamedIcon name="check" className="h-5 w-5" />
                      </span>
                      {need}
                    </li>
                  ))}
                </ul>
                <h4 className="mt-5 font-heading text-sm font-bold uppercase tracking-wider text-neutral-700">
                  Example workflow (illustrative)
                </h4>
                <p className="mt-2 text-neutral-700">
                  {segment.workflow ??
                    "No example is given here. Producer licensing and carrier approvals need their own review first, and financial-advisor compliance language should not be reused."}
                </p>
              </li>
            ))}
          </ul>
          <QuickAnswer
            lead={segmentNote.lead}
            detail={segmentNote.detail}
            sources={[segmentNote.source, segmentNote.extraSource]}
          />
        </PageSection>

        {/* E. Scenarios */}
        <PageSection
          id="small-firm-scenarios"
          heading="What This Could Look Like in a Small Firm"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              These five examples show practical next steps, not revenue gains.
              Each keeps a person in charge of the inquiry. Select one to read it.
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

        {/* F. Service navigation */}
        <PageSection
          id="services"
          heading="Choose Support Around Your Firm's Needs"
          intro={
            <p>
              {stackNote.intro}{" "}
              <Link href="/services" className={linkClass}>
                Explore marketing and automation services
              </Link>
              .
            </p>
          }
        >
          <p className="mb-6 flex max-w-3xl items-start gap-3 rounded-lg border border-brand-yellow bg-white p-4 text-neutral-800">
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
                <IconCardHeading icon={service.icon} title={service.title} />
                <p className="mt-4 font-semibold text-neutral-900">
                  <span className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-700">
                    Consider if:{" "}
                  </span>
                  {service.need}
                </p>
                <p className="mt-3 text-neutral-700">{service.description}</p>
                <div className="mt-auto pt-6">
                  <ButtonLink href={service.path} variant="secondary">
                    {service.linkLabel}
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
          <QuickAnswer lead={stackNote.lead} detail={stackNote.detail} source={stackNote.source} />
        </PageSection>

        {/* G. Existing systems */}
        <PageSection
          id="existing-systems"
          heading="Start With the Systems Your Firm Already Uses"
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
          <ol className="mb-8 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            {existingSystemsFlow.map((step, index) => (
              <li key={step.title} className="contents">
                <div className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-blue bg-white p-5">
                  <IconCardHeading icon={step.icon} title={step.title} />
                  <p className="mt-2 text-neutral-700">{step.body}</p>
                </div>
                {index < existingSystemsFlow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center text-brand-blue-strong max-md:rotate-90"
                  >
                    <NamedIcon name="transfer" className="h-7 w-7" />
                  </span>
                )}
              </li>
            ))}
          </ol>
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

        {/* H. Discretion and oversight */}
        <PageSection
          id="oversight"
          heading="Keep Professional Judgment and Sensitive Information Protected"
          intro={
            <p>
              Any automation here is administrative. Initial contact collects only
              the information needed, unsupported requests and failed transfers
              reach a monitored person, and regulated content gets the review it
              needs. These are proposed boundaries, not confirmed terms.
            </p>
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-green bg-white p-6">
              <IconCardHeading icon="check" title="Administrative support" tone="included" />
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
              <IconCardHeading icon="flag" title="Professional decisions stay with people" />
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
          <QuickAnswer
            lead={handoffNote.lead}
            detail={handoffNote.detail}
            sources={[handoffNote.source, handoffNote.extraSource]}
          />
        </PageSection>

        {/* I. Evaluation and engagement */}
        <PageSection
          id="fit-and-scope"
          heading="Define Fit, Scope, and Useful Measures First"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Uncertainty about cost, responsibilities, and staff adoption is
              reasonable. A responsible engagement settles those points in writing
              before work begins, and measures useful work rather than activity.
            </p>
          }
        >
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
            <div className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-blue bg-white p-6">
              <IconCardHeading icon="clipboard" title="Discovery checklist" />
              <ul className="mt-4 space-y-3 text-neutral-700">
                {discoveryChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-brand-blue-strong">
                      <NamedIcon name="check" className="h-5 w-5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="mx-auto w-full max-w-sm lg:max-w-none">
              <ProfessionalServicesScopeIllustration />
            </figure>
          </div>

          <h3 className="mt-10 text-xl font-semibold">An illustrative measurement framework</h3>
          <p className="mt-2 max-w-3xl text-neutral-700">
            These definitions show what would be tracked, including correction and
            supervision effort. No numbers or results are shown here.
          </p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {measures.map((item, index) => (
              <li
                key={item.metric}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={item.icon} title={item.metric} />
                <p className="mt-3 text-neutral-700">{item.meaning}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-neutral-700">{measurementNote}</p>
          <p className="mt-3 max-w-3xl text-neutral-700">{boundariesNote}</p>
          <div className="mt-8">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
          </div>
        </PageSection>

        {/* J. FAQ (two-column layout from FaqSection) */}
        <FaqSection id="faq" heading="Questions From Professional Firms" faqs={faqs} />

        <RelatedIndustries currentPath="/industries/professional-services" />

        {/* J. Closing inquiry. The form below is layout only: the destination, consent
            wording, and SMS/AI-call consent are TBD (docs/01), so it is not wired to
            anything and every CTA points to /contact. */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                {page.primaryCta.label}
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

            {/* Layout only: fields are disabled and nothing is submitted. */}
            <form
              aria-labelledby="inquiry-form-title"
              className="rounded-lg border border-neutral-300 bg-white p-6"
            >
              <h3 id="inquiry-form-title" className="text-lg font-semibold">
                Short inquiry form
              </h3>
              <p className="mt-2 text-sm text-neutral-700">
                This form is not active yet. For now, use the contact page, email,
                or phone.
              </p>
              <fieldset disabled className="mt-4 space-y-4 opacity-70">
                <legend className="sr-only">Inquiry details</legend>
                <div>
                  <label htmlFor="inq-firm" className="block text-sm font-semibold">
                    Firm name and profession
                  </label>
                  <input id="inq-firm" type="text" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="inq-bottleneck" className="block text-sm font-semibold">
                    Where do inquiries slow down today?
                  </label>
                  <textarea id="inq-bottleneck" rows={3} className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="inq-software" className="block text-sm font-semibold">
                    Software you already use
                  </label>
                  <input id="inq-software" type="text" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="inq-method" className="block text-sm font-semibold">
                    Preferred contact method
                  </label>
                  <select id="inq-method" className={fieldClass} defaultValue="">
                    <option value="">Choose one</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone call</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="inq-contact" className="block text-sm font-semibold">
                    Email address or phone number
                  </label>
                  <input id="inq-contact" type="text" className={fieldClass} />
                </div>
                <p className="text-sm text-neutral-700">
                  We use these details only to respond to your inquiry. Marketing
                  messages are separate and require their own permission. Submitting
                  a phone number does not authorize automated marketing texts or calls.
                </p>
                <div className="flex items-start gap-3">
                  <input id="inq-permission" type="checkbox" className="mt-1 h-4 w-4" />
                  <label htmlFor="inq-permission" className="text-sm">
                    I agree that OKIKO HIGH may use these details to respond to this
                    inquiry.
                  </label>
                </div>
                <button
                  type="button"
                  className="font-heading min-h-11 rounded-md bg-neutral-200 px-5 py-2.5 text-base font-semibold text-neutral-700"
                >
                  Send inquiry
                </button>
              </fieldset>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
