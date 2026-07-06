import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    '[class.reveal-block]': 'true',
    '[class.is-visible]': 'isVisible()',
  },
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer: IntersectionObserver | null = null;

  readonly isVisible = signal(false);

  ngOnInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.isVisible.set(true);
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        this.isVisible.set(true);
        this.observer?.disconnect();
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    );
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
