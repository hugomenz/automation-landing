import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnDestroy,
  signal,
} from '@angular/core';
import type { PageLanguage } from '../../content/page.types';

export interface SectionNavigationItem {
  readonly href: `#${string}`;
  readonly label: string;
}

@Component({
  selector: 'app-section-index',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-index.component.html',
  styleUrl: './section-index.component.css',
})
export class SectionIndexComponent implements AfterViewInit, OnDestroy {
  private readonly document = inject(DOCUMENT);

  readonly items = input.required<readonly SectionNavigationItem[]>();
  readonly language = input.required<PageLanguage>();
  readonly activeHref = signal<`#${string}`>('#contact');
  readonly visible = signal(false);
  readonly activeLabel = computed(
    () =>
      this.items().find((item) => item.href === this.activeHref())?.label ??
      this.items()[0]?.label ??
      '',
  );

  private observer: IntersectionObserver | null = null;
  private readonly updateVisibility = () => {
    const view = this.document.defaultView;
    if (view) {
      this.visible.set(view.scrollY > 220);
    }
  };

  ngAfterViewInit(): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    const requestedSection = this.items().find((item) => item.href === view.location.hash);
    this.activeHref.set(requestedSection?.href ?? this.items()[0]?.href ?? '#contact');

    this.updateVisibility();
    view.addEventListener('scroll', this.updateVisibility, { passive: true });

    if (typeof view.IntersectionObserver === 'undefined') {
      return;
    }

    const sections = this.items()
      .map((item) => this.document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    this.observer = new view.IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              Math.abs(left.boundingClientRect.top) - Math.abs(right.boundingClientRect.top),
          )[0];

        if (activeEntry) {
          this.activeHref.set(`#${activeEntry.target.id}`);
        }
      },
      {
        rootMargin: '-18% 0px -68% 0px',
        threshold: [0, 0.25, 0.6],
      },
    );

    for (const section of sections) {
      this.observer.observe(section);
    }
  }

  ngOnDestroy(): void {
    this.document.defaultView?.removeEventListener('scroll', this.updateVisibility);
    this.observer?.disconnect();
  }

  jumpToSection(event: Event): void {
    const href = (event.target as HTMLSelectElement).value as `#${string}`;
    const section = this.document.querySelector<HTMLElement>(href);
    if (!section) {
      return;
    }

    this.activeHref.set(href);
    section.scrollIntoView();
    this.document.defaultView?.history.replaceState(null, '', href);
  }
}
