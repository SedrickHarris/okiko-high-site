import type { Metadata } from "next";
import Link from "next/link";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { FollowUpPathsIllustration } from "@/components/illustrations/FollowUpPathsIllustration";
import { FollowUpPhones } from "@/components/illustrations/FollowUpPhones";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon } from "@/components/ui/icons";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { SourceLinks } from "@/components/ui/SourceLinks";
import {
  automated,
  buildStages,
  channelNotes,
  compatibilityChecklist,
  faqs,
  journeySteps,
  metricTiles,
  needsConfirming,
  needsPerson,
  openRatesNote,
  permissionNotes,
  permissionSteps,
  problems,
  smsEmailPage as page,
  sources,
  stopBranches,
  trackList,
  workflowGroups,
} from "@/content/services/sms-email-automation";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
} from "@/lib/schema";

// The owner approved indexing this page on 2026-10-11, so it is indexable and
// listed in src/app/sitemap.ts. docs/01 still lists sms and email automation availability,
// scope, and pricing as TBD, and no Service node is emitted until those are
// confirmed (docs/07). Keep the copy free of availability, price, and results claims.
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);

// No Service node until availability and scope are confirmed (docs/07).
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
    { name: "Text and Email Automation", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

const accents = ["border-t-brand-blue", "border-t-brand-green", "border-t-brand-yellow"] as const;

const contactButton =
  "font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:brightness-95 hover:shadow-md motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0";

const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;

const linkClass = "text-brand-blue-strong underline underline-offset-2";

const tbdBox =
  "mt-6 rounded-lg border-2 border-dashed border-neutral-600 bg-white p-4 text-sm font-medium text-neutral-800";

function Cta() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
      <ButtonLink href="#sample" variant="secondary">
        See a sample follow-up sequence
      </ButtonLink>
    </div>
  );
}

