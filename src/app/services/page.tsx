import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { FaqSection } from "@/components/sections/FaqSection";
import { QuestionAnswerIllustration } from "@/components/illustrations/QuestionAnswerIllustration";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon, type IconName } from "@/components/ui/icons";
import {
  combos,
  examples,
  expectSteps,
  faqs,
  hubPage as page,
  hubServices,
  startingPoints,
} from "@/content/services/hub";
import { customerJourney } from "@/content/services/website-design";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);

// Per docs/07, the hub's ItemList names only service pages that are published
// and available. The visible cards list all six; the others join this list once
// the owner confirms them (see `published` in content/services/hub.ts).
const publishedServices = hubServices.filter((service) => service.published);

const structuredData = graph([
  organizationNode(),
  {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.h1,
    description: page.description,
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    mainEntity: { "@id": `${pageUrl}#services` },
  },
  {
    "@type": "ItemList",
    "@id": `${pageUrl}#services`,
    name: "OKIKO HIGH services",
    itemListElement: publishedServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: absoluteUrl(service.path),
    })),
  },
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "Services", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

const accents = ["border-t-brand-blue", "border-t-brand-green", "border-t-brand-yellow"] as const;

// Logo colors as icon-chip fills with brand-ink glyphs (docs/05 contrast rules).
// Meaning comes from the icon and the row text, never from color alone.
const chipTones = ["bg-brand-blue", "bg-brand-green", "bg-brand-yellow"] as const;

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

const contactButton =
  "font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:brightness-95 hover:shadow-md motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0";

const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;

