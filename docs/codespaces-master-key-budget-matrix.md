# Master Key and Budget Matrix (Portable Across Codespaces)

Last updated: 2026-06-16
Source of truth used: SageCG matrix metadata and portfolio markdown in this repo.

How to use this file:
1. Copy this file into each app codespace/repo.
2. Fill in the Project ID, Account ID, and Owner columns.
3. Replace Placeholder URLs with direct project/account links.
4. Update Monthly budget and Alert threshold values.

## A) App-level matrix (with update and budget URLs)

| App | Runtime hosting | Active integrations from current data | Likely secrets/keys | Current secret storage pattern | Keys update URL | Budget/alerts URL | Monthly budget target | Alert thresholds | Owner |
|---|---|---|---|---|---|---|---|---|---|
| SageCG | Cloudflare Pages | GA4 only on site runtime | GA measurement ID only (public) | No runtime secrets in this repo | https://analytics.google.com/ | Cloudflare: https://dash.cloudflare.com/?to=/:account/billing | TBD | TBD | TBD |
| VoraPrep | Firebase Hosting + Cloud Functions | Stripe, Resend, Gemini, Firebase, FCM, Telnyx (content references) | STRIPE keys, RESEND_API_KEY, GEMINI key, Firebase service credentials, Telnyx API key | Firebase Functions Secrets + GCP Secret Manager (not in this repo) | Firebase: https://console.firebase.google.com/project/<project-id>/settings/serviceaccounts ; Stripe: https://dashboard.stripe.com/apikeys ; Resend: https://resend.com/api-keys ; Telnyx: https://portal.telnyx.com/#/app/api-keys | GCP budgets: https://console.cloud.google.com/billing/budgets?project=<project-id> ; Stripe billing: https://dashboard.stripe.com/settings/billing ; Resend billing: https://resend.com/billing ; Telnyx billing: https://portal.telnyx.com/#/app/billing | TBD | TBD | TBD |
| LeaderReps | Firebase Hosting + Cloud Functions | Gemini, Anthropic, YouTube/Vimeo/Loom/Google Books, Telnyx (content references), Stripe planned | GEMINI key, Anthropic key, Firebase credentials, possible Telnyx key | Firebase Functions Secrets + GCP Secret Manager (not in this repo) | Firebase: https://console.firebase.google.com/project/<project-id>/settings/serviceaccounts ; Gemini/GCP: https://console.cloud.google.com/apis/credentials?project=<project-id> ; Anthropic: https://console.anthropic.com/settings/keys ; Telnyx: https://portal.telnyx.com/#/app/api-keys | GCP budgets: https://console.cloud.google.com/billing/budgets?project=<project-id> ; Anthropic spend: https://console.anthropic.com/settings/plans ; Telnyx billing: https://portal.telnyx.com/#/app/billing | TBD | TBD | TBD |
| CBR Labs | Cloudflare Pages + Functions + D1/R2 | Resend pending | RESEND_API_KEY | Cloudflare Pages secrets (not in this repo) | Cloudflare secrets: https://dash.cloudflare.com/?to=/:account/pages ; Resend keys: https://resend.com/api-keys | Cloudflare billing: https://dash.cloudflare.com/?to=/:account/billing ; Resend billing: https://resend.com/billing | TBD | TBD | TBD |
| ToothHound | Cloudflare Pages (Next.js) | Gemini, Upstash Redis, multiple public data APIs, RapidAPI in content | GEMINI_API_KEY, UPSTASH_REDIS_REST_TOKEN, RapidAPI key | Cloudflare project env vars (not in this repo) | Cloudflare env vars: https://dash.cloudflare.com/?to=/:account/pages ; Gemini/GCP credentials: https://console.cloud.google.com/apis/credentials?project=<project-id> ; Upstash: https://console.upstash.com/ ; RapidAPI: https://rapidapi.com/developer/dashboard | Cloudflare billing: https://dash.cloudflare.com/?to=/:account/billing ; Upstash billing: https://console.upstash.com/billing ; RapidAPI billing: https://rapidapi.com/developer/dashboard/billing | TBD | TBD | TBD |
| KindKudos | Custom hosting + Google Cloud Functions backend | Google Cloud Functions + Gemini moderation | Gemini key, GCP service credentials, admin token secret | Not fully specified in this repo | GCP credentials: https://console.cloud.google.com/apis/credentials?project=<project-id> ; Cloud Functions env/secrets: https://console.cloud.google.com/functions/list?project=<project-id> | GCP budgets: https://console.cloud.google.com/billing/budgets?project=<project-id> | TBD | TBD | TBD |
| Longest Table | Google Cloud Run | Firestore migration target | GOOGLE_APPLICATION_CREDENTIALS or workload identity credentials | Local service account JSON noted; Secret Manager planned | Cloud Run and IAM: https://console.cloud.google.com/run?project=<project-id> ; GCP credentials: https://console.cloud.google.com/apis/credentials?project=<project-id> | GCP budgets: https://console.cloud.google.com/billing/budgets?project=<project-id> | TBD | TBD | TBD |
| NFL Fantasy Auction Draft | Cloudflare Pages | No paid API integrations shown | None known | None | Cloudflare project: https://dash.cloudflare.com/?to=/:account/pages | Cloudflare billing: https://dash.cloudflare.com/?to=/:account/billing | TBD | TBD | TBD |

## B) Provider control center matrix

Use this section when working provider-by-provider instead of app-by-app.

| Provider | Keys / secrets URL | Budget / spend controls URL | Notes |
|---|---|---|---|
| Google Cloud / Firebase | https://console.cloud.google.com/apis/credentials and https://console.firebase.google.com/ | https://console.cloud.google.com/billing/budgets | Firebase budget alerts are managed in Google Cloud Billing budgets. |
| Cloudflare | https://dash.cloudflare.com/?to=/:account/pages and https://dash.cloudflare.com/?to=/:account/workers | https://dash.cloudflare.com/?to=/:account/billing | Use account-level billing notifications and per-project environment variables/secrets. |
| Stripe | https://dashboard.stripe.com/apikeys | https://dashboard.stripe.com/settings/billing | Also configure alerts in dashboard notifications. |
| Telnyx | https://portal.telnyx.com/#/app/api-keys | https://portal.telnyx.com/#/app/billing | Configure usage thresholds to avoid overages. |
| Resend | https://resend.com/api-keys | https://resend.com/billing | Set sending limits per environment where possible. |
| Upstash | https://console.upstash.com/ | https://console.upstash.com/billing | Track request and storage usage by database. |
| Anthropic | https://console.anthropic.com/settings/keys | https://console.anthropic.com/settings/plans | Confirm spend caps and workspace limits. |
| RapidAPI | https://rapidapi.com/developer/dashboard | https://rapidapi.com/developer/dashboard/billing | Costs vary by each subscribed API plan. |
| Google Analytics | https://analytics.google.com/ | N/A (generally free for GA4 standard) | Measurement IDs are public identifiers, not secrets. |

## C) Minimum governance fields to fill in each codespace

Use these fields in each app repo to keep audits consistent:

- Environment names: dev, staging, prod
- Secret names and where stored
- Last rotated date
- Next rotation date
- Monthly budget by provider
- Alert thresholds (50%, 80%, 100%, 120%)
- Pager destination (email, Slack, SMS)
- Incident owner

## D) Direct answer carried forward

- Stripe is not used by SageCG site runtime in this repository.
- Telnyx is not used by SageCG site runtime in this repository.
- Both are referenced for portfolio applications, not for SageCG site execution.
