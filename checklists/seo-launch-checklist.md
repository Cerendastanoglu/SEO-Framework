# SEO Launch Checklist (Next.js)

## 1) Core Configuration

- [ ] Production domain is final and HTTPS is enabled
- [ ] Canonical domain strategy chosen (`www` vs non-`www`)
- [ ] `NEXT_PUBLIC_SITE_URL` (or equivalent) points to production
- [ ] No accidental `noindex` in production metadata

## 2) Metadata

- [ ] Each key page has unique `title`
- [ ] Each key page has unique `description`
- [ ] Open Graph metadata is set (title, description, image, URL)
- [ ] Twitter card metadata is set
- [ ] Canonical URL is set for key pages

## 3) Indexing & Crawling

- [ ] `robots.txt` is accessible at `/robots.txt`
- [ ] `sitemap.xml` is accessible at `/sitemap.xml`
- [ ] Important routes are present in sitemap
- [ ] Private/internal routes are excluded from sitemap

## 4) Structured Data

- [ ] Organization JSON-LD added where relevant
- [ ] Website JSON-LD added where relevant
- [ ] Article/Product/FAQ JSON-LD added on matching pages
- [ ] Rich Results validation passes

## 5) Performance & UX Signals

- [ ] Largest Contentful Paint is reasonable on key pages
- [ ] Mobile layout is stable and readable
- [ ] Images have meaningful alt text
- [ ] Internal links are present between important pages

## 6) Post-Launch

- [ ] Google Search Console property verified
- [ ] Sitemap submitted in Search Console
- [ ] Key page indexing monitored
- [ ] 404 and crawl errors monitored weekly
