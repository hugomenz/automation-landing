import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ORIGIN = 'https://www.hugomenz.de';
const DIST_ROOT = fileURLToPath(new URL('../dist/landing/browser/', import.meta.url));
const MINIMUM_MAIN_CHARACTERS = 500;
const MINIMUM_MAIN_WORDS = 70;

const pages = [
  {
    path: '/',
    lang: 'de',
    title: 'Angebotsprozesse im Maschinenbau digitalisieren | Hugo Menz',
    h1: 'Angebotsprozesse im Maschinenbau digitalisieren',
  },
  {
    path: '/loesungen/technische-anfragequalifizierung/',
    lang: 'de',
    title: 'Technische Anfragequalifizierung im Maschinenbau | Hugo Menz',
    h1: 'Technische Anfragen vor dem Angebot strukturiert qualifizieren',
  },
  {
    path: '/leistungen/rfq-readiness-workshop/',
    lang: 'de',
    title: 'RFQ Readiness Workshop für Maschinenbauer | Hugo Menz',
    h1: 'Ist Ihr Angebotsprozess bereit für einen internen RFQ-Piloten?',
  },
  {
    path: '/leistungen/interner-rfq-copilot/',
    lang: 'de',
    title: 'Interner RFQ-Copilot für Maschinenbauer | Hugo Menz',
    h1: 'Interner RFQ-Copilot für klar abgegrenzte Angebotsbereiche',
  },
  {
    path: '/branchen/end-of-line/',
    lang: 'de',
    title: 'Angebotsprozesse für End-of-Line-Anlagen digitalisieren | Hugo Menz',
    h1: 'Angebotsprozesse für End-of-Line-Anlagen digitalisieren',
  },
  {
    path: '/branchen/verpackungsmaschinen/',
    lang: 'de',
    title: 'Technische Anfragequalifizierung für Verpackungsmaschinen | Hugo Menz',
    h1: 'Technische Anfragequalifizierung für Verpackungsmaschinen',
  },
  {
    path: '/branchen/palettieranlagen/',
    lang: 'de',
    title: 'Angebotsqualifizierung für Palettieranlagen | Hugo Menz',
    h1: 'Angebotsqualifizierung für robotergestützte Palettieranlagen',
  },
  {
    path: '/standorte/stuttgart/',
    lang: 'de',
    title: 'Angebotsprozess-Automatisierung für Maschinenbauer in Stuttgart | Hugo Menz',
    h1: 'Angebotsprozess-Automatisierung für Maschinenbauer in Stuttgart',
  },
  {
    path: '/ueber-hugo-menz/',
    lang: 'de',
    title: 'Über Hugo Menz | Maschinenbau, Webentwicklung und Automatisierung',
    h1: 'Maschinenbau-Erfahrung trifft Webentwicklung und Automatisierung',
  },
  {
    path: '/kontakt/',
    lang: 'de',
    title: 'Pilot-Eignung prüfen | Kontakt zu Hugo Menz',
    h1: 'Eignung für einen Pilot prüfen',
  },
  {
    path: '/en/',
    lang: 'en',
    title: 'Digitise quotation processes for machinery manufacturers | Hugo Menz',
    h1: 'Digitise quotation processes for machinery manufacturers',
  },
  {
    path: '/n8n-beratung-stuttgart/',
    lang: 'de',
    title: 'n8n Beratung für technische Workflows in Stuttgart | Hugo Menz',
    h1: 'n8n Beratung für technische Workflows in Stuttgart',
  },
].map((page) => ({
  ...page,
  canonical: new URL(page.path, `${SITE_ORIGIN}/`).toString(),
}));

function decodeHtml(value) {
  const namedEntities = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    nbsp: ' ',
    quot: '"',
  };

  return value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
    if (code[0] === '#') {
      const radix = code[1]?.toLowerCase() === 'x' ? 16 : 10;
      const digits = radix === 16 ? code.slice(2) : code.slice(1);
      const point = Number.parseInt(digits, radix);
      return Number.isFinite(point) ? String.fromCodePoint(point) : entity;
    }

    return namedEntities[code.toLowerCase()] ?? entity;
  });
}

