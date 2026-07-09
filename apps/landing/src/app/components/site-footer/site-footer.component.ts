import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ContactDialogService } from '../../contact-dialog.service';
import { LandingContent } from '../../content';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
})
export class SiteFooterComponent {
  readonly contactDialog = inject(ContactDialogService);

  readonly content = input.required<LandingContent['footer']>();

  readonly socialLinks = [
    { label: 'LinkedIn', href: siteConfig.social.linkedin },
    { label: 'GitHub', href: siteConfig.social.github },
  ].filter((link) => /^https?:\/\//i.test(link.href));

  readonly serviceLinks = siteConfig.seoLandingLinks;
}
