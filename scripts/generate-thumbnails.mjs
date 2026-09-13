// One-off generator for the client-website thumbnails in public/sites/.
//
// Not part of the build or the CI pipeline — the generated JPEGs are committed
// as static assets. Re-run it only when you want to refresh the screenshots.
//
//   npm i -D playwright          # or: npx playwright install chromium
//   node scripts/generate-thumbnails.mjs
//
// Pass one or more hostnames to refresh only those, so adding a single client
// site does not churn every other screenshot:
//
//   node scripts/generate-thumbnails.mjs advanttechnology.com
//
// Add --wide for sites whose layout collapses at 800px wide and pushes the hero
// below the fold; it captures at 1280x800 instead (also an exact 8:5):
//
//   node scripts/generate-thumbnails.mjs advanttechnology.com --wide
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
  'https://advanttechnology.com/',
];

// No arguments means every site; otherwise only the ones matching by hostname.
// `--wide` is a flag rather than a hostname, so keep it out of the match list.
const args = process.argv.slice(2);
const useWide = args.includes('--wide');
const filters = args.filter((a) => a !== '--wide');
const targets = filters.length
  ? SITES.filter((url) => filters.some((needle) => url.includes(needle)))
  : SITES;

if (targets.length === 0) {
  console.error(`No site matched: ${filters.join(', ')}`);
  process.exit(1);
}

const VIEWPORT = { width: 800, height: 500 };
// Some sites collapse into a very tall layout at 800px wide and push the hero
// far below the fold, so the capture comes back as a bare header. Pass --wide
// to shoot at 1440x900 instead — also an exact 8:5, so it drops straight into
// the same card (the thumb container is aspect-ratio 8/5 with object-fit: cover).
// Used for advanttechnology.com, whose NitroPack build only paints its hero at
// desktop width.
const WIDE_VIEWPORT = { width: 1440, height: 900 };
const SETTLE_MS = 7000;
const QUALITY = 68;

/**
 * Consent layers that survive clicking, hidden outright.
 *
 * Clicking is unreliable: a site can run more than one consent tool, or redraw
 * the banner after a rejection. Hiding by CSS is deterministic and only ever
 * targets consent containers.
 */
const CONSENT_SELECTORS = [
  '.cmplz-cookiebanner',
  '#cmplz-cookiebanner-container',
  '#onetrust-banner-sdk',
  '#onetrust-consent-sdk',
  '#cookiescript_injected',
  '#cookie-law-info-bar',
  '#hs-eu-cookie-confirmation',
  '.cc-window',
  '[id*="cookie-consent" i]',
  '[class*="cookie-consent" i]',
  '[id*="cookiebanner" i]',
  '[class*="cookiebanner" i]',
  '[class*="cookie-notice" i]',
  '[id*="cookie-notice" i]',
];

async function hideConsentLayers(page) {
  const css = CONSENT_SELECTORS.map((s) => `${s}{display:none !important}`).join('\n');
  await page.addStyleTag({ content: css }).catch(() => {});
}

/** Best-effort dismissal of the cookie walls that sit over most of these sites. */
const COOKIE_BUTTONS = [
  '#onetrust-accept-btn-handler',
  '#cookie-accept',
  'button.cmplz-accept', // Complianz
  'a.cmplz-accept',
  'button:has-text("Accept all")',
  'button:has-text("Accept All")',
  'button:has-text("Accept")',
  'button:has-text("Okay")',
  'button:has-text("OK")',
  '[aria-label="Accept cookies"]',
];

/**
 * Walk the page once so deferred media materialises.
 *
 * NitroPack and Elementor both hold background images back until an element has
 * been in view, which is why a screenshot taken straight after load can show an
 * empty hero. The height is read once up front: some pages grow while they load,
 * so re-reading it in the loop condition would never terminate.
 */
async function primeLazyContent(page) {
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 600) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(140);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
}

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
  viewport: useWide ? WIDE_VIEWPORT : VIEWPORT,
  deviceScaleFactor: 1,
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36',
});

const results = [];

for (const url of targets) {
  const slug = slugFor(url);
  const file = path.join(OUT_DIR, `${slug}.jpg`);
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
    // Give late fonts, hero images and cookie banners a moment to appear.
    await page.waitForTimeout(SETTLE_MS);
    await dismissCookieBanner(page);
    // Anything the click missed is hidden, so no capture ships with a consent wall.
    await hideConsentLayers(page);
    // Force deferred background media to load, then return to the top.
    await primeLazyContent(page);
    await hideConsentLayers(page);
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