function Callout({ icon, children }: { icon: "message" | "shield"; children: React.ReactNode }) {
  return (
    <div className="mt-6 flex max-w-3xl items-start gap-3.5 rounded-lg border border-brand-blue/30 bg-surface-muted p-4">
      <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-blue text-brand-ink">
        <NamedIcon name={icon} className="h-6 w-6" />
      </span>
      <p className="text-neutral-800">{children}</p>
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
          { name: "Text and Email Automation" },
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
              Text and email automation sends approved messages when a customer
              takes an action or reaches a stage you define, so follow-up does not
              depend on someone remembering every step. OKIKO HIGH connects
              inquiries, quotes, appointments, and appropriate ongoing
              communication, and keeps real conversations connected to a person.
            </p>
            <div className="hero-in hero-delay-2">
              <Cta />
            </div>
            <div className="hero-in hero-delay-2">
              <Callout icon="message">
                What is possible depends on your tools, your contact permissions,
                and where your customers are. Tell us where follow-up slips today,
                and we can look at whether automation, or something simpler, fits.
              </Callout>
            </div>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Example workflow
              </p>
              <ol>
                {journeySteps.map((step, i) => (
                  <li key={step.title}>
                    {i > 0 && <div aria-hidden="true" className="ml-[19px] h-4 w-0.5 bg-neutral-800" />}
                    <IconCardHeading icon={step.icon} tone={step.tone} title={step.title} as="h3" />
                    <p className="ml-[52px] text-sm text-neutral-700">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </figure>
        </header>

        {/* B. Problems */}
        <PageSection
          id="problems"
          heading="When Customer Follow-Up Falls Through the Cracks"
          intro={
            <p>
              The gap is rarely effort. It is that each next step depends on
              someone remembering it. These four problems come up again and again,
              and each has a matching workflow.
            </p>
          }
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, index) => (
              <li
                key={problem.title}
                className={`rounded-lg border border-neutral-200 border-t-4 p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={problem.icon} tone={(["default", "included", "optional"] as const)[index % 3]} title={problem.title} />
                <p className="mt-3 text-neutral-800">{problem.body}</p>
                <p className="mt-4 text-sm text-neutral-600">
                  <span className="font-semibold">Paired workflow:</span>{" "}
                  <a href={problem.anchor} className={linkClass}>{problem.pair}</a>
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-5">
              <p className="text-sm font-semibold text-brand-blue-strong">Qualitative research, not a survey</p>
              <p className="mt-2 text-neutral-800">
                Public small-business discussions describe forgetting to reach out,
                struggling with timing, and keeping track of who has responded. We
                treat these as themes that shaped this page, not as representative
                customer statistics.
              </p>
              <SourceLinks sources={[sources.reddit]} />
            </div>
            <div className="rounded-lg border border-neutral-200 p-5">
              <p className="text-sm font-semibold text-brand-blue-strong">Illustrative arithmetic</p>
              <p className="font-heading mt-1 text-4xl font-extrabold tracking-tight">5 hours</p>
              <p className="mt-2 text-neutral-800">
                100 manual follow-up tasks a month at three minutes each is five
                hours of staff time.
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                The inputs are hypothetical, not an industry benchmark. Your own
                volume and time per task will differ.
              </p>
            </div>
          </div>
        </PageSection>

        {/* C. Workflows */}
        <PageSection
          id="workflows"
          heading="Where Text and Email Automation Can Help"
          muted
          intro={
            <p>
              These examples use home-service jobs, where quotes, missed calls, and
              service visits are common, but the same building blocks apply to other
              local businesses. Each card shows what starts it, why it sends, who
              owns the next step, and when it stops. Timing is set with you and
              tested, not assumed.
            </p>
          }
        >
          {workflowGroups.map((group, groupIndex) => (
            <div key={group.title} id={group.id} className={groupIndex === 0 ? "" : "mt-10"}>
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <div className="mt-4 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, i) => (
                  <details key={item.title} className="group rounded-lg border border-neutral-200 bg-white p-5">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                      <IconCardHeading
                        icon={item.icon}
                        tone={(["default", "included", "optional"] as const)[(groupIndex + i) % 3]}
                        title={item.title}
                      />
                      <span aria-hidden="true" className="text-2xl leading-none text-brand-blue-strong transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <dl className="mt-4 space-y-3 text-sm text-neutral-800">
                      <div><dt className="font-semibold">Starts when</dt><dd>{item.trigger}</dd></div>
                      <div><dt className="font-semibold">Purpose</dt><dd>{item.purpose}</dd></div>
                      <div><dt className="font-semibold">Owner of the next step</dt><dd>{item.owner}</dd></div>
                      <div><dt className="font-semibold">Stops when</dt><dd>{item.exit}</dd></div>
                    </dl>
                    {item.related && (
                      <p className="mt-3 text-sm text-neutral-700">
                        Related:{" "}
                        <Link href={item.related.href} className={linkClass}>{item.related.label}</Link>.
                      </p>
                    )}
                  </details>
                ))}
              </div>
            </div>
          ))}
          <Cta />
          <SourceLinks sources={[sources.missedCall, sources.googleReviewPolicy]} />
          <p className="mt-1 text-sm text-neutral-600">
            HighLevel notes that repeated missed calls can produce repeated
            messages, so we plan duplicate prevention. Google prohibits selectively
            soliciting positive reviews. Platform documentation describes what
            platforms can do, not OKIKO HIGH results.
          </p>
        </PageSection>

        {/* D. Channels */}
        <PageSection
          id="channels"
          heading="Use the Right Channel for the Next Step"
          intro={
            <p>
              Text for brief, time-sensitive moments. Email for estimates,
              preparation details, and longer explanations. Both should run from one
              customer record, so a reply, booking, cancellation, or opt-out changes
              what happens next.
            </p>
          }
        >
          <FollowUpPhones id="sample" />
          <p className="mt-6 rounded-lg border border-brand-blue/30 bg-surface-muted p-4 text-neutral-700">
            Sample messages and sequence for a fictional business. They are not
            client results or a proven deployment. Spacing between steps is set with
            you and tested.
          </p>
          <QuickAnswer
            icon="shield"
            lead={openRatesNote.lead}
            detail={openRatesNote.detail}
            sources={openRatesNote.sources}
          />
          <div className="mt-6 max-w-3xl space-y-6">
            {channelNotes.map((note) => (
              <div key={note.title} className="rounded-lg border border-neutral-200 p-5">
                <IconCardHeading icon={note.icon} tone={note.tone} title={note.title} />
                <p className="mt-3 text-neutral-800">{note.body}</p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* E. Build */}
        <PageSection
          id="build"
          heading="How a Follow-Up Workflow Is Built"
          muted
          intro={
            <p>
              The software sends the messages. The work is deciding who gets which
              message, why, when it stops, and which replies need a person.
            </p>
          }
        >
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {buildStages.map((stage, index) => (
              <li
                key={stage.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <p className="text-sm font-semibold text-brand-blue-strong">Stage {index + 1}</p>
                <div className="mt-2">
                  <IconCardHeading icon={stage.icon} tone={stage.tone} title={stage.title} />
                </div>
                <p className="mt-3 text-neutral-800">{stage.body}</p>
                <p className="mt-3 text-sm text-neutral-600">
                  <span className="font-semibold">From you:</span> {stage.clientInput}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex items-center gap-3 rounded-lg border-2 border-dashed border-neutral-600 bg-white px-5 py-3.5">
            <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-green text-brand-ink">
              <NamedIcon name="check" className="h-6 w-6" />
            </span>
            <p className="text-neutral-800">
              <span className="font-semibold">Testing checkpoint.</span> Nothing goes
              live until delivery, duplicate prevention, opt-outs, replies, bookings,
              and staff handoffs have been tested and reviewed with you.
            </p>
          </div>
          <p className="mt-6 text-neutral-700">
            Website chat can feed the same workflow:{" "}
            <Link href="/services/ai-chatbots" className={linkClass}>
              collect inquiry details through website chat
            </Link>
            , and the pages and forms that start a workflow are covered in{" "}
            <Link href="/services/website-design" className={linkClass}>
              website design for local businesses
            </Link>
            .
          </p>
          <p className={tbdBox}>
            [APPROVED CONFIGURATION SCREENSHOTS AND TEST RECORDS - TBD. Add real,
            redacted examples once approved. No fabricated screenshots.]
          </p>
          <SourceLinks sources={[sources.missedCall, sources.mailchimpJourneys]} />
          <p className="mt-1 text-sm text-neutral-600">
            These show what platforms can do, not what OKIKO HIGH has delivered. Our
            own process is confirmed with you when we scope the project.
          </p>
        </PageSection>

        {/* F. Stop rules */}
        <PageSection
          id="stop"
          heading="Automation Should Know When to Stop"
          intro={
            <p>
              Most follow-up complaints are not about the first message. They are
              about the one that arrives after the customer already replied, booked,
              or said no. Stopping rules are part of the build, not an afterthought.
            </p>
          }
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 rounded-lg bg-brand-blue px-6 py-3.5 text-brand-ink">
              <NamedIcon name="message" className="h-6 w-6" />
              <span className="font-heading text-lg font-bold">
                A message goes out
                <span className="block font-sans text-sm font-medium">
                  Then the workflow watches for what happens
                </span>
              </span>
            </div>
            <div aria-hidden="true" className="h-6 w-0.5 bg-neutral-800" />
            <ul className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stopBranches.map((branch) => (
                <li key={branch.label} className="rounded-lg border border-neutral-200 bg-white p-4">
                  <IconCardHeading icon={branch.icon} tone={branch.tone} title={branch.label} />
                  <p className="mt-3 text-sm text-neutral-800">{branch.action}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="check" tone="included" title="What is automated" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {automated.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="headset" tone="optional" title="What needs a person" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {needsPerson.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="shield" title="Honest about what it is" />
              <p className="mt-3 text-neutral-800">
                Approved templates can sound natural, but they should not pretend a
                person is typing live. Messages should say who is sending them and
                make it easy to reach a person.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="gauge" title="A practical response target" />
              <p className="mt-3 text-neutral-800">
                A reasonable goal is prompt acknowledgment and a substantive human
                response within about five minutes during staffed hours, where
                feasible. That is an operating recommendation, not a guaranteed
                conversion result or an OKIKO HIGH service commitment.
              </p>
            </div>
          </div>
          <p className={tbdBox}>
            [REPLY COVERAGE AND ESCALATION PROCESS - TBD. Owner to confirm whether
            OKIKO HIGH or the client&apos;s team handles replies, and how failures are
            escalated. No implied staffed support until approved.]
          </p>
          <SourceLinks sources={[sources.missedCall]} />
          <p className="mt-1 text-sm text-neutral-600">
            HighLevel warns that repeated missed calls can trigger repeated messages.
            A demonstration of a reply stopping a sequence and creating a staff task
            will be added once approved.
          </p>
        </PageSection>

        {/* G. Measurement */}
        <PageSection
          id="measure"
          heading="Measure Conversations and Completed Actions"
          muted
          intro={
            <p>
              A fast automatic text is not a completed conversation, and a completed
              conversation is not a sale. We report them separately, so activity is
              never mistaken for outcomes.
            </p>
          }
        >
          <div className="rounded-xl border border-neutral-200 border-t-4 border-t-brand-yellow bg-white p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-brand-blue pb-3.5">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="flex gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
                </span>
                <span className="font-heading text-lg font-extrabold tracking-tight">OKIKO HIGH</span>
                <span className="text-sm text-neutral-600">Follow-up report</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Sample layout - no client data, values intentionally blank
              </p>
            </div>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metricTiles.map((tile, index) => (
                <li
                  key={tile.title}
                  className={`rounded-lg border border-neutral-200 border-t-4 p-4 ${accents[index % accents.length]}`}
                >
                  <IconCardHeading icon={tile.icon} tone={tile.tone} title={tile.title} as="h4" />
                  <p className="font-heading mt-2.5 text-3xl font-extrabold text-neutral-500">
                    <span aria-hidden="true">--</span>
                    <span className="sr-only">No data</span>
                  </p>
                  <p className="mt-1 text-sm text-neutral-700">{tile.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="clipboard" title="What we track" />
              <ul className="mt-4 space-y-3 text-neutral-800">
                {trackList.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                        item.tone === "included"
                          ? "bg-brand-green text-brand-ink"
                          : item.tone === "optional"
                            ? "bg-brand-blue text-brand-ink"
                            : "bg-surface-muted text-brand-blue-strong"
                      }`}
                    >
                      <NamedIcon name={item.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <span className="pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="calendar" tone="included" title="Reminder research, in context" />
              <p className="font-heading mt-4 text-4xl font-extrabold tracking-tight">RR 1.14</p>
              <p className="mt-2 text-neutral-800">
                A 2013 Cochrane review of healthcare trials reported better
                appointment attendance with SMS reminders than with no reminders
                (risk ratio 1.14).
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                This is healthcare evidence, not a forecast for home services or any
                specific business.
              </p>
            </div>
          </div>
          <Callout icon="shield">
            <strong className="text-brand-ink">What we do not promise:</strong>{" "}
            bookings, sales, attendance, or inbox placement. Results vary with your
            offer, your season, and how quickly your team replies. No approved OKIKO
            HIGH results are published on this page.
          </Callout>
          <SourceLinks sources={[sources.cochrane]} />
        </PageSection>

        {/* H. Systems */}
        <PageSection
          id="systems"
          heading="Start With the Systems You Already Use"
          intro={
            <p>
              A new platform is not always the answer. We start by looking at what
              you already have, so a new workflow does not duplicate reminders or
              fight your current tools.
            </p>
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="check" tone="included" title="Compatibility checklist" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {compatibilityChecklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border-2 border-dashed border-neutral-600 p-5">
              <IconCardHeading icon="plus" tone="muted" title="What needs confirming" />
              <p className="mt-3 text-sm text-neutral-600">These are agreed with you in writing, not assumed.</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
                {needsConfirming.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="globe" title="Worldwide does not mean everywhere" />
              <p className="mt-3 text-neutral-800">
                OKIKO HIGH serves clients worldwide, but that does not make every
                workflow available or lawful in every country. Consent, privacy,
                sender registration, and number availability are confirmed per
                project.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="integrations" title="Where inquiries come from" />
              <p className="mt-3 text-neutral-800">
                Follow-up works best when every inquiry source feeds it, including
                your website and your Google Business Profile.
              </p>
            </div>
          </div>
          <p className={tbdBox}>
            [PRICING, OWNERSHIP, EXPORT, SUPPORT, CANCELLATION, AND USAGE-LIMIT TERMS
            - TBD. Owner to confirm before launch. No price, &quot;starting at,&quot;
            package, or retainer language until approved. Verified integration list
            also pending.]
          </p>
        </PageSection>

        {/* I. Permission and opt-outs */}
        <PageSection
          id="permission"
          heading="Build Permission and Opt-Outs Into the Workflow"
          muted
          intro={
            <p>
              This is a US-focused overview, not legal advice and not clearance for
              any country. Rules depend on the message purpose, the recipient, and
              the technology, and they change. A program should be reviewed by a
              lawyer before launch.
            </p>
          }
        >
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {permissionSteps.map((step, index) => (
              <li
                key={step.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % 2 === 0 ? 0 : 1]}`}
              >
                <p className="text-sm font-semibold text-brand-blue-strong">Step {index + 1}</p>
                <div className="mt-2">
                  <IconCardHeading icon={step.icon} tone={step.tone} title={step.title} />
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
                  {step.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </li>
            ))}
          </ol>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {permissionNotes.map((note) => (
              <div key={note.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <IconCardHeading icon={note.icon} tone={note.tone} title={note.title} />
                <p className="mt-3 text-neutral-800">{note.body}</p>
              </div>
            ))}
          </div>
          <Callout icon="shield">
            <strong className="text-brand-ink">Page boundaries:</strong> workflow
            scope depends on your systems, permissions, and requirements. Results
            vary. Messaging requirements vary by purpose and recipient location.
            Final consent wording reflects the real workflow and receives legal and
            provider review.
          </Callout>
          <SourceLinks
            sources={[sources.twilio, sources.ctia, sources.canSpam, sources.googleSender, sources.googleReviewPolicy, sources.cfr]}
          />
        </PageSection>

        <FaqSection id="faq" heading="Questions About Text and Email Automation" faqs={faqs} />

        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to Talk Through Your Follow-Up Workflow?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                Tell us where follow-up slips today and what should happen after an
                inquiry, a quote, or an appointment. We use that to look at whether
                automation, or something simpler, fits. We use what you send to
                respond to your inquiry; see our{" "}
                <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>{" "}
                for details.
              </p>
              <div className="mt-8">
                <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
              </div>
              <p className="mt-4 max-w-xl text-sm text-neutral-600">
                Scope, tools, permissions, and who handles replies are confirmed with
                you before any workflow is built. Contacting us is not enrollment in
                promotional messages.
              </p>
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
              <FollowUpPathsIllustration />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
