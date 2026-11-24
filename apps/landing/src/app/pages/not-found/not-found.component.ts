import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageLocaleService } from '../../core/page-locale.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="not-found">
      <div class="container">
        <p class="eyebrow">404</p>
        <h1>{{ isEnglish ? 'Page not found' : 'Seite nicht gefunden' }}</h1>
        <p>{{ isEnglish ? 'This page no longer exists or has moved.' : 'Diese Seite existiert nicht mehr oder wurde verschoben.' }}</p>
        <div class="actions">
          <a class="btn btn-primary" [href]="isEnglish ? '/en/' : '/'">
            {{ isEnglish ? 'Go to the homepage' : 'Zur Startseite' }}
          </a>
          <a class="btn btn-secondary" [href]="isEnglish ? '/en/contact/' : '/kontakt/'">
            {{ isEnglish ? 'Contact Hugo' : 'Hugo kontaktieren' }}
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .not-found { padding-block: clamp(80px, 12vw, 160px); }
    h1 { margin-top: 16px; max-width: 20ch; }
    p:not(.eyebrow) { margin-top: 20px; color: var(--text-secondary); max-width: 42rem; }
    .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
  `,
})
export class NotFoundComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly locale = inject(PageLocaleService);

  readonly isEnglish = inject(ActivatedRoute).snapshot.url[0]?.path === 'en';

  constructor() {
    this.locale.setLanguage(this.isEnglish ? 'en' : 'de');
    this.title.setTitle(`${this.isEnglish ? 'Page not found' : 'Seite nicht gefunden'} | Hugo Martin`);
    this.meta.updateTag({ name: 'robots', content: 'noindex,follow' }, "name='robots'");
  }
}
