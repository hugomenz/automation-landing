import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { HeroDiagram } from '../../content/page.types';

@Component({
  selector: 'app-service-flow',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './service-flow.component.html',
  styleUrl: './service-flow.component.css',
})
export class ServiceFlowComponent {
  readonly diagram = input.required<HeroDiagram>();
}
