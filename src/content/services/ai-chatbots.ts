// Content for /services/ai-chatbots.
// Source: page brief and research pack for "AI Chatbots for Local Business Websites".
// Service availability for AI chatbots is TBD in docs/01. Until the owner confirms it,
// the page is noindex and left out of the sitemap, and no Service schema is emitted.
// Also intentionally not stated here: agency pricing, ownership terms, results,
// testimonials, integrations as confirmed capabilities, and any vendor partnership.

import type { Faq, SourceLink } from "./website-design";

export const aiChatbotsPage = {
  path: "/services/ai-chatbots",
  title: "AI Chatbots for Small Business Websites",
  description:
    "Explore website chatbots for FAQs, lead capture, qualification, and booking, with clear limits, human handoff, and practical setup considerations.",
  h1: "AI Chatbots for Small Business Websites",
  // Primary contact action is TBD in docs/01. Point the CTA at one place so it
  // can change once the owner confirms the contact path.
  primaryCta: { label: "Discuss your website chat workflow", href: "/contact" },
} as const;

export const sources = {
  highLevelFunctions: {
    label: "HighLevel documentation on customer-facing chatbot functions",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000008362-managed-agents-conversation-ai-ask-ai-what-s-the-difference-",
  },
  highLevelSetup: {
    label: "HighLevel Conversation AI setup documentation",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000004401-how-to-set-up-a-conversation-ai-bot",
  },
  highLevelHandover: {
    label: "HighLevel human handover documentation",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000005615-conversation-ai-human-handover-action",
  },
  hubspotBot: {
    label: "HubSpot rule-based chatbot documentation",
    href: "https://knowledge.hubspot.com/chatflows/create-a-bot",
  },
  nist: {
    label: "NIST Generative AI Profile",
    href: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
  },
  gartner: {
    label: "Gartner press release, August 2026",
    href: "https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0",
  },
  googleChatDiscontinued: {
    label: "Google on discontinued Business Profile chat",
    href: "https://support.google.com/business/answer/14919056?hl=en",
  },
  googleContactOptions: {
    label: "Google on current contact options",
    href: "https://support.google.com/business/answer/15013580?hl=en",
  },
  chatbasePricing: {
    label: "Chatbase pricing",
    href: "https://www.chatbase.co/pricing",
  },
} satisfies Record<string, SourceLink>;

export const helpCards = [
  {
    icon: "message",
    title: "Answers",
    body: "Responds to routine questions using information you have approved. Anything outside it is routed to your team.",
  },
  {
    icon: "lead",
    title: "Inquiry capture",
    body: "Collects the details you agreed on, such as the service needed and contact preference, without asking for more than necessary.",
  },
  {
    icon: "check",
    title: "Qualification",
    body: "Asks a short set of agreed questions so your team receives a more complete inquiry. Too many questions can reduce submissions, so we keep it focused.",
  },
  {
    icon: "calendar",
    title: "Quotes and booking",
    body: "Supports quote requests, and booking where a calendar integration is configured and verified.",
  },
] as const;

export const journeys = [
  {
    icon: "message",
    title: "After-hours question to captured inquiry",
    body: "A visitor asks something when no one is available. The chatbot answers from approved information and captures contact details for follow-up.",
  },
  {
    icon: "lead",
    title: "Service question to qualified quote request",
    body: "It collects what a quote needs and passes a complete request to your team, without stating a price it has not been given.",
  },
  {
    icon: "calendar",
    title: "Appointment request to verified calendar result",
    body: "Times come from the connected calendar, and a booking is confirmed only after that system reports success.",
  },
  {
    icon: "headset",
    title: "Missing answer to human handoff",
    body: "The chatbot says it cannot confirm the answer and routes the conversation to a person.",
  },
] as const;

export type ChatTurn = { from: "ai" | "visitor"; text: string };

// Labeled sample with a fictional business. Not a client result.
export const sampleConversation: ReadonlyArray<ChatTurn> = [
  {
    from: "ai",
    text: "You are chatting with an AI assistant. It may make mistakes. You can request help from our team. How can I help?",
  },
  { from: "visitor", text: "Can I get a quote for a repair?" },
  {
    from: "ai",
    text: "I can collect a few details and pass them to the team. What service do you need?",
  },
  { from: "visitor", text: "A repair at my home. How much will it cost?" },
  {
    from: "ai",
    text: "I can't give an exact price in chat. A team member can confirm after reviewing your details. What's the best way to reach you?",
  },
  { from: "visitor", text: "Email is fine." },
  {
    from: "ai",
    text: "Thanks. I've passed your request to the team, and a person will follow up by email.",
  },
];

