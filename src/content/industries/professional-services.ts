// Content for /industries/professional-services (audience page).
// Source: the "Audience Page - Professional Services" brief and its research pack.
// Publication gate: docs/01 lists Professional Services as a FUTURE opportunity, not a
// current client category, and the services named here are still TBD or only partly
// confirmed (only Google Business Profile support is marked available). No pricing,
// delivery scope, tested integrations, professional-services experience,
// demonstration, or client proof exists yet. The page therefore describes a proposed
// approach and makes no availability, pricing, results, compatibility, or
// specialist-experience claims. Open items live in the brief's "Proof gaps" section.
// A separate combination page (connected workflow and service stack) is deferred;
// when built it belongs at /industries/professional-services/marketing-automation/
// and should be linked from the service navigation only once it exists.

import type { IconName } from "@/components/ui/icons";
import type { Faq, SourceLink } from "../shared";

export const professionalServicesPage = {
  path: "/industries/professional-services",
  // The root layout appends " | OKIKO HIGH".
  title: "Professional Services Marketing Agency",
  description:
    "Explore marketing options for professional firms, from website credibility to intake and follow-up, with clear scope and practical workflows.",
  h1: "Marketing for Professional Services Firms",
  // Supporting theme (brief H1 option 2). A theme, not a promise of outcomes.
  theme: "Build Credibility and Clearer Client Intake",
  // Primary contact action is TBD in docs/01. Point every CTA here so it can change
  // in one place once the owner confirms the contact path. The secondary CTA ("See an
  // Example Inquiry-to-Consultation Workflow") is omitted until that asset exists.
  primaryCta: { label: "Discuss Your Firm's Marketing and Intake Needs", href: "/contact" },
} as const;

