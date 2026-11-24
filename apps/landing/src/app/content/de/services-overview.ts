import { contactAction, pageFooter, pageHeader, pageSeo, PAGE_PAIRS } from '../page.helpers';
import type { PageDefinition } from '../page.types';

export const SERVICES_OVERVIEW_DE = {
  key: 'services-overview-de',
  path: '/leistungen/',
  lang: 'de',
  locale: 'de_DE',
  seo: pageSeo(
    'de',
    '/leistungen/',
    'IT-Dienstleistungen: KI-Agenten, MCP & Automatisierung | Hugo Martin',
    'Mein Angebot: KI-Agenten, MCP- und API-Integration, Prozessautomatisierung, Angular-Web-Anwendungen und Entwicklungsabläufe mit GitHub Copilot.',
    PAGE_PAIRS.services,
  ),
  header: pageHeader('de', PAGE_PAIRS.services[1]),
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Leistungen', path: '/leistungen/' },
  ],
  hero: {
    kicker: 'IT-Dienstleistungen · Hugo Martin',
    h1: 'KI-Agenten, Automatisierung und Web-Anwendungen',
    lead: 'Ich unterstütze kleine Unternehmen und Entwicklungsteams bei der technischen Umsetzung: Agenten mit Tools verbinden, manuelle Abläufe automatisieren und passende Anwendungen entwickeln.',
    primaryCta: contactAction('de'),
    trustLine: 'Stuttgart und remote · direkter Kontakt · klarer Projektumfang',
  },
  sections: [
    {
      id: 'angebot',
      heading: 'Wobei ich Sie unterstütze',
      items: [
        {
          label: '01',
          title: 'KI-Agenten, MCP und API-Integration',
          body: 'Agenten für konkrete Aufgaben einrichten und mit den benötigten Tools und Daten verbinden. Dazu gehören passende MCP-Verbindungen, vorhandene APIs, eigene Skills und klar beschriebene Übergaben zwischen Agenten.',
          link: { label: 'KI-Agenten und MCP', href: '/leistungen/github-copilot/' },
        },
        {
          label: '02',
          title: 'Prozessautomatisierung',
          body: 'Wiederkehrende Abläufe zwischen Formularen, E-Mail, CRM und anderen Systemen umsetzen. Je nach Aufgabe mit n8n, Make, Power Automate, APIs oder Webhooks.',
          link: { label: 'Prozessautomatisierung', href: '/leistungen/prozessautomatisierung/' },
        },
        {
          label: '03',
          title: 'Individuelle Web-Anwendungen und interne Tools',
          body: 'Web-Apps mit Angular entwickeln, vorhandene Anwendungen erweitern und APIs anbinden. Bestehende Designsysteme und Komponentenbibliotheken setze ich technisch in Angular um.',
          link: { label: 'Web-Anwendungen mit Angular', href: '/leistungen/angular-entwicklung/' },
        },
        {
          label: '04',
          title: 'KI-gestützte Entwicklungsabläufe',
          body: 'GitHub Copilot mit Projektwissen, Skills, Agenten und MCP-Tools auf Ihr Repository abstimmen. Wiederkehrende Aufgaben koordinieren und die Developer Experience verbessern.',
          link: { label: 'GitHub Copilot und Entwicklungsabläufe', href: '/leistungen/github-copilot/#entwicklung' },
        },
      ],
      layout: 'list',
    },
    {
      id: 'zusammenarbeit',
      heading: 'Von einer konkreten Aufgabe zu einer nutzbaren Lösung',
      paragraphs: [
        'Wir beginnen mit Ihrem Ablauf, den vorhandenen Systemen und dem gewünschten Ergebnis. Daraus vereinbaren wir den Umfang, die Prüfkriterien, Kosten und Zeitrahmen.',
        'Zum vereinbarten Ergebnis gehören die Umsetzung, passende Prüfungen und eine verständliche Übergabe. Quellcode, Workflows oder Agentenkonfigurationen bleiben für die weitere Nutzung dokumentiert.',
        'Ich arbeite persönlich und nebenberuflich. Verfügbarkeit und weitere Betreuung stimmen wir für das jeweilige Projekt ab.',
      ],
      links: [{ label: 'Über meinen technischen Hintergrund', href: '/ueber-hugo-martin/' }],
      layout: 'text',
    },
  ],
  finalCta: {
    heading: 'Welche Aufgabe möchten Sie umsetzen?',
    body: 'Beschreiben Sie kurz den aktuellen Ablauf, Ihre Tools und das gewünschte Ergebnis. Eine konkrete Aufgabe reicht für den ersten Austausch.',
    action: contactAction('de'),
  },
  footer: pageFooter('de'),
  schemaKinds: ['Service', 'BreadcrumbList'],
} as const satisfies PageDefinition;
