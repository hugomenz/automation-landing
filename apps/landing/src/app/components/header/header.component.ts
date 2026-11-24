import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ContactDialogService } from '../../contact-dialog.service';
import type { PageKey, PageLanguage, PagePath } from '../../content/page.types';
import { PageLocaleService } from '../../core/page-locale.service';

interface NavigationItem {
  readonly label: string;
  readonly path: PagePath;
  readonly pageKey: PageKey;
}

const NAVIGATION: Record<PageLanguage, readonly NavigationItem[]> = {
  de: [
    { label: 'KI-Agenten & MCP', path: '/leistungen/github-copilot/', pageKey: 'github-copilot-de' },
    { label: 'Automatisierung', path: '/leistungen/prozessautomatisierung/', pageKey: 'process-automation-de' },
    { label: 'Web-Apps', path: '/leistungen/angular-entwicklung/', pageKey: 'angular-development-de' },
    { label: 'Über mich', path: '/ueber-hugo-martin/', pageKey: 'about-hugo-martin-de' },
    { label: 'Kontakt', path: '/kontakt/', pageKey: 'contact-de' },
  ],
  en: [
    { label: 'AI agents & MCP', path: '/en/github-copilot/', pageKey: 'github-copilot-en' },
    { label: 'Automation', path: '/en/process-automation/', pageKey: 'process-automation-en' },
    { label: 'Web apps', path: '/en/angular-development/', pageKey: 'angular-development-en' },
    { label: 'About', path: '/en/about/', pageKey: 'about-hugo-martin-en' },
    { label: 'Contact', path: '/en/contact/', pageKey: 'contact-en' },
  ],
};

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly pageLocale = inject(PageLocaleService);
  private readonly contactDialog = inject(ContactDialogService);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly navToggle = viewChild<ElementRef<HTMLButtonElement>>('navToggle');

  readonly menuOpen = signal(false);
  readonly language = this.pageLocale.language;
  readonly languagePath = this.pageLocale.languagePath;
  readonly pageKey = this.pageLocale.pageKey;
  readonly navigation = computed(() => NAVIGATION[this.language()]);
  readonly copy = computed(() =>
    this.language() === 'de'
      ? {
          subtitle: 'KI-Agenten · Automatisierung · Web-Apps',
          brandLabel: 'Hugo Martin: Startseite',
          navigationLabel: 'Hauptnavigation',
          menuLabel: this.menuOpen() ? 'Menü schließen' : 'Menü öffnen',
          languageLabel:
            this.languagePath() === '/en/' && this.pageKey() !== 'home-de'
              ? 'English home'
              : 'English version',
          languageText: 'EN',
          homePath: '/',
          cta: 'Projekt besprechen',
        }
      : {
          subtitle: 'AI agents · Automation · Web apps',
          brandLabel: 'Hugo Martin: English home',
          navigationLabel: 'Primary navigation',
          menuLabel: this.menuOpen() ? 'Close menu' : 'Open menu',
          languageLabel: 'Deutsche Version',
          languageText: 'DE',
          homePath: '/en/',
          cta: 'Discuss a project',
        },
  );

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  openContactForm(): void {
    const restoreFocusTo = this.menuOpen() ? this.navToggle()?.nativeElement : null;
    this.closeMenu();
    this.contactDialog.open('general', restoreFocusTo);
  }

  @HostListener('document:keydown.escape')
  closeMenuWithEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu();
      this.navToggle()?.nativeElement.focus();
    }
  }

  @HostListener('document:pointerdown', ['$event'])
  closeMenuOutside(event: PointerEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.closeMenu();
    }
  }

  @HostListener('focusout', ['$event'])
  closeMenuWhenFocusLeaves(event: FocusEvent): void {
    const nextTarget = event.relatedTarget as Node | null;
    if (this.menuOpen() && (!nextTarget || !this.host.nativeElement.contains(nextTarget))) {
      this.closeMenu();
    }
  }
}
