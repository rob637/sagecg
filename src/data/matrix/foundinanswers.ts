// FoundInAnswers — Search & AI Answer Engine Optimization (AEO) Platform.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'FoundInAnswers',
  'id.legal':           'Sage Consulting Group, Inc. (operating brand)',
  'id.type':            'B2B SaaS — Two-Step SEO & AI Answer Engine Optimization (AEO) Platform',
  'id.status':          'Live in production',
  'id.stage':           'Production (Step 1 Live Audit + Step 2 Customer Portal & Showrooms)',
  'id.sector':          'B2B SaaS / Search & AI Answer Engine Optimization (AEO)',
  'id.domain':          'foundinanswers.com',
  'id.apex':            'foundinanswers.com canonical (Cloudflare Edge)',
  'id.tagline':         'Get found across search engines & AI assistants — with zero AI slop.',
  'id.founder':         'Rob Pfleghardt (rob637)',

  // Repo & Source
  'repo.github':        'Private repository',
  'repo.branch':        'main',
  'repo.license':       'Private / proprietary',
  'repo.language':      'TypeScript + React 18',
  'repo.pm':            'npm',
  'repo.node':          '20.x',
  'repo.monorepo':      'No — single repo (SPA + edge API + D1 schema)',

  // Frontend
  'fe.framework':       'React 18 + Vite (SPA with Showroom, Guides, Compare & Customer Console)',
  'fe.uilib':           'Custom editorial components + lucide-react icons + built-in WYSIWYG guide editor',
  'fe.styling':         'Tailwind CSS',
  'fe.tokens':          'Cream #faf6f0, Cocoa #2c1e18, Terracotta #c85a32, Sage #3b6e5c, Amber #d9822b',
  'fe.content':         'D1 relational content store + static authority guides & comparison matrices',
  'fe.fonts':           ['Merriweather (editorial serif)', 'Noto Sans (UI)'],
  'fe.fontdelivery':    'Google Fonts (preconnect)',
  'fe.icons':           'lucide-react',
  'fe.palette':         'Warm Cream #faf6f0, Cocoa #2c1e18, Terracotta #c85a32, Sage #3b6e5c',
  'fe.darkmode':        'Light editorial paper theme',

  // Backend
  'be.runtime':         'Cloudflare Pages Functions / Workers runtime',
  'be.api':             'REST endpoints (/api/live-audit, /api/companies, /api/jobs, /api/jobs/step2, /api/portal/verify-login, /api/articles)',
  'be.jobs':            '6-stage live edge audit runner, Step 2 draft generator, Tue/Thu drip scheduler & IndexNow pinger',
  'be.functions':       'Edge HTTP crawler (DOM, sitemap.xml, robots.txt, llms.txt, JSON-LD, App Store ASO) + WYSIWYG approval queue',

  // Data
  'data.db':            'Cloudflare D1 (SQLite at the edge)',
  'data.orm':           'Prepared SQL queries on D1',
  'data.source':        'Live edge HTTP crawl telemetry + D1 company, hub, phrase, and article tables',
  'data.schema':        'Relational schema (companies, audits, hubs, articles, tracked phrases)',
  'data.storage':       'Cloudflare Pages static assets + generated 4-page PDF proposals',
  'data.cms':           'Two-Gate Customer Console (/console) with Blueprint Editor & WYSIWYG Draft Review Queue',

  // Hosting
  'host.hosting':       'Cloudflare Pages + Workers',
  'host.build':         'npm run build (Vite)',
  'host.output':        'dist/',
  'host.cache':         'Cloudflare edge caching',
  'host.cdn':           'Cloudflare global edge',
  'host.dns':           'Cloudflare',
  'host.registrar':     'Cloudflare / GoDaddy',
  'host.ssl':           'Cloudflare Universal SSL',
  'host.deploy':        'Git push / Wrangler deploy',
  'host.preview':       'Cloudflare Pages preview deployments',

  // Auth
  'auth.user':          'Customer Portal verification (/api/portal/verify-login)',
  'auth.admin':         'Operator console access (rob@sagecg.com)',
  'auth.sso':           'None',

  // Email
  'email.provider':     'Google Workspace',
  'email.records':      'Configured via Cloudflare DNS',
  'email.primary':      'rob@sagecg.com',
  'email.secondary':    '—',
  'email.founder':      'rob@sagecg.com',
  'email.transactional':'Audit showroom & approval queue notifications',
  'email.aliases':      '—',

  // Payments
  'pay.processor':      'Month-to-month subscription billing (Starter $49/mo, Growth $99/mo, Scale $249/mo; $0/mo honest verdict if passing)',
  'pay.subs':           'Self-serve portal tier management (upgrade, downgrade, pause, or 1-click cancel)',
  'pay.pricing':        'Transparent pricing on homepage (/#pricing) + /compare matrix',

  // Analytics
  'an.web':             'Cloudflare Web Analytics + lightweight privacy-friendly client bridge telemetry',
  'an.product':         'Hub views, CTA clicks, and AI citation tracking per company showroom',
  'an.sitemap':         '/sitemap.xml (25+ indexed routes including 10 authority guides & live showrooms)',
  'an.robots':          'Explicit Allow rules for GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Googlebot, bingbot, Applebot',
  'an.jsonld':          'Organization, SoftwareApplication, and FAQPage JSON-LD schemas',
  'an.og':              'Configured meta & social preview tags',
  'an.meta':            'Per-route title, description, canonical, and /llms.txt discovery',
  'an.gsc':             'Submitted + Microsoft Bing IndexNow integration',

  // AI
  'ai.features':        'Two-gate Topic Hub & 1,250-word guide drafting with anti-slop zero-em-dash filter & factual grounding',
  'ai.models':          'LLM drafting pipeline + deterministic 0–100 SEO/AEO scoring engine',
  'ai.vector':          'Structured /llms.txt & Hub-and-Spoke topic catalog',

  // Integrations
  'int.apis':           'Apple iTunes Lookup API (App Store ASO), Google Play metadata, Microsoft Bing IndexNow API',
  'int.webhooks':       'Client technical bridge (subdomain CNAME, bridge.js, or static feed)',
  'int.sdks':           'Cloudflare Workers / D1, React Router, Lucide Icons',

  // DevOps
  'dev.ci':             'Automated build & Cloudflare deployment',
  'dev.actions':        'Deployment pipeline',
  'dev.env':            'Cloudflare Worker/Pages environment bindings',
  'dev.secrets':        'Cloudflare Secrets',
  'dev.localdev':       'npm run dev / wrangler pages dev',
  'dev.lint':           'TypeScript + ESLint',
  'dev.tests':          'Live audit & anti-slop verification checks',
  'dev.types':          'TypeScript strict mode',

  // Monitoring
  'mon.uptime':         'Cloudflare native',
  'mon.errors':         'Cloudflare Workers logs',
  'mon.logs':           'Cloudflare real-time logs',
  'mon.alerts':         'Cloudflare notifications',

  // Security
  'sec.https':          'Forced via Cloudflare',
  'sec.hsts':           'Yes',
  'sec.frame':          'Protected',
  'sec.nosniff':        'nosniff',
  'sec.permissions':    'Standard',
  'sec.csp':            'Configured',
  'sec.cache':          'must-revalidate on HTML; immutable on hashed /assets/*',
  'sec.bot':            'Honeypot protection on audit form + Cloudflare',
  'sec.ddos':           'Cloudflare',

  // Legal
  'leg.privacy':        'Published (/legal/privacy)',
  'leg.terms':          'Published (/legal/terms)',
  'leg.cookies':        'Privacy-friendly telemetry (no cross-site tracking or data broker sales)',
  'leg.pii':            'Submitted website URL, contact name, and business email',
  'leg.gdpr':           'Full showroom/audit/account deletion on request',

  // Misc
  'misc.editorial':     'Warm editorial cream & terracotta palette; strict zero-em-dash human editorial policy (/legal/editorial-policy)',
  'misc.conventions':   '100% Honest Audit Guarantee (90–100/100 sites receive a $0/mo No Plan Needed verdict)',
  'misc.todos':         'Expand automated CMS bridge connectors',
};

export default data;
