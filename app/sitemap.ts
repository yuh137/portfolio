import type { MetadataRoute } from "next";

import { mainNav } from "@/config/routes";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "monthly", priority: 1 },
    ...mainNav.map((item) => ({
      url: `${siteConfig.url}${item.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
