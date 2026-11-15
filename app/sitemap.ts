import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = [
    { path: "", priority: 1 },
    { path: "/servicios", priority: 0.9 },
    { path: "/empresas", priority: 0.8 },
    { path: "/nosotros", priority: 0.6 },
    { path: "/contacto", priority: 0.8 },
  ];
  return [
    ...base.map((p) => ({ url: `${site.url}${p.path}`, lastModified: now, changeFrequency: "monthly" as const, priority: p.priority })),
    ...services.map((s) => ({
      url: `${site.url}/servicios/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
