export type SupportedLanguage = 'de' | 'en';

export const siteConfig = {
  name: 'Hugo Martin Menz',
  brandName: 'Hugo Menz Automation',
  baseUrl: 'https://www.hugomenz.de/',
  social: {
    linkedin: 'https://www.linkedin.com/in/hugomartin-menz/',
  },
  founder: {
    portraitSrc: '/hugo.jfif',
    portraitAlt:
      'Hugo Martin Menz, Maschinenbauingenieur und Webentwickler in Stuttgart',
  },
  socialImage: {
    src: '/og-rfq-preview.png',
    width: 1200,
    height: 630,
  },
  locales: {
    de: 'de_DE',
    en: 'en',
  },
  areaServed: ['Stuttgart', 'Baden-Württemberg', 'Deutschland', 'DACH'],
  knowsAbout: [
    'Angebotsprozesse im Maschinenbau',
    'Technische Anfragequalifizierung',
    'RFQ-Prozesse',
    'Vertriebsengineering',
    'Sondermaschinenbau',
    'Webentwicklung',
    'API-Integrationen',
    'n8n',
    'Make',
    'Human-in-the-loop-Automatisierung',
  ],
} as const;

export function resolveAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, siteConfig.baseUrl).toString();
}
