import type { MetadataRoute } from "next";
import { comboPath, publishedCombos } from "@/content/combos/registry";
import { siteConfig } from "@/data/site";

// Core routes plus built service pages. Add industry, resource and case-study
// pages here once they are built and published.
const routes = [
  "",
  "/about",
  "/services",
  "/services/website-design",
  "/services/google-business-profile-optimization",
  "/services/ai-chatbots",
  "/services/ai-receptionist",
  "/services/reputation-management",
  "/services/sms-email-automation",
  "/industries",
  "/industries/healthcare",
  "/industries/home-services",
  "/industries/professional-services",
  "/industries/property-management-real-estate",
  "/case-studies",
  "/resources",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];

// Required for `output: "export"` (static build for Cloudflare Pages).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const comboRoutes = publishedCombos().map((c) => comboPath(c.audience, c.service));
  return [...routes, ...comboRoutes].map((path) => ({ url: `${siteConfig.url}${path}` }));
}
