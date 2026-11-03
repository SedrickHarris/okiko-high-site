import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { QuestionAnswerIllustration } from "@/components/illustrations/QuestionAnswerIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContactActions } from "@/components/ui/ContactActions";
import { NamedIcon } from "@/components/ui/icons";
import {
  aboutPage as page,
  approach,
  approachLimits,
  faqs,
  foundingDateIso,
  glance,
  heroPanel,
  mission,
} from "@/content/about";
import { audiences } from "@/content/industries/hub";
import { hubServices } from "@/content/services/hub";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationId,
  organizationNode,
  pageNode,
} from "@/lib/schema";
import { accents, fillAt } from "@/lib/brand";

const pageUrl = absoluteUrl(page.path);

// Setting openGraph on a page replaces the root layout's openGraph object, so the
// site name, type, and image are repeated here.
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: `${page.title} | ${siteConfig.shortName}`,
    description: page.description,
    url: pageUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/images/brand/logos/web/okiko-high-primary-on-white.webp",
        width: 1600,
        height: 867,
        alt: siteConfig.name,
      },
    ],
  },
};

// Verified facts only (docs/07). The email and phone on the Organization node are
// shown in the closing section, and the founding date is shown in the FAQ (the
// "At a glance" list shows the year only).
// The FAQPage node reads the same objects as the visible FAQ. No LocalBusiness,
// address, hours, sameAs, areaServed, ratings, or reviews.
const structuredData = graph([
  organizationNode({ withContact: true, foundingDate: foundingDateIso }),
  {
    ...pageNode(pageUrl, { type: "AboutPage", name: page.h1, description: page.description }),
    mainEntity: { "@id": organizationId },
  },
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "About", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />

      <div className="mt-8 space-y-16">
        {/* A. Hero */}
        <PageHero layout="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="hero-in-h1 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              <strong className="font-semibold text-neutral-900">
                Digital marketing strategy, combined with automation.
              </strong>{" "}
              OKIKO HIGH helps businesses strengthen their online presence, connect
              with customers, and build systems that support lasting growth. We bring
              digital marketing and Software as a Service (SaaS) solutions together to
              simplify marketing, streamline customer management, and support lead
              generation and follow-up.
            </p>
            <div className="hero-in hero-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
              <ButtonLink href={page.secondaryCta.href} variant="secondary">
                {page.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                How our approach fits together
              </p>
              <ol>
                {heroPanel.map((step, i) => (
                  <li key={step.stage}>
                    {i > 0 && (
                      <div aria-hidden="true" className="ml-[19px] h-4 w-0.5 bg-neutral-800" />
                    )}
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${fillAt(i)}`}
                      >
                        <NamedIcon name={step.icon} className="h-6 w-6" />
                      </span>
                      <span className="text-lg font-semibold leading-snug">{step.stage}</span>
                    </div>
                    <p className="ml-[52px] text-sm text-neutral-700">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </figure>
        </PageHero>

        {/* B. Who we are */}
        <PageSection
          id="who-we-are"
          heading="Who We Are"
          intro={
            <>
              <p>
                OKIKO HIGH Digital Marketing Agency provides digital marketing,
                marketing automation, and SaaS solutions. Our approach combines
                marketing strategy with automation to help entrepreneurs spend less
                time managing repetitive tasks and more time growing their businesses.
              </p>
              <p>
                We value collaboration with ambitious agency owners, entrepreneurs, and
                marketing professionals who share our commitment to innovation and
                customer success.
              </p>
            </>
          }
        >
          <div className="flex max-w-3xl items-start gap-3.5 rounded-lg border border-brand-blue/30 bg-surface-muted p-4">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-blue text-white"
            >
              <NamedIcon name="flag" className="h-6 w-6" />
            </span>
            <p className="text-lg font-semibold leading-snug text-neutral-900">{mission}</p>
          </div>

          <h3 className="mt-10 text-xl font-semibold">OKIKO HIGH at a glance</h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            {glance.map((item, index) => (
              <div
                key={item.label}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  {item.label}
                </dt>
                <dd className="mt-2 text-lg font-semibold leading-snug">{item.value}</dd>
              </div>
            ))}
          </dl>
        </PageSection>

        {/* C. How we work */}
        <PageSection
          id="approach"
          heading="How We Approach Marketing and Automation"
          intro={
            <p>
              We pair marketing strategy with automation, and we keep the scope clear.
              These are the principles behind how the services on this site are
              described.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-3">
            {approach.map((item, index) => (
              <li
                key={item.title}
                style={{ "--reveal-i": index % 3 } as CSSProperties}
                className={`card-lift reveal-on-scroll rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={item.icon} title={item.title} />
                <p className="mt-4 text-neutral-700">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-neutral-700">{approachLimits}</p>
        </PageSection>

        {/* D. Service cards */}
        <PageSection
          id="services"
          heading="What OKIKO HIGH Offers"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Six services, each with its own page covering scope, limits, and
              frequently asked questions. You do not need all six. Browse them together
              on the{" "}
              <Link href="/services" className={linkClass}>
                services overview
              </Link>
              .
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hubServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </ul>
        </PageSection>

        {/* E. Who we work with */}
        <PageSection
          id="industries"
          heading="Who We Work With"
          intro={
            <p>
              OKIKO HIGH currently serves four kinds of business, each with its own
              page. The pages describe a proposed approach, not client work, and do not
              report results. OKIKO HIGH states that it serves clients worldwide.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-2">
            {audiences.map((item, index) => (
              <li
                key={item.path}
                style={{ "--reveal-i": index % 3 } as CSSProperties}
                className={`card-lift reveal-on-scroll flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={item.icon} title={item.title} />
                <p className="mt-4 text-neutral-700">{item.description}</p>
                <div className="mt-auto pt-6">
                  <ButtonLink href={item.path} variant="secondary">
                    {item.buttonLabel}
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* F. FAQs */}
        <FaqSection
          id="faq"
          heading="About OKIKO HIGH: Questions, Answered"
          intro={
            <p>
              Want more answers? See{" "}
              <Link href="/faq" className={linkClass}>
                all frequently asked questions
              </Link>
              , grouped by the customer journey.
            </p>
          }
          faqs={faqs}
        />

        {/* G. Final CTA */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Talk With OKIKO HIGH
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                Tell us about your business and how customers reach you. We use what you
                send to respond to your inquiry; see our{" "}
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
              <div className="mt-8">
                <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
              </div>
              <p className="mt-6 text-neutral-700">Prefer to reach out directly?</p>
              <ContactActions />
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
