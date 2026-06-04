// ToothHound — Next.js PWA shark-tooth & beach-fossil hunting companion.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'Toothhound',
  'id.legal':           '(none — under SageCG)',
  'id.type':            'Next.js PWA — shark-tooth & beach-fossil hunting companion (East Coast US)',
  'id.status':          'Live (https://shark-tooth-app.pages.dev/ + per-branch previews)',
  'id.stage':           'Production beta — actively iterating on identifier accuracy & land assessor',
  'id.sector':          'Outdoor / hobbyist / paleontology / real-estate intelligence',
  'id.domain':          'toothhound.app',
  'id.apex':            'Cloudflare Pages default (apex serves directly when custom domain added)',
  'id.tagline':         'Know when the tide turns up teeth.',
  'id.founder':         'Rob Pfleghardt (rob637)',

  // Repo & Source
  'repo.github':        'rob637/Zero (subdir shark-tooth-app/)',
  'repo.branch':        'main',
  'repo.license':       'Private (README says generously open-sourced; no LICENSE file shipped)',
  'repo.language':      'TypeScript 5 (Next.js App Router)',
  'repo.pm':            'npm',
  'repo.node':          '20 (Next 14.2.15 baseline)',
  'repo.monorepo':      'Lives inside Zero monorepo alongside Longest Table / quant-agents / harness',

  // Frontend
  'fe.framework':       'Next.js 14.2 App Router + React 18.3',
  'fe.uilib':           'Custom Tailwind components; react-leaflet for maps',
  'fe.styling':         'Tailwind CSS 3.4 (custom ocean palette)',
  'fe.tokens':          'Ocean palette (foam/kelp/amber/sand) defined in tailwind.config.ts',
  'fe.content':         'TypeScript data modules in src/data/ (locations / species / realEstateZones)',
  'fe.fonts':           ['System sans', 'custom display class (font-display)'],
  'fe.fontdelivery':    'Local / system (no Google Fonts dependency)',
  'fe.icons':           'Inline SVG + emoji',
  'fe.palette':         'Ocean (foam/kelp/sand/amber) — beach editorial',
  'fe.darkmode':        'No (intentional bright-beach editorial)',

  // Backend
  'be.runtime':         'Next.js Node 20 serverless functions on Cloudflare Pages',
  'be.api':             'Next.js Route Handlers (/api/identify /api/identify-feedback /api/parcel-intel)',
  'be.jobs':            'None',
  'be.functions':       '/api/* route handlers (Node runtime for parcel-intel & feedback)',

  // Data
  'data.db':            'Client-side IndexedDB (logbook) + Upstash Redis (feedback) + SQLite (better-sqlite3 reserved for server-side data)',
  'data.orm':           'None — direct SDK calls',
  'data.source':        'src/data/locations.ts, species.ts, realEstateZones.ts + tests/identify-eval/ fixtures',
  'data.schema':        'TypeScript interfaces + deterministic scorer logic',
  'data.storage':       'public/ via Cloudflare CDN + reference-photos/ for ID exemplars',
  'data.cms':           'None (TypeScript data files are the CMS)',

  // Hosting
  'host.hosting':       'Cloudflare Pages (Next.js support; production + preview deploys per branch)',
  'host.build':         'next build (Cloudflare default)',
  'host.output':        '.next/',
  'host.cache':         'Enabled (Cloudflare default)',
  'host.cdn':           'Cloudflare global edge',
  'host.dns':           'Cloudflare default',
  'host.registrar':     'TBD (toothhound.app not yet purchased)',
  'host.ssl':           'Cloudflare managed certs',
  'host.deploy':        'Push to main (GitHub integration) + per-branch previews',
  'host.preview':       'Per-branch Cloudflare previews',

  // Auth
  'auth.user':          'None — fully client-side / anonymous',
  'auth.admin':         'N/A',
  'auth.sso':           'N/A',

  // Email
  'email.provider':     'Google Workspace (rob@sagecg.com as contact)',
  'email.records':      'N/A',
  'email.primary':      '(no product inbox yet)',
  'email.secondary':    '—',
  'email.founder':      'rob@sagecg.com',
  'email.transactional':'None',
  'email.aliases':      '—',

  // Payments
  'pay.processor':      'None (free app)',
  'pay.subs':           'None — considering optional Pro tier for advanced parcel dossiers',
  'pay.pricing':        'N/A',

  // Analytics
  'an.web':             'Cloudflare Web Analytics',
  'an.product':         'Upstash Redis feedback list (toothhound:identify-feedback) capped at 50k',
  'an.sitemap':         'Not yet generated',
  'an.robots':          'Default Next.js (allow all)',
  'an.jsonld':          'None yet (Place / Article schema for locations is a TODO)',
  'an.og':              'None yet (TODO — auto-generate per location/species)',
  'an.meta':            'Next metadata API per route (basic title/description on most pages)',
  'an.gsc':             'Not yet submitted',

  // AI
  'ai.features':        'AI photo ID (Gemini Flash) with two-stage feature extraction + deterministic scorer; locality priors; few-shot reference grounding; parcel intel dossier',
  'ai.models':          'Google Gemini (Flash) only — graceful fallback to offline decision-tree ID when no key',
  'ai.vector':          'None',

  // Integrations
  'int.apis':           'NOAA CO-OPS, Open-Meteo, SunCalc, Nominatim, Macrostrat, FEMA NFHL, USFWS CBRS, Paleobiology DB, iNaturalist, Wikimedia Commons',
  'int.webhooks':       'None',
  'int.sdks':           '@upstash/redis / leaflet / react-leaflet / suncalc / better-sqlite3',

  // DevOps
  'dev.ci':             'Cloudflare build on push',
  'dev.actions':        'None yet (Cloudflare handles build)',
  'dev.env':            'GEMINI_API_KEY, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN, EVAL_BASE (eval harness)',
  'dev.secrets':        'Cloudflare project env vars',
  'dev.localdev':       'npm run dev → :3000',
  'dev.lint':           'next lint (default)',
  'dev.tests':          'Vitest 4 (unit) + identify-eval harness (Gemini-backed accuracy test)',
  'dev.types':          'tsconfig.json (strict Next.js TS)',

  // Monitoring
  'mon.uptime':         'Cloudflare native',
  'mon.errors':         'None',
  'mon.logs':           'Cloudflare function logs + Upstash Redis tail (feedback)',
  'mon.alerts':         'None',

  // Security
  'sec.https':          'Forced (Cloudflare)',
  'sec.hsts':           'Cloudflare default (no custom HSTS header yet)',
  'sec.frame':          'Not set (TODO — add via next.config.js headers)',
  'sec.nosniff':        'Not set (TODO)',
  'sec.permissions':    'Not set — geolocation is requested on /map for nearest-location feature',
  'sec.csp':            'Not set',
  'sec.cache':          'Cloudflare default',
  'sec.bot':            'Cloudflare default',
  'sec.ddos':           'Cloudflare platform',

  // Legal
  'leg.privacy':        'Not yet published — needed before any account/sync features ship',
  'leg.terms':          'Not yet published',
  'leg.cookies':        'Not needed (no tracking cookies; analytics is first-party)',
  'leg.pii':            'None server-side beyond optional ID feedback (no name/email); uploaded tooth photos are processed in-flight and hashed (SHA-256) for feedback log',
  'leg.gdpr':           'No accounts; logbook lives in user’s IndexedDB; feedback list is anonymous',

  // Misc
  'misc.editorial':     'Beachy / utilitarian / generous (free + open) — fast offline-first PWA',
  'misc.conventions':   'Two-stage identifier (Stage A Gemini feature extraction → Stage B deterministic scorer); locality + ubiquity priors; SPECIES_PHOTO_CATALOG few-shot grounding; "trust the AI, improve the primitive" principle',
  'misc.todos':         'Buy toothhound.app domain; add security headers via next.config.js; ship privacy policy; auto-generate OG images per location/species; submit sitemap to Search Console; curated eval corpus',
};

export default data;
