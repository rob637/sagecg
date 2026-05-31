// Football Draft — casual fantasy football draft tool.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'Football Draft',
  'id.legal':           '(none — under SageCG)',
  'id.type':            'React PWA — casual fantasy football draft tool',
  'id.status':          'Live in production / maintenance',
  'id.stage':           'Production (site relaunched 2024; legacy code maintenance)',
  'id.sector':          'Sports / Entertainment / Fantasy Football',
  'id.domain':          'footballdraft.app',
  'id.apex':            'footballdraft.app → www (301 via Cloudflare)',
  'id.tagline':         'Start the draft already.',
  'id.founder':         'Rob Pfleghardt (rob637)',

  // Repo & Source
  'repo.github':        'rob637/football-draft',
  'repo.branch':        'main',
  'repo.license':       'Private / unlicensed',
  'repo.language':      'JavaScript (plain React)',
  'repo.pm':            'npm',
  'repo.node':          '18.x',
  'repo.monorepo':      'No',

  // Frontend
  'fe.framework':       'React 18 (SPA)',
  'fe.uilib':           'Custom CSS + plain HTML',
  'fe.styling':         'Material Design (legacy MUI-like styles, custom)',
  'fe.tokens':          'CSS variables for brand colors',
  'fe.content':         'JSON files (player lists)',
  'fe.fonts':           ['Roboto'],
  'fe.fontdelivery':    'Google Fonts',
  'fe.icons':           'Material Icons',
  'fe.palette':         'Teal / Amber / Carbon',
  'fe.darkmode':        'No',

  // Backend
  'be.runtime':         'None (fully client-side)',
  'be.api':             'None',
  'be.jobs':            'None',
  'be.functions':       'None',

  // Data
  'data.db':            'localStorage (draft state)',
  'data.orm':           'N/A',
  'data.source':        'Local JSON (src/data/players.json)',
  'data.schema':        'Client-side JS objects',
  'data.storage':       'N/A',
  'data.cms':           'None (Git is the CMS)',

  // Hosting
  'host.hosting':       'Cloudflare Pages',
  'host.build':         'npm run build',
  'host.output':        'build/',
  'host.cache':         'Enabled',
  'host.cdn':           'Cloudflare',
  'host.dns':           'Cloudflare',
  'host.registrar':     'GoDaddy',
  'host.ssl':           'Cloudflare Universal SSL',
  'host.deploy':        'Push to main',
  'host.preview':       'Per-branch',

  // Auth
  'auth.user':          'None',
  'auth.admin':         'None',
  'auth.sso':           'N/A',

  // Email
  'email.provider':     'Google Workspace',
  'email.records':      'MX/SPF/DKIM/DMARC configured',
  'email.primary':      'hello@footballdraft.app',
  'email.secondary':    '—',
  'email.founder':      'rob@sagecg.com',
  'email.transactional':'None',
  'email.aliases':      'hello, rob',

  // Payments
  'pay.processor':      'None',
  'pay.subs':           'None',
  'pay.pricing':        'Free',

  // Analytics
  'an.web':             'Google Analytics 4',
  'an.product':         'N/A',
  'an.sitemap':         'None',
  'an.robots':          'public/robots.txt',
  'an.jsonld':          'None',
  'an.og':              'Basic OG images',
  'an.meta':            'Title / Description in index.html',
  'an.gsc':             'Submitted',

  // AI
  'ai.features':        'None',
  'ai.models':          'N/A',
  'ai.vector':          'N/A',

  // Integrations
  'int.apis':           'None',
  'int.webhooks':       'None',
  'int.sdks':           'None',

  // DevOps
  'dev.ci':             'Cloudflare Pages build',
  'dev.actions':        'None',
  'dev.env':            'NODE_VERSION=18',
  'dev.secrets':        'None',
  'dev.localdev':       'npm start',
  'dev.lint':           'None',
  'dev.tests':          'None',
  'dev.types':          'None (JS only)',

  // Monitoring
  'mon.uptime':         'Cloudflare native',
  'mon.errors':         'None',
  'mon.logs':           'Cloudflare logs',
  'mon.alerts':         'None',

  // Security
  'sec.https':          'Forced',
  'sec.hsts':           'Yes',
  'sec.frame':          'DENY',
  'sec.nosniff':        'nosniff',
  'sec.permissions':    'Set',
  'sec.csp':            'Not set',
  'sec.cache':          'Immutable for assets',
  'sec.bot':            'Cloudflare defaults',
  'sec.ddos':           'Cloudflare',

  // Legal
  'leg.privacy':        'Published',
  'leg.terms':          'Published',
  'leg.cookies':        'None',
  'leg.pii':            'None',
  'leg.gdpr':           'N/A',

  // Misc
  'misc.editorial':     'Lightweight / fast / functional',
  'misc.conventions':   'Offline-first via service worker',
  'misc.todos':         'Update player data for 2025 season; Migrate to Tailwind',
};

export default data;
