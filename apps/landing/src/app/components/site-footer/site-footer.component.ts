import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { LandingContent } from '../../content';
import { LanguageService } from '../../language.service';
import { getContactHref, siteConfig } from '../../site.config';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
})
export class SiteFooterComponent {
  private readonly languageService = inject(LanguageService);

  readonly content = input.required<LandingContent['footer']>();

  readonly email = siteConfig.email;
  readonly contactHref = computed(() => getContactHref(this.languageService.language()));
  readonly socialLinks = [
    { label: 'LinkedIn', href: siteConfig.social.linkedin },
    { label: 'GitHub', href: siteConfig.social.github },
  ].filter((link) => /^https?:\/\//i.test(link.href));
}