export const sources = {
  clioTrends: {
    label: "Clio, 2024 Legal Trends Report announcement",
    href: "https://www.prnewswire.com/news-releases/ai-powered-legal-practices-surge-clios-latest-legal-trends-report-reveals-major-shift-302268966.html",
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
  secMarketing: {
    label: "SEC, Investment adviser marketing compliance guide",
    href: "https://www.sec.gov/resources-small-businesses/small-business-compliance-guides/investment-adviser-marketing",
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

// Section A: professions the page addresses. Listing a profession is not a claim of
// experience with it.
export const audienceProfessions =
  "law, accounting and bookkeeping, HR and consulting, financial advice, insurance, architecture, and engineering";

// Section B: buyer questions mapped to website content.
export const buyerMap: ReadonlyArray<{ icon: IconName; question: string; content: string; body: string }> = [
  {
    icon: "search",
    question: "Can you help?",
    content: "Services",
    body: "Plain explanations of what the firm does and who it helps, so a prospect can judge fit without guessing.",
  },
  {
    icon: "shield",
    question: "Why trust you?",
    content: "Credentials",
    body: "Approved credentials and evidence that is accurate and permitted. Nothing is invented or implied.",
  },
  {
    icon: "flag",
    question: "What happens next?",
    content: "Process",
    body: "A visible description of how to make contact, who follows up, and what the first conversation involves.",
  },
];

export const buyerPoints: ReadonlyArray<string> = [
  "A referral can start a buying journey without finishing it. The prospect still wants to understand your services, credentials, fit, and how to engage you.",
  "Website content should reduce uncertainty with specific, accurate information instead of promotional language.",
  "Where consideration is longer, helpful and permitted follow-up can keep the conversation moving.",
];

export const buyerStat = {
  lead: "2014 research: Hinge connected referrals with online evaluation of professional services firms.",
  detail:
    "This is historical research, not a current benchmark. Buyer behavior and available channels have changed since it was published.",
  source: sources.hingeBuyers,
};

// Section C.
export const problems: ReadonlyArray<{
  icon: IconName;
  title: string;
  body: string;
  link?: { label: string; href: string };
}> = [
  {
    icon: "call",
    title: "Unanswered calls and delayed responses",
    body: "When no one is free to answer, or a reply takes days, a qualified inquiry can stall before it reaches a decision-maker.",
  },
  {
    icon: "website",
    title: "Unclear fit and next steps",
    body: "If the website does not explain who you help, how engagement works, and what happens next, prospects are left guessing.",
  },
  {
    icon: "star",
    title: "Thin public evidence",
    body: "Referred prospects often look for proof before they reach out. Sparse or outdated public evidence leaves their questions unanswered.",
    link: { label: "Reputation management", href: "/services/reputation-management" },
  },
  {
    icon: "clock",
    title: "Unowned follow-up",
    body: "Manual intake, reminders, and follow-up with no clear owner create avoidable administrative work for partners and staff.",
    link: { label: "Inquiry follow-up and messaging automation", href: "/services/sms-email-automation" },
  },
];

export const problemsStat = {
  lead: "US law-firm research: in Clio's 2024 study of 500 US law firms, 40% answered the call and 33% responded to the email.",
  detail:
    "This is legal-sector evidence from one study year. It does not describe accounting, consulting, financial, insurance, architecture, or engineering firms, and it does not show how many clients were lost.",
  source: sources.clioTrends,
};

// Section D: six segment cards. Needs come from the research pack; example workflows
// are illustrative. Insurance shows needs only: its producer-licensing and carrier
// rules need their own review before any example is given. No card links to a
// dedicated page, because none exists.
export type Segment = {
  icon: IconName;
  title: string;
  needs: ReadonlyArray<string>;
  workflow: string | null;
};

export const segments: ReadonlyArray<Segment> = [
  {
    icon: "file",
    title: "Law",
    needs: [
      "Discreet first contact that asks for minimal detail",
      "Practice-specific urgency, such as after-hours inquiries",
      "Confidentiality, conflict checks, and supervision kept with attorneys",
      "State-specific advertising and solicitation review",
    ],
    workflow:
      "A referred prospect requests a callback through a short form. A named intake lead follows up and the attorney decides next steps.",
  },
  {
    icon: "clipboard",
    title: "Accounting and bookkeeping",
    needs: [
      "Recurring-client fit rather than one-off requests",
      "Seasonal demand that strains response times",
      "Referral validation: clear services and credentials",
      "Clear onboarding boundaries",
    ],
    workflow:
      "Inquiry routing separates ongoing bookkeeping from tax questions and sends an approved next-step message that states what onboarding involves.",
  },
  {
    icon: "calendar",
    title: "HR and consulting",
    needs: [
      "Longer consideration periods",
      "Authority content that shows how the firm thinks",
      "Qualification before a sales conversation",
      "Several stakeholders in one buying decision",
    ],
    workflow:
      "A prospect downloads an approved guide, opts into relevant follow-up, and is routed to the right consultant once qualified.",
  },
  {
    icon: "shield",
    title: "Financial advisors",
    needs: [
      "Marketing review that depends on the firm's registration",
      "Controls on testimonials and endorsements",
      "Approval workflows before content or messages are released",
    ],
    workflow:
      "Website content and client communications pass the firm's approval process before release. Testimonials are used only after registration-specific review.",
  },
  {
    icon: "key",
    title: "Insurance agencies",
    needs: [
      "Producer licensing that varies by person and place",
      "Carrier approvals for marketing material",
      "A clear line between quote requests and advice",
    ],
    workflow: null,
  },
  {
    icon: "pen",
    title: "Architecture and engineering",
    needs: [
      "Portfolios and project examples",
      "Qualifications and licensing",
      "RFP and proposal follow-up",
      "Project-fit information: type, location, and timing",
    ],
    workflow:
      "Prospects review credentials and relevant projects, then submit project type, location, and timing. Qualified opportunities enter a monitored proposal pipeline.",
  },
];

export const segmentNote = {
  lead: "Rules differ by profession, and this page does not claim equivalent rules across them.",
  detail:
    "ABA Formal Opinion 512 addresses confidentiality and supervision for lawyers using AI tools. SEC guidance addresses registration-specific review of adviser testimonials. Neither applies to the other professions listed, which need their own board, insurance-department, or professional review.",
  source: sources.abaOpinion512,
  extraSource: sources.secMarketing,
};

// Section E: illustrative scenarios. Labeled as examples, not client stories.
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
    summary: "Minimal callback intake after a referral",
    body: "A referred prospect visits after hours. The site explains fit and process, and a minimal form requests a callback without soliciting a detailed confidential narrative. Attorney advertising, solicitation, and confidentiality rules are set by each state and need review before anything goes live.",
  },
  {
    icon: "clipboard",
    title: "Four-person bookkeeping firm",
    summary: "Inquiry routing and approved follow-up",
    body: "Inquiry routing separates ongoing bookkeeping from tax questions and sends an approved next-step message. Existing clients receive neutral review invitations after eligible milestones.",
  },
  {
    icon: "calendar",
    title: "Eight-person HR consultancy",
    summary: "Qualification and relevant, opted-in communication",
    body: "A prospect downloads an approved guide and opts into relevant follow-up. Scheduling routes a qualified inquiry to the correct consultant rather than forcing an immediate sales call.",
  },
  {
    icon: "shield",
    title: "Twelve-person financial-advisory firm",
    summary: "Content approval before release",
    body: "Website content and communications pass the firm's approval process before release. Testimonials are used only after registration-specific review, because SEC, state, and broker-dealer situations differ.",
  },
  {
    icon: "pen",
    title: "Twenty-person architecture and engineering firm",
    summary: "Credentials and project-fit intake",
    body: "Prospects review credentials and relevant projects, then submit project type, location, and timing. Qualified opportunities enter a monitored proposal pipeline. Voice AI is optional here, not central.",
  },
];

export const scenarioNote =
  "These are illustrative workflows, not OKIKO HIGH case studies, and no client results are implied. In each one, a person keeps ownership of the inquiry and a simple workflow may be all a firm needs.";

// Section F: need-to-service navigation. Every card links to its own service page
// with a descriptive anchor. Availability and scope are still being confirmed (docs/01).
export type ProfessionalServiceCard = {
  slug: string;
  path: string;
  title: string;
  icon: IconName;
  need: string;
  description: string;
  linkLabel: string;
};

export const serviceCards: ReadonlyArray<ProfessionalServiceCard> = [
  {
    slug: "website-design",
    path: "/services/website-design",
    title: "Website Design and Development",
    icon: "website",
    need: "Prospects cannot tell what you do or how to engage you",
    description:
      "Supports credibility and clear engagement paths: service explanations, approved credentials, and an easy way to make an inquiry.",
    linkLabel: "Website design for a clearer client journey",
  },
  {
    slug: "sms-email-automation",
    path: "/services/sms-email-automation",
    title: "Text and Email Automation",
    icon: "mail",
    need: "Inquiries wait because follow-up depends on memory",
    description:
      "Supports permitted follow-up and reminders: inquiry assignment, acknowledgment, and consultation reminders, sent only under rules and consent your firm has approved.",
    linkLabel: "Inquiry follow-up and messaging automation",
  },
  {
    slug: "reputation-management",
    path: "/services/reputation-management",
    title: "Reputation Management",
    icon: "star",
    need: "Public evidence is thin or hard to find",
    description:
      "Neutral review requests and careful replies that help authentic public evidence build over time, within platform and professional rules. No gating, incentives, or promises about ratings.",
    linkLabel: "Reputation management",
  },
  {
    slug: "google-business-profile-optimization",
    path: "/services/google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    icon: "pin",
    need: "Prospects look for you on Search and Maps",
    description:
      "Accurate listing information and routine updates, for firms that meet Google's eligibility rules. Eligibility is checked first, because online-only businesses do not qualify.",
    linkLabel: "Google Business Profile optimization",
  },
  {
    slug: "ai-chatbots",
    path: "/services/ai-chatbots",
    title: "AI Chatbots (optional)",
    icon: "message",
    need: "Routine questions arrive when no one is available",
    description:
      "An optional website assistant limited to approved administrative answers and routing. It is identified as AI, collects minimal information, and offers a route to a person.",
    linkLabel: "AI chatbots for approved FAQs and routing",
  },
  {
    slug: "ai-receptionist",
    path: "/services/ai-receptionist",
    title: "AI Receptionist and Voice Agents (optional)",
    icon: "headset",
    need: "Calls go unanswered and the risk is justified",
    description:
      "An optional pilot where unanswered calls justify added supervision. Its role is administrative, such as taking a callback request, with tested escalation to a named person.",
    linkLabel: "AI receptionists and voice agents",
  },
];

export const stackNote = {
  intro:
    "You do not need every service, and AI chat and voice are optional tools, not prerequisites. Start with the problem you can name.",
  scopeLabel: "Confirm scope",
  scopeNote:
    "Availability and scope of each service are being confirmed with OKIKO HIGH. This is a way to match needs to services, not a package or a delivery order. A call-heavy firm may need intake coverage before a redesign, and an RFP-driven practice may gain more from credentials and proposal follow-up than from voice AI.",
  lead: "Google excludes online-only businesses from Business Profile eligibility.",
  detail:
    "Whether Business Profile support applies depends on each firm's actual operating model. Voice-agent capabilities documented by a platform vendor also do not establish what OKIKO HIGH offers or how it is scoped.",
  source: sources.googleGbpEligibility,
};

// Section G.
export const existingSystemsFlow: ReadonlyArray<{ icon: IconName; title: string; body: string }> = [
  {
    icon: "file",
    title: "Your existing tools",
    body: "CRM, scheduling, and practice-management software",
  },
  {
    icon: "search",
    title: "Compatibility assessment",
    body: "What must move, who owns it, what can fail",
  },
  {
    icon: "check",
    title: "Proposed workflow",
    body: "Only what your firm still needs",
  },
];

export const compatibilityChecks: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Audit what you already have",
    body: "Review your CRM, scheduling, and practice-management tools first. Your existing software may already solve the bottleneck.",
  },
  {
    title: "Define the handoffs",
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
    body: "Define how the same prospect is recognized so it is not created twice, and who is notified when a sync fails. Test these before launch.",
  },
  {
    title: "Compatibility assessment required",
    body: "Clio, Lawmatics, HubSpot, scheduling, and practice tools are discovery inputs, not promised integrations. OKIKO HIGH's tested integrations are not yet confirmed.",
  },
];

