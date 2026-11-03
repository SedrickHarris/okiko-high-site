// Content for /terms-of-service.
// Sources: docs/01 (business description, public email and phone, worldwide coverage,
// services), the six service pages and the three audience pages named in the build
// request (what each service does and does not do, what the client is responsible
// for, and the limits those pages already state), and /privacy-policy (the two roles,
// sensitive-information warning, third-party platforms).
//
// Intentionally NOT stated, because docs/01 marks them TBD or unconfirmed: the legal
// entity name, a mailing address, pricing, payment terms, refunds, contract length,
// cancellation and exit terms, ownership of websites, accounts, content, and records,
// delivery timelines, support commitments, a liability cap, a governing law or venue,
// a dispute process, and any claim that a workflow is compliant. Where a reader needs
// one of these, the copy says it is confirmed in writing when the project is scoped,
// which matches what the service pages and /faq already say.
//
// Draft for owner and legal review before launch (docs/02). When any of the items above
// is confirmed, update this file and `lastUpdated` together.
//
// Style: hyphens, never em dashes (owner preference).

import type { IconName } from "@/components/ui/icons";
import type { Faq } from "./shared";

export const termsPage = {
  path: "/terms-of-service",
  // The root layout appends " | OKIKO HIGH".
  title: "Terms of Service: Using Our Website and Services",
  description:
    "The terms for using the OKIKO HIGH website and working with OKIKO HIGH: how services are scoped, what we do not guarantee, and what clients are responsible for.",
  h1: "OKIKO HIGH Terms of Service",
  intro:
    "These terms explain how use of the OKIKO HIGH website is governed and set general expectations for our services. Any paid service is described in the applicable proposal or service agreement, including the agreed scope, responsibilities, fees, and service-specific conditions.",
  primaryCta: { label: "Contact us with a question", href: "/contact" },
  secondaryCta: { label: "See terms for each service", href: "#services" },
} as const;

// Shown visibly under the intro and used for `dateModified` in the page's JSON-LD.
export const lastUpdated = { iso: "2026-11-03", display: "November 3, 2026" } as const;

export const jumpItems: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#scope", label: "Who these terms cover" },
  { href: "#website-use", label: "Using this website" },
  { href: "#services", label: "Terms for each service" },
  { href: "#engagements", label: "How a project is set up" },
  { href: "#responsibilities", label: "Your responsibilities" },
  { href: "#industries", label: "Industry notes" },
  { href: "#no-guarantees", label: "What we do not promise" },
  { href: "#faq", label: "Terms questions" },
];

export const glanceCards: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "globe",
    title: "Website use",
    body: "The website is general information about OKIKO HIGH and its services. It is not legal, medical, financial, or other professional advice.",
  },
  {
    icon: "clipboard",
    title: "Written scope",
    body: "Each project is defined in a written scope that names what is included, what is optional, and what is not assumed.",
  },
  {
    icon: "warning",
    title: "No guarantees",
    body: "We do not guarantee rankings, leads, bookings, reviews, review removal, or revenue. Platforms and demand are outside our control.",
  },
  {
    icon: "shield",
    title: "Your responsibilities",
    body: "Clients keep responsibility for the accuracy of what they give us, for permissions to contact their customers, and for the rules of their own industry.",
  },
];

export const scopeCoverage = [
  "OKIKO HIGH Digital Marketing Agency (OKIKO HIGH, we, or us) provides digital marketing, marketing automation, and Software as a Service (SaaS) solutions for businesses. These terms apply when you visit our website at okikohigh.com, contact us, or ask us to work on a project.",
  "By using this website, you agree to these terms. If you do not agree, please do not use the website. Using the website, sending an inquiry, or booking an introductory call is not the same as hiring us: a paid project begins only when we have agreed a scope with you. Agreeing to these terms is also not consent to receive marketing texts, emails, or calls.",
] as const;

export const scopeCards: ReadonlyArray<{ icon: IconName; title: string; body: ReadonlyArray<string> }> = [
  {
    icon: "globe",
    title: "If you are visiting this website",
    body: [
      "The Website Use section below applies. It covers what you may do with the site, how to treat its content, and the limits on what it can tell you.",
      "Our Privacy Policy explains how we handle information you send us.",
    ],
  },
  {
    icon: "file",
    title: "If you are working with us",
    body: [
      "Your project is defined by the written scope we agree with you. These terms give the general expectations that sit around that scope.",
      "If a signed agreement for your project says something different from these terms, the signed agreement controls for that project.",
    ],
  },
];

