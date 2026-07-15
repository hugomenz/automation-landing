import { readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const angularJson = JSON.parse(
  readFileSync(new URL('../../angular.json', import.meta.url), 'utf8'),
) as {
  projects: {
    landing: {
      architect: {
        build: {
          options: {
            outputPath: string;
            outputMode: string;
            browser: string;
            server: string;
            polyfills: readonly string[];
          };
        };
      };
    };
  };
};
const packageJson = JSON.parse(
  readFileSync(new URL('../../package.json', import.meta.url), 'utf8'),
) as {
  scripts: Record<string, string>;
  dependencies: Record<string, string | undefined>;
};
const appConfig = readFileSync(new URL('./app.config.ts', import.meta.url), 'utf8');
const serverConfig = readFileSync(
  new URL('./app.config.server.ts', import.meta.url),
  'utf8',
);
const browserRoutes = readFileSync(new URL('./app.routes.ts', import.meta.url), 'utf8');
const serverRoutes = readFileSync(new URL('./app.routes.server.ts', import.meta.url), 'utf8');
const appComponent = readFileSync(new URL('./app.component.ts', import.meta.url), 'utf8');
const appTemplate = readFileSync(new URL('./app.component.html', import.meta.url), 'utf8');
const globalStyles = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
const contactDialog = readFileSync(
  new URL('./components/contact-dialog/contact-dialog.component.ts', import.meta.url),
  'utf8',
);
const contactTemplate = readFileSync(
  new URL('./components/contact-dialog/contact-dialog.component.html', import.meta.url),
  'utf8',
);
const contactConfig = readFileSync(new URL('./contact-form.config.ts', import.meta.url), 'utf8');
const rateLimiter = readFileSync(
  new URL('./contact-form-rate-limiter.service.ts', import.meta.url),
  'utf8',
);
const contentPage = readFileSync(
  new URL('./pages/content-page/content-page.component.ts', import.meta.url),
  'utf8',
);
const contentPageTemplate = readFileSync(
  new URL('./pages/content-page/content-page.component.html', import.meta.url),
  'utf8',
);
const sectionIndex = readFileSync(
  new URL('./components/section-index/section-index.component.ts', import.meta.url),
  'utf8',
);
const sectionIndexTemplate = readFileSync(
  new URL('./components/section-index/section-index.component.html', import.meta.url),
  'utf8',
);

function filesBelow(directory: URL): readonly URL[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryUrl = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory);
    return entry.isDirectory() ? filesBelow(entryUrl) : [entryUrl];
  });
}

const componentSources = filesBelow(new URL('./', import.meta.url))
  .filter((url) => url.pathname.endsWith('.component.ts'))
  .map((url) => ({ url, source: readFileSync(url, 'utf8') }));

