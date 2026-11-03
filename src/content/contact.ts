// Content for /contact. Only confirmed facts (docs/01): the public email and phone,
// worldwide service coverage, and the six services confirmed on 2026-10-11. No form,
// booking link, address, hours, or response-time promise: those are TBD in docs/01.

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
    answer:
      "You can call (469) 421-9832 or email info@okikohigh.com. Both are listed under Ways to Reach Us on this page. There is no contact form on the site at this time.",
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
    answer:
      "No. Do not send card numbers, passwords, sensitive personal information, or health or patient information by phone or email. A short description of your business and goals is enough to start.",
  },
  {
    question: "Which services can I ask OKIKO HIGH about?",
    answer:
      "You can ask about website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. Each has its own page with details.",
  },
];
