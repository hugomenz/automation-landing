import type {
  ContactContext,
  ContentLink,
  HeroDiagram,
  HreflangAlternate,
  PageFooterCopy,
  PageHeaderCopy,
  PageLanguage,
  PagePath,
  PageSeo,
} from './page.types';

export const PAGE_PAIRS = {
  home: ['/', '/en/'],
  services: ['/leistungen/', '/en/services/'],
  angular: ['/leistungen/angular-entwicklung/', '/en/angular-development/'],
  copilot: ['/leistungen/github-copilot/', '/en/github-copilot/'],
  automation: ['/leistungen/prozessautomatisierung/', '/en/process-automation/'],
  about: ['/ueber-hugo-martin/', '/en/about/'],
  contact: ['/kontakt/', '/en/contact/'],
} as const satisfies Record<string, readonly [PagePath, PagePath]>;

export function translatedAlternates(
  pair: readonly [PagePath, PagePath],
): readonly HreflangAlternate[] {
  return [
    { hreflang: 'de-DE', path: pair[0] },
    { hreflang: 'en', path: pair[1] },
    { hreflang: 'x-default', path: pair[0] },
  ];
}

export function pageSeo(
  lang: PageLanguage,
  path: PagePath,
  title: string,
  description: string,
  pair?: readonly [PagePath, PagePath],
): PageSeo {
  const imageAlt =
    lang === 'de'
      ? 'Hugo Martin: KI-Agenten, Prozessautomatisierung, MCP-Integration und Web-Anwendungen'
      : 'Hugo Martin: AI agents, process automation, MCP integration and web applications';

  return {
    title,
    description,
    canonicalPath: path,
    robots: 'index,follow',
    openGraph: {
      title,
      description,
      type: 'website',
      locale: lang === 'de' ? 'de_DE' : 'en_GB',
      imagePath: '/og-ai-services.png',
      imageAlt,
      siteName: 'Hugo Martin',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      imagePath: '/og-ai-services.png',
      imageAlt,
    },
    ...(pair ? { alternates: translatedAlternates(pair) } : {}),
  };
}

export function contactAction(
  lang: PageLanguage,
  context: ContactContext = 'general',
  label?: string,
): ContentLink {
  return {
    label: label ?? (lang === 'de' ? 'Projekt besprechen' : 'Discuss your project'),
    href: '#contact-form',
    contactContext: context,
    dataCta: `contact-${context}-${lang}`,
  };
}

export function pageHeader(
  lang: PageLanguage,
  alternatePath: PagePath,
  context: ContactContext = 'general',
): PageHeaderCopy {
  return lang === 'de'
    ? {
        brand: 'Hugo Martin',
        subtitle: 'KI-Agenten · Automatisierung · Web-Apps',
        navigation: [
          { label: 'KI-Agenten & MCP', href: PAGE_PAIRS.copilot[0] },
          { label: 'Automatisierung', href: PAGE_PAIRS.automation[0] },
          { label: 'Web-Apps', href: PAGE_PAIRS.angular[0] },
          { label: 'Über mich', href: PAGE_PAIRS.about[0] },
          { label: 'EN', href: alternatePath, lang: 'en' },
        ],
        cta: contactAction(lang, context),
      }
    : {
        brand: 'Hugo Martin',
        subtitle: 'AI agents · Automation · Web apps',
        navigation: [
          { label: 'AI agents & MCP', href: PAGE_PAIRS.copilot[1] },
          { label: 'Automation', href: PAGE_PAIRS.automation[1] },
          { label: 'Web apps', href: PAGE_PAIRS.angular[1] },
          { label: 'About me', href: PAGE_PAIRS.about[1] },
          { label: 'DE', href: alternatePath, lang: 'de' },
        ],
        cta: contactAction(lang, context),
      };
}

export function pageFooter(lang: PageLanguage): PageFooterCopy {
  return {
    left: 'Hugo Martin · Stuttgart',
    right:
      lang === 'de'
        ? 'Technische Dienstleistungen, persönlich und nebenberuflich.'
        : 'Technical services, delivered personally alongside my main role.',
    secondaryLink:
      lang === 'de'
        ? { label: 'Alle Leistungen', href: '/leistungen/' }
        : { label: 'All services', href: '/en/services/' },
  };
}

export function projectDiagram(lang: PageLanguage): HeroDiagram {
  return lang === 'de'
    ? {
        fileLabel: 'Ihr Projekt, Schritt für Schritt',
        nodes: [
          { stage: 'Aufgabe', label: 'Problem und Arbeitsablauf verstehen' },
          { stage: 'Umfang', label: 'Ergebnis und Grenzen vereinbaren' },
          { stage: 'Umsetzen', label: 'Einen konkreten Baustein entwickeln' },
          { stage: 'Prüfen', label: 'Am vereinbarten Beispiel testen' },
          { stage: 'Übergeben', label: 'Dokumentieren und erklären' },
        ],
        footer: 'Ein konkretes Problem. Ein nachvollziehbares Ergebnis.',
      }
    : {
        fileLabel: 'Your project, step by step',
        nodes: [
          { stage: 'Task', label: 'Understand the problem and workflow' },
          { stage: 'Scope', label: 'Agree on the result and boundaries' },
          { stage: 'Build', label: 'Develop one specific part' },
          { stage: 'Review', label: 'Test it against the agreed example' },
          { stage: 'Handover', label: 'Document and explain the solution' },
        ],
        footer: 'One specific problem. A result you can review.',
      };
}
