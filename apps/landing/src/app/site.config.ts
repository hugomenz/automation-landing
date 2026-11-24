export type SupportedLanguage = 'de' | 'en';

export const siteConfig = {
  name: 'Hugo Martin Menz',
  brandName: 'Hugo Martin',
  baseUrl: 'https://www.hugomenz.de/',
  social: {
    linkedin: 'https://www.linkedin.com/in/hugomartin-menz/',
  },
  founder: {
    portraitSrc: '/hugo.jfif',
    portraitAlt: 'Porträt von Hugo Martin',
    jobTitle: 'UX Engineer',
  },
  socialImage: {
    src: '/og-services.png',
    width: 1200,
    height: 630,
  },
  locales: {
    de: 'de_DE',
    en: 'en_GB',
  },
  areaServed: ['Stuttgart', 'Baden-Württemberg', 'Deutschland', 'DACH'],
  knowsAbout: [
    'Angular',
    'TypeScript',
    'Angular-Komponentenbibliotheken',
    'Technische Implementierung bestehender Designsysteme',
    'GitHub Copilot',
    'KI-Agenten und Skills',
    'Agenten-Orchestrierung',
    'Developer Experience',
    'Prozessautomatisierung',
    'n8n',
    'Make',
    'Power Automate',
    'API- und Webhook-Integrationen',
  ],
} as const;

export function resolveAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, siteConfig.baseUrl).toString();
}
