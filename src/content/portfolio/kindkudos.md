---
name: "KindKudos"
tagline: "Send a little kindness. Anonymously."
summary: "A live social-good app for sending anonymous kudos that are screened by AI before delivery. Built to make appreciation easy, safe, and genuinely kind."
status: "active"
sector: "Consumer Social · Community Wellness"
stage: "Live in production"
founded: "2026"
url: "https://kindkudos.app"
ogImage: "https://kindkudos.app/og-image.png"
order: 4
accent: "#0f2a44"
---

## The problem

Most people think kind things and never say them. When they do, social friction gets in the way: fear of awkwardness, fear of overstepping, or fear the message will land wrong.

KindKudos lowers that barrier. You can send a specific, generous compliment anonymously, and the recipient can pass the kindness forward.

## What we ship

- **Anonymous kudos flow** that lets someone send appreciation without exposing identity to the recipient.
- **AI moderation guardrail** (Google Gemini) that reviews each message for kindness before it is delivered.
- **Pay-it-forward chain behavior** where recipients can continue the chain and send kindness onward.
- **Privacy-first product language** that explains exactly what is and is not stored.
- **Built-in sharing flow** for spreading the product and growing kindness chains organically.

## What's coming

- **Expanded moderation tuning** with tighter quality controls on borderline messages.
- **Richer community insights** that preserve anonymity while showing healthy growth patterns.

## How we built it

KindKudos runs as a React web app with a serverless backend. The moderation and admin endpoints are served through Google Cloud Functions, and production uses Google Gemini for message-kindness review.