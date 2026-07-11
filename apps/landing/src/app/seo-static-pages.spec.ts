import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getCanonicalUrl, PAGE_REGISTRY } from './content/page.registry';

const sitemap = readFileSync(new URL('../../public/sitemap.xml', import.meta.url), 'utf8');
const robots = readFileSync(new URL('../../public/robots.txt', import.meta.url), 'utf8');

function sitemapLocations(xml: string): readonly string[] {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) => match[1]);
}

describe('sitemap and robots', () => {
  it('publishes exactly the 12 canonical registry URLs once', () => {
    const locations = sitemapLocations(sitemap);
    const expected = PAGE_REGISTRY.map(getCanonicalUrl);

    expect(locations).toHaveLength(12);
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

  it('keeps reciprocal language annotations on home URLs only', () => {
    const urlBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(
      (match) => match[1],
    );
    const blocksWithAlternates = urlBlocks.filter((block) =>
      /rel=["']alternate["']/i.test(block),
    );

    expect(blocksWithAlternates).toHaveLength(2);
    for (const block of blocksWithAlternates) {
      expect(block).toContain('hreflang="de-DE"');
      expect(block).toContain('hreflang="en"');
      expect(block).toContain('hreflang="x-default"');
    }
    expect(blocksWithAlternates.map((block) => sitemapLocations(block)[0])).toEqual([
      'https://www.hugomenz.de/',
      'https://www.hugomenz.de/en/',
    ]);
  });

  it('advertises the sitemap without blocking the static site', () => {
    expect(robots).toMatch(/^User-agent:\s*\*$/m);
    expect(robots).toMatch(/^Allow:\s*\/$/m);
    expect(robots).toContain('Sitemap: https://www.hugomenz.de/sitemap.xml');
    expect(robots).not.toMatch(/^Disallow:\s*\/$/m);
  });
});
