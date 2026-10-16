// Borderless OS — Global Customs, Tariff & Landed-Cost Engine.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'Borderless OS',
  'id.legal':           'Sage Consulting Group, Inc. (operating brand)',
  'id.type':            'B2B SaaS — Deterministic Global Customs, Tariff & Landed-Cost Engine',
  'id.status':          'Live in production',
  'id.stage':           'Production (50 countries / 133-page customs hubs)',
  'id.sector':          'Global Trade / Customs & Regulatory Intelligence',
  'id.domain':          'borderless-os.com',
  'id.apex':            'borderless-os.com canonical (Cloudflare CDN)',
  'id.tagline':         'Clear global customs with mathematical certainty.',
  'id.founder':         'Rob Pfleghardt (rob637)',

  // Repo & Source
  'repo.github':        'Private repository',
  'repo.branch':        'main',
  'repo.license':       'Private / proprietary',
  'repo.language':      'Python + HTML/JS + Bi-Temporal JSON Schemas',
  'repo.pm':            'pip / npm',
  'repo.node':          'Python 3.12 runtime',
  'repo.monorepo':      'No',

  // Frontend
  'fe.framework':       'Static HTML5 + Vanilla JS + 133 compiled Country Hub pages',
  'fe.uilib':           'Custom glassmorphic UI (ive-card) + native i18n dictionary (EN/IS/NO/DE/FR/ES)',
  'fe.styling':         'Tailwind CSS + custom dark/light theme engine',
  'fe.tokens':          'Slate #070b14 (dark) / #f4f6f9 (light), Sky #0284c7 accent, Emerald verified badges',
  'fe.content':         'Compiled bi-temporal JSON statutory blueprints + HTML hubs',
  'fe.fonts':           ['Inter', 'JetBrains Mono'],
  'fe.fontdelivery':    'Google Fonts',
  'fe.icons':           'Inline SVG & semantic status badges',
  'fe.palette':         'Deep Slate #070b14, Sky #0284c7, Emerald #10b981',
  'fe.darkmode':        'Yes (dual theme: Dark & Light mode with persistent toggle)',

  // Backend
  'be.runtime':         'Python 3.12 HTTP/API service behind Cloudflare',
  'be.api':             'REST endpoints (/api/auth, /api/v1/calculate) with X-Borderless-Key auth',
  'be.jobs':            'Statutory feed monitoring & SHA-256 verification pipeline',
  'be.functions':       'Landed-cost calculator, Active Interrogation HS classifier, 4-form PDF packet generator',

  // Data
  'data.db':            'Bi-temporal statutory JSON vault + user/session store',
  'data.orm':           'Custom schema validation (2.0.0-bi-temporal)',
  'data.source':        'Primary sovereign customs legislation across 50 countries (7 regulatory layers)',
  'data.schema':        'Bi-temporal JSON schema with SHA-256 receipts & legal citations',
  'data.storage':       'Static asset vault + generated PDF customs packets',
  'data.cms':           'Automated statutory compilation pipeline',

  // Hosting
  'host.hosting':       'Render + Cloudflare Edge',
  'host.build':         'Deterministic hub & blueprint compiler',
  'host.output':        'Static hubs + API server',
  'host.cache':         'Cloudflare dynamic edge caching',
  'host.cdn':           'Cloudflare global edge',
  'host.dns':           'Cloudflare',
  'host.registrar':     'Cloudflare / GoDaddy',
  'host.ssl':           'Cloudflare Universal SSL',
  'host.deploy':        'Git push → automated build & statutory audit verification',
  'host.preview':       'Staging environment',

  // Auth
  'auth.user':          'Token-based session auth (/api/auth) + Enterprise API keys (X-Borderless-Key)',
  'auth.admin':         'Role-based admin gate (rob@sagecg.com)',
  'auth.sso':           'None',

  // Email
  'email.provider':     'Google Workspace',
  'email.records':      'Configured via Cloudflare DNS',
  'email.primary':      'rob@sagecg.com',
  'email.secondary':    '—',
  'email.founder':      'rob@sagecg.com',
  'email.transactional':'Automated account & checkout notifications',
  'email.aliases':      '—',

  // Payments
  'pay.processor':      'Stripe Checkout (Single Pass $49, Commercial Pro $199/mo, Enterprise $799/mo)',
  'pay.subs':           'Stripe subscriptions + instant API key provisioning',
  'pay.pricing':        'Freemium Country Blueprints + tiered calculator & packet plans',

  // Analytics
  'an.web':             'Google Analytics 4 (G-FSQJNSSMXN)',
  'an.product':         'Quota & calculation telemetry',
  'an.sitemap':         'Full 133-page hub index + llms.txt + llms-full.txt',
  'an.robots':          'index, follow, max-snippet:-1 + LLM summary index alternate link',
  'an.jsonld':          'Compiled statutory metadata for search & AI answer engines',
  'an.og':              'OpenGraph tags configured across hubs',
  'an.meta':            'Per-jurisdiction title, description, canonical, and statutory quick facts',
  'an.gsc':             'Submitted',

  // AI
  'ai.features':        'Active Interrogation HS classification, LLM-ready statutory citation feeds (llms.txt)',
  'ai.models':          'Deterministic statutory rules engine + AI-assisted interrogation',
  'ai.vector':          'Structured 7-layer statutory index',

  // Integrations
  'int.apis':           'Stripe, Sovereign Customs & Tariff Feeds (USITC, Skatturinn, TARIC, HMRC, etc.)',
  'int.webhooks':       'Enterprise outbound calculation webhooks + Stripe webhooks',
  'int.sdks':           'REST API (X-Borderless-Key)',

  // DevOps
  'dev.ci':             'Automated build & audit verification (BOS build IDs)',
  'dev.actions':        'Automated deployment pipeline',
  'dev.env':            'Production environment secrets',
  'dev.secrets':        'Server-side environment variables',
  'dev.localdev':       'Local Python server',
  'dev.lint':           'Schema validation',
  'dev.tests':          'Verified tariff scenarios & statutory test suite',
  'dev.types':          'JSON Schema v2.0.0-bi-temporal',

  // Monitoring
  'mon.uptime':         'Cloudflare + Render health checks',
  'mon.errors':         'Server logs',
  'mon.logs':           'Render + Cloudflare logs',
  'mon.alerts':         'Statutory feed change alerts',

  // Security
  'sec.https':          'Forced via Cloudflare',
  'sec.hsts':           'Yes',
  'sec.frame':          'Protected',
  'sec.nosniff':        'nosniff',
  'sec.permissions':    'Standard',
  'sec.csp':            'Configured',
  'sec.cache':          'no-store on dynamic auth/calc endpoints',
  'sec.bot':            'Cloudflare',
  'sec.ddos':           'Cloudflare',

  // Legal
  'leg.privacy':        'Published',
  'leg.terms':          'Published with statutory citation disclaimers',
  'leg.cookies':        'localStorage session/theme state',
  'leg.pii':            'Account email, company name, customs profile',
  'leg.gdpr':           'Compliant',

  // Misc
  'misc.editorial':     'High-contrast dark/light precision engineering aesthetic',
  'misc.conventions':   'SHA-256 statutory receipts on every country hub',
  'misc.todos':         'Continue expanding Wave 5 customs hubs',
};

export default data;
