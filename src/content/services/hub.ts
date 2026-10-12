// Content for /services (the services hub).
// Card copy is condensed from each service page's own hero copy, and FAQ answers
// restate what those pages and docs/01 already say. Nothing here adds a fact that
// is still TBD in docs/01: prices, timelines, results, partnerships, or proof.

import type { IconName } from "@/components/ui/icons";
import type { Faq } from "./website-design";

export const hubPage = {
  path: "/services",
  // The root layout appends " | OKIKO HIGH".
  title: "Digital Marketing Services for Local Businesses",
  description:
    "Explore OKIKO HIGH services for local businesses: website design, Google Business Profile, reviews, AI chatbots, AI receptionist, and text and email follow-up.",
  h1: "Digital Marketing and Automation Services for Local Businesses",
  primaryCta: { label: "Discuss Which Service Fits", href: "/contact" },
  secondaryCta: { label: "Compare the services", href: "#services" },
} as const;

export type HubService = {
  slug: string;
  path: string;
  title: string;
  icon: IconName;
  description: string;
  buttonLabel: string;
  // Matches src/app/sitemap.ts. Only published services go into the hub's
  // ItemList structured data (docs/07). Set to true when the service page is
  // indexable (no `robots` noindex) and listed in the sitemap. The owner approved
  // indexing all six service pages on 2026-10-11.
  published: boolean;
};

export const hubServices: ReadonlyArray<HubService> = [
  {
    slug: "website-design",
    path: "/services/website-design",
    title: "Website Design",
    icon: "website",
    description:
      "Websites for local and service-based businesses, organized around calls, quote requests, and bookings. The scope is defined first, so any build recommendation fits your business.",
    buttonLabel: "Explore Website Design",
    published: true,
  },
  {
    slug: "google-business-profile-optimization",
    path: "/services/google-business-profile-optimization",
    title: "Google Business Profile Management",
    icon: "pin",
    description:
      "Keeps the information customers see on Google Search and Maps accurate, covers routine updates, and shows which customer actions the profile produces, using authorized access and approved content.",
    buttonLabel: "Explore Google Business Profile Management",
    published: true,
  },
  {
    slug: "reputation-management",
    path: "/services/reputation-management",
    title: "Review Management",
    icon: "star",
    description:
      "Honest review requests, monitoring, and consistent replies, built around your completed jobs, your platforms, and a named person who owns the difficult replies. No manipulating what customers say.",
    buttonLabel: "Explore Review Management",
    published: true,
  },
  {
    slug: "ai-chatbots",
    path: "/services/ai-chatbots",
    title: "AI Website Chatbots",
    icon: "message",
    description:
      "A website chatbot that answers routine questions, collects inquiry details, and helps visitors request a quote, book, or reach your team, built around your approved information and a real route to a person.",
    buttonLabel: "Explore AI Chatbots",
    published: true,
  },
  {
    slug: "ai-receptionist",
    path: "/services/ai-receptionist",
    title: "AI Receptionist for Inbound Calls",
    icon: "headset",
    description:
      "Answers inbound calls, collects the details your team needs, and completes approved tasks such as booking an appointment or routing a caller to a person. Fits overflow, after-hours, and routine calls best.",
    buttonLabel: "Explore the AI Receptionist",
    published: true,
  },
  {
    slug: "sms-email-automation",
    path: "/services/sms-email-automation",
    title: "Text and Email Automation",
    icon: "mail",
    description:
      "Sends approved messages when a customer takes an action or reaches a stage you define, so follow-up does not depend on remembering every step, and real conversations stay connected to a person.",
    buttonLabel: "Explore Text and Email Automation",
    published: true,
  },
];

