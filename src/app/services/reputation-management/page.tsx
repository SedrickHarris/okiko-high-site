import type { Metadata } from "next";
import Link from "next/link";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { ReviewGapMapIllustration } from "@/components/illustrations/ReviewGapMapIllustration";
import { ReviewWorkflowIllustration } from "@/components/illustrations/ReviewWorkflowIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon } from "@/components/ui/icons";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { SourceLinks } from "@/components/ui/SourceLinks";
import {
  alternativeRows,
  costFactors,
  escalationList,
  faqs,
  homeServiceCases,
  likelyUseful,
  loopStages,
  messagingNotes,
  metricRows,
  notPromised,
  ownerQuestions,
  platformRows,
  realisticAims,
  replyPrinciples,
  reportSteps,
  reviewRulesNote,
  reputationManagementPage as page,
  sampleEmail,
  sampleReply,
  sampleSms,
  sampleTimeline,
  scopeColumns,
  simplerMayDo,
  sources,
  surveyFindings,
  timingRules,
  willNotDo,
  workflowSteps,
} from "@/content/services/reputation-management";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
  serviceNode,
} from "@/lib/schema";

// Availability confirmed by the owner (2026-10-11): indexable and listed in
// src/app/sitemap.ts.
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);

// Verified facts only (docs/07): no prices, ratings, areaServed, address, or
// LocalBusiness properties. Every FAQ node matches the visible FAQ section.
const structuredData = graph([
  organizationNode(),
  {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.h1,
    description: page.description,
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    mainEntity: { "@id": `${pageUrl}#service` },
  },
  serviceNode(pageUrl, {
    name: "Review management for local businesses",
    serviceType: page.serviceType,
    description: page.description,
  }),
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Reputation Management", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

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
          { name: "Reputation Management" },
        ]}
      />

      <div className="mt-8 space-y-16">
        {/* 1. Hero: outcome and scope */}
        <header className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="hero-in-h1 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Review management helps a business request genuine customer feedback,
              keep track of public reviews, and reply consistently, without
              manipulating what customers say. OKIKO HIGH builds the workflow around
              your completed jobs, the platforms you use, and a named person who owns
              the difficult replies.
            </p>
            <div className="hero-in hero-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
              <ButtonLink href={page.secondaryCta.href} variant="secondary">
                {page.secondaryCta.label}
              </ButtonLink>
            </div>
            <p className="hero-in hero-delay-2 mt-4 max-w-2xl text-sm text-neutral-600">
              What is included depends on your scope, your platforms, and your
              approvals.
              <br />
              Tell us how you ask for reviews today and who replies, and we can look
              at where the gaps are.
            </p>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <ReviewWorkflowIllustration />
          </figure>
        </header>

        {/* 2. Owner questions */}
        <PageSection
          id="questions"
          heading="The Questions Owners Ask About Reviews"
          intro={
            <p>
              Most conversations about review management start with the same three
              questions.
              <br />
              This page answers them plainly, including where the honest answer is
              that nobody can promise an outcome.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-3">
            {ownerQuestions.map((item) => (
              <li key={item.title} className="rounded-lg border border-neutral-200 p-5">
                <IconCardHeading icon={item.icon} title={item.title} />
                <p className="mt-3 text-neutral-700">{item.body}</p>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* 3. Buyer problems, without exaggerated loss claims */}
        <PageSection
          id="buyers"
          heading="What Local Buyers Report About Reviews"
          muted
          intro={
            <p>
              Reviews are part of how many customers decide whom to contact.
              <br />
              These are the findings that matter most for a local business, taken
              from one survey.
            </p>
          }
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {surveyFindings.map((item) => (
              <li key={item.stat} className="rounded-lg border border-neutral-200 bg-white p-5">
                <p className="font-heading text-4xl font-extrabold tracking-tight">{item.stat}</p>
                <p className="mt-2 text-neutral-800">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <p className="rounded-lg border border-brand-blue/30 bg-white p-4 text-neutral-700">
              <strong className="text-brand-ink">Read these carefully:</strong> they
              are stated attitudes from 1,002 US adults in BrightLocal&apos;s 2026
              survey. They are not lost revenue, a universal threshold, or proof that
              reviews cause a purchase.
            </p>
            <p className="rounded-lg border border-brand-blue/30 bg-white p-4 text-neutral-700">
              <strong className="text-brand-ink">Reviews and local ranking:</strong>{" "}
              Google says more reviews and positive ratings can help local ranking,
              but relevance and distance also matter. No review count guarantees a
              position.
            </p>
          </div>
          <SourceLinks sources={[sources.brightLocal, sources.googleRanking]} />
        </PageSection>

        {/* 4. Workflow */}
        <PageSection
          id="how-it-works"
          heading="From a Completed Job to a Useful Review Process"
          intro={
            <p>
              The aim is a loop: request, monitor, respond, and improve.
              <br />
              Each step has an owner, so reviews do not depend on someone
              remembering.
            </p>
          }
        >
          <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            {loopStages.map((stage, index) => (
              <li key={stage.label} className="flex items-center gap-2">
                <span className="flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-semibold">
                  <span className="text-brand-blue-strong">
                    <NamedIcon name={stage.icon} className="h-5 w-5" />
                  </span>
                  {stage.label}
                </span>
                {index < loopStages.length - 1 && (
                  <span aria-hidden="true" className="text-neutral-500">
                    &rarr;
                  </span>
                )}
              </li>
            ))}
          </ol>

          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step, index) => (
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
          <p className="mt-8 max-w-3xl text-neutral-700">
            Review tools document message templates and workflow triggers, but a
            software feature does not set our scope. Which triggers and channels apply
            to you is tested on your own account before launch.
          </p>
          <SourceLinks sources={[sources.highLevelRequests, sources.highLevelCustomize]} />
          <p className="mt-1 text-sm text-neutral-600">
            This describes what such platforms document, not OKIKO HIGH results.
          </p>
        </PageSection>

        {/* 5. Included and excluded, plus cost */}
        <PageSection
          id="scope"
          heading="What Is Included, What Is Not, and What Affects Cost"
          muted
          intro={
            <div className="space-y-3">
              <p className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-brand-blue-strong">
                  <NamedIcon name="mail" className="h-5 w-5" />
                </span>
                <span className="pt-1">
                  A review tool sends and collects.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-brand-blue-strong">
                  <NamedIcon name="improve" className="h-5 w-5" />
                </span>
                <span className="pt-1">
                  A managed setup adds the work around it: setup, testing, accountable monitoring, thoughtful replies, and follow-through.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-brand-blue-strong">
                  <NamedIcon name="lead" className="h-5 w-5" />
                </span>
                <span className="pt-1">
                  Your written scope says which parts you are getting.
                </span>
              </p>
            </div>
          }
        >
          <div className="grid gap-6 md:grid-cols-3">
            {scopeColumns.map((column) => (
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

          <h3 className="mt-10 text-xl font-semibold">What affects the cost</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {costFactors.map((factor) => (
              <div key={factor.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-muted text-brand-blue-strong">
                  <NamedIcon name={factor.icon} className="h-6 w-6" />
                </span>
                <h4 className="mt-3 text-base font-semibold">{factor.title}</h4>
                <p className="mt-2 text-neutral-800">{factor.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-neutral-700">
            We do not publish a price on this page. Software list prices are not the
            cost of a managed service, so request a scope and we will identify what
            drives yours.
          </p>
          <Cta />
        </PageSection>

        {/* 6. Honest reviews and platform policies */}
        <PageSection
          id="honest-reviews"
          heading="Honest Reviews and Platform Rules"
          intro={
            <p>
              Review platforms do not all allow the same things. Asking in a way one
              platform permits can break another platform&apos;s rules, so the
              workflow is built per platform.
            </p>
          }
        >
          <QuickAnswer
            icon="shield"
            lead={reviewRulesNote.lead}
            detail={reviewRulesNote.detail}
            source={reviewRulesNote.source}
          />
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="shield" tone="included" title="What we will not do" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {willNotDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                <caption className="sr-only">
                  What each review platform allows when asking customers for reviews, and how we handle it
                </caption>
                <thead>
                  <tr className="border-b border-neutral-300">
                    <th scope="col" className="py-3 pr-4 font-semibold">Platform</th>
                    <th scope="col" className="py-3 pr-4 font-semibold">What its rules say</th>
                    <th scope="col" className="py-3 font-semibold">How we handle it</th>
                  </tr>
                </thead>
                <tbody>
                  {platformRows.map((row) => (
                    <tr key={row.platform} className="border-b border-neutral-200 align-top">
                      <th scope="row" className="py-3 pr-4 font-semibold">{row.platform}</th>
                      <td className="py-3 pr-4 text-neutral-800">{row.rule}</td>
                      <td className="py-3 text-neutral-800">{row.handling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <SourceLinks
            label="Platform source"
            sources={[sources.googlePolicy, sources.yelp, sources.angiFaq]}
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-5">
              <h3 className="text-lg font-semibold">The FTC review rule</h3>
              <p className="mt-3 text-neutral-800">
                The FTC&apos;s Consumer Reviews and Testimonials Rule took effect on
                October 21, 2024. It covers fake reviews, incentives tied to positive
                or negative sentiment, and certain suppression practices. Agencies and
                reputation-management firms can be liable alongside businesses.
              </p>
              <p className="mt-3 text-neutral-800">
                Asking only satisfied customers is prohibited by Google and can raise
                FTC Act concerns, which is why eligibility is based on a completed
                job and not on a satisfaction score.
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                This is general information, not legal advice.
              </p>
              <SourceLinks sources={[sources.ftcRule]} />
            </div>
            <div className="rounded-lg border border-neutral-200 p-5">
              <h3 className="text-lg font-semibold">Consent, privacy, and worldwide delivery</h3>
              <div className="mt-3 space-y-4">
                {messagingNotes.map((note) => (
                  <div key={note.title}>
                    <h4 className="text-base font-semibold">{note.title}</h4>
                    <p className="mt-1 text-neutral-800">{note.body}</p>
                  </div>
                ))}
              </div>
              <SourceLinks sources={[sources.fcc, sources.canSpam]} />
            </div>
          </div>
        </PageSection>

        {/* 7. Human approval, escalation, and reporting */}
        <PageSection
          id="approval"
          heading="Human Approval, Escalation, and Reporting"
          muted
          intro={
            <p>
              A reply is public and permanent in practice. The workflow decides ahead
              of time who writes it, who approves it, and who deals with the cases that
              should never be handled by a template.
            </p>
          }
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="check" tone="optional" title="Approval rules" />
              <p className="mt-3 text-neutral-800">
                Your scope sets which replies are drafted for you to approve and which
                are published directly. Critical or sensitive reviews can be set to
                need your approval first.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="headset" tone="optional" title="Goes to a named person" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {escalationList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="message" tone="optional" title="AI-assisted drafts" />
              <p className="mt-3 text-neutral-800">
                If AI helps draft a reply, a person still checks accuracy, tone,
                privacy, and any sensitive allegation before it is published.
                Automated replies are especially risky where patient information or
                legal-client confidentiality is involved.
              </p>
              <SourceLinks sources={[sources.adaReviews]} />
            </div>
          </div>

          <h3 className="mt-10 text-xl font-semibold">What a good reply does</h3>
          <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {replyPrinciples.map((item) => (
              <li key={item.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <IconCardHeading icon={item.icon} title={item.title} />
                <p className="mt-3 text-neutral-800">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 max-w-3xl">
            <p className="text-sm text-neutral-600">
              Sample reply shape for a critical review. Real replies refer to what the
              reviewer actually said:
            </p>
            <p className="mt-1 rounded-lg border border-brand-blue/30 bg-white px-4 py-3 text-neutral-800">
              {sampleReply}
            </p>
            <p className="mt-3 text-sm text-neutral-600">
              BrightLocal&apos;s survey found that generic replies put many buyers
              off, so a template is a starting point, not a finished reply.
            </p>
            <SourceLinks sources={[sources.brightLocal]} />
          </div>

          <h3 className="mt-10 text-xl font-semibold">Reporting a review that breaks the rules</h3>
          <p className="mt-3 max-w-3xl text-neutral-700">
            Only a review that violates a platform&apos;s policies can be reported for
            removal, and reporting does not guarantee success. This is the Google
            process we would follow.
          </p>
          <ol className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reportSteps.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-lg border border-neutral-200 bg-white p-4">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-strong text-xs font-bold text-white"
                >
                  {index + 1}
                </span>
                <span className="text-neutral-800">{step}</span>
              </li>
            ))}
          </ol>
          <SourceLinks sources={[sources.googleReport, sources.googlePolicy]} />
        </PageSection>

        {/* 8. Home-service workflow examples */}
        <PageSection
          id="home-services"
          heading="Review Workflows for Home-Service Businesses"
          intro={
            <p>
              The right moment to ask depends on the kind of job. These are the three
              patterns we start from for home-service businesses.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-3">
            {homeServiceCases.map((item) => (
              <li key={item.title} className="rounded-lg border border-neutral-200 p-5">
                <IconCardHeading icon={item.icon} title={item.title} />
                <p className="mt-3 text-neutral-700">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg border border-neutral-200 p-5">
            <h3 className="text-lg font-semibold">Rules that apply to every pattern</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
              {timingRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
          <SourceLinks sources={[sources.angiAsk, sources.googlePolicy]} />
        </PageSection>

        {/* 9. Metrics and realistic expectations, and proof */}
        <PageSection
          id="measurement"
          heading="How We Would Measure It, and What We Do Not Promise"
          muted
          intro={
            <p>
              Reviews are one signal among several. We start with a baseline, then
              report each measure separately, so one number does not hide another.
            </p>
          }
        >
          <ol className="mb-8 grid gap-4 sm:grid-cols-3" aria-label="How measurement works, in order">
            {[
              ["Baseline", "Record today's request, review, and reply habits before changing anything."],
              ["Controlled pilot", "Start small so we can see what changed and what did not."],
              ["Monthly report", "Report each measure separately, with its limits."],
            ].map(([title, text], i) => (
              <li key={title} className="flex gap-3 rounded-lg border border-neutral-200 bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue-strong text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-heading font-semibold text-brand-ink">{title}</span>
                  <span className="mt-1 block text-sm text-neutral-700">{text}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                What we track for review management, how we track it, and the limits of each measure
              </caption>
              <thead>
                <tr className="border-b border-neutral-300">
                  <th scope="col" className="py-3 pr-4 font-semibold">What we track</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">How</th>
                  <th scope="col" className="py-3 font-semibold">Limit</th>
                </tr>
              </thead>
              <tbody>
                {metricRows.map((row) => (
                  <tr key={row.metric} className="border-b border-neutral-200 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold">
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-brand-blue-strong">
                          <NamedIcon name={row.icon} className="h-5 w-5" />
                        </span>
                        {row.metric}
                      </span>
                    </th>
                    <td className="py-3 pr-4 text-neutral-800">{row.how}</td>
                    <td className="py-3 text-neutral-800">{row.boundary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-lg border border-brand-blue/30 bg-white p-5 text-neutral-700">
            <p className="sr-only">
              Published-review yield = attributable published reviews divided by delivered requests.
            </p>
            <div aria-hidden="true" className="flex flex-wrap items-center gap-3 font-heading text-sm font-semibold text-brand-ink">
              <span className="rounded-full border border-neutral-300 bg-surface-muted px-4 py-2">Attributable published reviews</span>
              <span className="text-lg">&divide;</span>
              <span className="rounded-full border border-neutral-300 bg-surface-muted px-4 py-2">Delivered requests</span>
              <span className="text-lg">=</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-brand-ink">
                <NamedIcon name="analytics" className="h-5 w-5" />
                Published-review yield
              </span>
            </div>
            <p className="mt-4 flex gap-3">
              <span className="mt-0.5 shrink-0 text-brand-blue-strong"><NamedIcon name="flag" className="h-5 w-5" /></span>
              <span>
                When individual reviews cannot be tied to a request, we call the result
                an approximate incremental yield, not an exact conversion rate. A link
                click is not a completed review, so clicks and published reviews are
                tracked separately.
              </span>
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="check" tone="included" title="What we aim for" />
              <ul className="mt-4 space-y-3 text-neutral-800">
                {realisticAims.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 text-brand-blue-strong"><NamedIcon name="check" className="h-5 w-5" /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-dashed border-neutral-400 bg-white p-5">
              <IconCardHeading icon="minus" tone="negative" title="What we do not promise" />
              <ul className="mt-4 space-y-3 text-neutral-800">
                {notPromised.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 text-neutral-600"><NamedIcon name="minus" className="h-5 w-5" /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 max-w-3xl rounded-lg border border-brand-blue/30 bg-white p-4 text-neutral-700">
            <strong className="text-brand-ink">About proof on this page:</strong> it
            contains no client results, testimonials, ratings, or review totals. The
            sample workflow below uses a fictional business, and any approved client
            examples will be published only with the client&apos;s permission.
          </p>
          <SourceLinks sources={[sources.googleRanking]} />
        </PageSection>

        {/* 10. Sample workflow (labeled demonstration) */}
        <PageSection
          id="sample-workflow"
          heading="A Sample Review Workflow"
          intro={
            <p>
              This shows the behavior we design for: one neutral request after a
              completed job, a clear opt-out, and a reply that goes through your
              approval rules.
            </p>
          }
        >
          <p className="max-w-3xl rounded-lg border border-brand-blue/30 bg-surface-muted p-4 text-neutral-700">
            Sample workflow and wording for a fictional business. It is not a client
            result, and the final wording is reviewed with you and approved for your
            channel and country.
          </p>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
            <ol className="space-y-4">
              {sampleTimeline.map((item, index) => (
                <li key={item.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                  <p className="text-sm font-semibold text-brand-blue-strong">Moment {index + 1}</p>
                  <div className="mt-1">
                    <IconCardHeading icon={item.icon} title={item.title} />
                  </div>
                  <p className="mt-3 text-neutral-800">{item.body}</p>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-6">
              <figure className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-5">
                <figcaption className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Sample text message - fictional business
                </figcaption>
                <div className="max-w-[92%] self-start rounded-lg border border-brand-blue/30 bg-surface-muted px-3.5 py-2.5 text-neutral-800">
                  {sampleSms}
                </div>
              </figure>
              <figure className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-5">
                <figcaption className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Sample email core - fictional business
                </figcaption>
                <div className="rounded-lg bg-neutral-100 px-3.5 py-2.5 text-neutral-800">
                  {sampleEmail}
                </div>
                <p className="text-sm text-neutral-600">
                  Sender details and an opt-out are added. The wording never includes
                  &ldquo;five stars,&rdquo; employee names, required keywords, or a
                  satisfaction-screening step.
                </p>
              </figure>
            </div>
          </div>
          <SourceLinks sources={[sources.googlePolicy, sources.highLevelCustomize]} />
        </PageSection>

        {/* 11. Fit and alternatives */}
        <PageSection
          id="fit"
          heading="Do You Need a Managed Service?"
          muted
          intro={
            <p>
              Often the answer is that you can do this yourself. The real question is
              whether asking, replying, and following up will actually happen
              consistently without a system and an owner.
            </p>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Ways to manage reviews, when each fits, and the main limitation of each
              </caption>
              <thead>
                <tr className="border-b border-neutral-300">
                  <th scope="col" className="py-3 pr-4 font-semibold">Option</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Can fit when</th>
                  <th scope="col" className="py-3 font-semibold">Main limitation</th>
                </tr>
              </thead>
              <tbody>
                {alternativeRows.map((row) => (
                  <tr key={row.option} className="border-b border-neutral-200 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold">{row.option}</th>
                    <td className="py-3 pr-4 text-neutral-800">{row.fits}</td>
                    <td className="py-3 text-neutral-800">{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="check" tone="included" title="Likely useful" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {likelyUseful.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="minus" tone="muted" title="Simpler option may be enough" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {simplerMayDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-neutral-700">
            If you are dealing with damage to your search results or a crisis that goes
            beyond reviews, a broader reputation service may be a better fit than this
            one. Review management is deliberately narrow.
          </p>
          <p className="mt-4 max-w-3xl text-neutral-700">
            Reviews also work alongside your website, which can show approved reviews
            and give visitors a clear way to get in touch. See our{" "}
            <Link
              href="/services/website-design"
              className="font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink"
            >
              website design service
            </Link>{" "}
            or{" "}
            <Link
              href="/services"
              className="font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink"
            >
              all OKIKO HIGH services
            </Link>
            .
          </p>
          <Cta />
        </PageSection>

        {/* 12. FAQs and final CTA */}
        <FaqSection id="faq" heading="Review Management Questions, Answered" faqs={faqs} />

        <section
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to Talk Through Your Review Workflow?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                Tell us how you ask for reviews today, which platforms matter to you, and
                who replies. We use that to look at where a simple process would help. We
                use what you send to respond to your inquiry; see our{" "}
                <Link href="/privacy-policy" className="text-brand-blue-strong underline underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
              <Cta />
              <p className="mt-6 text-neutral-700">Prefer to reach out directly?</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:shadow-md motion-safe:transition-[transform,box-shadow,background-color,color] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0 bg-brand-yellow hover:brightness-95"
                >
                  <NamedIcon name="mail" className="h-5 w-5" />
                  {siteConfig.email}
                </a>
                <a
                  href={telHref}
                  className="font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:shadow-md motion-safe:transition-[transform,box-shadow,background-color,color] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0 bg-brand-green hover:brightness-95"
                >
                  <NamedIcon name="phone" className="h-5 w-5" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <ReviewGapMapIllustration />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
