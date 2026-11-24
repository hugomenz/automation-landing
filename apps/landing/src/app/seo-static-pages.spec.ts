import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getAbsoluteHreflangAlternates, getCanonicalUrl, PAGE_REGISTRY } from './content/page.registry';

const sitemap = readFileSync(new URL('../../public/sitemap.xml', import.meta.url), 'utf8');
const robots = readFileSync(new URL('../../public/robots.txt', import.meta.url), 'utf8');
const urlBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1]);

function sitemapLocations(xml: string): readonly string[] {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) => match[1]);
}

function alternateLinks(xml: string): readonly string[] {
  return [...xml.matchAll(/<xhtml:link\b[^>]*>/g)].map(([tag]) => {
    const hreflang = /hreflang="([^"]+)"/.exec(tag)?.[1];
    const href = /href="([^"]+)"/.exec(tag)?.[1];
    expect(tag).toContain('rel="alternate"');
    expect(hreflang).toBeDefined();
    expect(href).toBeDefined();
    return `${hreflang}:${href}`;
  }).sort();
}

describe('sitemap and robots', () => {
  it('publishes every canonical registry URL exactly once', () => {
    const locations = sitemapLocations(sitemap);
    expect(locations).toHaveLength(PAGE_REGISTRY.length);
    expect(new Set(locations).size).toBe(locations.length);
    expect(new Set(locations)).toEqual(new Set(PAGE_REGISTRY.map(getCanonicalUrl)));
    for (const location of locations) {
      const url = new URL(location);
      expect(url.origin).toBe('https://www.hugomenz.de');
      expect(url.hash).toBe('');
      expect(url.search).toBe('');
      expect(url.pathname.endsWith('/')).toBe(true);
    }
  });

  it('records the known full-site revision date once on each page', () => {
    for (const block of urlBlocks) {
      const lastmods = [...block.matchAll(/<lastmod>\s*([^<]+?)\s*<\/lastmod>/g)]
        .map((match) => match[1]);
      expect(lastmods, sitemapLocations(block)[0]).toEqual(['2026-11-24']);
    }
    expect(sitemap).not.toMatch(/<(?:changefreq|priority)>/i);
  });

  it('matches reciprocal registry alternates for the six translated pairs', () => {
    const byLocation = new Map(urlBlocks.map((block) => [sitemapLocations(block)[0], block]));
    expect(urlBlocks.filter((block) => alternateLinks(block).length)).toHaveLength(12);
    for (const page of PAGE_REGISTRY) {
      const block = byLocation.get(getCanonicalUrl(page));
      expect(block, page.key).toBeDefined();
      const expected = getAbsoluteHreflangAlternates(page)
        .map(({ hreflang, href }) => `${hreflang}:${href}`).sort();
      expect(alternateLinks(block!), page.key).toEqual(expected);
    }
  });

  it('excludes all legacy redirect sources from the sitemap', () => {
    const redirects = JSON.parse(
      readFileSync(new URL('./legacy-redirects.json', import.meta.url), 'utf8'),
    ) as readonly { from: string; to: string }[];
    const locations = new Set(sitemapLocations(sitemap));
    for (const redirect of redirects) {
      expect(locations.has(new URL(redirect.from, 'https://www.hugomenz.de').href)).toBe(false);
      expect(locations.has(new URL(redirect.to, 'https://www.hugomenz.de').href)).toBe(true);
    }
  });

  it('advertises the sitemap without blocking the static site', () => {
    expect(robots).toMatch(/^User-agent:\s*\*$/m);
    expect(robots).toMatch(/^Allow:\s*\/$/m);
    expect(robots).toContain('Sitemap: https://www.hugomenz.de/sitemap.xml');
    expect(robots).not.toMatch(/^Disallow:\s*\/$/m);
  });
});
