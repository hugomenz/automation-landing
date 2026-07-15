import { Routes } from '@angular/router';
import { PageKey } from './content/page.types';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

function pageRoute(path: string, pageKey: PageKey) {
  return { path, component: ContentPageComponent, data: { pageKey } } as const;
}

export const routes: Routes = [
  pageRoute('', 'home-de'),
  pageRoute('loesungen/technische-anfragequalifizierung', 'technical-request-qualification'),
  pageRoute('leistungen/rfq-readiness-workshop', 'rfq-readiness-workshop'),
  pageRoute('leistungen/interner-rfq-copilot', 'internal-rfq-copilot'),
  pageRoute('branchen/end-of-line', 'end-of-line'),
  pageRoute('branchen/verpackungsmaschinen', 'packaging-machinery'),
  pageRoute('branchen/palettieranlagen', 'palletising-systems'),
  pageRoute('standorte/stuttgart', 'stuttgart'),
  pageRoute('ueber-hugo-menz', 'about-hugo-menz'),
  pageRoute('kontakt', 'contact'),
  pageRoute('n8n-beratung-stuttgart', 'n8n-consulting-stuttgart'),
  pageRoute('ki-sichtbarkeit-industrie', 'industrial-ai-search-de'),
  pageRoute('en', 'home-en'),
  pageRoute('en/ai-search-readiness-industrial-companies', 'industrial-ai-search-en'),
  { path: '**', component: NotFoundComponent },
];
