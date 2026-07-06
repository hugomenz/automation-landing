import { describe, expect, it } from 'vitest';
import { getContactHref, siteConfig } from './site.config';

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
});