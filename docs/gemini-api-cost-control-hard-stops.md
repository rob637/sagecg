# Gemini API Cost Control — Hard Stops in Google Cloud Console

## Quick reference: Two-layer cost control

1. **API Quotas** (hard technical limit): Prevents requests once threshold is hit.
2. **Billing Budgets** (automated action): Alerts and optionally disables billing.

## Step 1: Set API Quota (Hard stop on requests)

Go to: https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas?project=<project-id>

### Actions:
1. Select the `generativelanguage.googleapis.com` API.
2. Find quota: `Requests per minute` or `Requests per day` (depending on your needs).
3. Click **Edit Quota**.
4. Set a value that matches your budget. Example:
   - If you budget $100/month and Gemini costs ~$0.000075 per token (rough estimate), set quota to prevent overages.
   - Start conservative: set to 80% of your expected usage. You can raise it later.
5. Click **Save**.

**Result**: Once quota is hit, Gemini API calls return a 429 error (quota exceeded) and your app gracefully fails or retries. No surprise bills.

## Step 2: Set Billing Budget with automated action (Alerts + Optional disable)

Go to: https://console.cloud.google.com/billing/budgets?project=<project-id>

### Actions:
1. Click **Create Budget**.
2. Set budget name: `Gemini-API-<project-id>-monthly` or similar.
3. Set budget scope:
   - Select **Projects**: Your specific GCP project.
   - (Optional) Add label filter: `api: gemini` if you label Gemini calls.
4. Set budget amount: Enter your monthly hard cap in USD (e.g., `$50`).
5. Set threshold rules:
   - At **50%**: Email alert (notification only).
   - At **80%**: Email alert.
   - At **100%**: Email alert.
   - At **100%**: (Optional) **Disable billing** if you want automatic shutoff.
6. Configure actions:
   - Set email recipients.
   - (Advanced) If enabled, select "Disable billing" to stop all APIs in the project when budget is exceeded.
7. Click **Save**.

**Result**: You get alerts before overages, and optionally automatic disable at cap.

## Step 3: Monitor actual spend (Daily check)

Go to: https://console.cloud.google.com/billing/reports?project=<project-id>

### Actions:
1. Filter by:
   - Service: `Generative AI API`
   - Metric: Group by `SKU` to see request/token breakdowns.
2. Check:
   - Daily cost trend.
   - Spike detection (sudden usage increases).
3. Export as CSV for monthly audit.

## Step 4: Enable API-level quotas per service account (if using multiple keys)

If you have multiple Gemini API keys per project (dev, staging, prod):

Go to: https://console.cloud.google.com/iam-admin/serviceaccounts?project=<project-id>

### Actions:
1. Select the service account using Gemini API.
2. Click **Keys** tab.
3. Note the key ID.
4. Go to Quotas page and filter by service account if available (varies by API).
5. Set per-account limits if needed (not always available; API quotas apply project-wide).

## Step 5: Set up notification email to watch for anomalies

Go to: https://console.cloud.google.com/billing/budgets/alerts?project=<project-id>

### Actions:
1. Create budget alert at 100% with action: **Email AND Disable billing**.
2. Verify alert emails are reaching your inbox (test by triggering a small overage).
3. Document who owns the alert (Owner column in your registry CSV).

## Recommended budget hierarchy (by app)

| App | Monthly Gemini budget | Quota (requests/day) | Alert owner |
|---|---|---|---|
| VoraPrep | $50 | 500,000 | TBD |
| LeaderReps | $30 | 300,000 | TBD |
| ToothHound | $20 | 200,000 | TBD |
| KindKudos | $10 | 100,000 | TBD |

Start conservative, monitor for 2–4 weeks, then adjust upward if needed.

## Troubleshooting

| Issue | Solution |
|---|---|
| "Quota exceeded" errors but low spend | Quota is set too low. Go to Quotas and increase the limit. |
| High spend without usage spike visible | Check if there are multiple Gemini keys in the project or if another team is using it. |
| Budget alerts not arriving | Check email filters, verify email address in billing account settings. |
| Billing disabled but app still running | Check if app has fallback code or cached responses. Restart the app after disabling. |

## Direct console links for your projects

Replace `<project-id>` and fill in your actual GCP project IDs:

- VoraPrep Gemini quotas: `https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas?project=<voraprep-project-id>`
- VoraPrep Billing budgets: `https://console.cloud.google.com/billing/budgets?project=<voraprep-project-id>`
- LeaderReps Gemini quotas: `https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas?project=<leaderreps-project-id>`
- LeaderReps Billing budgets: `https://console.cloud.google.com/billing/budgets?project=<leaderreps-project-id>`
- ToothHound Gemini quotas: `https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas?project=<toothhound-project-id>`
- ToothHound Billing budgets: `https://console.cloud.google.com/billing/budgets?project=<toothhound-project-id>`

## Testing your hard stop

1. Set quota to a very low number (e.g., 10 requests).
2. Make a Gemini API call.
3. Verify you get a 429 error.
4. Restore quota to correct value.

This confirms your hard stop is working before it matters in production.
