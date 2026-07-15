import { Injectable, signal } from '@angular/core';
import type { PageKey, PagePath } from '../content/page.types';
import { SupportedLanguage } from '../site.config';

@Injectable({ providedIn: 'root' })
export class PageLocaleService {
  readonly language = signal<SupportedLanguage>('de');
  readonly languagePath = signal<PagePath>('/en/');
  readonly pageKey = signal<PageKey | null>(null);

  setLanguage(
    language: SupportedLanguage,
    languagePath: PagePath = language === 'de' ? '/en/' : '/',
    pageKey: PageKey | null = null,
  ): void {
    this.language.set(language);
    this.languagePath.set(languagePath);
    this.pageKey.set(pageKey);
  }
}
