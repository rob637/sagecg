// KindKudos — anonymous kindness app with AI moderation.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'KindKudos',
  'id.legal':           '(none published)',
  'id.type':            'Consumer social web app focused on anonymous compliments',
  'id.status':          'Live in production',
  'id.stage':           'Production',
  'id.sector':          'Consumer Social / Community Wellness',
  'id.domain':          'kindkudos.app',
  'id.tagline':         'Send a little kindness. Anonymously.',
  'id.founder':         'Rob Pfleghardt (rob637)',

  // Repo & Source
  'repo.github':        'Not public',

  // Frontend
  'fe.framework':       'React (production SPA)',

  // Backend
  'be.runtime':         'Serverless endpoints via Google Cloud Functions',
  'be.api':             'HTTP endpoints (including admin API)',
  'be.functions':       'us-central1-kindkudos-prod.cloudfunctions.net',

  // Hosting
  'host.hosting':       'Custom web hosting on kindkudos.app with Cloud Functions backend',
  'host.cdn':           'Production web app served via static assets',
  'host.ssl':           'HTTPS enabled',

  // Auth
  'auth.user':          'Anonymous sender flow (recipient identity not exposed)',
  'auth.admin':         'Admin token-protected moderation endpoint',

  // Email
  'email.primary':      'hello@kindkudos.app',

  // Analytics
  'an.robots':          'Likely SPA default (not visibly customized)',
  'an.og':              'Configured (og-image.png)',
  'an.meta':            'Title/description and social meta configured',

  // AI
  'ai.features':        'Message kindness screening before delivery',
  'ai.models':          'Google Gemini (moderation)',

  // Integrations
  'int.apis':           'Google Cloud Functions + Google Gemini',

  // Security
  'sec.https':          'Enabled',

  // Legal
  'leg.privacy':        'Published at /privacy',

  // Misc
  'misc.editorial':     'Privacy-first, positive social product with explicit anonymity posture',
};

export default data;