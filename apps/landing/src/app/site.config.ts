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
    portraitAlt: 'Porträt von Hugo Martin Menz',
    jobTitle: 'UX Engineer für digitale Prozesse und Automatisierung',
  },
  socialImage: {
    src: '/og-general-de.png',
    width: 1200,
    height: 630,
  },
  locales: {
    de: 'de_DE',
    en: 'en',
  },
  areaServed: ['Stuttgart', 'Baden-Württemberg', 'Deutschland', 'DACH'],
  knowsAbout: [
    'UX Engineering',
    'Interface-Entwicklung',
    'UI-Komponenten',
    'Interne Tools',
    'Digitale Prozessautomatisierung',
    'Systemintegrationen',
    'Technische Anfragequalifizierung',
    'RFQ-Prozesse',
    'Vertriebsengineering',
    'Sondermaschinenbau',
    'Industrieautomation',
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
