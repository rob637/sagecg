---
name: "VoraPrep LLC"
legalName: "VoraPrep LLC"
tagline: "Master 30 professional certifications with active recall, statutory depth, and 1:1 exam simulation."
summary: "A full-curriculum web and mobile exam prep platform covering 30 professional certifications across 5 Kingdoms — combining 2,790+ textbook-grade interactive lessons, 71,700+ adaptive MCQs, 13,800+ FSRS flashcards, 1:1 Prometric & Pearson VUE simulators, and Vory, a 24/7 Socratic AI tutor."
status: "active"
sector: "Consumer EdTech · Professional Certification Prep"
stage: "Live in production"
founded: "2026"
url: "https://voraprep.com"
secondaryUrl: "https://voraprep.com/admin"
order: 3
accent: "#7c3aed"
metrics:
  - "30 Live Certifications"
  - "71,700+ Verified MCQs"
  - "2,790+ Interactive Lessons"
  - "1:1 Exam Simulators"
stack:
  - "TypeScript · React 18"
  - "Firebase Gen 2"
  - "Vory Socratic AI Tutor"
  - "Stripe & Capacitor"
---

## The problem

Professional exam candidates juggle 100–400 study hours around full-time jobs, paying $2,000–$3,000 for legacy review courses built around passive 100-hour video lectures and 800-page printed manuals. Most candidates can't tell which subtopics will actually cost them points, when they're ready to sit, or what to do with their next free 25 minutes.

**VoraPrep** replaces the binder-and-lecture model with a complete, blueprint-aligned curriculum across **30 professional licensure and certification exams** — combining interactive conceptual lessons, adaptive question banks, spaced-repetition flashcards, a daily study plan, and a calibrated readiness score predictor so every session is the one a candidate most needed.

## What we ship

- **30 Full-Curriculum Certification Courses across 5 Kingdoms:**
  - **Accounting, Tax, Fraud, Payroll & Gov Finance:** CPA, IRS Enrolled Agent (EA), CMA, Certified Fraud Examiner (CFE), Certified Payroll Professional (CPP), and Certified Government Financial Manager (CGFM).
  - **Securities, FINRA & Wealth Management:** CFP, FINRA SIE, Series 7, Series 66, Series 65, Series 63, Series 6, Series 24, Series 57, Series 79, Series 99, CFA Level 1, and FRM Part 1.
  - **Audit, Cybersecurity & Privacy:** CISA, CIA, CRISC, CISM, CISSP, CCSP, CompTIA Security+, and CIPP/US.
  - **HR Leadership:** SHRM-CP and PHR.
  - **Federal Regulatory:** U.S. Customs Broker License Exam (CBLE).
- **2,790+ Textbook-Grade Interactive Lessons & Printable 12-Week Study Plans** anchored directly to primary statutory authorities (IRC, FASB ASC, GASB, FINRA/NASAA/MSRB, CFA Institute, GARP, ISACA, IIA, (ISC)², IAPP, CompTIA, ACFE, PayrollOrg, AGA, SHRM, HRCI, and 19 CFR / HTSUS).
- **71,700+ Adaptive MCQs with Option-by-Option Rationales** explaining why the correct answer is right and why every distractor is wrong.
- **1:1 Test-Center Exam Simulators** replicating Prometric, Pearson VUE, and PSI interfaces across MCQs, Task-Based Simulations (TBS), Case-Based Questions (CBQ), and multi-tab exhibits.
- **13,800+ FSRS-4.5 Spaced-Repetition Flashcards** scheduled around memory decay curves for high-retention statutory rules and thresholds.
- **Calibrated "GreenLight" Readiness Score Predictor & Study Plan Generator** that translates practice performance into an estimated exam score and dynamically recalibrates your calendar.
- **Vory, Your 24/7 Personal Socratic AI Tutor** backed by Google Gemini (proxied server-side), plus our **Full Access Until You Pass Guarantee** on every course.

## How we built it

TypeScript on React 18 and Vite (with PWA), wrapped in Capacitor for iOS and Android. Firebase handles auth, Firestore, storage, Cloud Functions (Gen 2), and FCM. Payments run through Stripe (`$19–$29/mo` or `$149–$249/yr` per exam), transactional messaging through Resend (email) and Telnyx (SMS), and Socratic tutoring through Google Gemini. A full `/llms.txt` curriculum manifest and dynamic sitemap expose all 30 exam hubs to search and AI answer engines.
