import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LandingContent } from '../../content';

@Component({
  selector: 'app-process-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './process-section.component.html',
  styleUrl: './process-section.component.css',
})
export class ProcessSectionComponent {
  readonly content = input.required<LandingContent['process']>();
}
