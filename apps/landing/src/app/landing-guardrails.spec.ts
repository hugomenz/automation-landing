import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const angularJson = readFileSync(new URL('../../angular.json', import.meta.url), 'utf8');
const appConfig = readFileSync(new URL('./app.config.ts', import.meta.url), 'utf8');
const globalStyles = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
const signalBandTemplate = readFileSync(
  new URL('./components/signal-band/signal-band.component.html', import.meta.url),
  'utf8',
);
const packageJson = JSON.parse(
  readFileSync(new URL('../../package.json', import.meta.url), 'utf8'),
) as {
  scripts: Record<string, string>;
  dependencies: Record<string, string | undefined>;
};
const componentFiles = [
  './app.component.ts',
  './components/cases-section/cases-section.component.ts',
  './components/certificates-section/certificates-section.component.ts',
  './components/final-cta/final-cta.component.ts',
  './components/header/header.component.ts',
  './components/hero/hero.component.ts',
  './components/language-switcher/language-switcher.component.ts',
  './components/problem-section/problem-section.component.ts',
  './components/process-section/process-section.component.ts',
  './components/services-section/services-section.component.ts',
  './components/signal-band/signal-band.component.ts',
  './components/site-footer/site-footer.component.ts',
  './components/workflow-panel/workflow-panel.component.ts',
].map((path) => readFileSync(new URL(path, import.meta.url), 'utf8'));
const scrollRevealDirective = readFileSync(
  new URL('./scroll-reveal.directive.ts', import.meta.url),
  'utf8',
);

describe('landing guardrails', () => {
  it('keeps a shared header offset for anchor navigation', () => {
    expect(globalStyles).toContain('--header-offset: 96px;');
    expect(globalStyles).toContain('scroll-padding-top: var(--header-offset);');
    expect(globalStyles).toContain('scroll-margin-top: var(--header-offset);');
  });

  it('tracks search signals by index to avoid full DOM recreation on language switch', () => {
    expect(signalBandTemplate).toContain('@for (item of items(); track $index)');
  });

  it('keeps the start script free of hardcoded host or port values', () => {
    expect(packageJson.scripts.start).toBe('ng serve');
    expect(packageJson.scripts.start).not.toContain('4200');
    expect(packageJson.scripts.start).not.toContain('127.0.0.1');
  });

  it('runs the landing without Zone.js and enables zoneless change detection', () => {
    expect(appConfig).toContain('provideZonelessChangeDetection()');
    expect(angularJson).not.toContain('zone.js');
    expect(packageJson.dependencies['zone.js']).toBeUndefined();
  });

  it('uses signal inputs instead of legacy @Input across landing components', () => {
    for (const source of componentFiles) {
      expect(source).not.toContain('@Input');
    }

    const signalInputComponents = componentFiles.filter((source) =>
      source.includes('input.required<'),
    );

    expect(signalInputComponents.length).toBeGreaterThanOrEqual(11);
  });

  it('keeps scroll reveal reactive under zoneless change detection', () => {
    expect(scrollRevealDirective).toContain('readonly isVisible = signal(false);');
    expect(scrollRevealDirective).not.toContain('NgZone');
  });
});