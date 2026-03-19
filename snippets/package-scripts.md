# `package.json` Scripts (Choose One Mode)

## Mode A: Native Next.js `app/robots.ts` + `app/sitemap.ts`

Use this when your sitemap is straightforward and generated from code in App Router.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## Mode B: `next-sitemap` (Recommended for larger sites)

Use this when you need multi-sitemap support and post-build generation.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "postbuild": "next-sitemap",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## Important

- Do not run both native sitemap routes and `next-sitemap` outputs for the same URLs unless intentionally coordinated.
- Keep your canonical URL and site URL aligned with production.
