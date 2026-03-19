# Reliable SEO Stack Setup (Next.js)

This setup is based on high-trust sources:

- Next.js official Metadata API patterns
- `next-sitemap` for production sitemap/robots automation
- `next-seo` for optional metadata and JSON-LD helpers

## 1) Install

```bash
npm i next-seo next-sitemap
```

Set your domain early:

```bash
cp snippets/.env.example .env.local
```

## 2) Keep Next.js metadata as your default base

- Use `snippets/metadata.ts` for `app/layout.tsx` and route-level metadata.
- Use `snippets/jsonld.tsx` for structured data blocks.

This keeps you aligned with App Router standards first.

## 3) Configure next-sitemap

1. Copy `snippets/next-sitemap.config.mjs` to your app root as `next-sitemap.config.mjs`.
2. Add postbuild generation to `package.json`.

```json
{
  "scripts": {
    "build": "next build",
    "postbuild": "next-sitemap"
  }
}
```

Or copy from `snippets/package-scripts.md`.

## 4) Choose one robots/sitemap strategy

Use one strategy to avoid conflicting outputs:

- Native Next.js route handlers: `app/robots.ts` + `app/sitemap.ts` (see `snippets/robots-sitemap.md`)
- OR `next-sitemap` generated files via `postbuild`

If your app has many dynamic routes and multiple sitemap files, prefer `next-sitemap`.

## 5) Optional next-seo usage

Use `next-seo` when your team prefers central config/components for metadata and JSON-LD.

- Keep canonical URL logic consistent with `metadataBase`.
- Do not duplicate conflicting metadata between `next-seo` and `generateMetadata`.

## Copy Order For New Projects

1. `snippets/.env.example` -> `.env.local`
2. `snippets/metadata.ts` -> your metadata utility location
3. `snippets/jsonld.tsx` -> your JSON-LD utility/component location
4. Choose one:
   - `snippets/robots-sitemap.md` (native route handlers)
   - `snippets/next-sitemap.config.mjs` + `snippets/package-scripts.md` (`next-sitemap`)
5. Run launch checks from `checklists/seo-launch-checklist.md`
