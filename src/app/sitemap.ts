import type { MetadataRoute } from "next";

const SITE_URL = "https://echoreconnect.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/calculator", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/chat", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/login", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/signup", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
