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
        { label: 'KI-Agenten & MCP', href: '/leistungen/github-copilot/' },
        { label: 'Prozessautomatisierung', href: '/leistungen/prozessautomatisierung/' },
        { label: 'Angular & Design Systems', href: '/leistungen/angular-entwicklung/' },
        { label: 'Alle Leistungen', href: '/leistungen/' },
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
        { label: 'AI agents & MCP', href: '/en/github-copilot/' },
        { label: 'Process automation', href: '/en/process-automation/' },
        { label: 'Angular & Design Systems', href: '/en/angular-development/' },
        { label: 'All services', href: '/en/services/' },
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
          description: 'KI-Agenten, MCP- und API-Integration, Prozessautomatisierung und individuelle Web-Anwendungen für Unternehmen und Entwicklungsteams.',
          groups: FOOTER_GROUPS.de,
          languageLabel: this.languagePath() === '/en/' && this.pageLocale.pageKey() !== 'home-de'
            ? 'English home'
            : 'English',
        }
      : {
          description: 'AI agents, MCP and API integration, process automation and custom web applications for businesses and development teams.',
          groups: FOOTER_GROUPS.en,
          languageLabel: 'Deutsch',
        },
  );
}
