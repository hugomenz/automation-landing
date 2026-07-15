import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { PageLocaleService } from '../../core/page-locale.service';

interface NavigationItem {
  readonly label: string;
  readonly path: string;
  readonly lang?: 'de';
}

const NAVIGATION: Record<'de' | 'en', readonly NavigationItem[]> = {
  de: [
    { label: 'Lösung', path: '/loesungen/technische-anfragequalifizierung/' },
    { label: 'Branchen', path: '/branchen/end-of-line/' },
    { label: 'Leistungen', path: '/leistungen/rfq-readiness-workshop/' },
    { label: 'Über Hugo', path: '/ueber-hugo-menz/' },
    { label: 'Kontakt', path: '/kontakt/' },
  ],
  en: [
    { label: 'Solution', path: '/en/#solution' },
    { label: 'Industries', path: '/en/#industries' },
    { label: 'Services', path: '/en/#process' },
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

  readonly menuOpen = signal(false);
  readonly language = this.pageLocale.language;
  readonly languagePath = this.pageLocale.languagePath;
  readonly navigation = computed(() => NAVIGATION[this.language()]);
  readonly copy = computed(() =>
    this.language() === 'de'
      ? {
          subtitle: 'Technische Angebotsprozesse · Maschinenbau',
          brandLabel: 'Hugo Menz Automation – Startseite',
          navigationLabel: 'Hauptnavigation',
          menuLabel: 'Menü umschalten',
          languageLabel: 'English version',
          languageText: 'EN',
          homePath: '/',
          cta: 'Pilot-Eignung prüfen',
          ctaPath: '/leistungen/rfq-readiness-workshop/',
        }
      : {
          subtitle: 'Technical quotation processes · Machinery',
          brandLabel: 'Hugo Menz Automation – English home',
          navigationLabel: 'Primary navigation',
          menuLabel: 'Toggle menu',
          languageLabel: 'Deutsche Version',
          languageText: 'DE',
          homePath: '/en/',
          cta: 'Check pilot fit',
          ctaPath: '/en/#contact',
        },
  );

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
