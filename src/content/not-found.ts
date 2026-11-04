// Content for the 404 page (src/app/not-found.tsx).
// Hero copy follows the approved 404 copy review (2026-11-03). Service cards reuse
// hubServices and industry links reuse audiences, so titles, descriptions, and
// destinations stay in one place. The FAQ section was removed in the 2026-11-03 FAQ
// remediation. Nothing here adds a fact that is still TBD: prices, timelines, results,
// response times, partnerships, or proof.
//
// This page returns HTTP 404 and Next.js adds a noindex robots tag, so it carries no
// JSON-LD and is not in the sitemap.

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
} as const;
