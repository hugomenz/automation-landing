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
import type { PageKey } from '../../content/page.types';
import { PageLocaleService } from '../../core/page-locale.service';

interface NavigationItem {
  readonly label: string;
  readonly path: string;
  readonly lang?: 'de';
  readonly activeKeys?: readonly PageKey[];
  readonly currentKeys?: readonly PageKey[];
}

const NAVIGATION: Record<'de' | 'en', readonly NavigationItem[]> = {
  de: [
    {
      label: 'Lösung',
      path: '/loesungen/technische-anfragequalifizierung/',
      activeKeys: [
        'home-de',
        'technical-request-qualification',
        'internal-rfq-copilot',
        'stuttgart',
      ],
      currentKeys: ['technical-request-qualification'],
    },
    {
      label: 'Für wen',
      path: '/#passung',
      activeKeys: [
        'end-of-line',
        'packaging-machinery',
        'palletising-systems',
      ],
    },
    {
      label: 'Vorgehen',
      path: '/#vorgehen',
      activeKeys: ['rfq-readiness-workshop'],
    },
    {
      label: 'Über Hugo',
      path: '/ueber-hugo-menz/',
      activeKeys: ['about-hugo-menz'],
      currentKeys: ['about-hugo-menz'],
    },
    {
      label: 'Kontakt',
      path: '/kontakt/',
      activeKeys: ['contact'],
      currentKeys: ['contact'],
    },
  ],
  en: [
    { label: 'Solution', path: '/en/#internal-rfq-copilot', activeKeys: ['home-en'] },
    { label: 'Who it is for', path: '/en/#fit' },
    { label: 'Approach', path: '/en/#process' },
    { label: 'About Hugo', path: '/en/#about' },
    { label: 'Contact', path: '/en/#contact' },
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

  readonly menuOpen = signal(false);
  readonly language = this.pageLocale.language;
  readonly languagePath = this.pageLocale.languagePath;
  readonly pageKey = this.pageLocale.pageKey;
  readonly navigation = computed(() => NAVIGATION[this.language()]);
  private readonly navToggle = viewChild<ElementRef<HTMLButtonElement>>('navToggle');
  readonly copy = computed(() =>
    this.language() === 'de'
      ? {
          subtitle: 'Technische Angebotsprozesse · Maschinenbau',
          brandLabel: 'Hugo Menz Automation – Startseite',
          navigationLabel: 'Hauptnavigation',
          menuLabel: this.menuOpen() ? 'Menü schließen' : 'Menü öffnen',
          languageLabel:
            this.pageKey() === 'home-de' || this.pageKey() === 'industrial-ai-search-de'
              ? 'English version'
              : 'English home',
          languageText: 'EN',
          homePath: '/',
          cta: 'Pilot-Eignung prüfen',
        }
      : {
          subtitle: 'Technical quotation processes · Machinery',
          brandLabel: 'Hugo Menz Automation – English home',
          navigationLabel: 'Primary navigation',
          menuLabel: this.menuOpen() ? 'Close menu' : 'Open menu',
          languageLabel: 'Deutsche Version',
          languageText: 'DE',
          homePath: '/en/',
          cta: 'Check pilot fit',
        },
  );

  isActive(item: NavigationItem): boolean {
    const pageKey = this.pageKey();
    return pageKey !== null && (item.activeKeys?.includes(pageKey) ?? false);
  }

  isCurrent(item: NavigationItem): boolean {
    const pageKey = this.pageKey();
    return pageKey !== null && (item.currentKeys?.includes(pageKey) ?? false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  openContactForm(): void {
    const restoreFocusTo = this.menuOpen() ? this.navToggle()?.nativeElement : null;
    this.closeMenu();
    this.contactDialog.open('rfq', restoreFocusTo);
  }

  @HostListener('document:keydown.escape')
  closeMenuWithEscape(): void {
    this.closeMenu();
  }
}
