---
name: "Leaderreps LLC"
legalName: "Leaderreps LLC"
tagline: "Cohort-based leadership reps, coached daily by AI."
summary: "A cohort-based professional development platform for emerging and mid-level leaders. Participants run an 8-week program of daily AM/PM practice, live coaching, and short 'reps' — recorded leadership moments that an AI evaluator scores against a 16-behavior taxonomy."
status: "active"
sector: "B2B SaaS · Leadership Development (HR Tech)"
stage: "Live in production"
founded: "2023"
url: "https://www.leaderreps.com"
order: 1
accent: "#1e6f5c"
---

## The problem

Leadership training is usually a two-day workshop followed by silence. Skills don't stick, managers don't practice, and HR can't see whether anything changed.

Leaderreps replaces the workshop with a structured eight-week cohort: a daily rhythm, weekly live coaching, recorded practice reps that get graded, and a phase-gated curriculum that won't let a leader skip ahead. The whole thing is built around the principle that leadership is a skill earned through reps, not a concept absorbed in a slide deck.

## What we ship

- **Phase-gated 8-week cohort program** — Prep → Foundation → Ascent. Content, daily practices, and navigation unlock based on the cohort's start date.
- **AI-graded leadership "reps"** — leaders capture a short transcript of a real leadership moment; a Cloud Function scores it against a 16-behavior taxonomy using Gemini 2.5, with Claude Haiku as fallback and admin-curated few-shot calibration.
- **Daily AM/PM practice loop** — morning bookend, daily plan, identity-statement grounding rep, and evening reflection, driven by a scheduled daily rollover and time-of-day-aware UI.
- **Live coaching and community sessions with automated logistics** — booking, registrations, calendar invites, and 24h/1h reminders fire from Firestore triggers and scheduled jobs.
- **"Rep" — the in-app AI coach** — context-aware coach that knows the user's cohort phase, time of day, completion state, and recent reps, delivered through a hardened Cloud Function proxy.
- **Admin and facilitator control plane** — cohort setup, content management, session builder, user management, lead-magnet dashboards, and a Sales & Marketing center with silent content-engagement metrics.
- **Lead-magnet funnel** — six standalone web apps (Leadership DNA, Accountability, Readiness, ROI Calculator, Kudos, RF Kudos) each feed AI-graded results back into the platform for follow-up.
- **The Arena** — the member experience lives at [arena.leaderreps.com](https://arena.leaderreps.com), separated from the public marketing site so each can do its job.

## What's coming

- **Team Pulse and 360 feedback** — service layer, survey storage, and Cloud Functions are wired; admin tooling is in place ahead of broader rollout. *In progress.*
- **Leadership Lab** — an SMS-first cohort experience built on Telnyx with weekly nudges, weather reports, and AI-generated narrative books. Currently used for internal experiments and viral-growth pilots. *In progress.*
- **Reppy** — a standalone PWA on its own Firebase project, positioned as a lighter async on-ramp to the full platform. *Shipped separately.*

## How we built it

JavaScript on React 18 and Vite 5, with Tailwind CSS and PWA support. Firebase handles auth, Firestore, storage, and hosting, with roughly 170 Cloud Functions (Node 20) running scheduled jobs, AI evaluation, and lifecycle automation. Three live Firebase environments enforce dev/test/prod separation. Tutoring and grading run on Google Gemini 2.5 with Anthropic Claude (Haiku) as fallback; SMS via Telnyx; transactional email via Nodemailer; OAuth integrations with Gmail and Google Drive.
