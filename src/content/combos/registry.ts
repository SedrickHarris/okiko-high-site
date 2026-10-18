// Registry of audience x service combo pages: 4 audiences x 6 services = 24 cells.
//
// Each cell has a content file at src/content/combos/{audience}/{service}.ts that
// exports `combo` (a ComboContent). Add the import and an entry below to build a page.
//
// `published` follows the build-then-approve-indexing flow:
// - false: the page is built, marked noindex, and left out of the sitemap and out of
//   every cross-link.
// - true: the page is indexable, listed in the sitemap, and linked from related pages.
// Set it to true only after the owner approves the page.

import { combo as homeServicesAiReceptionist } from "./home-services/ai-receptionist";
import { combo as homeServicesWebsiteDesign } from "./home-services/website-design";
import {
  audienceSlugs,
  serviceSlugs,
  type AudienceSlug,
  type ComboContent,
  type ServiceSlug,
} from "./types";

export { audienceSlugs, serviceSlugs };
export type { AudienceSlug, ServiceSlug };

export const audienceInfo: Record<AudienceSlug, { name: string; path: string }> = {
  "home-services": { name: "Home Services", path: "/industries/home-services" },
  "professional-services": { name: "Professional Services", path: "/industries/professional-services" },
  "property-management-real-estate": {
    name: "Property Management and Real Estate",
    path: "/industries/property-management-real-estate",
  },
  healthcare: { name: "Healthcare, Dental & Med Spa", path: "/industries/healthcare" },
};

export const serviceInfo: Record<ServiceSlug, { name: string; path: string }> = {
  "website-design": { name: "Website Design", path: "/services/website-design" },
  "ai-chatbots": { name: "AI Chatbots", path: "/services/ai-chatbots" },
  "ai-receptionist": { name: "AI Receptionist", path: "/services/ai-receptionist" },
  "reputation-management": { name: "Reputation Management", path: "/services/reputation-management" },
  "google-business-profile": {
    name: "Google Business Profile",
    path: "/services/google-business-profile-optimization",
  },
  "sms-email-automation": { name: "SMS and Email Automation", path: "/services/sms-email-automation" },
};

type ComboEntry = { content: ComboContent; published: boolean };

// Built combos. Add the import above and an entry here to build a page; set `published`
// to true only after the owner approves it.
//
// The route lives at src/app/industries/[audience]/[service]/ and was enabled when the
// first combo was added: with `output: "export"`, Next fails the build when
// generateStaticParams returns nothing, so it must not be routed while this list is empty.
const entries: ReadonlyArray<ComboEntry> = [
  { content: homeServicesWebsiteDesign, published: false },
  { content: homeServicesAiReceptionist, published: false },
];

export function comboPath(audience: AudienceSlug, service: ServiceSlug): string {
  return `/industries/${audience}/${service}`;
}

/** Every built combo, published or not. Drives generateStaticParams. */
export function builtCombos(): ReadonlyArray<ComboEntry> {
  return entries;
}

/** Only approved combos. Drives the sitemap and every cross-link. */
export function publishedCombos(): ReadonlyArray<ComboContent> {
  return entries.filter((entry) => entry.published).map((entry) => entry.content);
}

export function getCombo(audience: string, service: string): ComboEntry | undefined {
  return entries.find(
    (entry) => entry.content.audience === audience && entry.content.service === service,
  );
}
