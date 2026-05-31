// CBR Labs — GovTech / Hardware Redaction platform.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'CBR Labs',
  'id.legal':           'CBR Labs LLC',
  'id.type':            'Marketing site + internal admin / chain-of-custody app',
  'id.status':          'In production (marketing live; admin behind Access)',
  'id.stage':           'Production (site relaunched 2026; admin app v1)',
  'id.sector':          'GovTech / Hardware redaction services (SCIFs, courts, hospitals, corrections)',
  'id.domain':          'www.cbr-labs.com',
  'id.apex':            'www → apex 301 (Cloudflare _redirects + DNS)',
  'id.tagline':         'Hardware Redaction for iPad & Android Tablets',
  'id.founder':         'Rob Pfleghardt (rob637)',

  // Repo & Source
  'repo.github':        'rob637/CBRLabs',
  'repo.branch':        'main',
  'repo.license':       'Private / unlicensed',
  'repo.language':      'JavaScript (React/Next.js for app); TypeScript for Pages Functions',
  'repo.pm':            'npm',
  'repo.node':          '20 (@cloudflare/workers-types compat)',
  'repo.monorepo':      'No — single repo (site + functions + db schema)',

  // Frontend
  'fe.framework':       'Next.js 14.2 App Router (static export)',
  'fe.uilib':           'React 18.2 (function components + hooks), no component lib',
  'fe.styling':         'Tailwind CSS 3.4',
  'fe.tokens':          'CSS variables in globals.css; #F7F6F2 (light) / #0B0E13 (dark)',
  'fe.content':         'JSX pages in app/ — no MDX/CMS',
  'fe.fonts':           ['Inter', 'Inter Tight', 'JetBrains Mono (via next/font/google)'],
  'fe.fontdelivery':    'Self-hosted via next/font',
  'fe.icons':           'Inline SVG components in Icons.js',
  'fe.palette':         'Paper #F7F6F2, ink #0B0E13, brand accent',
  'fe.darkmode':        'Yes — class-based, persisted in localStorage',

  // Backend
  'be.runtime':         'Cloudflare Pages Functions (Workers runtime)',
  'be.api':             'TypeScript Pages Functions in functions/api/ (protected) and functions/public/ (open)',
  'be.jobs':            'None',
  'be.functions':       'functions/**/*.ts — REST endpoints for customers, devices, POs, invoices, leads, proposals, verify',

  // Data
  'data.db':            'Cloudflare D1 (SQLite at the edge) — cbr_labs_admin',
  'data.orm':           'None — raw prepared statements (env.DB.prepare)',
  'data.source':        'Local JSX pages',
  'data.schema':        'schema.sql + schema-v2.sql (idempotent migrations)',
  'data.storage':       'Cloudflare R2 — bucket cbr-labs-files (device photos, certs, receipts, audit zips)',
  'data.cms':           'None (Git is the CMS; admin app for operational data)',

  // Hosting
  'host.hosting':       'Cloudflare Pages (project: cbr-labs)',
  'host.build':         'npm run build (Next.js static export)',
  'host.output':        'out',
  'host.cache':         'Enabled (Cloudflare Pages default)',
  'host.cdn':           'Cloudflare global edge',
  'host.dns':           'Cloudflare',
  'host.registrar':     'GoDaddy (legacy) — DNS delegated to Cloudflare',
  'host.ssl':           'Cloudflare Universal SSL (apex + www)',
  'host.deploy':        'Push to main → Cloudflare Pages build',
  'host.preview':       'Per-branch via Cloudflare Pages',

  // Auth
  'auth.user':          'None (public marketing site)',
  'auth.admin':         'Cloudflare Access (Zero Trust) on /admin/* and /api/*',
  'auth.sso':           'Cloudflare Access (Google Workspace IdP)',

  // Email
  'email.provider':     'Google Workspace',
  'email.records':      'Google MX + SPF/DKIM/DMARC in Cloudflare DNS',
  'email.primary':      'rob@cbr-labs.com',
  'email.secondary':    '—',
  'email.founder':      'rob@cbr-labs.com',
  'email.transactional':'Resend (pending DNS + secret set)',
  'email.aliases':      'Google Workspace',

  // Payments
  'pay.processor':      'None integrated yet (PDF invoices via jsPDF; manual collection)',
  'pay.subs':           'N/A (project-based / per-device billing)',
  'pay.pricing':        'Quoted per project',

  // Analytics
  'an.web':             'None yet (Cloudflare Web Analytics planned)',
  'an.product':         'N/A (admin is internal)',
  'an.sitemap':         'sitemap.js → /sitemap.xml',
  'an.robots':          'robots.js (allow all; /admin/* + /api/* blocked)',
  'an.jsonld':          'JSON-LD: Organization, LocalBusiness (CAGE/UEI/DUNS), Service, GovernmentService',
  'an.og':              '/og.png (referenced, currently missing)',
  'an.meta':            'title + description + canonical + OG + Twitter via Next.js Metadata API',
  'an.gsc':             'Not yet submitted (planned post-cutover)',

  // AI
  'ai.features':        'None',
  'ai.models':          'N/A',
  'ai.vector':          'N/A',

  // Integrations
  'int.apis':           'Resend (pending)',
  'int.webhooks':       'None',
  'int.sdks':           'jspdf (invoices, certs), qrcode (device tag QR), sharp (icon generation)',

  // DevOps
  'dev.ci':             'Cloudflare Pages build on git push',
  'dev.actions':        'None',
  'dev.env':            'wrangler.toml [vars]: COMPANY_NAME, COMPANY_CAGE, etc.',
  'dev.secrets':        'wrangler pages secret put / CF dashboard (RESEND_API_KEY)',
  'dev.localdev':       'npm run dev (Next) / npm run pages:dev (full emulation)',
  'dev.lint':           'ESLint 8 (eslint-config-next)',
  'dev.tests':          'None',
  'dev.types':          'TypeScript only in functions/** via @cloudflare/workers-types',

  // Monitoring
  'mon.uptime':         'Cloudflare native',
  'mon.errors':         'None',
  'mon.logs':           'Cloudflare Pages Functions real-time logs',
  'mon.alerts':         'None',

  // Security
  'sec.https':          'Forced via Cloudflare',
  'sec.hsts':           'Yes (max-age=63072000; includeSubDomains; preload)',
  'sec.frame':          'DENY',
  'sec.nosniff':        'nosniff',
  'sec.permissions':    'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  'sec.csp':            "Strict (default-src 'self', no third-party origins)",
  'sec.cache':          'no-store for /api/* and /public/*',
  'sec.bot':            'Cloudflare defaults + Access on admin/API',
  'sec.ddos':           'Cloudflare',

  // Legal
  'leg.privacy':        'Not yet published',
  'leg.terms':          'Not yet published',
  'leg.cookies':        'Not needed (no tracking cookies; only Access session cookie)',
  'leg.pii':            'Lead-form, customer contacts, device serials, chain-of-custody actor emails',
  'leg.gdpr':           'US-only customers (gov / regulated); no consumer PII at scale',

  // Misc
  'misc.editorial':     'Editorial-minimal, paper/ink palette, technical credibility for gov buyers',
  'misc.conventions':   'Money as integer cents; append-only device_events with actor tracking',
  'misc.todos':         'Wire Resend; Create /og.png; Submit GSC; Lower TTL post-cutover',
};

export default data;
