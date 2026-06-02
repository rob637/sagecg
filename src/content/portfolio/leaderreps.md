---
name: "LeaderReps LLC"
legalName: "LeaderReps LLC"
tagline: "Leadership conditioning for managers — built through reps, not slide decks."
summary: "Most managers are promoted without ever being trained. LeaderReps fixes that with Foundation, a cohort program that turns leadership into a daily practice. Participants run live coaching, deliberate exercises, and Real Reps in their actual work — so the skills stick after the session ends."
status: "active"
sector: "B2B SaaS · Leadership Development (HR Tech)"
stage: "IN MARKET"
founded: "2023"
url: "https://www.leaderreps.com"
secondaryUrl: "https://arena.leaderreps.com"
order: 1
accent: "#1e6f5c"
---

## The problem

82% of managers are promoted with no formal training, and the typical fix — a one-day workshop and a binder — doesn't change behavior. **LeaderReps** treats leadership as a skill that develops through deliberate practice across three pillars: *Lead Yourself, Lead Others, Lead the Work*.

Our flagship cohort, **Foundation**, combines live coaching, structured exercises, and Real Reps inside the manager's actual job. The whole thing is built around the principle that leadership is a skill earned through reps, not a concept absorbed in a slide deck.

## What we ship

- **Foundation Cohort Program** — A structured leadership conditioning experience focused on practical application, not theory.
- **Real Reps** — Deliberate practice exercises integrated directly into a manager's actual work day, ensuring skills are applied immediately in real-world scenarios.
- **Live Coaching & Community** — Facilitator-led sessions that prioritize active participation, live coaching, and peer feedback.
- **One More Rep Newsletter** — A weekly touchpoint that provides continuous practice prompts and leadership insights to keep the momentum going between cohorts.
- **The Arena** — A dedicated PWA at [arena.leaderreps.com](https://arena.leaderreps.com) where participants track progress, access tools, and record their reps.
- **Lead-Magnet Funnel** — Standalone web apps (Leadership DNA, Accountability, Readiness, ROI Calculator) that provide immediate diagnostic value to prospective teams.

## What's coming

- **Team Pulse and 360 feedback** — Service layer and survey storage for gathering real-time team sentiment and peer feedback loops. *In progress.*
- **Leadership Lab** — An SMS-first cohort experience built on Telnyx for internal experiments and viral-growth pilots. *In progress.*
- **Reppy** — A standalone PWA positioned as a lighter, async on-ramp to the flagship LeaderReps experience. *Shipped separately.*

## How we built it

JavaScript on React 18 and Vite 5, with Tailwind CSS and PWA support. Firebase handles auth, Firestore, storage, and hosting, with roughly 170 Cloud Functions (Node 20) running scheduled jobs, AI evaluation, and lifecycle automation. Three live Firebase environments enforce dev/test/prod separation. Tutoring and grading run on Google Gemini 2.5 with Anthropic Claude (Haiku) as fallback; SMS via Telnyx; transactional email via Nodemailer; OAuth integrations with Gmail and Google Drive.
