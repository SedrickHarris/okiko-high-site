// Content for /about.
// Sources: docs/01 (business description, mission, founding date, services,
// audiences, coverage, proof status) and the About research report (2026-11-02).
// Service cards come from the Services hub content and audience cards from the
// Industries hub content, so the copy stays in one place.
//
// Still unconfirmed, so intentionally not stated here: pricing, timelines, ownership
// and exit terms, tested integrations, results, testimonials, ratings, founder or
// team details (none are planned), the Plano address and hours, social profile URLs,
// trade-specific experience, and any partner relationship with GoHighLevel. The
// research report treats "workflow-first delivery", "clear human handoffs", and
// "ongoing operational care" as unverified differentiators, so none is claimed.

import type { IconName } from "@/components/ui/icons";
import type { Faq } from "./shared";

export const aboutPage = {
  path: "/about",
  // The root layout appends " | OKIKO HIGH".
  title: "About OKIKO HIGH Digital Marketing Agency",
  description:
    "OKIKO HIGH combines digital marketing strategy with automation to help businesses connect with customers. Learn our mission, approach, and services.",
  h1: "About OKIKO HIGH Digital Marketing Agency",
  // Primary contact action is TBD in docs/01. Point CTAs at /contact so the
  // destination can change in one place once the owner confirms it.
  primaryCta: { label: "Discuss your business needs", href: "/contact" },
  secondaryCta: { label: "Explore our services", href: "#services" },
} as const;

// ISO date for the Organization node. The full date is visible in the FAQ ("When was
// OKIKO HIGH founded?"); the "at a glance" list shows the year only.
export const foundingDateIso = "2026-05-03";

export const heroPanel: ReadonlyArray<{ icon: IconName; stage: string; body: string }> = [
  {
    icon: "search",
    stage: "Marketing strategy",
    body: "Start with how customers find and contact your business.",
  },
  {
    icon: "repeat",
    stage: "Automation",
    body: "Take repeated tasks such as follow-up off your to-do list.",
  },
  {
    icon: "check",
    stage: "Your approval",
    body: "Messages and settings are reviewed with you before they are used.",
  },
];

export const mission =
  "Our mission is simple: make marketing smarter, business operations easier, and growth more achievable.";

export const glance: ReadonlyArray<{ label: string; value: string }> = [
  { label: "Founded", value: "2026" },
  { label: "Services", value: "Six marketing and automation services" },
  { label: "Coverage", value: "Clients worldwide" },
];

export const approach: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "search",
    title: "Strategy before tools",
    body: "Marketing strategy comes first. We look at how customers find and contact your business, then at which service, if any, fits.",
  },
  {
    icon: "repeat",
    title: "Automation for repeated work",
    body: "Automation can handle repetitive tasks such as follow-up, so you spend less time managing them and more time growing your business.",
  },
  {
    icon: "file",
    title: "A written scope",
    body: "What is included is written down and confirmed with you before work begins, and your information and messages are approved before they are used.",
  },
];

export const approachLimits =
  "None of these services comes with a guarantee of rankings, leads, or review outcomes, and prices are not published on this site. Cost depends on scope.";

// Single source for the visible FAQ section and the FAQPage JSON-LD. Answers restate
// docs/01 and the service and audience pages. Nothing here adds a fact that is TBD.
export const faqs: Faq[] = [
  {
    question: "What is OKIKO HIGH Digital Marketing Agency?",
    answer:
      "OKIKO HIGH Digital Marketing Agency provides digital marketing, marketing automation, and Software as a Service (SaaS) solutions. It combines marketing strategy with automation to help businesses connect with customers and simplify marketing and customer-management tasks.",
  },
  {
    question: "What services does OKIKO HIGH offer?",
    answer:
      "There are six services: website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. Each has its own page that explains its scope and limits. Which ones fit your business is confirmed when your project is scoped.",
  },
  {
    question: "When was OKIKO HIGH founded?",
    answer: "OKIKO HIGH was founded on May 3, 2026.",
  },
  {
    question: "Can OKIKO HIGH work with the website and software I already use?",
    answer:
      "Possibly. Compatibility depends on the actual systems, platforms, and permissions involved, so it is checked when your project is scoped rather than assumed. The scope for your business is written down and confirmed before work begins.",
  },
  {
    question: "Who does OKIKO HIGH work with?",
    answer:
      "Home-service businesses, such as HVAC, plumbing, landscaping, general contracting, and cleaning companies, are the group OKIKO HIGH currently serves. The pages for professional services, property management and real estate, and healthcare, dental and med spa describe a proposed approach, not client work.",
  },
  {
    question: "Does OKIKO HIGH work with clients outside the United States?",
    answer:
      "OKIKO HIGH states that it serves clients worldwide, and the same coverage applies to every audience. How a service works can still depend on your region, for example which platform features are available and which consent rules apply to calls and texts, so those points are checked when your project is scoped.",
  },
  {
    question: "Who is behind OKIKO HIGH?",
    answer:
      "This site presents OKIKO HIGH under the agency's name and does not feature individual owner or team profiles.",
  },
  {
    question: "Can I see client results, case studies, or reviews?",
    answer:
      "Not on this site yet. OKIKO HIGH does not currently publish client results, testimonials, or ratings here. The service pages include clearly labeled illustrative examples that use fictional businesses; they are not client work.",
  },
  {
    question: "Does OKIKO HIGH guarantee search rankings or results?",
    answer:
      "No. Google and other platforms control search results and reviews, and outcomes also depend on demand, competition, your offer, and how quickly inquiries are answered. Each service page states what it does and does not include.",
  },
  {
    question: "How do I get started with OKIKO HIGH?",
    answer:
      "Use the contact page to describe your business, how customers reach you today, and what you want to improve. A written scope is confirmed with you before any work begins. Prices are not published on this site because cost depends on scope.",
  },
];
