import Link from "next/link";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BarCharts, DataTableView, StatTiles } from "@/components/combos/ComboVisuals";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { SourceLinks } from "@/components/ui/SourceLinks";
import {
  audienceInfo,
  comboPath,
  publishedCombos,
  serviceInfo,
} from "@/content/combos/registry";
import type { ComboContent, ComboSection } from "@/content/combos/types";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
  pageNode,
} from "@/lib/schema";

const accents = ["border-t-brand-blue", "border-t-brand-green", "border-t-brand-yellow"] as const;
const chipTones = ["optional", "included", "default"] as const;

const linkClass =
  "font-semibold text-brand-blue-strong underline underline-offset-2 hover:text-brand-ink";

/** Organization, WebPage, BreadcrumbList, and FAQPage (matching the visible FAQ). */
export function comboStructuredData(content: ComboContent) {
  const path = comboPath(content.audience, content.service);
  const pageUrl = absoluteUrl(path);
  return graph([
    organizationNode(),
    pageNode(pageUrl, { name: content.h1, description: content.description }),
    breadcrumbListNode(pageUrl, [
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: audienceInfo[content.audience].name, path: audienceInfo[content.audience].path },
      { name: serviceInfo[content.service].name, path },
    ]),
    faqPageNode(pageUrl, content.faqs),
  ]);
}

function Section({ section }: { section: ComboSection }) {
  const intro = section.intro?.length ? (
    <>
      {section.intro.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </>
  ) : undefined;

  return (
    <PageSection id={section.id} heading={section.heading} intro={intro} muted={section.muted}>
      {section.charts && <BarCharts group={section.charts} />}
      {section.stats && <StatTiles group={section.stats} />}
      {section.table && <DataTableView table={section.table} />}

      {section.quickAnswer && (
        <QuickAnswer
          lead={section.quickAnswer.lead}
          detail={section.quickAnswer.detail}
          sources={section.quickAnswer.sources}
          icon={section.quickAnswer.icon}
        />
      )}

      {section.kind === "prose" &&
        section.paragraphs?.map((text) => (
          <p key={text} className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-700">
            {text}
          </p>
        ))}

      {section.kind === "cards" && (
        <ul
          className={`grid gap-6 md:grid-cols-2 ${section.columns === 2 ? "" : "lg:grid-cols-3"}`}
        >
          {section.items.map((item, index) => (
            <li
              key={item.title}
              className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
            >
              <IconCardHeading
                icon={item.icon}
                tone={chipTones[index % chipTones.length]}
                title={item.title}
              />
              <p className="mt-3 text-neutral-800">{item.body}</p>
            </li>
          ))}
        </ul>
      )}

      {section.kind === "steps" && (
        <ol className="grid gap-6 md:grid-cols-3">
          {section.items.map((step, index) => (
            <li
              key={step.title}
              className="rounded-lg border border-neutral-200 border-t-4 border-t-brand-blue bg-white p-5"
            >
              <p className="mb-3 inline-block rounded-full bg-brand-yellow px-2.5 py-0.5 font-heading text-xs font-bold text-brand-ink">
                Step {index + 1}
              </p>
              <h3 className="text-lg font-semibold leading-snug">{step.title}</h3>
              <p className="mt-2 text-neutral-800">{step.body}</p>
            </li>
          ))}
        </ol>
      )}

      {section.kind === "scope" && (
        <div className="grid gap-6 md:grid-cols-2">
          {(
            [
              { side: section.left, tone: "included", icon: "check" },
              { side: section.right, tone: "negative", icon: "minus" },
            ] as const
          ).map(({ side, tone, icon }) => (
            <div key={side.heading} className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon={icon} tone={tone} title={side.heading} />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {side.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {section.sources && <SourceLinks sources={section.sources} />}
    </PageSection>
  );
}

// Related pages: the parent audience and service pages always, plus other
// PUBLISHED combos for the same audience or the same service. Unpublished combos
// are never linked.
function Related({ content }: { content: ComboContent }) {
  const audience = audienceInfo[content.audience];
  const service = serviceInfo[content.service];
  const published = publishedCombos();
  const siblings = published.filter(
    (c) =>
      (c.audience === content.audience && c.service !== content.service) ||
      (c.service === content.service && c.audience !== content.audience),
  );
  return (
    <PageSection id="related" heading="Related Pages">
      <ul className="grid gap-3 md:grid-cols-2">
        <li>
          <Link href={audience.path} className={linkClass}>
            {audience.name}: how OKIKO HIGH approaches this industry
          </Link>
        </li>
        <li>
          <Link href={service.path} className={linkClass}>
            {service.name}: the service in detail
          </Link>
        </li>
        {content.relatedLinks?.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
        {siblings.map((c) => (
          <li key={`${c.audience}/${c.service}`}>
            <Link href={comboPath(c.audience, c.service)} className={linkClass}>
              {c.h1}
            </Link>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}

export function ComboPage({ content }: { content: ComboContent }) {
  const audience = audienceInfo[content.audience];
  const service = serviceInfo[content.service];
  return (
    <>
      <JsonLd data={comboStructuredData(content)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: audience.name, href: audience.path },
          { name: service.name },
        ]}
      />

      <div className="mt-8 space-y-16">
        <header className={content.heroAside ? "grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start" : ""}>
          <div>
            <h1 className="hero-in-h1 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {content.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-4 max-w-3xl font-heading text-xl font-semibold text-brand-blue-strong">
              {content.tagline}
            </p>
            <div className="hero-in hero-delay-1 mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-neutral-700">
              {content.intro.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <div className="hero-in hero-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={content.primaryCta.href}>{content.primaryCta.label}</ButtonLink>
              {content.secondaryCta && (
                <ButtonLink href={content.secondaryCta.href} variant="secondary">
                  {content.secondaryCta.label}
                </ButtonLink>
              )}
            </div>
          </div>

          {content.heroAside && (
            <aside
              aria-label="Quick answer"
              className="hero-in hero-delay-2 rounded-xl border border-brand-blue/30 bg-surface-muted p-6"
            >
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-brand-blue-strong">
                Quick answer
              </p>
              <h2 className="mt-2 text-xl font-bold leading-snug">{content.heroAside.heading}</h2>
              <p className="mt-3 text-neutral-800">{content.heroAside.body}</p>
              <ol className="mt-5 space-y-3">
                {content.heroAside.steps.map((step, index) => (
                  <li key={step} className="flex items-center gap-3 font-semibold">
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-heading font-extrabold text-brand-ink ${
                        ["bg-brand-blue", "bg-brand-green", "bg-brand-yellow"][index % 3]
                      }`}
                    >
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </aside>
          )}
        </header>

        {content.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        <FaqSection
          id="faq"
          heading={content.faqsHeading ?? "Questions, Answered"}
          faqs={content.faqs}
        />

        <Related content={content} />

        <section
          id="contact"
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
            {content.finalCta.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-neutral-700">
            {content.finalCta.body} We use what you send to respond to your inquiry; see our{" "}
            <Link href="/privacy-policy" className={linkClass}>
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
          <div className="mt-8">
            <ButtonLink href={content.finalCta.href}>{content.finalCta.label}</ButtonLink>
          </div>
        </section>
      </div>
    </>
  );
}
