// Content for /industries (the industries hub) and the "other industries" strips on
// the audience pages and the services hub.
// All four audiences are currently served (owner confirmed 2026-11-02). The audience
// pages describe a proposed approach and illustrative scenarios, not client work or results.
// Nothing here adds a fact that is still TBD in docs/01.

import type { IconName } from "@/components/ui/icons";
import type { Faq } from "../shared";

export type IndustryAudience = {
  path: string;
  title: string;
  icon: IconName;
  description: string;
  buttonLabel: string;
};

export const hubPage = {
  path: "/industries",
  // The root layout appends " | OKIKO HIGH".
  title: "Industries We Help",
  description:
    "See how OKIKO HIGH marketing and automation services fit home services, professional services, property management and real estate, and healthcare, dental and med spa businesses.",
  h1: "Industries We Help",
} as const;

export const audiences: ReadonlyArray<IndustryAudience> = [
  {
    path: "/industries/home-services",
    title: "Home Services",
    icon: "call",
    description:
      "HVAC, plumbing, landscaping, general contracting, cleaning, and related businesses. How calls and quote requests turn into booked jobs, with clear handoffs.",
    buttonLabel: "Explore Home Services",
  },
  {
    path: "/industries/professional-services",
    title: "Professional Services",
    icon: "file",
    description:
      "Law, accounting, consulting, financial advice, and similar firms. A credible website, discreet intake, and dependable follow-up.",
    buttonLabel: "Explore Professional Services",
  },
  {
    path: "/industries/property-management-real-estate",
    title: "Property Management and Real Estate",
    icon: "key",
    description:
      "Property managers, landlords, rental operators, and real estate teams. Separate paths for owners, renters, and buyers, with human handoffs.",
    buttonLabel: "Explore Property Management and Real Estate",
  },
  {
    path: "/industries/healthcare",
    title: "Healthcare, Dental and Med Spa",
    icon: "shield",
    description:
      "Healthcare, dental, and med spa practices. Clearer contact paths and administrative follow-up, with clinical questions staying with your team.",
    buttonLabel: "Explore Healthcare, Dental and Med Spa",
  },
];

export const approachNote =
  "These pages describe a proposed approach, not client work or results, and the scope of each service is confirmed before any implementation.";

export const heroPanel = [
  {
    icon: "globe",
    stage: "Your industry",
    body: "Start with the page written for how your customers reach you.",
  },
  {
    icon: "clipboard",
    stage: "The services that apply",
    body: "Six services, applied differently in each industry.",
  },
  {
    icon: "file",
    stage: "A written scope",
    body: "What is included is confirmed with you before any work begins.",
  },
] as const;

// Proposed workflow framework from the research report (2026-11-02). It is an example
// of how the services can connect, not a confirmed package or a client result.
export const workflowSteps = [
  { icon: "message", label: "Inquiry" },
  { icon: "check", label: "Acknowledgment" },
  { icon: "calendar", label: "Staff handoff or scheduling" },
  { icon: "mail", label: "Follow-up" },
  { icon: "star", label: "Genuine review request" },
] as const;

export const chooseSteps = [
  {
    icon: "search",
    title: "Start with your industry",
    body: "Open the page closest to your business to see where customers drop off and which services the proposed approach connects.",
  },
  {
    icon: "check",
    title: "Match a service to the gap",
    body: "Each service page explains its scope and limits, so you can pick the one closest to the problem you want to fix.",
  },
  {
    icon: "file",
    title: "Confirm scope with us",
    body: "Tell us how customers reach you today. A written scope names what is included before any work begins.",
  },
] as const;

// Single source for the visible FAQ section and the FAQPage JSON-LD. Answers restate
// docs/01 and the audience and service pages. Nothing here adds a fact that is TBD.
export const faqs: Faq[] = [
  {
    question: "Which industries does OKIKO HIGH work with?",
    answer:
      "OKIKO HIGH currently serves four kinds of business: home services, professional services, property management and real estate, and healthcare, dental and med spa. Each has its own industry page showing how the same marketing and automation services apply to the way that kind of business gets inquiries and follows up.",
  },
  {
    question: "Which businesses are included in each industry?",
    answer:
      "Home services covers HVAC, plumbing, landscaping, general contracting, cleaning, and related businesses. Professional services covers law, accounting, consulting, financial advice, and similar firms. Property management and real estate covers property managers, landlords, rental operators, and real estate teams. Healthcare, dental and med spa covers healthcare, dental, and med spa practices.",
  },
  {
    question: "Are the services different for each industry?",
    answer:
      "The same six services apply across the industries: website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. What changes is how they are used, such as which customer questions come first and who on your team handles the next step.",
    links: [{ phrase: "six services", href: "/services" }],
  },
  {
    question: "Should I start with an industry page or a service page?",
    answer:
      "Either works. An industry page is a good start if you want to see the proposed approach for a business like yours. A service page is a good start if you already know the problem you want to fix, such as missed calls or unanswered reviews.",
  },
  {
    question: "What if my industry is not listed?",
    answer:
      "Describe your business and how customers reach you through the contact page. We can look at whether one of the six services fits, and what a realistic scope would be. Not having a dedicated industry page does not stop you from asking.",
    links: [{ phrase: "contact page", href: "/contact" }],
  },
  {
    question: "Does the same worldwide coverage apply to every industry?",
    answer:
      "Yes. OKIKO HIGH states that it serves clients worldwide, and the same coverage applies to each of the four industries. The industry pages do not describe different regions.",
  },
  {
    question: "Do the industry pages show client results or reviews?",
    answer:
      "No. The industry pages describe approaches and illustrative scenarios. They do not publish client results, ratings, or testimonials.",
  },
];
