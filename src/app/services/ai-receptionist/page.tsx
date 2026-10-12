import type { Metadata } from "next";
import Link from "next/link";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { CallFlowDiagram } from "@/components/illustrations/CallFlowDiagram";
import { CallRoutingIllustration } from "@/components/illustrations/CallRoutingIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon } from "@/components/ui/icons";
import { SourceLinks } from "@/components/ui/SourceLinks";
import {
  aiReceptionistPage as page,
  bookingChecks,
  bookingOutcomes,
  boundaryColumns,
  callProblems,
  capabilities,
  comparisonRows,
  faqs,
  handoffPaths,
  keepDistinct,
  measures,
  notAssumed,
  processSteps,
  routingWarning,
  sampleCall,
  sampleOutcome,
  sources,
  totalCostItems,
} from "@/content/services/ai-receptionist";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
} from "@/lib/schema";

// The owner approved indexing this page on 2026-10-11, so it is indexable and
// listed in src/app/sitemap.ts. docs/01 still lists ai receptionist availability,
// scope, and pricing as TBD, and no Service node is emitted until those are
// confirmed (docs/07). Keep the copy free of availability, price, and results claims.
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);

// No Service node until availability and scope are confirmed (docs/07). Verified
// facts only: no prices, ratings, areaServed, address, or LocalBusiness
// properties. Every FAQ node below matches the visible FAQ section.
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
    { name: "Services", path: "/services" },
    { name: "AI Receptionist", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

const contactButton =
  "font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:brightness-95 hover:shadow-md motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0";

const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;

function Cta({ className = "" }: { className?: string }) {
  return (
    <div className={`mt-8 ${className}`}>
      <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "AI Receptionist" },
        ]}
      />

      <div className="mt-8 space-y-16">
        {/* Hero */}
        <header className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="hero-in-h1 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              An AI receptionist answers inbound calls, collects the details your
              team needs, and completes approved tasks such as booking an
              appointment or routing a caller to a person. It fits overflow,
              after-hours, and routine calls best, and every caller gets a clear
              next step.
            </p>
            <Cta className="hero-in hero-delay-2" />
            <p className="hero-in hero-delay-2 mt-4 max-w-2xl text-sm text-neutral-600">
              Tell us how calls reach you today, what you want handled, and which
              calendar or systems you use. How an assistant is set up depends on
              your call flow and the systems it connects to.
            </p>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <CallFlowDiagram />
          </figure>
        </header>

        {/* 1. Service scope */}
        <PageSection
          id="scope"
          heading="What an AI Receptionist Can Handle"
          intro={
            <>
              <p>
                An AI receptionist is a phone-based assistant. It uses speech
                recognition, conversational AI, and connected business tools to
                handle incoming calls: answering approved questions, collecting
                contact details, checking appointment availability, transferring
                calls, and triggering follow-up.
              </p>
              <p>
                Which of these apply to you depends on your call flow and the
                systems the assistant connects to. None of them is automatic.
              </p>
            </>
          }
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <li key={item.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <IconCardHeading icon={item.icon} title={item.title} />
                <p className="mt-3 text-neutral-700">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border border-neutral-200 p-5">
            <IconCardHeading icon="minus" tone="muted" title="Not assumed" />
            <p className="mt-3 text-sm text-neutral-600">
              Included only if your written scope says so.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800 md:columns-2 md:gap-8">
              {notAssumed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <SourceLinks label="Platform documentation" sources={[sources.highlevelVoice]} />
          <Cta />
        </PageSection>

        {/* 2. Demonstration */}
        <PageSection
          id="demonstration"
          heading="See How a Call Could Work"
          muted
          intro={
            <p>
              Claims about voice quality are easy to make and hard to judge, so
              here is a scripted walk-through of a single call, including the
              parts that do not go perfectly. It is an illustrative script with a
              fictional caller. It is not a recording and it is not a client
              result.
            </p>
          }
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <ol className="space-y-4">
              {sampleCall.map((turn, index) => (
                <li key={index} className="rounded-lg border border-neutral-200 bg-white p-4">
                  <p className="text-sm font-semibold text-brand-blue-strong">{turn.speaker}</p>
                  <p className="mt-1 text-neutral-900">&ldquo;{turn.line}&rdquo;</p>
                  <p className="mt-2 text-sm text-neutral-600">{turn.note}</p>
                </li>
              ))}
            </ol>
            <div className="self-start rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="text-lg font-semibold">{sampleOutcome.heading}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {sampleOutcome.rows.map((row) => (
                  <div key={row.label}>
                    <dt className="font-semibold text-neutral-900">{row.label}</dt>
                    <dd className="text-neutral-700">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-neutral-600">
                The point of a call is the action that follows it, so a good demo
                pairs the conversation with its result, and says plainly when an
                action failed or needs a person to confirm.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-neutral-700">
            Human transfers cannot be validated with a browser-based test call, so
            transfer behavior is tested on real phone connections.
          </p>
          <SourceLinks sources={[sources.highlevelVoice]} />
        </PageSection>

        {/* 3. Business problem */}
        <PageSection
          id="problem"
          heading="What Happens After the Phone Rings Matters"
          intro={
            <p>
              Total calls and qualified opportunities are different numbers. A
              missed call, an incomplete intake, and a callback that never happens
              are three different problems, and each needs a different fix.
              Measuring your own call outcomes comes before choosing a tool.
            </p>
          }
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <figure className="self-start rounded-lg border-2 border-brand-blue bg-surface-muted p-6">
              <p className="font-heading text-5xl font-extrabold tracking-tight">52%</p>
              <figcaption className="mt-3 text-neutral-800">
                of home-services calls were answered by a person in Invoca&apos;s
                2026 benchmark, rising to 65% for calls longer than 15 seconds.
              </figcaption>
              <p className="mt-4 text-sm text-neutral-700">
                Method note: a vendor-platform sample of home-services calls, not a
                census of small businesses and not a benchmark for every industry.
                It does not mean the other calls were lost leads.
              </p>
              <SourceLinks sources={[sources.invocaReport]} />
            </figure>
            <ul className="grid gap-4 sm:grid-cols-2">
              {callProblems.map((item) => (
                <li key={item.heading} className="rounded-lg border border-neutral-200 p-5">
                  <IconCardHeading icon={item.icon} title={item.heading} />
                  <p className="mt-3 text-neutral-700">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 max-w-3xl text-neutral-700">
            We do not put a universal dollar value on a missed call, because the
            value of a call differs by industry, job type, and season. Your own call
            logs and job values are the right basis for the business case.
          </p>
        </PageSection>

        {/* 4. Workflow and implementation */}
        <PageSection
          id="workflow"
          heading="Connect Answering to Booking, Routing, and Follow-Up"
          muted
          intro={
            <p>
              The voice is only part of the work. What matters just as much is
              the configured workflow behind it: what the assistant may say, what it
              collects, what it may do, and who owns what happens next.
            </p>
          }
        >
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <li key={step.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <p className="text-sm font-semibold text-brand-blue-strong">Step {index + 1}</p>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-neutral-800">{step.body}</p>
                <p className="mt-3 text-sm text-neutral-600">
                  <span className="font-semibold">From you:</span> {step.clientInput}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-neutral-700">{routingWarning}</p>
          <SourceLinks sources={[sources.highlevelVoice]} />
          <Cta />
        </PageSection>

        {/* 5. Booking and integrations */}
        <PageSection
          id="booking"
          heading="Booking That Follows Your Business Rules"
          intro={
            <p>
              Phone booking needs a supported, connected calendar. Compatibility
              with your calendar and systems is confirmed when we scope your
              project, not assumed.
            </p>
          }
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">What gets validated before live booking</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
                {bookingChecks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">A booking and a request are different</h3>
              <div className="mt-3 space-y-4">
                {bookingOutcomes.map((item) => (
                  <div key={item.heading} className="rounded-lg border border-neutral-200 p-5">
                    <IconCardHeading icon={item.icon} title={item.heading} as="h4" />
                    <p className="mt-3 text-neutral-700">{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                Illustrative: not a client calendar.
              </p>
            </div>
          </div>
          <SourceLinks sources={[sources.highlevelBooking]} />
        </PageSection>

        {/* 6. Human handoff and urgency */}
        <PageSection
          id="handoff"
          heading="When a Caller Needs a Person"
          muted
          intro={
            <p>
              A configured transfer number does not mean someone is available. The
              workflow names who receives a transfer, what happens when they do not
              answer, and who owns the callback. Those arrangements are set in your
              scope.
            </p>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                What the assistant does and does not do in four kinds of call
              </caption>
              <thead>
                <tr className="border-b border-neutral-300">
                  <th scope="col" className="py-3 pr-4 font-semibold">If the caller...</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">The assistant</th>
                  <th scope="col" className="py-3 font-semibold">It does not</th>
                </tr>
              </thead>
              <tbody>
                {handoffPaths.map((row) => (
                  <tr key={row.situation} className="border-b border-neutral-200 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold">{row.situation}</th>
                    <td className="py-3 pr-4 text-neutral-800">{row.does}</td>
                    <td className="py-3 text-neutral-800">{row.doesNot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-neutral-700">
            Urgency criteria and emergency wording are written with you and need your
            approval and appropriate professional review. For critical alerts, what
            counts is whether a person acknowledged it, not only whether a
            notification was sent. This page does not describe an emergency service.
          </p>
          <SourceLinks sources={[sources.highlevelVoice]} />
        </PageSection>

        {/* 7. Honest comparison */}
        <PageSection
          id="comparison"
          heading="AI, Voicemail, or Human Answering?"
          intro={
            <p>
              The right choice depends on what your calls need. A human receptionist
              often does more than answer the phone, and some businesses are better
              served by a person on the line. Keep an accessible route to a human
              wherever your calls call for one.
            </p>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                How voicemail, an AI receptionist, a human answering service, and an
                in-house receptionist compare
              </caption>
              <thead>
                <tr className="border-b border-neutral-300">
                  <th scope="col" className="py-3 pr-4 font-semibold">Option</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">During the call</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Coverage</th>
                  <th scope="col" className="py-3 font-semibold">How it is usually priced</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.option} className="border-b border-neutral-200 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold">{row.option}</th>
                    <td className="py-3 pr-4 text-neutral-800">{row.handles}</td>
                    <td className="py-3 pr-4 text-neutral-800">{row.coverage}</td>
                    <td className="py-3 text-neutral-800">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Compare total cost, not just the plan price</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
                {totalCostItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="self-center text-neutral-700">
              Providers bill in different ways: per call, per minute, per customer
              served, or as a subscription plus usage. We do not publish OKIKO HIGH
              pricing on this page. Pricing and service packages have not been
              confirmed.
            </p>
          </div>
          <SourceLinks
            label="Billing-model examples"
            sources={[sources.smithPricing, sources.rubyPricing, sources.highlevelPricing]}
          />
        </PageSection>

        {/* 8. Reliability, transparency, and privacy */}
        <PageSection
          id="boundaries"
          heading="Clear Boundaries Before Calls Go Live"
          muted
          intro={
            <>
              <p>
                Callers should be told they are speaking with AI. Recording and
                transcription are a separate matter with their own consent
                requirements, and an AI disclosure does not replace recording
                consent.
              </p>
              <p>
                This page does not claim that any workflow is HIPAA compliant. Health
                information needs a separate review of the whole processing chain
                before it is handled.
              </p>
            </>
          }
        >
          <div className="grid gap-6 md:grid-cols-3">
            {boundaryColumns.map((column) => (
              <div key={column.heading} className="rounded-lg border border-neutral-200 bg-white p-5">
                <IconCardHeading icon={column.icon} tone={column.tone} title={column.heading} />
                <p className="mt-3 text-sm text-neutral-600">{column.note}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-neutral-700">
            Recording rules vary by jurisdiction and by the circumstances of the call.
            The FCC has ruled that AI-generated voices fall under the TCPA&apos;s
            artificial or prerecorded voice rules. That ruling concerns covered
            outbound calls and is not a ban on answering inbound calls with AI, but
            callbacks and other outbound workflows need their own review.
          </p>
          <SourceLinks
            sources={[sources.euAiTransparency, sources.rcfp, sources.fccRuling]}
          />
        </PageSection>

        {/* 9. Measurement and proof */}
        <PageSection
          id="measurement"
          heading="Measure the Workflow, Not Just the Calls Answered"
          intro={
            <>
              <p>
                Success starts with a baseline taken before deployment, then a
                limited pilot, reviewed against the measures below. Account for
                seasonality and capacity before crediting any change to the
                assistant.
              </p>
              <p>
                We publish no performance figures on this page because no client
                results are approved for publication.
              </p>
            </>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                What a call-handling report tracks and how each measure is counted
              </caption>
              <thead>
                <tr className="border-b border-neutral-300">
                  <th scope="col" className="py-3 pr-4 font-semibold">Measure</th>
                  <th scope="col" className="py-3 font-semibold">How it is counted</th>
                </tr>
              </thead>
              <tbody>
                {measures.map((row) => (
                  <tr key={row.measure} className="border-b border-neutral-200 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold">{row.measure}</th>
                    <td className="py-3 text-neutral-800">{row.counted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-neutral-600">
            Example of what a report tracks. It shows definitions only, with no
            figures.
          </p>
          <div className="mt-8 rounded-lg border border-brand-blue/30 bg-surface-muted p-5">
            <h3 className="text-lg font-semibold">Keep these four numbers separate</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {keepDistinct.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-neutral-700">
              Answered calls are not bookings, bookings are not completed jobs, and
              completed jobs are not revenue. Benchmarks from other businesses are
              context, not a target for any assistant.
            </p>
          </div>
        </PageSection>

        {/* Connected pages */}
        <PageSection
          id="connected"
          heading="Calls Are One Step in the Customer Journey"
          muted
          intro={
            <p>
              What a caller does before and after the phone rings also shapes the
              result. Where your call-to-action sits and how booking works on your
              site are covered in{" "}
              <Link
                href="/services/website-design"
                className="font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink"
              >
                website design and booking journeys
              </Link>
              . Any text follow-up after a call needs the caller&apos;s consent.
            </p>
          }
        >
          <p>
            <Link
              href="/services"
              className="font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink"
            >
              See all OKIKO HIGH services
            </Link>
          </p>
        </PageSection>

        {/* 10. FAQ and conversion */}
        <FaqSection id="faq" heading="Questions About AI Call Handling" faqs={faqs} />

        <section
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                How Do Calls Reach You Today?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                Tell us how you handle calls now, the coverage you want, what the
                assistant should book or route, the systems you already use, and when a
                caller must reach a person. We use what you send to respond to your
                inquiry; see our{" "}
                <Link href="/privacy-policy" className="text-brand-blue-strong underline underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
              <Cta />
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
              <CallRoutingIllustration />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
