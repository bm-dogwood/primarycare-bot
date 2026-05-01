// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const mainPages = [
    { url: SITE_URL, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${SITE_URL}/find-doctor`, changeFrequency: "daily" as const, priority: 0.9 },
  ];

  // SEO content pages — not in nav but in sitemap
  const seoPages = [
    { url: `${SITE_URL}/telehealth-doctors`, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${SITE_URL}/primary-care-near-me`, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${SITE_URL}/doctors-accepting-new-patients`, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${SITE_URL}/insurance-accepted-doctors`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/best-rated-primary-care`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/urgent-care-vs-primary-care`, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${SITE_URL}/primary-care-without-insurance`, changeFrequency: "monthly" as const, priority: 0.75 },
  ];

  return [...mainPages, ...seoPages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
