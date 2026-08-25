import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/about", "/services", "/ai-quality-engineering", "/how-we-work", "/insights", "/contact", "/ai-qa-readiness", "/ai-qa-lab", "/accelerator", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `https://www.qaaiworks.com${route}/`,
    lastModified: new Date("2026-08-25"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/services" || route === "/ai-quality-engineering" ? 0.8 : 0.7,
  }));
}
