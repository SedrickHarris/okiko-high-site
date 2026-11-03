// Content for /contact. Only confirmed facts (docs/01): the public email and phone,
// worldwide service coverage, and the six services confirmed on 2026-10-11. No booking
// link, address, hours, or response-time promise: those are TBD in docs/01.
//
// The contact form appears only when NEXT_PUBLIC_CONTACT_FORM_ENDPOINT is set (see
// src/lib/contact-form.ts), so the FAQ below changes with it to stay accurate.

import { contactFormEndpoint } from "@/lib/contact-form";
import { emailHref, phoneHref, siteConfig } from "@/data/site";
import type { Faq } from "./shared";

export const contactPage = {
  path: "/contact",
  // The root layout appends " | OKIKO HIGH".
  title: "Contact OKIKO HIGH Digital Marketing Agency",
  description:
    "Call or email OKIKO HIGH about website design, automation, reviews, or AI call handling. Tell us your business and what you want to fix.",
  h1: "Contact OKIKO HIGH",
  intro:
    "Call or email OKIKO HIGH to ask about website design, Google Business Profile management, review management, AI chatbots, an AI receptionist, or text and email automation. Tell us about your business and what you want to fix.",
} as const;

/** Copy for the two-step contact form. Shown only when the form endpoint is set. */
export const contactForm = {
  id: "contact-form",
  heading: "Tell Us What You Need",
  intro: "Choose the service you are interested in, then tell us how to reach you. It takes two short steps.",
  serviceStep: {
    title: "Which service are you interested in?",
    hint: "Choose all that apply.",
    otherLabel: "What do you have in mind?",
    otherHint: "Optional. A few words is enough.",
  },
  contactStep: {
    title: "How can we reach you?",
    methodLegend: "Preferred way to reach you",
    messageLabel: "Additional information",
    messageHint: "Optional. Tell us about your business and what you want to fix.",
    messageSafety:
      "Please do not include card numbers, passwords, government ID numbers, or health information.",
  },
  success: {
    body: "We will use the details you gave to follow up on your inquiry.",
  },
  failure:
    "Something went wrong and your message was not sent. Please try again, or contact us by phone or email.",
} as const;

export const includeItems = [
  {
    title: "Your type of business",
    body: "What you do and who your customers are, for example a home-service company or a professional practice.",
  },
  {
    title: "The service you are considering",
    body: "Name the one that fits best, or say you are not sure and describe what is not working.",
  },
  {
    title: "The problem you want to fix",
    body: "For example calls that go unanswered, a website that does not bring inquiries, or follow-up that depends on someone remembering.",
  },
] as const;

export const doNotSend = [
  "Credit or debit card numbers",
  "Passwords or login codes",
  "Sensitive personal information, such as government ID numbers",
  "Health or patient information",
] as const;

export const contactServices = [
  { name: "Website design", path: "/services/website-design" },
  { name: "Google Business Profile management", path: "/services/google-business-profile-optimization" },
  { name: "Review management", path: "/services/reputation-management" },
  { name: "AI website chatbots", path: "/services/ai-chatbots" },
  { name: "AI receptionist for inbound calls", path: "/services/ai-receptionist" },
  { name: "Text and email automation", path: "/services/sms-email-automation" },
] as const;

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "How can I contact OKIKO HIGH?",
    answer: contactFormEndpoint
      ? `You can use the contact form on this page, call ${siteConfig.phone}, or email ${siteConfig.email}. The phone number and email are listed under Ways to Reach Us.`
      : `You can call ${siteConfig.phone} or email ${siteConfig.email}. Both are listed under Ways to Reach Us on this page. There is no contact form on the site at this time.`,
    links: [
      { phrase: siteConfig.phone, href: phoneHref },
      { phrase: siteConfig.email, href: emailHref },
    ],
  },
  {
    question: "Does OKIKO HIGH work with clients outside the US?",
    answer:
      "Yes. OKIKO HIGH states that it serves clients worldwide. Call or email with your business details to talk through your situation.",
  },
  {
    question: "What should I include in my first message to OKIKO HIGH?",
    answer:
      "Include your type of business, the service you are considering, and the problem you want to fix. If you are not sure which service fits, describe what is not working and we can help you sort it out.",
  },
  {
    question: "Should I send sensitive or health information when I contact OKIKO HIGH?",
    answer: contactFormEndpoint
      ? "No. Do not send card numbers, passwords, sensitive personal information, or health or patient information by phone, email, or the contact form. A short description of your business and goals is enough to start."
      : "No. Do not send card numbers, passwords, sensitive personal information, or health or patient information by phone or email. A short description of your business and goals is enough to start.",
  },
  {
    question: "Which services can I ask OKIKO HIGH about?",
    answer:
      "You can ask about website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. Each has its own page with details.",
    links: [{ phrase: "Each has its own page", href: "/services" }],
  },
  {
    question: "Which industries does OKIKO HIGH serve?",
    answer:
      "OKIKO HIGH serves home services, professional services, property management and real estate, and healthcare, dental and med spa businesses. Each industry has its own page that shows how the services apply.",
    links: [{ phrase: "Each industry has its own page", href: "/industries" }],
  },
];
