import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { FaqSection } from "@/components/sections/FaqSection";
import { HomeServicesBranchingDiagram } from "@/components/illustrations/HomeServicesBranchingDiagram";
import { HomeServicesHeroIllustration } from "@/components/illustrations/HomeServicesHeroIllustration";
import { HomeServicesHandoffIllustration } from "@/components/illustrations/HomeServicesHandoffIllustration";
import { PageSection } from "@/components/sections/PageSection";
import { RelatedIndustries } from "@/components/sections/RelatedIndustries";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon } from "@/components/ui/icons";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import {
  branchPaths,
  compatibilityItems,
  controlPoints,
  dedupeFact,
  faqs,
  heroJourney,
  homeServicesPage as page,
  journeyStages,
  limits,
  measurementNote,
  permissionFact,
  permissionPoints,
  permissionSteps,
  problems,
  reportTiles,
  reviewFact,
  textBackFact,
  tradeGroups,
  workflowCards,
} from "@/content/industries/home-services";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
} from "@/lib/schema";

// Home Services is a currently served audience (docs/01). The owner approved indexing on
// 2026-10-11, so the page is indexable and listed in src/app/sitemap.ts. Keep the copy free of
// pricing, ownership terms, tested integrations, results, and client proof until confirmed.
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);

// Verified facts only (docs/07 audience page): Organization, WebPage,
// BreadcrumbList, and FAQPage matching the visible FAQ. No Service node for an
// unconfirmed bundle, and no prices, ratings, areaServed, address, or
// LocalBusiness properties.
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
    { name: "Home Services", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

const accents = ["border-t-brand-blue", "border-t-brand-green", "border-t-brand-yellow"] as const;

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

const contactButton =
  "font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:brightness-95 hover:shadow-md motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0";

const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;

const exampleLabel =
  "inline-block rounded-full bg-brand-yellow px-2.5 py-0.5 font-heading text-xs font-bold text-brand-ink";

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Home Services" },
        ]}
      />

      <div className="mt-8 space-y-16">
        {/* A. Hero */}
        <header className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-center">
          <div>
            <h1 className="hero-in-h1 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">
              This page is for home-service teams. It describes a proposed approach
              to marketing automation for home services: connecting your online
              presence with what happens after a customer reaches out, from the
              first inquiry to the next visit. Where to start depends on where your
              own process breaks down, not on a fixed bundle of tools.
            </p>
            <div className="hero-in hero-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
              <ButtonLink href={page.secondaryCta.href} variant="secondary">
                {page.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <figure className="hero-in hero-delay-2 mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <HomeServicesHeroIllustration />
          </figure>
          <div className="hero-in hero-delay-3 lg:col-span-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-600">
              Example customer journey
            </p>
            <ol className="grid gap-3 sm:grid-cols-5">
              {heroJourney.map((step, i) => (
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
          </div>
        </header>

        {/* B. Operational problems */}
        <PageSection
          id="after-the-inquiry"
          heading="When Marketing Creates an Inquiry, What Happens Next?"
          intro={
            <p>
              More inquiries are not useful if nobody owns the next step. These are
              the places where follow-up can break down, each paired with the
              workflow response we would propose.
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
                <p className="mt-4 border-t border-neutral-200 pt-3 text-sm text-neutral-800">
                  <span className="font-semibold">Workflow response: </span>
                  {problem.response}
                </p>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* C. Trade groups */}
        <PageSection
          id="different-workflows"
          heading="Different Services Need Different Customer Workflows"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              A home-service business is not one workflow. The follow-up that suits
              an urgent repair is not the follow-up that suits a recurring schedule
              or a long quote cycle.
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
            <span className="font-semibold">
              Proposed workflow applications, not a record of past client work.
            </span>
          </p>
          <ul className="grid gap-6 lg:grid-cols-3">
            {tradeGroups.map((group, index) => (
              <li
                key={group.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={group.icon} title={group.title} />
                <p className="mt-3 text-neutral-700">{group.focus}</p>
                <h3 className="mt-5 font-heading text-sm font-bold uppercase tracking-wider text-neutral-700">
                  Example journey
                </h3>
                <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-neutral-800">
                  {group.journey.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <h3 className="mt-5 font-heading text-sm font-bold uppercase tracking-wider text-neutral-700">
                  Stopping rules
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-neutral-800">
                  {group.stops.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <a href="#workflows" className={linkClass}>
              See the workflow examples
              <span aria-hidden="true"> &darr;</span>
            </a>
          </p>
        </PageSection>

        {/* D. Connected journey */}
        <PageSection
          id="connected-journey"
          heading="Connect the Customer Journey, Not Just the Tools"
          intro={
            <p>
              Each stage of the journey can be handled on its own or connected to the
              next. Start with the stage that matches your main problem.
            </p>
          }
        >
          <ol className="grid gap-6 md:grid-cols-2">
            {journeyStages.map((stage, index) => (
              <li
                key={stage.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={stage.icon} title={stage.title} />
                <p className="mt-2 text-neutral-700">{stage.intro}</p>
                {stage.links.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {stage.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className={linkClass}>
                          {link.label}
                          <span aria-hidden="true"> &rarr;</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm font-semibold text-neutral-800">{stage.plain}</p>
                )}
              </li>
            ))}
          </ol>
          <QuickAnswer
            lead={textBackFact.lead}
            detail={textBackFact.detail}
            sources={textBackFact.sources}
          />
        </PageSection>

        {/* E. Practical workflows */}
        <PageSection
          id="workflows"
          heading="Practical Follow-Up From First Inquiry to the Next Visit"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Five proposed workflows. Open each one to see what starts it, what it
              is for, who owns it, and when it stops.
            </p>
          }
        >
          <div className="space-y-4">
            {workflowCards.map((card) => (
              <details
                key={card.title}
                className="group rounded-lg border border-neutral-200 bg-white p-5 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue-strong">
                  <div>
                    <span className={exampleLabel}>Example workflow</span>
                    <div className="mt-2">
                      <IconCardHeading icon={card.icon} title={card.title} as="h3" />
                    </div>
                    <p className="mt-2 text-neutral-700">{card.summary}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-2xl font-bold leading-none text-brand-blue-strong group-open:hidden"
                  >
                    +
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 hidden text-2xl font-bold leading-none text-brand-blue-strong group-open:inline"
                  >
                    &minus;
                  </span>
                </summary>
                <dl className="mt-5 grid gap-4 border-t border-neutral-200 pt-4 sm:grid-cols-2">
                  {(
                    [
                      ["Trigger", card.trigger],
                      ["Purpose", card.purpose],
                      ["Owner", card.owner],
                      ["Exit", card.exit],
                    ] as const
                  ).map(([term, value]) => (
                    <div key={term}>
                      <dt className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                        {term}
                      </dt>
                      <dd className="mt-1 text-neutral-800">{value}</dd>
                    </div>
                  ))}
                </dl>
                {card.link && (
                  <p className="mt-4">
                    <Link href={card.link.href} className={linkClass}>
                      {card.link.label}
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </p>
                )}
              </details>
            ))}
          </div>
          <QuickAnswer
            lead={reviewFact.lead}
            detail={reviewFact.detail}
            sources={reviewFact.sources}
          />
          <div className="mt-8">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
          </div>
        </PageSection>

        {/* F. Human control */}
        <PageSection
          id="team-control"
          heading="Keep Your Team in Control of the Next Step"
          intro={
            <p>
              Automation should hand work to people, not trap customers in a
              sequence. These are the boundaries to agree before launch.
            </p>
          }
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {controlPoints.map((point, index) => (
              <li
                key={point.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={point.icon} title={point.title} />
                <p className="mt-3 text-neutral-700">{point.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">What happens after an automated message</h3>
              <ul className="mt-4 space-y-3">
                {branchPaths.map((path) => (
                  <li key={path.label} className="rounded-md bg-surface-muted p-3">
                    <span className="font-semibold">{path.label}: </span>
                    <span className="text-neutral-800">{path.outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <HomeServicesBranchingDiagram paths={branchPaths} />
          </div>
          <QuickAnswer
            lead={dedupeFact.lead}
            detail={dedupeFact.detail}
            sources={dedupeFact.sources}
          />
        </PageSection>

        {/* G. Compatibility */}
        <PageSection
          id="existing-systems"
          heading="Start With the Systems and Processes You Already Use"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Whether a connection works depends on the actions you need, not on the
              name of your software. Nothing below is confirmed for your business
              yet.
            </p>
          }
        >
          <p className="mb-6 max-w-3xl text-sm text-neutral-700">
            <span className="font-semibold">Status key: </span>
            &ldquo;Needs review&rdquo; means it has not been checked. An item moves
            to &ldquo;Confirmed&rdquo; once it is checked and agreed in writing.
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {compatibilityItems.map((item) => (
              <li key={item.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <IconCardHeading icon={item.icon} title={item.title} />
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 font-heading text-xs font-bold text-brand-ink ${
                      item.status === "Confirmed" ? "bg-brand-green" : "bg-brand-yellow"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-neutral-700">{item.body}</p>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* H. Measurement */}
        <PageSection
          id="measurement"
          heading="Measure What Happens After the Message"
          intro={
            <p>
              Messages sent show activity, not business results. This is a sample
              reporting layout. It contains no data and no results.
            </p>
          }
        >
          <p className={exampleLabel}>Sample reporting layout</p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reportTiles.map((tile, index) => (
              <li
                key={tile.label}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={tile.icon} title={tile.label} />
                <p
                  className="mt-3 font-heading text-3xl font-bold text-neutral-400"
                  aria-label="No data"
                >
                  &ndash;
                </p>
                <p className="mt-1 text-sm text-neutral-700">{tile.meaning}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-neutral-700">{measurementNote}</p>
        </PageSection>

        {/* I. Permission */}
        <PageSection
          id="customer-permission"
          heading="Build Customer Permission Into the Process"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Customer communication works better, and stays safer, when permission
              is part of the design rather than an afterthought.
            </p>
          }
        >
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {permissionSteps.map((step, index) => (
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
          <ul className="mt-8 max-w-3xl list-disc space-y-2 pl-5 text-neutral-800">
            {permissionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <QuickAnswer
            lead={permissionFact.lead}
            detail={permissionFact.detail}
            sources={permissionFact.sources}
          />
        </PageSection>

        {/* Scope and limits */}
        <section
          aria-labelledby="scope-limits"
          className="rounded-lg border border-neutral-300 bg-white p-6"
        >
          <h2 id="scope-limits" className="flex items-center gap-3 text-xl font-bold">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-red-600 text-white"
            >
              <NamedIcon name="shield" className="h-5 w-5" />
            </span>
            Scope and Limits
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
            {limits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* J. FAQ */}
        <FaqSection
          id="faq"
          heading="Questions About Marketing and Automation for Home-Service Businesses"
          faqs={faqs}
        />

        <RelatedIndustries currentPath="/industries/home-services" />

        {/* Final CTA. The inquiry form is not built yet: the contact path and consent
            language are TBD (docs/01), so this points to /contact. */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Discuss How Your Customers Move From Inquiry to Follow-Up
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-neutral-700">
                Tell us how customers reach you and where follow-up slips, and we can
                look at what, if anything, would help. Pricing is not published yet,
                so we will not quote terms on this page. We use what you send to
                respond to your inquiry; see our{" "}
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
            <figure className="mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
              <HomeServicesHandoffIllustration />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
