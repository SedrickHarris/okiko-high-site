// Content for /services/website-design.
// Source: page brief and research pack for "Website Design and Builds for Local Businesses".
// Business facts that are still TBD in docs/01 are intentionally not stated here:
// agency pricing, delivery timelines, platform stack, ownership terms, results, testimonials.

export type SourceLink = { label: string; href: string };

export const websiteDesignPage = {
  path: "/services/website-design",
  title: "Website Design for Local Businesses",
  description:
    "Website design for local businesses, built around calls, quotes, and bookings. Explore scope, SEO foundations, ownership, and next steps.",
  h1: "Website Design for Local Businesses That Makes the Next Step Easy",
  serviceType: "Website design and development",
  // Primary contact action is TBD in docs/01. Point the CTA at one place so it
  // can change once the owner confirms the contact path.
  primaryCta: { label: "Request a Website Scope & Quote", href: "/contact" },
} as const;

export const sources = {
  brightLocalReviews: {
    label: "BrightLocal, Local Consumer Review Survey (2026)",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
  },
  brightLocalStats: {
    label: "BrightLocal, Local SEO Statistics (2026)",
    href: "https://www.brightlocal.com/resources/local-seo-statistics/",
  },
  googleCwv: {
    label: "Google Search Central, Core Web Vitals",
    href: "https://developers.google.com/search/docs/appearance/core-web-vitals",
  },
  webDevVitals: {
    label: "web.dev, Web Vitals",
    href: "https://web.dev/articles/vitals",
  },
  googleSiteMoves: {
    label: "Google Search Central, Site moves with URL changes",
    href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
  },
  googleSpam: {
    label: "Google Search Central, Spam policies",
    href: "https://developers.google.com/search/docs/essentials/spam-policies",
  },
  wcag22: {
    label: "W3C, WCAG 2.2",
    href: "https://www.w3.org/TR/WCAG22/",
  },
  adaGuidance: {
    label: "ADA.gov, Guidance on Web Accessibility and the ADA",
    href: "https://www.ada.gov/resources/web-guidance/",
  },
  wixExport: {
    label: "Wix Help, Exporting or embedding your site elsewhere",
    href: "https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere",
  },
  squarespaceExport: {
    label: "Squarespace Help, Exporting your site",
    href: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site",
  },
  gruffyGoat: {
    label: "GruffyGoat, Small Business Website Costs (published 2025, updated September 2026)",
    href: "https://gruffygoat.com/blog/small-business-website-cost",
  },
  fcc: {
    label: "FCC, TCPA applies to AI technologies that generate human voices (2024)",
    href: "https://www.fcc.gov/document/fcc-confirms-tcpa-applies-ai-technologies-generate-human-voices",
  },
  hhs: {
    label: "HHS, HIPAA and online tracking technologies",
    href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html",
  },
} satisfies Record<string, SourceLink>;

export const contactPathPoints = [
  "Clear service information and an obvious next step on every page.",
  "A visible tap-to-call link and an accessible inquiry form.",
  "Trust signals that are real and permissioned: verified credentials, authentic reviews, relevant work examples.",
  "Inquiries tested from the form or call through to the person or system responsible for answering.",
] as const;

// Overview tiles for the scope section. Wording follows the page brief: analytics
// is configuration (not ongoing optimization), launch is handover (not ongoing
// support), and integrations are scoped separately.
export const capabilities = [
  { icon: "design", label: "Custom website design" },
  { icon: "responsive", label: "Mobile-responsive design" },
  { icon: "conversion", label: "Conversion-focused pages" },
  { icon: "lead", label: "Lead capture" },
  { icon: "integrations", label: "Integrations", note: "Scoped separately" },
  { icon: "seo", label: "SEO-ready foundations" },
  { icon: "analytics", label: "Analytics setup" },
  { icon: "launch", label: "Launch and handover" },
] as const;

