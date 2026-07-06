import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LandingContent } from '../../content';

@Component({
  selector: 'app-cases-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cases-section.component.html',
  styleUrl: './cases-section.component.css',
})
export class CasesSectionComponent {
  readonly content = input.required<LandingContent['outcome']>();
}
