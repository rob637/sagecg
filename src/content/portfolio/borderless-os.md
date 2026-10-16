---
name: "Borderless OS"
legalName: "Borderless OS"
tagline: "Clear global customs with mathematical certainty."
summary: "A deterministic global customs, tariff, and landed-cost engine covering 50 countries (~91% of global merchandise trade). Synthesizes primary sovereign customs legislation across 7 regulatory layers into searchable Country Blueprints, Active Interrogation HS classification, FTA duty savings, and ready-to-file 4-form official customs packets."
status: "active"
sector: "Global Trade · Customs & Tariff Intelligence"
stage: "Live in production"
founded: "2026"
url: "https://borderless-os.com"
secondaryUrl: "https://borderless-os.com/calculator.html"
order: 4
accent: "#0284c7"
metrics:
  - "50 Countries (~91% Global Trade)"
  - "133-Page Sovereign Hubs"
  - "7 Regulatory Layers"
  - "SHA-256 Statutory Vault"
stack:
  - "Deterministic Tariff Engine"
  - "Bi-Temporal JSON Schemas"
  - "Stripe Billing"
  - "REST API & Webhooks"
---

## The problem

Cross-border commerce is still run on guesswork, stale tariff PDFs, and black-box broker estimates. Shippers discover Partner Government Agency (PGA) holds, suspended *de minimis* rules, anti-dumping duties, or missed 0% Free Trade Agreement exemptions only after freight is detained at the port of entry.

**Borderless OS** replaces customs guesswork and surprise port holds with date-tracked primary statutory blueprints across 7 regulatory layers — covering 50 countries and roughly 91% of global merchandise trade.

## What we ship

- **50-Country Sovereign Customs Blueprints (133 Dedicated Pages)** — Deep, date-tracked regulatory hubs across the US (CBP/USITC), Iceland (Skatturinn), UK (HMRC CDS), EU-27 (DG TAXUD TARIC & CBAM), Canada (CBSA CARM), Norway (Tolletaten Digitoll), Switzerland (BAZG Passar), Mexico, Japan, South Korea, Australia, China, Singapore, New Zealand, GCC-6, Taiwan, Vietnam, India, and Brazil.
- **7-Layer Regulatory Synthesis** — Every jurisdiction is structured across Tariff Schedules & Rulings, Import VAT/GST & *De Minimis* Thresholds, Partner Government Agency (PGA) Trigger Maps, Free Trade Agreements & Duty Drawback, Export Controls & Sanctions, Valuation & Customs FX, and Official Filing Schemas.
- **Active Interrogation HS Classification** — Instead of guessing harmonized codes from a vague product description, the engine asks targeted statutory diagnostic questions (materials, function, power rating, end-use) to lock in deterministic classification.
- **Verified Landed-Cost & FTA Duty-Savings Calculator** — Computes exact CIF/FOB valuation, MFN vs. preferential FTA duty rates, merchandise processing fees, specific weight/recycling levies, and border VAT deferral or cash-flow recovery options.
- **Ready-to-File 4-Form Customs Clearance Packets** — Generates complete, jurisdiction-specific official customs documentation packets with SHA-256 cryptographic statutory receipts and primary legal citations.
- **SKU Master Vault & Enterprise API** — *"Ask Once, Clear Forever"* SKU persistence plus REST API endpoints (`/api/v1/calculate`) and webhooks for commercial shippers and customs brokers.

## How we built it

Built around a bi-temporal statutory compilation pipeline (`schema_version: 2.0.0-bi-temporal`) that tracks publication dates, legal effective dates, and SHA-256 source receipts across sovereign customs authorities. The web application pairs a zero-latency multi-language UI (English, Icelandic, Norwegian, German, French, Spanish) with an authenticated landed-cost & packet generation backend, Stripe Checkout tier provisioning (Single Pass, Commercial Pro, and Enterprise API Suite), and full machine-readable LLM citation indexes (`llms.txt` and `llms-full.txt`).