export const softwareNote = {
  lead: "Replacing your practice-management software is not the default.",
  detail:
    "Lawmatics documents a handoff of converted matters to Clio Manage. That verifies one vendor workflow. It does not verify an OKIKO HIGH integration or that every field syncs.",
  source: sources.lawmaticsClio,
};

// Section H: "Administrative support / Professional decisions" comparison.
export const canHandle: ReadonlyArray<string> = [
  "Explaining approved next steps for getting started",
  "Requesting a callback and collecting only the minimal contact details needed",
  "Answering a short list of approved administrative questions",
  "Routing the inquiry to a named person or a monitored callback task",
];

export const mustEscalate: ReadonlyArray<string> = [
  "Legal, financial, tax, insurance, architectural, or engineering advice",
  "Conflict decisions and other professional judgment",
  "Unsupported questions the assistant has no approved answer for",
  "Detailed confidential or sensitive information, which may need a separate secure channel",
  "Regulated content that has not been approved and reviewed",
];

export const failedTransfer = {
  title: "Example: a transfer that fails",
  body: "A caller asks for a person, but the transfer does not connect. The workflow creates a monitored callback task for a named person, so the caller is not left on an unanswered line. An answered call is not the same as a completed human handoff, so this path is tested before launch, not treated as an exception without an owner.",
};

