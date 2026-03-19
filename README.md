# Next.js SEO Framework

A practical SEO starter repository for Next.js projects.

Use this repo as your reference when starting new apps. It focuses on:

- Technical SEO foundations
- Metadata and social sharing setup
- Structured data (JSON-LD)
- Indexing controls (`robots.txt`, `sitemap.xml`)
- A pre-launch checklist

It also follows a vetted stack from reliable repos:

- Next.js official metadata and routing SEO patterns
- `next-sitemap` for scalable sitemap/robots generation
- `next-seo` for optional metadata/JSON-LD ergonomics

## Quick Start For New Projects

1. Copy snippets from `snippets/` into your new Next.js app.
2. Install optional tooling:
   - `npm i next-seo next-sitemap`
3. Follow `checklists/seo-launch-checklist.md` before release.
4. Replace placeholder values (`example.com`, brand names, social handles).

## Recommended Base Setup (App Router)

In your new app:

- Define global metadata in `app/layout.tsx`
- Create `app/robots.ts` and `app/sitemap.ts`
- Add page-level metadata for key routes
- Add JSON-LD for organization and content types

## Repository Structure

- `checklists/seo-launch-checklist.md` - launch checklist
- `snippets/metadata.ts` - reusable metadata examples
- `snippets/jsonld.tsx` - reusable JSON-LD helpers
- `snippets/robots-sitemap.md` - `robots.ts` and `sitemap.ts` examples
- `snippets/next-sitemap.config.mjs` - `next-sitemap` config starter
- `snippets/reliable-stack-setup.md` - vetted stack integration guide
- `snippets/package-scripts.md` - `package.json` script templates
- `snippets/.env.example` - site URL environment starter

## Notes

- Prioritize unique titles/descriptions for every important page.
- Keep canonical URLs consistent with your production domain.
- Validate structured data with [Google Rich Results Test](https://search.google.com/test/rich-results).
- Track indexed pages in Google Search Console after launch.
