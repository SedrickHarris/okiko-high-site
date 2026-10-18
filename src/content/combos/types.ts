// Types for audience x service combo pages (/industries/{audience}/{service}).
// Combo content files import ONLY types, so scripts/check-combos.mjs can load them
// with plain Node.

import type { IconName } from "@/components/ui/icons";
import type { Faq, SourceLink } from "../shared";

export const audienceSlugs = [
  "home-services",
  "professional-services",
  "property-management-real-estate",
  "healthcare",
] as const;

export const serviceSlugs = [
  "website-design",
  "ai-chatbots",
  "ai-receptionist",
  "reputation-management",
  "google-business-profile",
  "sms-email-automation",
] as const;

export type AudienceSlug = (typeof audienceSlugs)[number];
export type ServiceSlug = (typeof serviceSlugs)[number];

type SectionBase = {
  id: string;
  heading: string;
  // Intro paragraphs under the heading.
  intro?: ReadonlyArray<string>;
  // Muted panel background. Alternate this so pages do not share one rhythm.
  muted?: boolean;
  quickAnswer?: {
    lead: string;
    detail: string;
    sources?: ReadonlyArray<SourceLink>;
    icon?: IconName;
  };
  sources?: ReadonlyArray<SourceLink>;
  // Optional data visuals, shown under the intro and before the section body.
  charts?: ChartGroup;
  stats?: StatGroup;
  table?: DataTable;
  wireframe?: PhoneWireframeData;
  structure?: StructureComparison;
  answerExample?: AnswerExample;
  // Numbered question list. With `split`, the heading and intro sit beside the list
  // on large screens instead of above it.
  numbered?: ReadonlyArray<string>;
  split?: boolean;
  accordion?: ReadonlyArray<AccordionItem>;
  // Call-routing diagram: one gate, then lanes by urgency, each with a fallback.
  callFlow?: CallFlowData;
};

/**
 * A call-routing diagram for phone-handling pages. Real text in ordered lists, so it
 * reads the same without color or sight. Use bracketed placeholders for business facts.
 */
export type CallFlowData = {
  // Accessible name and visible caption for the figure.
  label: string;
  caption: string;
  start: string;
  firstStep: string;
  gate: string;
  lanes: ReadonlyArray<{
    tone: "danger" | "urgent" | "scheduled";
    title: string;
    trigger: string;
    steps: ReadonlyArray<string>;
    fallback: string;
  }>;
  note?: string;
};

/** A collapsible item with a small label, a title, and labeled paragraphs. */
export type AccordionItem = {
  label: string;
  title: string;
  parts: ReadonlyArray<{ label: string; text: string }>;
};

/** A before/after answer example beside short guidance notes with optional sources. */
export type AnswerExample = {
  before: string;
  question: string;
  answer: string;
  note: string;
  notes: ReadonlyArray<{ title: string; body: string; source?: SourceLink }>;
};

/** Side-by-side site-structure cards: a helpful page tree versus a pattern to avoid. */
export type StructureComparison = {
  good: {
    heading: string;
    top: string;
    middle: string;
    children: ReadonlyArray<{ title: string; note: string }>;
    caption: string;
  };
  avoid: {
    heading: string;
    items: ReadonlyArray<{ title: string; note: string }>;
    caption: string;
  };
};

/** A labeled phone-screen wireframe. Use bracketed placeholders, never real business facts. */
export type PhoneWireframeData = {
  // Accessible name and visible caption for the figure.
  label: string;
  caption: string;
  businessName: string;
  tagline: string;
  callLabel: string;
  hoursLine: string;
  formTitle: string;
  fields: ReadonlyArray<string>;
  submitLabel: string;
  trustFacts: ReadonlyArray<string>;
  // Panels shown beside the phone on large screens.
  panels?: ReadonlyArray<{
    title: string;
    bullets?: ReadonlyArray<string>;
    paragraphs?: ReadonlyArray<string>;
    note?: string;
  }>;
};

/** Horizontal bar charts. Values are percentages (0 to 100). */
export type ChartGroup = {
  charts: ReadonlyArray<{
    title: string;
    rows: ReadonlyArray<{ label: string; value: number }>;
  }>;
  // Source and caveat line under the charts.
  note?: string;
};

/** Large-number callouts. Keep the label specific and the note honest about the source. */
export type StatGroup = {
  heading: string;
  items: ReadonlyArray<{ value: string; label: string }>;
  note?: string;
};

export type DataTable = {
  caption: string;
  columns: ReadonlyArray<string>;
  // The first cell of each row is the row header.
  rows: ReadonlyArray<ReadonlyArray<string>>;
  note?: string;
};

export type CardItem = { icon: IconName; title: string; body: string };

/** Heading and paragraphs only. */
export type ProseSection = SectionBase & { kind: "prose"; paragraphs?: ReadonlyArray<string> };

/** A grid of icon cards. */
export type CardsSection = SectionBase & {
  kind: "cards";
  columns?: 2 | 3;
  items: ReadonlyArray<CardItem>;
};

/** Numbered steps, in order. */
export type StepsSection = SectionBase & {
  kind: "steps";
  items: ReadonlyArray<{ title: string; body: string }>;
};

/**
 * Two lists side by side: what the page proposes versus what it does not cover.
 * `left` uses the green "included" tone and `right` the red "negative" tone.
 */
export type ScopeSection = SectionBase & {
  kind: "scope";
  left: { heading: string; items: ReadonlyArray<string> };
  right: { heading: string; items: ReadonlyArray<string> };
};

export type ComboSection = ProseSection | CardsSection | StepsSection | ScopeSection;

export type ComboContent = {
  audience: AudienceSlug;
  service: ServiceSlug;
  // The root layout appends " | OKIKO HIGH".
  title: string;
  description: string;
  h1: string;
  // Docs/03 keyword map: one primary keyword per page.
  primaryKeyword: string;
  // Short line under the H1.
  tagline: string;
  intro: ReadonlyArray<string>;
  // Optional "Quick answer" panel beside the hero text on large screens.
  heroAside?: { heading: string; body: string; steps: ReadonlyArray<string> };
  // Primary contact action is TBD in docs/01, so CTAs point to /contact.
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  // Rendered in this order. Reorder and vary the kinds per page.
  sections: ReadonlyArray<ComboSection>;
  faqsHeading?: string;
  faqs: ReadonlyArray<Faq>;
  finalCta: { heading: string; body: string; items?: ReadonlyArray<string>; label: string; href: string };
  // Related links as cards with a one-line description. When set, replaces the default
  // Related Pages list (published sibling combos are still appended). Link only pages
  // that exist and are indexable.
  related?: {
    heading: string;
    intro?: string;
    links: ReadonlyArray<{ label: string; description: string; href: string }>;
  };
};
