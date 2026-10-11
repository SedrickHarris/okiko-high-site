import type { Metadata } from "next";
import Link from "next/link";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { ProfileCardIllustration } from "@/components/illustrations/ProfileCardIllustration";
import { ProfileWorkflowIllustration } from "@/components/illustrations/ProfileWorkflowIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon, type IconName } from "@/components/ui/icons";
import { SourceLinks } from "@/components/ui/SourceLinks";
import {
  attributionSetup,
  automationCan,
  automationCannot,
  automationSteps,
  canInfluence,
  cannotControl,
  checklistGroups,
  faqs,
  gbpPage as page,
  measureLevels,
  proofSlots,
  rankingFactors,
  reportsAccountFor,
  scopeColumns,
  setupTypes,
  sources,
  specialCases,
  suspensionAvoid,
  suspensionSteps,
  tellUs,
} from "@/content/services/google-business-profile";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
} from "@/lib/schema";

// GBP optimization and automation availability is TBD in docs/01. Keep the page out
// of search results (and out of the sitemap) until the owner confirms the offering,
// then remove `robots` here and add the route to src/app/sitemap.ts.
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
  robots: { index: false, follow: true },
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
    { name: "Google Business Profile Management", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

const accents = ["border-t-brand-blue", "border-t-brand-green", "border-t-brand-yellow"] as const;
const tones = ["default", "included", "optional"] as const;

const contactButton =
  "font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:brightness-95 hover:shadow-md motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0";

const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;

const linkClass = "text-brand-blue-strong underline underline-offset-2";

const tbdBox =
  "mt-6 rounded-lg border-2 border-dashed border-neutral-600 bg-white p-4 text-sm font-medium text-neutral-800";

function Cta({ secondary = true }: { secondary?: boolean }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
      {secondary && (
        <ButtonLink href="#checklist" variant="secondary">
          See the Profile Review Checklist
        </ButtonLink>
      )}
    </div>
  );
}

function Callout({ icon, children }: { icon: IconName; children: React.ReactNode }) {
  return (
    <div className="mt-6 flex max-w-3xl items-start gap-3.5 rounded-lg border border-brand-blue/30 bg-surface-muted p-4">
      <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-blue text-brand-ink">
        <NamedIcon name={icon} className="h-6 w-6" />
      </span>
      <p className="text-neutral-800">{children}</p>
    </div>
  );
}

