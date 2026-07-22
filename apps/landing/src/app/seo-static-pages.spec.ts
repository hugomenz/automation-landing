import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getCanonicalUrl, PAGE_REGISTRY } from './content/page.registry';

const sitemap = readFileSync(new URL('../../public/sitemap.xml', import.meta.url), 'utf8');
const robots = readFileSync(new URL('../../public/robots.txt', import.meta.url), 'utf8');

function sitemapLocations(xml: string): readonly string[] {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) => match[1]);
}

describe('sitemap and robots', () => {
  it('publishes exactly the 15 canonical registry URLs once', () => {
    const locations = sitemapLocations(sitemap);
    const expected = PAGE_REGISTRY.map(getCanonicalUrl);

    expect(locations).toHaveLength(15);
    expect(new Set(locations).size).toBe(locations.length);
    expect(new Set(locations)).toEqual(new Set(expected));
  });

  it('contains neither anchors nor speculative future pages', () => {
    const locations = sitemapLocations(sitemap);

    for (const location of locations) {
      expect(location).not.toContain('#');
      expect(location).not.toContain('?');
      expect(location.endsWith('/')).toBe(true);
    }

    expect(sitemap).not.toMatch(/\/wissen\//i);
    expect(sitemap).not.toMatch(/\/en\/(?:solutions|services|industries|about|contact)\//i);
  });

  it('publishes lastmod only for a known significant content change', () => {
    const datedUrls = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].flatMap((match) => {
      const block = match[1];
      const location = sitemapLocations(block)[0];
      const lastmods = [...block.matchAll(/<lastmod>\s*([^<]+?)\s*<\/lastmod>/g)].map(
        (lastmod) => lastmod[1],
      );

      expect(lastmods, 'lastmod count for ' + location).toHaveLength(
        lastmods.length > 0 ? 1 : 0,
      );
      return lastmods.map((lastmod) => ({ location, lastmod }));
    });

    expect(datedUrls).toEqual([
      {
        location: 'https://www.hugomenz.de/',
        lastmod: '2026-07-22',
      },
    ]);
    expect(sitemap).not.toMatch(/<(?:changefreq|priority)>/i);
  });

  it('keeps reciprocal language annotations on translated URL pairs only', () => {
    const urlBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(
      (match) => match[1],
    );
    const blocksWithAlternates = urlBlocks.filter((block) =>
      /rel=["']alternate["']/i.test(block),
    );

    expect(blocksWithAlternates).toHaveLength(4);
    for (const block of blocksWithAlternates) {
      expect(block).toContain('hreflang="de-DE"');
      expect(block).toContain('hreflang="en"');
      expect(block).toContain('hreflang="x-default"');
    }
    expect(blocksWithAlternates[0]).toContain(
      'hreflang="en" href="https://www.hugomenz.de/en/"',
    );
    expect(blocksWithAlternates[1]).toContain(
      'hreflang="de-DE" href="https://www.hugomenz.de/"',
    );
    expect(blocksWithAlternates[2]).toContain(
      'hreflang="en" href="https://www.hugomenz.de/en/ai-search-readiness-industrial-companies/"',
    );
    expect(blocksWithAlternates[3]).toContain(
      'hreflang="de-DE" href="https://www.hugomenz.de/ki-sichtbarkeit-industrie/"',
    );
    expect(blocksWithAlternates.map((block) => sitemapLocations(block)[0])).toEqual([
      'https://www.hugomenz.de/',
      'https://www.hugomenz.de/en/',
      'https://www.hugomenz.de/ki-sichtbarkeit-industrie/',
      'https://www.hugomenz.de/en/ai-search-readiness-industrial-companies/',
    ]);
  });

  it('advertises the sitemap without blocking the static site', () => {
    expect(robots).toMatch(/^User-agent:\s*\*$/m);
    expect(robots).toMatch(/^Allow:\s*\/$/m);
    expect(robots).toContain('Sitemap: https://www.hugomenz.de/sitemap.xml');
    expect(robots).not.toMatch(/^Disallow:\s*\/$/m);
  });
});
