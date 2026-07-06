import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HeroDiagram } from '../../content';

@Component({
  selector: 'app-workflow-panel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './workflow-panel.component.html',
  styleUrl: './workflow-panel.component.css',
})
export class WorkflowPanelComponent {
  readonly diagram = input.required<HeroDiagram>();
}
