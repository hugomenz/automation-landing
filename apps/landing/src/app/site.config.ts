export type SupportedLanguage = 'de' | 'en';

export const siteConfig = {
  name: 'Hugo Martin Menz',
  brandName: 'Prozessautomatisierung für Unternehmen',
  email: 'hugomartin.menz@gmail.com',
  founder: {
    portraitSrc: '/hugo.jfif',
    portraitAlt: 'Hugo Martin Menz',
  },
  // TODO: replace this fallback with the production domain once it is known.
  baseUrl: 'https://TODO-add-real-domain.invalid',
  canonicalUrl: 'https://TODO-add-real-domain.invalid/',
  locale: 'de_DE',
  language: 'de',
  localizedLocales: {
    de: 'de_DE',
    en: 'en_GB',
  },
  localizedPaths: {
    de: '/',
    // TODO: enable hreflang output once a dedicated /en/ route exists.
    en: '/en/',
  },
  social: {
    // TODO: replace with the real public profile URL before launch.
    linkedin: '',
    // TODO: replace with the real public profile URL before launch.
    github: '',
  },
  contactLinks: {
    email: 'mailto:hugomartin.menz@gmail.com',
    linkedin: '',
    github: '',
  },
  contactSubjects: {
    de: 'Prozess besprechen',
    en: 'Discuss a process',
  },
  seo: {
    title:
      'Prozessautomatisierung für Unternehmen in Deutschland | Hugo Martin Menz',
    description:
      'Ich automatisiere manuelle Prozesse: Tools verbinden, Leads ins CRM schicken, Reports erstellen, Daten bereinigen. Sie zeigen mir den Prozess, ich baue die Automatisierung.',
    localized: {
      de: {
        title:
          'Prozessautomatisierung für Unternehmen in Deutschland | Hugo Martin Menz',
        description:
          'Ich automatisiere manuelle Prozesse: Tools verbinden, Leads ins CRM schicken, Reports erstellen, Daten bereinigen. Sie zeigen mir den Prozess, ich baue die Automatisierung.',
      },
      en: {
        title:
          'Process Automation for Companies in Germany | Hugo Martin Menz',
        description:
          'I automate manual processes: connect tools, send leads to your CRM, build reports, clean up data. You show me the process, I build the automation.',
      },
    },
    ogImage: '/og-preview.jpg',
    twitterImage: '/og-preview.jpg',
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
    'Workflow Automation',
    'n8n Automatisierung',
    'API-Integrationen',
    'Interne Tools mit Angular',
    'Support Automation',
    'AI Workflows mit Human Review',
  ],
  areaServed: ['Deutschland', 'DACH', 'Remote'],
  schema: {
    jobTitle: 'Freelancer für Prozessautomatisierung',
    priceRange: 'EUR EUR',
    knowsAbout: [
      'Workflow Automation',
      'n8n',
      'Make',
      'API-Integrationen',
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
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Place', name: 'DACH' },
    ],
    breadcrumbs: [
      { name: 'Start', path: '/' },
      { name: 'Prozessautomatisierung Deutschland', path: '/' },
    ],
  },
} as const;

export function resolveBaseUrl(currentOrigin?: string): string {
  if (currentOrigin) {
    return currentOrigin.replace(/\/$/, '');
  }

  return siteConfig.baseUrl.replace(/\/$/, '');
}

export function resolveAbsoluteUrl(pathOrUrl: string, currentOrigin?: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, `${resolveBaseUrl(currentOrigin)}/`).toString();
}

export function getContactHref(language: SupportedLanguage): string {
  const subject = siteConfig.contactSubjects[language];

  return `${siteConfig.contactLinks.email}?subject=${encodeURIComponent(subject)}`;
}

export function getSocialLinks(): string[] {
  return [siteConfig.social.linkedin, siteConfig.social.github].filter((value) =>
    /^https?:\/\//i.test(value),
  );
}