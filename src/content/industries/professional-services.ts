// Content for /industries/professional-services.
// Source: the Professional Services Marketing and Automation page brief and its
// research pack. Publication gate: docs/01 lists Professional Services as a FUTURE
// opportunity, not a current client category, and all six services named here are
// still TBD or only partly confirmed. No pricing, delivery scope, tested
// integrations, professional-services experience, demonstration, or client proof
// exists yet. The page therefore describes a proposed approach, not a package, and
// makes no availability, pricing, results, compatibility, or specialist-experience
// claims. Open items live in the brief's "Proof gaps" section.

import type { IconName } from "@/components/ui/icons";
import type { Faq, SourceLink } from "../services/website-design";

export const professionalServicesPage = {
  path: "/industries/professional-services",
  // The root layout appends " | OKIKO HIGH".
  title: "Professional Services Marketing & Automation",
  description:
    "Explore website, intake, and follow-up options for professional firms, with clear scope, human handoffs, and respect for existing software.",
  h1: "Marketing and Automation for Professional Services",
  // Primary contact action is TBD in docs/01. Point every CTA here so it can change
  // in one place once the owner confirms the contact path.
  primaryCta: { label: "Discuss Your Firm's Website and Intake Workflow", href: "/contact" },
} as const;

export const sources = {
  clioTrends: {
    label: "Clio, 2024 Legal Trends Report announcement",
    href: "https://www.prnewswire.com/news-releases/ai-powered-legal-practices-surge-clios-latest-legal-trends-report-reveals-major-shift-302268966.html",
  },
  clioIntake: {
    label: "Clio, client intake research guide",
    href: "https://www.clio.com/guides/client-intake-legal-trends/",
  },
  hingeBuyers: {
    label: "Hinge, how professional services buyers check you out (2014)",
    href: "https://hingemarketing.com/blog/story/new-research-study-how-professional-services-buyers-check-you-out",
  },
  lawmaticsClio: {
    label: "Lawmatics Help, Clio Manage integration",
    href: "https://help.lawmatics.com/en/articles/10699984-clio-manage-integration",
  },
  abaOpinion512: {
    label: "ABA, Formal Opinion 512",
    href: "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf",
  },
  highlevelVoice: {
    label: "HighLevel Support, How to create Voice AI agents",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000004107-how-to-create-voice-ai-agents",
  },
  googleGbpEligibility: {
    label: "Google, Business Profile eligibility",
    href: "https://support.google.com/business/answer/13763036?hl=en",
  },
  googleReviewPolicy: {
    label: "Google, Prohibited and restricted content for reviews",
    href: "https://support.google.com/contributionpolicy/answer/7400114?hl=en",
  },
} satisfies Record<string, SourceLink>;

// Section B.
export const problems: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "search",
    title: "Referrals still research you",
    body: "A referred prospect still looks at your firm online and needs to understand what you do and how to engage you.",
  },
  {
    icon: "call",
    title: "Unanswered calls and unowned inquiries",
    body: "When no one is free to answer, or no one owns the next step, a qualified inquiry can stall before it reaches a decision-maker.",
  },
  {
    icon: "website",
    title: "Unclear fit and next steps",
    body: "If the website does not explain who you help, how engagement works, and what happens next, prospects are left guessing.",
  },
  {
    icon: "clock",
    title: "Administrative drag",
    body: "Manual intake, reminders, and follow-up can consume partner and staff time that your firm would rather spend on clients.",
  },
];

export const problemsStat = {
  lead: "In Clio's 2024 study of 500 US law firms, 40% answered the call and 33% responded to the email.",
  detail:
    "This is a US legal-industry finding from one study year. It does not describe accounting, consulting, financial, insurance, architecture, or engineering firms, and it does not show how many clients were lost.",
  source: sources.clioTrends,
};

// Section C: the six candidate services. Every card links to its own service page.
// `layer` carries the brief's "Foundation / Conditional support / Optional AI" grouping
// in text, so the grouping never depends on color.
export type ProfessionalServiceCard = {
  slug: string;
  path: string;
  title: string;
  icon: IconName;
  layer: "Foundation" | "Conditional support" | "Optional AI";
  description: string;
  buttonLabel: string;
};

