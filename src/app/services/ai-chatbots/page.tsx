import type { Metadata } from "next";
import Link from "next/link";
import { IconCardHeading } from "@/components/cards/IconCardHeading";
import { ChatHandoffIllustration } from "@/components/illustrations/ChatHandoffIllustration";
import { ChatWidgetIllustration } from "@/components/illustrations/ChatWidgetIllustration";
import { PhoneChat } from "@/components/illustrations/PhoneChat";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageSection } from "@/components/sections/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MessageIcon, NamedIcon } from "@/components/ui/icons";
import { SourceLinks } from "@/components/ui/SourceLinks";
import {
  aiChatbotsPage as page,
  canAnswer,
  comparisonRows,
  connectionNotes,
  connections,
  costFactors,
  disclosureSample,
  faqs,
  helpCards,
  journeys,
  likelyUseful,
  mustHandOff,
  noticePoints,
  sampleConversation,
  scopeColumns,
  setupSteps,
  simplerMayDo,
  sources,
} from "@/content/services/ai-chatbots";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbListNode,
  faqPageNode,
  graph,
  organizationNode,
} from "@/lib/schema";

// AI chatbot availability is TBD in docs/01. Keep the page out of search results
// (and out of the sitemap) until the owner confirms the offering, then remove
// `robots` here and add the route to src/app/sitemap.ts.
export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
  robots: { index: false, follow: true },
};

const pageUrl = absoluteUrl(page.path);

// No Service node until availability and scope are confirmed (docs/07).
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
    { name: "Services", path: "/services" },
    { name: "AI Chatbots", path: page.path },
  ]),
  faqPageNode(pageUrl, faqs),
]);

// Brand accents cycled across cards: top rule colors, icon tones, and table tiles.
const accents = ["border-t-brand-blue", "border-t-brand-green", "border-t-brand-yellow"] as const;
const tones = ["default", "included", "optional"] as const;
const rowTiles = [
  "bg-surface-muted text-brand-blue-strong",
  "bg-brand-blue text-brand-ink",
  "bg-brand-green text-brand-ink",
] as const;

const contactButton =
  "font-heading inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold text-brand-ink hover:brightness-95 hover:shadow-md motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-150 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0";

const telHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;

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
          { name: "AI Chatbots" },
        ]}
      />

      <div className="mt-8 space-y-16">
        {/* Hero */}
        <header className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="hero-in-h1 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="hero-in hero-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              An AI website chatbot answers routine questions, collects inquiry
              details, and helps visitors take the next step, such as requesting a
              quote, booking an appointment, or reaching your team. OKIKO HIGH
              builds it around your approved information, your inquiry process, and
              a real route to a person.
            </p>
            <div className="hero-in hero-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">
                Explore how it works
              </ButtonLink>
            </div>
            <p className="hero-in hero-delay-2 mt-4 max-w-2xl text-sm text-neutral-600">
              What a chatbot can do depends on how it is configured and what it is
              connected to. Tell us how inquiries reach you today, and we can look
              at whether a chatbot, or something simpler, fits.
            </p>
          </div>
          <figure className="hero-in hero-delay-3 mx-auto w-full max-w-md lg:mx-0 lg:w-[26rem] lg:max-w-none">
            <ChatWidgetIllustration />
          </figure>
        </header>

        {/* 1. What it can help with */}
        <PageSection
          id="help"
          heading="What a Website Chatbot Can Help With"
          intro={
            <p>
              Scope depends on configuration and the systems the chatbot is
              connected to. These are the four jobs we design around.
            </p>
          }
        >
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {helpCards.map((card) => (
              <li key={card.title} className="rounded-lg border border-neutral-200 p-5">
                <IconCardHeading icon={card.icon} title={card.title} />
                <p className="mt-3 text-neutral-700">{card.body}</p>
              </li>
            ))}
          </ul>
          <SourceLinks sources={[sources.highLevelFunctions]} />
          <p className="mt-1 text-sm text-neutral-600">
            This describes what such platforms document, not OKIKO HIGH results.
          </p>
        </PageSection>

        {/* 2. Journeys and sample conversation */}
        <PageSection
          id="journeys"
          heading="From a Website Question to a Useful Next Step"
          muted
          intro={<p>Four situations a chatbot setup should handle well.</p>}
        >
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journeys.map((journey, index) => (
              <li
                key={journey.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <p className="text-sm font-semibold text-brand-blue-strong">
                  Journey {index + 1}
                </p>
                <div className="mt-2">
                  <IconCardHeading icon={journey.icon} tone={tones[index % tones.length]} title={journey.title} />
                </div>
                <p className="mt-3 text-neutral-800">{journey.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">A sample conversation</h3>
              <p className="mt-3 text-neutral-700">
                This shows the behavior we design for: identify as AI, collect only
                what is needed, decline to invent a price, and pass the request to a
                person.
              </p>
              <h4 className="mt-6 text-lg font-semibold">What to notice in this chat</h4>
              <ol className="mt-3 space-y-3">
                {noticePoints.map((point, index) => (
                  <li key={point.title} className="rounded-lg border border-neutral-200 bg-white p-4">
                    <div className="min-w-0">
                      <IconCardHeading icon={point.icon} tone={tones[index % tones.length]} title={point.title} as="h4" />
                      <p className="mt-2 text-sm text-neutral-700">{point.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-4 rounded-lg border border-brand-blue/30 bg-white p-4 text-neutral-700">
                Sample conversation with a fictional business and sample data. It is
                not a client result.
              </p>
              <SourceLinks sources={[sources.highLevelSetup]} label="Source" />
            </div>
            <figure>
              <PhoneChat
                turns={sampleConversation}
                badges={Object.fromEntries(noticePoints.map((point, i) => [point.turn, i + 1]))}
              />
              <figcaption className="mt-4 text-center text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Sample chat - fictional business
              </figcaption>
            </figure>
          </div>
        </PageSection>

        {/* 3. Comparison */}
        <PageSection
          id="alternatives"
          heading="AI Chatbots, Rule-Based Bots, and Live Chat"
          intro={
            <p>
              The right choice depends on how predictable your questions are and who
              is available to answer.
            </p>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                How rule-based bots, AI chatbots, and live chat compare
              </caption>
              <thead>
                <tr className="border-b-2 border-brand-blue bg-surface-muted">
                  <th scope="col" className="font-heading px-4 py-3 font-bold">Approach</th>
                  <th scope="col" className="font-heading px-4 py-3 font-bold">How it works</th>
                  <th scope="col" className="font-heading px-4 py-3 font-bold">Main limitation</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr key={row.approach} className="border-b border-neutral-200 align-top">
                    <th scope="row" className="px-4 py-4 text-left">
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${rowTiles[index % rowTiles.length]}`}
                        >
                          <NamedIcon name={row.icon} className="h-6 w-6" />
                        </span>
                        <span className="text-base font-semibold">{row.approach}</span>
                      </span>
                    </th>
                    <td className="px-4 py-4 text-neutral-800">{row.how}</td>
                    <td className="px-4 py-4 text-neutral-800">{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl rounded-lg border border-brand-blue/30 bg-surface-muted p-4 text-neutral-700">
            <strong className="text-brand-ink">Hybrid note:</strong> many businesses
            use AI for routine tasks and people for exceptions. That only works with a
            functioning handoff, not just a &ldquo;contact us&rdquo; message.
          </p>
          <SourceLinks sources={[sources.hubspotBot, sources.nist, sources.highLevelHandover]} />
        </PageSection>

        {/* 4. Limits and handoff */}
        <PageSection
          id="limits"
          heading="Clear Answers, Clear Limits, and Human Handoff"
          muted
          intro={
            <p>
              AI can make mistakes. Approved knowledge improves relevance but does
              not eliminate errors, so we set limits on what the chatbot may say and
              keep a person in reach.
            </p>
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="check" tone="included" title="Can answer" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {canAnswer.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="headset" tone="optional" title="Must hand off to a person" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {mustHandOff.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="text-lg font-semibold">Optional, with other ways to reach you</h3>
              <p className="mt-3 text-neutral-800">
                The chatbot is labeled as AI, and visitors can ignore or dismiss it.
                Phone and form contact stay available. Who responds to handoffs, and
                how quickly, has to be a real arrangement on your side before launch.
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Sample disclosure wording. Final wording is reviewed with you:
              </p>
              <p className="mt-1 rounded-lg border border-brand-blue/30 bg-surface-muted px-4 py-3 text-neutral-800">
                {disclosureSample}
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <p className="text-sm font-semibold text-brand-blue-strong">
                General customer-service evidence
              </p>
              <p className="font-heading mt-1 text-4xl font-extrabold tracking-tight">87%</p>
              <p className="mt-2 text-neutral-800">
                In a 2026 Gartner survey of 3,566 customers, 87% said access to a
                human agent is essential when companies use generative AI for
                customer service.
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                This is a general customer-service finding, not a local-business
                conversion benchmark.
              </p>
            </div>
          </div>
          <SourceLinks sources={[sources.nist, sources.gartner]} />
        </PageSection>

        {/* 5. Setup */}
        <PageSection
          id="how-it-works"
          heading="What Goes Into a Useful Chatbot Setup"
          intro={
            <p>
              A managed setup is more than installing a widget. Booking, CRM updates,
              and text follow-up each need their own configuration and permissions.
            </p>
          }
        >
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {setupSteps.map((step, index) => (
              <li
                key={step.title}
                className={`rounded-lg border border-neutral-200 border-t-4 bg-white p-5 ${accents[index % accents.length]}`}
              >
                <p className="text-sm font-semibold text-brand-blue-strong">Step {index + 1}</p>
                <div className="mt-2">
                  <IconCardHeading icon={step.icon} tone={tones[index % tones.length]} title={step.title} />
                </div>
                <p className="mt-3 text-neutral-800">{step.body}</p>
                <p className="mt-3 text-sm text-neutral-600">
                  <span className="font-semibold">From you:</span> {step.clientInput}
                </p>
              </li>
            ))}
          </ol>
          <SourceLinks sources={[sources.highLevelSetup]} />
          <p className="mt-1 text-sm text-neutral-600">
            Our own process is confirmed with you when we scope the project.
          </p>
        </PageSection>

        {/* 6. Connections */}
        <PageSection
          id="connect"
          heading="Connect Website Chat to Your Customer Workflow"
          muted
          intro={
            <p>
              The website widget is the core of the service. Each connection beyond
              it is verified individually, because compatibility depends on your
              platform, plan, and permissions.
            </p>
          }
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 rounded-lg bg-brand-blue px-6 py-3.5 text-brand-ink">
              <MessageIcon className="h-6 w-6" />
              <span className="font-heading text-lg font-bold">
                Website chat widget
                <span className="block font-sans text-sm font-medium">Core scope</span>
              </span>
            </div>
            <div aria-hidden="true" className="h-6 w-0.5 bg-neutral-800" />
            <ul className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {connections.map((item) => (
                <li key={item.title} className="rounded-lg border border-neutral-200 bg-white p-4">
                  <IconCardHeading icon={item.icon} title={item.title} />
                  <p className="mt-3 text-sm text-neutral-700">{item.note}</p>
                  <span className="mt-3 inline-block rounded-full border-[1.5px] border-dashed border-neutral-600 px-2.5 py-px text-xs font-semibold text-neutral-800">
                    Subject to verification
                  </span>
                </li>
              ))}
              <li className="rounded-lg border border-brand-blue/30 bg-white p-4">
                <IconCardHeading icon="headset" tone="included" title="Your team" />
                <p className="mt-3 text-sm text-neutral-700">A named owner for every handoff</p>
              </li>
            </ul>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {connectionNotes.map((note) => (
              <div key={note.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <h3 className="text-lg font-semibold">{note.title}</h3>
                <p className="mt-2 text-neutral-800">{note.body}</p>
              </div>
            ))}
          </div>
          <SourceLinks
            sources={[sources.highLevelSetup, sources.googleChatDiscontinued, sources.googleContactOptions]}
          />
        </PageSection>

        {/* 7. Scope and cost */}
        <PageSection
          id="scope"
          heading="What Is Included, What Is Not, and What Affects Cost"
          intro={
            <p>
              A software subscription buys platform capability. A managed setup adds
              the work around it. Both belong in the cost picture.
            </p>
          }
        >
          <div className="grid gap-6 md:grid-cols-3">
            {scopeColumns.map((column) => (
              <div key={column.heading} className="rounded-lg border border-neutral-200 bg-white p-5">
                <IconCardHeading icon={column.icon} tone={column.tone} title={column.heading} />
                <p className="mt-3 text-sm text-neutral-600">{column.note}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-xl font-semibold">What affects the cost</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {costFactors.map((factor, index) => (
              <div
                key={factor.title}
                className={`rounded-lg border border-neutral-200 border-t-4 p-5 ${accents[index % accents.length]}`}
              >
                <IconCardHeading icon={factor.icon} tone={tones[index % tones.length]} title={factor.title} as="h4" />
                <p className="mt-3 text-neutral-800">{factor.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-neutral-700">
            We do not publish a price on this page. Request a scope and we will
            identify what drives yours.
          </p>
          <SourceLinks sources={[sources.chatbasePricing]} />
          <p className="mt-1 text-sm text-neutral-600">
            Shown as one example of vendor billing units. It is not an OKIKO HIGH price.
          </p>
        </PageSection>

        {/* 8. Fit */}
        <PageSection
          id="fit"
          heading="Is a Chatbot the Right Fit for Your Business?"
          muted
          intro={
            <p>
              Look at inquiry volume, repeated questions, after-hours demand, and
              staff capacity. Then compare the chatbot against a better FAQ, contact
              form, or booking link.
            </p>
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="check" tone="included" title="Likely useful" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {likelyUseful.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <IconCardHeading icon="minus" tone="muted" title="Simpler option may be enough" />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-800">
                {simplerMayDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-neutral-200 bg-white p-5">
            <h3 className="text-lg font-semibold">How we would measure it</h3>
            <p className="mt-3 text-neutral-800">
              Useful inquiries, booking accuracy, successful handoffs, and staff time
              saved, each compared against your baseline. A chat is not automatically
              a qualified lead, and a qualified lead is not a completed sale, so we
              count them separately.
            </p>
            <p className="mt-3 text-neutral-700">
              We do not promise conversion growth. Results depend on your site, your
              inquiries, and how quickly your team responds.
            </p>
          </div>
          <Cta />
        </PageSection>

        <FaqSection id="faq" heading="Questions About Website Chatbots" faqs={faqs} />

        <section
          aria-labelledby="final-cta"
          className="rounded-xl border-2 border-brand-blue bg-surface-muted p-6 sm:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div>
            <h2 id="final-cta" className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to Talk Through Your Website Chat Workflow?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-neutral-700">
              Tell us how inquiries reach you today and what you want visitors to be
              able to do. We use that to look at whether a chatbot, or something
              simpler, fits. We use what you send to respond to your inquiry; see our{" "}
              <Link href="/privacy-policy" className="text-brand-blue-strong underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
            <Cta />
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
              <ChatHandoffIllustration />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
