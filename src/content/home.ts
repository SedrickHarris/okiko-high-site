// Content for / (the Home page).
// Sources: docs/01 (business description, services, audiences), the six
// service pages and the three audience pages, and the Home research report
// (2026-11-02). Service cards and "how a project starts" steps are imported from
// the Services hub content so the copy stays in one place.
//
// Still unconfirmed, so intentionally not stated here: pricing, timelines, ownership
// and exit terms, tested integrations, results, testimonials, trade-specific
// experience, partnerships, and any claim about GoHighLevel. The H1 and supporting
// copy follow the research report's draft direction and are not owner-approved
// final copy. All four audiences are currently served (owner confirmed 2026-11-02). The audience
// pages are described as proposed approaches only, not client work or results (docs/01).

import type { IconName } from "@/components/ui/icons";
import type { Faq } from "./shared";

export const homePage = {
  path: "/",
  // The root layout appends " | OKIKO HIGH".
  title: "Digital Marketing and Automation Agency",
  description:
    "OKIKO HIGH combines digital marketing strategy with automation for local businesses: websites, Google profiles, reviews, AI chat and calls, and follow-up.",
  eyebrow: "OKIKO HIGH Digital Marketing Agency",
  h1: "Connect Your Marketing. Simplify Your Next Steps.",
  // Primary contact action is TBD in docs/01. Point every CTA here so it can change
  // in one place once the owner confirms the contact path.
  primaryCta: { label: "Discuss Your Marketing Workflow", href: "/contact" },
  secondaryCta: { label: "See the six services", href: "#services" },
} as const;

// Hero figure: an example of how an inquiry can move through a business. It shows a
// proposed approach, not a package or client work, and says so on the page.
export const heroWorkflow: ReadonlyArray<{ icon: IconName; stage: string; body: string }> = [
  {
    icon: "message",
    stage: "Inquiry arrives",
    body: "A visitor uses a form or chat, or calls.",
  },
  {
    icon: "clipboard",
    stage: "It is recorded",
    body: "The inquiry reaches an agreed customer record.",
  },
  {
    icon: "bell",
    stage: "The right person knows",
    body: "The appropriate person is notified.",
  },
  {
    icon: "mail",
    stage: "Approved follow-up",
    body: "Approved messages go out.",
  },
  {
    icon: "check",
    stage: "It stops when it should",
    body: "The workflow changes when the customer replies, books, declines, or opts out.",
  },
];

// The four audience pages shown on the Home page. Card copy comes
// from src/content/industries/hub.ts.
export const homeAudiencePaths = [
  "/industries/home-services",
  "/industries/professional-services",
  "/industries/property-management-real-estate",
  "/industries/healthcare",
] as const;

// Single source for the visible FAQ section and the FAQPage JSON-LD. Answers
// restate docs/01 and the service pages; none adds a fact that is still TBD.
export const faqs: Faq[] = [
  {
    question: "What does OKIKO HIGH Digital Marketing Agency do?",
    answer:
      "OKIKO HIGH provides digital marketing, marketing automation, and software-as-a-service solutions. The work is organized into six services: website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. Each has its own page explaining scope and limits.",
    links: [{ phrase: "six services", href: "/services" }],
  },
  {
    question: "Who does OKIKO HIGH work with?",
    answer:
      "OKIKO HIGH currently serves four kinds of business, and each has its own page: home service businesses, such as HVAC, plumbing, landscaping, general contracting, and cleaning companies; professional services firms; property management and real estate businesses; and healthcare, dental, and med spa practices. Each page describes a proposed approach, not client work or results.",
    links: [{ phrase: "four kinds of business", href: "/industries" }],
  },
  {
    question: "Does OKIKO HIGH work with businesses outside the United States?",
    answer:
      "OKIKO HIGH states that it serves clients worldwide. How a service works can depend on which platform features are available in your region, so that is checked when your project is scoped.",
  },
  {
    question: "Do I need all six services?",
    answer:
      "No. Each service has its own page and scope, and you can start with the one closest to your problem. The services can connect along the customer path, from being found on Google to your website, chat or calls, and follow-up, but any connection is optional and scoped separately.",
  },
  {
    question: "Will automation replace my team?",
    answer:
      "The services are described as supporting your team, not replacing it. The chatbot helps visitors reach your team, the AI receptionist can route a caller to a person, and text and email workflows keep real conversations connected to a person. Your written scope names what is included, and your information, messages, and settings are reviewed with you and approved before they are used.",
    links: [
      { phrase: "chatbot", href: "/services/ai-chatbots" },
      { phrase: "AI receptionist", href: "/services/ai-receptionist" },
      { phrase: "text and email workflows", href: "/services/sms-email-automation" },
    ],
  },
  {
    question: "How do I get started with OKIKO HIGH?",
    answer:
      "Use the contact page to describe your business, how customers reach you today, and what you want to improve. We use that to look at which service, if any, fits and to define the scope before any work begins.",
    links: [{ phrase: "contact page", href: "/contact" }],
  },
];
