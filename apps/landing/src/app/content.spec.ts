import { describe, expect, it } from 'vitest';
import { LANDING_CONTENT } from './content';
import { siteConfig } from './site.config';

describe('landing content', () => {
  it('maps localized SEO values into the visible content model', () => {
    expect(LANDING_CONTENT.de.meta.title).toBe(siteConfig.seo.localized.de.title);
    expect(LANDING_CONTENT.de.meta.description).toBe(
      siteConfig.seo.localized.de.description,
    );
    expect(LANDING_CONTENT.en.meta.title).toBe(siteConfig.seo.localized.en.title);
    expect(LANDING_CONTENT.en.meta.description).toBe(
      siteConfig.seo.localized.en.description,
    );
  });

  it('keeps the German copy in proper German with real umlauts, not ASCII fallbacks', () => {
    expect(LANDING_CONTENT.de.hero.title).toContain('automatisiere');
    expect(LANDING_CONTENT.de.hero.body).toContain('läuft');
    expect(LANDING_CONTENT.de.hero.body).not.toContain('laeuft');
    expect(LANDING_CONTENT.de.banner.prefix).toContain('für');
    expect(LANDING_CONTENT.de.banner.prefix).not.toContain('fuer');
  });

  it('drops the retired bottleneck positioning from the hero copy', () => {
    const deHero = `${LANDING_CONTENT.de.hero.title} ${LANDING_CONTENT.de.hero.body}`;
    expect(deHero).not.toContain('Engpass');
    expect(deHero).not.toContain('Engpässe');
    expect(deHero.toLowerCase()).not.toContain('bottleneck');
  });

  it('uses the automation call-to-action copy per language', () => {
    expect(LANDING_CONTENT.de.hero.primaryCta).toBe('Prozess besprechen');
    expect(LANDING_CONTENT.de.cta.button).toBe('Prozess besprechen');
    expect(LANDING_CONTENT.en.hero.primaryCta).toBe('Discuss a process');
    expect(LANDING_CONTENT.en.cta.button).toBe('Discuss a process');
    expect(LANDING_CONTENT.en.hero.primaryCta).not.toBe(LANDING_CONTENT.de.hero.primaryCta);
  });

  it('rotates real automation cases in the animated banner', () => {
    expect(LANDING_CONTENT.de.banner.cases.length).toBeGreaterThanOrEqual(6);
    expect(LANDING_CONTENT.de.banner.cases[0].detail).toBeTruthy();
    expect(LANDING_CONTENT.de.banner.cases[0].diagram?.nodes.length).toBe(4);
    expect(LANDING_CONTENT.en.banner.cases).toHaveLength(
      LANDING_CONTENT.de.banner.cases.length,
    );
  });
});