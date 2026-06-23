// Gridiron X&O — freemium strategic football-learning game ("teach the game
// from layman to mastery"). Verified from the rob637/Playground codespace audit.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'Gridiron X&O',
  'id.legal':           '(none — under SageCG)',
  'id.type':            'React SPA — strategic fantasy-football learning game',
  'id.status':          'Live in production',
  'id.stage':           'Production (freemium, live)',
  'id.sector':          'Consumer / Sports EdTech / Gaming',
  'id.domain':          'gridiron-xo.pages.dev',
  'id.apex':            'gridiron-xo.pages.dev (Cloudflare Pages)',
  'id.tagline':         'Football strategy, from layman to mastery.',
  'id.founder':         'Rob Pfleghardt (rob637)',

  // Repo & Source
  'repo.github':        'rob637/Playground',
  'repo.branch':        'main',
  'repo.license':       'Private (no LICENSE file)',
  'repo.language':      'TypeScript / React',
  'repo.pm':            'npm',
  'repo.node':          'No .nvmrc / engines pinned',
  'repo.monorepo':      'No',

  // Frontend
  'fe.framework':       'React 18.3 (Vite 6 SPA)',
  'fe.uilib':           'framer-motion 11 + canvas-confetti',
  'fe.styling':         'Pure CSS with CSS custom properties',
  'fe.tokens':          'CSS variables for design consistency',
  'fe.content':         'TS data modules (e.g. levels.ts)',
  'fe.fonts':           ['Caveat', 'Fraunces', 'Inter'],
  'fe.fontdelivery':    'Google Fonts (@import)',
  'fe.darkmode':        'Dark-first (theme-color #1a3a2a)',

  // Backend
  'be.runtime':         'Supabase (BaaS)',
  'be.api':             'Supabase JS client (Postgres + Auth)',
  'be.functions':       'None observed (no Edge Functions client code)',

  // Data
  'data.db':            'Supabase Postgres w/ RLS (progress, share_cards, profiles)',
  'data.source':        'Supabase + bundled lesson content (levels.ts)',
  'data.storage':       'None observed',
  'data.cms':           'None (Git is the CMS)',

  // Hosting
  'host.hosting':       'Cloudflare Pages',
  'host.build':         'Vite (npm run build)',
  'host.output':        'dist/',
  'host.cdn':           'Cloudflare',
  'host.ssl':           'Cloudflare Universal SSL (HTTPS forced)',
  'host.deploy':        'wrangler pages deploy (main branch)',
  'host.preview':       'Per-branch',

  // Auth
  'auth.user':          'Supabase Auth — Google OAuth',
  'auth.admin':         'None',

  // Payments
  'pay.processor':      'Unconfirmed (paywall gate present)',
  'pay.subs':           'Unconfirmed',
  'pay.pricing':        'Freemium — free early units, paywall for full curriculum',

  // Analytics
  'an.web':             'None',
  'an.sitemap':         'None',
  'an.jsonld':          'None',
  'an.og':              'None',
  'an.meta':            'Hardcoded <title> only',

  // AI
  'ai.features':        'None (deterministic seeded game engine, no LLM)',

  // Security
  'sec.https':          'Forced',

  // Legal
  'leg.privacy':        'None implemented',
  'leg.terms':          'None implemented',

  // Misc
  'misc.editorial':     'Chalkboard/coach-voice teaching; campaign map, drill minigames, deterministic scrimmage engine, shareable Coach Cards (/u/[handle])',
};

export default data;