// "If this is your situation, look at this service" guide. Each row maps to the
// problem the linked service page itself is written around.
export const startingPoints = [
  {
    situation: "Customers cannot find or verify your business on Google Search and Maps",
    icon: "pin",
    service: "Google Business Profile Management",
    href: "/services/google-business-profile-optimization",
    pairedWith: { service: "Review Management", href: "/services/reputation-management" },
  },
  {
    situation: "Visitors reach your website but do not call or request a quote",
    icon: "website",
    service: "Website Design",
    href: "/services/website-design",
    pairedWith: { service: "AI Website Chatbots", href: "/services/ai-chatbots" },
  },
  {
    situation: "Visitors have routine questions before they will send an inquiry",
    icon: "message",
    service: "AI Website Chatbots",
    href: "/services/ai-chatbots",
    pairedWith: { service: "Website Design", href: "/services/website-design" },
  },
  {
    situation: "Calls go unanswered, overflow, or arrive after hours",
    icon: "headset",
    service: "AI Receptionist for Inbound Calls",
    href: "/services/ai-receptionist",
    pairedWith: { service: "Text and Email Automation", href: "/services/sms-email-automation" },
  },
  {
    situation: "Inquiries and quotes go quiet after the first contact",
    icon: "mail",
    service: "Text and Email Automation",
    href: "/services/sms-email-automation",
    pairedWith: { service: "AI Website Chatbots", href: "/services/ai-chatbots" },
  },
  {
    situation: "Reviews are few, uneven, or left unanswered",
    icon: "star",
    service: "Review Management",
    href: "/services/reputation-management",
    pairedWith: { service: "Text and Email Automation", href: "/services/sms-email-automation" },
  },
] as const;

// Example combinations. These are illustrations of how services can connect, not
// packages. Connections are optional and scoped separately (see the website
// design page's "connected services" section).
export const combos = [
  {
    icon: "globe",
    title: "Online presence foundation",
    purpose:
      "Keep your business information, website, and customer feedback working toward one consistent online presence.",
    services: [
      { label: "Google Business Profile Management", href: "/services/google-business-profile-optimization" },
      { label: "Website Design", href: "/services/website-design" },
      { label: "Review Management", href: "/services/reputation-management" },
    ],
  },
  {
    icon: "message",
    title: "Inquiry response",
    purpose:
      "Give customers clear ways to ask questions and start a conversation, on your website and by phone.",
    services: [
      { label: "Website Design", href: "/services/website-design" },
      { label: "AI Website Chatbots", href: "/services/ai-chatbots" },
      { label: "AI Receptionist for Inbound Calls", href: "/services/ai-receptionist" },
    ],
  },
  {
    icon: "mail",
    title: "Follow-up and customer communication",
    purpose:
      "Connect the next steps after an inquiry, an appointment, or a finished job.",
    services: [
      { label: "Text and Email Automation", href: "/services/sms-email-automation" },
      { label: "Review Management", href: "/services/reputation-management" },
    ],
  },
] as const;

// Things you can look at on each service page: fictional samples (labeled as
// illustrative on their own pages) and, for Google Business Profile, the review
// checklist. None is presented as client work.
export const examples = [
  {
    icon: "website",
    title: "Website Design",
    body: "A phone wireframe showing a tap-to-call link, a short inquiry form, and plain-language service information.",
    href: "/services/website-design#contact-path",
    label: "See the contact-path wireframe",
  },
  {
    icon: "pin",
    title: "Google Business Profile Management",
    body: "The profile review checklist: what we check on your profile, grouped into information, customer actions, and content, with the rule behind each item.",
    href: "/services/google-business-profile-optimization#checklist",
    label: "See what we review",
  },
  {
    icon: "star",
    title: "Review Management",
    body: "A sample review workflow for a fictional business: one neutral request, a clear opt-out, and an approved reply.",
    href: "/services/reputation-management#sample-workflow",
    label: "See the sample workflow",
  },
  {
    icon: "message",
    title: "AI Website Chatbots",
    body: "A sample conversation with a fictional business and sample data.",
    href: "/services/ai-chatbots#journeys",
    label: "See the sample chat",
  },
  {
    icon: "headset",
    title: "AI Receptionist",
    body: "An illustrative call script with a fictional caller. It is not a recording.",
    href: "/services/ai-receptionist#demonstration",
    label: "See the sample call",
  },
  {
    icon: "mail",
    title: "Text and Email Automation",
    body: "Sample text messages and a follow-up sequence for a fictional business.",
    href: "/services/sms-email-automation#sample",
    label: "See the sample messages",
  },
] as const;

