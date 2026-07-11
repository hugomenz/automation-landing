import { ABOUT_HUGO_MENZ, CONTACT, STUTTGART } from './de/company-pages';
import {
  INTERNAL_RFQ_COPILOT,
  RFQ_READINESS_WORKSHOP,
  TECHNICAL_REQUEST_QUALIFICATION,
} from './de/core-pages';
import { HOME_DE } from './de/home';
import { END_OF_LINE, PACKAGING_MACHINERY, PALLETISING_SYSTEMS } from './de/industry-pages';
import { N8N_CONSULTING_STUTTGART } from './de/n8n-page';
import { HOME_EN } from './en/home';
import type {
  ContentLink,
  HreflangAlternate,
  PageDefinition,
  PageKey,
  PagePath,
} from './page.types';

export const SITE_ORIGIN = 'https://www.hugomenz.de' as const;

export const PAGE_REGISTRY: readonly PageDefinition[] = [
  HOME_DE,
  TECHNICAL_REQUEST_QUALIFICATION,
  RFQ_READINESS_WORKSHOP,
  INTERNAL_RFQ_COPILOT,
  END_OF_LINE,
  PACKAGING_MACHINERY,
  PALLETISING_SYSTEMS,
  STUTTGART,
  ABOUT_HUGO_MENZ,
  CONTACT,
  HOME_EN,
  N8N_CONSULTING_STUTTGART,
];

export const PAGE_BY_KEY: ReadonlyMap<PageKey, PageDefinition> = new Map(
  PAGE_REGISTRY.map((page) => [page.key, page] as const),
);

export const PAGE_BY_PATH: ReadonlyMap<PagePath, PageDefinition> = new Map(
  PAGE_REGISTRY.map((page) => [page.path, page] as const),
);

export const PUBLIC_PAGE_PATHS: readonly PagePath[] = PAGE_REGISTRY.map((page) => page.path);

export function normalizePagePath(path: string): PagePath {
  const pathname = path.split(/[?#]/, 1)[0]?.trim() ?? '';

  if (pathname === '' || pathname === '/') {
    return '/';
  }

  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const withoutTrailingSlashes = withLeadingSlash.replace(/\/+$/, '');
  return `${withoutTrailingSlashes}/` as PagePath;
}

export function getPageByKey(key: PageKey): PageDefinition {
  const page = PAGE_BY_KEY.get(key);

  if (!page) {
    throw new Error(`Unknown public page key: ${key}`);
  }

  return page;
}

export function findPageByPath(path: string): PageDefinition | undefined {
  return PAGE_BY_PATH.get(normalizePagePath(path));
}

export function getPageByPath(path: string): PageDefinition {
  const page = findPageByPath(path);

  if (!page) {
    throw new Error(`Unknown public page path: ${path}`);
  }

  return page;
}

export function absoluteUrl(path: PagePath | `/${string}`, origin = SITE_ORIGIN): string {
  return new URL(path, `${origin.replace(/\/+$/, '')}/`).toString();
}

export function getCanonicalUrl(page: PageDefinition): string {
  return absoluteUrl(page.seo.canonicalPath);
}

export interface AbsoluteHreflangAlternate extends HreflangAlternate {
  readonly href: string;
}

export function getAbsoluteHreflangAlternates(
  page: PageDefinition,
): readonly AbsoluteHreflangAlternate[] {
  return (page.seo.alternates ?? []).map((alternate) => ({
    ...alternate,
    href: absoluteUrl(alternate.path),
  }));
}

export function getPageLinks(page: PageDefinition): readonly ContentLink[] {
  const links: ContentLink[] = [];

  if (page.header) {
    links.push(...page.header.navigation, page.header.cta);
  }

  if (page.hero.primaryCta) {
    links.push(page.hero.primaryCta);
  }

  if (page.hero.secondaryCta) {
    links.push(page.hero.secondaryCta);
  }

  for (const section of page.sections) {
    links.push(...(section.links ?? []));

    for (const item of section.items ?? []) {
      if (item.link) {
        links.push(item.link);
      }
    }
  }

  links.push(page.finalCta.action);

  if (page.footer?.secondaryLink) {
    links.push(page.footer.secondaryLink);
  }

  return links;
}

function duplicateValues(values: readonly string[]): readonly string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) {
      duplicates.add(value);
    }

    seen.add(value);
  }

  return [...duplicates];
}

export function validatePageRegistry(
  registry: readonly PageDefinition[] = PAGE_REGISTRY,
): readonly string[] {
  const errors: string[] = [];
  const uniqueFields: ReadonlyArray<readonly [string, readonly string[]]> = [
    ['key', registry.map((page) => page.key)],
    ['path', registry.map((page) => page.path)],
    ['title', registry.map((page) => page.seo.title)],
    ['description', registry.map((page) => page.seo.description)],
    ['canonicalPath', registry.map((page) => page.seo.canonicalPath)],
    ['H1', registry.map((page) => page.hero.h1)],
  ];

  for (const [field, values] of uniqueFields) {
    for (const duplicate of duplicateValues(values)) {
      errors.push(`Duplicate ${field}: ${duplicate}`);
    }
  }

  for (const page of registry) {
    if (page.path !== page.seo.canonicalPath) {
      errors.push(
        `Path and canonicalPath differ for ${page.key}: ${page.path} !== ${page.seo.canonicalPath}`,
      );
    }

    if (page.key !== 'home-de' && page.key !== 'home-en' && page.seo.alternates) {
      errors.push(`Only translated home pages may define hreflang alternates: ${page.key}`);
    }
  }

  return errors;
}
