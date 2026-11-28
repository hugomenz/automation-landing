import { describe, expect, it } from 'vitest';
import { contentHref } from './content-href';

describe('same-page links with a root base URL', () => {
  it('keeps a deep page and replaces its previous fragment', () => {
    expect(contentHref('#aufgaben', '/leistungen/angular-entwicklung/#belege'))
      .toBe('/leistungen/angular-entwicklung/#aufgaben');
    expect(contentHref('#content', '/en/angular-development/?ref=demo'))
      .toBe('/en/angular-development/?ref=demo#content');
  });
  it('preserves home fragments, route links and external destinations', () => {
    expect(contentHref('#content', '/')).toBe('/#content');
    expect(contentHref('/kontakt/', '/leistungen/')).toBe('/kontakt/');
    expect(contentHref('https://github.com/hugomenz', '/en/')).toBe('https://github.com/hugomenz');
  });
});
