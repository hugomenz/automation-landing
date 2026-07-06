import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { LandingContent } from '../../content';
import { LanguageService } from '../../language.service';
import { getContactHref, siteConfig } from '../../site.config';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.css',
})
export class FinalCtaComponent {
  private readonly languageService = inject(LanguageService);

  readonly content = input.required<LandingContent['cta']>();

  readonly contactHref = computed(() => getContactHref(this.languageService.language()));
  readonly email = siteConfig.email;
  readonly portraitSrc = siteConfig.founder.portraitSrc;
  readonly portraitAlt = siteConfig.founder.portraitAlt;
}
