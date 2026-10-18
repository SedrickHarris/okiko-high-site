// Content for /industries/home-services/website-design (Home Services + Website Design).
// Source: the Home Services + Website research pack and page brief (project doc,
// 2026-10-18). Home services is a currently served audience (docs/01), and the owner
// confirmed the website design service on 2026-10-11. Still unconfirmed, so
// intentionally not stated here: pricing and timelines, platform and stack, ownership
// and exit terms, tested integrations, trade experience, results, testimonials, and
// any vendor partnership. The page describes a proposed approach, not a package.
//
// Evidence notes (see the research pack, section 3, for the full list):
// - The owner's thesis that most home-service sites are under-built for SEO, AEO, and
//   conversion is a hypothesis. The page uses only the sourced content-gap figures,
//   each with its source and year, and never says "most home-service sites fail".
// - Jobber figures are vendor-sourced. The ADA lawsuit count comes from an event
//   listing, so confirm it in the UsableNet report before launch.
// - Google's FAQ rich result removal was read through a page summary; confirm it on
//   Google's FAQPage documentation before launch.
//
// Keyword note: "contractor website design" is no longer a supporting keyword of
// /industries/home-services; this page owns the home-service-specific website story.

import type { ComboContent } from "../types";
import type { SourceLink } from "../../shared";

const sources = {
  jobber: {
    label: "Jobber, Home Service Trends Report 2026",
    href: "https://www.getjobber.com/home-service-trends-report/",
  },
  localiq: {
    label: "LocaliQ, Home services business listings report (2025 data)",
    href: "https://localiq.com/blog/home-services-business-listings-report/",
  },
  googleSpam: {
    label: "Google Search Central, spam policies",
    href: "https://developers.google.com/search/docs/essentials/spam-policies",
  },
  googleAiFeatures: {
    label: "Google Search Central, AI features and your website",
    href: "https://developers.google.com/search/docs/appearance/ai-features",
  },
  googleFaq: {
    label: "Google Search Central, FAQPage structured data",
    href: "https://developers.google.com/search/docs/appearance/structured-data/faqpage",
  },
  webVitals: {
    label: "web.dev, Core Web Vitals",
    href: "https://web.dev/articles/vitals",
  },
  wcag: {
    label: "W3C, Web Content Accessibility Guidelines 2.2",
    href: "https://www.w3.org/TR/WCAG22/",
  },
  adaListing: {
    label: "Fox Rothschild, ADA website lawsuit trends (event listing citing UsableNet)",
    href: "https://www.foxrothschild.com/events/ada-website-lawsuit-trends-what-2025-filings-mean-for-2026",
  },
} satisfies Record<string, SourceLink>;

