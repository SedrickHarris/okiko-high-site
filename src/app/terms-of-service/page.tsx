import type { Metadata } from "next";
import Link from "next/link";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { QuestionAnswerIllustration } from "@/components/illustrations/QuestionAnswerIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroJumpCard } from "@/components/sections/HeroJumpCard";
import { PageHero } from "@/components/sections/PageHero";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContactActions } from "@/components/ui/ContactActions";
import { NamedIcon } from "@/components/ui/icons";
import { StepBadge } from "@/components/ui/StepBadge";
import {
  automationItems,
  doNotSend,
  engagementNote,
  engagementSteps,
  faqs,
  glanceCards,
  industryCards,
  industryNote,
  jumpItems,
  lastUpdated,
  moreCards,
  noGuarantees,
  platformCards,
  responsibilityItems,
  responsibilityNote,
  scopeCards,
  scopeCoverage,
  serviceDescriptions,
  servicesIntro,
  servicesNote,
  termsPage as page,
  websiteUse,
} from "@/content/terms-of-service";
import { hubServices } from "@/content/services/hub";
import { placeholderRobots } from "@/data/placeholder-pages";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  pageNode,
} from "@/lib/schema";
import { accents } from "@/lib/brand";

const pageUrl = absoluteUrl(page.path);

// Setting openGraph on a page replaces the root layout's openGraph object, so the
// site name, type, and image are repeated here (same pattern as /privacy-policy).
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
  ...placeholderRobots("/terms-of-service"),
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