export const handoffNote = {
  lead: "Supervision stays with qualified people.",
  detail:
    "ABA Formal Opinion 512 addresses confidentiality, communication, and supervision when lawyers use AI tools, and HighLevel's voice-agent deployment guidance calls for testing fallback behavior. Identifying an AI assistant and offering a human route is a recommended practice here, not a universal legal requirement.",
  source: sources.abaOpinion512,
  extraSource: sources.highlevelVoice,
};

// Section I: discovery checklist and an illustrative measurement framework. No
// numbers, baselines, or results are shown or implied.
export const discoveryChecklist: ReadonlyArray<string> = [
  "Identify the bottleneck: where do inquiries actually stall today?",
  "Establish a baseline before anything changes",
  "Define what a suitable inquiry looks like for your firm",
  "Map existing software, jurisdictions, and approval requirements",
  "Write down the selected services, exclusions, responsibilities, and costs before work begins",
  "Test normal use and exceptions before launch, including escalation and failed handoffs",
  "Define staff training, monitoring, account ownership, and support responsibilities",
];

export const measures: ReadonlyArray<{ icon: IconName; metric: string; meaning: string }> = [
  {
    icon: "clock",
    metric: "Meaningful response",
    meaning: "Time until a person actually follows up, compared with your own baseline.",
  },
  {
    icon: "analytics",
    metric: "Qualified inquiries",
    meaning: "Inquiries that fit the firm's work, tracked separately from raw inquiry volume.",
  },
  {
    icon: "calendar",
    metric: "Consultation attendance",
    meaning: "Attended divided by booked consultations, reported as counts and percentages.",
  },
  {
    icon: "repeat",
    metric: "Administrative effort",
    meaning: "Minutes per inquiry including supervision, correction, and rework, so net time savings are real, not assumed.",
  },
];

