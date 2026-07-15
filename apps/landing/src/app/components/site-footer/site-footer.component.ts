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
      label: 'Lösung und Einstieg',
      links: [
        {
          label: 'Technische Anfragequalifizierung',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
        { label: 'RFQ Readiness Workshop', href: '/leistungen/rfq-readiness-workshop/' },
        { label: 'Interner RFQ-Copilot', href: '/leistungen/interner-rfq-copilot/' },
      ],
    },
    {
      label: 'Weitere Themen',
      links: [
        {
          label: 'Weitere Prozessautomatisierungen',
          href: '/leistungen/prozessautomatisierung/',
        },
        { label: 'n8n Beratung Stuttgart', href: '/n8n-beratung-stuttgart/' },
        {
          label: 'KI-Sichtbarkeit für Industrieunternehmen',
          href: '/ki-sichtbarkeit-industrie/',
        },
        { label: 'Über Hugo Menz', href: '/ueber-hugo-menz/' },
        { label: 'Kontakt', href: '/kontakt/' },
      ],
    },
  ],
  en: [
    {
      label: 'Solution',
      links: [
        { label: 'Technical enquiry qualification', href: '/en/#workflow' },
        { label: 'Internal RFQ copilot', href: '/en/#internal-rfq-copilot' },
        {
          label: 'AI Search Readiness',
          href: '/en/ai-search-readiness-industrial-companies/',
        },
      ],
    },
    {
      label: 'Explore',
      links: [
        { label: 'Who it is for', href: '/en/#fit' },
        { label: 'Controls and human review', href: '/en/#control' },
        { label: 'Approach', href: '/en/#process' },
        { label: 'About Hugo Menz', href: '/en/#about' },
        { label: 'Further process automation', href: '/en/#further-automation' },
        { label: 'Contact', href: '/en/#contact' },
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
          description:
            'Technische Anfragequalifizierung und digitale Angebotsprozesse für Maschinenbauer.',
          groups: FOOTER_GROUPS.de,
          companyLabel: 'Hugo Menz Automation',
          languageLabel: 'English',
        }
      : {
          description:
            'Technical enquiry qualification and digital quotation processes for machinery manufacturers.',
          groups: FOOTER_GROUPS.en,
          companyLabel: 'Hugo Menz Automation',
          languageLabel: 'Deutsch',
        },
  );
}
