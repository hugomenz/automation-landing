import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ORIGIN = 'https://www.hugomenz.de';
const DIST_ROOT = fileURLToPath(new URL('../dist/landing/browser/', import.meta.url));
const MINIMUM_MAIN_CHARACTERS = 500;
const MINIMUM_MAIN_WORDS = 70;
const SOCIAL_IMAGE_PATH = '/og-ai-services.png';
const FAVICON_PATH = '/hugo-martin-m.svg';
const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const legacyRedirects = JSON.parse(
  readFileSync(new URL('../src/app/legacy-redirects.json', import.meta.url), 'utf8'),
);
const pages = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, block]) => {
  const location = /<loc>\s*([^<]+?)\s*<\/loc>/.exec(block)?.[1];
  if (!location) throw new Error('Sitemap URL is missing its location');
  const canonical = decodeHtml(location);
  const url = new URL(canonical);
  if (url.origin !== SITE_ORIGIN || url.search || url.hash || !url.pathname.endsWith('/')) {
    throw new Error(`Invalid canonical sitemap URL: ${canonical}`);
  }
  const alternates = (block.match(/<xhtml:link\b[^>]*>/g) ?? []).map((tag) => {
    const entry = attributes(tag);
    return { hreflang: entry.get('hreflang'), href: entry.get('href') };
  });
  return {
    path: url.pathname,
    lang: url.pathname.startsWith('/en/') ? 'en' : 'de',
    canonical,
    socialImage: SOCIAL_IMAGE_PATH,
    alternates,
  };
});
if (pages.length === 0) throw new Error('Sitemap contains no public pages');
const canonicalPaths = new Set(pages.map(({ path }) => path));
if (canonicalPaths.size !== pages.length) throw new Error('Sitemap contains duplicate paths');
const seenTitles = new Map();
const seenDescriptions = new Map();
const seenHeadings = new Map();

function verifyUnique(label, value, path, seen, errors) {
  const previous = seen.get(value);
  if (previous) errors.push(`${label} duplicates ${previous}`);
  else seen.set(value, path);
}

