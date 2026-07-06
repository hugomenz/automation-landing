import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LandingContent } from '../../content';

@Component({
  selector: 'app-certificates-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './certificates-section.component.html',
  styleUrl: './certificates-section.component.css',
})
export class CertificatesSectionComponent {
  readonly content = input.required<LandingContent['trust']>();
}
