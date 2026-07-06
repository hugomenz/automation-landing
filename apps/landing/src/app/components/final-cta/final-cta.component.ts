import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ContactDialogService } from '../../contact-dialog.service';
import { LandingContent } from '../../content';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.css',
})
export class FinalCtaComponent {
  readonly contactDialog = inject(ContactDialogService);

  readonly content = input.required<LandingContent['cta']>();

  readonly portraitSrc = siteConfig.founder.portraitSrc;
  readonly portraitAlt = siteConfig.founder.portraitAlt;
}
