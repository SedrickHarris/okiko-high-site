import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon } from "@/components/ui/icons";
import { SourceLinks } from "@/components/ui/SourceLinks";
import {
  compatibilityChecks,
  faqs,
  homeServicesPage as page,
  measurementNote,
  metricDefinitions,
  problems,
  problemsStat,
  responsibilityRows,
  restorationCaution,
  safeguardsNote,
  seasonalityNote,
  serviceStack,
  softwareNote,
  stackNote,
  tradeWorkflows,
  workflowNote,
  workflowSteps,
  workflowStrip,
} from "@/content/industries/home-services";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
} from "@/lib/schema";

// Home Services is a currently served audience (docs/01), but the services this
// page describes are still candidates and no pricing, ownership terms, tested
// integrations, demonstration, or client proof exists yet. Keep the page out of
// search results (and out of the sitemap) until the owner approves it, then remove
// `robots` here and add the route to src/app/sitemap.ts.
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
  robots: { index: false, follow: true },
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
        <header>
          <h1 className="hero-in-h1 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {page.h1}
          </h1>
          <p className="hero-in hero-delay-1 mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">
            This page is for home-service teams. It describes a proposed approach
            that connects your online presence with what happens after a customer
            reaches out. Where to start depends on where your own process breaks
            down, not on a fixed bundle of tools.
          </p>
          <div className="hero-in hero-delay-2 mt-8">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
          </div>
          <figure className="hero-in hero-delay-3 mt-10">
            <ol className="grid gap-3 sm:grid-cols-5">
              {workflowStrip.map((step, i) => (
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
            <figcaption className="mt-3 text-sm text-neutral-600">
              Illustrative path, not a client project.
            </figcaption>
          </figure>
        </header>

        {/* B. Operational problems */}
        <PageSection
          id="follow-up-slips"
          heading="When You're on the Job, Customer Follow-Up Can Slip"
          intro={
            <p>
              More inquiries are not useful if nobody owns the next step. These
              are the places where follow-up most often breaks down for small
              home-service teams.
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
          <p className="mt-6 max-w-3xl text-neutral-700">{problemsStat.body}</p>
          <SourceLinks sources={[problemsStat.source]} />
        </PageSection>

        {/* C. Connected workflow */}
        <PageSection
          id="connected-workflow"
          heading="Connect the Next Step, Not Just Another Tool"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              A workable setup answers four questions for every inquiry. Each step
              also shows who is responsible for it.
            </p>
          }
        >
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-blue bg-white p-5"
              >
                <p className="mb-3 inline-block rounded-full bg-brand-yellow px-2.5 py-0.5 font-heading text-xs font-bold text-brand-ink">
                  Step {index + 1}
                </p>
                <IconCardHeading icon={step.icon} title={step.title} />
                <p className="mt-3 text-neutral-800">{step.body}</p>
                <p className="mt-4 border-t border-neutral-200 pt-3 text-sm text-neutral-700">
                  <span className="font-semibold">Who is responsible: </span>
                  {step.owner}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-neutral-700">{workflowNote}</p>
        </PageSection>

        {/* D. Service priorities */}
        <PageSection
          id="service-priorities"
          heading="Start With the Bottleneck in Your Business"
          intro={
            <p>
              You do not need every service. Start with the layer that matches
              your main problem, whether that is visibility, missed inquiries,
              inconsistent follow-up, or capacity, and add to it only if needed.
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
          <ol className="space-y-6">
            {serviceStack.map((layer, index) => (
              <li
                key={layer.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={layer.icon} title={layer.title} />
                <p className="mt-2 text-neutral-700">{layer.intro}</p>
                <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {layer.items.map((item) => (
                    <li key={item.href} className="rounded-md bg-surface-muted p-4">
                      <Link href={item.href} className={linkClass}>
                        {item.label}
                        <span aria-hidden="true"> &rarr;</span>
                      </Link>
                      <p className="mt-2 text-sm text-neutral-700">{item.note}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-neutral-700">{stackNote.body}</p>
          <SourceLinks sources={[stackNote.source]} />
          <div className="mt-8">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
          </div>
        </PageSection>

        {/* E. Different workflows */}
        <PageSection
          id="different-workflows"
          heading="Different Jobs Need Different Customer Workflows"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              A home-service business is not one workflow. The way you handle
              customers depends on the kind of work you do.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-3">
            {tradeWorkflows.map((workflow, index) => (
              <li
                key={workflow.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={workflow.icon} title={workflow.title} />
                <p className="mt-4 text-neutral-700">{workflow.body}</p>
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
            <span>
              <span className="font-semibold">Restoration caution: </span>
              {restorationCaution}
            </span>
          </p>
          <p className="mt-6 max-w-3xl text-neutral-700">{seasonalityNote.body}</p>
          <SourceLinks sources={[seasonalityNote.source]} />
        </PageSection>

        {/* F. Existing software */}
        <PageSection
          id="existing-software"
          heading="Work With the Systems You Already Use"
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
          <p className="mt-6 max-w-3xl text-neutral-700">{softwareNote.body}</p>
          <SourceLinks sources={[softwareNote.source]} />
        </PageSection>

        {/* G. Measurement */}
        <PageSection
          id="measurement"
          heading="Measure What Happens After the Inquiry"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Calls answered and messages sent show activity, not business
              results. These sample definitions keep the two apart. No results are
              shown here.
            </p>
          }
        >
          <dl className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {metricDefinitions.map((item) => (
              <div key={item.metric} className="rounded-lg border border-neutral-200 bg-white p-5">
                <dt className="font-heading text-lg font-semibold">{item.metric}</dt>
                <dd className="mt-2 text-neutral-700">{item.meaning}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-3xl text-neutral-700">{measurementNote.body}</p>
          <SourceLinks sources={[measurementNote.source]} />
        </PageSection>

        {/* H. Responsibilities and safeguards */}
        <PageSection
          id="responsibilities"
          heading="Clear Responsibilities, Human Handoffs, and Ownership"
          intro={
            <p>
              These are proposed operating boundaries, not confirmed terms. They
              show who would own each part, and what still needs to be confirmed
              before anything is agreed.
            </p>
          }
        >
          {/* Table on wide screens; stacked cards below, so no column is hidden off-screen. */}
          <div className="hidden lg:block">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                Proposed responsibilities for the system, your team, and items that
                still need confirmation
              </caption>
              <thead>
                <tr className="border-b-2 border-brand-blue">
                  <th scope="col" className="py-3 pr-4 font-semibold">Topic</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">System handles</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Your team handles</th>
                  <th scope="col" className="py-3 font-semibold">Needs confirmation</th>
                </tr>
              </thead>
              <tbody>
                {responsibilityRows.map((row) => (
                  <tr key={row.topic} className="border-b border-neutral-200 align-top">
                    <th scope="row" className="py-4 pr-4 font-medium text-neutral-900">
                      {row.topic}
                    </th>
                    <td className="py-4 pr-4 text-neutral-700">{row.system}</td>
                    <td className="py-4 pr-4 text-neutral-700">{row.team}</td>
                    <td className="py-4 text-neutral-700">{row.confirm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="grid gap-4 md:grid-cols-2 lg:hidden">
            {responsibilityRows.map((row) => (
              <li key={row.topic} className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="text-lg font-semibold">{row.topic}</h3>
                <dl className="mt-3 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-600">System handles</dt>
                    <dd className="mt-1 text-neutral-700">{row.system}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Your team handles</dt>
                    <dd className="mt-1 text-neutral-700">{row.team}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Needs confirmation</dt>
                    <dd className="mt-1 text-neutral-700">{row.confirm}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-neutral-700">{safeguardsNote.body}</p>
          <SourceLinks sources={[safeguardsNote.source]} />
        </PageSection>

        {/* J. FAQ */}
        <FaqSection
          id="faq"
          heading="Questions About Marketing and Automation for Your Business"
          faqs={faqs}
        />

        {/* K. Final CTA. The brief's inquiry form is not built yet: the contact path
            and consent language are TBD (docs/01), so this points to /contact. */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Talk Through How Your Team Handles Customers Today
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-neutral-700">
            Not every business needs every service. Tell us how customers reach
            you and where follow-up slips, and we can look at what, if anything,
            would help. We use what you send to respond to your inquiry; see our{" "}
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
        </section>
      </div>
    </>
  );
}