export const serviceCards: ReadonlyArray<ProfessionalServiceCard> = [
  {
    slug: "website-design",
    path: "/services/website-design",
    title: "Website Design and Development",
    icon: "website",
    layer: "Foundation",
    description:
      "The place where a firm explains its expertise, who it helps, and how engagement works. Service explanations, approved credentials, and a clear way to make an inquiry help a referred prospect feel confident reaching out.",
    buttonLabel: "Explore Website Design",
  },
  {
    slug: "sms-email-automation",
    path: "/services/sms-email-automation",
    title: "Text and Email Automation",
    icon: "mail",
    layer: "Foundation",
    description:
      "Inquiry assignment, permitted acknowledgment, consultation reminders, and follow-up that does not depend on someone remembering. Messages go out only under rules and consent your firm has approved.",
    buttonLabel: "Explore Text and Email Automation",
  },
  {
    slug: "reputation-management",
    path: "/services/reputation-management",
    title: "Reputation Management",
    icon: "star",
    layer: "Conditional support",
    description:
      "Neutral review requests and careful replies that help authentic public evidence build over time. Requests follow platform and professional rules, with no gating, incentives, or promises about ratings.",
    buttonLabel: "Explore Reputation Management",
  },
  {
    slug: "google-business-profile-optimization",
    path: "/services/google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    icon: "pin",
    layer: "Conditional support",
    description:
      "Accurate listing information and routine updates, for firms that meet Google's eligibility rules and whose prospects look for them on Search and Maps. Eligibility is checked first, because online-only businesses do not qualify.",
    buttonLabel: "Explore Google Business Profile Optimization",
  },
  {
    slug: "ai-chatbots",
    path: "/services/ai-chatbots",
    title: "AI Chatbots",
    icon: "message",
    layer: "Optional AI",
    description:
      "A website assistant limited to approved administrative answers and routing, such as explaining how to get started or requesting a callback. It is identified as AI, collects minimal information, and offers a route to a person.",
    buttonLabel: "Explore AI Chatbots",
  },
  {
    slug: "ai-receptionist",
    path: "/services/ai-receptionist",
    title: "AI Receptionist and Voice Agents",
    icon: "headset",
    layer: "Optional AI",
    description:
      "A pilot option where unanswered calls justify the added risk and supervision. Its role is administrative, such as taking a callback request or routing a caller, with tested escalation to a named person.",
    buttonLabel: "Explore the AI Receptionist",
  },
];

export const stackNote = {
  scopeLabel: "Confirm scope",
  scopeNote:
    "Availability and scope of each service are being confirmed. This is a proposed way to prioritize, not a package, and not a delivery order. A call-heavy firm may need intake coverage before a redesign, and an RFP-driven practice may gain more from credentials and proposal follow-up than from voice AI.",
  lead: "Google excludes online-only businesses from Business Profile eligibility.",
  detail:
    "Whether Business Profile support applies depends on each firm's actual operating model. Voice-agent capabilities documented by a platform vendor also do not establish what OKIKO HIGH offers or how it is scoped.",
  source: sources.googleGbpEligibility,
};

// Section D: illustrative scenarios (brief section 12). Labeled as examples, not
// client stories. Legal and advisor examples reflect the ethics and marketing-rule
// boundaries the brief cites; nothing here claims experience with any profession.
export type Scenario = {
  icon: IconName;
  title: string;
  summary: string;
  body: string;
};

export const scenarios: ReadonlyArray<Scenario> = [
  {
    icon: "file",
    title: "Solo estate-planning attorney",
    summary: "Law: discreet first contact",
    body: "A referred prospect visits after hours. The site explains fit and process, and a minimal form requests a callback without soliciting a detailed confidential narrative. Attorney advertising, solicitation, and confidentiality rules are set by each state and need review before anything goes live.",
  },
  {
    icon: "clipboard",
    title: "Four-person bookkeeping firm",
    summary: "Accounting and bookkeeping: routing by need",
    body: "Inquiry routing separates ongoing bookkeeping from tax questions and sends an approved next-step message. Existing clients receive neutral review invitations after eligible milestones.",
  },
  {
    icon: "calendar",
    title: "Eight-person HR consultancy",
    summary: "HR and consulting: qualification before a call",
    body: "A prospect downloads an approved guide and opts into relevant follow-up. Scheduling routes a qualified inquiry to the correct consultant rather than forcing an immediate sales call.",
  },
  {
    icon: "shield",
    title: "Twelve-person financial-advisory firm",
    summary: "Financial advice: approval before release",
    body: "Website content and communications pass the firm's approval process before release. Testimonials are used only after registration-specific review, because SEC, state, and broker-dealer situations differ.",
  },
  {
    icon: "pen",
    title: "Twenty-person architecture and engineering firm",
    summary: "Architecture and engineering: credentials and project fit",
    body: "Prospects review credentials and relevant projects, then submit project type, location, and timing. Qualified opportunities enter a monitored proposal pipeline. Voice AI is optional here, not central.",
  },
];

