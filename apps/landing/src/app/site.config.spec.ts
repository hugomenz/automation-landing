import { describe, expect, it } from 'vitest';
import { getContactHref, resolveAbsoluteUrl, siteConfig } from './site.config';

describe('siteConfig', () => {
  it('keeps localized SEO metadata distinct per language', () => {
    expect(siteConfig.seo.localized.de.title).not.toBe(siteConfig.seo.localized.en.title);
    expect(siteConfig.seo.localized.de.description).not.toBe(
      siteConfig.seo.localized.en.description,
    );
  });

  it('builds localized mailto links with language-specific subjects', () => {
    expect(decodeURIComponent(getContactHref('de'))).toContain('Prozess besprechen');
    expect(decodeURIComponent(getContactHref('en'))).toContain('Discuss a process');
  });

  it('resolves relative paths correctly for a GitHub Pages subpath', () => {
    const pagesBase = 'https://hugomenz.github.io/automation-landing/';

    expect(resolveAbsoluteUrl(siteConfig.localizedPaths.de, pagesBase)).toBe(pagesBase);
    expect(resolveAbsoluteUrl(siteConfig.seo.ogImage, pagesBase)).toBe(
      'https://hugomenz.github.io/automation-landing/og-preview.jpg',
    );
  });
});