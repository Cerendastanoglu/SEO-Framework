# `app/robots.ts` Example

```ts
import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
```

# `app/sitemap.ts` Example

```ts
import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/blog", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
```

# Notes

- Exclude private/authenticated routes from sitemap.
- Keep sitemap aligned with your actual public routes.
- Use absolute URLs in all sitemap entries.
