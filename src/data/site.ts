export const siteConfig = {
  name: "OKIKO HIGH Digital Marketing Agency",
  shortName: "OKIKO HIGH",
  // Canonical host is the apex (owner decision, 2026-10-18). This is a build-time value:
  // set NEXT_PUBLIC_SITE_URL in each Cloudflare Pages environment (production:
  // https://okikohigh.com) and rebuild. The www host redirects to the apex.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://okikohigh.com",
  description:
    "OKIKO HIGH Digital Marketing Agency provides digital marketing, marketing automation, and SaaS solutions for local and service-based businesses.",
  email: "info@okikohigh.com",
  phone: "(469) 421-9832",
  // Approved primary full-color logo (docs/01). Dimensions are the file's own pixel size.
  logo: { path: "/images/brand/logos/web/okiko-high-primary-on-white.webp", width: 1600, height: 867 },
} as const;

// GoHighLevel (LeadConnector) chat widget embed, loaded once in the root layout. The
// widget ID is a public embed value, not a secret. Override with
// NEXT_PUBLIC_CHAT_WIDGET_ID at build time; set it to an empty string to turn the widget off.
// Colors, name, avatar, and welcome message are configured in the GoHighLevel builder.
export const chatWidget = {
  id: process.env.NEXT_PUBLIC_CHAT_WIDGET_ID?.trim() ?? "6aea79d699b93387b97fad1f",
  loaderSrc: "https://widgets.leadconnectorhq.com/loader.js",
  resourcesUrl: "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
} as const;

// Contact hrefs derive from the one phone and email above so formats never drift.
// The tel: href is E.164 (+1 and ten digits); the display text stays as written.
export const phoneHref = `tel:+1${siteConfig.phone.replace(/\D/g, "")}`;
export const emailHref = `mailto:${siteConfig.email}`;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
] as const;
