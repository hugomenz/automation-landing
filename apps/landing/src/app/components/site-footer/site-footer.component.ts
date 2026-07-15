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
            'Technische Anfragequalifizierung und digitale Angebotsprozesse für Maschinenbauer.',
          solutionLabel: 'Lösung und Einstieg',
          requestLink: 'Technische Anfragequalifizierung',
          workshopLink: 'RFQ Readiness Workshop',
          copilotLink: 'Interner RFQ-Copilot',
          secondaryLabel: 'Weitere Themen',
          processAutomationLink: 'Weitere Prozessautomatisierungen',
          n8nLink: 'n8n Beratung Stuttgart',
          aiSearchLink: 'KI-Sichtbarkeit für Industrieunternehmen',
          aiSearchPath: '/ki-sichtbarkeit-industrie/',
          companyLabel: 'Hugo Menz Automation',
          aboutLink: 'Über Hugo Menz',
          contactLink: 'Kontakt',
          languageLabel:
            this.pageKey() === 'industrial-ai-search-de' ? 'English version' : 'English home',
        }
      : {
          description:
            'Technical enquiry qualification and digital quotation processes for machinery manufacturers.',
          solutionLabel: 'Solution and first step',
          requestLink: 'Technical request qualification (DE)',
          workshopLink: 'RFQ readiness workshop (DE)',
          copilotLink: 'Internal RFQ copilot (DE)',
          secondaryLabel: 'Further topics',
          processAutomationLink: 'Further process automation (DE)',
          n8nLink: 'n8n consulting in Stuttgart (DE)',
          aiSearchLink: 'AI Search Readiness for industry',
          aiSearchPath: '/en/ai-search-readiness-industrial-companies/',
          companyLabel: 'Hugo Menz Automation',
          aboutLink: 'About Hugo Menz (DE)',
          contactLink: 'Contact (DE)',
          languageLabel:
            this.pageKey() === 'industrial-ai-search-en'
              ? 'Deutsche Version'
              : 'Deutsche Startseite',
        },
  );
}
