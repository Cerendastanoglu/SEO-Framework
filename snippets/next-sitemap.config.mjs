/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*", "/dashboard/*", "/admin/*"],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/", "/admin/"],
      },
    ],
  },
};

export default config;
