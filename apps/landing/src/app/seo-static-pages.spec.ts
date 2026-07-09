import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const n8nPage = readFileSync(
  new URL('../../public/n8n-beratung-stuttgart/index.html', import.meta.url),
  'utf8',
);
const sitemap = readFileSync(new URL('../../public/sitemap.xml', import.meta.url), 'utf8');
const robots = readFileSync(new URL('../../public/robots.txt', import.meta.url), 'utf8');

describe('static SEO pages', () => {
  it('publishes a crawlable n8n Stuttgart landing page', () => {
    expect(n8nPage).toContain(
      '<title>n8n Beratung Stuttgart | Workflow Automation &amp; KI-Automatisierung</title>',
    );
    expect(n8nPage).toContain('<h1>n8n Beratung in Stuttgart</h1>');
    expect(n8nPage).toContain(
      '<link rel="canonical" href="https://hugomenz.de/n8n-beratung-stuttgart/" />',
    );
    expect(n8nPage).toContain('"@type": "ProfessionalService"');
    expect(n8nPage).toContain('https://www.linkedin.com/in/hugomartin-menz/');
  });

  it('advertises the n8n landing page through sitemap and robots.txt', () => {
    expect(sitemap).toContain('https://hugomenz.de/');
    expect(sitemap).toContain('https://hugomenz.de/n8n-beratung-stuttgart/');
    expect(robots).toContain('Sitemap: https://hugomenz.de/sitemap.xml');
  });
});
