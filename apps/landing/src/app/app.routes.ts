import { Routes } from '@angular/router';
import { PAGE_REGISTRY } from './content/page.registry';
import legacyRedirects from './legacy-redirects.json';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routePath = (path: string): string => path.replace(/^\/+|\/+$/g, '');

export const routes: Routes = [
  ...PAGE_REGISTRY.map((page) => ({
    path: routePath(page.path),
    component: ContentPageComponent,
    data: { pageKey: page.key },
  })),
  ...legacyRedirects.map(({ from, to }) => ({
    path: routePath(from),
    redirectTo: to,
    pathMatch: 'full' as const,
  })),
  { path: '**', component: NotFoundComponent },
];