export const scenarioNote =
  "These are illustrative workflows, not OKIKO HIGH case studies, and no client results are implied. Insurance agencies need their own review of producer licensing and carrier approvals, and should not reuse financial-advisor compliance language.";

// Section E.
export const compatibilityChecks: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Audit what you already have",
    body: "Review your CRM, scheduling, and practice-management tools first. Your existing software may already solve the bottleneck.",
  },
  {
    title: "What must move between systems",
    body: "List which fields and actions the connection has to handle, such as creating a contact or passing along a converted matter. A product name alone confirms none of these.",
  },
  {
    title: "Who owns the records",
    body: "Decide which system is the source of truth for each record and which way changes flow.",
  },
  {
    title: "Permissions and plan limits",
    body: "Access depends on your account, plan, and permissions, and some products limit what an integration can do.",
  },
  {
    title: "Duplicates and failures",
    body: "Define how the same prospect is recognized so it is not created twice, and who is notified when a sync fails.",
  },
  {
    title: "Compatibility assessment required",
    body: "Clio, Lawmatics, HubSpot, and scheduling tools are discovery inputs, not promised integrations. OKIKO HIGH's tested integrations are not yet confirmed.",
  },
];

export const softwareNote = {
  lead: "Replacing your practice-management software is not the default.",
  detail:
    "Lawmatics documents a handoff of converted matters to Clio Manage. That verifies one vendor workflow. It does not verify an OKIKO HIGH integration or that every field syncs.",
  source: sources.lawmaticsClio,
};

// Section F: "Can handle / Must escalate" comparison.
export const canHandle: ReadonlyArray<string> = [
  "Explaining approved next steps for getting started",
  "Requesting a callback and collecting minimal contact details",
  "Answering a short list of approved administrative questions",
  "Routing the inquiry to a named person or a monitored callback task",
];

export const mustEscalate: ReadonlyArray<string> = [
  "Legal, financial, tax, insurance, architectural, or engineering advice",
  "Conflict decisions and other professional judgment",
  "Unsupported questions the assistant has no approved answer for",
  "Detailed confidential or sensitive information, which may need a separate secure channel",
  "Regulated content that has not been approved",
];

export const failedTransfer = {
  title: "Example: a transfer that fails",
  body: "A caller asks for a person, but the transfer does not connect. The workflow creates a monitored callback task for a named person, so the caller is not left on an unanswered line. An answered call is not the same as a completed human handoff, so this path is tested before launch, not treated as an exception without an owner.",
};

export const handoffNote = {
  lead: "Supervision stays with qualified people.",
  detail:
    "ABA Formal Opinion 512 addresses confidentiality, communication, and supervision when lawyers use AI tools, and vendor deployment documentation calls for reviewing fallback behavior. Identifying an AI assistant and offering a human route is a recommended practice here, not a universal legal requirement.",
  source: sources.abaOpinion512,
};

// Section G: sample metric definitions. No results are shown or implied.
export const metricDefinitions: ReadonlyArray<{ icon: IconName; metric: string; meaning: string }> = [
  {
    icon: "clock",
    metric: "Meaningful human response",
    meaning: "Median and slowest time until a person actually follows up, compared with a baseline set before anything changes.",
  },
  {
    icon: "flag",
    metric: "Inquiries with an owner",
    meaning: "The share of eligible inquiries assigned to a responsible person or explicitly declined.",
  },
  {
    icon: "clipboard",
    metric: "Intake completion",
    meaning: "Complete records divided by eligible inquiries, without collecting unnecessary sensitive data.",
  },
  {
    icon: "calendar",
    metric: "Consultation attendance",
    meaning: "Attended divided by booked consultations, reported as counts and percentages.",
  },
  {
    icon: "analytics",
    metric: "Qualified inquiries",
    meaning: "Inquiries that fit the firm's work, tracked separately from raw inquiry volume.",
  },
  {
    icon: "repeat",
    metric: "Staff time and correction work",
    meaning: "Minutes per inquiry including supervision and rework, so net time savings are real, not assumed.",
  },
];

