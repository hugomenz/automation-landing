import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  SectionIndexComponent,
  SectionNavigationItem,
} from '../../components/section-index/section-index.component';
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
  imports: [
    BreadcrumbsComponent,
    ContentLinkComponent,
    RfqFlowComponent,
    SectionIndexComponent,
  ],
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
  readonly sectionNavigation: readonly SectionNavigationItem[] = [
    ...this.page.sections.map((section) => ({
      href: `#${section.id}` as const,
      label: section.eyebrow ?? section.heading,
    })),
    ...(this.page.faq
      ? [
          {
            href: `#${this.page.faq.id}` as const,
            label: this.page.faq.eyebrow ?? this.page.faq.heading,
          },
        ]
      : []),
    {
      href: '#contact',
      label:
        this.page.finalCta.eyebrow ??
        (this.page.lang === 'de' ? 'Nächster Schritt' : 'Next step'),
    },
  ];

  constructor() {
    this.seo.applyPage(this.page);
  }
}
