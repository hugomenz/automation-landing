import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getPageByKey } from '../../content/page.registry';
import { PageKey } from '../../content/page.types';
import { SeoService } from '../../core/seo.service';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';
import { ContentLinkComponent } from '../../shared/content-link/content-link.component';
import { RfqFlowComponent } from '../../shared/rfq-flow/rfq-flow.component';
import { siteConfig } from '../../site.config';

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [BreadcrumbsComponent, ContentLinkComponent, RfqFlowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.css',
})
export class ContentPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  readonly page = getPageByKey(this.route.snapshot.data['pageKey'] as PageKey);
  readonly isHome = this.page.path === '/' || this.page.path === '/en/';
  readonly portrait = siteConfig.founder;

  constructor() {
    this.seo.applyPage(this.page);
  }
}
