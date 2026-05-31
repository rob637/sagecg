---
name: "ToothHound"
tagline: "Know when the tide turns up teeth."
summary: "A free web app for fossil shark-tooth hunters — a daily Hunt Score for every beach, a Gemini-backed tooth identifier, and a parcel-level land assessor for hunters who want to buy the dig site, not just visit it."
status: "building"
sector: "Consumer Outdoors · Fossil & Land Intelligence"
stage: "Public beta"
founded: "2026"
url: "https://shark-tooth-app.vercel.app"
order: 4
accent: "#0891b2"
---

## The problem

Shark-tooth hunting is a $100M-adjacent hobby trapped in tribal knowledge: Facebook groups, gut feel, and "go after a nor'easter." Hunters drive hours on the wrong tide, misidentify a $4,000 megalodon as a common sand tiger, and — at the high end — pay seven figures for "fossil land" with no idea whether the parcel sits on the Calvert formation or a flood-zone bulkhead.

The pain is wasted weekends, blown IDs, and unbounded risk on land purchases. ToothHound makes the hidden data — tide, geology, flood zone, depth-to-bed, prior sightings — show its work.

## What we ship

- **Daily Hunt Score per site (0–100)** fusing NOAA tides, lunar phase, wind history, USGS gauges, and active NHC storms.
- **Curated hunt-site map** from Florida to New Jersey with locality-specific tide-station mapping and outcome aggregates contributed by users.
- **Photo-based tooth ID** — a two-stage pipeline where Gemini extracts silhouette, serration, and cusplet features and a deterministic scorer ranks species with locality priors and reference exemplars.
- **Field logbook and insights** for logging finds, weights, and conditions, with weekly tooth-count rollups per site.
- **Real-estate Buyer's Atlas** ranking 6-state coastal micro-zones by formation, expected species, dig effort, and price band.
- **Parcel dossier from an address** — pulls Macrostrat geology, FEMA flood zone, USFWS CBRS, Paleobiology DB occurrences, iNaturalist sightings, and USGS depth-to-bed, then runs hard-gate checks (bulkhead, off-formation, sub-economic depth) and returns a buy / no-buy verdict.
- **Live land listings ranked by evidence**, not list price — every listing is scored through the same geology and parcel pipeline.

## What's coming

- **ID model fine-tuning loop** — user feedback is already captured and a curated evaluation harness is in place; retraining and prompt-tuning is the next step. *In progress.*
- **Push and scheduled notifications** for Hunt-Score spikes — the storage layer is live, the user-facing surface is still thin. *In progress.*

## How we built it

TypeScript on Next.js 14 (App Router) and React 18, deployed on Vercel. Data lives in SQLite (better-sqlite3) with Upstash Redis for feedback capture and rate limits. Identification runs on Google Gemini 2.5 Flash. Public data sources include NOAA Tides & Currents, NHC, USGS, Macrostrat, FEMA NFHL, USFWS CBRS, Paleobiology DB, and iNaturalist; live land listings come from RapidAPI. Maps are rendered with Leaflet.
