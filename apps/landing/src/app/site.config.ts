export type SupportedLanguage = 'de' | 'en';

export const siteConfig = {
  name: 'Hugo Martin Menz',
  brandName: 'Hugo Menz Automation',
  founder: {
    portraitSrc: 'hugo.jfif',
    portraitAlt: 'Hugo Martin Menz',
  },
  baseUrl: 'https://www.hugomenz.de/',
  canonicalUrl: 'https://www.hugomenz.de/',
  locale: 'de_DE',
  language: 'de',
  localizedLocales: {
    de: 'de_DE',
    en: 'en_GB',
  },
  localizedPaths: {
    de: './',
    // TODO: enable hreflang output once a dedicated /en/ route exists.
    en: 'en/',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/hugomartin-menz/',
    // TODO: replace with the real public profile URL before launch.
    github: '',
  },
  seoLandingLinks: [
    {
      label: 'n8n Beratung Stuttgart',
      href: './n8n-beratung-stuttgart/',
    },
  ],
  seo: {
    title: 'Prozessautomatisierung | Hugo Menz',
    description:
      'Ich automatisiere manuelle Prozesse: Tools verbinden, Leads ins CRM schicken, Reports erstellen, Daten bereinigen. Sie zeigen mir den Prozess, ich baue die Automatisierung.',
    localized: {
      de: {
        title: 'Prozessautomatisierung | Hugo Menz',
        description:
          'Ich automatisiere manuelle Prozesse: Tools verbinden, Leads ins CRM schicken, Reports erstellen, Daten bereinigen. Sie zeigen mir den Prozess, ich baue die Automatisierung.',
      },
      en: {
        title: 'Process Automation | Hugo Menz',
        description:
          'I automate manual processes: connect tools, send leads to your CRM, build reports, clean up data. You show me the process, I build the automation.',
      },
    },
    ogImage: 'og-preview.png',
    twitterImage: 'og-preview.png',
    ogImageAlt:
      'Prozessautomatisierung für Unternehmen in Deutschland – Hugo Martin Menz',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    siteName: 'Hugo Martin Menz | Prozessautomatisierung',
  },
  messaging: {
    primaryHeadline: 'Ich automatisiere Prozesse, die jeden Tag Zeit kosten.',
    primaryCta: 'Prozess besprechen',
    secondaryCta: 'Beispiele ansehen',
  },
  services: [
    'n8n Beratung Stuttgart',
    'Workflow Automation',
    'n8n Automatisierung',
    'API-Integrationen',
    'Webhooks',
    'KI-Automatisierung',
    'Interne Tools mit Angular',
    'Support Automation',
    'AI Workflows mit Human Review',
  ],
  areaServed: ['Stuttgart', 'Baden-Württemberg', 'Deutschland', 'DACH', 'Remote'],
  schema: {
    jobTitle: 'AI Automation Engineer',
    priceRange: '€€',
    knowsAbout: [
      'n8n Beratung Stuttgart',
      'Workflow Automation',
      'n8n',
      'Make',
      'API-Integrationen',
      'Webhooks',
      'KI-Automatisierung',
      'Angular',
      'Interne Tools',
      'Support Automation',
      'HubSpot',
      'Zendesk',
      'Slack',
      'Google Sheets',
      'Airtable',
      'AI Workflows mit Human Review',
    ],
    areaServed: [
      { '@type': 'City', name: 'Stuttgart' },
      { '@type': 'AdministrativeArea', name: 'Baden-Württemberg' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Place', name: 'DACH' },
    ],
    breadcrumbs: [
      { name: 'Start', path: './' },
      { name: 'Prozessautomatisierung Deutschland', path: './' },
    ],
  },
} as const;

export function resolveBaseUrl(currentBase?: string): string {
  if (currentBase) {
    try {
      return new URL('.', currentBase).toString().replace(/\/$/, '');
    } catch {
      // Fall back to the configured site URL when the runtime base is unavailable.
    }
  }

  return siteConfig.baseUrl.replace(/\/$/, '');
}

export function resolveAbsoluteUrl(pathOrUrl: string, currentBase?: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, `${resolveBaseUrl(currentBase)}/`).toString();
}

export function getSocialLinks(): string[] {
  return [siteConfig.social.linkedin, siteConfig.social.github].filter((value) =>
    /^https?:\/\//i.test(value),
  );
}
