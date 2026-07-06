import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnDestroy,
  signal,
} from '@angular/core';
import { ContactDialogService } from '../../contact-dialog.service';
import { LandingContent } from '../../content';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LanguageSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly contactDialog = inject(ContactDialogService);

  readonly content = input.required<LandingContent>();
  readonly menuOpen = signal(false);
  readonly compact = signal(false);
  readonly activeHref = signal('#help');

  private observer: IntersectionObserver | null = null;
  private readonly updateCompactState = () => {
    if (typeof window === 'undefined') {
      return;
    }

    this.compact.set(window.innerWidth > 1120 && window.scrollY > 320);
  };

  ngAfterViewInit(): void {
    this.activeHref.set(this.content().nav[0]?.href ?? '#help');
    this.updateCompactState();

    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('scroll', this.updateCompactState, { passive: true });
    window.addEventListener('resize', this.updateCompactState);

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sections = this.content()
      .nav.map((item) => item.href)
      .filter((href) => href.startsWith('#'))
      .map((href) => this.document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const next = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (next) {
          this.activeHref.set(`#${next.target.id}`);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.18, 0.4, 0.72],
      },
    );

    for (const section of sections) {
      this.observer.observe(section);
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.updateCompactState);
      window.removeEventListener('resize', this.updateCompactState);
    }

    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  openContactDialog(): void {
    this.closeMenu();
    this.contactDialog.open();
  }
}