// Points shown beside the sample chat. `turn` is the index in sampleConversation
// whose bubble carries the matching number badge.
export const noticePoints = [
  {
    turn: 0,
    icon: "shield",
    title: "It says it is an AI",
    body: "The first message says it is an AI assistant, that it may make mistakes, and that your team is available.",
  },
  {
    turn: 2,
    icon: "lead",
    title: "It asks only what is needed",
    body: "It asks for the service and a contact preference, nothing more.",
  },
  {
    turn: 4,
    icon: "tag",
    title: "It declines to invent a price",
    body: "It says it cannot give an exact price in chat and offers to have a team member confirm.",
  },
  {
    turn: 6,
    icon: "headset",
    title: "It hands the request to a person",
    body: "It passes the request to the team and says a person will follow up by email.",
  },
] as const;

export const comparisonRows = [
  {
    icon: "integrations",
    approach: "Rule-based bot",
    how: "Follows predefined paths. Good for structured qualification, fixed answers, and predictable routing.",
    limit: "Visitors must fit the configured paths, and maintaining branches takes work.",
  },
  {
    icon: "message",
    approach: "AI (LLM) chatbot",
    how: "Interprets natural-language questions and answers using business information you supply.",
    limit: "Handles varied wording, but can generate plausible and incorrect answers. Needs testing, restrictions, and monitoring.",
  },
  {
    icon: "headset",
    approach: "Live chat",
    how: "A person replies. Best for judgment, negotiation, sensitive issues, and unusual requests.",
    limit: "Depends on staff availability and response practices.",
  },
] as const;

export const canAnswer = [
  "Services, service area, hours, and FAQs you have approved",
  "What details a quote request needs",
  "Whether a time is open, only from the connected calendar",
] as const;

export const mustHandOff = [
  "Anything it cannot confirm from approved information",
  "Exact prices, unless approved pricing logic exists",
  "Invented policies, discounts, or availability",
  "Emergencies and professional advice",
  "Any visitor who asks for a person",
] as const;

export const disclosureSample =
  "You are chatting with an AI assistant. It may make mistakes. You can request help from our team.";

export const setupSteps = [
  {
    icon: "check",
    title: "Define the job",
    body: "Set the tasks, the exclusions, and the rules for escalating to a person.",
    clientInput: "The questions it should and should not handle.",
  },
  {
    icon: "lead",
    title: "Prepare approved information",
    body: "Assemble services, service area, hours, FAQs, and policies as the source the chatbot answers from.",
    clientInput: "Approved content and a named person who keeps it current.",
  },
  {
    icon: "plug",
    title: "Configure qualification and permissions",
    body: "Set the intake fields, booking actions, and contact permissions the chatbot will use.",
    clientInput: "Which details to collect and how you may contact people.",
  },
  {
    icon: "integrations",
    title: "Connect your tools",
    body: "Connect the website widget, CRM, calendar, and any messaging channels you have approved.",
    clientInput: "Access to the tools being connected.",
  },
  {
    icon: "gauge",
    title: "Test before launch",
    body: "Test normal questions, missing information, malicious prompts, invented-price requests, and integration failures.",
    clientInput: "Review of the test results.",
  },
  {
    icon: "launch",
    title: "Launch, review, and maintain",
    body: "Go live, review transcripts, and keep the approved information up to date.",
    clientInput: "Someone who responds to handoffs.",
  },
] as const;

export const connections = [
  { icon: "integrations", title: "CRM", note: "Each action checked individually" },
  { icon: "calendar", title: "Calendar", note: "Booking confirmed only on success" },
  { icon: "mail", title: "SMS follow-up", note: "Needs permission and channel compliance" },
  { icon: "pin", title: "Google Business Profile", note: "SMS or WhatsApp contact options, where eligible" },
] as const;

export const connectionNotes = [
  {
    title: "Avoiding another inbox to check",
    body: "Routing, ownership, notifications, and response expectations are part of the setup, so handoffs do not sit unseen.",
  },
  {
    title: "Google Business Profile chat",
    body: "Google's former native profile chat has been discontinued. Eligible SMS or WhatsApp contact options are a different route.",
  },
  {
    title: "Worldwide does not mean everywhere",
    body: "OKIKO HIGH serves clients worldwide, but that does not make every channel available or lawful in every country. Channels are confirmed per project.",
  },
] as const;

