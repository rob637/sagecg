// Longest Table — Flask community-dinner table assignment tool.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'Longest Table',
  'id.legal':           '(none — under SageCG)',
  'id.type':            'Flask web app — community-dinner table assignment tool',
  'id.status':          'In development / internal use',
  'id.stage':           'Working prototype (containerized for Cloud Run)',
  'id.sector':          'Community / event ops',
  'id.domain':          'longest-table-403607223387.us-central1.run.app',
  'id.apex':            'Cloud Run default URL only',
  'id.tagline':         'One captain per table; keep groups together; 14 per table.',
  'id.founder':         'Rob Pfleghardt (rob637)',

  // Repo & Source
  'repo.github':        'rob637/Zero (subdir longest-table/)',
  'repo.branch':        'main',
  'repo.license':       'Private / unlicensed',
  'repo.language':      'Python 3 (Flask)',
  'repo.pm':            'pip (requirements.txt)',
  'repo.node':          'N/A (Python)',
  'repo.monorepo':      'Lives inside Zero monorepo',

  // Frontend
  'fe.framework':       'Server-rendered Jinja2 templates + vanilla JS',
  'fe.uilib':           'Plain HTML/CSS (static/styles.css + static/app.js)',
  'fe.styling':         'Plain CSS (hand-written styles.css)',
  'fe.tokens':          'Minimal utility classes',
  'fe.content':         'TSV signups (data/signups.tsv) + SQLite',
  'fe.fonts':           ['System sans'],
  'fe.fontdelivery':    'System',
  'fe.icons':           'Emoji',
  'fe.palette':         'Neutral',
  'fe.darkmode':        'No',

  // Backend
  'be.runtime':         'Python 3 + Flask + Gunicorn (Cloud Run container)',
  'be.api':             'Flask routes (/api/participants /api/assign /api/reseed)',
  'be.jobs':            'None',
  'be.functions':       'In-process Flask',

  // Data
  'data.db':            'SQLite (data/longest_table.db) — Firestore migration in progress',
  'data.orm':           'None (raw SQL in db.py / store.py)',
  'data.source':        'data/signups.tsv → SQLite',
  'data.schema':        'SQLite schema defined in db.py',
  'data.storage':       'static/ via Flask',
  'data.cms':           'Admin UI in templates/index.html',

  // Hosting
  'host.hosting':       'Google Cloud Run (containerized via Dockerfile)',
  'host.build':         'docker build (Dockerfile → Cloud Run)',
  'host.output':        'N/A (container image)',
  'host.cache':         'Enabled',
  'host.cdn':           'Google Cloud / Cloud Run regional (us-central1)',
  'host.dns':           'Google Cloud (default Cloud Run hostname)',
  'host.registrar':     'N/A',
  'host.ssl':           'Google-managed (Cloud Run)',
  'host.deploy':        'Manual gcloud run deploy from longest-table/',
  'host.preview':       'None',

  // Auth
  'auth.user':          'None — fully client-side / anonymous',
  'auth.admin':         'N/A (network-isolated currently)',
  'auth.sso':           'N/A',

  // Email
  'email.provider':     'Google Workspace (contact: rob@sagecg.com)',
  'email.records':      'N/A',
  'email.primary':      'N/A',
  'email.secondary':    '—',
  'email.founder':      'rob@sagecg.com',
  'email.transactional':'None',
  'email.aliases':      '—',

  // Payments
  'pay.processor':      'None',
  'pay.subs':           'None',
  'pay.pricing':        'N/A',

  // Analytics
  'an.web':             'None',
  'an.product':         'None',
  'an.sitemap':         'N/A',
  'an.robots':          'N/A',
  'an.jsonld':          'None',
  'an.og':              'None',
  'an.meta':            'Single title in base template',
  'an.gsc':             'N/A',

  // AI
  'ai.features':        'None',
  'ai.models':          'N/A',
  'ai.vector':          'N/A',

  // Integrations
  'int.apis':           'Firestore (migration target)',
  'int.webhooks':       'None',
  'int.sdks':           'google-cloud-firestore / flask-cors',

  // DevOps
  'dev.ci':             'Manual gcloud deploy (GH Actions planned)',
  'dev.actions':        'None',
  'dev.env':            'GOOGLE_APPLICATION_CREDENTIALS (service-account.json)',
  'dev.secrets':        'GCP service account JSON (local) → Secret Manager (planned)',
  'dev.localdev':       'python app.py → :5055',
  'dev.lint':           'None',
  'dev.tests':          'pytest (test_assigner.py)',
  'dev.types':          'N/A (Python)',

  // Monitoring
  'mon.uptime':         'Cloud Run native',
  'mon.errors':         'Cloud Run logs',
  'mon.logs':           'Cloud Run logs',
  'mon.alerts':         'None',

  // Security
  'sec.https':          'Forced (Cloud Run)',
  'sec.hsts':           'Cloud Run default',
  'sec.frame':          'Default',
  'sec.nosniff':        'Default',
  'sec.permissions':    'Not set',
  'sec.csp':            'Not set',
  'sec.cache':          'Default',
  'sec.bot':            'Cloud Run default',
  'sec.ddos':           'Cloud Run platform',

  // Legal
  'leg.privacy':        'N/A',
  'leg.terms':          'N/A',
  'leg.cookies':        'N/A',
  'leg.pii':            'Participant names + order IDs (event signups)',
  'leg.gdpr':           'Organizer-owned data; no individual rights workflow yet',

  // Misc
  'misc.editorial':     'Plain / functional / single-purpose',
  'misc.conventions':   'TSV-first data model; rules editable in UI; warnings when constraints violated',
  'misc.todos':         'Finish Firestore migration (replace SQLite); add auth for multi-organizer use; GH Actions deploy pipeline; pytest CI; auto-derive table count is live but needs UI polish',
};

export default data;
