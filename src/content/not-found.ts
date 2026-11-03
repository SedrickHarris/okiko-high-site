// Content for the 404 page (src/app/not-found.tsx).
// Hero copy follows the approved 404 copy review (2026-11-03). Service cards reuse
// hubServices and industry links reuse audiences, so titles, descriptions, and
// destinations stay in one place. FAQ answers restate what the services hub, the
// industries hub, and docs/01 already say. Nothing here adds a fact that is still TBD:
// prices, timelines, results, response times, partnerships, or proof.
//
// This page returns HTTP 404 and Next.js adds a noindex robots tag, so it carries no
// JSON-LD and is not in the sitemap. The FAQ is visible content only.

import type { Faq } from "./shared";

export const notFoundPage = {
  // The root layout appends " | OKIKO HIGH".
  title: "Page not found",
  description:
    "The page you requested could not be found. Go to the OKIKO HIGH homepage, browse our services and industries, or contact us.",
  eyebrow: "404",
  h1: "Page not found",
  body: "The link may be outdated, or the web address may contain a typo. Go to the homepage to explore the site.",
  primaryCta: { label: "Go to homepage", href: "/" },
  secondaryCta: { label: "Contact OKIKO HIGH", href: "/contact" },
  servicesHeading: "Explore Our Services",
  servicesIntro:
    "Looking for something specific? Each service has its own page with scope, limits, FAQs, and next steps.",
  industriesHeading: "Browse by Industry",
  industriesIntro:
    "Each industry page shows how the same services apply to the way that kind of business gets inquiries and follows up.",
  faqHeading: "Questions About This Page and OKIKO HIGH",
  faqIntro:
    "Quick answers about why you landed here and where to go next.",
} as const;

// Single source for the visible FAQ section.
export const faqs: Faq[] = [
  {
    question: "Why am I seeing a Page not found message?",
    answer:
      "The address you opened does not match a page on this website. The link may be outdated, or the web address may contain a typo. Checking the address for typos, or starting from the homepage, is the quickest way to find what you were looking for.",
  },
  {
    question: "Has the page I was looking for been removed?",
    answer:
      "This page cannot tell. A missing page can mean the link is old, the address was mistyped, or the page is no longer on the site. The homepage, the services pages, and the industries pages below are the best places to continue from.",
  },
  {
    question: "What does OKIKO HIGH do?",
    answer:
      "OKIKO HIGH is a digital marketing agency with six service areas: website design, Google Business Profile management, review management, AI website chatbots, an AI receptionist for inbound calls, and text and email automation. Each has its own page explaining how the work is set up and where its limits are.",
  },
  {
    question: "Which service should I look at first?",
    answer:
      "Start where customers drop off today. If they cannot find you on Google, look at Google Business Profile management. If they find you but do not contact you, look at website design. If calls are missed, look at the AI receptionist. If inquiries go quiet after first contact, look at text and email automation. If reviews are thin or unanswered, look at review management.",
  },
  {
    question: "Which kinds of businesses does OKIKO HIGH work with?",
    answer:
      "OKIKO HIGH currently serves four kinds of business, each with its own industry page: home services, professional services, property management and real estate, and healthcare, dental and med spa.",
  },
  {
    question: "How do I reach OKIKO HIGH about a broken link or a question?",
    answer:
      "Use the contact page. Describe your business, how customers reach you today, and what you want to improve, or tell us which link did not work. Scope for any service is confirmed with you before work begins.",
  },
  {
    question: "Does OKIKO HIGH work with businesses outside one city or country?",
    answer:
      "OKIKO HIGH states that it serves clients worldwide. How a service works can still depend on your region, for example which platform features are available and which consent rules apply to calls and texts, so those points are checked when your project is scoped.",
  },
  {
    question: "How much do OKIKO HIGH's services cost?",
    answer:
      "OKIKO HIGH does not publish prices for these services on this site. Cost depends on scope, such as the number of pages, locations, and platforms involved, which integrations are needed, and who approves and publishes content. Request a scoped quote through the contact page.",
  },
];