describe('Angular architecture guardrails', () => {
  it('keeps Angular Router and static SSR on the project patch version', () => {
    expect(packageJson.dependencies['@angular/router']).toBe('21.2.17');
    expect(packageJson.dependencies['@angular/ssr']).toBe('21.2.17');
    expect(packageJson.dependencies['@angular/core']).toBe('21.2.17');

    const build = angularJson.projects.landing.architect.build.options;
    expect(build.outputMode).toBe('static');
    expect(build.outputPath).toBe('dist/landing');
    expect(build.browser).toBe('src/main.ts');
    expect(build.server).toBe('src/main.server.ts');
    expect(serverConfig).toContain('provideServerRendering(withRoutes(serverRoutes))');
    expect(serverRoutes).toContain('RenderMode.Prerender');
    expect(serverRoutes).toContain("path: '**'");
  });

  it('uses a router shell and explicit browser routes', () => {
    expect(appConfig).toContain('provideRouter(');
    expect(appConfig).toContain('provideClientHydration(withEventReplay())');
    expect(appComponent).toContain('RouterOutlet');
    expect(appTemplate).toContain('<router-outlet />');
    expect(browserRoutes.match(/^\s*pageRoute\(/gm)).toHaveLength(15);
  });

  it('runs without Zone.js and enables zoneless change detection', () => {
    expect(appConfig).toContain('provideZonelessChangeDetection()');
    expect(angularJson.projects.landing.architect.build.options.polyfills).not.toContain(
      'zone.js',
    );
    expect(packageJson.dependencies['zone.js']).toBeUndefined();
  });

  it('keeps all Angular components standalone and OnPush', () => {
    expect(componentSources.length).toBeGreaterThan(0);

    for (const { url, source } of componentSources) {
      expect(source, `${url.pathname} standalone`).toContain('standalone: true');
      expect(source, `${url.pathname} OnPush`).toContain(
        'changeDetection: ChangeDetectionStrategy.OnPush',
      );
      expect(source, `${url.pathname} legacy @Input`).not.toContain('@Input');
    }
  });

  it('uses signal inputs on reusable content components', () => {
    const signalInputComponents = componentSources.filter(({ source }) =>
      source.includes('input.required<'),
    );

    expect(signalInputComponents.length).toBeGreaterThanOrEqual(3);
    expect(signalInputComponents.some(({ url }) => url.pathname.includes('breadcrumbs'))).toBe(
      true,
    );
    expect(signalInputComponents.some(({ url }) => url.pathname.includes('content-link'))).toBe(
      true,
    );
    expect(signalInputComponents.some(({ url }) => url.pathname.includes('rfq-flow'))).toBe(true);
  });
});

describe('interaction and accessibility guardrails', () => {
  it('keeps the start script free of hardcoded host or port values', () => {
    expect(packageJson.scripts.start).toBe('ng serve');
    expect(packageJson.scripts.start).not.toContain('4200');
    expect(packageJson.scripts.start).not.toContain('127.0.0.1');
  });

  it('keeps a shared header offset for anchor navigation', () => {
    expect(globalStyles).toMatch(/--header-offset:\s*\d+px;/);
    expect(globalStyles).toContain('scroll-padding-top: var(--header-offset);');
    expect(globalStyles).toContain('scroll-margin-top: var(--header-offset);');
  });

  it('preserves visible focus and reduced-motion handling', () => {
    expect(globalStyles).toContain(':focus-visible');
    expect(globalStyles).toContain('@media (prefers-reduced-motion: reduce)');
  });

  it('keeps an accessible current-section index on content pages', () => {
    expect(contentPage).toContain('SectionIndexComponent');
    expect(contentPageTemplate).toContain('<app-section-index');
    expect(sectionIndex).toContain('IntersectionObserver');
    expect(sectionIndex).toContain('activeHref');
    expect(sectionIndexTemplate).toContain('class="section-index"');
    expect(sectionIndexTemplate).toContain("aria-current");
    expect(sectionIndexTemplate).toContain('class="section-jump"');
    expect(sectionIndexTemplate).toContain('(change)="jumpToSection($event)"');
  });
});

describe('protected contact form guardrails', () => {
  it('keeps the existing webhook contract and payload fields', () => {
    expect(contactConfig).toContain('hook.eu1.make.com/19yorkt8rpwnxud22wlrmxsdgmi7gxjt');
    expect(contactDialog).toMatch(
      /const payload = \{[\s\S]*name:[\s\S]*email:[\s\S]*phone:[\s\S]*message:[\s\S]*page_url:[\s\S]*source:/,
    );
    expect(contactDialog).toContain("source: 'website_contact_form'");
    expect(contactDialog).toContain('contact_context: this.contactDialog.context()');
  });

  it('keeps required-field validation, feedback and submission protection', () => {
    expect(contactDialog.match(/Validators\.required/g)).toHaveLength(3);
    expect(contactDialog).toContain('emailValidator');
    expect(contactDialog).toContain('phoneValidator');
    expect(contactDialog).toContain('messageValidator');
    expect(contactDialog).toContain("this.snackbarService.show('success'");
    expect(contactDialog).toContain("this.snackbarService.show('error'");
    expect(rateLimiter).toContain('maxPerMinute = 2');
    expect(rateLimiter).toContain('maxPerSession = 2');
  });

  it('keeps the first contact file-free and keyboard accessible', () => {
    expect(contactTemplate).not.toMatch(/type=["']file["']/i);
    expect(contactTemplate).toContain('contact-dialog-confidentiality');
    expect(contactDialog).toContain("event.key === 'Escape'");
    expect(contactDialog).toContain("event.key === 'Tab'");
    expect(contactDialog).toContain('trapFocus(event)');
  });
});