export const combo: ComboContent = {
  audience: "home-services",
  service: "website-design",
  // The root layout appends " | OKIKO HIGH".
  title: "Home Service Website Design",
  description:
    "Plan a home-service website that lists your services and service areas and gives customers a clear way to call or request a quote.",
  h1: "Website Design for Home-Service Businesses",
  primaryKeyword: "home service website design",
  tagline:
    "Say what you do, where you work, and how to reach you, then measure what happens.",
  intro: [
    "This page is for owners and office managers of home-service businesses. It describes a proposed approach to planning a website: say clearly what you do and where you work, make it easy to call or ask for a quote, structure pages so search and answer engines can read them, and track what happens next.",
    "It is a proposed approach, not a package, a price list, or a record of past client work.",
  ],
  heroAside: {
    heading: "What should a home-service website do?",
    body: "It should name each service you offer, state where you work, show your hours, give customers a clear way to call or request a quote, and answer the questions they ask most.",
    steps: [
      "Check what is missing",
      "Structure pages and answers",
      "Measure calls and form requests",
    ],
  },
  // Primary contact action is TBD in docs/01, so every CTA points to /contact.
  primaryCta: { label: "Discuss Your Website Plan", href: "/contact" },
  secondaryCta: { label: "Check Your Site Against the List", href: "#checklist" },
  sections: [
    {
      kind: "prose",
      id: "where-customers-check-you-out",
      heading: "Where Customers Check You Out",
      intro: [
        "In Jobber's 2026 survey of 1,050 US home-service owners, referrals and repeat customers led the list of lead sources, ahead of Google Search. Customers weighed price and reviews most when they hired.",
      ],
      charts: {
        charts: [
          {
            title: "Top lead sources named by owners",
            rows: [
              { label: "Referrals", value: 59 },
              { label: "Repeat customers", value: 59 },
              { label: "Facebook", value: 32 },
              { label: "Local networking", value: 25 },
              { label: "Google Search", value: 20 },
              { label: "Local Services Ads", value: 19 },
              { label: "Lead generation sites", value: 16 },
            ],
          },
          {
            title: "What customers prioritize when hiring",
            rows: [
              { label: "Competitive pricing", value: 62 },
              { label: "Positive reviews", value: 51 },
              { label: "Speed of first response", value: 25 },
              { label: "Safety, checks, licensing", value: 22 },
              { label: "Easy booking", value: 14 },
              { label: "Strong online presence", value: 8 },
            ],
          },
        ],
        note: "Source: Jobber, Home Service Trends Report 2026 (1,050 US home-service owners, fielded December 2025, margin of error plus or minus 3 points). Owners could name more than one source. Jobber sells software to these businesses, so treat its figures as vendor-sourced.",
      },
      paragraphs: [
        "Our reading, not a survey result: a referred customer often looks a business up before calling. In that moment the website's job is to confirm what you do, where you work, and how to reach you.",
      ],
      sources: [sources.jobber],
    },
    {
      kind: "cards",
      id: "checklist",
      heading: "Seven Things to Check on Your Own Site",
      muted: true,
      intro: [
        "Open your site on a phone and check what you can confirm.",
      ],
      stats: {
        heading: "What the data shows",
        items: [
          { value: "43%", label: "of home-service sites in Jobber's platform data did not clearly list service areas" },
          { value: "65%", label: "did not show business hours" },
          { value: "74%", label: "had no FAQ section" },
          { value: "15%", label: "of directory listings were complete and correct in LocaliQ's sample of 100 US home-service businesses" },
        ],
        note: "Jobber, 2026: platform data from a software vendor, not a survey. Jobber says these gaps hurt conversion before a quote is sent; that is its claim, not a measured result. LocaliQ, 2025: 18 directories and a small sample, so read it as a signal, not a benchmark.",
      },
      items: [
        {
          icon: "file",
          title: "Every service has its own page",
          body: "Each service you offer has a page with specific detail, not one page for everything.",
        },
        {
          icon: "pin",
          title: "Service areas are stated clearly",
          body: "A visitor can tell whether you work where they live without calling to ask.",
        },
        {
          icon: "clock",
          title: "Hours are visible",
          body: "Business hours appear on the site, along with how after-hours or urgent requests are handled.",
        },
        {
          icon: "call",
          title: "One tap starts a call",
          body: "On a phone the number is a tap-to-call link, and it matches your listings.",
        },
        {
          icon: "clipboard",
          title: "The quote form is short",
          body: "It asks only for what you need to follow up, and it works on a phone.",
        },
        {
          icon: "message",
          title: "Common questions are answered",
          body: "The questions customers ask most are answered on the page where they would ask them.",
        },
        {
          icon: "tag",
          title: "Listings match the site",
          body: "Name, phone, and website match across your Google Business Profile and directories.",
        },
      ],
      sources: [sources.jobber, sources.localiq],
    },
    {
      kind: "prose",
      id: "structure-for-search",
      heading: "One Useful Page per Service, Not a Page per Keyword",
      intro: [
        "Give each service you actually offer a page with specific, useful detail, and link those pages together so a visitor can move between them.",
        "Google's spam policies describe doorway abuse as pages made to rank for similar searches. Its examples include pages aimed at particular cities or regions that funnel visitors to one page, and near-duplicate pages. Scaled content abuse covers many pages made mainly to manipulate rankings.",
      ],
      structure: {
        good: {
          heading: "A structure that helps",
          top: "Home",
          middle: "Services overview",
          children: [
            { title: "[Service A]", note: "Scope, process, own FAQ, contact path" },
            { title: "[Service B]", note: "Scope, process, own FAQ, contact path" },
            { title: "[Service C]", note: "Scope, process, own FAQ, contact path" },
          ],
          caption: "Each page earns its place with details a visitor cannot get from the others, and the pages link to one another.",
        },
        avoid: {
          heading: "A pattern to avoid",
          items: [
            { title: "[Service] in [Town A]", note: "Same paragraphs, one word changed" },
            { title: "[Service] in [Town B]", note: "Same paragraphs, one word changed" },
            { title: "[Service] in [Town C]", note: "Same paragraphs, one word changed" },
          ],
          caption: "A page for a city or region is worth building only when it has information of its own that helps a visitor in that place.",
        },
      },
      sources: [sources.googleSpam],
    },
    {
      kind: "prose",
      id: "questions-customers-ask",
      heading: "Write the Questions Customers Actually Ask",
      muted: true,
      intro: [
        "Answer engines and visitors both look for a clear question and a direct answer. Put the answer in the first sentence, in words a homeowner would use.",
      ],
      answerExample: {
        before: "Quality service you can trust, every time.",
        question: "Do you serve [your area]?",
        answer: "Yes. We serve [list the areas you actually cover]. If you are outside that list, call [phone number] and we will tell you whether we can help.",
        note: "Placeholders in brackets are for your own facts. Only publish what you can verify.",
        notes: [
          {
            title: "No special markup or AI files required",
            body: "Google states there are no additional requirements to appear in AI Overviews or AI Mode, no special schema.org markup, and no need for AI text files. A page needs to be indexed and eligible to appear in Search with a snippet.",
            source: { label: "Google, AI features and your website (updated December 2025)", href: sources.googleAiFeatures.href },
          },
          {
            title: "Structured data should match the page",
            body: "Mark up only facts a visitor can also see on the page, such as your FAQ answers, and keep the two identical.",
          },
          {
            title: "FAQ rich results are gone, FAQs are not",
            body: "Google's documentation says FAQ rich results no longer appear in Search. A visible FAQ still answers visitors' questions, so write it for them.",
            source: { label: "Google, FAQPage structured data", href: sources.googleFaq.href },
          },
        ],
      },
    },
    {
      kind: "cards",
      id: "conversion-path",
      heading: "From Visit to Call or Quote Request",
      intro: [
        "Put the next step where a worried homeowner will look: a tap-to-call button, your hours, your service area, and a short form. If you handle urgent work, give it its own clear path.",
      ],
      wireframe: {
        label: "Phone wireframe of a home-service page: business name, call button, hours, short quote form, and license and insurance placeholders",
        caption: "A phone wireframe, not a design. Show license and insurance only if they are facts you can verify.",
        businessName: "[Business name]",
        tagline: "[Trade] serving [service areas]",
        callLabel: "Call now: [phone number]",
        hoursLine: "Open [hours]. Urgent request? [How to reach you]",
        formTitle: "Request a quote",
        fields: ["Name", "Phone", "What do you need?"],
        submitLabel: "Send request",
        trustFacts: ["[License no.]", "[Insurance]"],
      },
      items: [
        {
          icon: "call",
          title: "Tap-to-call",
          body: "A tap-to-call link, and the same number everywhere it appears.",
        },
        {
          icon: "clipboard",
          title: "A short quote form",
          body: "Ask only for what you need to reply, and make it easy to complete on a phone.",
        },
        {
          icon: "pin",
          title: "Service area and hours nearby",
          body: "Put them next to the call and quote buttons so a visitor does not have to hunt for them.",
        },
        {
          icon: "bell",
          title: "A path for urgent requests",
          body: "Give urgent work its own clear path, separate from scheduled work.",
        },
        {
          icon: "shield",
          title: "Trust facts you can verify",
          body: "Show license, insurance, and similar facts only when you can verify them.",
        },
        {
          icon: "clock",
          title: "Customers expect a fast reply",
          body: "Jobber's 2026 survey reports that 28% of customers expect an immediate reply and another 28% expect one within an hour, and 25% of respondents named speed of first response as a key factor in hiring. This page recommends no numeric response target.",
        },
      ],
      sources: [sources.jobber],
    },
    {
      kind: "cards",
      id: "speed-and-accessibility",
      heading: "Fast, Stable, and Usable by Everyone",
      muted: true,
      intro: [
        "Speed and accessibility are part of whether a visitor can use the site at all, and both have published targets you can test against.",
      ],
      columns: 2,
      table: {
        caption: "Core Web Vitals: Google's good targets",
        columns: ["Metric", "What it measures", "Good"],
        rows: [
          ["LCP", "Largest Contentful Paint: how fast the main content appears", "2.5 seconds or less"],
          ["INP", "Interaction to Next Paint: how fast the page responds to taps", "200 milliseconds or less"],
          ["CLS", "Cumulative Layout Shift: how much the page jumps around", "0.1 or less"],
        ],
        note: "Measured at the 75th percentile of page loads.",
      },
      items: [
        {
          icon: "accessibility",
          title: "WCAG 2.2",
          body: "WCAG 2.2 is the current W3C Recommendation, published 12 December 2024. Its new Level AA criteria include Focus Not Obscured (Minimum), Dragging Movements, Target Size (Minimum), and Accessible Authentication (Minimum).",
        },
        {
          icon: "shield",
          title: "Legal exposure varies",
          body: "Web accessibility lawsuits are filed regularly in the US, and one event listing citing UsableNet reports more than 5,000 ADA website lawsuits filed in 2025. Legal obligations vary, so ask a lawyer what applies to your business. This page does not describe any site as ADA compliant.",
        },
      ],
      sources: [sources.webVitals, sources.wcag, sources.adaListing],
    },
    {
      kind: "cards",
      id: "ownership-questions",
      heading: "Questions to Ask Any Website Provider",
      columns: 2,
      intro: [
        "Who owns the site is easy to skip before you sign and hard to fix afterward. Ask these of any provider, including us, and get the answers in writing.",
        "This page lists questions to ask. It does not state OKIKO HIGH's terms.",
      ],
      items: [
        {
          icon: "key",
          title: "Domain and hosting",
          body: "Who registers the domain, and in whose name? Who holds the hosting account, and do you get access?",
        },
        {
          icon: "file",
          title: "Content and code",
          body: "Who owns the text, photos, and code you pay for? Can you export the whole site, and in what format?",
        },
        {
          icon: "server",
          title: "Platform and support",
          body: "What platform is it built on, and what happens if that platform changes? What is included in monthly support, and what costs extra?",
        },
        {
          icon: "exit",
          title: "If you leave",
          body: "What happens to the site, the domain, and your data if you cancel? Will you have direct access to your call and form reports?",
        },
      ],
    },
    {
      kind: "steps",
      id: "measurement",
      heading: "How You Will Know It Is Working",
      muted: true,
      intro: [
        "Decide what you will count before anything changes, so you can compare later. No result can be promised in advance.",
      ],
      items: [
        {
          title: "Set a baseline",
          body: "Record your current phone calls and form requests, and where they come from, before you change anything.",
        },
        {
          title: "Track by source",
          body: "Tie calls and form submissions to the source that produced them, so you can see what the site and your listings contribute.",
        },
        {
          title: "Review on a schedule",
          body: "Look at the numbers regularly and decide what to change next. Keep notes on what you changed and when.",
        },
      ],
    },
    {
      kind: "cards",
      id: "scenarios",
      heading: "Three Situations, and What to Check",
      intro: [
        "Each is an illustrative scenario. None is a client story, and no results are implied.",
      ],
      items: [
        {
          icon: "call",
          title: "Illustrative scenario: a plumber whose work comes mostly from referrals",
          body: "Situation: referred customers look the business up before they call, and the site lists services but not service areas or hours. Check: service areas, hours, a tap-to-call button, and one page per service. Proposed approach: state the service area plainly, show hours and the urgent-request path, add tap-to-call, and confirm the Google Business Profile shows the same details.",
        },
        {
          icon: "file",
          title: "Illustrative scenario: a roofer with one page for everything",
          body: "Situation: repair, replacement, and gutters share a single page, so each gets only a sentence or two. Check: whether each service has enough specific detail to stand on its own, and whether the pages link to one another. Proposed approach: split the content into one page per service with its own scope, process, and questions, link them together, and avoid near-duplicate copy.",
        },
        {
          icon: "clipboard",
          title: "Illustrative scenario: a cleaning company whose booking form is hard to use on a phone",
          body: "Situation: the form has many fields, small tap targets, and no confirmation after sending. Check: field count, target size on a phone, labels, and what the visitor sees after submitting. Proposed approach: shorten the form to what is needed for a first reply, make the controls easy to tap, show a clear confirmation, and decide who follows up and when.",
        },
      ],
    },
  ],
  faqsHeading: "Home-Service Website Questions, Answered",
  faqs: [
    {
      question: "What should a home-service website include?",
      answer:
        "It should name each service offered, state the service areas, show business hours, give a clear way to call or request a quote, and answer common customer questions. In Jobber's 2026 platform data, 43% of home-service sites did not clearly list service areas, 65% did not show hours, and 74% had no FAQ section.",
    },
    {
      question: "Do I need a separate page for every service?",
      answer:
        "Give each service you actually offer its own page with useful, specific detail. Avoid near-duplicate pages for similar searches; Google's spam policies treat pages built mainly to rank for similar queries as doorway abuse.",
    },
    {
      question: "Should I build a page for every city I serve?",
      answer:
        "Only when each page has distinct, useful information. Google's spam policies list pages aimed at specific cities or regions that funnel visitors to one page as an example of doorway abuse.",
    },
    {
      question: "Do I need special markup or an llms.txt file to appear in AI answers?",
      answer:
        "Google states there are no additional requirements for AI Overviews or AI Mode, no special schema.org markup, and no need for AI text files. Pages need to be indexed and eligible to appear in Search with a snippet.",
    },
    {
      question: "Will FAQ markup give me rich results?",
      answer:
        "Google's documentation says FAQ rich results no longer appear in Search. A visible FAQ still answers visitors' questions, and any markup should match what is on the page.",
    },
    {
      question: "What are good Core Web Vitals scores?",
      answer:
        "Google's 'good' targets are Largest Contentful Paint of 2.5 seconds or less, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads.",
    },
    {
      question: "Does my website need to follow accessibility standards?",
      answer:
        "WCAG 2.2 is the current W3C Recommendation, and web accessibility lawsuits are filed regularly in the US. Legal obligations vary, so ask a lawyer what applies to your business.",
    },
    {
      question: "Who owns my website when I use an agency?",
      answer:
        "It depends on your agreement. Before signing, ask who registers the domain, who holds the hosting account, who owns the content and code, whether you can export the site, and what happens if you cancel. OKIKO HIGH's terms are not stated on this page.",
    },
    {
      question: "Is a website worth it if most of my work comes from referrals?",
      answer:
        "Referrals and repeat customers were the top lead sources in Jobber's 2026 survey of home-service owners (59% each). A website gives referred customers the details that are often missing, such as service areas, hours, and how to reach you.",
    },
    {
      question: "How can I tell whether my website is working?",
      answer:
        "Track phone calls and form submissions back to where they came from, record a baseline before changes, and review the numbers on a regular schedule. No result can be promised in advance.",
    },
  ],
  finalCta: {
    heading: "Discuss Your Website Plan",
    body: "Tell us the address of your current site if you have one, the services you offer and the areas you serve, and how customers contact you today. Please do not send passwords or payment details.",
    label: "Discuss Your Website Plan",
    href: "/contact",
  },
  relatedLinks: [
    { label: "Google Business Profile Management: keep your listing consistent with your site", href: "/services/google-business-profile-optimization" },
    { label: "Review Management: reviews are a top factor when customers hire", href: "/services/reputation-management" },
    { label: "AI Receptionist: handle the calls your tap-to-call button creates", href: "/services/ai-receptionist" },
    { label: "Text and Email Automation: follow up on the requests your form collects", href: "/services/sms-email-automation" },
  ],
};
