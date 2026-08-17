import { MetadataRoute } from "next";
import { INITIAL_TEMPLATES } from "@/lib/mock-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://sitestash.vercel.app";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const templateRoutes: MetadataRoute.Sitemap = INITIAL_TEMPLATES.map((tpl) => ({
    url: `${baseUrl}/templates/${tpl.slug}`,
    lastModified: new Date(tpl.updatedAt),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const previewRoutes: MetadataRoute.Sitemap = INITIAL_TEMPLATES.map((tpl) => ({
    url: `${baseUrl}/preview/${tpl.slug}`,
    lastModified: new Date(tpl.updatedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...templateRoutes, ...previewRoutes];
}