export const measurementNote =
  "Compare results with your own baseline, not a general benchmark. No universal performance benchmark or approved OKIKO HIGH results are available, and none are shown here. Rankings, inquiry counts, and automated messages alone do not demonstrate profitable client acquisition.";

export const boundariesNote =
  "This page does not promise legal compliance, rankings, revenue, or uninterrupted handling. Worldwide service coverage does not mean every workflow is permitted in every country: messaging, calling, recording, and data handling are reviewed for the places your firm and prospects are actually located. Pricing is not published here and is defined in the written proposal.";

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "Which professional firms is this page for?",
    answer:
      "This page addresses the needs of law, accounting and bookkeeping, HR and consulting, financial-advisory, insurance, architecture, and engineering firms. Inclusion here does not establish that OKIKO HIGH has served every profession; relevant experience and service fit should be confirmed directly.",
  },
  {
    question: "Can marketing help a firm that grows through referrals?",
    answer:
      "It can help referred prospects evaluate the firm and understand how to take the next step. Historical professional-services research shows that online evaluation complements referral-based discovery.",
    sources: [sources.hingeBuyers],
  },
  {
    question: "What if we want better-fit inquiries rather than more inquiries?",
    answer:
      "The proposed approach can prioritize clearer service information, qualification, and routing instead of greater inquiry volume. The assessment should define what a suitable inquiry looks like for your firm.",
  },
  {
    question: "Do we need every service?",
    answer:
      "No. Start with the identified problem; a clearer website and dependable human follow-up may be sufficient without chatbots, voice AI, or an additional CRM.",
  },
  {
    question: "Will this replace our existing practice-management or CRM software?",
    answer:
      "Replacement should not be the default. Existing tools should be reviewed first, including documented workflows such as Lawmatics' handoff to Clio Manage.",
    sources: [sources.lawmaticsClio],
  },
  {
    question: "Can your approach work with Clio, Lawmatics, HubSpot, or our scheduling tools?",
    answer:
      "Compatibility depends on your products, permissions, and required actions. OKIKO HIGH's tested integrations remain unconfirmed, so any proposed connection must be assessed before it is promised.",
  },
  {
    question: "Is AI required, and can it provide professional advice?",
    answer:
      "AI is optional in the proposed approach and should be limited to approved administrative tasks. Professional advice and judgment should remain with qualified people, with appropriate oversight of the tools used.",
    sources: [sources.abaOpinion512],
  },
  {
    question: "How should confidential information be handled?",
    answer:
      "Initial forms and assistants should collect only what the contact workflow needs. Access, retention, and vendor data use require review, and sensitive details may need a separate secure channel.",
    sources: [sources.abaOpinion512],
  },
  {
    question: "Can every firm use Google Business Profile and automated review requests?",
    answer:
      "No. Google excludes online-only businesses from Business Profile eligibility and prohibits selectively requesting positive reviews; professional rules may add further restrictions.",
    sources: [sources.googleGbpEligibility, sources.googleReviewPolicy],
  },
  {
    question: "What does support from OKIKO HIGH cost?",
    answer:
      "OKIKO HIGH's pricing model is TBD. Before approval, a proposal should identify the selected scope and any implementation, software, usage, integration, or ongoing-support costs.",
  },
];
