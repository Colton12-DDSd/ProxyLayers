import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://proxylayers.vercel.app";

  return [
    "",
    "/platform",
    "/partners",
    "/trust",
    "/trust/security",
    "/trust/privacy",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