export const measurementNote = {
  body: "Compare results with your own baseline, not a general benchmark. No universal revenue or lead-growth figure has been verified for this combination of services, and no results are shown on this page. Rankings, inquiry counts, and automated messages alone do not demonstrate profitable client acquisition.",
};

// Section H: process. Discover -> define -> test -> hand over.
export const processSteps: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "search",
    title: "Discover",
    body: "Map the inquiry journey, buyer concerns, existing software, jurisdictions, and approval requirements.",
  },
  {
    icon: "file",
    title: "Define",
    body: "A written proposal names the selected services, exclusions, responsibilities, and costs before work begins.",
  },
  {
    icon: "check",
    title: "Test",
    body: "Check normal use and exceptions before launch, including integrations, permissions, escalation, and failed handoffs.",
  },
  {
    icon: "key",
    title: "Hand over",
    body: "Define staff training, monitoring, account ownership, and support responsibilities.",
  },
];

export const exclusions: ReadonlyArray<string> = [
  "Legal, financial, tax, insurance, architectural, or engineering advice",
  "Autonomous conflict clearance",
  "Guaranteed rankings or revenue",
  "Unrestricted cold outreach",
  "Replacing your practice-management software",
  "Universal compliance certification",
];

export const processNote =
  "Worldwide service coverage does not mean every workflow is permitted in every country. Messaging, calling, recording, and data handling are reviewed for the places your firm and prospects are actually located. Pricing is not published here and is defined in the written proposal.";

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "What does professional services marketing and automation include?",
    answer:
      "It can connect a firm's website with inquiry routing, follow-up, reputation support, and selected AI assistance. OKIKO HIGH's exact availability and inclusions should be confirmed in a written scope before work begins.",
  },
  {
    question: "Is this useful if most clients come through referrals?",
    answer:
      "It can be useful when referred prospects research your firm or need clearer next steps after contacting it. Historical professional-services research shows that online evaluation complements referral-based discovery.",
    sources: [sources.hingeBuyers],
  },
  {
    question: "Do we need all six services?",
    answer:
      "No. Start with the verified bottleneck. A credible website and reliable human follow-up may be enough without AI chat or voice.",
  },
  {
    question: "Will this replace our existing CRM or practice-management software?",
    answer:
      "Replacement should not be the default. Existing capabilities should be reviewed first, including documented workflows such as Lawmatics' handoff to Clio Manage.",
    sources: [sources.lawmaticsClio],
  },
  {
    question: "Can the workflows connect with Clio, Lawmatics, HubSpot, or our scheduling tools?",
    answer:
      "Compatibility depends on your specific products, permissions, and required actions. OKIKO HIGH's tested integrations remain unconfirmed, so any proposed connection must be assessed and tested before it is promised.",
  },
  {
    question: "Can an AI receptionist provide professional advice?",
    answer:
      "The proposed role is administrative, such as explaining approved next steps or requesting a callback. Professional advice and judgment should remain with qualified people, with appropriate supervision of the tools used.",
    sources: [sources.abaOpinion512],
  },
  {
    question: "What happens when AI cannot answer or a transfer fails?",
    answer:
      "The workflow should route the inquiry to a named person or create a monitored callback task. Unsupported questions and failed transfers must be tested before launch, rather than treated as exceptions without an owner.",
    sources: [sources.highlevelVoice],
  },
  {
    question: "How should confidential information be handled?",
    answer:
      "Initial forms and assistants should collect only what the intake workflow needs. Access, retention, and vendor data use must be reviewed, and sensitive details may need a separate secure channel.",
    sources: [sources.abaOpinion512],
  },
  {
    question: "Can review requests and Google Business Profile updates be automated?",
    answer:
      "Potentially, subject to confirmed scope, professional rules, and platform eligibility. Google prohibits selective positive-review solicitation and excludes online-only businesses from Business Profile eligibility.",
    sources: [sources.googleGbpEligibility],
  },
  {
    question: "What does the service cost?",
    answer:
      "OKIKO HIGH's pricing model is TBD. Before approval, the proposal should identify the selected services and any implementation, software, usage, integration, or ongoing-support costs.",
  },
];
