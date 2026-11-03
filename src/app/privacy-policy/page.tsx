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
  collectCards,
  communicationPoints,
  coverage,
  doNotSend,
  faqs,
  glanceCards,
  handlingCards,
  jumpItems,
  lastUpdated,
  moreCards,
  privacyPage as page,
  rights,
  roles,
  serviceDescriptions,
  servicesIntro,
  servicesNote,
  sharingItems,
  trackingPoints,
  useItems,
  useNote,
} from "@/content/privacy-policy";
import { hubServices } from "@/content/services/hub";
import { placeholderRobots } from "@/data/placeholder-pages";
import { EmailLink, PhoneLink } from "@/components/ui/ContactLinks";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
  pageNode,
} from "@/lib/schema";
import { accents } from "@/lib/brand";

const pageUrl = absoluteUrl(page.path);

// Setting openGraph on a page replaces the root layout's openGraph object, so the
// site name, type, and image are repeated here (same pattern as /about).
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
  ...placeholderRobots("/privacy-policy"),
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
// shown on this page (rights section, FAQs, and closing section), and `dateModified`
// matches the visible "Last updated" date. The FAQPage node reads the same objects as
// the visible FAQ. No LocalBusiness, address, hours, sameAs, areaServed, or ratings.
const structuredData = graph([
  organizationNode({ withContact: true }),
  {
    ...pageNode(pageUrl, { type: "WebPage", name: page.h1, description: page.description }),
    dateModified: lastUpdated.iso,
  },
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: page.path },
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
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />

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
          heading="Privacy at a Glance"
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

        {/* C. Who this covers and the two roles */}
        <PageSection
          id="roles"
          heading="Who This Policy Covers and Our Two Roles"
          muted
          intro={
            <>
              {coverage.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            {roles.map((role, index) => (
              <div key={role.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <IconCardHeading icon={role.icon} tone={tones[index % tones.length]} title={role.title} />
                <div className="mt-4 space-y-3 text-neutral-800">
                  {role.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PageSection>

        {/* D. Information we collect */}
        <PageSection
          id="information-we-collect"
          heading="Information We Collect"
          intro={
            <p>
              What we collect depends on how you deal with us. These are the three
              situations this policy covers.
            </p>
          }
        >
          <ul className="grid gap-6 lg:grid-cols-3">
            {collectCards.map((card, index) => (
              <li
                key={card.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={card.icon} tone={card.tone} title={card.title} />
                <p className="mt-3 text-neutral-700">{card.intro}</p>
                <ul className={`mt-4 ${listClass}`}>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

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
          </aside>
        </PageSection>

        {/* E. How we use information */}
        <PageSection
          id="how-we-use-information"
          heading="How We Use Information"
          muted
          intro={<p>We use the information we collect for our own business to:</p>}
        >
          <ul className={`max-w-3xl ${listClass}`}>
            {useItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl rounded-lg border border-neutral-200 bg-white p-4 text-neutral-800">
            {useNote}
          </p>
        </PageSection>

        {/* F. Cookies, analytics, tracking and communications */}
        <PageSection
          id="cookies-and-tracking"
          heading="Cookies, Analytics, and Tracking"
          intro={
            <p>
              Here is what this website does and does not do, and what to expect if that
              changes.
            </p>
          }
        >
          <ul className={`max-w-3xl ${listClass}`}>
            {trackingPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <h3 className="mt-10 text-xl font-semibold">Email, text, and phone communications</h3>
          <ul className={`mt-4 max-w-3xl ${listClass}`}>
            {communicationPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </PageSection>

        {/* G. Service cards */}
        <PageSection
          id="services"
          heading="Information Handled Through Our Services"
          intro={<p>{servicesIntro}</p>}
        >
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

        {/* H. Sharing */}
        <PageSection
          id="sharing"
          heading="When We Share Information"
          muted
          intro={<p>We may share personal information in these situations:</p>}
        >
          <ul className={`max-w-3xl ${listClass}`}>
            {sharingItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PageSection>

        {/* I. Handling, retention, security */}
        <PageSection
          id="handling"
          heading="Where Information Is Handled, How Long We Keep It, and How We Protect It"
        >
          <ul className="grid gap-6 md:grid-cols-3">
            {handlingCards.map((card, index) => (
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

        {/* J. Your choices */}
        <PageSection
          id="your-choices"
          heading="Your Privacy Choices and Requests"
          muted
          intro={<p>{rights.intro}</p>}
        >
          <ul className={`max-w-3xl ${listClass}`}>
            {rights.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-10 text-xl font-semibold">How to make a request</h3>
          <ol className="mt-4 grid gap-6 md:grid-cols-3">
            {rights.steps.map((step, index) => (
              <li
                key={step.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <StepBadge index={index} className="mb-2" />
                <div className="mt-2">
                  <IconCardHeading icon={step.icon} tone={tones[index % tones.length]} title={step.title} />
                </div>
                <p className="mt-3 text-neutral-800">
                  {index === 0 ? (
                    <>
                      Email{" "}
                      <EmailLink className={linkClass} /> or call <PhoneLink className={linkClass} />.
                    </>
                  ) : (
                    step.body
                  )}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-neutral-800">{rights.clientNote}</p>
        </PageSection>

        {/* K. More things to know */}
        <PageSection id="more" heading="Children, Links, and Changes to This Policy">
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
          heading="Privacy Policy Questions, Answered"
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
                Questions About This Policy or Your Information?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                Call or email us and tell us what you would like to know. We use what
                you send to respond to your inquiry. If your question is about a
                business that uses our services, name that business so we can route it
                correctly.
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
