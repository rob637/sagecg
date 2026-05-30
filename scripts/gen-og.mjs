// Generate public/og.png — 1200x630 social card for Sage CG.
// Run: node scripts/gen-og.mjs
// Requires Fraunces installed in fontconfig (see fc-list | grep Fraunces).
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const paper = '#faf9f6';
const ink = '#0c0a09';
const muted = '#78716c';
const accent = '#b45309';
const rule = '#e7e5e4';

// Portfolio accent dots (matches src/content/portfolio/*.md accent values)
const dots = ['#b45309', '#0f766e', '#7c3aed', '#0369a1', '#be123c', '#15803d', '#a3a3a3'];

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${paper}"/>
  <!-- left amber rule -->
  <rect x="0" y="0" width="10" height="630" fill="${accent}"/>
  <!-- top hairline -->
  <rect x="80" y="80" width="1040" height="1" fill="${rule}"/>
  <!-- eyebrow -->
  <text x="80" y="130" font-family="Inter, sans-serif" font-size="20" font-weight="500"
        letter-spacing="4" fill="${muted}">SAGE CONSULTING GROUP &#183; VENTURE STUDIO</text>
  <!-- headline -->
  <text x="80" y="270" font-family="Fraunces" font-size="92" font-weight="500"
        fill="${ink}" letter-spacing="-2">We start, build, and operate</text>
  <text x="80" y="380" font-family="Fraunces" font-size="92" font-weight="500"
        fill="${ink}" letter-spacing="-2">
    <tspan font-style="italic" fill="${accent}">useful</tspan>
    <tspan> software companies.</tspan>
  </text>
  <!-- subhead -->
  <text x="80" y="460" font-family="Inter, sans-serif" font-size="24" fill="${ink}" opacity="0.7">
    A focused portfolio of seven companies — SaaS, EdTech, healthcare, sports, community.
  </text>
  <!-- bottom hairline -->
  <rect x="80" y="520" width="1040" height="1" fill="${rule}"/>
  <!-- portfolio dots -->
  ${dots.map((c, i) => `<circle cx="${92 + i * 26}" cy="565" r="7" fill="${c}"/>`).join('')}
  <!-- url -->
  <text x="1120" y="572" text-anchor="end" font-family="JetBrains Mono, monospace"
        font-size="18" fill="${muted}">www.sagecg.com</text>
</svg>`;

const out = resolve('public/og.png');
await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
