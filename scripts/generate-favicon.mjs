import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public');
const qaDir = path.resolve('qa-screenshots');

// Premium Dual-Tone Vector Favicon with Adaptive Contrast
// Features:
// 1. Fully transparent canvas (zero white box or background artifact).
// 2. High-contrast contours so book pages and spine are instantly readable on deep black, dark gray, medium slate, and pure white tabs.
// 3. Built-in prefers-color-scheme support for browsers that support it, with rock-solid fallback contrast for all others.
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <style>
    :root {
      --book-fill: #104C38;
      --book-edge: #34D399;
      --gold-spine: #F59E0B;
      --gold-spark: #FBBF24;
      --outline: rgba(255, 255, 255, 0.45);
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --book-fill: #0F5132;
        --book-edge: #4ADE80;
        --gold-spine: #FBBF24;
        --gold-spark: #FDE047;
        --outline: rgba(255, 255, 255, 0.7);
      }
    }
  </style>

  <!-- Left Page (Curved Open Knowledge Leaf) -->
  <path d="M 8 20 C 16 15 25 16 31 20 V 52 C 25 48 16 47 8 52 Z" 
        fill="var(--book-fill)" 
        stroke="var(--book-edge)" 
        stroke-width="1.8" 
        stroke-linejoin="round" />

  <!-- Left Page Interior Line -->
  <path d="M 13 28 C 18 24.5 24 25.5 27 28" 
        stroke="var(--book-edge)" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        opacity="0.8" />
  <path d="M 13 36 C 18 32.5 24 33.5 27 36" 
        stroke="var(--book-edge)" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        opacity="0.8" />

  <!-- Right Page (Curved Open Knowledge Leaf) -->
  <path d="M 56 20 C 48 15 39 16 33 20 V 52 C 39 48 48 47 56 52 Z" 
        fill="var(--book-fill)" 
        stroke="var(--book-edge)" 
        stroke-width="1.8" 
        stroke-linejoin="round" />

  <!-- Center Golden Bookmark Spine (Pillar of Wisdom) -->
  <path d="M 30.5 17 H 33.5 V 45 L 32 43.5 L 30.5 45 Z" 
        fill="var(--gold-spine)" />

  <!-- Star of Apex Achievement / Excellence -->
  <path d="M 32 3 L 34.8 11.2 L 42.8 14 L 34.8 16.8 L 32 25 L 29.2 16.8 L 21.2 14 L 29.2 11.2 Z" 
        fill="var(--gold-spark)" 
        filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.3))" />

  <!-- High-Precision Verified Accuracy Checkmark -->
  <path d="M 39 34 L 44.5 39.5 L 53 29" 
        stroke="var(--gold-spark)" 
        stroke-width="3.6" 
        stroke-linecap="round" 
        stroke-linejoin="round" />
</svg>`;

// Write public/favicon.svg
fs.writeFileSync(path.join(outDir, 'favicon.svg'), svgContent, 'utf8');

async function renderPngs() {
  const browser = await chromium.launch({ channel: 'msedge' });
  const page = await browser.newPage();
  const svgDataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgContent);

  // High-res transparent PNG (192x192)
  await page.setContent(`<!DOCTYPE html>
  <html>
  <head>
    <style>
      html, body { margin: 0; padding: 0; background: transparent !important; overflow: hidden; }
      img { display: block; width: 100%; height: 100%; }
    </style>
  </head>
  <body>
    <img src="${svgDataUrl}" />
  </body>
  </html>`);

  await page.setViewportSize({ width: 192, height: 192 });
  await page.screenshot({
    path: path.join(outDir, 'favicon.png'),
    omitBackground: true,
  });

  // apple-touch-icon (180x180)
  await page.setContent(`<!DOCTYPE html>
  <html>
  <head>
    <style>
      html, body { margin: 0; padding: 0; background: #133026; overflow: hidden; display: flex; align-items: center; justify-content: center; }
      img { width: 140px; height: 140px; }
    </style>
  </head>
  <body>
    <img src="${svgDataUrl}" />
  </body>
  </html>`);
  await page.setViewportSize({ width: 180, height: 180 });
  await page.screenshot({
    path: path.join(outDir, 'apple-touch-icon.png'),
  });

  // Verify in simulated Light and Dark tabs
  const previewHtml = `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body { margin: 0; padding: 24px; font-family: system-ui, -apple-system, sans-serif; background: #0F172A; color: #F8FAFC; }
      h2 { margin-top: 0; font-size: 17px; font-weight: 600; letter-spacing: -0.01em; }
      .container { display: flex; flex-direction: column; gap: 16px; margin-top: 16px; }
      .tab-row { display: flex; align-items: center; gap: 16px; }
      .label { width: 140px; font-size: 13px; color: #94A3B8; font-weight: 600; }
      .tab { display: flex; align-items: center; gap: 10px; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 600; }
      .light-tab { background: #FFFFFF; color: #0F172A; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #E2E8F0; }
      .dark-tab { background: #1E293B; color: #F8FAFC; box-shadow: 0 1px 3px rgba(0,0,0,0.4); border: 1px solid #334155; }
      .icon { width: 22px; height: 22px; display: block; }
    </style>
  </head>
  <body>
    <h2>UPSC ZONE AI - High-Contrast Transparent Favicon Verification</h2>
    <div class="container">
      <div class="tab-row">
        <div class="label">Pure White Tab:</div>
        <div class="tab light-tab">
          <img class="icon" src="${svgDataUrl}" />
          <span>UPSC ZONE AI - Smart UPSC Preparation</span>
        </div>
      </div>
      <div class="tab-row">
        <div class="label">Dark Chrome/Edge Tab:</div>
        <div class="tab dark-tab">
          <img class="icon" src="${svgDataUrl}" />
          <span>UPSC ZONE AI - Smart UPSC Preparation</span>
        </div>
      </div>
    </div>
  </body>
  </html>`;

  await page.setContent(previewHtml);
  await page.setViewportSize({ width: 560, height: 210 });
  await page.screenshot({
    path: path.join(qaDir, 'favicon-tab-verification.png'),
  });

  await browser.close();
  console.log('Regenerated favicon.svg, favicon.png, apple-touch-icon.png and verification preview.');
}

renderPngs().catch(console.error);