function normalizeText(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function attributes(tag) {
  const result = new Map();
  const attributePattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  const withoutTagName = tag.replace(/^<\/?[^\s>]+/, '').replace(/\/?\s*>$/, '');

  for (const match of withoutTagName.matchAll(attributePattern)) {
    result.set(match[1].toLowerCase(), decodeHtml(match[2] ?? match[3] ?? match[4] ?? ''));
  }

  return result;
}

function tagContents(html, tagName) {
  const pattern = new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'gi');
  return [...html.matchAll(pattern)].map((match) => match[1]);
}

function matchingTags(html, tagName, attributeName, attributeValue) {
  return (html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) ?? []).filter((tag) =>
    attributeValue === undefined
      ? attributes(tag).has(attributeName)
      : attributes(tag).get(attributeName) === attributeValue,
  );
}

function singleAttributeValue(tags, attributeName) {
  return tags.length === 1 ? attributes(tags[0]).get(attributeName) : undefined;
}

function pageFile(path) {
  if (path === '/') return join(DIST_ROOT, 'index.html');
  return join(DIST_ROOT, ...path.split('/').filter(Boolean), 'index.html');
}

function validatePage(page) {
  const errors = [];
  const file = pageFile(page.path);

  if (!existsSync(file)) {
    return [`missing ${file}`];
  }

  const html = readFileSync(file, 'utf8');
  const htmlTags = html.match(/<html\b[^>]*>/gi) ?? [];
  const titles = tagContents(html, 'title').map(normalizeText);
  const h1s = tagContents(html, 'h1').map(normalizeText);
  const appRoots = tagContents(html, 'app-root');
  const mainElements = tagContents(html, 'main');
  const descriptions = matchingTags(html, 'meta', 'name', 'description');
  const robots = matchingTags(html, 'meta', 'name', 'robots');
  const ogUrl = matchingTags(html, 'meta', 'property', 'og:url');
  const ogLocale = matchingTags(html, 'meta', 'property', 'og:locale');
  const ogImage = matchingTags(html, 'meta', 'property', 'og:image');
  const twitterCard = matchingTags(html, 'meta', 'name', 'twitter:card');
  const twitterImage = matchingTags(html, 'meta', 'name', 'twitter:image');
  const canonicalLinks = (html.match(/<link\b[^>]*>/gi) ?? []).filter((tag) => {
    const rel = attributes(tag).get('rel') ?? '';
    return rel.toLowerCase().split(/\s+/).includes('canonical');
  });
  const schemaScripts = [...html.matchAll(/<script\b[^>]*data-page-schema[^>]*>([\s\S]*?)<\/script>/gi)];

  if (htmlTags.length !== 1) {
    errors.push(`expected one <html> element, found ${htmlTags.length}`);
  } else {
    const lang = attributes(htmlTags[0]).get('lang');
    if (lang !== page.lang) {
      errors.push(`expected html lang ${JSON.stringify(page.lang)}, found ${JSON.stringify(lang)}`);
    }
  }

  if (titles.length !== 1) {
    errors.push(`expected one <title>, found ${titles.length}`);
  } else if (titles[0] !== page.title) {
    errors.push(`title mismatch: expected ${JSON.stringify(page.title)}, found ${JSON.stringify(titles[0])}`);
  }

  if (canonicalLinks.length !== 1) {
    errors.push(`expected one canonical link, found ${canonicalLinks.length}`);
  } else {
    const canonical = attributes(canonicalLinks[0]).get('href');
    if (canonical !== page.canonical) {
      errors.push(
        `canonical mismatch: expected ${JSON.stringify(page.canonical)}, found ${JSON.stringify(canonical)}`,
      );
    }
  }

  if (descriptions.length !== 1 || !singleAttributeValue(descriptions, 'content')?.trim()) {
    errors.push(`expected one non-empty meta description, found ${descriptions.length}`);
  }
  if (robots.length !== 1 || singleAttributeValue(robots, 'content') !== 'index,follow') {
    errors.push('expected one index,follow robots meta tag');
  }
  if (ogUrl.length !== 1 || singleAttributeValue(ogUrl, 'content') !== page.canonical) {
    errors.push('Open Graph URL does not match the canonical URL');
  }
  const expectedLocale = page.lang === 'de' ? 'de_DE' : 'en';
  if (ogLocale.length !== 1 || singleAttributeValue(ogLocale, 'content') !== expectedLocale) {
    errors.push(`expected Open Graph locale ${expectedLocale}`);
  }
  const expectedSocialImage = `${SITE_ORIGIN}/og-rfq-preview.png`;
  if (ogImage.length !== 1 || singleAttributeValue(ogImage, 'content') !== expectedSocialImage) {
    errors.push('expected the RFQ-specific Open Graph image');
  }
  if (
    twitterCard.length !== 1 ||
    singleAttributeValue(twitterCard, 'content') !== 'summary_large_image' ||
    twitterImage.length !== 1 ||
    singleAttributeValue(twitterImage, 'content') !== expectedSocialImage
  ) {
    errors.push('expected complete Twitter card metadata');
  }

  if (h1s.length !== 1) {
    errors.push(`expected one <h1>, found ${h1s.length}`);
  } else if (h1s[0] !== page.h1) {
    errors.push(`H1 mismatch: expected ${JSON.stringify(page.h1)}, found ${JSON.stringify(h1s[0])}`);
  }

  if (appRoots.length !== 1) {
    errors.push(`expected one <app-root>, found ${appRoots.length}`);
  } else if (normalizeText(appRoots[0]) === '') {
    errors.push('<app-root> is empty; the route was not prerendered');
  }

  if (page.path !== '/' && page.path !== '/en/' && !/class=["'][^"']*breadcrumbs\b/i.test(html)) {
    errors.push('visible breadcrumbs are missing');
  }

  if (schemaScripts.length !== 1) {
    errors.push(`expected one page JSON-LD graph, found ${schemaScripts.length}`);
  } else {
    try {
      const schema = JSON.parse(decodeHtml(schemaScripts[0][1]));
      const types = new Set((schema['@graph'] ?? []).map((entry) => entry['@type']));
      if (!types.has('BreadcrumbList')) errors.push('JSON-LD is missing BreadcrumbList');

      const expectedPrimaryType =
        page.path === '/ueber-hugo-menz/'
          ? 'Person'
          : page.path === '/kontakt/'
            ? 'ContactPage'
            : page.path === '/' || page.path === '/en/' || page.path === '/standorte/stuttgart/'
              ? 'ProfessionalService'
              : 'Service';
      if (!types.has(expectedPrimaryType)) {
        errors.push(`JSON-LD is missing ${expectedPrimaryType}`);
      }
    } catch {
      errors.push('page JSON-LD is not valid JSON');
    }
  }

  if (mainElements.length !== 1) {
    errors.push(`expected one <main>, found ${mainElements.length}`);
  } else {
    const mainText = normalizeText(
      mainElements[0]
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
        .replace(/<template\b[^>]*>[\s\S]*?<\/template>/gi, ' '),
    );
    const wordCount = mainText === '' ? 0 : mainText.split(/\s+/).length;

    if (mainText.length < MINIMUM_MAIN_CHARACTERS) {
      errors.push(
        `main content is too short: ${mainText.length} characters (minimum ${MINIMUM_MAIN_CHARACTERS})`,
      );
    }
    if (wordCount < MINIMUM_MAIN_WORDS) {
      errors.push(`main content is too short: ${wordCount} words (minimum ${MINIMUM_MAIN_WORDS})`);
    }
  }

  return errors;
}

if (!existsSync(DIST_ROOT)) {
  console.error(`Prerender verification failed: build output does not exist at ${DIST_ROOT}`);
  console.error('Run "npm run build" before "npm run verify:prerender".');
  process.exitCode = 1;
} else {
  const failures = pages.flatMap((page) =>
    validatePage(page).map((message) => `${page.path}: ${message}`),
  );

  if (failures.length > 0) {
    console.error(`Prerender verification failed with ${failures.length} error(s):`);
    for (const failure of failures) console.error(`- ${failure}`);
    console.error(`Build root: ${dirname(pageFile('/'))}`);
    process.exitCode = 1;
  } else {
    console.log(`Verified ${pages.length} prerendered routes in ${DIST_ROOT}`);
  }
}
