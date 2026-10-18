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
  // Primary contact action is TBD in docs/01, so CTAs point to /contact.
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  // Rendered in this order. Reorder and vary the kinds per page.
  sections: ReadonlyArray<ComboSection>;
  faqsHeading?: string;
  faqs: ReadonlyArray<Faq>;
  finalCta: { heading: string; body: string; label: string; href: string };
  // Extra links for the Related Pages section, beyond the parent audience and service
  // pages and any published sibling combos. Link only pages that exist and are indexable.
  relatedLinks?: ReadonlyArray<{ label: string; href: string }>;
};