// What to expect when you reach out. Limited to what the service pages already
// say: a written scope, approved content, and costs defined before pricing.
export const expectSteps = [
  {
    icon: "clipboard",
    title: "Tell us about your setup",
    body: "Share your business, how customers reach you today, the tools you already use, and where things slip.",
  },
  {
    icon: "file",
    title: "Define the scope",
    body: "A written scope names what is included, what is optional, and what is not assumed, so you can see it before work begins.",
  },
  {
    icon: "check",
    title: "Review and approve",
    body: "Your information, messages, and settings are reviewed with you and approved before they are used.",
  },
] as const;

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "What services does OKIKO HIGH cover?",
    answer:
      "This page covers six service areas: website design for local businesses, Google Business Profile optimization and management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation for customer follow-up. Each has its own page explaining how the work is set up and where its limits are. Scope for your business is confirmed when you get in touch.",
  },
  {
    question: "Which service should I start with?",
    answer:
      "Start where customers drop off today. If they cannot find you on Google, look at Google Business Profile management. If they find you but do not contact you, look at website design. If calls are missed, look at the AI receptionist. If inquiries go quiet after first contact, look at text and email automation. If reviews are thin or unanswered, look at review management. If you are unsure, describe how customers reach you and where it breaks, and we can look at whether a service, or something simpler, fits.",
  },
  {
    question: "Can I start with just one service?",
    answer:
      "Yes. Each service has its own page and its own scope, and you do not need all six. Connecting services is optional and scoped separately, so you can begin with the one closest to your problem and look at connections later.",
  },
  {
    question: "Can these services work together?",
    answer:
      "Yes. They can connect along the customer path: a Google Business Profile helps customers find you, your website explains the offer, a chatbot can answer questions before an inquiry, an AI receptionist can handle calls, and text and email workflows follow up. These connections are optional, scoped separately, and depend on platform compatibility and applicable consent rules.",
  },
  {
    question: "Can OKIKO HIGH work with my existing website or software?",
    answer:
      "Possibly. Compatibility depends on the actual systems, platforms, and permissions involved, so it is checked when your project is scoped rather than assumed. For a website, the first question is whether your current platform can support what you need; if it can, a redesign may be enough.",
  },
  {
    question: "How much do OKIKO HIGH's services cost?",
    answer:
      "OKIKO HIGH does not publish prices for these services on this site. Cost depends on scope, such as the number of pages, locations, and platforms involved, which integrations are needed, and who approves and publishes content. Request a scoped quote through the contact page.",
  },
  {
    question: "Can OKIKO HIGH guarantee rankings, leads, or review removal?",
    answer:
      "No. Google and other platforms control search results and decide whether a review is removed, and outcomes also depend on demand, competition, your offer, and how quickly inquiries are answered. No provider can responsibly guarantee them. Each service page states what it does and does not include.",
  },
  {
    question: "What information or account access will OKIKO HIGH need?",
    answer:
      "It depends on the service, and your scope lists the specifics. Examples from the service pages include access to your current website and analytics for a website project, authorized access to your Google Business Profile, and approved information, messages, and settings for chatbot, call, and follow-up workflows.",
  },
  {
    question: "Does OKIKO HIGH work with businesses outside one city or country?",
    answer:
      "OKIKO HIGH states that it serves clients worldwide. How a service works can still depend on your region, for example which platform features are available and which consent rules apply to calls and texts, so those points are checked when your project is scoped.",
  },
  {
    question: "What kinds of businesses are these services for?",
    answer:
      "The service pages are written for local and service-based businesses. Home service businesses, such as HVAC, plumbing, landscaping, general contracting, and cleaning companies, are the group OKIKO HIGH currently serves.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the contact page to describe your business, how customers reach you today, and what you want to improve. We use that to look at which service, if any, fits and to define the scope before any work begins.",
  },
];
