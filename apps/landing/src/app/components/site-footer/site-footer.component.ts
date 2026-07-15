import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PageLocaleService } from '../../core/page-locale.service';
import { siteConfig } from '../../site.config';

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
  readonly pageKey = this.pageLocale.pageKey;
  readonly linkedin = siteConfig.social.linkedin;
  readonly copy = computed(() =>
    this.language() === 'de'
      ? {
          description:
            'UX Engineering, interne Tools und Prozessautomatisierung für komplexe technische und betriebliche Abläufe.',
          solutionLabel: 'Leistungen',
          processesLink: 'Digitale Prozesse und Interfaces',
          requestLink: 'Technische Anfragequalifizierung',
          aiSearchLink: 'KI-Sichtbarkeit für Industrieunternehmen',
          aiSearchPath: '/ki-sichtbarkeit-industrie/',
          examplesLabel: 'Vertiefung',
          workshopLink: 'RFQ Readiness Workshop',
          copilotLink: 'Interner RFQ-Copilot',
          n8nLink: 'n8n Beratung Stuttgart',
          companyLabel: 'Hugo Menz Automation',
          secondaryLabel: 'Über und Kontakt',
          aboutLink: 'Über Hugo Menz',
          contactLink: 'Kontakt',
          languageLabel:
            this.pageKey() === 'industrial-ai-search-de' ? 'English version' : 'English home',
        }
      : {
          description:
            'UX engineering, internal tools and process automation for complex technical and operational workflows.',
          solutionLabel: 'Services',
          processesLink: 'Digital processes and interfaces',
          requestLink: 'Technical request qualification (DE)',
          aiSearchLink: 'AI Search Readiness for industry',
          aiSearchPath: '/en/ai-search-readiness-industrial-companies/',
          examplesLabel: 'In depth',
          workshopLink: 'RFQ readiness workshop (DE)',
          copilotLink: 'Internal RFQ copilot (DE)',
          n8nLink: 'n8n consulting in Stuttgart (DE)',
          companyLabel: 'Hugo Menz Automation',
          secondaryLabel: 'About and contact',
          aboutLink: 'About Hugo Menz (DE)',
          contactLink: 'Contact (DE)',
          languageLabel:
            this.pageKey() === 'industrial-ai-search-en'
              ? 'Deutsche Version'
              : 'Deutsche Startseite',
        },
  );
}
