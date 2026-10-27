import type { MetadataRoute } from "next";

const baseUrl = "https://www.chocolatecity.co.ke";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/menu", "/locations", "/events", "/reservations", "/contact"];

  return routes.map((route) => ({
    url: baseUrl + route,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