export const wireframeAnnotations = [
  "Tap-to-call stays visible without covering content or keyboard focus.",
  "The inquiry form is short, with clear error and success messages.",
  "Services are described in plain language, with what happens next.",
  "Trust signals appear only when they are verified and permissioned.",
] as const;

export const inquiryFlow = [
  "Visitor reads your offer",
  "Calls or sends an inquiry",
  "Routed to the responsible person or system",
  "Receives a reply",
] as const;

export const scopeColumns = [
  {
    icon: "check",
    tone: "included",
    heading: "Scoped into your project",
    note: "Named in your written scope.",
    items: [
      "A defined page count and copywriting responsibilities",
      "Responsive layouts for phones, tablets, and desktops",
      "Agreed lead capture: inquiry forms and click-to-call",
      "Analytics configuration",
      "Foundational SEO: titles, internal links, indexability checks",
      "Testing before launch",
      "Migration from an existing site, when applicable",
      "Handover of access and documentation",
    ],
  },
  {
    icon: "plus",
    tone: "optional",
    heading: "Optional and scoped separately",
    note: "Added only if you want them.",
    items: [
      "Hosting",
      "Ongoing site care and maintenance",
      "AI chatbots and AI reception",
      "Text and email follow-up automations",
      "Advanced CRM workflows",
    ],
  },
  {
    icon: "minus",
    tone: "muted",
    heading: "Not assumed",
    note: "Included only if your scope says so.",
    items: [
      "Ongoing SEO or advertising",
      "Photography",
      "Unlimited revisions",
      "Premium software licenses",
      "Legal policy drafting",
      "A formal accessibility conformance audit",
    ],
  },
] as const;

export const approachGuide = [
  {
    icon: "improve",
    heading: "Improve",
    body: "The site works, but contact paths, messaging, or speed hold it back. Targeted fixes may be enough.",
  },
  {
    icon: "redesign",
    heading: "Redesign",
    body: "The current platform can support what you need, but the layout, content, or structure needs rework.",
  },
  {
    icon: "rebuild",
    heading: "Rebuild",
    body: "Structural, integration, performance, or portability limits make incremental fixes uneconomical.",
  },
] as const;

export const platformRows = [
  {
    option: "Wix",
    fits: "Owner-operated editing and a relatively straightforward site.",
    watch:
      "Wix sites run on Wix infrastructure. Transferring your domain away is separate from moving the site itself.",
  },
  {
    option: "Squarespace",
    fits: "Brochure or portfolio sites with limited custom workflows.",
    watch:
      "Some content exports, but an export is not a full portable copy of the design and system. Confirm the content types you need.",
  },
  {
    option: "WordPress theme",
    fits: "Editable service content in a familiar CMS without paying for an entirely bespoke design.",
    watch:
      "Theme quality and implementation decide the result. Budget for maintenance and third-party licenses.",
  },
  {
    option: "Fully bespoke build",
    fits: "Unusual workflows, design requirements, performance constraints, or integrations.",
    watch:
      "Often more scope and support than a simple brochure site needs. Hand-coded is not proof of better conversion.",
  },
] as const;

export const migrationChecklist = [
  "Preserve valuable content and URLs where practical",
  "Map relevant permanent redirects for any URL that changes",
  "Check canonical tags, sitemap, and robots rules",
  "Confirm the launched site is indexable and no staging blocks remain",
  "Monitor crawl errors after launch",
] as const;

export const architectureLevels = [
  "Homepage",
  "Services hub",
  "Individual service pages",
  "Location or service-area pages, only for real branches or genuine coverage",
] as const;

export const qualityChecks = [
  {
    icon: "phone",
    heading: "Mobile testing",
    body: "Navigation, tap-to-call, forms, and booking are tested on phones, not only in a desktop preview.",
  },
  {
    icon: "gauge",
    heading: "Performance targets",
    body: "Targets follow Google's Core Web Vitals thresholds: LCP of 2.5 seconds or less, INP of 200 milliseconds or less, and CLS of 0.1 or less, assessed at the 75th percentile of real-user data on mobile and desktop.",
  },
  {
    icon: "accessibility",
    heading: "Accessibility scope",
    body: "Testing is defined against WCAG 2.2 AA: keyboard operation, visible focus, forms, contrast, zoom, and target size. Automated scans are paired with manual checks.",
  },
  {
    icon: "plug",
    heading: "Third-party widgets",
    body: "Chat, booking, and form widgets are checked for speed, accessibility, and privacy alongside the main site.",
  },
] as const;

