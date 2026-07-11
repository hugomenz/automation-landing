import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BreadcrumbItem, PageLanguage } from '../../content/page.types';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css',
})
export class BreadcrumbsComponent {
  readonly items = input.required<readonly BreadcrumbItem[]>();
  readonly language = input.required<PageLanguage>();
}
