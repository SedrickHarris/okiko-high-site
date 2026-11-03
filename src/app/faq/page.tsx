import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { QuestionAnswerIllustration } from "@/components/illustrations/QuestionAnswerIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { RelatedIndustries } from "@/components/sections/RelatedIndustries";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NamedIcon } from "@/components/ui/icons";
import { allFaqs, faqGroups, faqPage as page, type FaqGroup } from "@/content/faq";
import { hubServices } from "@/content/services/hub";
import { emailHref, phoneHref, siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  pageNode,
} from "@/lib/schema";
import { HeroJumpCard } from "@/components/sections/HeroJumpCard";
import { PageHero } from "@/components/sections/PageHero";
import { fillAt } from "@/lib/brand";

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

const pageUrl = absoluteUrl(page.path);

// Organization, WebPage, BreadcrumbList, and FAQPage matching every visible
// question and answer (docs/07). No Service node, prices, ratings, areaServed,
// address, or LocalBusiness properties. FAQ markup is not expected to produce a
// rich result.
const structuredData = graph([
  pageNode(pageUrl, { type: "WebPage", name: page.h1, description: page.description }),
  breadcrumbListNode(pageUrl, [
    { name: "Home", path: "/" },
    { name: "FAQ", path: page.path },
  ]),
  faqPageNode(pageUrl, allFaqs),
]);


const workingGroupId = "faq-working-together";
const journeyGroups = faqGroups.filter((group) => group.id !== workingGroupId);
const workingGroup = faqGroups.find((group) => group.id === workingGroupId);

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

const contactButton =
  "font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:brightness-95 hover:shadow-md motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0";


function GroupIntro({ group }: { group: FaqGroup }) {
  return (
    <p>
      {group.intro} Full detail:{" "}
      {group.more.map((link, index) => (
        <span key={link.href}>
          {index > 0 && (index === group.more.length - 1 ? " and " : ", ")}
          <Link href={link.href} className={linkClass}>
            {link.label}
          </Link>
        </span>
      ))}
      .
    </p>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />

      <div className="mt-8 space-y-16">
        {/* A. Hero */}
        <PageHero>
          <div>
            <h1 className="hero-in-h1 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Straight answers about how OKIKO HIGH services fit the customer
              journey, from being found online to staying in touch after the job.
              The questions follow that order, and each group links to the pages
              with the full detail. What applies to every stage, such as pricing,
              ownership, and support, has its own section.
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
                <NamedIcon name="message" className="h-6 w-6" />
              </span>
              <p className="text-neutral-800">
                Do not see your question? Tell us how customers reach you today
                and where things slip, and we can look at whether a service, or
                something simpler, fits.
              </p>
            </div>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <HeroJumpCard
              items={faqGroups.map((group) => ({
                href: `#${group.id}`,
                label: group.label,
                icon: group.id === workingGroupId ? "clipboard" : undefined,
              }))}
            />
          </figure>
        </PageHero>

        {/* B. Service cards */}
        <PageSection
          id="services"
          heading="Our Services for Local Businesses"
          intro={
            <p>
              Each service has its own page with scope, limits, FAQs, and next
              steps. Open the one closest to the problem you want to fix.
            </p>
          }
        >
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hubServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </ul>
        </PageSection>

        {/* C. Customer-journey FAQ groups, each in two columns, joined by a stage path */}
        <div className="relative space-y-16 lg:pl-10">
          <span
            aria-hidden="true"
            className="absolute bottom-12 left-3.5 top-3.5 hidden w-0.5 bg-neutral-300 lg:block"
          />
          {journeyGroups.map((group, index) => (
            <div key={group.id} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-10 top-0 z-10 hidden h-7 w-7 items-center justify-center rounded-full font-heading text-xs font-bold ring-4 ring-white lg:flex ${fillAt(index)}`}
              >
                {index + 1}
              </span>
              <p
                className={`mb-4 inline-block rounded-full px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider ${fillAt(index)}`}
              >
                Stage {index + 1} of {journeyGroups.length}
              </p>
              <FaqSection
                id={group.id}
                heading={group.heading}
                intro={<GroupIntro group={group} />}
                faqs={group.faqs}
              />
            </div>
          ))}
        </div>

        {/* C2. Questions that apply across every stage, set apart in a branded panel */}
        {workingGroup && (
          <div className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-green px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-brand-ink">
              <NamedIcon name="clipboard" className="h-4 w-4" />
              Applies to all five stages
            </p>
            <FaqSection
              id={workingGroup.id}
              heading={workingGroup.heading}
              intro={<GroupIntro group={workingGroup} />}
              columnClassName="bg-white"
              faqs={workingGroup.faqs}
            />
          </div>
        )}

        <RelatedIndustries
          twoColumns
          heading="See How the Services Fit Your Industry"
          intro="The six services apply differently depending on how your customers reach you. Choose your industry to see the proposed approach."
        />

        {/* D. Final CTA */}
        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
              <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Still Have a Question?
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
                <a href={emailHref} className={`${contactButton} bg-brand-yellow`}>
                  <NamedIcon name="mail" className="h-5 w-5" />
                  {siteConfig.email}
                </a>
                <a href={phoneHref} className={`${contactButton} bg-brand-green`}>
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
