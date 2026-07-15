import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageDefinition, SchemaKind } from '../content/page.types';
import { resolveAbsoluteUrl, siteConfig } from '../site.config';
import { PageLocaleService } from './page-locale.service';

type JsonLd = Record<string, unknown>;

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly pageLocale = inject(PageLocaleService);

  applyPage(page: PageDefinition): void {
    const canonical = resolveAbsoluteUrl(page.seo.canonicalPath);
    const image = resolveAbsoluteUrl(page.seo.openGraph.imagePath);
    const oppositeHreflang = page.lang === 'de' ? 'en' : 'de-DE';
    const languagePath =
      page.seo.alternates?.find((alternate) => alternate.hreflang === oppositeHreflang)?.path ??
      (page.lang === 'de' ? '/en/' : '/');

    this.pageLocale.setLanguage(page.lang, languagePath, page.key);
    this.document.documentElement.lang = page.lang;
    this.title.setTitle(page.seo.title);

    this.updateName('description', page.seo.description);
    this.updateName('robots', page.seo.robots);
    this.updateName('author', siteConfig.name);
    this.updateProperty('og:type', page.seo.openGraph.type);
    this.updateProperty('og:title', page.seo.openGraph.title);
    this.updateProperty('og:description', page.seo.openGraph.description);
    this.updateProperty('og:url', canonical);
    this.updateProperty('og:image', image);
    this.updateProperty('og:image:width', String(siteConfig.socialImage.width));
    this.updateProperty('og:image:height', String(siteConfig.socialImage.height));
    this.updateProperty('og:image:alt', page.seo.openGraph.imageAlt);
    this.updateProperty('og:site_name', page.seo.openGraph.siteName);
    this.updateProperty('og:locale', page.seo.openGraph.locale);
    this.updateName('twitter:card', page.seo.twitter.card);
    this.updateName('twitter:title', page.seo.twitter.title);
    this.updateName('twitter:description', page.seo.twitter.description);
    this.updateName('twitter:image', resolveAbsoluteUrl(page.seo.twitter.imagePath));
    this.updateName('twitter:image:alt', page.seo.twitter.imageAlt);

    this.replaceCanonical(canonical);
    this.replaceAlternates(page);
    this.replaceJsonLd(page, canonical);
  }

  private updateName(name: string, content: string): void {
    this.meta.updateTag({ name, content }, `name='${name}'`);
  }

  private updateProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content }, `property='${property}'`);
  }

  private replaceCanonical(url: string): void {
    this.document.head.querySelectorAll('link[rel="canonical"]').forEach((node) => node.remove());
    const link = this.document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    this.document.head.appendChild(link);
  }

  private replaceAlternates(page: PageDefinition): void {
    this.document.head
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((node) => node.remove());

    for (const alternate of page.seo.alternates ?? []) {
      const link = this.document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = alternate.hreflang;
      link.href = resolveAbsoluteUrl(alternate.path);
      this.document.head.appendChild(link);
    }
  }

  private replaceJsonLd(page: PageDefinition, canonical: string): void {
    this.document.head.querySelectorAll('script[data-page-schema]').forEach((node) => node.remove());

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page-schema', page.key);
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': this.buildGraph(page, canonical),
    });
    this.document.head.appendChild(script);
  }

  private buildGraph(page: PageDefinition, canonical: string): JsonLd[] {
    const graph: JsonLd[] = [this.breadcrumbSchema(page, canonical)];
    const kinds = new Set<SchemaKind>(page.schemaKinds);

    if (kinds.has('Person')) graph.push(this.personSchema());
    if (kinds.has('ProfessionalService')) graph.push(this.professionalServiceSchema());
    if (kinds.has('WebSite')) graph.push(this.websiteSchema(page));
    if (kinds.has('Service')) graph.push(this.serviceSchema(page, canonical));
    if (kinds.has('ContactPage')) graph.push(this.contactPageSchema(page, canonical));
    if (kinds.has('FAQPage') && page.faq) graph.push(this.faqSchema(page, canonical));

    return graph;
  }

  private breadcrumbSchema(page: PageDefinition, canonical: string): JsonLd {
    const items = page.breadcrumbs.length
      ? page.breadcrumbs
      : [{ label: page.lang === 'de' ? 'Startseite' : 'Home', path: page.path }];

    return {
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        ...(item.path ? { item: resolveAbsoluteUrl(item.path) } : {}),
      })),
    };
  }

  private personSchema(): JsonLd {
    return {
      '@type': 'Person',
      '@id': `${siteConfig.baseUrl}#person`,
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      image: resolveAbsoluteUrl(siteConfig.founder.portraitSrc),
      jobTitle: 'Maschinenbauingenieur und Webentwickler',
      sameAs: [siteConfig.social.linkedin],
      knowsAbout: siteConfig.knowsAbout,
    };
  }

  private professionalServiceSchema(): JsonLd {
    return {
      '@type': 'ProfessionalService',
      '@id': `${siteConfig.baseUrl}#professional-service`,
      name: siteConfig.brandName,
      url: siteConfig.baseUrl,
      image: resolveAbsoluteUrl(siteConfig.socialImage.src),
      areaServed: siteConfig.areaServed,
      provider: { '@id': `${siteConfig.baseUrl}#person` },
      serviceType: [
        'Technische Anfragequalifizierung',
        'RFQ Readiness Workshop',
        'Interner RFQ-Copilot',
      ],
    };
  }

  private websiteSchema(page: PageDefinition): JsonLd {
    return {
      '@type': 'WebSite',
      '@id': `${siteConfig.baseUrl}#website`,
      name: siteConfig.brandName,
      url: siteConfig.baseUrl,
      inLanguage: page.lang,
    };
  }

  private serviceSchema(page: PageDefinition, canonical: string): JsonLd {
    return {
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: page.hero.h1,
      description: page.seo.description,
      url: canonical,
      inLanguage: page.lang,
      areaServed: siteConfig.areaServed,
      provider: { '@id': `${siteConfig.baseUrl}#professional-service` },
    };
  }

  private contactPageSchema(page: PageDefinition, canonical: string): JsonLd {
    return {
      '@type': 'ContactPage',
      '@id': `${canonical}#contact-page`,
      name: page.hero.h1,
      description: page.seo.description,
      url: canonical,
      inLanguage: page.lang,
      about: { '@id': `${siteConfig.baseUrl}#person` },
    };
  }

  private faqSchema(page: PageDefinition, canonical: string): JsonLd {
    return {
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: page.faq?.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    };
  }
}
