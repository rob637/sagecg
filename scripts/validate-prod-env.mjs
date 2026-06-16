const truthy = /^(1|true|yes|on)$/i;

const isAdminEnabled = truthy.test(process.env.PUBLIC_ENABLE_ADMIN || '');
const isCloudflarePages = process.env.CF_PAGES === '1';
const branch = process.env.CF_PAGES_BRANCH || '';
const productionBranch = process.env.PRODUCTION_BRANCH || 'main';

const isProductionDeploy =
  process.env.DEPLOY_ENV === 'production' ||
  process.env.VERCEL_ENV === 'production' ||
  process.env.CONTEXT === 'production' ||
  (isCloudflarePages && branch === productionBranch);

if (isProductionDeploy && isAdminEnabled) {
  console.error('');
  console.error('Security check failed: PUBLIC_ENABLE_ADMIN is enabled for a production deployment.');
  console.error('Set PUBLIC_ENABLE_ADMIN=false (or unset it) before deploying to production.');
  console.error(`Detected branch: ${branch || 'unknown'}; production branch: ${productionBranch}.`);
  console.error('');
  process.exit(1);
}

console.log(
  `Env validation passed (production=${isProductionDeploy ? 'yes' : 'no'}, adminEnabled=${isAdminEnabled ? 'yes' : 'no'}).`
);
