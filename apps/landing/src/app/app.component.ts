import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { CasesSectionComponent } from './components/cases-section/cases-section.component';
import { CertificatesSectionComponent } from './components/certificates-section/certificates-section.component';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProblemSectionComponent } from './components/problem-section/problem-section.component';
import { ProcessSectionComponent } from './components/process-section/process-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { SignalBandComponent } from './components/signal-band/signal-band.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { LanguageService } from './language.service';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    ContactDialogComponent,
    SignalBandComponent,
    ProblemSectionComponent,
    ProcessSectionComponent,
    ServicesSectionComponent,
    CasesSectionComponent,
    CertificatesSectionComponent,
    FinalCtaComponent,
    SiteFooterComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  private timer: ReturnType<typeof setInterval> | null = null;
  private readonly languageService = inject(LanguageService);

  readonly content = this.languageService.content;
  readonly activeCaseIndex = signal(0);
  readonly activeDiagram = computed(() => {
    const cases = this.content().banner.cases;
    return cases[this.activeCaseIndex()]?.diagram ?? this.content().hero.diagram;
  });

  ngOnInit(): void {
    if (
      typeof window === 'undefined' ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    this.timer = setInterval(() => {
      const total = this.content().banner.cases.length;

      if (total > 1) {
        this.activeCaseIndex.update((index) => (index + 1) % total);
      }
    }, 5600);
  }

  ngOnDestroy(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
  }
}
