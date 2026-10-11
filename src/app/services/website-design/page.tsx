import type { Metadata } from "next";
import Link from "next/link";
import { CapabilityGrid } from "@/components/sections/CapabilityGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { PhoneWireframe } from "@/components/sections/PhoneWireframe";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { HeroDevices } from "@/components/illustrations/HeroDevices";
import { ResponsiveDevices } from "@/components/illustrations/ResponsiveDevices";
import { SiteMapDiagram } from "@/components/illustrations/SiteMapDiagram";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  CustomDesignIcon,
  IntegrationsIcon,
  LeadCaptureIcon,
  MessageIcon,
} from "@/components/ui/icons";
import { SourceLinks } from "@/components/ui/SourceLinks";
import {
  approachGuide,
  architectureLevels,
  capabilities,
  contactPathPoints,
  costDrivers,
  costRows,
  customerJourney,
  faqs,
  inquiryFlow,
  migrationChecklist,
  ownershipRows,
  platformRows,
  processSteps,
  qualityChecks,
  scopeColumns,
  sources,
  websiteDesignPage as page,
  wireframeAnnotations,
} from "@/content/services/website-design";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationId,
  organizationNode,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);
const serviceId = `${pageUrl}#service`;

const structuredData = graph([
  organizationNode(),
  {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.h1,
    description: page.description,
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    mainEntity: { "@id": serviceId },
  },
  {
    "@type": "Service",
    "@id": serviceId,
    name: "Website design for local businesses",
    serviceType: page.serviceType,
    description:
      "Website design and builds for local and service-based businesses, organized around calls, quote requests, and bookings.",
    provider: { "@id": organizationId },
    url: pageUrl,
  },
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Website Design", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;

const inquiryIcons = [
  CustomDesignIcon,
  LeadCaptureIcon,
  IntegrationsIcon,
  MessageIcon,
] as const;

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
          { name: "Website Design" },
        ]}
      />

      <div className="mt-8 space-y-16">
        {/* A. Hero */}
        <header className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="hero-in-h1 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              OKIKO HIGH designs and builds websites for local and service-based
              businesses, organized around the actions that matter: calls, quote
              requests, and bookings. Whether you need a first website or a
              redesign, we define the scope first, so any build recommendation fits
              your business.
            </p>
            <Cta className="hero-in hero-delay-2" />
            <p className="hero-in hero-delay-2 mt-4 max-w-2xl text-sm text-neutral-600">
              Tell us about your business, your current website if you have one, and
              the actions you want visitors to take. We use that to scope your
              project.
            </p>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <HeroDevices />
            <figcaption className="mt-4 text-center text-xs text-neutral-600">
              Illustrative layout, not a client project.
            </figcaption>
          </figure>
        </header>

        {/* B. Contact-path demonstration */}
        <PageSection
          id="contact-path"
          heading="Make It Easier for Customers to Contact You"
          intro={
            <p>
              A conversion-focused website lets a visitor quickly learn what you
              offer, see why they can trust you, and contact you without hunting for
              the next step. Here is what that means in practice.
            </p>
          }
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
            <div>
              <ul className="space-y-3 text-neutral-800">
                {contactPathPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-neutral-700">
                In BrightLocal&apos;s 2026 Local Consumer Review Survey, 54% of
                respondents said they are most likely to visit a business website
                after reading positive reviews. Your site should confirm the
                impression your reviews create, not contradict it. Survey responses
                describe stated behavior and are not a measure of results for any one
                business.
              </p>
              <SourceLinks sources={[sources.brightLocalReviews]} />
            </div>
            <div>
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
                <figure className="shrink-0 pr-8">
                  <PhoneWireframe />
                  <figcaption className="mt-3 text-center text-xs text-neutral-600">
                    Illustrative layout, not a client project.
                  </figcaption>
                </figure>
                <div>
                  <h3 className="text-lg font-semibold">What the numbered areas show</h3>
                  <ol className="mt-3 space-y-3 text-neutral-800">
                    {wireframeAnnotations.map((note, index) => (
                      <li key={note} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-strong text-xs font-bold text-white"
                        >
                          {index + 1}
                        </span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <h3 className="mt-8 text-lg font-semibold">The inquiry path we test</h3>
              <ol className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                {inquiryFlow.map((step, index) => {
                  const Glyph = inquiryIcons[index];
                  return (
                    <li key={step} className="flex items-center gap-2">
                      <span className="flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm">
                        <span className="text-brand-blue-strong">
                          <Glyph className="h-5 w-5" />
                        </span>
                        {step}
                      </span>
                      {index < inquiryFlow.length - 1 && (
                        <span aria-hidden="true" className="text-neutral-500">
                          &rarr;
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </PageSection>

        {/* C. Scope and exclusions */}
        <PageSection
          id="scope"
          heading="Know What Your Website Build Includes"
          muted
          intro={
            <p>
              A clear scope removes surprises. Your written scope names what is
              included, what is optional, and what is not assumed.
            </p>
          }
        >
          <CapabilityGrid items={capabilities} />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {scopeColumns.map((column) => (
              <div key={column.heading} className="rounded-lg border border-neutral-200 bg-white p-5">
                <h3 className="text-lg font-semibold">{column.heading}</h3>
                <p className="mt-1 text-sm text-neutral-600">{column.note}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Cta />
        </PageSection>

        {/* D. Platform and redesign decision */}
        <PageSection
          id="approach"
          heading="The Right Website Approach for Your Business"
          intro={
            <>
              <p>
                Custom design means tailored to your customers and how they decide,
                not necessarily coded from scratch. A professionally configured theme
                or website builder can support conversion too. What separates one
                project from another is strategy, execution, testing, and
                accountability, more than the platform alone.
              </p>
              <p>
                We look for the lightest approach that meets your requirements:
                redesign when your current platform can support them, and rebuild
                only when identified constraints make repair impractical.
              </p>
            </>
          }
        >
          <div className="grid gap-6 md:grid-cols-3">
            {approachGuide.map((item) => (
              <div key={item.heading} className="rounded-lg border border-neutral-200 p-5">
                <h3 className="text-lg font-semibold">{item.heading}</h3>
                <p className="mt-2 text-neutral-700">{item.body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-xl font-semibold">Platform fit at a glance</h3>
          <p className="mt-2 max-w-3xl text-neutral-700">
            This is general guidance, not a list of platforms we build on. Platform
            options are confirmed when we scope your project.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                When each website platform option tends to fit, and what to watch for
              </caption>
              <thead>
                <tr className="border-b border-neutral-300">
                  <th scope="col" className="py-3 pr-4 font-semibold">Option</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Can fit when</th>
                  <th scope="col" className="py-3 font-semibold">Watch for</th>
                </tr>
              </thead>
              <tbody>
                {platformRows.map((row) => (
                  <tr key={row.option} className="border-b border-neutral-200 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold">{row.option}</th>
                    <td className="py-3 pr-4 text-neutral-800">{row.fits}</td>
                    <td className="py-3 text-neutral-800">{row.watch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SourceLinks
            label="Platform documentation"
            sources={[sources.wixExport, sources.squarespaceExport]}
          />
        </PageSection>

        {/* E. SEO and migration */}
        <PageSection
          id="seo-migration"
          heading="SEO Foundations and a Careful Launch Plan"
          muted
          intro={
            <>
              <p>
                SEO-friendly website design starts with logical service pages, clear
                URLs, and relevant internal links. Location pages belong on your site
                only for real branches or genuine service areas. Near-identical
                city pages created to funnel search traffic are what Google&apos;s
                spam policies call doorway abuse.
              </p>
              <p>
                If you already have a site, a rebuild carries real risk. Google warns
                that significant site changes can cause temporary ranking
                fluctuations, so launch planning matters as much as design.
              </p>
            </>
          }
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Site structure</h3>
              <figure className="mt-3">
                <SiteMapDiagram />
                <figcaption className="mt-3 text-sm text-neutral-700">
                  Location or service-area pages are added only for real branches or
                  genuine coverage.
                </figcaption>
              </figure>
              <ol className="sr-only">
                {architectureLevels.map((level) => (
                  <li key={level}>{level}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Migration and launch checklist</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
                {migrationChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-neutral-700">
            Foundational SEO is not ongoing SEO. Titles, internal links, indexability
            checks, and migration work belong to the build. Continuing content,
            authority-building, and performance monitoring are separate work, and
            nobody can guarantee rankings.
          </p>
          <SourceLinks sources={[sources.googleSiteMoves, sources.googleSpam]} />
        </PageSection>

        {/* F. Mobile, performance, and accessibility */}
        <PageSection
          id="quality"
          heading="Built for Mobile Use, Performance, and Accessibility"
          intro={
            <p>
              BrightLocal&apos;s 2026 consumer search behavior research is the basis
              for its figure that 73% of local searches start on mobile. It reflects
              survey behavior rather than a count of every local query, but it is a
              good reason to test your contact paths on real phones.
            </p>
          }
        >
          <figure className="mb-8">
            <ResponsiveDevices />
            <figcaption className="mt-3 text-sm text-neutral-600">
              Illustrative: one layout adapting across desktop, tablet, and phone. Not a client project.
            </figcaption>
          </figure>
          <div className="grid gap-6 md:grid-cols-2">
            {qualityChecks.map((check) => (
              <div key={check.heading} className="rounded-lg border border-neutral-200 p-5">
                <h3 className="text-lg font-semibold">{check.heading}</h3>
                <p className="mt-2 text-neutral-700">{check.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-neutral-700">
            These are testing targets. They are not guarantees of rankings, revenue,
            or legal immunity, and an automated scan or accessibility widget alone
            does not establish conformance. Your project scope states which checks
            apply.
          </p>
          <SourceLinks
            sources={[
              sources.brightLocalStats,
              sources.googleCwv,
              sources.webDevVitals,
              sources.wcag22,
            ]}
          />
        </PageSection>

        {/* G. Process and timing */}
        <PageSection
          id="process"
          heading="From Website Review to Launch and Handover"
          muted
          intro={
            <p>
              Timing depends on scope, content readiness, approvals, and
              integrations. Milestones and your responsibilities are agreed before
              work begins.
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
        </PageSection>

        {/* H. Budget and recurring costs */}
        <PageSection
          id="cost"
          heading="What Determines Your Website Cost?"
          intro={
            <>
              <p>
                Your quote depends on scope, not on a flat rate. We do not publish a
                starting price on this page. Request a scope and quote and we will
                identify what drives yours.
              </p>
              <p>
                Revision rounds are set in your scope, and unlimited revisions are
                not assumed.
              </p>
            </>
          }
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">What changes the quote</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
                {costDrivers.map((driver) => (
                  <li key={driver}>{driver}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              {costRows.map((row) => (
                <div key={row.heading} className="rounded-lg border border-neutral-200 p-5">
                  <h3 className="text-lg font-semibold">{row.heading}</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-800">
                    {row.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-neutral-700">
            We list recurring costs and licenses separately from the build fee so you
            can see them before you commit.
          </p>
          <p className="mt-4 max-w-3xl rounded-lg border border-brand-blue/30 bg-surface-muted p-4 text-neutral-700">
            For outside context only: one vendor&apos;s 2026-updated guide suggests a
            planning range of about $4,000-$15,000 for a professionally built
            local-service website. That is third-party guidance, not a market
            average and not an OKIKO HIGH price.
          </p>
          <SourceLinks sources={[sources.gruffyGoat]} />
          <Cta />
        </PageSection>

        {/* I. Ownership and exit */}
        <PageSection
          id="ownership"
          heading="Know What You Own and What Happens Next"
          muted
          intro={
            <p>
              Who owns a website depends on the contract and the platform. Before you
              sign with any provider, including us, ask for each of these in writing.
            </p>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Website assets, what to confirm about each, and what to consider at exit
              </caption>
              <thead>
                <tr className="border-b border-neutral-300">
                  <th scope="col" className="py-3 pr-4 font-semibold">Asset</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Confirm in writing</th>
                  <th scope="col" className="py-3 font-semibold">At exit</th>
                </tr>
              </thead>
              <tbody>
                {ownershipRows.map((row) => (
                  <tr key={row.asset} className="border-b border-neutral-200 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold">{row.asset}</th>
                    <td className="py-3 pr-4 text-neutral-800">{row.confirm}</td>
                    <td className="py-3 text-neutral-800">{row.exit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-neutral-700">
            Platform limits matter here. A Wix domain can be transferred away even
            though the Wix site itself needs Wix hosting, and Squarespace exports
            cover some content but are not a complete portable copy of a site.
          </p>
          <SourceLinks sources={[sources.wixExport, sources.squarespaceExport]} />
        </PageSection>

        {/* J. Connected services */}
        <PageSection
          id="connected-services"
          heading="Connect Your Website to Reception and Follow-Up"
          intro={
            <p>
              A website is one step in how customers find you and reach you. These
              connections are optional, scoped separately, and depend on platform
              compatibility.
            </p>
          }
        >
          <ol className="grid gap-4 md:grid-cols-5">
            {customerJourney.map((item, index) => (
              <li key={item.stage} className="rounded-lg border border-neutral-200 p-4">
                <p className="text-sm font-semibold text-neutral-600">{index + 1}</p>
                <h3 className="mt-1 font-semibold">{item.stage}</h3>
                <p className="mt-2 text-sm text-neutral-700">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-neutral-700">
            Reputation management supports the trust your website relies on. A website
            inquiry is not blanket permission for automated marketing calls or
            messages: the FCC has confirmed that AI-generated voices fall under the
            TCPA&apos;s artificial or prerecorded voice rules, so consent, revocation,
            and recording language need review for each workflow.
          </p>
          <p className="mt-4 max-w-3xl text-neutral-700">
            If your website handles health information, forms, scheduling tools,
            chat, and tracking need separate privacy review. No website is
            &ldquo;HIPAA certified&rdquo; by design.
          </p>
          <SourceLinks sources={[sources.fcc, sources.hhs]} />
          <p className="mt-6">
            <Link href="/services" className="font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink">
              See all OKIKO HIGH services
            </Link>
          </p>
        </PageSection>

        {/* K. FAQs and final CTA */}
        <FaqSection id="faq" heading="Website Design Questions, Answered" faqs={faqs} />

        <section
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Scope Your Website?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-700">
            Share your business type, your current website if you have one, and the
            calls, quotes, or bookings you want it to produce. We use that to scope
            your project. We use what you send to respond to your inquiry; see our{" "}
            <Link href="/privacy-policy" className="text-brand-blue-strong underline underline-offset-2">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
          <Cta />
          <p className="mt-6 text-neutral-700">
            Prefer to reach out directly? Email{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-blue-strong underline underline-offset-2">
              {siteConfig.email}
            </a>{" "}
            or call{" "}
            <a href={telHref} className="font-semibold text-brand-blue-strong underline underline-offset-2">
              {siteConfig.phone}
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
