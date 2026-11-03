import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { PageSection } from "@/components/sections/PageSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { accents } from "@/lib/brand";
import { audiences } from "@/content/industries/hub";
import { faqs, notFoundPage as page } from "@/content/not-found";
import { hubServices } from "@/content/services/hub";
import type { CSSProperties } from "react";

// Next.js returns HTTP 404 for unmatched URLs and injects a noindex robots tag, so this
// page stays out of search results and out of the sitemap. No canonical and no JSON-LD:
// it is an error page, and the FAQ is visible content only.
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function NotFound() {
  return (
    <div className="space-y-16">
      <PageHero layout="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="hero-in font-heading text-sm font-bold uppercase tracking-wider text-brand-blue-strong">
            {page.eyebrow}
          </p>
          <h1 className="hero-in-h1 mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {page.h1}
          </h1>
          <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
            {page.body}
          </p>
          <div className="hero-in hero-delay-2 mt-8 flex flex-wrap gap-3">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
            <ButtonLink href={page.secondaryCta.href} variant="secondary">
              {page.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
        {/* Decorative only: the error message above is real text. */}
        <div
          aria-hidden="true"
          className="hero-in hero-delay-3 mx-auto hidden w-full max-w-xs rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-lg lg:block lg:w-64"
        >
          <p className="font-heading text-7xl font-extrabold tracking-tight text-brand-blue-strong">
            404
          </p>
          <div className="mx-auto mt-4 flex h-1.5 w-24 overflow-hidden rounded-full">
            <span className="flex-1 bg-brand-blue" />
            <span className="flex-1 bg-brand-green" />
            <span className="flex-1 bg-brand-yellow" />
          </div>
        </div>
      </PageHero>

      <PageSection
        id="services"
        heading={page.servicesHeading}
        intro={<p>{page.servicesIntro}</p>}
      >
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hubServices.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} showStages={false} />
          ))}
        </ul>
      </PageSection>

      <PageSection
        id="industries"
        heading={page.industriesHeading}
        intro={<p>{page.industriesIntro}</p>}
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

      <FaqSection
        id="faq"
        heading={page.faqHeading}
        intro={<p>{page.faqIntro}</p>}
        faqs={faqs}
      />
    </div>
  );
}
