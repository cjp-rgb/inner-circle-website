import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://theinnercircle.website";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/clients",
    "/clients/hubs",
    "/clients/results",
    "/clients/join",
    "/clients/faq",
    "/console",
    "/affiliates",
    "/legal/risk",
    "/legal/privacy",
    "/legal/terms",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