function sortedAlternates(alternates) {
  return alternates.map(({ hreflang, href }) => `${hreflang}:${href}`).sort();
}

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
  const alternateLinks = (html.match(/<link\b[^>]*>/gi) ?? []).filter((tag) => {
    const tagAttributes = attributes(tag);
    const rel = tagAttributes.get('rel') ?? '';
    return rel.toLowerCase().split(/\s+/).includes('alternate') && tagAttributes.has('hreflang');
  });
  const schemaScripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].filter(
    (match) => attributes('<script ' + match[1] + '>').get('type') === 'application/ld+json',
  );
  const imageTags = html.match(/<img\b[^>]*>/gi) ?? [];

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
  } else if (!titles[0]) {
    errors.push('title is empty');
  } else {
    verifyUnique('title', titles[0], page.path, seenTitles, errors);
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
  const description = singleAttributeValue(descriptions, 'content')?.trim();
  if (description) verifyUnique('description', description, page.path, seenDescriptions, errors);

  const renderedAlternates = alternateLinks.map((tag) => {
    const tagAttributes = attributes(tag);
    return {
      hreflang: tagAttributes.get('hreflang'),
      href: tagAttributes.get('href'),
    };
  });
  const expectedAlternates = page.alternates ?? [];
  if (JSON.stringify(sortedAlternates(renderedAlternates)) !== JSON.stringify(sortedAlternates(expectedAlternates))) {
    errors.push(
      'hreflang mismatch: expected ' +
        JSON.stringify(expectedAlternates) +
        ', found ' +
        JSON.stringify(renderedAlternates),
    );
  }

  if (robots.length !== 1 || singleAttributeValue(robots, 'content') !== 'index,follow') {
    errors.push('expected one index,follow robots meta tag');
  }
  if (ogUrl.length !== 1 || singleAttributeValue(ogUrl, 'content') !== page.canonical) {
    errors.push('Open Graph URL does not match the canonical URL');
  }
  const expectedLocale = page.lang === 'de' ? 'de_DE' : 'en_GB';
  if (ogLocale.length !== 1 || singleAttributeValue(ogLocale, 'content') !== expectedLocale) {
    errors.push(`expected Open Graph locale ${expectedLocale}`);
  }
  const expectedSocialImage = new URL(page.socialImage, `${SITE_ORIGIN}/`).toString();
  const socialImageFile = join(DIST_ROOT, ...page.socialImage.split('/').filter(Boolean));
  if (!existsSync(socialImageFile)) {
    errors.push(`social image is missing: ${socialImageFile}`);
  }
  if (ogImage.length !== 1 || singleAttributeValue(ogImage, 'content') !== expectedSocialImage) {
    errors.push('expected the page-specific Open Graph image');
  }
  if (
    twitterCard.length !== 1 ||
    singleAttributeValue(twitterCard, 'content') !== 'summary_large_image' ||
    twitterImage.length !== 1 ||
    singleAttributeValue(twitterImage, 'content') !== expectedSocialImage
  ) {
    errors.push('expected complete Twitter card metadata');
  }

  const favicon = matchingTags(html, 'link', 'rel', 'icon');
  if (singleAttributeValue(favicon, 'href') !== FAVICON_PATH || !existsSync(join(DIST_ROOT, FAVICON_PATH.slice(1)))) {
    errors.push('expected the Hugo Martin favicon and its local asset');
  }
  for (const [attribute, name] of [
    ['property', 'og:title'], ['property', 'og:description'], ['property', 'og:image:alt'],
    ['name', 'twitter:title'], ['name', 'twitter:description'], ['name', 'twitter:image:alt'],
  ]) {
    const tags = matchingTags(html, 'meta', attribute, name);
    if (!singleAttributeValue(tags, 'content')?.trim()) errors.push(`expected one non-empty ${name} meta tag`);
  }
  if (singleAttributeValue(matchingTags(html, 'meta', 'property', 'og:site_name'), 'content') !== 'Hugo Martin') {
    errors.push('Open Graph site name must be Hugo Martin');
  }

  if (h1s.length !== 1) {
    errors.push(`expected one <h1>, found ${h1s.length}`);
  } else if (!h1s[0]) {
    errors.push('H1 is empty');
  } else {
    verifyUnique('H1', h1s[0], page.path, seenHeadings, errors);
  }

  for (const imageTag of imageTags) {
    const imageAttributes = attributes(imageTag);
    if (!imageAttributes.has('alt')) {
      errors.push('rendered image is missing an alt attribute');
    }
    if (!imageAttributes.get('width') || !imageAttributes.get('height')) {
      errors.push('rendered image is missing intrinsic width or height');
    }
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
    errors.push('expected one page JSON-LD graph, found ' + schemaScripts.length);
  } else {
    try {
      const schema = JSON.parse(decodeHtml(schemaScripts[0][2]));
      if (schema['@context'] !== 'https://schema.org') {
        errors.push('JSON-LD has an unexpected @context');
      }
      if (!Array.isArray(schema['@graph'])) {
        errors.push('JSON-LD must contain an @graph array');
      }

      const graph = Array.isArray(schema['@graph']) ? schema['@graph'] : [];
      const types = new Set(graph.map((entry) => entry?.['@type']).filter(Boolean));
      const expectsBreadcrumb = page.path !== '/' && page.path !== '/en/';
      const breadcrumb = graph.find((entry) => entry?.['@type'] === 'BreadcrumbList');
      if (expectsBreadcrumb && !types.has('BreadcrumbList')) {
        errors.push('JSON-LD is missing BreadcrumbList');
      }
      if (!expectsBreadcrumb && types.has('BreadcrumbList')) {
        errors.push('homepage JSON-LD must not publish a hidden BreadcrumbList');
      }
      if (expectsBreadcrumb && breadcrumb) {
        const listItems = breadcrumb.itemListElement;

        if (!Array.isArray(listItems)) {
          errors.push('BreadcrumbList must contain itemListElement');
        } else {
          for (const [index, listItem] of listItems.slice(0, -1).entries()) {
            if (typeof listItem?.item !== 'string') {
              errors.push(`breadcrumb position ${index + 1} is missing item`);
              continue;
            }

            try {
              const itemUrl = new URL(listItem.item);
              if (itemUrl.protocol !== 'https:' || itemUrl.origin !== SITE_ORIGIN) {
                errors.push(
                  `breadcrumb position ${index + 1} must use an absolute production URL`,
                );
              }
            } catch {
              errors.push(`breadcrumb position ${index + 1} has an invalid item URL`);
            }
          }
        }
      }

      const expectedPrimaryType =
        page.path === '/ueber-hugo-martin/' || page.path === '/en/about/'
          ? 'Person'
          : page.path === '/kontakt/' || page.path === '/en/contact/'
            ? 'ContactPage'
            : page.path === '/' || page.path === '/en/'
              ? 'Organization'
              : 'Service';
      if (!types.has(expectedPrimaryType)) {
        errors.push('JSON-LD is missing ' + expectedPrimaryType);
      }

      const forbiddenTypes = [
        'Article',
        'BlogPosting',
        'Product',
        'Review',
        'AggregateRating',
        'LocalBusiness',
        'ProfessionalService',
      ];
      for (const forbiddenType of forbiddenTypes) {
        if (types.has(forbiddenType)) {
          errors.push('JSON-LD contains unsupported type ' + forbiddenType);
        }
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
    if (/\bRFQ\b|RFQ-Fit-Check|Industrial AI Visibility|KI-Sichtbarkeit für Industrieunternehmen/i.test(mainText)) {
      errors.push('main content still contains the previous product marketing');
    }
    if (/(?:€|EUR)\s*\d|\d[\d.,]*\s*(?:€|EUR|Euro)\b|\b\d+(?:[.,]\d+)?\s*%/i.test(mainText)) {
      errors.push('main content contains unconfirmed numeric prices or performance figures');
    }


    if (
      page.path === '/' &&
      (/<time\b/i.test(mainElements[0]) ||
        /\b(?:Veröffentlicht|Publiziert|Zuletzt aktualisiert|Published|Updated)\b/i.test(
          mainText,
        ))
    ) {
      errors.push('homepage must not expose an editorial publication date');
    }

    if (mainText.length < MINIMUM_MAIN_CHARACTERS) {
      errors.push(
        `main content is too short: ${mainText.length} characters (minimum ${MINIMUM_MAIN_CHARACTERS})`,
      );
    }
    if (wordCount < MINIMUM_MAIN_WORDS) {
      errors.push(`main content is too short: ${wordCount} words (minimum ${MINIMUM_MAIN_WORDS})`);
    }
  }

  for (const link of html.match(/<a\b[^>]*>/gi) ?? []) {
    const href = attributes(link).get('href');
    if (!href) continue;
    let destination;
    try { destination = new URL(href, page.canonical); }
    catch { errors.push(`invalid link: ${href}`); continue; }
    if (destination.origin !== SITE_ORIGIN) continue;
    if (!canonicalPaths.has(destination.pathname)) {
      const asset = join(DIST_ROOT, ...destination.pathname.split('/').filter(Boolean));
      if (!existsSync(asset) || destination.pathname.endsWith('/')) {
        errors.push(`internal link does not target a current public page or asset: ${href}`);
      }
      continue;
    }
    if (destination.hash) {
      const targetFile = pageFile(destination.pathname);
      const targetHtml = existsSync(targetFile) ? readFileSync(targetFile, 'utf8') : '';
      const ids = new Set((targetHtml.match(/<[a-z][^>]*>/gi) ?? [])
        .map((tag) => attributes(tag).get('id')).filter(Boolean));
      if (!ids.has(decodeURIComponent(destination.hash.slice(1)))) {
        errors.push(`internal link points to a missing anchor: ${href}`);
      }
    }
  }

  return errors;
}

function validateRedirect({ from, to }) {
  const errors = [];
  if (canonicalPaths.has(from)) errors.push('redirect source conflicts with a canonical page');
  if (!canonicalPaths.has(to)) errors.push('redirect target is not a canonical page');
  const file = pageFile(from);
  if (!existsSync(file)) return [...errors, `missing redirect HTML ${file}`];
  const html = readFileSync(file, 'utf8');
  const destination = new URL(to, SITE_ORIGIN).href;
  if (singleAttributeValue(matchingTags(html, 'link', 'rel', 'canonical'), 'href') !== destination) {
    errors.push('redirect canonical must point to the destination');
  }
  if (singleAttributeValue(matchingTags(html, 'meta', 'name', 'robots'), 'content') !== 'noindex,follow') {
    errors.push('redirect must use noindex,follow');
  }
  const refresh = singleAttributeValue(matchingTags(html, 'meta', 'http-equiv', 'refresh'), 'content');
  if (refresh !== `0; url=${destination}`) errors.push('redirect must have an immediate meta refresh');
  if (/<script\b/i.test(html)) errors.push('redirect must work without JavaScript');
  const links = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)];
  if (!links.some(([, attrs, text]) => attributes(`<a ${attrs}>`).get('href') === destination && normalizeText(text))) {
    errors.push('redirect must include an accessible destination link');
  }
  return errors;
}

if (!existsSync(DIST_ROOT)) {
  console.error(`Prerender verification failed: build output does not exist at ${DIST_ROOT}`);
  console.error('Run "npm run build" before "npm run verify:prerender".');
  process.exitCode = 1;
} else {
  const failures = [
    ...pages.flatMap((page) => validatePage(page).map((message) => `${page.path}: ${message}`)),
    ...legacyRedirects.flatMap((redirect) =>
      validateRedirect(redirect).map((message) => `${redirect.from}: ${message}`)),
  ];

  if (failures.length > 0) {
    console.error(`Prerender verification failed with ${failures.length} error(s):`);
    for (const failure of failures) console.error(`- ${failure}`);
    console.error(`Build root: ${dirname(pageFile('/'))}`);
    process.exitCode = 1;
  } else {
    console.log(`Verified ${pages.length} prerendered routes and ${legacyRedirects.length} legacy redirects in ${DIST_ROOT}`);
  }
}
