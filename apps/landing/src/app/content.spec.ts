import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
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
  '/ki-sichtbarkeit-industrie/',
  '/en/ai-search-readiness-industrial-companies/',
] as const satisfies readonly PagePath[];

const HOME_ALTERNATES = [
  { hreflang: 'de-DE', path: '/', href: 'https://www.hugomenz.de/' },
  { hreflang: 'en', path: '/en/', href: 'https://www.hugomenz.de/en/' },
  { hreflang: 'x-default', path: '/', href: 'https://www.hugomenz.de/' },
] as const;

const INDUSTRIAL_AI_SEARCH_ALTERNATES = [
  {
    hreflang: 'de-DE',
    path: '/ki-sichtbarkeit-industrie/',
    href: 'https://www.hugomenz.de/ki-sichtbarkeit-industrie/',
  },
  {
    hreflang: 'en',
    path: '/en/ai-search-readiness-industrial-companies/',
    href: 'https://www.hugomenz.de/en/ai-search-readiness-industrial-companies/',
  },
  {
    hreflang: 'x-default',
    path: '/ki-sichtbarkeit-industrie/',
    href: 'https://www.hugomenz.de/ki-sichtbarkeit-industrie/',
  },
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
  it('defines exactly the 14 required public routes', () => {
    expect(PAGE_REGISTRY).toHaveLength(14);
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
      'UX Engineering und Prozessautomatisierung | Hugo Menz',
    );
    expect(home.seo.description).toBe(
      'Nutzerfreundliche interne Tools, Prozessautomatisierung und Systemintegrationen für komplexe technische und betriebliche Abläufe.',
    );
    expect(home.hero.h1).toBe('Digitale Prozesse verständlich und nutzbar machen');
    expect(home.hero.lead).toBe(
      'Ich verbinde UX Engineering, Interface-Entwicklung und Automatisierung, um unübersichtliche Arbeitsabläufe in klare, bedienbare digitale Prozesse zu überführen – besonders dort, wo Dokumente, Fachwissen und mehrere Systeme zusammenkommen.',
    );
    expect(home.hero.primaryCta).toEqual({
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-hero',
    });
    expect(home.hero.trustLine).toBe(
      'UX Engineering · klare Prozesse · kontrollierte Automatisierung',
    );
  });

  it('locks the traceable process flow and the human decision boundary', () => {
    expect(home.hero.diagram?.nodes).toEqual([
      { stage: 'Eingang', label: 'E-Mail · Formular · Dokument' },
      { stage: 'Strukturieren', label: 'Daten und Kontext' },
      { stage: 'Bearbeiten', label: 'Regeln und Integrationen' },
      { stage: 'Prüfen', label: 'Ausnahmen und Freigaben' },
      { stage: 'Übergeben', label: 'Team · CRM · Fachsystem' },
    ]);
    expect(home.hero.diagram?.footer).toBe(
      'nachvollziehbar · nutzerzentriert · kontrolliert',
    );

    const text = indexableText(home);
    expect(text).toContain('Ausnahmen und menschliche Entscheidungen sichtbar halten');
    expect(text).toContain('nur dort automatisiert, wo Regeln und Daten dafür ausreichen');
    expect(text).toContain('UX Engineering mit industrieller Prozesserfahrung');
  });
});

describe('English home and bilingual hreflang', () => {
  const germanHome = getPageByKey('home-de');
  const englishHome = getPageByKey('home-en');
  const germanIndustrialAiSearch = getPageByKey('industrial-ai-search-de');
  const englishIndustrialAiSearch = getPageByKey('industrial-ai-search-en');

  it('publishes a complete, independently canonical English home', () => {
    expect(englishHome.path).toBe('/en/');
    expect(englishHome.lang).toBe('en');
    expect(englishHome.locale).toBe('en');
    expect(englishHome.seo.title).toBe(
      'UX Engineering and Process Automation | Hugo Menz',
    );
    expect(englishHome.seo.description).toBe(
      'User-friendly internal tools, process automation and system integrations for complex technical and operational workflows.',
    );
    expect(englishHome.hero.h1).toBe('Make digital processes clear and usable');
    expect(englishHome.hero.lead).toContain('UX engineering, interface development and automation');
    expect(englishHome.hero.trustLine).toBe(
      'UX engineering · clear processes · controlled automation',
    );
    expect(englishHome.sections.length).toBeGreaterThanOrEqual(6);
    expect(getCanonicalUrl(germanHome)).not.toBe(getCanonicalUrl(englishHome));
  });

  it('emits reciprocal de-DE, en and x-default alternates on translated page pairs only', () => {
    expect(getAbsoluteHreflangAlternates(germanHome)).toEqual(HOME_ALTERNATES);
    expect(getAbsoluteHreflangAlternates(englishHome)).toEqual(HOME_ALTERNATES);
    expect(getAbsoluteHreflangAlternates(germanIndustrialAiSearch)).toEqual(
      INDUSTRIAL_AI_SEARCH_ALTERNATES,
    );
    expect(getAbsoluteHreflangAlternates(englishIndustrialAiSearch)).toEqual(
      INDUSTRIAL_AI_SEARCH_ALTERNATES,
    );

    const pagesWithAlternates = PAGE_REGISTRY.filter(
      (page) => (page.seo.alternates?.length ?? 0) > 0,
    );
    expect(pagesWithAlternates.map((page) => page.key)).toEqual([
      'home-de',
      'home-en',
      'industrial-ai-search-de',
      'industrial-ai-search-en',
    ]);

    for (const page of PAGE_REGISTRY.filter(
      (candidate) =>
        !(
          [
            'home-de',
            'home-en',
            'industrial-ai-search-de',
            'industrial-ai-search-en',
          ] as PageKey[]
        ).includes(candidate.key),
    )) {
      expect(page.seo.alternates, `${page.key} alternates`).toBeUndefined();
    }
  });
});