export const scopeColumns = [
  {
    icon: "check",
    tone: "included",
    heading: "Included in setup",
    note: "Confirmed with you in your written scope.",
    items: [
      "Knowledge preparation",
      "Configuration of intake, qualification, and booking actions",
      "Integrations that have been verified",
      "Human handoff setup",
      "Testing before launch",
      "Monitoring and transcript review",
    ],
  },
  {
    icon: "plus",
    tone: "optional",
    heading: "What we need from you",
    note: "The chatbot is only as good as what it is given.",
    items: [
      "Approved information about your services and policies",
      "A person who owns and updates that content",
      "A named person or team who responds to handoffs",
      "Access to the calendar, CRM, or messaging tools being connected",
    ],
  },
  {
    icon: "minus",
    tone: "muted",
    heading: "Not included",
    note: "Not assumed unless your scope says so.",
    items: [
      "Guaranteed accuracy",
      "Guaranteed sales or lead volume",
      "Binding quotes without approved pricing logic",
      "Emergency triage",
      "Unrestricted professional advice",
      "Unrestricted outbound campaigns",
      "Replacing your customer-service staff",
    ],
  },
] as const;

export const costFactors = [
  {
    icon: "gauge",
    title: "Software charges",
    body: "Platforms bill in different units, such as credits, conversations, seats, or outcomes, and plans carry usage limits.",
  },
  {
    icon: "plug",
    title: "Implementation",
    body: "Discovery, knowledge preparation, configuration, integrations, and testing.",
  },
  {
    icon: "calendar",
    title: "Ongoing management",
    body: "Monitoring, knowledge updates, and revisions after launch.",
  },
  {
    icon: "lead",
    title: "Ownership and exit",
    body: "Who owns accounts, numbers, knowledge content, and conversation records, and what can be exported if you cancel.",
  },
] as const;

export const likelyUseful = [
  "Enough visitors ask the same questions that your staff repeat answers often",
  "Inquiries arrive when no one is available to reply",
  "Quote requests often arrive incomplete",
  "Someone can own the knowledge and respond to handoffs",
] as const;

export const simplerMayDo = [
  "Traffic is low or few questions repeat",
  "The answers fit a clear FAQ",
  "A form or booking link already captures what you need",
  "No one is available to respond to handoffs",
] as const;

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "What does an AI website chatbot do?",
    answer:
      "It can answer approved questions, collect inquiry details, and help visitors request a quote or appointment. Its functions depend on the business information, workflows, and integrations configured for it.",
  },
  {
    question: "Will it say something wrong?",
    answer:
      "Yes, an AI chatbot can misunderstand a question or generate inaccurate information. Approved knowledge, clear restrictions, testing, and human handoff reduce risk, but do not guarantee accuracy.",
  },
  {
    question: "Will it replace my staff?",
    answer:
      "The recommended role is to support staff with routine questions and intake, not replace their judgment. Your team remains responsible for exceptions, commitments, service delivery, and follow-up.",
  },
  {
    question: "What happens if it cannot answer?",
    answer:
      "It should acknowledge that it cannot confirm the answer and offer a route to a person. A configured handoff can assign and notify staff, but the business must decide who responds and when.",
  },
  {
    question: "Is a chatbot worth it for a small business?",
    answer:
      "It can be useful when enough visitors need answers, qualification, or after-hours intake. For a low-volume website, a clearer FAQ, contact form, or booking link may offer better value.",
  },
  {
    question: "Can it book appointments?",
    answer:
      "Supported integrations can let a chatbot use configured calendars and booking rules. It should confirm an appointment only after the connected system reports that the booking succeeded.",
  },
  {
    question: "Can it provide a quote?",
    answer:
      "It can collect the details needed for a quote request. Final prices should come from approved pricing logic or a staff member, not an AI estimate presented as a binding quote.",
  },
  {
    question: "Can a website conversation continue by text?",
    answer:
      "Supported systems can route follow-up into messaging workflows. Customer permission, message purpose, and applicable legal and provider requirements must be checked before sending.",
  },
  {
    question: "Can it connect to my CRM and calendar?",
    answer:
      "Many platforms support CRM and calendar integrations, but available actions and plan requirements vary. Contact creation, field mapping, booking, notifications, and duplicate handling should be verified during testing.",
  },
  {
    question: "How much does a website chatbot cost?",
    answer:
      "Software platforms use different billing units, including credits, conversations, seats, and outcomes. A complete cost assessment should also identify setup, integrations, monitoring, and ongoing management. We do not publish a price on this page; ask for a scoped quote.",
    sources: [sources.chatbasePricing],
  },
];
