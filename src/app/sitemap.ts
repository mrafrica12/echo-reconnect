import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
      images: [`${SITE_URL}/images/hero.webp`],
    },
    { path: "/calculator", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
    // Every service has its own page; generated from the same source as the
    // pages themselves so a new service can't be added without being listed.
    ...SERVICES.map((service) => ({
      path: `/services/${service.slug}`,
      priority: service.featured ? 0.8 : 0.7,
      changeFrequency: "monthly" as const,
    })),
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/chat", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: "images" in route ? route.images : undefined,
  }));
}
