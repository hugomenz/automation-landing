import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  getAbsoluteHreflangAlternates,
  getCanonicalUrl,
  getPageByKey,
  getPageLinks,
  PAGE_REGISTRY,
  PUBLIC_PAGE_PATHS,
  validatePageRegistry,
} from './content/page.registry';
import type { PageDefinition, PageKey, PagePath } from './content/page.types';

const REQUIRED_PATHS = [
  '/',
  '/leistungen/',
  '/leistungen/angular-entwicklung/',
  '/leistungen/github-copilot/',
  '/leistungen/prozessautomatisierung/',
  '/ueber-hugo-martin/',
  '/kontakt/',
  '/standorte/stuttgart/',
  '/n8n-beratung-stuttgart/',
  '/en/',
  '/en/services/',
  '/en/angular-development/',
  '/en/github-copilot/',
  '/en/process-automation/',
  '/en/about/',
  '/en/contact/',
] as const satisfies readonly PagePath[];
const pageByPath = new Map(PAGE_REGISTRY.map((page) => [page.path, page]));
const legacyRedirects = JSON.parse(
  readFileSync(new URL('./legacy-redirects.json', import.meta.url), 'utf8'),
) as readonly { from: string; to: string }[];

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

function sortedAlternates(page: PageDefinition): readonly string[] {
  return getAbsoluteHreflangAlternates(page)
    .map(({ hreflang, href }) => `${hreflang}:${href}`)
    .sort();
}

describe('public service page registry', () => {
  it('publishes the 16 agreed routes and passes registry validation', () => {
    expect(PAGE_REGISTRY).toHaveLength(REQUIRED_PATHS.length);
    expect(new Set(PUBLIC_PAGE_PATHS)).toEqual(new Set(REQUIRED_PATHS));
    expect(validatePageRegistry()).toEqual([]);
  });

  it('keeps metadata, H1s, paths and canonical URLs complete and unique', () => {
    const uniqueFields = [
      PAGE_REGISTRY.map((page) => page.key),
      PUBLIC_PAGE_PATHS,
      PAGE_REGISTRY.map((page) => page.seo.title),
      PAGE_REGISTRY.map((page) => page.seo.description),
      PAGE_REGISTRY.map((page) => page.hero.h1),
      PAGE_REGISTRY.map(getCanonicalUrl),
    ];
    for (const values of uniqueFields) {
      expect(new Set(values).size).toBe(values.length);
      expect(values.every((value) => value.trim().length > 0)).toBe(true);
    }
    for (const page of PAGE_REGISTRY) {
      expect(page.seo.canonicalPath, page.key).toBe(page.path);
      expect(getCanonicalUrl(page)).toBe(new URL(page.path, 'https://www.hugomenz.de/').href);
      expect(page.lang).toBe(page.path.startsWith('/en/') ? 'en' : 'de');
      expect(page.locale).toBe(page.lang === 'de' ? 'de_DE' : 'en_GB');
      expect(page.seo.robots).toBe('index,follow');
    }
  });

  it('rejects an intermediate breadcrumb without a crawlable destination', () => {
    const page = getPageByKey('angular-development-de');
    const invalidPage: PageDefinition = {
      ...page,
      breadcrumbs: [
        { label: 'Startseite', path: '/' },
        { label: 'Leistungen' },
        { label: 'Angular', path: page.path },
      ],
    };
    const registry = PAGE_REGISTRY.map((entry) => entry.key === page.key ? invalidPage : entry);
    expect(validatePageRegistry(registry)).toContain(
      'Intermediate breadcrumb is missing a path for angular-development-de: Leistungen',
    );
  });

  it('links only to public pages and existing section anchors', () => {
    for (const page of PAGE_REGISTRY) {
      for (const link of getPageLinks(page)) {
        expect(link.label.trim(), `${page.key} link label`).not.toBe('');
        const destination = new URL(link.href, getCanonicalUrl(page));
        if (destination.origin !== 'https://www.hugomenz.de') continue;
        const target = pageByPath.get(destination.pathname as PagePath);
        expect(target, `${page.key}: ${link.href}`).toBeDefined();
        if (target && destination.hash) {
          const anchors = new Set([
            'contact-form', 'content', 'contact', 'main-content', 'top',
            ...target.sections.map((section) => section.id),
            ...(target.faq ? [target.faq.id] : []),
          ]);
          expect(anchors.has(destination.hash.slice(1)), `${page.key}: ${link.href}`).toBe(true);
        }
      }
      for (const breadcrumb of page.breadcrumbs) {
        if (breadcrumb.path) expect(pageByPath.has(breadcrumb.path), page.key).toBe(true);
      }
    }
  });

  it('keeps legacy redirects outside the registry and resolves them without chains', () => {
    expect(legacyRedirects.length).toBeGreaterThan(0);
    expect(new Set(legacyRedirects.map(({ from }) => from)).size).toBe(legacyRedirects.length);
    for (const { from, to } of legacyRedirects) {
      expect(pageByPath.has(from as PagePath), from).toBe(false);
      expect(pageByPath.has(to as PagePath), `${from} -> ${to}`).toBe(true);
      expect(from).not.toBe(to);
      expect(from).toMatch(/^\/.*\/$/);
      expect(to).toMatch(/^\/(?:.*\/)?$/);
    }
  });
});