export const processSteps = [
  {
    icon: "search",
    title: "Audit",
    body: "Review your goals, existing traffic, rankings, lead quality, platform, and ownership.",
    clientInput: "Your goals and access to the current site and analytics, if any.",
  },
  {
    icon: "clipboard",
    title: "Plan",
    body: "Map services, legitimate service areas, navigation, conversion paths, and migration requirements.",
    clientInput: "Your approval of the plan before design begins.",
  },
  {
    icon: "pen",
    title: "Write and design",
    body: "Develop customer-focused copy, mobile-first layouts, and verified trust signals.",
    clientInput: "Facts, credentials, and proof to verify, plus your approval of copy and layouts.",
  },
  {
    icon: "code",
    title: "Build",
    body: "Implement pages, forms, click-to-call, the CMS, analytics, metadata, and applicable structured data.",
    clientInput: "Timely feedback on builds and answers to open questions.",
  },
  {
    icon: "shield",
    title: "Test",
    body: "Check forms, devices, accessibility, performance, redirects, and indexability.",
    clientInput: "Your review and sign-off before launch.",
  },
  {
    icon: "rocket",
    title: "Launch and hand over",
    body: "Connect the domain, monitor agreed launch issues, document access, and walk you through your site.",
    clientInput: "Domain and account access.",
  },
] as const;

export const costDrivers = [
  { icon: "file", label: "The number and type of pages" },
  { icon: "pen", label: "Who writes the copy, and how much exists already" },
  { icon: "plug", label: "Integrations such as forms, booking, CRM, and chat" },
  { icon: "swap", label: "Migration from an existing site and its URLs" },
  { icon: "gauge", label: "Accessibility and performance testing scope" },
  { icon: "server", label: "Platform choice and the licenses it requires" },
] as const;

export const costRows = [
  {
    icon: "tag",
    tone: "included",
    heading: "Build fee (project)",
    items: [
      "Pages, copy, and design in the agreed scope",
      "Forms, click-to-call, and analytics setup",
      "Foundational SEO and migration work",
      "Testing, launch, and handover",
    ],
  },
  {
    icon: "repeat",
    tone: "optional",
    heading: "Recurring or optional (listed separately)",
    items: [
      "Hosting",
      "Ongoing site care",
      "Software licenses and subscriptions",
      "Ongoing SEO or advertising",
      "AI chatbots, AI reception, and follow-up automations",
    ],
  },
] as const;

export const ownershipRows = [
  {
    icon: "globe",
    asset: "Domain name",
    confirm: "Who is the registered owner, and who controls the registrar account.",
    exit: "Domain transfer and website portability are separate questions.",
  },
  {
    icon: "server",
    asset: "Hosting and platform accounts",
    confirm: "Who holds administrator access.",
    exit: "What happens to the site if a subscription stops.",
  },
  {
    icon: "image",
    asset: "Your text, images, and brand assets",
    confirm: "Rights to the material you supplied.",
    exit: "How you get copies of it.",
  },
  {
    icon: "pen",
    asset: "New copy and design work",
    confirm: "Which rights transfer to you, and when.",
    exit: "Whether anything remains licensed rather than owned.",
  },
  {
    icon: "code",
    asset: "Custom code",
    confirm: "Whether it transfers to you or is licensed.",
    exit: "Whether the site can move to another host.",
  },
  {
    icon: "package",
    asset: "Themes, plugins, fonts, and stock media",
    confirm: "Which components are third-party licenses.",
    exit: "Who pays renewals, and what happens if they lapse.",
  },
  {
    icon: "exit",
    asset: "Cancellation and handover",
    confirm: "Notice terms and which services stop.",
    exit: "Account access and migration assistance.",
  },
] as const;

