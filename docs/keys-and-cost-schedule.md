# Keys and Cost Schedule

Last reviewed: 2026-06-16
Repository: sagecg (marketing site)

## Executive summary

- No private API keys or tokens are hardcoded in this repo.
- The only hardcoded identifier in runtime HTML is a Google Analytics Measurement ID (`G-4J0FWODC6W`), which is public metadata and not a secret.
- Environment variable names shown in `src/data/matrix/*.ts` are portfolio metadata content, not executed secrets in this app.

## Findings (security)

### 1) Runtime key exposure check

- `src/layouts/Layout.astro` includes GA script and measurement ID.
- Risk: low. GA4 measurement IDs are intentionally public and cannot be used as privileged credentials.
- Recommendation: acceptable as-is. If desired for easier rotation, move to a public env var (for example `PUBLIC_GA_MEASUREMENT_ID`).

### 2) Hardcoded secret scan

- Searched for common secret patterns (`API_KEY`, `SECRET`, `TOKEN`, `sk_live`, `sk_test`, `AIza`, `ghp_`, etc.) in app files.
- Result: no private credentials found.

### 3) Env files / secret manifests

- No `.env` files or template env files were found in the repo root tree.
- For this static site, that is acceptable because no private runtime integrations are present.

## Key inventory discovered in portfolio metadata

These names appear in `src/data/matrix/*.ts` and describe downstream portfolio apps.
They are useful for governance and budgeting, but they are not active secrets in this repository.

| Key / Variable | Mentioned in portfolio app metadata | Secret class | Recommended storage |
|---|---|---|---|
| `VITE_FIREBASE_*` | VoraPrep, LeaderReps | Mixed (client config; not all secret) | Public client config values in client env; admin credentials never client-side |
| `VITE_GEMINI_API_KEY` | VoraPrep, LeaderReps | Secret if used server-side; risky if client-side | Server-only secret manager; proxy model calls through backend |
| `VITE_ADMIN_EMAILS` | LeaderReps | Sensitive config | Server env / config store |
| `VITE_ENVIRONMENT` | VoraPrep | Non-secret config | Standard env var |
| `RESEND_API_KEY` | CBR Labs | Secret | Cloudflare/Firebase/GCP secrets manager |
| `GEMINI_API_KEY` | ToothHound | Secret | Cloudflare environment secret / workers secret |
| `UPSTASH_REDIS_REST_URL` | ToothHound | Sensitive endpoint | Server env |
| `UPSTASH_REDIS_REST_TOKEN` | ToothHound | Secret | Server env secret |
| `EVAL_BASE` | ToothHound | Non-secret config | Standard env var |
| `GOOGLE_APPLICATION_CREDENTIALS` | Longest Table | Secret (service account path/credential) | Workload identity or secret manager; avoid JSON files in repos |

## Potential cost schedule (planning ranges)

All ranges are rough order-of-magnitude planning values. Verify with current vendor pricing and usage.

| Service / key family | Where referenced | Typical pricing model | Planning range |
|---|---|---|---|
| Google Analytics (`G-...`) | This repo (`Layout.astro`) | Free web analytics | $0/month |
| Google Gemini API (`*_GEMINI_API_KEY`) | VoraPrep, LeaderReps, ToothHound metadata | Per-token model usage | ~$10 to $2,000+/month depending on volume and model |
| Resend (`RESEND_API_KEY`) | CBR Labs, VoraPrep metadata | Per email / monthly tiers | $0 to $100+/month early stage; scales with email volume |
| Stripe (secret/publishable keys implied) | VoraPrep metadata | Transaction fee based | ~2.9% + $0.30 per successful charge (region-dependent) |
| Upstash Redis (`UPSTASH_*`) | ToothHound metadata | Request/throughput/storage tiers | $0 to $200+/month depending on traffic and retention |
| Firebase (API keys + service accounts implied) | VoraPrep, LeaderReps metadata | Usage-based (Auth, Firestore, Functions, Storage) | $0 to $500+/month typical startup band; can exceed with heavy usage |
| Cloudflare Pages/Workers secrets | CBR Labs, ToothHound metadata | Hosting/request based | $0 to $20+/month for small projects; higher at scale |
| Telnyx (API key implied) | VoraPrep, LeaderReps markdown metadata | Per SMS/MMS/minute | Usually cents per message; ~$10 to $500+/month volume-dependent |
| RapidAPI (API key implied) | ToothHound markdown metadata | API-specific plans | $0 to $300+/month depending on selected API plan |

## Protection standards checklist

Apply across portfolio apps that use these keys:

- Keep all private keys in provider secret managers (Cloudflare Secrets, GCP Secret Manager, Firebase Functions secrets, GitHub Actions secrets).
- Never ship private keys to the browser bundle.
- Treat any variable prefixed as public/client (`VITE_` or `PUBLIC_`) as non-secret.
- Use server-side proxy endpoints for LLM, payment, and email providers.
- Rotate secrets at least every 90 days for high-impact services (payments, email, model APIs).
- Restrict key scopes and referrers/IPs where vendor allows.
- Enable budget alerts in each provider account.
- Add automated secret scanning in CI (for example `gitleaks` or GitHub secret scanning).

## Status for this repository

- Current status: PASS for secret handling in this repo.
- Residual risk: low.
- Main action item: maintain separation between public analytics IDs and private keys in downstream app repos.

## Integration scope matrix (SageCG vs portfolio apps)

This matrix distinguishes what is used by the SageCG website code in this repository versus what is only described in portfolio metadata/content.

| Integration | Used by SageCG site runtime in this repo? | Mentioned in this repo? | Scope of mention | Evidence source |
|---|---|---|---|---|
| Google Analytics (GA4) | Yes | Yes | SageCG runtime layout script | `src/layouts/Layout.astro` |
| Stripe | No | Yes | Portfolio apps only (mostly VoraPrep live, LeaderReps planned) | `src/data/matrix/voraprep.ts`, `src/data/matrix/leaderreps.ts`, `src/content/portfolio/voraprep.md` |
| Telnyx | No | Yes | Portfolio apps only (VoraPrep + LeaderReps content) | `src/content/portfolio/voraprep.md`, `src/content/portfolio/leaderreps.md` |
| Resend | No | Yes | Portfolio apps only | `src/data/matrix/cbr-labs.ts`, `src/data/matrix/voraprep.ts` |
| Gemini API | No | Yes | Portfolio apps only | `src/data/matrix/voraprep.ts`, `src/data/matrix/leaderreps.ts`, `src/data/matrix/toothhound.ts` |
| Upstash Redis | No | Yes | Portfolio apps only (ToothHound) | `src/data/matrix/toothhound.ts` |

### Direct answer: Stripe and Telnyx for SageCG

- Stripe: not used by SageCG website runtime in this repository.
- Telnyx: not used by SageCG website runtime in this repository.
- Both appear in portfolio-company descriptions/metadata, not as active SageCG app integrations.
