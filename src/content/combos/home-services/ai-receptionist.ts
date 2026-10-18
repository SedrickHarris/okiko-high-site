// Content for /industries/home-services/ai-receptionist (Home Services + AI Receptionist).
// Source: the Home Services + AI Receptionist research pack and page brief (project doc,
// 2026-10-18). Home services is a currently served audience and the AI receptionist
// service is available (docs/01, owner confirmation 2026-10-11). Still unconfirmed, so
// intentionally not stated here: pricing, ownership and exit terms, tested integrations
// (calendar or job software), trade experience, results, testimonials, and any vendor
// partnership. The page describes a proposed approach, not a package.
//
// Evidence notes (see the research pack for the full list):
// - The owner's angle (missed calls on a job, emergency vs scheduled, after-hours,
//   estimate booking) is partly supported. Only sourced figures appear, each labeled
//   with its source and vendor status. No outcome claim for AI receptionists is made.
// - Widely quoted figures with no traceable study are deliberately left out (callers who
//   will not call back, voicemail abandonment, "62% of HVAC calls after hours", annual
//   revenue lost to missed calls).
// - Compliance content is a summary of cited sources, not legal advice. To confirm
//   before launch: the revoke-all delay date on fcc.gov, the Twilio A2P 10DLC page
//   (carried an end-of-life notice), Maine statute scope, and a live SERP review.
//
// Keyword note: "AI receptionist for home services" moves here from the Home Services
// audience page. /services/ai-receptionist keeps "AI receptionist for small business".

import type { ComboContent } from "../types";
import type { SourceLink } from "../../shared";

const sources = {
  invoca: {
    label: "Invoca, Home Services Lead Conversion Benchmarks Report 2026",
    href: "https://www.invoca.com/reports/the-invoca-home-services-lead-conversion-benchmarks-report-2026",
  },
  serviceTitan: {
    label: "ServiceTitan, HVAC summer after-hours call spike",
    href: "https://www.servicetitan.com/toolbox/state-of-the-trades/trends/hvac-summer-after-hours-call-spike",
  },
  jobber: {
    label: "Jobber, Home Service Trends Report 2026",
    href: "https://www.getjobber.com/home-service-trends-report/",
  },
  gartner: {
    label: "Gartner, 2024 survey on customers and AI in customer service",
    href: "https://www.gartner.com/en/newsroom/press-releases/2024-07-09-gartner-survey-finds-64-percent-of-customers-would-prefer-that-companies-didnt-use-ai-for-customer-service",
  },
  fcc2417: {
    label: "FCC, Declaratory Ruling FCC 24-17 (AI voices and the TCPA)",
    href: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
  },
  fcc2484: {
    label: "Federal Register, FCC proposal on AI and unwanted robocalls (September 2024)",
    href: "https://www.federalregister.gov/documents/2024/09/10/2024-19028/implications-of-artificial-intelligence-technologies-on-protecting-consumers-from-unwanted-robocalls",
  },
  tcpaworld: {
    label: "TCPAWorld, FCC consent revocation rule: new effective date January 31, 2027",
    href: "https://tcpaworld.com/2026/01/07/breaking-fcc-pushes-back-tcpa-consent-revocation-rule-new-effective-date-now-january-31-2027/",
  },
  justia: {
    label: "Justia, 50-state survey: recording phone calls and conversations",
    href: "https://www.justia.com/50-state-surveys/recording-phone-calls-and-conversations/",
  },
  zwillgen: {
    label: "ZwillGen, Ambriz v. Google: customer-service AI class action proceeds",
    href: "https://www.zwillgen.com/privacy/federal-judge-allows-google-customer-service-ai-class-action-to-proceed/",
  },
  maine: {
    label: "Maine Revised Statutes, 10 MRS section 1500-DD",
    href: "https://legislature.maine.gov/statutes/10/title10sec1500-DD.html",
  },
  phmsa: {
    label: "PHMSA, emergency response guidance for gas leaks",
    href: "https://primis.phmsa.dot.gov/stakeholder-comms/emergencyresponse",
  },
  twilio: {
    label: "Twilio, A2P 10DLC messaging registration",
    href: "https://support.twilio.com/hc/en-us/articles/1260801864489-A2P-10DLC-Messaging-Registration-Process",
  },
  highlevelVoice: {
    label: "HighLevel Support, how to create Voice AI agents",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000004107-how-to-create-voice-ai-agents",
  },
  highlevelBooking: {
    label: "HighLevel Support, appointment booking in Voice AI",
    href: "https://help.gohighlevel.com/support/solutions/articles/155000005293-appointment-booking-in-voice-ai",
  },
} satisfies Record<string, SourceLink>;