export const websiteUse = {
  intro: "When you use this website, you agree to:",
  items: [
    "Use it only for lawful purposes and in line with these terms",
    "Not try to gain unauthorized access to the website, its hosting, or other people's information",
    "Not interfere with, overload, or disrupt the website or the way others can use it",
    "Not pretend to be another person or business when you contact us",
    "Give accurate details when you contact us about a service",
    "Send us only information and materials you have the right to share",
  ],
  contentNote:
    "The text, layout, graphics, and other content on this website belong to OKIKO HIGH or its licensors. You may read it and share a link to it. Please do not copy it, resell it, or present it as your own without our written permission. The OKIKO HIGH name and logo are ours, and you may not use them in a way that suggests we endorse you.",
  linksNote:
    "This website links to outside sources, such as platform documentation and government guidance. We do not control those sites, and their own terms and privacy policies apply once you leave ours.",
  infoNote:
    "The website describes how our services can be set up. It is general information, not legal, medical, financial, tax, or other professional advice, and it is not an offer of a specific price, timeline, or result. Pages that mention laws or platform rules are a starting point, so check the rules that apply to you with a qualified adviser or the rule-maker.",
} as const;

export const doNotSend = {
  heading: "Please do not send sensitive information",
  body: "A short description of your business and goals is enough to start. Please do not send any of the following by phone, email, or text:",
  items: [
    "Credit or debit card numbers",
    "Passwords or login codes",
    "Sensitive personal information, such as government ID numbers",
    "Health or patient information",
    "Confidential client, case, or financial details",
  ],
  note: "If your project will involve information like this, we will say how it will be handled in your written scope before any of it is shared.",
} as const;

// Terms-focused card copy for the six services. Each line restates what that service's
// own page already says; the button links to that page. Keys match the slugs in
// src/content/services/hub.ts.
export const serviceDescriptions: Record<string, string> = {
  "website-design":
    "The scope defines the pages, features, and tools in your build, and which accessibility and performance checks apply. Connected tools such as forms, analytics, chat, or booking widgets are scoped separately, and you provide the content and access the build needs.",
  "google-business-profile-optimization":
    "This work runs through authorized access to your Google Business Profile and content you approve. Google's rules decide what appears, and we cannot promise placement, a restored listing after a suspension, or that a review will be removed.",
  "reputation-management":
    "Review requests are neutral, honest, and sent only through channels where you have documented consent. We do not write fake reviews, offer incentives for reviews, filter who is asked, or promise to remove reviews, and difficult replies go to a named person at your business.",
  "ai-chatbots":
    "A chatbot answers from information you approve and gives visitors a route to a person. It can be wrong or incomplete, so you review transcripts and approved answers, and who owns conversation records and what can be exported is settled when the project is scoped.",
  "ai-receptionist":
    "Callers should be told they are speaking with AI, and recording, transcription, and call routing are set up for each project with any required notice. An AI receptionist is not an emergency service, and an agreed route to a person handles what it should not.",
  "sms-email-automation":
    "Messages go only to people who have given suitable permission, and an opt-out stops messages across every workflow. You supply the consent records, and the scope names which triggers and channels apply.",
};

export const servicesIntro =
  "OKIKO HIGH offers six services. The terms below summarize what each service page already explains, so you can see the main expectations before you read the full page.";

export const servicesNote =
  "Pricing, payment terms, ownership of accounts and content, and cancellation terms are not stated on these pages. They are confirmed in writing when your project is scoped.";

export const engagementSteps: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "clipboard",
    title: "We define the scope",
    body: "A written scope names what is included, what is optional, and what is not assumed, so you can read it before work begins.",
  },
  {
    icon: "check",
    title: "You review and approve",
    body: "Your information, messages, settings, and replies are reviewed with you and approved before they are used in your name.",
  },
  {
    icon: "file",
    title: "Commercial terms are confirmed in writing",
    body: "Price, payment, ownership of accounts, content, and records, what can be exported, and how to cancel are confirmed in writing when the project is scoped, not on this website.",
  },
];

