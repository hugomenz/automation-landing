import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { resolveAbsoluteUrl, siteConfig } from './site.config';

describe('siteConfig', () => {
  it('uses the deployed www host as the single absolute URL base', () => {
    expect(siteConfig.baseUrl).toBe('https://www.hugomenz.de/');
    expect(resolveAbsoluteUrl('/kontakt/')).toBe('https://www.hugomenz.de/kontakt/');
    expect(resolveAbsoluteUrl('/en/')).toBe('https://www.hugomenz.de/en/');
  });

  it('preserves already absolute external URLs', () => {
    expect(resolveAbsoluteUrl(siteConfig.social.linkedin)).toBe(siteConfig.social.linkedin);
  });

  it('keeps factual person and service schema inputs configured', () => {
    expect(siteConfig.name).toBe('Hugo Martin Menz');
    expect(siteConfig.brandName).toBe('Hugo Menz Automation');
    expect(siteConfig.founder.jobTitle).toBe(
      'UX Engineer für digitale Prozesse und Automatisierung',
    );
    expect(siteConfig.areaServed).toContain('Stuttgart');
    expect(siteConfig.knowsAbout).toContain('Technische Anfragequalifizierung');
  });

  it('uses the general social preview with its declared dimensions', () => {
    expect(siteConfig.socialImage).toEqual({
      src: '/og-general-de.png',
      width: 1200,
      height: 630,
    });
    expect(
      existsSync(new URL(`../../public${siteConfig.socialImage.src}`, import.meta.url)),
    ).toBe(true);
  });
});
