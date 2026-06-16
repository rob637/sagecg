# Sage CG

The website for **Sage Consulting Group** — a venture studio that starts, builds, and operates a small portfolio of software companies.

Live at: https://www.sagecg.com

## Stack

- [Astro 5](https://astro.build/) — static site generator with content collections
- [Tailwind CSS v4](https://tailwindcss.com/) — styling via the Vite plugin
- [MDX](https://mdxjs.com/) — for rich portfolio content
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — auto-generated sitemap for SEO

## Project structure

```
src/
├── components/         Reusable Astro components (Header, Footer, PortfolioCard)
├── content/
│   └── portfolio/      One markdown file per portfolio company
├── layouts/
│   └── Layout.astro    Base layout with SEO meta, OpenGraph, JSON-LD
├── pages/
│   ├── index.astro     Studio home page
│   ├── about.astro
│   ├── contact.astro
│   └── portfolio/
│       ├── index.astro Portfolio index
│       └── [slug].astro Dynamic page per company
├── styles/
│   └── global.css      Tailwind v4 theme + base styles
└── content.config.ts   Content collection schema
public/
├── favicon.svg
└── robots.txt
```

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # outputs to ./dist
npm run preview
```

## Adding or editing a portfolio company

1. Create a new file in `src/content/portfolio/your-company.md`
2. Fill in the frontmatter (see existing entries for the schema)
3. Write the body in Markdown — it renders on `/portfolio/your-company/`
4. Set `order` to control its position on the home page and portfolio index

Valid `status` values: `active`, `building`, `concept`, `archived`.

## SEO notes

- Per-page `<title>`, `<meta description>`, OpenGraph, and Twitter tags via the `Layout` component
- Canonical URLs auto-set from `Astro.site`
- JSON-LD `Organization` schema on every page
- Sitemap auto-generated at `/sitemap-index.xml`
- `robots.txt` allows everything and points to the sitemap
- Each portfolio company gets its own indexable, content-rich page
- Internal hub-and-spoke link structure: home → portfolio → company, and back

## Deployment

This site is a fully static build. Recommended hosts:

- **Cloudflare Pages** (free, fast, great DNS)
- **Vercel** (zero-config Astro support)
- **Netlify**

Point `www.sagecg.com` (and apex `sagecg.com`) at the host of your choice.

### Production safety

- `PUBLIC_ENABLE_ADMIN` must be unset or `false` in production.
- A prebuild guard now blocks production builds when `PUBLIC_ENABLE_ADMIN=true`.
- If admin is enabled in a non-production environment, protect `/admin` at the edge (for example, Cloudflare Access).