export const engagementNote =
  "Ask about any of these before you agree to a project. If a point matters to you and the written scope does not cover it, say so and we will confirm how it will be handled.";

export const responsibilityItems = [
  "Give us accurate, current information, and tell us when it changes",
  "Make sure you have the right to give us any access, accounts, content, images, and customer information you provide",
  "Give us authorized access only, and keep control of your own accounts, such as your Google Business Profile",
  "Collect and keep the permissions needed to contact your customers by text, email, or phone, and honor opt-outs",
  "Provide any recording or AI notices your callers and customers need to see or hear",
  "Review and approve the content, messages, answers, and replies that go out in your name",
  "Follow the laws, platform rules, and professional or industry rules that apply to your business",
] as const;

export const responsibilityNote =
  "We build workflows around consent and opt-outs, but the permissions to contact your customers are yours, and agreeing to these terms does not replace the consent your customers need to give. Rules differ by country, state, and industry, so they are checked when your project is scoped.";

export const industryCards: ReadonlyArray<{
  icon: IconName;
  title: string;
  body: string;
  href: string;
  buttonLabel: string;
}> = [
  {
    icon: "file",
    title: "Professional services",
    body: "Firms such as law, accounting, and consulting practices have their own confidentiality, advertising, and licensing rules, and those rules vary by state and profession. Automation helps with intake and follow-up, but the professional decides what advice to give and what happens next.",
    href: "/industries/professional-services",
    buttonLabel: "See Professional Services",
  },
  {
    icon: "call",
    title: "Home services",
    body: "Urgent calls and emergencies need a person, so the route to a human is agreed in the scope. Texting and review requests depend on customer permission, and an AI receptionist is not an emergency or dispatch service.",
    href: "/industries/home-services",
    buttonLabel: "See Home Services",
  },
  {
    icon: "key",
    title: "Property management and real estate",
    body: "Scripts, ads, and messages for housing contacts should be reviewed against fair housing rules and state notices. Messages to tenants, owners, and buyers depend on the permissions you hold for each group.",
    href: "/industries/property-management-real-estate",
    buttonLabel: "See Property Management and Real Estate",
  },
];

export const industryNote =
  "These notes summarize points the industry pages explain. They are not legal advice, and your own adviser should confirm what applies to you.";

export const automationItems = [
  "AI chatbots and AI receptionists can be wrong or incomplete. They work from information you approve, and a person should handle anything they should not.",
  "Automated texts, emails, and calls send only the messages you approved, to people who have given suitable permission.",
  "An AI feature is not a professional adviser and is not an emergency service. We do not describe any workflow as HIPAA compliant or as meeting any other legal standard.",
  "Reports show what a workflow did, such as messages sent or calls answered. We do not present them as a promise that more customers or revenue will follow.",
] as const;

export const platformCards: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "server",
    title: "Third-party platforms",
    body: "Some of our services are delivered with third-party software platforms, including GoHighLevel and its ecosystem. These platforms are not operated by OKIKO HIGH and set their own terms. Features can change or be withdrawn by the platform.",
  },
  {
    icon: "pin",
    title: "Google and review sites",
    body: "Google and other review and listing platforms set and enforce their own rules. They decide what appears, what is removed, and whether an account is limited, and we do not control those decisions.",
  },
  {
    icon: "swap",
    title: "Compatibility",
    body: "Whether your existing website or software works with a service depends on the actual systems and permissions involved. It is checked when your project is scoped and is not assumed.",
  },
];

export const noGuarantees = {
  intro:
    "Marketing results depend on many things we do not control, including demand, competition, your offer, your prices, and how quickly inquiries are answered. For that reason:",
  items: [
    "We do not guarantee search rankings, map placement, traffic, calls, leads, bookings, reviews, review removal, or revenue",
    "We do not guarantee that a platform, listing, or account will stay active or keep a feature",
    "We do not guarantee that any workflow meets every law or rule that applies to your business",
  ],
  disclaimer:
    "This website and its content are provided for general information, as available. To the extent the law allows, we do not promise that the website will always be available, uninterrupted, or free of errors, and we are not responsible for decisions made only on the basis of its content. Nothing in these terms removes any right or limit that the law does not allow to be removed.",
} as const;

