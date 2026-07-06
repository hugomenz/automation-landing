import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LandingContent } from '../../content';

@Component({
  selector: 'app-services-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent {
  readonly content = input.required<LandingContent['build']>();
}
