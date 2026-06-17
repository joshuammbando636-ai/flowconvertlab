import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.flowconvertlab.com";

  const routes = [
    { url: `${baseUrl}/`, priority: 1.0 },
    { url: `${baseUrl}/tools`, priority: 0.9 },
    { url: `${baseUrl}/comparison`, priority: 0.9 },
    { url: `${baseUrl}/reviews`, priority: 0.8 },
    { url: `${baseUrl}/guide`, priority: 0.8 },
    { url: `${baseUrl}/blog`, priority: 0.7 },
    { url: `${baseUrl}/about`, priority: 0.6 },
    { url: `${baseUrl}/contact`, priority: 0.6 },
    { url: `${baseUrl}/privacy`, priority: 0.4 },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