// Verified facts only (docs/07). The email and phone in the shared Organization node are
// shown on this page (closing section), and `dateModified` matches the visible
// "Last updated" date. The FAQPage node reads the same objects as the visible FAQ.
// No LocalBusiness, address, hours, sameAs, areaServed, or ratings.
const structuredData = graph([
  {
    ...pageNode(pageUrl, { type: "WebPage", name: page.h1, description: page.description }),
    dateModified: lastUpdated.iso,
  },
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "Terms of Service", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

const tones = ["default", "included", "optional"] as const;

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

const listClass = "list-disc space-y-2 pl-5 text-neutral-800";

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms of Service" }]} />

      <div className="mt-8 space-y-16">
        {/* A. Hero */}
        <PageHero layout="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="hero-in-h1 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              {page.intro}
            </p>
            <p className="hero-in hero-delay-1 mt-3 text-sm font-semibold text-neutral-700">
              Last updated:{" "}
              <time dateTime={lastUpdated.iso}>{lastUpdated.display}</time>
            </p>
            <div className="hero-in hero-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
              <ButtonLink href={page.secondaryCta.href} variant="secondary">
                {page.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <HeroJumpCard title="On this page" items={jumpItems} />
          </figure>
        </PageHero>

        {/* B. At a glance */}
        <PageSection
          id="at-a-glance"
          heading="Terms at a Glance"
          intro={<p>The short version. The sections below give the detail.</p>}
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {glanceCards.map((card, index) => (
              <li
                key={card.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={card.icon} tone={tones[index % tones.length]} title={card.title} />
                <p className="mt-3 text-neutral-800">{card.body}</p>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* C. Who these terms cover */}
        <PageSection
          id="scope"
          heading="Who These Terms Cover"
          muted
          intro={
            <>
              {scopeCoverage.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            {scopeCards.map((card, index) => (
              <div key={card.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <IconCardHeading icon={card.icon} tone={tones[index % tones.length]} title={card.title} />
                <div className="mt-4 space-y-3 text-neutral-800">
                  {card.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-neutral-800">
            Read these terms alongside our{" "}
            <Link href="/privacy-policy" className={linkClass}>
              Privacy Policy
            </Link>
            .
          </p>
        </PageSection>

        {/* D. Using this website */}
        <PageSection id="website-use" heading="Using This Website" intro={<p>{websiteUse.intro}</p>}>
          <ul className={`max-w-3xl ${listClass}`}>
            {websiteUse.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-blue bg-white p-5">
              <IconCardHeading icon="file" tone="default" title="Website content" />
              <p className="mt-3 text-neutral-800">{websiteUse.contentNote}</p>
            </div>
            <div className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-green bg-white p-5">
              <IconCardHeading icon="globe" tone="included" title="Links to other websites" />
              <p className="mt-3 text-neutral-800">{websiteUse.linksNote}</p>
            </div>
            <div className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-yellow bg-white p-5">
              <IconCardHeading icon="scale" tone="optional" title="General information only" />
              <p className="mt-3 text-neutral-800">{websiteUse.infoNote}</p>
            </div>
          </div>

          <aside
            aria-labelledby="do-not-send"
            className="mt-6 max-w-3xl rounded-lg border border-brand-blue/30 border-l-4 border-l-brand-blue bg-surface-muted p-5"
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-blue text-white"
              >
                <NamedIcon name="warning" className="h-6 w-6" />
              </span>
              <h3 id="do-not-send" className="text-lg font-semibold leading-snug">
                {doNotSend.heading}
              </h3>
            </div>
            <p className="mt-3 text-neutral-800">{doNotSend.body}</p>
            <ul className={`mt-3 ${listClass}`}>
              {doNotSend.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-neutral-800">{doNotSend.note}</p>
          </aside>
        </PageSection>

        {/* E. Service cards */}
        <PageSection id="services" heading="Terms That Apply to Each Service" intro={<p>{servicesIntro}</p>}>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hubServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                description={serviceDescriptions[service.slug]}
                showStages={false}
              />
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm text-neutral-600">{servicesNote}</p>
        </PageSection>

        {/* F. How a project is set up */}
        <PageSection
          id="engagements"
          heading="How a Project Is Set Up"
          muted
          intro={
            <p>
              Every project starts with a conversation and a written scope. Here is
              what that covers.
            </p>
          }
        >
          <ol className="grid gap-6 md:grid-cols-3">
            {engagementSteps.map((step, index) => (
              <li
                key={step.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <StepBadge index={index} className="mb-2" />
                <div className="mt-2">
                  <IconCardHeading icon={step.icon} tone={tones[index % tones.length]} title={step.title} />
                </div>
                <p className="mt-3 text-neutral-800">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-neutral-800">{engagementNote}</p>
        </PageSection>

        {/* G. Client responsibilities */}
        <PageSection
          id="responsibilities"
          heading="Your Responsibilities as a Client"
          intro={<p>When you work with OKIKO HIGH, you agree to:</p>}
        >
          <ul className={`max-w-3xl ${listClass}`}>
            {responsibilityItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl rounded-lg border border-neutral-200 bg-white p-4 text-neutral-800">
            {responsibilityNote}
          </p>
        </PageSection>

        {/* H. Industry notes */}
        <PageSection
          id="industries"
          heading="Notes for Professional Services, Home Services, and Property Management"
          intro={
            <p>
              Different industries bring different rules. These notes come from the
              industry pages, which explain each in more detail.
            </p>
          }
        >
          <ul className="grid gap-6 lg:grid-cols-3">
            {industryCards.map((card, index) => (
              <li
                key={card.title}
                className={`flex flex-col rounded-lg border border-neutral-200 border-t-4 bg-white p-6 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={card.icon} tone={tones[index % tones.length]} title={card.title} />
                <p className="mt-4 text-neutral-800">{card.body}</p>
                <div className="mt-auto pt-6">
                  <ButtonLink href={card.href} variant="secondary">
                    {card.buttonLabel}
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm text-neutral-600">{industryNote}</p>
        </PageSection>

        {/* I. AI, automation, and third-party platforms */}
        <PageSection
          id="platforms-and-ai"
          heading="AI, Automation, and Third-Party Platforms"
          muted
          intro={<p>What to keep in mind when a service uses AI, automated messages, or outside platforms.</p>}
        >
          <ul className={`max-w-3xl ${listClass}`}>
            {automationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {platformCards.map((card, index) => (
              <li
                key={card.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={card.icon} tone={tones[index % tones.length]} title={card.title} />
                <p className="mt-3 text-neutral-800">{card.body}</p>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* J. No guarantees */}
        <PageSection id="no-guarantees" heading="What We Do Not Promise" intro={<p>{noGuarantees.intro}</p>}>
          <ul className={`max-w-3xl ${listClass}`}>
            {noGuarantees.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl rounded-lg border border-neutral-200 bg-white p-4 text-neutral-800">
            {noGuarantees.disclaimer}
          </p>
        </PageSection>

        {/* K. Changes, privacy, contact */}
        <PageSection id="more" heading="Changes, Privacy, and Contact">
          <ul className="grid gap-6 md:grid-cols-3">
            {moreCards.map((card, index) => (
              <li
                key={card.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={card.icon} tone={tones[index % tones.length]} title={card.title} />
                <p className="mt-3 text-neutral-800">{card.body}</p>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* L. FAQs (two columns, same data as the FAQPage JSON-LD) */}
        <FaqSection
          id="faq"
          heading="Terms of Service Questions, Answered"
          intro={
            <p>
              More answers about our services are on the{" "}
              <Link href="/faq" className={linkClass}>
                FAQ page
              </Link>
              , and each{" "}
              <Link href="/services" className={linkClass}>
                service page
              </Link>{" "}
              explains how that work is set up.
            </p>
          }
          faqs={faqs}
        />

        {/* M. Final CTA */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Questions About These Terms?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                Call or email us and tell us what you would like to know. If your
                question is about a project, name the service so we can answer it
                against the scope. Please do not send sensitive information.
              </p>
              <div className="mt-8">
                <ButtonLink href={page.primaryCta.href}>Contact OKIKO HIGH</ButtonLink>
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
