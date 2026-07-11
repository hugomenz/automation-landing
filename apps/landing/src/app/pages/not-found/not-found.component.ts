import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageLocaleService } from '../../core/page-locale.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="not-found">
      <div class="container">
        <p class="eyebrow">404</p>
        <h1>Seite nicht gefunden</h1>
        <p>Die angeforderte Seite existiert nicht oder wurde verschoben.</p>
        <div class="actions">
          <a class="btn btn-primary" href="/">Zur Startseite</a>
          <a class="btn btn-secondary" href="/kontakt/">Kontakt</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .not-found { padding-block: clamp(80px, 12vw, 160px); }
    h1 { margin-top: 16px; }
    p:not(.eyebrow) { margin-top: 20px; color: var(--text-secondary); }
    .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
  `,
})
export class NotFoundComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly locale = inject(PageLocaleService);

  constructor() {
    this.locale.setLanguage('de');
    this.title.setTitle('Seite nicht gefunden | Hugo Menz');
    this.meta.updateTag({ name: 'robots', content: 'noindex,follow' }, "name='robots'");
  }
}
