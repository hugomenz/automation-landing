import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LANDING_CONTENT, Language } from './content';
import { getSocialLinks, resolveAbsoluteUrl, siteConfig } from './site.config';

const STORAGE_KEY = 'workflow-automation-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  readonly language = signal<Language>(this.getInitialLanguage());
  readonly content = computed(() => LANDING_CONTENT[this.language()]);

  constructor() {
    effect(() => {
      const language = this.language();
      const content = this.content();
      const currentOrigin = this.document.location?.origin;
      const canonicalUrl = resolveAbsoluteUrl(siteConfig.localizedPaths.de, currentOrigin);
      const ogImageUrl = resolveAbsoluteUrl(siteConfig.seo.ogImage, currentOrigin);
      const twitterImageUrl = resolveAbsoluteUrl(
        siteConfig.seo.twitterImage,
        currentOrigin,
      );
      const locale = siteConfig.localizedLocales[language];

      this.document.documentElement.lang = language;
      this.title.setTitle(content.meta.title);

      this.updateMetaTag(
        { name: 'description', content: content.meta.description },
        "name='description'",
      );
      this.updateMetaTag({ name: 'robots', content: 'index,follow' }, "name='robots'");
      this.updateMetaTag({ name: 'author', content: siteConfig.name }, "name='author'");
      this.meta.removeTag("name='keywords'");

      this.updateMetaTag({ property: 'og:type', content: 'website' }, "property='og:type'");
      this.updateMetaTag(
        { property: 'og:title', content: content.meta.title },
        "property='og:title'",
      );
      this.updateMetaTag(
        { property: 'og:description', content: content.meta.description },
        "property='og:description'",
      );
      this.updateMetaTag({ property: 'og:url', content: canonicalUrl }, "property='og:url'");
      this.updateMetaTag(
        { property: 'og:image', content: ogImageUrl },
        "property='og:image'",
      );
      this.updateMetaTag(
        {
          property: 'og:image:width',
          content: String(siteConfig.seo.ogImageWidth),
        },
        "property='og:image:width'",
      );
      this.updateMetaTag(
        {
          property: 'og:image:height',
          content: String(siteConfig.seo.ogImageHeight),
        },
        "property='og:image:height'",
      );
      this.updateMetaTag(
        {
          property: 'og:image:alt',
          content: siteConfig.seo.ogImageAlt,
        },
        "property='og:image:alt'",
      );
      this.updateMetaTag(
        { property: 'og:site_name', content: siteConfig.seo.siteName },
        "property='og:site_name'",
      );
      this.updateMetaTag(
        { property: 'og:locale', content: locale },
        "property='og:locale'",
      );

      this.updateMetaTag(
        { name: 'twitter:card', content: 'summary_large_image' },
        "name='twitter:card'",
      );
      this.updateMetaTag(
        { name: 'twitter:title', content: content.meta.title },
        "name='twitter:title'",
      );
      this.updateMetaTag(
        { name: 'twitter:description', content: content.meta.description },
        "name='twitter:description'",
      );
      this.updateMetaTag(
        { name: 'twitter:image', content: twitterImageUrl },
        "name='twitter:image'",
      );
      this.updateMetaTag(
        { name: 'twitter:image:alt', content: siteConfig.seo.ogImageAlt },
        "name='twitter:image:alt'",
      );

      this.updateCanonicalTag(canonicalUrl);
      this.setJsonLd('person', this.buildPersonSchema(canonicalUrl));
      this.setJsonLd(
        'professional-service',
        this.buildProfessionalServiceSchema(canonicalUrl),
      );
      this.setJsonLd('breadcrumbs', this.buildBreadcrumbSchema(currentOrigin));
    });
  }

  setLanguage(language: Language): void {
    this.language.set(language);
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // The language switch still works if storage is blocked.
    }
  }

  toggleLanguage(): void {
    this.setLanguage(this.language() === 'de' ? 'en' : 'de');
  }

  private getInitialLanguage(): Language {
    return this.getStoredLanguage() ?? 'de';
  }

  private getStoredLanguage(): Language | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'de' || value === 'en' ? value : null;
    } catch {
      return null;
    }
  }

  private updateMetaTag(
    definition: { content: string; name?: string; property?: string },
    selector: string,
  ): void {
    this.meta.updateTag(definition, selector);
  }

  private updateCanonicalTag(href: string): void {
    const head = this.document.head;
    let canonical = head.querySelector<HTMLLinkElement>("link[rel='canonical']");

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      head.appendChild(canonical);
    }

    canonical.href = href;
  }

  private setJsonLd(id: string, data: Record<string, unknown>): void {
    const head = this.document.head;
    const selector = `script[type='application/ld+json'][data-schema='${id}']`;
    let script = head.querySelector<HTMLScriptElement>(selector);

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset['schema'] = id;
      head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }

  private buildPersonSchema(canonicalUrl: string): Record<string, unknown> {
    const personId = `${canonicalUrl}#person`;

    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': personId,
      name: siteConfig.name,
      url: canonicalUrl,
      email: siteConfig.email,
      sameAs: getSocialLinks(),
      knowsAbout: [...siteConfig.schema.knowsAbout],
      jobTitle: siteConfig.schema.jobTitle,
    };
  }

  private buildProfessionalServiceSchema(canonicalUrl: string): Record<string, unknown> {
    const personId = `${canonicalUrl}#person`;

    return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${canonicalUrl}#professional-service`,
      name: siteConfig.brandName,
      url: canonicalUrl,
      email: siteConfig.email,
      priceRange: siteConfig.schema.priceRange,
      areaServed: siteConfig.schema.areaServed,
      provider: {
        '@id': personId,
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Workflow automation services',
        itemListElement: siteConfig.services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service,
          },
        })),
      },
    };
  }

  private buildBreadcrumbSchema(currentOrigin?: string): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: siteConfig.schema.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: resolveAbsoluteUrl(item.path, currentOrigin),
      })),
    };
  }
}