import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://avancesoluciones.com.mx";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}${basePath}/`,
      lastModified: new Date("2026-05-31"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