function IconList({
  items,
  chipClass,
  icon,
}: {
  items: ReadonlyArray<{ icon: IconName; text: string }>;
  chipClass: string;
  icon?: IconName;
}) {
  return (
    <ul className="mt-4 space-y-3 text-neutral-800">
      {items.map((item) => (
        <li key={item.text} className="flex items-start gap-3">
          <span aria-hidden="true" className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${chipClass}`}>
            <NamedIcon name={icon ?? item.icon} className="h-[18px] w-[18px]" />
          </span>
          <span className="pt-1">{item.text}</span>
        </li>
      ))}
    </ul>
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
          { name: "Google Business Profile Management" },
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
              A well-managed Google Business Profile keeps the information
              customers see on Google Search and Maps accurate, keeps routine
              updates from being neglected, and shows which customer actions the
              profile is producing. OKIKO HIGH builds the work around authorized
              access, approved content, and reporting you can read.
            </p>
            <p className="hero-in hero-delay-1 mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Google provides the Business Profile free.
            </p>
            <div className="hero-in hero-delay-1">
              <Callout icon="tag">
                What you would pay for is agreed labor, tools, maintenance, and
                reporting, not a listing fee.
              </Callout>
            </div>
            <div className="hero-in hero-delay-2">
              <Cta />
            </div>
            <p className="hero-in hero-delay-2 mt-6 max-w-2xl text-sm text-neutral-600">
              Google controls local search results. Rankings and lead outcomes are
              not guaranteed. Available features depend on the profile, business
              category, region, and supported integration.
            </p>
            <div className="hero-in hero-delay-2">
              <SourceLinks sources={[sources.overview, sources.ranking]} />
            </div>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <ProfileWorkflowIllustration />
          </figure>
        </header>

        {/* Scope */}
        <PageSection
          id="scope"
          heading="What Google Business Profile Management Includes"
          intro={
            <p>
              Scope is agreed in writing before work starts. This is the structure
              we propose, with the line between initial work, ongoing work, and
              separately scoped items made explicit so you know what you are paying
              for.
            </p>
          }
        >
          <div className="grid gap-6 md:grid-cols-3">
            {scopeColumns.map((column, index) => (
              <div
                key={column.title}
                className={`rounded-lg border border-neutral-200 border-t-4 p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={column.icon} tone={column.tone} title={column.title} />
                <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                  {column.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-neutral-800">
            <span className="font-semibold">Not part of this service:</span>{" "}
            advertising, legal advice, photography, guaranteed rankings, and
            guaranteed reinstatement. Only Google decides whether a review violates
            its policies and is removed, and honest negative feedback is not
            removable just because it is unfavorable.
          </p>
          <Callout icon="check">
            <strong className="text-brand-ink">Doing it yourself is a real option.</strong>{" "}
            Managing the profile directly through Google works when you have the
            time, accurate information, and someone accountable for maintenance. A
            managed service is worth considering when updates, monitoring, or
            reporting are repeatedly neglected.
          </Callout>
          <SourceLinks sources={[sources.guidelines, sources.mapsContent]} />
        </PageSection>

        {/* Ranking diagnosis */}
        <PageSection
          id="map-pack"
          heading="Why Your Business May Not Appear in the Map Pack"
          muted
          intro={
            <p>
              Google says local results are based mainly on three things.
              Optimization can improve the information Google has about you, but it
              cannot remove geographic limits or buy a better organic placement.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-3">
            {rankingFactors.map((factor, index) => (
              <li
                key={factor.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={factor.icon} tone={factor.tone} title={factor.title} />
                <p className="mt-3 text-neutral-800">{factor.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="check" tone="included" title="What management can influence" />
              <IconList items={canInfluence} chipClass="bg-brand-green text-brand-ink" />
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="minus" tone="muted" title="What it cannot control" />
              <IconList items={cannotControl} chipClass="bg-brand-yellow text-brand-ink" icon="minus" />
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="shield" title="Google guidance versus expert opinion" />
              <p className="mt-3 text-neutral-800">
                The ranking basics above come from Google. The Whitespark 2026 Local
                Search Ranking Factors survey, published November 6, 2025, reflects
                47 experts assessing 187 factors. It is useful for prioritizing
                work, but it is expert opinion, not a Google disclosure or causal
                proof.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="flag" tone="optional" title="Not established ranking guarantees" />
              <p className="mt-3 text-neutral-800">
                Geotagged photos, daily posting, repeating keywords in the
                description, and very large service areas are sometimes sold as
                ranking tactics. We do not present any of them as proven.
              </p>
            </div>
          </div>
          <Cta secondary={false} />
          <SourceLinks sources={[sources.ranking, sources.whitespark]} />
        </PageSection>

        {/* Eligibility */}
        <PageSection
          id="setup"
          heading="The Right Profile Setup for Your Business"
          intro={
            <>
              <p>The way your profile represents your business has to match how you actually operate.</p>
              <p>A wrong setup is one of the common reasons a profile is restricted, so we check it first.</p>
            </>
          }
        >
          <div className="grid gap-6 md:grid-cols-3">
            {setupTypes.map((type, index) => (
              <div
                key={type.title}
                className={`rounded-lg border border-neutral-200 border-t-4 p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={type.icon} tone={type.tone} title={type.title} />
                <p className="mt-3 text-neutral-800">{type.body}</p>
              </div>
            ))}
            <div className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-yellow p-5">
              <IconCardHeading icon="globe" tone="optional" title="Multiple locations" />
              <p className="mt-3 text-neutral-800">Each profile must represent an eligible actual location.</p>
              <p className="mt-3 text-neutral-800">
                Serving more cities does not automatically justify more profiles,
                and virtual offices and mailbox addresses are not eligible.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-neutral-200 p-5">
            <IconCardHeading icon="search" tone="muted" title="Cases that need individual assessment" />
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
              {specialCases.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <p className="mt-4 text-sm text-neutral-600">
            These are eligibility explanations from Google&apos;s rules, not claims of
            experience in any one industry.
          </p>
          <SourceLinks sources={[sources.guidelines, sources.serviceArea, sources.eligibility]} />
        </PageSection>

        {/* Checklist */}
        <PageSection
          id="checklist"
          heading="What We Review on Your Profile"
          muted
          intro={
            <p>
              The profile review checklist, grouped into information, customer
              actions, and content. Open any item to see the rule behind it.
            </p>
          }
        >
          <div className="grid items-start gap-6 lg:grid-cols-3">
            {checklistGroups.map((group, groupIndex) => (
              <div key={group.title}>
                <IconCardHeading icon={group.icon} tone={group.tone} title={group.title} />
                <div className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <details key={item.title} className="group rounded-lg border border-neutral-200 bg-white p-4">
                      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                        <IconCardHeading
                          icon={item.icon}
                          tone={tones[groupIndex % tones.length]}
                          title={item.title}
                          as="h4"
                        />
                        <span aria-hidden="true" className="text-2xl leading-none text-brand-blue-strong transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-sm text-neutral-800">{item.body}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Cta secondary={false} />
          <p className="mt-4 text-sm text-neutral-600">
            Available features depend on the profile, business category, region,
            and supported integration.
          </p>
          <SourceLinks
            sources={[sources.guidelinesShort, sources.categories, sources.services, sources.attributes, sources.photos, sources.posts, sources.chatCall]}
          />
        </PageSection>

        {/* Automation */}
        <PageSection
          id="automation"
          heading="Practical Automation, With Clear Approvals"
          intro={
            <p>
              Supported tools can schedule approved posts and handle agreed
              administrative tasks. Automation works inside Google&apos;s rules, not
              around them, and a person stays in the loop wherever accuracy and
              judgment matter.
            </p>
          }
        >
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {automationSteps.map((step, index) => (
              <li
                key={step.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <p className="text-sm font-semibold text-brand-blue-strong">Step {index + 1}</p>
                <div className="mt-2">
                  <IconCardHeading icon={step.icon} tone={step.tone} title={step.title} />
                </div>
                <p className="mt-3 text-sm text-neutral-800">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="check" tone="included" title="Automation can" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {automationCan.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="minus" tone="muted" title="Automation cannot" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {automationCannot.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="bell" tone="optional" title="Do weekly posts improve rankings?" />
              <p className="mt-3 text-neutral-800">
                Posts help customers find current information, offers, and events.
                We did not find a verified, universal ranking improvement from
                posting on any particular schedule, so we do not sell posting
                frequency as a ranking tactic.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="shield" title="Two kinds of consent" />
              <p className="mt-3 text-neutral-800">
                Google requires prior, specific, express consent for automated
                profile actions. That is separate from consent to send texts or
                emails or to record calls, which have their own rules.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-neutral-700">
            Customer questions that arrive outside the profile can be handled by
            separate services, such as{" "}
            <Link href="/services/ai-chatbots" className={linkClass}>website chatbot support</Link>{" "}
            and{" "}
            <Link href="/services/ai-receptionist" className={linkClass}>AI receptionist and inquiry handling</Link>.
            Neither replaces the native Google chat that was retired.
          </p>
          <SourceLinks sources={[sources.apiPolicies, sources.qandaChangeLog, sources.highLevelPosts]} />
          <p className="mt-1 text-sm text-neutral-600">
            The HighLevel link describes what that platform documents, not a tested
            OKIKO HIGH configuration.
          </p>
        </PageSection>

        {/* Measurement */}
        <PageSection
          id="measure"
          heading="Measure Customer Actions, Not Just Profile Activity"
          muted
          intro={
            <p>
              Google&apos;s profile numbers count interactions, not outcomes. A call is
              a click on the call button, not a conversation, and a direction
              request is not a visit. Reporting should separate those from
              qualified inquiries and booked work.
            </p>
          }
        >
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {measureLevels.map((level, index) => (
              <li
                key={level.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <p className="text-sm font-semibold text-brand-blue-strong">Level {index + 1}</p>
                <div className="mt-2">
                  <IconCardHeading icon={level.icon} tone={level.tone} title={level.title} />
                </div>
                <p className="mt-3 text-sm text-neutral-800">{level.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-neutral-600">
            This is a reporting model, not a client result. Levels 2 to 4 exist only
            where tracking and customer records are approved and configured.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="integrations" title="How attribution is set up" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {attributionSetup.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="analytics" tone="included" title="What reports account for" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {reportsAccountFor.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <Callout icon="shield">
            Profile interactions are not the same as qualified inquiries,
            appointments, or sales.
          </Callout>
          <p className="mt-6 max-w-3xl text-neutral-700">
            Inquiries only turn into work when the page they land on is clear, which
            is where{" "}
            <Link href="/services/website-design" className={linkClass}>website design and development</Link>{" "}
            fits. Following up on those inquiries by text or email is a separate
            service with its own consent requirements, described under{" "}
            <Link href="/services/sms-email-automation" className={linkClass}>consent-aware follow-up</Link>.
          </p>
          <SourceLinks sources={[sources.metrics, sources.contactGuidelines]} />
        </PageSection>

        {/* Suspension / verification */}
        <PageSection
          id="suspension"
          heading="If Your Profile Needs Verification or Has Been Suspended"
          intro={
            <p>
              A suspension is stressful, and an edit followed by a suspension does
              not prove the edit broke a rule. Legitimate businesses can run into
              verification and enforcement problems too. Start with the facts, and
              use Google&apos;s official process.
            </p>
          }
        >
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {suspensionSteps.map((step, index) => (
              <li
                key={step}
                className={`rounded-lg border border-neutral-200 border-t-4 p-5 ${accents[index % accents.length]}`}
              >
                <p className="text-sm font-semibold text-brand-blue-strong">Step {index + 1}</p>
                <p className="mt-2 text-sm text-neutral-800">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="flag" tone="muted" title="What to avoid" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {suspensionAvoid.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="image" tone="optional" title="If Google asks for video verification" />
              <p className="mt-3 text-neutral-800">
                The recording must be continuous and unedited, at least 30 seconds,
                and captured and submitted through the profile on a mobile device.
                It should show the location, real business activity or equipment,
                and your authority to operate. Google chooses which verification
                methods are offered.
              </p>
            </div>
          </div>
          <Callout icon="clock">
            <strong className="text-brand-ink">Approval and timing are controlled by Google.</strong>{" "}
            Verification and appeal decisions are made by Google. Approval and timing
            cannot be guaranteed.
          </Callout>
          <p className={tbdBox}>
            [OWNER TO CONFIRM] Whether suspension and verification assistance is
            offered, whether it is part of management or separately scoped, and who
            delivers it. Until confirmed, this section stays educational and makes
            no recovery claim.
          </p>
          <SourceLinks sources={[sources.suspended, sources.video]} />
        </PageSection>

        {/* Proof */}
        <PageSection
          id="proof"
          heading="See the Work Behind the Management"
          muted
          intro={
            <p>
              This section will show the work itself: a redacted audit or documented
              information correction, the approval and monitoring workflow, and any
              result with its baseline, measurement period, and limitations. Client
              names, quotes, and outcomes appear only with the client&apos;s approval.
            </p>
          }
        >
          <div className="grid gap-6 md:grid-cols-3">
            {proofSlots.map((slot) => (
              <div key={slot.title} className="rounded-lg border-2 border-dashed border-neutral-600 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">[PROOF PENDING]</p>
                <h3 className="mt-2 text-lg font-semibold">{slot.title}</h3>
                <p className="mt-2 text-sm text-neutral-800">{slot.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            No testimonials, client logos, or outcome statistics are shown until
            they are approved and documented.
          </p>
        </PageSection>

        {/* Discuss */}
        <PageSection
          id="discuss"
          heading="Discuss What Your Profile Needs"
          intro={
            <p>
              Tell us about your business and what you want fixed. The approved scope
              determines the proposed engagement, so we start by understanding your
              situation, not by quoting a package.
            </p>
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="clipboard" title="What to tell us" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {tellUs.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 p-5">
              <IconCardHeading icon="key" tone="included" title="Ownership and access" />
              <p className="mt-3 text-neutral-800">
                Ownership and access should stay clear. Google&apos;s API terms require
                agencies to support disassociation when a client relationship ends.
              </p>
              <p className={tbdBox}>
                [OWNER TO CONFIRM] Client-ownership and exit policy, and the agency
                access level.
              </p>
            </div>
          </div>
          <p className={tbdBox}>
            [PRICING PENDING] Pricing, packages, and contract terms are published
            only after owner confirmation.
          </p>
        </PageSection>

        <FaqSection id="faq" heading="Questions About Google Business Profile Management" faqs={faqs} />

        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to Talk Through Your Google Business Profile?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                Tell us your business model, profile status, and the main problem.
                We look at what the profile needs and what a realistic scope would
                be. We use what you send to respond to your inquiry; see our{" "}
                <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>{" "}
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
              <ProfileCardIllustration />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