export const customerJourney = [
  {
    icon: "pin",
    stage: "Discovery",
    body: "Google Business Profile optimization helps customers find and verify your business.",
    link: {
      href: "/services/google-business-profile-optimization",
      label: "Google Business Profile optimization",
    },
  },
  {
    icon: "website",
    stage: "Website",
    body: "Your site explains the offer and makes contact easy.",
  },
  {
    icon: "message",
    stage: "Inquiry",
    body: "A website chatbot can answer scoped pre-inquiry questions.",
  },
  {
    icon: "headset",
    stage: "Reception",
    body: "An AI receptionist can handle calls after a visitor taps to call.",
  },
  {
    icon: "mail",
    stage: "Follow-up",
    body: "Text and email workflows follow up under appropriate consent and communication rules.",
  },
] as const;

export type Faq = {
  question: string;
  answer: string;
  sources?: SourceLink[];
};

// Single source for the visible FAQ section and the FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    question: "How much should a business website cost?",
    answer:
      "GruffyGoat's 2026-updated vendor guide suggests a $4,000-$15,000 planning range for many professionally built local-service websites. That is not a universal market average and not an OKIKO HIGH price. Your quote should identify pages, copy, integrations, migration, testing, and recurring costs.",
    sources: [sources.gruffyGoat],
  },
  {
    question: "Should I redesign my website or build a new one?",
    answer:
      "Start with an audit of your existing website and requirements. A redesign makes sense when the current platform can meet your goals; rebuilding may be more practical when its structure or capabilities cannot.",
  },
  {
    question: "Will a new website hurt my rankings?",
    answer:
      "A poorly managed rebuild can disrupt search visibility, and Google warns that significant changes can cause temporary ranking fluctuations. Preserve valuable content and URLs where practical, use relevant redirects, and check indexability at launch.",
    sources: [sources.googleSiteMoves],
  },
  {
    question: "Who owns the website after it is built?",
    answer:
      "Ownership depends on the contract and platform. Confirm domain and account control, content and code rights, third-party licenses, and whether the website can move to another host.",
    sources: [sources.wixExport],
  },
  {
    question: "How long does a website take to build?",
    answer:
      "The schedule depends on scope, content readiness, approvals, and integrations. Agree on milestones and client responsibilities before work begins rather than relying on a universal build-time estimate.",
  },
  {
    question: "Is Wix or Squarespace good enough for my business?",
    answer:
      "Either can be appropriate when its capabilities match your requirements and you accept its platform constraints. Compare editing, integrations, search controls, and portability instead of assuming custom development always performs better.",
    sources: [sources.wixExport, sources.squarespaceExport],
  },
  {
    question: "Does website design include SEO?",
    answer:
      "The scope should specify foundational SEO, including relevant page structure, internal links, indexability checks, and any migration work. Ongoing SEO, Google Business Profile management, and continued content development should not be assumed to be included.",
    sources: [sources.googleSiteMoves],
  },
  {
    question: "Does my website need to be accessible?",
    answer:
      "The U.S. Department of Justice explains that accessibility obligations extend to the online offerings of covered public accommodations. WCAG 2.2 AA is a useful technical target, but testing and implementation do not guarantee protection from legal claims.",
    sources: [sources.adaGuidance, sources.wcag22],
  },
  {
    question: "What happens if I stop working with my agency?",
    answer:
      "The agreement should explain cancellation, account access, migration assistance, and which subscriptions or licenses stop. Domain transfer and website portability are separate issues; a transferable domain does not guarantee a transferable website.",
    sources: [sources.wixExport],
  },
  {
    question: "Can a new website guarantee more leads?",
    answer:
      "No responsible guarantee can ignore demand, traffic quality, competition, the offer, and follow-up. Set measurable deliverables and evaluate qualified inquiries and booked appointments rather than clicks alone.",
  },
];
