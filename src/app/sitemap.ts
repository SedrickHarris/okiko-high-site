import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

// Core routes only. Add service, industry, resource and case-study pages
// here once they are built and published.
const routes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/case-studies",
  "/resources",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({ url: `${siteConfig.url}${path}` }));
}
