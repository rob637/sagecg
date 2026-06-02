---
name: "CBR Labs LLC"
legalName: "CBR Labs LLC"
tagline: "SCIF-Compliant Hardware Redaction for Government Tablets."
summary: "CBR Labs provides permanent hardware redaction (physical removal of cameras/mics) for iPads and Android tablets. NIST 800-171 compliant devices with serial-numbered certificates for US agencies, military SCIFs, and gov-contractors."
status: "active"
sector: "GovTech · Secure Hardware Services"
stage: "Active production"
founded: "2025"
url: "https://www.cbr-labs.com"
secondaryUrl: "https://www.cbr-labs.com/admin"
order: 2
accent: "#1f2937"
---

## The problem

SCIFs, courtrooms, prisons, operating rooms, and other classified or regulated spaces ban devices that can capture or transmit — but MDM toggles, tape, and firmware locks are all reversible. Teams either go without tablets or run brittle policy regimes that fail audits.

CBR Labs removes the components at the board, so there is nothing left to re-enable. Then we produce the paperwork — certificate, photo evidence, custody log — that a CSO or contracting officer actually needs to accept the device.

## What we ship

- **Public marketing and SEO surface** covering services, process, industries, government posture, compliance, and a dedicated *Neutered iPad* landing page.
- **Lead intake** with honeypot, IP and user-agent logging, persisted to Cloudflare D1 and routed to the team via Resend.
- **Internal admin app**, gated by Cloudflare Access, covering intake, QR label printing, device state transitions, photo uploads, customers, purchase orders, proposals, invoices, receipts, a documents vault, POS, and an audit log.
- **Append-only chain of custody** — every state transition writes an event row tagged with the technician's authenticated email and full payload.
- **Serial-numbered Certificate of Redaction**, auto-minted on issuance, rendered as a branded PDF, and backed by a public verifier endpoint that returns minimal, non-sensitive proof.
- **Sharable proposals and invoices** via unguessable tokens, so customers don't need to log into the admin to review or sign.

## What's coming

- **Audit-packet zip export** bundling cert, photos, and custody log per device — *planned.*
- **Document expiry tracking** for COI, CAGE, and NDA records — *in progress.*

## How we built it

JavaScript and TypeScript on Next.js 14 (static export), with Cloudflare Pages Functions for the API, Cloudflare D1 (SQLite) for data, R2 for photo and document evidence, Cloudflare Access for authentication, and Resend for transactional email. PDFs and QR codes are rendered client-side with jsPDF and qrcode. The entire production stack runs on Cloudflare.
