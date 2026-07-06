import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HeroDiagram, LandingContent } from '../../content';
import { WorkflowPanelComponent } from '../workflow-panel/workflow-panel.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WorkflowPanelComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly content = input.required<LandingContent>();
  readonly diagram = input.required<HeroDiagram>();
}
