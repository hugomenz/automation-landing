import { Injectable, signal } from '@angular/core';
import { SupportedLanguage } from '../site.config';

@Injectable({ providedIn: 'root' })
export class PageLocaleService {
  readonly language = signal<SupportedLanguage>('de');

  setLanguage(language: SupportedLanguage): void {
    this.language.set(language);
  }
}
