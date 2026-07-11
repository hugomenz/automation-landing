import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HeroDiagram } from '../../content/page.types';

@Component({
  selector: 'app-rfq-flow',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rfq-flow.component.html',
  styleUrl: './rfq-flow.component.css',
})
export class RfqFlowComponent {
  readonly diagram = input.required<HeroDiagram>();
}
