// Content for /privacy-policy.
// Sources: docs/01 (business description, public email and phone, worldwide coverage,
// services), the Privacy Policy research reports (2026-11-02: scope and structure, and
// the client / agency responsibility split), and statements the site already makes on
// /contact and on the service and industry pages (no active form, no sensitive
// information by phone or email, inquiries are not marketing permission).
//
// Facts checked in the repository at build time: the site has no analytics, advertising
// pixels, cookies, embeds, or active forms, so the policy says so and nothing more.
//
// Intentionally NOT stated, because the research marks them unconfirmed: the legal
// entity name, a mailing address, retention periods, whether OKIKO HIGH sends its own
// marketing, call recording or AI use on the agency's own operations, whether data is
// sold or shared for advertising, named subprocessors beyond the GoHighLevel platform
// the business description already names, and any "compliant" or "never share" claim.
// If any of those change, update this file and `lastUpdated` together.
//
// Style: hyphens, never em dashes (owner preference).

import type { IconName } from "@/components/ui/icons";
import type { Faq } from "./shared";

export const privacyPage = {
  path: "/privacy-policy",
  // The root layout appends " | OKIKO HIGH".
  title: "Privacy Policy: How We Handle Your Information",
  description:
    "How OKIKO HIGH collects, uses, and shares personal information from website visitors, inquiries, and client work, and how to make a privacy request.",
  h1: "OKIKO HIGH Privacy Policy",
  intro:
    "This Privacy Policy explains how OKIKO HIGH collects, uses, and shares personal information when you visit our website, contact us, or use our services. It also explains how to contact us about your information.",
  primaryCta: { label: "Contact us with a privacy question", href: "/contact" },
  secondaryCta: { label: "See your privacy choices", href: "#your-choices" },
} as const;

// Shown visibly under the intro and used for `dateModified` in the page's JSON-LD.
export const lastUpdated = { iso: "2026-11-02", display: "November 2, 2026" } as const;

export const jumpItems: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#roles", label: "Our two roles" },
  { href: "#information-we-collect", label: "Information we collect" },
  { href: "#cookies-and-tracking", label: "Cookies and tracking" },
  { href: "#services", label: "Information in our services" },
  { href: "#sharing", label: "When we share information" },
  { href: "#your-choices", label: "Your privacy choices" },
  { href: "#faq", label: "Privacy questions" },
  { href: "#contact", label: "Contact us" },
];

export const glanceCards: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "file",
    title: "What we collect",
    body: "What you share when you call or email us, plus standard technical details that our website hosting handles to deliver the site.",
  },
  {
    icon: "shield",
    title: "No tracking tools",
    body: "This website does not currently use analytics tools, advertising pixels, or advertising cookies.",
  },
  {
    icon: "swap",
    title: "Two roles",
    body: "We decide how information is used for our own business. For client work, we follow the client's instructions.",
  },
  {
    icon: "mail",
    title: "Your requests",
    body: "Email or call us to ask about your information. We respond as applicable law requires.",
  },
];

export const coverage = [
  "OKIKO HIGH Digital Marketing Agency (OKIKO HIGH, we, or us) provides digital marketing, marketing automation, and Software as a Service (SaaS) solutions for businesses. This policy applies to our website at okikohigh.com, to inquiries you make to us by phone or email, and to our relationships with clients and prospective clients.",
  "It does not replace the privacy notice that a client gives its own customers. The next section explains how that works when we handle information for a client.",
] as const;

// The two paragraphs for the client role follow the suggested policy language in the
// responsibility research, which keeps the detailed allocation in client contracts.
export const roles: ReadonlyArray<{ icon: IconName; title: string; body: ReadonlyArray<string> }> = [
  {
    icon: "clipboard",
    title: "When we use information for our own business",
    body: [
      "When we collect personal information for our own business activities, such as responding to inquiries or managing client relationships, OKIKO HIGH determines how that information is used.",
      "This policy explains those activities.",
    ],
  },
  {
    icon: "swap",
    title: "When we handle information for a client",
    body: [
      "When we process personal information on behalf of a client to provide agreed services, we act according to that client's instructions and our agreement with them.",
      "The client's privacy notice explains its use of that information. If we receive a request concerning information we process for a client, we will coordinate with the relevant client as appropriate.",
    ],
  },
];

