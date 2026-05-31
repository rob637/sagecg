// LeaderReps — PD Platform.
import type { CompanyData } from './_rows';

const data: CompanyData = {
  // Identity
  'id.product':         'LeaderReps',
  'id.legal':           'Sage Consulting Group LLC',
  'id.type':            'SaaS / Web App',
  'id.status':          'Active',
  'id.domain':          'www.leaderreps.com',

  // Repo & Source
  'repo.github':        'rob637/leaderreps-PDPlatformDev',
  'repo.branch':        'main',
  'repo.pm':            'npm',
  'repo.node':          'v20.20.2',

  // Frontend
  'fe.framework':       'React',
  'fe.styling':         'Tailwind CSS',

  // Data
  'data.db':            'Firebase (Firestore)',

  // Hosting
  'host.deploy':        'Push to main',

  // Auth
  'auth.user':          'Firebase Auth',
};

export default data;
