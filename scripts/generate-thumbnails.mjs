// One-off generator for the client-website thumbnails in public/sites/.
//
// Not part of the build or the CI pipeline — the generated JPEGs are committed
// as static assets. Re-run it only when you want to refresh the screenshots.
//
//   npm i -D playwright          # or: npx playwright install chromium
//   node scripts/generate-thumbnails.mjs
//
// It uses the locally installed Chrome (channel: 'chrome') when available and
// falls back to Playwright's bundled Chromium.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'sites');

// Keep this list in sync with `websites` in src/data/content.js.
const SITES = [
  'https://creensolutions.com/',
  'https://festoonhouse.com.au/',
  'https://www.frazerconsultants.com/',
  'https://www.xmworks.com/',
  'https://k9basics.com/',
  'https://loudounorthodontics.com/',
  'https://gotobeauty.com/',
  'https://fuelandtiresaver.com/',
  'https://www.volharddognutrition.com/',
  'https://www.gamsat-prep.com/',
  'https://www.stackrocktalent.com/',
  'https://www.peachbpo.com/',
];

const VIEWPORT = { width: 800, height: 500 };
const SETTLE_MS = 6000;
const QUALITY = 68;

/** Best-effort dismissal of the cookie walls that sit over most of these sites. */
const COOKIE_BUTTONS = [
  '#onetrust-accept-btn-handler',
  '#cookie-accept',
  'button:has-text("Accept all")',
  'button:has-text("Accept All")',
  'button:has-text("Okay")',
  'button:has-text("OK")',
  'button:has-text("Accept")',
  '[aria-label="Accept cookies"]',
];

async function dismissCookieBanner(page) {
  for (const selector of COOKIE_BUTTONS) {
    const button = page.locator(selector).first();
    try {
      if ((await button.count()) && (await button.isVisible())) {
        await button.click({ timeout: 1500 });
        await page.waitForTimeout(600);
        return true;
      }
    } catch {
      // Ignore selectors that do not resolve; keep trying the rest.
    }
  }
  return false;
}

export const slugFor = (url) =>
  new URL(url).hostname.replace(/^www\./, '').replace(/[^a-z0-9]+/gi, '-');

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error('Playwright is not installed. Run:  npm i -D playwright');
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

let browser;
try {
  browser = await chromium.launch({ channel: 'chrome' });
} catch {
  browser = await chromium.launch();
}

const context = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: 1,
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36',
});

const results = [];

for (const url of SITES) {
  const slug = slugFor(url);
  const file = path.join(OUT_DIR, `${slug}.jpg`);
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
    // Give late fonts, hero images and cookie banners a moment to appear.
    await page.waitForTimeout(SETTLE_MS);
    await dismissCookieBanner(page);
    // Nudge the page so lazy-loaded hero media resolves, then return to the top.
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(900);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(700);
    await page.screenshot({ path: file, type: 'jpeg', quality: QUALITY });
    const kb = Math.round(fs.statSync(file).size / 1024);
    results.push({ slug, ok: true, kb });
    console.log(`  OK    ${slug.padEnd(28)} ${kb} KB`);
  } catch (error) {
    results.push({ slug, ok: false });
    console.log(`  FAIL  ${slug.padEnd(28)} ${String(error).split('\n')[0].slice(0, 80)}`);
  } finally {
    await page.close();
  }
}

await browser.close();

const ok = results.filter((r) => r.ok);
const totalKb = ok.reduce((sum, r) => sum + r.kb, 0);
console.log(`\n${ok.length}/${results.length} captured — ${totalKb} KB total`);
if (ok.length !== results.length) {
  console.log('Failed sites keep their letter-mark fallback in the UI.');
}
