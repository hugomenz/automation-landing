import { describe, expect, it } from 'vitest';
import { resolveAbsoluteUrl, siteConfig } from './site.config';

describe('siteConfig', () => {
  it('uses the deployed www host as the canonical base URL', () => {
    expect(siteConfig.baseUrl).toBe('https://www.hugomenz.de/');
    expect(siteConfig.canonicalUrl).toBe('https://www.hugomenz.de/');
  });

  it('keeps localized SEO metadata distinct per language', () => {
    expect(siteConfig.seo.localized.de.title).not.toBe(siteConfig.seo.localized.en.title);
    expect(siteConfig.seo.localized.de.description).not.toBe(
      siteConfig.seo.localized.en.description,
    );
  });

  it('resolves relative paths correctly for a GitHub Pages subpath', () => {
    const pagesBase = 'https://hugomenz.github.io/automation-landing/';

    expect(resolveAbsoluteUrl(siteConfig.localizedPaths.de, pagesBase)).toBe(pagesBase);
    expect(resolveAbsoluteUrl(siteConfig.seo.ogImage, pagesBase)).toBe(
      'https://hugomenz.github.io/automation-landing/og-preview.png',
    );
  });
});
