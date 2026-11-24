import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ORIGIN = 'https://www.hugomenz.de';
const DIST_ROOT = fileURLToPath(new URL('../dist/landing/browser/', import.meta.url));
const redirects = JSON.parse(
  readFileSync(new URL('../src/app/legacy-redirects.json', import.meta.url), 'utf8'),
);
const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const canonicalPaths = new Set(
  [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)]
    .map(([, url]) => new URL(url).pathname),
);

function assertPath(value) {
  if (
    typeof value !== 'string' || !value.startsWith('/') || !value.endsWith('/') ||
    /[?#\\]/.test(value) || value.split('/').some((part) => part === '.' || part === '..') ||
    new URL(value, SITE_ORIGIN).origin !== SITE_ORIGIN
  ) throw new Error(`Invalid redirect path: ${value}`);
}

function pageFile(path) {
  return join(DIST_ROOT, ...path.split('/').filter(Boolean), 'index.html');
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

if (!existsSync(DIST_ROOT)) throw new Error('Run the Angular build before generating redirects.');
if (!Array.isArray(redirects)) throw new Error('Legacy redirects must be an array.');
const sources = new Set();
for (const { from, to } of redirects) {
  assertPath(from);
  assertPath(to);
  if (sources.has(from)) throw new Error(`Duplicate legacy redirect: ${from}`);
  sources.add(from);
  if (canonicalPaths.has(from)) throw new Error(`Redirect would overwrite a public page: ${from}`);
  if (!canonicalPaths.has(to)) throw new Error(`Redirect does not target a canonical page: ${to}`);
  if (!existsSync(pageFile(to))) throw new Error(`Missing prerendered destination: ${to}`);
}

for (const { from, to } of redirects) {
  const english = from.startsWith('/en/');
  const language = english ? 'en' : 'de';
  const heading = english ? 'This page has moved.' : 'Diese Seite ist umgezogen.';
  const label = english ? 'Continue to the current page' : 'Zur aktuellen Seite';
  const destination = escapeHtml(new URL(to, SITE_ORIGIN).href);
  const directory = join(DIST_ROOT, ...from.split('/').filter(Boolean));
  mkdirSync(directory, { recursive: true });
  writeFileSync(pageFile(from), `<!doctype html>
<html lang="${language}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${heading} | Hugo Martin</title>
  <meta name="robots" content="noindex,follow">
  <link rel="canonical" href="${destination}">
  <link rel="icon" href="/hugo-martin-m.svg" type="image/svg+xml">
  <meta http-equiv="refresh" content="0; url=${destination}">
  <style>body{margin:0;padding:3rem 1.5rem;background:#f7f8f5;color:#17384d;font:1rem/1.6 system-ui,sans-serif}main{max-width:44rem;margin:auto}h1{font-size:2rem;line-height:1.2}a{color:#315f7d;text-underline-offset:.2em}a:focus-visible{outline:3px solid #e5c66d;outline-offset:4px}</style>
</head>
<body>
  <main>
    <h1>${heading}</h1>
    <p><a href="${destination}">${label}</a></p>
  </main>
</body>
</html>
`);
}

console.log(`Generated ${redirects.length} accessible legacy redirect pages.`);