export const moreCards: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "file",
    title: "Changes to these terms",
    body: "We may update these terms as our services or the law change. The date near the top of this page shows when they were last updated. If you have a signed agreement for a project, a change here does not rewrite that agreement.",
  },
  {
    icon: "shield",
    title: "Privacy",
    body: "Our Privacy Policy explains what information we collect, how we use it, and the choices you have. It is part of how we ask you to use this website.",
  },
  {
    icon: "mail",
    title: "Contact",
    body: "Questions about these terms are welcome by email or phone. We use what you send to answer your question.",
  },
];

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "Do these terms apply if I hire OKIKO HIGH?",
    answer:
      "They set general expectations, and your project is defined by the written scope we agree with you. If a signed agreement for your project says something different from these terms, the signed agreement controls for that project.",
  },
  {
    question: "Does OKIKO HIGH publish prices or payment terms?",
    answer:
      "No. OKIKO HIGH does not publish prices for its services on this site, and payment terms are not stated here either. Cost depends on scope, such as the number of pages, locations, and platforms involved, which integrations are needed, and who approves and publishes content. Price and payment terms are confirmed in writing when your project is scoped.",
  },
  {
    question: "Who owns my website, accounts, and customer records?",
    answer:
      "OKIKO HIGH has not published ownership or exit terms on this site. Who owns your website, accounts, content, and records, and what can be exported if you leave, are settled in writing when the project is scoped. Ask before you agree to a project.",
  },
  {
    question: "Can I cancel a service, and what happens then?",
    answer:
      "Cancellation and exit terms are not stated on this website. They are confirmed in writing when your project is scoped, so ask what happens to your accounts, content, and records if you stop.",
  },
  {
    question: "Can OKIKO HIGH guarantee rankings, leads, bookings, or review removal?",
    answer:
      "No. Google and other platforms control search results and decide whether a review is removed, and outcomes also depend on demand, competition, your offer, and how quickly inquiries are answered. No provider can responsibly guarantee them. Each service page states what it does and does not include.",
    links: [{ phrase: "service page", href: "/services" }],
  },
  {
    question: "Who is responsible for permission to text, email, or call my customers?",
    answer:
      "You are. Messages sent through our services go out under your instructions and the permissions you have collected. We build workflows around consent and opt-outs, and an opt-out stops messages across every workflow, but rules differ by country, state, and industry, so they are checked when your project is scoped.",
  },
  {
    question: "Does OKIKO HIGH give legal, medical, or other professional advice?",
    answer:
      "No. The website is general information about our services. Pages that mention laws, such as texting, recording, fair housing, or health privacy rules, are a starting point and not legal advice. Please check what applies to you with a qualified adviser.",
  },
  {
    question: "Are the AI chatbot and AI receptionist emergency services or professional advisers?",
    answer:
      "No. They answer from information you approve, they can be wrong or incomplete, and neither is an emergency service. Callers should be told they are speaking with AI, and an agreed route to a person handles urgent requests and anything the AI should not handle.",
  },
  {
    question: "What if Google or another platform changes its rules or limits my account?",
    answer:
      "Google and other platforms set and enforce their own rules and can change them. OKIKO HIGH does not control those decisions, so we cannot promise that a profile will not be limited, that a review will be removed, or that a platform feature will stay available.",
  },
  {
    question: "Can I send sensitive information when I contact OKIKO HIGH?",
    answer:
      "No. Please do not send card numbers, passwords, government ID numbers, health or patient information, or confidential client, case, or financial details by phone, email, or text. A short description of your business and goals is enough to start. If a project will involve sensitive information, the written scope says how it will be handled first.",
  },
  {
    question: "Does OKIKO HIGH serve clients worldwide, and do local laws still apply?",
    answer:
      "OKIKO HIGH states that it serves clients worldwide. Whether a particular service can be offered still depends on your country, the platforms and features available there, and our capacity, and it is confirmed when your project is scoped. Local laws and platform rules also still apply to you and your customers, for example which consent rules cover calls and texts.",
  },
  {
    question: "How will I know if these terms change?",
    answer:
      "We update this page and the date near the top shows when it was last updated. We may change these terms as our services or the law change. A signed agreement for your project is not rewritten by a change to this page.",
  },
];
