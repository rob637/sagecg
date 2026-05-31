// VoraPrep — AI-powered professional exam prep (passcpa repo).
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'VoraPrep',
  'id.legal':           'VoraPrep LLC',
  'id.type':            'EdTech SaaS — AI-powered professional exam prep',
  'id.status':          'Live in production',
  'id.stage':           'Production (dev / staging / prod environments)',
  'id.sector':          'EdTech / Professional Certification Exam Prep',
  'id.domain':          'voraprep.com',
  'id.apex':            'apex + www both served (Firebase Hosting)',
  'id.tagline':         'AI-powered exam prep that gets you to 75+',
  'id.founder':         'Rob Pfleghardt (rob637)',

  // Repo & Source
  'repo.github':        'rob637/passcpa',
  'repo.branch':        'main (active dev on develop)',
  'repo.license':       'Private / unlicensed',
  'repo.language':      'TypeScript + React (strict mode)',
  'repo.pm':            'npm',
  'repo.node':          '20 (Functions runtime: nodejs22)',
  'repo.monorepo':      'No — single repo; includes blog (Astro), functions, android, ios',

  // Frontend
  'fe.framework':       'React 18.2 + Vite 5 (SPA, lazy-loaded routes)',
  'fe.uilib':           'Custom components + lucide-react + Recharts + Framer Motion',
  'fe.styling':         'Tailwind CSS 3 (darkMode: class) + clsx',
  'fe.tokens':          'Google-inspired: primary (blue), success, warning, error',
  'fe.content':         'TypeScript modules + JSON (questions, lessons, flashcards)',
  'fe.fonts':           ['System font stack'],
  'fe.fontdelivery':    'N/A',
  'fe.icons':           'lucide-react (individual imports)',
  'fe.palette':         'Blue (primary) / Red / Amber / Green',
  'fe.darkmode':        'Yes (class-based via ThemeProvider)',

  // Backend
  'be.runtime':         'Firebase Cloud Functions Gen 2 (Node.js 22, CommonJS)',
  'be.api':             'Firestore SDK (client-direct) + onCall / onRequest functions',
  'be.jobs':            'Firebase Scheduled Functions (daily reminders, drips, reports)',
  'be.functions':       'index.js — Stripe, email, notifications, sitemap, RSS, trial expirations',

  // Data
  'data.db':            'Firebase Firestore (NoSQL, multi-environment projects)',
  'data.orm':           'None (Firebase SDK)',
  'data.source':        'Static TS/JSON in src/data/{course}/ + Firestore (user state)',
  'data.schema':        'Enforced via TS types + Firestore security rules',
  'data.storage':       'Firebase Storage',
  'data.cms':           'None — Git for content; in-app admin for users',

  // Hosting
  'host.hosting':       'Firebase Hosting (multi-site targets, separate staging/prod)',
  'host.build':         'npm run build:prod (Vite 5 + vite-plugin-pwa)',
  'host.output':        'dist',
  'host.cache':         'Workbox runtime caching; immutable 1y for hashed assets',
  'host.cdn':           'Firebase Hosting / Google global edge',
  'host.dns':           'Cloudflare (DNS-only) → Firebase Hosting',
  'host.registrar':     'GoDaddy',
  'host.ssl':           'Firebase Hosting managed certificates',
  'host.deploy':        'GitHub Actions (deploy.yml) + manual deploy.sh',
  'host.preview':       'None',

  // Auth
  'auth.user':          'Firebase Auth (Email/Password, Google)',
  'auth.admin':         'isAdmin flag on Firestore user doc + security rules',
  'auth.sso':           'None',

  // Email
  'email.provider':     'Google Workspace',
  'email.records':      'Configured via Google Workspace + Cloudflare DNS',
  'email.primary':      'hello@voraprep.com',
  'email.secondary':    '—',
  'email.founder':      'rob@voraprep.com',
  'email.transactional':'Resend (from Cloud Functions: welcome, reports, drips)',
  'email.aliases':      '—',

  // Payments
  'pay.processor':      'Stripe (Checkout Sessions + Webhooks) — LIVE',
  'pay.subs':           'Stripe Customer Portal',
  'pay.pricing':        'Multi-tier subscription per course',

  // Analytics
  'an.web':             'Firebase Analytics + Google Analytics 4 + Google Ads tag',
  'an.product':         'Firebase Analytics events + custom Firestore activity logs',
  'an.sitemap':         'Dynamic — Cloud Function dynamicSitemap serves /sitemap.xml',
  'an.robots':          'Public marketing pages allowed; auth routes noindex, follow',
  'an.jsonld':          'Per-page in blog (Astro); SPA meta in index.html',
  'an.og':              'Per-course/per-page OG images',
  'an.meta':            'Meta in index.html + blog sub-site',
  'an.gsc':             'Submitted',

  // AI
  'ai.features':        'AI Tutor, adaptive question recommendation, score predictor, why-wrong explanations',
  'ai.models':          'Google Gemini (primary)',
  'ai.vector':          'None',

  // Integrations
  'int.apis':           'Stripe, Resend, Google Gemini, Firebase, FCM (push)',
  'int.webhooks':       'Stripe webhook (stripeWebhook)',
  'int.sdks':           'firebase 12, Stripe.js, Recharts, Framer Motion, DOMPurify, react-markdown',

  // DevOps
  'dev.ci':             'GitHub Actions (ci.yml, deploy.yml, android-build.yml, etc.)',
  'dev.actions':        'deploy, android-build, deploy-blog, secret-scan, drips',
  'dev.env':            'VITE_FIREBASE_*, VITE_GEMINI_API_KEY, VITE_ENVIRONMENT',
  'dev.secrets':        'Firebase Functions Secrets (Google Secret Manager)',
  'dev.localdev':       'npm run dev (Vite with content sync)',
  'dev.lint':           'ESLint 8 (flat config) + Prettier 3',
  'dev.tests':          'Vitest 1 (unit) + Playwright 1.58 (e2e)',
  'dev.types':          'TypeScript 5.9 strict (tsc --noEmit)',

  // Monitoring
  'mon.uptime':         'Firebase Hosting native',
  'mon.errors':         'None integrated (relies on Google Cloud Logging)',
  'mon.logs':           'Google Cloud Logging + Firebase Hosting logs',
  'mon.alerts':         'Firebase / GCP default budget + error alerts',

  // Security
  'sec.https':          'Forced (Firebase Hosting)',
  'sec.hsts':           'Yes (Firebase Hosting default)',
  'sec.frame':          'DENY',
  'sec.nosniff':        'nosniff',
  'sec.permissions':    'Not explicitly set in firebase.json',
  'sec.csp':            'Full CSP set (Stripe, GA, Google Ads, Firebase, Gemini)',
  'sec.cache':          'immutable 1y for hashed assets; 1d SWR for /data/*.json',
  'sec.bot':            'Cloudflare DNS + Firebase Hosting',
  'sec.ddos':           'Google Cloud Armor (Firebase Hosting default)',

  // Legal
  'leg.privacy':        'Published',
  'leg.terms':          'Published',
  'leg.cookies':        'First-party only (auth + analytics)',
  'leg.pii':            'User profile, study activity, question history, payment metadata',
  'leg.gdpr':           'User export/delete via admin tools',

  // Misc
  'misc.editorial':     'PWA + native mobile (Capacitor 8 — Android + iOS)',
  'misc.conventions':   'Provider tree; AdaptiveEngine; content registry as single source of truth',
  'misc.todos':         'Sentry/error tracking; Extract sub-apps; iOS App Store submission',
};

export default data;
