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
  readonly path?: string;
  readonly id?: string;
  readonly children?: readonly NavigationItem[];
  readonly lang?: 'de';
  readonly activeKeys?: readonly PageKey[];
  readonly currentKeys?: readonly PageKey[];
}

const NAVIGATION: Record<'de' | 'en', readonly NavigationItem[]> = {
  de: [
    {
      label: 'Leistungen',
      id: 'services',
      activeKeys: [
        'home-de',
        'technical-request-qualification',
        'rfq-readiness-workshop',
        'internal-rfq-copilot',
        'process-automation',
        'n8n-consulting-stuttgart',
        'industrial-ai-search-de',
      ],
      children: [
        {
          label: 'Technische Anfragequalifizierung',
          path: '/loesungen/technische-anfragequalifizierung/',
          currentKeys: ['technical-request-qualification'],
        },
        {
          label: 'RFQ Readiness Workshop',
          path: '/leistungen/rfq-readiness-workshop/',
          currentKeys: ['rfq-readiness-workshop'],
        },
        {
          label: 'Interner RFQ-Copilot',
          path: '/leistungen/interner-rfq-copilot/',
          currentKeys: ['internal-rfq-copilot'],
        },
        {
          label: 'Weitere Prozessautomatisierung',
          path: '/leistungen/prozessautomatisierung/',
          currentKeys: ['process-automation'],
        },
        {
          label: 'KI-Sichtbarkeit für Industrie',
          path: '/ki-sichtbarkeit-industrie/',
          currentKeys: ['industrial-ai-search-de'],
        },
        {
          label: 'n8n Beratung Stuttgart',
          path: '/n8n-beratung-stuttgart/',
          currentKeys: ['n8n-consulting-stuttgart'],
        },
      ],
    },
    {
      label: 'Für wen',
      path: '/#passung',
    },
    {
      label: 'Vorgehen',
      path: '/#vorgehen',
      activeKeys: ['rfq-readiness-workshop'],
    },
    {
      label: 'Mehr',
      id: 'more',
      activeKeys: [
        'about-hugo-menz',
        'stuttgart',
        'end-of-line',
        'packaging-machinery',
        'palletising-systems',
      ],
      children: [
        {
          label: 'Über Hugo Menz',
          path: '/ueber-hugo-menz/',
          currentKeys: ['about-hugo-menz'],
        },
        {
          label: 'Standort Stuttgart',
          path: '/standorte/stuttgart/',
          currentKeys: ['stuttgart'],
        },
        {
          label: 'End-of-Line (Beispiel)',
          path: '/branchen/end-of-line/',
          currentKeys: ['end-of-line'],
        },
        {
          label: 'Verpackungsmaschinen (Beispiel)',
          path: '/branchen/verpackungsmaschinen/',
          currentKeys: ['packaging-machinery'],
        },
        {
          label: 'Palettieranlagen (Beispiel)',
          path: '/branchen/palettieranlagen/',
          currentKeys: ['palletising-systems'],
        },
      ],
    },
    {
      label: 'Kontakt',
      path: '/kontakt/',
      activeKeys: ['contact'],
      currentKeys: ['contact'],
    },
  ],
  en: [
    {
      label: 'Services',
      id: 'services',
      activeKeys: ['home-en', 'industrial-ai-search-en'],
      children: [
        { label: 'Technical enquiry qualification', path: '/en/#workflow' },
        { label: 'Internal RFQ copilot', path: '/en/#internal-rfq-copilot' },
        { label: 'Further process automation', path: '/en/#further-automation' },
        {
          label: 'AI Search Readiness',
          path: '/en/ai-search-readiness-industrial-companies/',
          currentKeys: ['industrial-ai-search-en'],
        },
      ],
    },
    {
      label: 'Explore',
      id: 'explore',
      activeKeys: ['home-en'],
      children: [
        { label: 'Who it is for', path: '/en/#fit' },
        { label: 'Controls', path: '/en/#control' },
        { label: 'Approach', path: '/en/#process' },
        { label: 'About Hugo', path: '/en/#about' },
      ],
    },
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
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly menuOpen = signal(false);
  readonly openDropdown = signal<string | null>(null);
  readonly language = this.pageLocale.language;
  readonly languagePath = this.pageLocale.languagePath;
  readonly pageKey = this.pageLocale.pageKey;
  readonly navigation = computed(() => NAVIGATION[this.language()]);
  private readonly navToggle = viewChild<ElementRef<HTMLButtonElement>>('navToggle');
  readonly copy = computed(() =>
    this.language() === 'de'
      ? {
          subtitle: 'Technische Angebotsprozesse · Maschinenbau',
          brandLabel: 'Hugo Menz Automation: Startseite',
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
          brandLabel: 'Hugo Menz Automation: English home',
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
    this.menuOpen.update((open) => {
      if (open) {
        this.openDropdown.set(null);
      }
      return !open;
    });
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.openDropdown.set(null);
  }

  toggleDropdown(item: NavigationItem): void {
    if (!item.id) {
      return;
    }

    this.openDropdown.update((current) => (current === item.id ? null : item.id ?? null));
  }

  isDropdownOpen(item: NavigationItem): boolean {
    return item.id !== undefined && this.openDropdown() === item.id;
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

  @HostListener('document:pointerdown', ['$event'])
  closeMenuOutside(event: PointerEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.closeMenu();
    }
  }
}