function SituationChip({ icon, index }: { icon: IconName; index: number }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-brand-ink ${chipTones[index % chipTones.length]}`}
    >
      <NamedIcon name={icon} className="h-6 w-6" />
    </span>
  );
}

// Main recommendation: bold blue link whose arrow nudges right when the row or
// card is hovered or focused. The underline stays so color is never the only cue.
function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
      <span
        aria-hidden="true"
        className="ml-1 inline-block motion-safe:transition-transform motion-safe:duration-150 group-hover:translate-x-0.5 group-focus-within:translate-x-0.5"
      >
        &rarr;
      </span>
    </Link>
  );
}

// Secondary suggestion: same blue, lighter weight, with a "+" that reads as "pairs with".
function CompanionLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 font-medium text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink"
    >
      <span aria-hidden="true" className="shrink-0">
        <NamedIcon name="plus" className="h-4 w-4" />
      </span>
      {children}
    </Link>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} />

      <div className="mt-8 space-y-16">
        {/* A. Hero */}
        <header className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="hero-in-h1 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              OKIKO HIGH helps local and service-based businesses get found, answer
              customers, and follow up. Six services cover that path, from your
              Google Business Profile and website to calls, chat, text and email
              follow-up, and reviews. Each service page explains how the work is
              set up and where its limits are.
            </p>
            <div className="hero-in hero-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
              <ButtonLink href={page.secondaryCta.href} variant="secondary">
                {page.secondaryCta.label}
              </ButtonLink>
            </div>
            <div className="hero-in hero-delay-2 mt-6 flex max-w-2xl items-start gap-3.5 rounded-lg border border-brand-blue/30 bg-surface-muted p-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-blue text-brand-ink"
              >
                <NamedIcon name="message" className="h-6 w-6" />
              </span>
              <p className="text-neutral-800">
                What fits depends on your business, your tools, and your customers.
                Tell us how customers reach you today and where things slip, and we
                can look at whether a service, or something simpler, fits.
              </p>
            </div>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                How the services connect
              </p>
              <ol>
                {customerJourney.map((step, i) => (
                  <li key={step.stage}>
                    {i > 0 && (
                      <div aria-hidden="true" className="ml-[19px] h-4 w-0.5 bg-neutral-800" />
                    )}
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-muted text-brand-blue-strong"
                      >
                        <NamedIcon name={step.icon} className="h-6 w-6" />
                      </span>
                      <span className="text-lg font-semibold leading-snug">{step.stage}</span>
                    </div>
                    <p className="ml-[52px] text-sm text-neutral-700">{step.body}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-5 border-t border-neutral-200 pt-4 text-sm text-neutral-700">
                Review management supports the trust your website relies on.
              </p>
            </div>
            <figcaption className="mt-3 text-center text-xs text-neutral-600">
              Illustrative path, not a client project.
            </figcaption>
          </figure>
        </header>

        {/* B. Service cards */}
        <PageSection
          id="services"
          heading="Our Services for Local Businesses"
          intro={
            <p>
              Each service has its own page with scope, limits, FAQs, and next
              steps. Pick the one closest to the problem you want to fix.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hubServices.map((service, index) => (
              <li
                key={service.slug}
                style={{ "--reveal-i": index % 3 } as CSSProperties}
                className={`card-lift reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
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
        </PageSection>

        {/* C. Choosing a service */}
        <PageSection
          id="choosing"
          heading="Which Service Fits Your Situation?"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Start with where customers drop off today. Some situations need more
              than one service, and the services can be connected. Any connection
              is optional and scoped separately.
            </p>
          }
        >
          {/* Table on wide screens; stacked cards below, so no column is hidden off-screen. */}
          <div className="hidden lg:block">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                Common customer-contact problems, the service page that addresses each,
                and a service it can connect with
              </caption>
              <thead>
                <tr className="border-b-2 border-brand-blue">
                  <th scope="col" className="py-3 pr-4 font-semibold">If this is your situation</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Look at</th>
                  <th scope="col" className="py-3 font-semibold">Can connect with</th>
                </tr>
              </thead>
              <tbody>
                {startingPoints.map((row, index) => (
                  <tr
                    key={row.href}
                    className="group border-b border-neutral-200 align-middle motion-safe:transition-colors motion-safe:duration-150 hover:bg-white/70 focus-within:bg-white/70"
                  >
                    <th scope="row" className="py-4 pl-2 pr-4 font-medium text-neutral-900">
                      <span className="flex items-center gap-3">
                        <SituationChip icon={row.icon} index={index} />
                        {row.situation}
                      </span>
                    </th>
                    <td className="whitespace-nowrap py-4 pr-4">
                      <PrimaryLink href={row.href}>{row.service}</PrimaryLink>
                    </td>
                    <td className="whitespace-nowrap py-4 pr-2">
                      <CompanionLink href={row.pairedWith.href}>{row.pairedWith.service}</CompanionLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="grid gap-4 md:grid-cols-2 lg:hidden">
            {startingPoints.map((row, index) => (
              <li key={row.href} className="group rounded-lg border border-neutral-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <SituationChip icon={row.icon} index={index} />
                  <p className="font-medium text-neutral-900">{row.situation}</p>
                </div>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Look at</dt>
                    <dd className="mt-1">
                      <PrimaryLink href={row.href}>{row.service}</PrimaryLink>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Can connect with</dt>
                    <dd className="mt-1">
                      <CompanionLink href={row.pairedWith.href}>{row.pairedWith.service}</CompanionLink>
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-neutral-700">
            None of these services comes with a guarantee of rankings, leads, or
            review outcomes. Google and the other platforms control search results
            and reviews, and each service page states what it does and does not
            include.
          </p>
        </PageSection>

        {/* C2. Example combinations */}
        <PageSection
          id="combinations"
          heading="Connect Services Around Your Customer Journey"
          intro={
            <p>
              These are example combinations, not packages. You do not need every
              service, and any connection between them is optional and scoped
              separately.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-3">
            {combos.map((combo, index) => (
              <li
                key={combo.title}
                className={`flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={combo.icon} title={combo.title} />
                <p className="mt-4 text-neutral-700">{combo.purpose}</p>
                <ul className="mt-4 space-y-2">
                  {combo.services.map((service) => (
                    <li key={service.href} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-green"
                      />
                      <Link href={service.href} className={linkClass}>
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* C3. Samples on the service pages */}
        <PageSection
          id="examples"
          heading="See How the Services Work"
          muted
          intro={
            <p>
              Each service page includes something you can look at before you get
              in touch: a sample or, for Google Business Profile, the review
              checklist. Samples are fictional and labeled that way on their own
              pages. None is a client result.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((example) => (
              <li
                key={example.title}
                className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6"
              >
                <IconCardHeading icon={example.icon} title={example.title} />
                <p className="mt-4 text-neutral-700">{example.body}</p>
                <p className="mt-auto pt-4">
                  <Link href={example.href} className={linkClass}>
                    {example.label}
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* C4. What to expect */}
        <PageSection id="expect" heading="What to Expect When You Reach Out">
          <ol className="grid gap-6 md:grid-cols-3">
            {expectSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-blue bg-white p-5"
              >
                <p className="mb-3 inline-block rounded-full bg-brand-yellow px-2.5 py-0.5 font-heading text-xs font-bold text-brand-ink">
                  Step {index + 1}
                </p>
                <IconCardHeading icon={step.icon} title={step.title} />
                <p className="mt-2 text-neutral-800">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-neutral-700">
            We do not publish prices or timelines on this page. Setup, recurring
            costs, third-party software, and ongoing support are defined in your
            scope before pricing is given.
          </p>
        </PageSection>

        {/* D. FAQs */}
        <FaqSection id="faq" heading="Services Questions, Answered" faqs={faqs} />

        {/* E. Final CTA */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Not Sure Which Service Fits?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                Tell us about your business, how customers reach you today, and what you
                want to improve. We look at which service, if any, fits and what a
                realistic scope would be. We use what you send to respond to your
                inquiry; see our{" "}
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
            <figure className="flex flex-col items-center md:items-end">
              <QuestionAnswerIllustration />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
