import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  getAbsoluteHreflangAlternates,
  getCanonicalUrl,
  getPageByKey,
  PAGE_REGISTRY,
  PUBLIC_PAGE_PATHS,
  validatePageRegistry,
} from './content/page.registry';
import type { PageDefinition, PageKey, PagePath } from './content/page.types';

const REQUIRED_PATHS = [
  '/',
  '/loesungen/technische-anfragequalifizierung/',
  '/leistungen/rfq-readiness-workshop/',
  '/leistungen/interner-rfq-copilot/',
  '/branchen/end-of-line/',
  '/branchen/verpackungsmaschinen/',
  '/branchen/palettieranlagen/',
  '/standorte/stuttgart/',
  '/ueber-hugo-menz/',
  '/kontakt/',
  '/en/',
  '/n8n-beratung-stuttgart/',
] as const satisfies readonly PagePath[];

const HOME_ALTERNATES = [
  { hreflang: 'de-DE', path: '/', href: 'https://www.hugomenz.de/' },
  { hreflang: 'en', path: '/en/', href: 'https://www.hugomenz.de/en/' },
  { hreflang: 'x-default', path: '/', href: 'https://www.hugomenz.de/' },
] as const;

const routeSource = readFileSync(new URL('./app.routes.ts', import.meta.url), 'utf8');

function unique<T>(values: readonly T[]): boolean {
  return new Set(values).size === values.length;
}

function indexableText(page: PageDefinition): string {
  return JSON.stringify({
    seo: page.seo,
    hero: page.hero,
    sections: page.sections,
    faq: page.faq,
    finalCta: page.finalCta,
    footer: page.footer,
  });
}

describe('public page registry', () => {
  it('defines exactly the 12 required public routes', () => {
    expect(PAGE_REGISTRY).toHaveLength(12);
    expect(new Set(PUBLIC_PAGE_PATHS)).toEqual(new Set(REQUIRED_PATHS));
    expect(validatePageRegistry()).toEqual([]);
  });

  it('maps every registry entry to one explicit Angular route and page key', () => {
    const routeEntries = [
      ...routeSource.matchAll(/pageRoute\(\s*'([^']*)'\s*,\s*'([^']+)'\s*\)/g),
    ].map((match) => {
      const path = match[1] === '' ? '/' : `/${match[1]}/`;
      return [path, match[2]] as const;
    });

    expect(routeEntries).toHaveLength(PAGE_REGISTRY.length);
    expect(new Map(routeEntries)).toEqual(
      new Map(PAGE_REGISTRY.map((page) => [page.path, page.key] as const)),
    );
    expect(routeSource).toMatch(/\{\s*path:\s*'\*\*',\s*component:\s*NotFoundComponent\s*\}/);
  });

  it('keeps titles, descriptions, H1s and self-canonical URLs complete and unique', () => {
    expect(unique(PAGE_REGISTRY.map((page) => page.key))).toBe(true);
    expect(unique(PAGE_REGISTRY.map((page) => page.path))).toBe(true);
    expect(unique(PAGE_REGISTRY.map((page) => page.seo.title))).toBe(true);
    expect(unique(PAGE_REGISTRY.map((page) => page.seo.description))).toBe(true);
    expect(unique(PAGE_REGISTRY.map((page) => page.hero.h1))).toBe(true);
    expect(unique(PAGE_REGISTRY.map((page) => getCanonicalUrl(page)))).toBe(true);

    for (const page of PAGE_REGISTRY) {
      expect(page.seo.title.trim(), `${page.key} title`).not.toBe('');
      expect(page.seo.description.trim(), `${page.key} description`).not.toBe('');
      expect(page.hero.h1.trim(), `${page.key} H1`).not.toBe('');
      expect(page.seo.canonicalPath, `${page.key} canonical path`).toBe(page.path);
      expect(getCanonicalUrl(page), `${page.key} canonical URL`).toBe(
        new URL(page.path, 'https://www.hugomenz.de/').toString(),
      );
      expect(['de', 'en']).toContain(page.lang);
    }
  });
});

