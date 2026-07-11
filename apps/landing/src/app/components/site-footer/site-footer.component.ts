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
  readonly linkedin = siteConfig.social.linkedin;
  readonly copy = computed(() =>
    this.language() === 'de'
      ? {
          description:
            'Technische Anfragequalifizierung und digitale Angebotsprozesse für Maschinenbauer in Deutschland.',
          solutionLabel: 'Lösung und Leistungen',
          industriesLabel: 'Maschinenfamilien',
          companyLabel: 'Hugo Menz Automation',
          secondaryLabel: 'Technologie',
          languageLabel: 'English home',
        }
      : {
          description:
            'Technical RFQ qualification and digital quotation processes for machinery manufacturers in Germany.',
          solutionLabel: 'Solution and services',
          industriesLabel: 'Machine families',
          companyLabel: 'Hugo Menz Automation',
          secondaryLabel: 'Technology',
          languageLabel: 'Deutsche Startseite',
        },
  );
}