export const collectCards: ReadonlyArray<{
  icon: IconName;
  tone: "default" | "included" | "optional";
  title: string;
  intro: string;
  items: ReadonlyArray<string>;
}> = [
  {
    icon: "mail",
    tone: "default",
    title: "Information you give us",
    intro: "When you call or email us, we receive what you choose to share.",
    items: [
      "Your name and contact details, such as an email address and phone number",
      "Your business name and type, and the service you are considering",
      "The content of your message and what you tell us about your needs",
      "Details about your current tools and processes that you share while we scope a project",
    ],
  },
  {
    icon: "swap",
    tone: "included",
    title: "Information we handle for clients",
    intro:
      "When we deliver a service for a client, we may handle information about that client's customers and leads. What applies depends on the service and on what the client approves.",
    items: [
      "Contact and inquiry details entered through a client's website, chat, or forms",
      "Appointment, booking, and message records",
      "Call details and, where a client's setup includes them, call recordings, transcripts, and summaries",
      "Review requests and replies connected to a client's customers",
    ],
  },
  {
    icon: "server",
    tone: "optional",
    title: "Technical information",
    intro:
      "Like any website, ours is delivered by hosting infrastructure that automatically handles standard technical details.",
    items: [
      "IP address",
      "Browser and device information sent with each request",
      "The pages requested and the date and time of the request",
    ],
  },
];

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
} as const;

export const useItems = [
  "Respond to your inquiry and discuss which service, if any, fits your business",
  "Define the scope of a project and deliver agreed services",
  "Manage client relationships, including agreements, communications, and support",
  "Operate, secure, and maintain this website and our business systems",
  "Meet legal, tax, and recordkeeping obligations, and protect our rights",
] as const;

export const useNote =
  "When we handle information for a client, we use it according to that client's instructions and our agreement with them.";

export const trackingPoints = [
  "At the time of this update, the OKIKO HIGH website does not use analytics tools, advertising pixels, or advertising cookies.",
  "Our hosting provider may process technical information, such as IP addresses, to deliver the site and keep it secure.",
  "If we add analytics, advertising, or similar tools, we will update this policy. Where the law requires it, we will ask for your consent before they run.",
  "Websites we build for clients are separate from this one. Each client site has its own tools and its own privacy notice, set up with the client.",
] as const;

export const communicationPoints = [
  "We use the contact details you give us to respond to your inquiry.",
  "Contacting us does not by itself give us permission to send you marketing texts or make automated marketing calls. If we send marketing messages in the future, we will follow the rules that apply and include a way to opt out.",
  "Messages that clients send through our services are sent for the client, under the client's instructions and the permissions the client has collected. If you receive one and want it to stop, follow the opt-out instructions in the message or contact the client.",
] as const;

// Privacy-focused card copy for the six services. Each line restates what that
// service's own page already says; the button links to that page. Keys match the
// slugs in src/content/services/hub.ts.
export const serviceDescriptions: Record<string, string> = {
  "website-design":
    "A website we build can include contact paths, forms, analytics, and booking or chat widgets. What it collects and which tools it uses is defined in the project scope, and those widgets are checked for privacy alongside the main site.",
  "google-business-profile-optimization":
    "This work runs through authorized access to your Google Business Profile and content you approve. It can involve Google's interaction reports, such as call and website clicks, and the customer records you choose to connect to track inquiries and bookings.",
  "reputation-management":
    "Review requests and replies can involve customer names, contact details, and job records from your systems, sent only through channels where you have documented consent. Private details are not disclosed in public replies, and sensitive cases go to a named person.",
  "ai-chatbots":
    "A website chatbot handles the inquiry details visitors choose to enter, and conversation transcripts can be reviewed after launch. Who owns conversation records, and what can be exported, is settled when the project is scoped.",
  "ai-receptionist":
    "Inbound call handling can involve caller details, call logs, transcripts, and summaries. Whether recording and transcription are on, who can access them, and how long they are kept are defined for each setup, with a recording notice where one is required.",
  "sms-email-automation":
    "Messages go to people who have given suitable permission, and an opt-out stops messages across every workflow. Contact details, message history, and replies are held in connected customer records.",
};

export const servicesIntro =
  "OKIKO HIGH offers six services. Each can involve different information, and what applies to your business depends on the scope we agree with you.";

export const servicesNote =
  "These descriptions summarize what each service page already explains. For how information is handled in a particular project, ask us when we scope it.";

export const sharingItems = [
  "Service providers that help us run our business and deliver services, such as hosting, communications, and software platforms. Some of our services are delivered with third-party platforms, including GoHighLevel and its ecosystem, which handle information under their own terms.",
  "Our clients, when we handle information on their behalf.",
  "Professional advisers, when we need their help with our business.",
  "Authorities or other parties, when the law requires it or when needed to protect rights, safety, or security.",
  "A successor, if OKIKO HIGH is involved in a merger, sale, or similar change to the business.",
] as const;