describe('German home content guardrails', () => {
  const home = getPageByKey('home-de');

  it('locks the approved primary positioning and conversion copy', () => {
    expect(home.path).toBe('/');
    expect(home.lang).toBe('de');
    expect(home.locale).toBe('de_DE');
    expect(home.seo.title).toBe(
      'Angebotsprozesse im Maschinenbau digitalisieren | Hugo Menz',
    );
    expect(home.seo.description).toBe(
      'Technische Anfragen strukturieren, Lücken erkennen und eine regelbasierte Budgetbasis vorbereiten – als interner Pilot für einen klar abgegrenzten Angebotsbereich.',
    );
    expect(home.hero.h1).toBe('Angebotsprozesse im Maschinenbau digitalisieren');
    expect(home.hero.lead).toBe(
      'Ich unterstütze Maschinenbauer dabei, unvollständige Anfragen, E-Mails, Lastenhefte, Fotos und PDFs in eine prüfbare Anforderungsakte mit offenen Punkten, Risiken und einer regelbasierten Budgetbasis zu überführen – vor der Freigabe durch den Vertriebsingenieur.',
    );
    expect(home.hero.primaryCta).toEqual({
      label: 'Pilot-Eignung prüfen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-hero',
    });
    expect(home.hero.trustLine).toBe(
      'Ein klarer Anwendungsfall · freigegebene Regeln · menschliche Prüfung',
    );
    expect(home.hero.h1).not.toBe('Ich automatisiere Prozesse, die jeden Tag Zeit kosten.');
  });

  it('locks the traceable RFQ flow and the human decision boundary', () => {
    expect(home.hero.diagram?.nodes).toEqual([
      { stage: 'Eingang', label: 'E-Mail · Lastenheft · Fotos' },
      { stage: 'Strukturieren', label: 'Anforderungen und Quellen' },
      { stage: 'Prüfen', label: 'Lücken · Widersprüche · Risiken' },
      { stage: 'Berechnen', label: 'freigegebene Regeln' },
      { stage: 'Freigeben', label: 'Vertriebsingenieur' },
    ]);
    expect(home.hero.diagram?.footer).toBe(
      'keine erfundenen Preise · keine autonome Freigabe',
    );

    const text = indexableText(home);
    expect(text).toContain('Interpretation, Regelwerk und menschliche Entscheidung getrennt');
    expect(text).toContain('deterministische Regeln');
    expect(text).toContain('menschlicher Freigabe');
  });

  it('keeps the visible scope broader than packaging and palletising examples', () => {
    const text = indexableText(home);

    expect(text).not.toContain('Maschinenfamilie');
    expect(text).toContain('keine Einschränkung des Angebots');
    expect(text).toContain('Montage-, Handhabungs- und Prüfanlagen');
    expect(text).toContain('Fördertechnik, Robotik und Automatisierung');
  });
});

describe('English home and hreflang', () => {
  const germanHome = getPageByKey('home-de');
  const englishHome = getPageByKey('home-en');

  it('publishes a complete, independently canonical English home', () => {
    expect(englishHome.path).toBe('/en/');
    expect(englishHome.lang).toBe('en');
    expect(englishHome.locale).toBe('en');
    expect(englishHome.seo.title).toBe(
      'Digitise quotation processes for machinery manufacturers | Hugo Menz',
    );
    expect(englishHome.seo.description).toBe(
      'Structure technical requests, identify missing information and prepare a rule-based budget basis for one machine family with human approval.',
    );
    expect(englishHome.hero.h1).toBe(
      'Digitise quotation processes for machinery manufacturers',
    );
    expect(englishHome.hero.lead).toContain('before approval by a sales engineer');
    expect(englishHome.hero.trustLine).toBe(
      'One machine family · approved rules · human review',
    );
    expect(englishHome.sections.length).toBeGreaterThanOrEqual(6);
    expect(getCanonicalUrl(germanHome)).not.toBe(getCanonicalUrl(englishHome));
  });

  it('emits reciprocal de-DE, en and x-default alternates on the two homes only', () => {
    expect(getAbsoluteHreflangAlternates(germanHome)).toEqual(HOME_ALTERNATES);
    expect(getAbsoluteHreflangAlternates(englishHome)).toEqual(HOME_ALTERNATES);

    const pagesWithAlternates = PAGE_REGISTRY.filter(
      (page) => (page.seo.alternates?.length ?? 0) > 0,
    );
    expect(pagesWithAlternates.map((page) => page.key)).toEqual(['home-de', 'home-en']);

    for (const page of PAGE_REGISTRY.filter(
      (candidate) => !(['home-de', 'home-en'] as PageKey[]).includes(candidate.key),
    )) {
      expect(page.seo.alternates, `${page.key} alternates`).toBeUndefined();
    }
  });
});

describe('content trust guardrails', () => {
  const allContent = PAGE_REGISTRY.map(indexableText).join('\n');
  const germanContent = PAGE_REGISTRY.filter((page) => page.lang === 'de')
    .map(indexableText)
    .join('\n');

  it('uses natural German scope wording instead of Maschinenfamilie', () => {
    expect(germanContent).not.toContain('Maschinenfamilie');
  });

  it('does not publish invented proof, guarantees or result claims', () => {
    const forbiddenClaims = [
      /\b50\s*%\s+Zeit\s+sparen\b/i,
      /\b90\s*%\b/i,
      /\bgarantiert\b/i,
      /\bunsere Kunden\b/i,
      /\bführende(?:n|r|s)? Kunden\b/i,
      /\bMarktführer\b/i,
      /\bVollautomatisch\b/i,
      /\bFehlerfrei\b/i,
      /\b(?:ROI|Return on Investment)\b/i,
      /\b(?:Kundenreferenz|Kundenlogo|Testimonial|Client logo)\b/i,
      /\b(?:Genauigkeit|Accuracy|Conversion|Konversion)\s*(?:von|of|:)?\s*\d/i,
      /\b\d+(?:[.,]\d+)?\s*%\b/i,
      /\b\d+(?:[.,]\d+)?\s*(?:Stunden?|Tage?)\s+(?:Zeit\s+)?sparen\b/i,
    ];

    for (const claim of forbiddenClaims) {
      expect(allContent, `forbidden claim ${claim}`).not.toMatch(claim);
    }
  });

  it('does not publish unconfirmed numeric prices', () => {
    expect(allContent).not.toMatch(/(?:€|EUR)\s*\d|\d[\d.,]*\s*(?:€|EUR)\b/i);
    expect(allContent).not.toMatch(/\b\d[\d.,]*\s*Euro\b/i);
  });
});
