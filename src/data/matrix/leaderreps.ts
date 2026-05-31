// LeaderReps — PD Platform.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'LeaderReps',
  'id.legal':           'Sage Consulting Group LLC',
  'id.type':            'SaaS / Web App',
  'id.status':          'In Market',
  'id.stage':           'Production',
  'id.sector':          'EdTech / Professional Development',
  'id.domain':          'www.leaderreps.com',
  'id.apex':            'leaderreps.com → www',
  'id.tagline':         'Professional development platform for leaders.',
  'id.founder':         'Rob Pfleghardt',

  // Repo & Source
  'repo.github':        'rob637/leaderreps-PDPlatformDev',
  'repo.branch':        'main',
  'repo.license':       'Private',
  'repo.language':      'TypeScript / JavaScript',
  'repo.pm':            'npm',
  'repo.node':          'v20.20.2',
  'repo.monorepo':      'No',

  // Frontend
  'fe.framework':       'React',
  'fe.uilib':           'Custom / Tailwind UI',
  'fe.styling':         'Tailwind CSS',
  'fe.tokens':          'Tailwind Config',
  'fe.fonts':           ['Inter', 'Sans-serif'],
  'fe.icons':           'Lucide / Heroicons',
  'fe.darkmode':        'Yes (System Preference)',

  // Backend
  'be.runtime':         'Firebase Functions (Node.js)',
  'be.api':             'Firestore SDK / Cloud Functions',
  'be.jobs':            'Cloud Tasks / Firebase Scheduled Functions',
  'be.functions':       'Firebase Functions',

  // Data
  'data.db':            'Firebase Firestore (NoSQL)',
  'data.orm':           'None (Firebase SDK)',
  'data.storage':       'Firebase Storage (GCP)',
  'data.auth':          'Firebase Auth',

  // Hosting
  'host.hosting':       'Firebase Hosting / Google Cloud',
  'host.build':         'npm run build',
  'host.dns':           'Cloudflare',
  'host.ssl':           'Managed by Firebase/Cloudflare',
  'host.deploy':        'Push to main (Firebase CLI)',

  // Auth
  'auth.user':          'Firebase Auth (Email/Password + Social)',
  'auth.admin':         'Firestore Security Rules + Custom Claims',

  // Email
  'email.provider':     'Google Workspace / SendGrid',
  'email.primary':      'hello@leaderreps.com',

  // Payments
  'pay.processor':      'Stripe',
  'pay.subs':           'Stripe Billing',
  'pay.pricing':        'Subscription based',

  // Analytics
  'an.web':             'Google Analytics 4',
  'an.product':         'Firebase Analytics',

  // Security
  'sec.https':          'Forced',
  'sec.ddos':           'Cloudflare / Google Cloud Armor',
};

export default data;
