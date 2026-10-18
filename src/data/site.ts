export const siteConfig = {
  name: "OKIKO HIGH Digital Marketing Agency",
  shortName: "OKIKO HIGH",
  // Canonical host is the apex (owner decision, 2026-10-18). This is a build-time value:
  // set NEXT_PUBLIC_SITE_URL in each Cloudflare Pages environment (production:
  // https://okikohigh.com) and rebuild. The www host redirects to the apex.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://okikohigh.com",
  description:
    "OKIKO HIGH Digital Marketing Agency provides digital marketing, marketing automation, and SaaS solutions powered by GoHighLevel and its ecosystem.",
  email: "okikohigh@gmail.com",
  phone: "(469) 421-9832",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
] as const;
