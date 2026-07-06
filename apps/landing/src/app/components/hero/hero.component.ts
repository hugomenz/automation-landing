import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ContactDialogService } from '../../contact-dialog.service';
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
  readonly contactDialog = inject(ContactDialogService);
  readonly content = input.required<LandingContent>();
  readonly diagram = input.required<HeroDiagram>();
}
