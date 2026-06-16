// SageCG — venture studio marketing site.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'SageCG',
  'id.legal':           'Sage Consulting Group, Inc.',
  'id.type':            'Venture studio marketing site',
  'id.status':          'Live in production',
  'id.stage':           'Operating since 1998 (site relaunched 2025)',
  'id.sector':          'Venture studio / portfolio holding',
  'id.domain':          'www.sagecg.com',
  'id.apex':            'sagecg.com → www (301 Cloudflare Redirect Rule)',
  'id.tagline':         "We build the companies we'd want to run.",
  'id.founder':         'Rob Pfleghardt (rob637)',

  // Repo & Source
  'repo.github':        'rob637/sagecg',
  'repo.branch':        'main',
  'repo.license':       'Private / unlicensed',
  'repo.language':      'TypeScript + Astro components',
  'repo.pm':            'npm',
  'repo.node':          '20 (.nvmrc)',
  'repo.monorepo':      'No — single repo',

  // Frontend
  'fe.framework':       'Astro 5.18 (static output)',
  'fe.uilib':           'None (Astro components only, no React/Vue/Svelte)',
  'fe.styling':         'Tailwind CSS v4 via @tailwindcss/vite',
  'fe.tokens':          'CSS variables in src/styles/global.css (paper, ink, accent, rule, muted)',
  'fe.content':         'MDX + Markdown via @astrojs/mdx',
  'fe.fonts':           ['Fraunces (display serif)', 'Inter (UI)', 'JetBrains Mono (mono)'],
  'fe.fontdelivery':    'Google Fonts (preconnect)',
  'fe.icons':           'Inline SVG, no icon library',
  'fe.palette':         'Cream #faf9f6, ink #0c0a09, amber #b45309 + per-company accents',
  'fe.darkmode':        'No (intentional editorial light)',

  // Backend
  'be.runtime':         'None — fully static build',
  'be.api':             'None',
  'be.jobs':            'None',
  'be.functions':       'None (could add Cloudflare Workers later)',

  // Data
  'data.db':            'None',
  'data.orm':           'N/A',
  'data.source':        'Local Markdown in src/content/portfolio/*.md',
  'data.schema':        'src/content.config.ts (Astro content collections + Zod)',
  'data.storage':       'public/ folder, served from Cloudflare Pages',
  'data.cms':           'None (Git is the CMS)',

  // Hosting
  'host.hosting':       'Cloudflare Pages (project: sagecg @ sagecg.pages.dev)',
  'host.build':         'npm run build',
  'host.output':        'dist/',
  'host.cache':         'Enabled',
  'host.cdn':           'Cloudflare global edge',
  'host.dns':           'Cloudflare (nameservers: john + lindsey.ns.cloudflare.com)',
  'host.registrar':     'GoDaddy (domain still registered there)',
  'host.ssl':           'Cloudflare Universal SSL — Active on both apex + www',
  'host.deploy':        'Push to GitHub main',
  'host.preview':       'Per-branch via Cloudflare Pages',

  // Auth
  'auth.user':          'None (public marketing site)',
  'auth.admin':         'Build-gated admin route (PUBLIC_ENABLE_ADMIN=true) intended for edge-protected internal access',
  'auth.sso':           'N/A',

  // Email
  'email.provider':     'Google Workspace',
  'email.records':      'MX/SPF/DKIM/DMARC configured via Google + Cloudflare',
  'email.primary':      'hello@sagecg.com',
  'email.secondary':    'careers@sagecg.com',
  'email.founder':      'rob@sagecg.com',
  'email.transactional':'None',
  'email.aliases':      'hello, careers, support, rpflegha (via Google Admin)',

  // Payments
  'pay.processor':      'None',
  'pay.subs':           'None',
  'pay.pricing':        'N/A',

  // Analytics & SEO
  'an.web':             'None yet (Cloudflare Web Analytics planned)',
  'an.product':         'N/A',
  'an.sitemap':         '@astrojs/sitemap → /sitemap-index.xml',
  'an.robots':          'public/robots.txt (allow all except /admin, points to sitemap-index.xml)',
  'an.jsonld':          'JSON-LD: Organization, WebSite, BreadcrumbList (per portfolio page)',
  'an.og':              '/og.png (generated via scripts/gen-og.mjs)',
  'an.meta':            'title + description + canonical + OG + Twitter wired through Layout.astro',
  'an.gsc':             'Submitted',

  // AI / ML
  'ai.features':        'None on production site',
  'ai.models':          'N/A',
  'ai.vector':          'N/A',

  // Integrations
  'int.apis':           'None',
  'int.webhooks':       'None',
  'int.sdks':           'None',

  // DevOps
  'dev.ci':             'Cloudflare Pages build on git push',
  'dev.actions':        'None',
  'dev.env':            'NODE_VERSION=20 (only)',
  'dev.secrets':        'N/A (no secrets in build)',
  'dev.localdev':       'npm run dev → http://localhost:4321',
  'dev.lint':           'None configured',
  'dev.tests':          'None',
  'dev.types':          'tsconfig.json (Astro defaults)',

  // Monitoring
  'mon.uptime':         'Cloudflare native (no external)',
  'mon.errors':         'None',
  'mon.logs':           'Cloudflare Pages deploy logs only',
  'mon.alerts':         'None',

  // Security
  'sec.https':          'Forced via Cloudflare',
  'sec.hsts':           'Yes (public/_headers)',
  'sec.frame':          'DENY (public/_headers)',
  'sec.nosniff':        'nosniff (public/_headers)',
  'sec.permissions':    'Set (public/_headers)',
  'sec.csp':            'Not set (deferred until forms ship)',
  'sec.cache':          'immutable cache for /_astro/* in public/_headers',
  'sec.bot':            'Cloudflare defaults',
  'sec.ddos':           'Cloudflare',

  // Legal
  'leg.privacy':        'Not yet published',
  'leg.terms':          'Not yet published',
  'leg.cookies':        'Not needed (no cookies set)',
  'leg.pii':            'None (no forms yet)',
  'leg.gdpr':           'No personal data collected',

  // Misc
  'misc.editorial':     'Editorial-minimal, light cream paper + amber accent',
  'misc.conventions':   'Per-company accent color; Fraunces italic on emphasized words',
  'misc.todos':         'Founder headshot; Longest Table + NFL Fantasy Auction Draft copy; submit sitemap to Search Console',
};

export default data;