describe('bilingual pages', () => {
  it('publishes seven reciprocal language pairs, with German as x-default', () => {
    const translated = PAGE_REGISTRY.filter((page) => page.seo.alternates?.length);
    expect(translated).toHaveLength(14);
    for (const page of translated) {
      const alternates = getAbsoluteHreflangAlternates(page);
      expect(new Set(alternates.map(({ hreflang }) => hreflang))).toEqual(
        new Set(['de-DE', 'en', 'x-default']),
      );
      expect(alternates).toHaveLength(3);
      const german = alternates.find(({ hreflang }) => hreflang === 'de-DE')!;
      const english = alternates.find(({ hreflang }) => hreflang === 'en')!;
      const fallback = alternates.find(({ hreflang }) => hreflang === 'x-default')!;
      expect(fallback.path).toBe(german.path);
      expect(pageByPath.get(german.path)?.lang).toBe('de');
      expect(pageByPath.get(english.path)?.lang).toBe('en');
      expect([german.path, english.path]).toContain(page.path);
      expect(sortedAlternates(pageByPath.get(german.path)!)).toEqual(sortedAlternates(page));
      expect(sortedAlternates(pageByPath.get(english.path)!)).toEqual(sortedAlternates(page));
      const languageLinks = (page.header?.navigation ?? [])
        .filter((link) => link.lang && link.lang !== page.lang);
      expect(languageLinks, page.key).toHaveLength(1);
      for (const link of languageLinks) {
        expect(link.href).toBe(page.lang === 'de' ? english.path : german.path);
      }
    }
  });

  it('does not invent translations for the two local German pages', () => {
    for (const key of ['stuttgart', 'n8n-consulting-stuttgart'] as const) {
      const page = getPageByKey(key);
      expect(page.lang).toBe('de');
      expect(page.seo.alternates).toBeUndefined();
    }
  });
});

describe('service positioning and contact intent', () => {
  it('makes each of the three service areas reachable from both homepages', () => {
    for (const [key, paths] of [
      ['home-de', ['/leistungen/angular-entwicklung/', '/leistungen/github-copilot/', '/leistungen/prozessautomatisierung/']],
      ['home-en', ['/en/angular-development/', '/en/github-copilot/', '/en/process-automation/']],
    ] as const) {
      const destinations = new Set(getPageLinks(getPageByKey(key)).map((link) => link.href));
      for (const path of paths) expect(destinations.has(path), `${key}: ${path}`).toBe(true);
    }
  });

  it('opens the shared contact form with the right service context', () => {
    const serviceContexts = [
      ['angular-development-de', 'angular'], ['angular-development-en', 'angular'],
      ['github-copilot-de', 'copilot'], ['github-copilot-en', 'copilot'],
      ['process-automation-de', 'process-automation'], ['process-automation-en', 'process-automation'],
    ] as const;
    for (const [key, context] of serviceContexts) {
      const page = getPageByKey(key);
      for (const action of [page.hero.primaryCta, page.finalCta.action]) {
        expect(action?.href, key).toBe('#contact-form');
        expect(action?.contactContext, key).toBe(context);
      }
    }
    for (const page of PAGE_REGISTRY) {
      for (const action of getPageLinks(page).filter((link) => link.href === '#contact-form')) {
        expect(['general', 'angular', 'copilot', 'process-automation']).toContain(
          action.contactContext ?? 'general',
        );
      }
    }
  });

  it('keeps the current role factual and limits design-system work to Angular', () => {
    for (const lang of ['de', 'en'] as const) {
      const about = indexableText(getPageByKey(`about-hugo-martin-${lang}` as PageKey));
      expect(about).toContain('UX Engineer');
      expect(about).toContain('EPLAN');
      const angular = indexableText(getPageByKey(`angular-development-${lang}` as PageKey));
      expect(angular).toContain('Angular');
      expect(angular).toMatch(/Komponentenbibliothek|component librar/i);
      expect(angular).not.toMatch(/Figma|UX\/UI.Design|UX.design services|UI.design services/i);
    }
  });
});

describe('content trust guardrails', () => {
  const content = PAGE_REGISTRY.map(indexableText).join('\n');

  it('removes the previous product marketing from indexable pages', () => {
    expect(content).not.toMatch(/\bRFQ\b|RFQ-Fit-Check|Industrial AI Visibility|KI-Sichtbarkeit für Industrieunternehmen/i);
    expect(content).not.toMatch(/Future FrontEnd|UX\/UI.Design|UX.design services|UI.design services/i);
  });

  it('does not invent clients, guarantees, performance figures or prices', () => {
    const unsupportedClaims = [
      /\b(?:unsere Kunden|our clients|trusted by|Marktführer|market leader)\b/i,
      /\b(?:garantiert|guaranteed results|Fehlerfrei|error.free|Vollautomatisch)\b/i,
      /\b(?:Kundenreferenz|Kundenlogo|Testimonial|client logo)\b/i,
      /\b\d+(?:[.,]\d+)?\s*%/i,
      /\b\d+(?:[.,]\d+)?\s*(?:Stunden?|Tage?)\s+(?:Zeit\s+)?sparen\b/i,
      /(?:€|EUR)\s*\d|\d[\d.,]*\s*(?:€|EUR|Euro)\b/i,
    ];
    for (const claim of unsupportedClaims) expect(content, String(claim)).not.toMatch(claim);
  });
});
