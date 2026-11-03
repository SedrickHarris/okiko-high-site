import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { StepBadge } from "@/components/ui/StepBadge";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { QuestionAnswerIllustration } from "@/components/illustrations/QuestionAnswerIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon } from "@/components/ui/icons";
import { faqs, heroWorkflow, homeAudiencePaths, homePage as page } from "@/content/home";
import { audiences } from "@/content/industries/hub";
import { expectSteps, hubServices } from "@/content/services/hub";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  faqPageNode,
  graph,
  organizationNode,
  pageNode,
  websiteNode,
} from "@/lib/schema";
import { PageHero } from "@/components/sections/PageHero";
import { accents, fillAt } from "@/lib/brand";

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);

// Home page schema per docs/07: Organization, WebSite, WebPage, plus FAQPage
// matching the visible FAQ. No logo, sameAs, address, hours, LocalBusiness,
// ratings, or Service nodes until the owner supplies and confirms them.
const structuredData = graph([
  organizationNode(),
  websiteNode(),
  pageNode(pageUrl, {
    name: siteConfig.name,
    description: page.description,
    breadcrumb: false,
  }),
  faqPageNode(pageUrl, faqs),
]);


const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

const contactButton =
  "font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:brightness-95 hover:shadow-md motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0";

const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;

const homeAudiences = homeAudiencePaths
  .map((path) => audiences.find((audience) => audience.path === path))
  .filter((audience): audience is NonNullable<typeof audience> => audience !== undefined);

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />

      <div className="space-y-16">
        {/* A. Hero */}
        <PageHero layout="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="hero-in-h1 font-heading text-sm font-bold uppercase tracking-wider text-brand-blue-strong">
              {page.eyebrow}
            </p>
            <h1 className="hero-in-h1 mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              OKIKO HIGH combines digital marketing strategy with automation to help
              businesses strengthen their online presence, connect with customers, and
              simplify marketing and customer-management tasks. Six services cover the
              path from being found on Google to your website, chat and calls, and
              follow-up.
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
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-blue text-white"
              >
                <NamedIcon name="globe" className="h-6 w-6" />
              </span>
              <p className="text-neutral-800">
                OKIKO HIGH serves clients worldwide. What fits your business depends
                on how your customers reach you today.
              </p>
            </div>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Example workflow: inquiry to follow-up
              </p>
              <ol>
                {heroWorkflow.map((step, i) => (
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
              <p className="mt-5 border-t border-neutral-200 pt-4 text-sm text-neutral-700">
                A proposed approach, not a package. Your written scope defines the
                real steps, tools, and handoffs.
              </p>
            </div>
          </figure>
        </PageHero>

        {/* B. Service cards */}
        <PageSection
          id="services"
          heading="Marketing and Automation Services for Local Businesses"
          intro={
            <p>
              Each service has its own page with scope, limits, FAQs, and next steps.
              You do not need all six. Start with the one closest to the problem you
              want to fix, or{" "}
              <Link href="/services" className={linkClass}>
                compare all six on the services page
              </Link>
              . Each page also includes a fictional sample you can look at before you
              get in touch.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hubServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-neutral-700">
            None of these services comes with a guarantee of rankings, leads, or review
            outcomes. Google and the other platforms control search results and
            reviews.
          </p>
        </PageSection>

        {/* C. Audiences */}
        <PageSection
          id="industries"
          heading="Who OKIKO HIGH Works With"
          muted
          className="xl:-mx-10"
          intro={
            <p>
              Each audience page describes a proposed approach, not client work or
              results.{" "}
              <Link href="/industries" className={linkClass}>
                See all industries
              </Link>
              .
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-2">
            {homeAudiences.map((item, index) => (
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

        {/* D. How a project starts */}
        <PageSection id="how-it-starts" heading="How a Project Starts">
          <ol className="grid gap-6 md:grid-cols-3">
            {expectSteps.map((step, index) => (
              <li
                key={step.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <StepBadge index={index} />
                <IconCardHeading icon={step.icon} title={step.title} />
                <p className="mt-2 text-neutral-800">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-neutral-700">
            We do not publish prices or timelines on this site. Setup, recurring costs,
            third-party software, and ongoing support are defined in your scope before
            pricing is given. You can also read about{" "}
            <Link href="/about" className={linkClass}>
              OKIKO HIGH&apos;s approach and mission
            </Link>
            .
          </p>
        </PageSection>

        {/* E. FAQs */}
        <FaqSection
          id="faq"
          heading="OKIKO HIGH Questions, Answered"
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

        {/* F. Final CTA */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to Connect Your Marketing?
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