export const handlingCards: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "globe",
    title: "Where information is handled",
    body: "OKIKO HIGH serves clients worldwide, and our providers operate in different places, so information may be handled in countries other than the one where you live. Contact us if you want to know how this applies to your situation.",
  },
  {
    icon: "clock",
    title: "How long we keep it",
    body: "We keep information for as long as we need it for the purposes in this policy, such as responding to an inquiry, delivering agreed services, keeping business records, and meeting legal obligations. For information we handle for a client, how long it is kept follows our agreement with the client.",
  },
  {
    icon: "shield",
    title: "How we protect it",
    body: "We take reasonable steps to protect the information we handle. No method of storage or transmission is completely secure, so we cannot guarantee absolute security. Please avoid sending sensitive information by phone or email.",
  },
];

export const rights = {
  intro:
    "Depending on where you live, you may have rights over your personal information. These can include asking us to:",
  items: [
    "Tell you what personal information we hold about you and give you a copy",
    "Correct information that is wrong or incomplete",
    "Delete your information, or limit how we use it",
    "Stop certain uses of your information, or withdraw consent you gave",
    "Stop sending you marketing messages",
  ],
  steps: [
    {
      icon: "mail",
      title: "Reach out",
      body: "Email info@okikohigh.com or call (469) 421-9832.",
    },
    {
      icon: "pen",
      title: "Describe your request",
      body: "Tell us what you are asking for and how to reach you. If it concerns a business that uses our services, name that business.",
    },
    {
      icon: "check",
      title: "We review it",
      body: "We may need to confirm your identity first, and we respond as applicable law requires.",
    },
  ] satisfies ReadonlyArray<{ icon: IconName; title: string; body: string }>,
  clientNote:
    "For information we handle for a client, the client generally decides how to respond, so we may need to coordinate with that client. If you are not satisfied with a response, you may be able to contact the privacy or data protection authority where you live.",
} as const;

export const moreCards: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "shield",
    title: "Children's information",
    body: "Our website and services are for businesses and are not directed to children. We do not knowingly collect personal information from children. If you believe a child has sent us information, contact us and we will take steps to delete it.",
  },
  {
    icon: "globe",
    title: "Links to other websites",
    body: "This website links to outside sources, such as platform documentation and government guidance. We do not control those sites, and their own privacy policies apply once you leave ours.",
  },
  {
    icon: "file",
    title: "Changes to this policy",
    body: "We may update this policy as our practices, our services, or the law change. The date near the top of this page shows when it was last updated, and we will update this page when changes materially affect how we handle your information.",
  },
];

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "Does the OKIKO HIGH website use cookies or tracking tools?",
    answer:
      "At the time of this update, the OKIKO HIGH website does not use analytics tools, advertising pixels, or advertising cookies. Our hosting provider may still process standard technical information, such as an IP address, to deliver the site and keep it secure. If we add analytics or advertising tools, we will update this policy and, where the law requires it, ask for your consent first.",
  },
  {
    question: "What information does OKIKO HIGH collect when I call or email?",
    answer:
      "We collect what you choose to share, usually your name, contact details, business information, and what you want help with. We use it to respond to your inquiry and discuss which service, if any, fits. The website has no active contact form at this time, so you can call (469) 421-9832 or email info@okikohigh.com.",
  },
  {
    question: "Does contacting OKIKO HIGH sign me up for marketing texts or emails?",
    answer:
      "No. We use the details you send to respond to your inquiry. Contacting us does not by itself give us permission to send marketing texts or make automated marketing calls. If we send marketing messages in the future, we will follow the rules that apply and include a way to opt out.",
  },
  {
    question: "How does OKIKO HIGH handle my customers' information when it works for my business?",
    answer:
      "We act according to your instructions and our agreement with you. Your business decides why that information is collected, and your own privacy notice explains how you use it. If we receive a request about information we process for you, we coordinate with you as appropriate.",
  },
  {
    question: "Which software platforms handle information for OKIKO HIGH services?",
    answer:
      "Some of our services are delivered with third-party software platforms, including GoHighLevel and its ecosystem. Information handled through a service may be processed by the platform and its own providers under their terms. Which providers apply depends on the service and the scope, so ask us if you want to know for your situation.",
  },
  {
    question: "Should I send health, payment, or other sensitive information when I contact OKIKO HIGH?",
    answer:
      "No. Please do not send card numbers, passwords, government ID numbers, health or patient information, or confidential client, case, or financial details by phone, email, or text. A short description of your business and goals is enough to start.",
  },
  {
    question: "How do I ask OKIKO HIGH to access, correct, or delete my information?",
    answer:
      "Email info@okikohigh.com or call (469) 421-9832 and describe your request. Depending on where you live, you may have rights to access, correct, or delete your information, or to limit how it is used. We may need to confirm your identity first, and we respond as applicable law requires. If your request concerns information we handle for one of our clients, we may need to coordinate with that client.",
  },
];
