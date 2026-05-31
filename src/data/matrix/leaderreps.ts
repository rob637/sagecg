// LeaderReps — PD Platform.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'LeaderReps',
  'id.legal':           'Sage Consulting Group LLC (operating brand)',
  'id.type':            'PWA — cohort-based leadership development platform',
  'id.status':          'In market (active cohorts)',
  'id.stage':           'Production (dev / test / prod environments)',
  'id.sector':          'EdTech / Professional Development / Leadership Coaching',
  'id.domain':          'www.leaderreps.com',
  'id.apex':            'leaderreps.com → www (Firebase Hosting redirect)',
  'id.tagline':         'Professional development platform for leaders — daily practice, not occasional events',
  'id.founder':         'Rob Pfleghardt (rob637)',

  // Repo & Source
  'repo.github':        'rob637/leaderreps-PDPlatformDev',
  'repo.branch':        'main',
  'repo.license':       'Private / unlicensed',
  'repo.language':      'JavaScript (JSX) — explicitly no TypeScript',
  'repo.pm':            'npm',
  'repo.node':          '>=20.x (currently v20.20.2)',
  'repo.monorepo':      'Single repo, but hosts sub-apps (corporate, reppy, passcpa, kudos, etc.)',

  // Frontend
  'fe.framework':       'React 18.3 (functional components + hooks)',
  'fe.uilib':           'Custom in-house UI kit (uiKit.jsx) + lucide-react icons',
  'fe.styling':         'Tailwind CSS 3 (darkMode: class)',
  'fe.tokens':          'Colors: #002E47, #47A88D, #E04E1B; custom shadows shadow-card, shadow-card-hover',
  'fe.content':         'Firestore documents (no MDX)',
  'fe.fonts':           ['Nunito Sans'],
  'fe.fontdelivery':    'Google Fonts (preconnect)',
  'fe.icons':           'lucide-react (named imports)',
  'fe.palette':         'Navy / Teal / Orange brand',
  'fe.darkmode':        'Yes (class-based via ThemeProvider)',

  // Backend
  'be.runtime':         'Firebase Cloud Functions (Node 20)',
  'be.api':             'Firestore SDK (client-direct) + callable/HTTP Cloud Functions',
  'be.jobs':            'Firebase Scheduled Functions (daily rollover, notification checks)',
  'be.functions':       'index.js (CommonJS)',

  // Data
  'data.db':            'Firebase Firestore (NoSQL)',
  'data.orm':           'None (Firebase SDK)',
  'data.source':        'Firestore collections (users, metadata, content-groups, cohorts, config)',
  'data.schema':        'Service layer guards + Firestore security rules',
  'data.storage':       'Firebase Storage (GCP bucket)',
  'data.cms':           'In-app admin screens (admin) using Firestore',

  // Hosting
  'host.hosting':       'Firebase Hosting / Google Cloud (multi-site targets)',
  'host.build':         'npm run deploy:[env] (Vite 5 / Vite-plugin-pwa)',
  'host.output':        'build',
  'host.cache':         'Workbox runtime caching + immutable 1y for hashed assets',
  'host.cdn':           'Firebase Hosting / Google global edge',
  'host.dns':           'Cloudflare (DNS-only for Firebase Hosting)',
  'host.registrar':     'GoDaddy',
  'host.ssl':           'Firebase Hosting managed certificates',
  'host.deploy':        'Manual via deploy.sh (env-validated) + GH Actions',
  'host.preview':       'None (env separation enforced via deploy script)',

  // Auth
  'auth.user':          'Firebase Auth (Email/Password)',
  'auth.admin':         'Firestore rules + hardcoded/dynamic admin list (metadata/config)',
  'auth.sso':           'None currently',

  // Email
  'email.provider':     'Google Workspace',
  'email.records':      'Configured via Google Workspace + Cloudflare DNS',
  'email.primary':      'hello@leaderreps.com',
  'email.secondary':    'None',
  'email.founder':      'rob@leaderreps.com',
  'email.transactional':'Not currently wired (SendGrid/Mailgun placeholder)',
  'email.aliases':      'None listed',

  // Payments
  'pay.processor':      'None integrated (Stripe planned)',
  'pay.subs':           'Stripe Billing (planned)',
  'pay.pricing':        'Subscription based',

  // Analytics
  'an.web':             'Firebase Analytics + Google Analytics 4',
  'an.product':         'Firebase Analytics events + custom Firestore logs',
  'an.sitemap':         'N/A (auth-gated PWA)',
  'an.robots':          'Restrictive robots.txt (private app)',
  'an.jsonld':          'None',
  'an.og':              'Generic brand OG in public/',
  'an.meta':            'SPA meta in index.html',

  // AI
  'ai.features':        'Rep AI Coach, AI-scored reps, AI-recommended practice, transcript scoring',
  'ai.models':          'Google Gemini (primary) + Anthropic Claude (fallback)',
  'ai.vector':          'None',

  // Integrations
  'int.apis':           'YouTube, Vimeo, Loom, Google Books',
  'int.webhooks':       'None',
  'int.sdks':           'Firebase, Gemini, Anthropic, OpenAI, Recharts, Framer Motion',

  // DevOps
  'dev.ci':             'GitHub Actions (build-and-deploy.yml, e2e-tests.yml)',
  'dev.actions':        'build-and-deploy, e2e-tests',
  'dev.env':            'VITE_FIREBASE_*, VITE_ADMIN_EMAILS, VITE_GEMINI_API_KEY',
  'dev.secrets':        'Firebase Functions Secrets (Google Secret Manager)',
  'dev.localdev':       'npm run dev → Vite',
  'dev.lint':           'ESLint 8 + Prettier 3',
  'dev.tests':          'Vitest 4 (unit) + Playwright 1.57 (e2e)',
  'dev.types':          'None (plain JS)',

  // Monitoring
  'mon.uptime':         'Firebase Hosting native',
  'mon.errors':         'None integrated (relies on console / cloud logs)',
  'mon.logs':           'Google Cloud Logging + Firebase Hosting logs',
  'mon.alerts':         'Firebase / GCP default budget + error alerts',

  // Security
  'sec.https':          'Forced (Firebase Hosting)',
  'sec.hsts':           'Yes (max-age=63072000; includeSubDomains; preload)',
  'sec.frame':          'DENY',
  'sec.nosniff':        'nosniff',
  'sec.permissions':    'Set (geolocation=(), microphone=(self), camera=(), payment=())',
  'sec.csp':            'Full policy in firebase.json',
  'sec.cache':          'immutable 1y for hashed assets',
  'sec.bot':            'Cloudflare DNS + Google Cloud Armor',
  'sec.ddos':           'Google Cloud Armor (Firebase Hosting default)',

  // Legal
  'leg.privacy':        'Not yet linked in-app',
  'leg.terms':          'Not yet linked in-app',
  'leg.cookies':        'First-party only (auth)',
  'leg.pii':            'User profile, assessments, daily journals, reflection content, AI history',
  'leg.gdpr':           'Per-user export/delete available via admin tools',

  // Misc
  'misc.editorial':     'Progressive Web App; cohort-based leadership daily daily workflow',
  'misc.conventions':   'AppServiceContext (provider tree), Service layer (DataProvider)',
  'misc.todos':         'Cleanup debug scripts; Extract sub-apps; Wire Stripe; Ext error tracking',
};

export default data;
