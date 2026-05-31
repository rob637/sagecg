// Row definitions: ordered sections + rows with stable keys.
// Each company file (./companies/{id}.ts) provides a Record<rowKey, Cell>.
// Keep keys stable — renaming a key orphans data in every company file.

export type Cell = string | string[] | null;

export interface RowDef {
  key: string;
  label: string;
}

export interface SectionDef {
  title: string;
  rows: RowDef[];
}

export const sectionDefs: SectionDef[] = [
  {
    title: 'Identity',
    rows: [
      { key: 'id.product',        label: 'Product / brand' },
      { key: 'id.legal',          label: 'Legal entity' },
      { key: 'id.type',           label: 'Type' },
      { key: 'id.status',         label: 'Status' },
      { key: 'id.stage',          label: 'Stage' },
      { key: 'id.sector',         label: 'Sector' },
      { key: 'id.domain',         label: 'Primary domain' },
      { key: 'id.apex',           label: 'Apex behavior' },
      { key: 'id.tagline',        label: 'Tagline' },
      { key: 'id.founder',        label: 'Founder / operator' },
    ],
  },
  {
    title: 'Repo & Source',
    rows: [
      { key: 'repo.github',       label: 'GitHub repo' },
      { key: 'repo.branch',       label: 'Default branch' },
      { key: 'repo.license',      label: 'License' },
      { key: 'repo.language',     label: 'Primary language' },
      { key: 'repo.pm',           label: 'Package manager' },
      { key: 'repo.node',         label: 'Node version' },
      { key: 'repo.monorepo',     label: 'Monorepo?' },
    ],
  },
  {
    title: 'Frontend',
    rows: [
      { key: 'fe.framework',      label: 'Framework' },
      { key: 'fe.uilib',          label: 'UI library' },
      { key: 'fe.styling',        label: 'Styling' },
      { key: 'fe.tokens',         label: 'Design tokens' },
      { key: 'fe.content',        label: 'Content format' },
      { key: 'fe.fonts',          label: 'Fonts' },
      { key: 'fe.fontdelivery',   label: 'Font delivery' },
      { key: 'fe.icons',          label: 'Icons' },
      { key: 'fe.palette',        label: 'Color palette' },
      { key: 'fe.darkmode',       label: 'Dark mode' },
    ],
  },
  {
    title: 'Backend / Runtime',
    rows: [
      { key: 'be.runtime',        label: 'Server runtime' },
      { key: 'be.api',            label: 'API layer' },
      { key: 'be.jobs',           label: 'Background jobs' },
      { key: 'be.functions',      label: 'Functions / workers' },
    ],
  },
  {
    title: 'Data',
    rows: [
      { key: 'data.db',           label: 'Database' },
      { key: 'data.orm',          label: 'ORM' },
      { key: 'data.source',       label: 'Content source' },
      { key: 'data.schema',       label: 'Content schema' },
      { key: 'data.storage',      label: 'File / asset storage' },
      { key: 'data.cms',          label: 'CMS' },
    ],
  },
  {
    title: 'Hosting & Infra',
    rows: [
      { key: 'host.hosting',      label: 'Hosting' },
      { key: 'host.build',        label: 'Build command' },
      { key: 'host.output',       label: 'Output directory' },
      { key: 'host.cache',        label: 'Build cache' },
      { key: 'host.cdn',          label: 'CDN / edge' },
      { key: 'host.dns',          label: 'DNS' },
      { key: 'host.registrar',    label: 'Registrar' },
      { key: 'host.ssl',          label: 'SSL' },
      { key: 'host.deploy',       label: 'Deploy trigger' },
      { key: 'host.preview',      label: 'Preview deploys' },
    ],
  },
  {
    title: 'Auth',
    rows: [
      { key: 'auth.user',         label: 'End-user auth' },
      { key: 'auth.admin',        label: 'Admin auth' },
      { key: 'auth.sso',          label: 'SSO / IdP' },
    ],
  },
  {
    title: 'Email',
    rows: [
      { key: 'email.provider',    label: 'Mailbox provider' },
      { key: 'email.records',     label: 'MX / SPF / DKIM / DMARC' },
      { key: 'email.primary',     label: 'Primary inbox' },
      { key: 'email.secondary',   label: 'Secondary inbox' },
      { key: 'email.founder',     label: 'Founder inbox' },
      { key: 'email.transactional', label: 'Transactional email' },
      { key: 'email.aliases',     label: 'Email routing aliases' },
    ],
  },
  {
    title: 'Payments / Billing',
    rows: [
      { key: 'pay.processor',     label: 'Payment processor' },
      { key: 'pay.subs',          label: 'Subscription mgmt' },
      { key: 'pay.pricing',       label: 'Pricing page' },
    ],
  },
  {
    title: 'Analytics & SEO',
    rows: [
      { key: 'an.web',            label: 'Web analytics' },
      { key: 'an.product',        label: 'Product analytics' },
      { key: 'an.sitemap',        label: 'Sitemap' },
      { key: 'an.robots',         label: 'robots.txt' },
      { key: 'an.jsonld',         label: 'Structured data' },
      { key: 'an.og',             label: 'OG image' },
      { key: 'an.meta',           label: 'Per-page meta' },
      { key: 'an.gsc',            label: 'Search Console' },
    ],
  },
  {
    title: 'AI / ML',
    rows: [
      { key: 'ai.features',       label: 'AI features' },
      { key: 'ai.models',         label: 'Models / providers' },
      { key: 'ai.vector',         label: 'Vector DB' },
    ],
  },
  {
    title: 'Third-party integrations',
    rows: [
      { key: 'int.apis',          label: 'External APIs' },
      { key: 'int.webhooks',      label: 'Webhooks' },
      { key: 'int.sdks',          label: 'SDKs embedded' },
    ],
  },
  {
    title: 'DevOps & Tooling',
    rows: [
      { key: 'dev.ci',            label: 'CI/CD' },
      { key: 'dev.actions',       label: 'GitHub Actions' },
      { key: 'dev.env',           label: 'Env vars' },
      { key: 'dev.secrets',       label: 'Secrets management' },
      { key: 'dev.localdev',      label: 'Local dev command' },
      { key: 'dev.lint',          label: 'Lint / format' },
      { key: 'dev.tests',         label: 'Tests' },
      { key: 'dev.types',         label: 'Type checking' },
    ],
  },
  {
    title: 'Monitoring & Observability',
    rows: [
      { key: 'mon.uptime',        label: 'Uptime monitor' },
      { key: 'mon.errors',        label: 'Error tracking' },
      { key: 'mon.logs',          label: 'Logs' },
      { key: 'mon.alerts',        label: 'Alerts' },
    ],
  },
  {
    title: 'Security',
    rows: [
      { key: 'sec.https',         label: 'HTTPS' },
      { key: 'sec.hsts',          label: 'HSTS' },
      { key: 'sec.frame',         label: 'X-Frame-Options' },
      { key: 'sec.nosniff',       label: 'X-Content-Type-Options' },
      { key: 'sec.permissions',   label: 'Permissions-Policy' },
      { key: 'sec.csp',           label: 'CSP' },
      { key: 'sec.cache',         label: 'Cache headers' },
      { key: 'sec.bot',           label: 'Bot protection' },
      { key: 'sec.ddos',          label: 'DDoS protection' },
    ],
  },
  {
    title: 'Compliance & Legal',
    rows: [
      { key: 'leg.privacy',       label: 'Privacy policy' },
      { key: 'leg.terms',         label: 'Terms of service' },
      { key: 'leg.cookies',       label: 'Cookie banner' },
      { key: 'leg.pii',           label: 'PII collected' },
      { key: 'leg.gdpr',          label: 'GDPR / CCPA posture' },
    ],
  },
  {
    title: 'Misc',
    rows: [
      { key: 'misc.editorial',    label: 'Editorial direction' },
      { key: 'misc.conventions',  label: 'Notable conventions' },
      { key: 'misc.todos',        label: 'Open TODOs' },
    ],
  },
];

export type CompanyData = Record<string, Cell>;
