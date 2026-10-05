import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/faq",
    "/sign-up",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
