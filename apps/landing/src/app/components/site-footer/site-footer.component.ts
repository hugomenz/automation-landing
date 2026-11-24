import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import type { PageLanguage } from '../../content/page.types';
import { PageLocaleService } from '../../core/page-locale.service';
import { siteConfig } from '../../site.config';

interface FooterLink {
  readonly label: string;
  readonly href: string;
}

interface FooterGroup {
  readonly label: string;
  readonly links: readonly FooterLink[];
}

export const FOOTER_GROUPS: Record<PageLanguage, readonly FooterGroup[]> = {
  de: [
    {
      label: 'Leistungen',
      links: [
        { label: 'Angular-Entwicklung', href: '/leistungen/angular-entwicklung/' },
        { label: 'GitHub Copilot', href: '/leistungen/github-copilot/' },
        { label: 'Prozessautomatisierung', href: '/leistungen/prozessautomatisierung/' },
      ],
    },
    {
      label: 'Zusammenarbeit',
      links: [
        { label: 'Über Hugo Martin', href: '/ueber-hugo-martin/' },
        { label: 'Standort Stuttgart', href: '/standorte/stuttgart/' },
        { label: 'Kontakt', href: '/kontakt/' },
      ],
    },
  ],
  en: [
    {
      label: 'Services',
      links: [
        { label: 'Angular development', href: '/en/angular-development/' },
        { label: 'GitHub Copilot', href: '/en/github-copilot/' },
        { label: 'Process automation', href: '/en/process-automation/' },
      ],
    },
    {
      label: 'Working together',
      links: [
        { label: 'About Hugo Martin', href: '/en/about/' },
        { label: 'Contact', href: '/en/contact/' },
      ],
    },
  ],
};

@Component({
  selector: 'app-site-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
})
export class SiteFooterComponent {
  private readonly pageLocale = inject(PageLocaleService);

  readonly language = this.pageLocale.language;
  readonly languagePath = this.pageLocale.languagePath;
  readonly linkedin = siteConfig.social.linkedin;
  readonly copy = computed(() =>
    this.language() === 'de'
      ? {
          description: 'Angular-Anwendungen, GitHub Copilot und praktische Automatisierung für Unternehmen und Entwicklungsteams.',
          groups: FOOTER_GROUPS.de,
          languageLabel: this.languagePath() === '/en/' && this.pageLocale.pageKey() !== 'home-de'
            ? 'English home'
            : 'English',
        }
      : {
          description: 'Angular applications, GitHub Copilot and practical automation for businesses and development teams.',
          groups: FOOTER_GROUPS.en,
          languageLabel: 'Deutsch',
        },
  );
}
