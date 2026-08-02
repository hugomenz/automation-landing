import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import type { PageDefinition } from '../../content/page.types';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';

type DemoState = 'ready' | 'loading' | 'done';

@Component({
  selector: 'app-rfq-demo',
  standalone: true,
  imports: [BreadcrumbsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rfq-demo.component.html',
  styleUrl: './rfq-demo.component.css',
})
export class RfqDemoComponent {
  readonly page = input.required<PageDefinition>();
  readonly state = signal<DemoState>('ready');
  readonly loadingStep = signal(0);
  private readonly result = viewChild<ElementRef<HTMLElement>>('result');

  startAnalysis(): void {
    if (this.state() !== 'ready') return;

    this.state.set('loading');
    this.loadingStep.set(0);

    const steps = [1, 2, 3];
    steps.forEach((step, index) => {
      window.setTimeout(() => this.loadingStep.set(step), 430 * (index + 1));
    });

    window.setTimeout(() => {
      this.state.set('done');
      window.setTimeout(
        () => this.result()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        60,
      );
    }, 1850);
  }
}
