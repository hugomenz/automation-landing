import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LandingContent } from '../../content';

@Component({
  selector: 'app-problem-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './problem-section.component.html',
  styleUrl: './problem-section.component.css',
})
export class ProblemSectionComponent {
  readonly content = input.required<LandingContent['help']>();
}