export const combo: ComboContent = {
  audience: "home-services",
  service: "ai-receptionist",
  // The root layout appends " | OKIKO HIGH".
  title: "AI Receptionist for Home Services",
  description:
    "Plan how an AI receptionist could answer home-service calls, route emergencies to a person, and book estimates, plus the call rules to check.",
  h1: "AI Receptionist for Home-Service Businesses",
  primaryKeyword: "AI receptionist for home services",
  tagline:
    "Answer the call, sort urgent from scheduled, and keep a person at the end of the line.",
  intro: [
    "This page is for owners and office managers of home-service businesses whose phone rings while the team is on a job. It describes a proposed approach to planning an AI receptionist: what it should do on each kind of call, when it must hand off to a person, and which call rules to check before you turn it on.",
    "It is a proposed approach, not a package, a price list, or a record of past client work. No result is promised.",
  ],
  heroAside: {
    heading: "What should an AI receptionist do on a home-service call?",
    body: "It should answer, find out what the caller needs, record the details, and sort the call by urgency. Danger and urgent calls go to a person by a route you set. Routine calls are booked or queued for a callback.",
    steps: ["Answer and capture", "Route by urgency", "Hand off to a person"],
  },
  // Primary contact action is TBD in docs/01, so every CTA points to /contact.
  primaryCta: { label: "Discuss Your Call-Handling Plan", href: "/contact" },
  secondaryCta: { label: "See How Calls Are Routed", href: "#call-routing" },
  sections: [
    {
      kind: "prose",
      id: "answered-calls",
      heading: "What the Data Shows About Answered Calls",
      intro: [
        "Two vendor datasets give a rough picture. Neither measures why a call went unanswered, and neither measures any AI receptionist.",
      ],
      charts: {
        charts: [
          {
            title: "Share of home-service calls that reached a person",
            rows: [
              { label: "All calls", value: 52 },
              { label: "Callers who held over 15 seconds", value: 65 },
              { label: "Callers who held over 30 seconds", value: 73 },
            ],
          },
          {
            title: "Share of HVAC calls that came in off-hours (ServiceTitan, 2025)",
            rows: [
              { label: "June, all off-hours", value: 14.1 },
              { label: "October, all off-hours", value: 9.8 },
              { label: "June, weekday before 8 or after 5", value: 9.3 },
              { label: "October, weekday before 8 or after 5", value: 6.8 },
            ],
          },
        ],
        note: "Sources: Invoca, July 2026 benchmarks report, and ServiceTitan, 2025 HVAC call data. Both are software vendors reporting on their own customers, so the figures are not nationally representative.",
      },
      paragraphs: [
        "Our reading, not a data result: a call that goes to voicemail while the team is on a job is a call someone else may answer first, and off-hours calls are a minority of volume but not a negligible one. How many of your own calls are missed is something only your phone records can tell you.",
      ],
      sources: [sources.invoca, sources.serviceTitan],
    },
    {
      kind: "cards",
      id: "call-types",
      heading: "Seven Kinds of Call, and Who Should Take Each",
      muted: true,
      intro: [
        "An AI receptionist is only as good as the rules behind it. Start by listing the kinds of call your business gets and deciding who handles each one.",
      ],
      stats: {
        heading: "What the data shows",
        items: [
          { value: "38%", label: "of answered home-service calls were leads, in Invoca's data" },
          { value: "45%", label: "of those leads converted on the call" },
          { value: "64%", label: "of customers said they would prefer companies not use AI for customer service (Gartner)" },
          { value: "53%", label: "of customers said they would consider switching to a competitor over it (Gartner)" },
        ],
        note: "Invoca is vendor data from calls its platform tracked. Gartner is a survey of 5,728 customers in 2023 about customer service in general, not home services or phone calls specifically. Treat it as a reason to give callers an easy path to a person.",
      },
      items: [
        {
          icon: "flag",
          title: "Danger",
          body: "A gas smell, smoke, sparking, or anyone at risk. The caller is told to leave and call 911, and a person is alerted.",
        },
        {
          icon: "bell",
          title: "Urgent, not dangerous",
          body: "An active leak, no heat in winter, no cooling in a heat wave. Goes to the on-call person by your rule.",
        },
        {
          icon: "calendar",
          title: "Scheduled work",
          body: "A routine repair, a tune-up, a quote for a planned job. Details are recorded and a time is booked or a callback queued.",
        },
        {
          icon: "clipboard",
          title: "Estimate request",
          body: "The caller wants a price or a visit. The address, the problem, and the best time are captured for the person who quotes.",
        },
        {
          icon: "repeat",
          title: "Existing customer",
          body: "A question about a job in progress, an invoice, or a warranty. Routed to the person who knows the job.",
        },
        {
          icon: "headset",
          title: "Asks for a person",
          body: "Whenever a caller asks for a human, the call goes to one, or a callback is promised with a clear time.",
        },
        {
          icon: "phone",
          title: "Vendors and wrong numbers",
          body: "Sales calls, suppliers, and misdials. Taken politely and kept out of the urgent queue.",
        },
      ],
      sources: [sources.invoca, sources.gartner],
    },
    {
      kind: "prose",
      id: "call-routing",
      heading: "Route by Urgency and Keep a Person at the End",
      intro: [
        "The routing rule is the part you write. The receptionist follows it. Every lane needs a fallback for the moment a transfer is not answered, because a call that goes nowhere is worse than voicemail.",
      ],
      callFlow: {
        label: "Call routing diagram: an incoming call is answered, sorted into danger, urgent, or scheduled, and each lane has steps and a fallback",
        caption: "A routing sketch, not a design. Brackets mark the facts only you can supply.",
        start: "Incoming call",
        firstStep: "AI receptionist answers, says it is an AI, and asks what is happening",
        gate: "Is anyone in danger, or is there a gas smell, smoke, or sparking?",
        lanes: [
          {
            tone: "danger",
            title: "Danger",
            trigger: "Anyone at risk, or a gas smell, smoke, or sparking.",
            steps: [
              "Tell the caller to leave the building and call 911 from a safe place",
              "Do not give repair or safety instructions",
              "Alert [on-call person] right away with the caller's number",
            ],
            fallback: "Send the alert to [second contact] and keep the caller's details for a call back.",
          },
          {
            tone: "urgent",
            title: "Urgent",
            trigger: "Active leak, no heat or cooling, a loss of service that cannot wait.",
            steps: [
              "Record name, number, address, and the problem",
              "Transfer to [on-call person] by your rule",
              "If they answer, hand over the details in the call summary",
            ],
            fallback: "If no one picks up, tell the caller when to expect a call back and alert [second contact].",
          },
          {
            tone: "scheduled",
            title: "Scheduled",
            trigger: "Routine repair, tune-up, estimate request, or a question.",
            steps: [
              "Record name, number, address, and the work needed",
              "Offer open times from your calendar, or queue a callback",
              "Send a call summary to [office contact]",
            ],
            fallback: "If the calendar cannot be reached, record the request and queue a callback.",
          },
        ],
        note: "This page does not say which calendar or job software OKIKO HIGH has tested. Ask any provider which ones they have set up.",
      },
      structure: {
        good: {
          heading: "A routing rule that holds up",
          top: "Incoming call",
          middle: "AI receptionist: answer, ask, record",
          children: [
            { title: "Scheduled", note: "Book or queue a callback" },
            { title: "Urgent", note: "Transfer to a person, with a fallback" },
            { title: "Danger", note: "Tell the caller to call 911, alert a person" },
          ],
          caption: "Every path ends with a person and a written record, and no path depends on a single phone being answered.",
        },
        avoid: {
          heading: "Patterns to avoid",
          items: [
            { title: "Made-up safety advice", note: "The receptionist improvises repair or safety steps" },
            { title: "A promised arrival time or price", note: "Commitments only a person on your team can make" },
            { title: "No fallback when a transfer fails", note: "The caller waits, then hears nothing" },
          ],
          caption: "Safety guidance for a gas smell comes from the gas authority, not from the receptionist.",
        },
      },
      sources: [sources.phmsa],
    },
    {
      kind: "prose",
      id: "first-ten-seconds",
      heading: "The First Ten Seconds of a Call",
      muted: true,
      intro: [
        "Callers decide quickly whether to stay on the line. The opening should say who is answering, say it is an AI, and ask one clear question.",
      ],
      answerExample: {
        before: "Thanks for calling. Leave a message after the tone.",
        question: "Caller: \"My water heater is leaking in the garage.\"",
        answer: "I'm [Business name]'s AI receptionist. If anyone is in danger, please hang up and call 911. Otherwise, what is the address, and is the water still running?",
        note: "Brackets are for your own facts. The words are an illustration to adapt, not a tested script.",
        notes: [
          {
            title: "Tell callers it is an AI",
            body: "Some places require it and some callers will ask. Maine's statute covers chatbots used in trade, including voice, when a reasonable consumer could be misled. Saying so up front is simple and avoids the question.",
            source: sources.maine,
          },
          {
            title: "Add a recording notice where required",
            body: "Federal law needs one party's consent, but several states need every party's. Check the states your callers are in before you record or transcribe.",
            source: sources.justia,
          },
          {
            title: "Do not improvise safety advice",
            body: "For a gas smell, public guidance is to leave, call 911 from a safe place, and avoid phones and switches near the leak. The receptionist should say that and nothing more.",
            source: sources.phmsa,
          },
        ],
      },
    },
    {
      kind: "prose",
      id: "call-to-callback",
      heading: "From Call to Callback Without Losing the Details",
      intro: [
        "The summary is what turns a call into a job. If the person who calls back has to start over with the customer, the receptionist has not helped.",
      ],
      wireframe: {
        label: "Phone wireframe of a call summary: business name, caller and urgency label, the details captured, and a callback button, all with placeholders",
        caption: "A call-summary wireframe, not a design. Every field is a placeholder.",
        businessName: "[Business name]",
        tagline: "Call summary",
        callLabel: "Call back: [caller number]",
        hoursLine: "[Urgency label] - received [time]",
        formTitle: "What was captured",
        fields: ["Caller name", "Address", "Problem in the caller's words", "Best time to call"],
        submitLabel: "Mark as handled",
        trustFacts: ["[AI-handled]", "[Recording notice given]"],
        panels: [
          {
            title: "What every call summary should hold",
            bullets: [
              "Caller name, number, and address",
              "The problem in the caller's own words",
              "Urgency label and who was alerted",
              "Whether the caller asked for a person",
              "A link to the recording or transcript, if you keep one and the caller was told",
            ],
          },
          {
            title: "Customers expect a fast answer",
            paragraphs: [
              "Jobber's 2026 survey reports that 28% of customers expect an immediate reply and another 28% expect one within an hour. 25% named speed of first response as a factor when hiring a provider.",
            ],
            note: "Vendor-sourced survey, and the respondent base is not clear from the report. No response-time target is recommended here.",
          },
        ],
      },
      sources: [sources.jobber],
    },
    {
      kind: "prose",
      id: "call-rules",
      heading: "Call Rules to Check Before You Turn It On",
      muted: true,
      intro: [
        "The rules below are a summary of the sources cited, not legal advice. They change, and they differ by state. Ask a lawyer what applies to your business.",
      ],
      ruleCards: {
        items: [
          {
            icon: "mic",
            tone: "blue",
            title: "Recording consent",
            body: "Federal law needs one party's consent. Justia's survey lists California, Florida, Illinois, Maryland, Massachusetts, Montana, New Hampshire, Pennsylvania, and Washington as all-party states, with qualifications, and notes extra conditions in Delaware, Michigan, Nevada, and Connecticut.",
            checkWith: "A lawyer, for the states your callers are in",
          },
          {
            icon: "headset",
            tone: "green",
            title: "AI disclosure",
            body: "No federal rule was found for AI answering inbound calls. Maine's statute covers chatbots used in trade. Utah limits proactive disclosure to high-risk uses and requires it when a consumer clearly asks. California's bot law is written for online communication and does not mention phone calls.",
            checkWith: "A lawyer, and the current state statutes",
          },
          {
            icon: "call",
            tone: "yellow",
            title: "AI voice on outbound calls and callbacks",
            body: "The FCC ruled in February 2024 that AI-generated voices count as an artificial voice under the TCPA, so outbound calls need prior express consent (written for telemarketing). The FCC's 2024 proposal on AI call disclosure is aimed at outbound calls, and no final rule was found.",
            checkWith: "A lawyer, before any outbound AI calling",
          },
          {
            icon: "message",
            tone: "blue",
            title: "Text follow-up",
            body: "Stop words must be honored and processed within 10 business days. The wider revoke-all rule was delayed to January 31, 2027, as reported by TCPAWorld. US long-code texting needs A2P 10DLC registration through your provider.",
            checkWith: "Your messaging provider and a lawyer",
          },
          {
            icon: "shield",
            tone: "green",
            title: "Third-party AI vendors",
            body: "In Ambriz v. Google (N.D. Cal., February 2025), a motion to dismiss was denied on a wiretap claim about a vendor's AI listening to customer calls. That is a ruling on a motion, not a finding of liability.",
            checkWith: "A lawyer, and your vendor's data terms",
          },
          {
            icon: "warning",
            tone: "red",
            title: "Emergencies",
            body: "For a gas smell, PHMSA guidance is to leave, call 911 from a safe place, and avoid phones and switches near the leak. An AI receptionist is not an emergency service.",
            checkWith: "Your gas utility and local authorities",
          },
        ],
        note: "Not legal advice. Several items were read from summaries of the rules, and the revoke-all date should be confirmed on fcc.gov before you rely on it.",
      },
      sources: [
        sources.justia,
        sources.maine,
        sources.fcc2417,
        sources.fcc2484,
        sources.tcpaworld,
        sources.twilio,
        sources.zwillgen,
        sources.phmsa,
      ],
    },
    {
      kind: "prose",
      id: "provider-questions",
      heading: "Questions to Ask Any AI Receptionist Provider",
      split: true,
      intro: [
        "Get the answers in writing before you sign, from any provider, including us.",
        "This page lists questions to ask. It does not state OKIKO HIGH's terms.",
      ],
      numbered: [
        "Does it tell callers it is an AI, and can you edit what it says?",
        "How do callers reach a person, and what happens if no one answers?",
        "Can you write the rule for danger and urgent calls, and see it in a test call?",
        "Which calendar and job software does it work with, and has the provider set up that exact one?",
        "Where are recordings and transcripts stored, who can see them, and how long are they kept?",
        "Does the vendor use your calls to train its models?",
        "Who owns the phone number, the call data, and the setup if you leave?",
        "What is included in the monthly price, and what costs extra?",
      ],
    },
    {
      kind: "steps",
      id: "measurement",
      heading: "How You Will Know It Is Working",
      muted: true,
      intro: [
        "Decide what you will count before anything changes. No result can be promised in advance.",
      ],
      items: [
        {
          title: "Set a baseline",
          body: "Record how many calls come in, how many reach a person, and how many become booked work, before you change anything.",
        },
        {
          title: "Review calls on a schedule",
          body: "Listen to or read a sample of calls each week at first. Check that urgent calls were routed correctly and that no one was given advice they should not have been.",
        },
        {
          title: "Compare and adjust",
          body: "Compare against the baseline, fix the rule where it sorted a call wrongly, and keep notes on what you changed and when.",
        },
      ],
    },
    {
      kind: "prose",
      id: "scenarios",
      heading: "Three Situations, and What to Check",
      intro: [
        "Each is an illustrative scenario. None is a client story, and no results are implied.",
      ],
      accordion: [
        {
          label: "Illustrative scenario",
          title: "A solo plumber who is under a sink all day",
          parts: [
            { label: "Situation", text: "Calls go to voicemail during jobs, and the plumber calls back at the end of the day." },
            { label: "What to check", text: "Which calls could wait for a callback, which could not, and who else could take a danger or urgent call." },
            { label: "Proposed approach", text: "Capture the details of every call, send an immediate alert for urgent ones, and book or queue the rest with a clear callback window." },
          ],
        },
        {
          label: "Illustrative scenario",
          title: "An HVAC company with one on-call technician",
          parts: [
            { label: "Situation", text: "Off-hours calls spike in hot weather, and one technician carries the phone." },
            { label: "What to check", text: "The definition of urgent, the fallback when the technician cannot answer, and where off-hours calls are logged." },
            { label: "Proposed approach", text: "Write the urgent rule with the technician, add a second contact, and review the off-hours calls weekly." },
          ],
        },
        {
          label: "Illustrative scenario",
          title: "A roofer who books estimates",
          parts: [
            { label: "Situation", text: "Most calls ask for a visit and a price, and details are lost between the call and the quote." },
            { label: "What to check", text: "What the estimator needs to know before visiting, and whether the calendar shows real availability." },
            { label: "Proposed approach", text: "Capture the address, the problem, and the best time in a fixed summary, and offer open slots only if the calendar is connected and tested." },
          ],
        },
      ],
    },
  ],
  faqsHeading: "Home-Service AI Receptionist Questions, Answered",
  faqs: [
    {
      question: "Can an AI receptionist answer calls while I am on a job?",
      answer:
        "Yes, that is the basic purpose. HighLevel's documentation describes Voice AI agents that answer inbound calls and can transfer them. What it should say, and which calls it hands to a person, are rules you set. See the platform documentation on creating Voice AI agents.",
    },
    {
      question: "Can an AI receptionist book estimates into my calendar?",
      answer:
        "It can on some platforms. HighLevel's documentation describes appointment booking in Voice AI against a connected calendar. Whether it works with your calendar or job software has to be set up and tested, and this page does not say which ones OKIKO HIGH has tested.",
    },
    {
      question: "How should an AI receptionist handle a gas smell or other emergency?",
      answer:
        "It should tell the caller to leave and call 911, alert a person, and give no repair or safety instructions of its own. PHMSA's public guidance for a gas leak is to leave, call 911 from a safe place, and avoid phones and switches near the leak. An AI receptionist is not an emergency service.",
    },
    {
      question: "Do I have to tell callers they are talking to an AI?",
      answer:
        "It depends on where the caller is. No federal rule was found for AI answering inbound calls, but Maine's statute covers chatbots used in trade when a reasonable consumer could be misled, and Utah requires disclosure when a consumer clearly asks. Saying it up front is simple. Ask a lawyer what applies to you.",
    },
    {
      question: "Is it legal to record calls an AI receptionist answers?",
      answer:
        "Federal law needs one party's consent, but several states need every party's, including California, Florida, Illinois, Maryland, Massachusetts, Montana, New Hampshire, Pennsylvania, and Washington, with qualifications. Check the states your callers are in. This is not legal advice.",
    },
    {
      question: "Can an AI receptionist text customers after a call?",
      answer:
        "It can on some platforms, with rules. Stop words must be honored and processed within 10 business days, and US long-code texting needs A2P 10DLC registration through your provider. Outbound AI voice calls and callbacks are covered by the FCC's 2024 ruling that AI voices count as artificial voices under the TCPA.",
    },
    {
      question: "How do I decide which calls are emergencies and which are scheduled?",
      answer:
        "You write the rule. Start with danger (a gas smell, smoke, sparking, anyone at risk), then urgent (an active leak, no heat or cooling), then scheduled. No sourced share of home-service calls falls into each group, so test the rule on your own calls and adjust it.",
    },
    {
      question: "How many home-service calls come in after hours?",
      answer:
        "ServiceTitan's 2025 HVAC data put off-hours calls at 14.1% in June and 9.8% in October, and weekday calls before 8 or after 5 at 9.3% and 6.8%. That is one vendor's HVAC data, not a national figure, so check your own phone records.",
    },
    {
      question: "Will callers mind talking to an AI receptionist?",
      answer:
        "Some will. In a 2023 Gartner survey of 5,728 customers about customer service in general, 64% said they would prefer that companies not use AI for it, and 53% said they would consider switching. It was not about home services specifically, so give callers an easy way to reach a person.",
    },
    {
      question: "What does an AI receptionist cost a home-service business?",
      answer:
        "OKIKO HIGH has not published pricing for this service yet, so this page does not state one. Ask any provider what is included in the monthly price, what costs extra, and who owns the number and the data if you leave.",
    },
  ],
  finalCta: {
    heading: "Discuss Your Call-Handling Plan",
    body: "Tell us how calls reach you today and where they get missed. Please do not send passwords or payment details.",
    items: [
      "The kinds of call you get and when you miss them",
      "How urgent requests reach your team",
      "The calendar or job software you use now",
    ],
    label: "Discuss Your Call-Handling Plan",
    href: "/contact",
  },
  related: {
    heading: "Where This Connects",
    intro: "Call handling works alongside the other places customers find and contact you.",
    links: [
      { label: "AI receptionist service", description: "The general service this page builds on.", href: "/services/ai-receptionist", icon: "headset" },
      { label: "Home Services", description: "The full audience page for home-service businesses.", href: "/industries/home-services", icon: "globe" },
      { label: "Google Business Profile management", description: "Keep the number customers call consistent.", href: "/services/google-business-profile-optimization", icon: "pin" },
      { label: "Text and email automation", description: "Follow up on the calls that need a message.", href: "/services/sms-email-automation", icon: "mail" },
      { label: "Website design service", description: "Give callers a clear way to reach you.", href: "/services/website-design", icon: "website" },
      { label: "AI chatbots", description: "Answer the same questions on your website.", href: "/services/ai-chatbots", icon: "message" },
      { label: "Review management", description: "Reviews are a top factor when customers hire.", href: "/services/reputation-management", icon: "star" },
    ],
  },
};