describe('industrial AI-search campaign', () => {
  const germanPage = getPageByKey('industrial-ai-search-de');
  const englishPage = getPageByKey('industrial-ai-search-en');

  it('publishes the approved positioning and indexable metadata in both languages', () => {
    expect(germanPage.path).toBe('/ki-sichtbarkeit-industrie/');
    expect(germanPage.hero.h1).toBe('KI-Sichtbarkeit für Industrieunternehmen');
    expect(germanPage.seo.robots).toBe('index,follow');
    expect(englishPage.path).toBe('/en/ai-search-readiness-industrial-companies/');
    expect(englishPage.hero.h1).toBe('AI Search Readiness for Industrial Companies');
    expect(englishPage.seo.robots).toBe('index,follow');
    expect(germanPage.seo.openGraph.imagePath).toBe('/og-industrial-ai-search-de.png');
    expect(englishPage.seo.openGraph.imagePath).toBe('/og-industrial-ai-search-en.png');
    expect(
      existsSync(new URL('../../public/og-industrial-ai-search-de.png', import.meta.url)),
    ).toBe(true);
    expect(
      existsSync(new URL('../../public/og-industrial-ai-search-en.png', import.meta.url)),
    ).toBe(true);
  });

  it('uses the existing contact mechanism and publishes matching FAQ schema content', () => {
    expect(germanPage.hero.primaryCta?.href).toBe('#contact-form');
    expect(germanPage.finalCta.action.href).toBe('#contact-form');
    expect(englishPage.hero.primaryCta?.href).toBe('#contact-form');
    expect(englishPage.finalCta.action.href).toBe('#contact-form');
    expect(germanPage.faq?.items).toHaveLength(13);
    expect(englishPage.faq?.items).toHaveLength(13);
    expect(germanPage.schemaKinds).toEqual([
      'Service',
      'Person',
      'BreadcrumbList',
      'FAQPage',
    ]);
    expect(englishPage.schemaKinds).toEqual([
      'Service',
      'Person',
      'BreadcrumbList',
      'FAQPage',
    ]);
  });

  it('states the platform limitations and avoids a free-audit or result promise', () => {
    const germanText = indexableText(germanPage);
    const englishText = indexableText(englishPage);

    expect(germanText).toContain(
      'Kein Dienstleister kann eine Nennung, Quelle oder Empfehlung in einem bestimmten KI-System garantieren.',
    );
    expect(englishText).toContain(
      'No service provider can guarantee a mention, citation or recommendation in a specific AI system.',
    );
    expect(germanText).toContain('Die Ersteinschätzung ist kein vollständiges kostenloses Audit.');
    expect(englishText).toContain('The initial assessment is not a complete free audit.');
  });

  it('connects the Hugo Menz brand with the Stuttgart AI-search service', () => {
    const germanText = indexableText(germanPage);
    const englishText = indexableText(englishPage);

    expect(germanText).toContain(
      'Hugo Menz Automation bietet diesen Audit von Stuttgart aus',
    );
    expect(germanText).toContain('Bietet Hugo Menz GEO oder KI-SEO in Stuttgart an?');
    expect(englishText).toContain(
      'From Stuttgart, Hugo Menz Automation offers this audit',
    );
    expect(englishText).toContain(
      'Does Hugo Menz offer GEO or AI-search optimization in Stuttgart?',
    );
  });
});

describe('content trust guardrails', () => {
  const allContent = PAGE_REGISTRY.map(indexableText).join('\n');

  it('does not publish invented proof, guarantees or result claims', () => {
    const contentWithoutApprovedGuaranteeQuestion = allContent.replace(
      'Kann eine Erwähnung in ChatGPT oder Gemini garantiert werden?',
      '',
    );
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
      expect(contentWithoutApprovedGuaranteeQuestion, `forbidden claim ${claim}`).not.toMatch(
        claim,
      );
    }
  });

  it('does not publish unconfirmed numeric prices', () => {
    expect(allContent).not.toMatch(/(?:€|EUR)\s*\d|\d[\d.,]*\s*(?:€|EUR)\b/i);
    expect(allContent).not.toMatch(/\b\d[\d.,]*\s*Euro\b/i);
  });
});
