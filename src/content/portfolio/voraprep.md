---
name: "VoraPrep LLC"
legalName: "VoraPrep LLC"
tagline: "Pass your CPA, EA, CMA, CIA, CISA, or CFP."
summary: "An adaptive web and mobile prep platform for six US professional certification exams, combining a Prometric-style simulator, AI tutoring, and a personalized study plan that recalibrates as you practice."
status: "active"
sector: "Consumer EdTech · Professional Certification Prep"
stage: "Live in production"
founded: "2026"
url: "https://voraprep.com"
order: 3
accent: "#7c3aed"
ogImage: "/portfolio/og-voraprep.png"
---

## The problem

Professional exam candidates juggle 100–400 study hours around full-time jobs, paying $2,000–$3,000 for legacy review courses built around static video lectures and PDF question banks. Most candidates can't tell which topics will actually cost them points, when they're ready to sit, or what to do with their next free 25 minutes.

VoraPrep replaces the binder-and-lecture model with an adaptive question engine, a daily plan, and a calibrated pass-probability score — so every session is the one a candidate most needed.

## What we ship

- **Per-exam adaptive practice engine** with spaced repetition, difficulty calibration, and per-question history across all six exams.
- **Prometric-style exam simulator** covering MCQs, task-based simulations, written communication, and the CMA essay and computer-based-question formats.
- **Pass-probability score predictor** per section that translates practice performance into an estimated exam score.
- **Personalized study plan generator** that takes exam date, weekday/weekend hours, and prior experience and produces a day-by-day plan with a "what's next" recommendation.
- **Gemini-backed AI tutor** that answers concept questions inside the practice flow, proxied server-side so keys stay off the client.
- **Daily CPA SMS product** — a standalone tiered add-on that texts candidates 5–50 MCQs per day with streaks, quiet hours, and nudges, billed separately through Stripe.
- **Full lifecycle email and push** via Resend and FCM: welcome drip, onboarding nudges, diagnostic follow-up, daily reminders, weekly progress reports, trial expiration.
- **PWA plus native iOS and Android shells** via Capacitor, for offline-friendly study on mobile.
- **Pass guarantee** on every course — if you follow the plan and don't pass, you keep studying with us at no additional cost.

## What's coming

- **Growth automation suite** — keyword research, article generation, auto-publish, LinkedIn scheduling, YouTube Shorts upload — wired as Cloud Functions and an admin dashboard. *In progress.*
- **CMA essay → computer-based-question** format transition ahead of the September 2026 exam change. *In progress.*

## How we built it

TypeScript on React 18 and Vite (with PWA), wrapped in Capacitor for iOS and Android. Firebase handles auth, Firestore, storage, Cloud Functions (Gen 2), and FCM. Payments through Stripe, transactional messaging through Resend (email) and Telnyx (SMS), and tutoring through Google Gemini. Two live Firebase environments back the staging and production deployments.
