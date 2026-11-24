import { contactAction, pageFooter, pageHeader, pageSeo, PAGE_PAIRS } from '../page.helpers';
import type { PageDefinition } from '../page.types';

export const ABOUT_HUGO_MARTIN_DE = {
  key: 'about-hugo-martin-de',
  path: '/ueber-hugo-martin/',
  lang: 'de',
  locale: 'de_DE',
  seo: pageSeo(
    'de',
    '/ueber-hugo-martin/',
    'Über Hugo Martin | KI-Agenten & IT-Dienstleistungen',
    'Mein Weg vom Maschinenbau zur Softwareentwicklung. Persönliche IT-Dienstleistungen mit KI-Agenten, MCP, Prozessautomatisierung und Angular aus Stuttgart.',
    PAGE_PAIRS.about,
  ),
  header: pageHeader('de', PAGE_PAIRS.about[1]),
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Über Hugo Martin', path: '/ueber-hugo-martin/' },
  ],
  hero: {
    kicker: 'Hugo Martin · Stuttgart',
    h1: 'Technische Arbeit mit Blick auf den ganzen Ablauf',
    lead: 'Ich komme aus dem Maschinenbau und arbeite heute in der Softwareentwicklung. Ich verbinde die Arbeit an Anwendungen mit KI-Agenten, MCP-Anbindungen und der Automatisierung wiederkehrender Aufgaben.',
    primaryCta: contactAction('de'),
    secondaryCta: {
      label: 'Mein Profil auf LinkedIn',
      href: 'https://www.linkedin.com/in/hugomartin-menz/',
      external: true,
    },
    trustLine: 'Persönlicher Ansprechpartner · nebenberuflich · Deutsch, Englisch und Spanisch',
    portrait: {
      src: '/hugo.jfif',
      alt: 'Porträt von Hugo Martin',
      width: 400,
      height: 400,
    },
  },
  sections: [
    {
      id: 'hintergrund',
      heading: 'Vom Maschinenbau zu Anwendungen und Entwicklungsabläufen',
      paragraphs: [
        'Mein beruflicher Weg begann im Maschinenbau, in der Konstruktion und der technischen Projektarbeit. Dabei habe ich gelernt, Anforderungen zu klären, Abhängigkeiten zu verstehen und technische Entscheidungen nachvollziehbar zu machen.',
        'Heute arbeite ich bei EPLAN als UX Engineer. Dort beschäftige ich mich mit Angular, gemeinsamen Komponentenbibliotheken, internen Tools und Entwicklungsabläufen. Auch GitHub Copilot mit eigenen Skills, Agenten und Automatisierung gehört zu meiner technischen Arbeit. Dabei erprobe ich MCP-Anbindungen und koordinierte Agenten-Workflows.',
      ],
      layout: 'text',
    },
    {
      id: 'leistungen',
      heading: 'Wobei ich Sie unterstützen kann',
      items: [
        {
          title: 'KI-Agenten, MCP und Entwicklungsabläufe',
          body: 'Agenten mit Tools und Daten verbinden, MCP-Anbindungen einrichten und GitHub Copilot mit eigenen Skills auf Entwicklungsaufgaben abstimmen.',
          link: { label: 'KI-Agenten und MCP', href: '/leistungen/github-copilot/' },
        },
        {
          title: 'Prozessautomatisierung',
          body: 'Wiederkehrende Aufgaben mit n8n, Make, Power Automate und vorhandenen APIs verbinden.',
          link: { label: 'Prozessautomatisierung', href: '/leistungen/prozessautomatisierung/' },
        },
        {
          title: 'Individuelle Web-Anwendungen',
          body: 'Anwendungen, interne Tools und Komponentenbibliotheken entwickeln. Bestehende Designsysteme setze ich technisch in Angular um.',
          link: { label: 'Angular-Entwicklung', href: '/leistungen/angular-entwicklung/' },
        },
      ],
      layout: 'list',
    },
    {
      id: 'zusammenarbeit',
      heading: 'Sie arbeiten direkt mit mir',
      paragraphs: [
        'Ich biete diese Leistungen nebenberuflich an. Deshalb planen wir einen klaren Projektumfang und stimmen Verfügbarkeit, Kosten und Termine vor dem Start ab.',
        'Mir ist wichtig, dass Sie die Lösung weiterverwenden können. Zum vereinbarten Ergebnis gehören verständlicher Code oder nachvollziehbare Workflows sowie die passende Dokumentation und Übergabe.',
        'Ich bin in Stuttgart und arbeite auch remote. Gespräche und Dokumentation sind auf Deutsch, Englisch oder Spanisch möglich.',
      ],
      links: [{ label: 'Zusammenarbeit in Stuttgart', href: '/standorte/stuttgart/' }],
      layout: 'text',
    },
  ],
  finalCta: {
    heading: 'Eine konkrete Aufgabe ist ein guter Anfang',
    body: 'Beschreiben Sie kurz Ihr Vorhaben und die vorhandenen Systeme. Dann prüfen wir gemeinsam, welcher Umfang sinnvoll ist.',
    action: contactAction('de'),
  },
  footer: pageFooter('de'),
  schemaKinds: ['Person', 'BreadcrumbList'],
} as const satisfies PageDefinition;

export const CONTACT_DE = {
  key: 'contact-de',
  path: '/kontakt/',
  lang: 'de',
  locale: 'de_DE',
  seo: pageSeo(
    'de',
    '/kontakt/',
    'Kontakt zu Hugo Martin | Ihr technisches Projekt besprechen',
    'Sprechen wir über KI-Agenten, MCP-Integration, Prozessautomatisierung oder eine individuelle Web-Anwendung. Persönlicher Kontakt zu Hugo Martin in Stuttgart.',
    PAGE_PAIRS.contact,
  ),
  header: pageHeader('de', PAGE_PAIRS.contact[1]),
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Kontakt', path: '/kontakt/' },
  ],
  hero: {
    kicker: 'Kontakt · Projektanfrage',
    h1: 'Wobei kann ich Sie technisch unterstützen?',
    lead: 'Ob KI-Agenten, MCP-Integration, Prozessautomatisierung oder eine Web-Anwendung: Beschreiben Sie die Aufgabe, Ihre vorhandenen Tools und das gewünschte Ergebnis.',
    primaryCta: contactAction('de', 'general', 'Anfrage schreiben'),
    trustLine: 'Direkter Kontakt mit Hugo Martin · Stuttgart und remote',
  },
  sections: [
    {
      id: 'ihre-anfrage',
      heading: 'Diese Informationen helfen beim Einstieg',
      intro: 'Eine kurze Beschreibung genügt. Hilfreich sind:',
      points: [
        'Die Aufgabe und das Ergebnis, das Sie erreichen möchten.',
        'Die Anwendung, das Repository oder die Tools, mit denen Sie arbeiten.',
        'Was bereits vorhanden ist und wo Sie Unterstützung brauchen.',
        'Ein gewünschter Zeitraum und wichtige Rahmenbedingungen.',
      ],
      layout: 'list',
    },
    {
      id: 'thema',
      heading: 'Worum geht es in Ihrem Projekt?',
      items: [
        {
          title: 'KI-Agenten und MCP',
          body: 'MCP- und API-Anbindungen, eigene Skills, Agenten-Orchestrierung und GitHub Copilot.',
          link: contactAction('de', 'copilot', 'Agenten-Aufgabe besprechen'),
        },
        {
          title: 'Prozessautomatisierung',
          body: 'Abläufe zwischen Formularen, E-Mail, CRM und weiteren Systemen verbinden.',
          link: contactAction('de', 'process-automation', 'Ablauf besprechen'),
        },
        {
          title: 'Web-Anwendungen mit Angular',
          body: 'Anwendungen, Komponentenbibliotheken, interne Tools und API-Anbindungen.',
          link: contactAction('de', 'angular', 'Angular-Aufgabe besprechen'),
        },
      ],
      layout: 'list',
    },
    {
      id: 'naechster-schritt',
      heading: 'So geht es nach Ihrer Anfrage weiter',
      paragraphs: [
        'Ich prüfe Ihre Beschreibung und melde mich, um offene Fragen und die technische Ausgangslage zu klären. Danach können wir einen passenden Projektumfang vereinbaren.',
        'Ich arbeite nebenberuflich. Verfügbarkeit, Kosten, Termine und die Übergabe stimmen wir vor einer Beauftragung ab.',
      ],
      links: [
        { label: 'Mehr über meinen Hintergrund', href: '/ueber-hugo-martin/' },
        {
          label: 'Mein LinkedIn-Profil',
          href: 'https://www.linkedin.com/in/hugomartin-menz/',
          external: true,
        },
      ],
      layout: 'text',
    },
  ],
  finalCta: {
    heading: 'Beschreiben Sie Ihre Aufgabe',
    body: 'Sie brauchen noch keine fertige Spezifikation. Ein konkretes Problem und etwas Kontext reichen für den ersten Austausch.',
    action: contactAction('de', 'general', 'Anfrage schreiben'),
  },
  footer: pageFooter('de'),
  schemaKinds: ['ContactPage', 'BreadcrumbList'],
} as const satisfies PageDefinition;

export const STUTTGART = {
  key: 'stuttgart',
  path: '/standorte/stuttgart/',
  lang: 'de',
  locale: 'de_DE',
  seo: pageSeo(
    'de',
    '/standorte/stuttgart/',
    'IT-Dienstleistungen in Stuttgart | Hugo Martin',
    'Hugo Martin in Stuttgart: KI-Agenten, MCP- und API-Integration, Prozessautomatisierung und individuelle Web-Anwendungen. Direkte Zusammenarbeit, auch remote.',
  ),
  header: pageHeader('de', '/en/'),
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Stuttgart', path: '/standorte/stuttgart/' },
  ],
  hero: {
    kicker: 'Stuttgart · Baden-Württemberg · remote',
    h1: 'KI-Agenten und Prozessautomatisierung aus Stuttgart',
    lead: 'Ich unterstütze kleine Unternehmen und Entwicklungsteams bei konkreten technischen Aufgaben. Sie arbeiten direkt mit mir, mit einem vereinbarten Umfang und einer nachvollziehbaren Übergabe.',
    primaryCta: contactAction('de'),
    secondaryCta: { label: 'Über mich', href: '/ueber-hugo-martin/' },
    trustLine: 'Hugo Martin · persönlich · nebenberuflich',
  },
  sections: [
    {
      id: 'unterstuetzung',
      heading: 'Technische Umsetzung für Ihr Projekt',
      items: [
        {
          title: 'KI-Agenten, MCP und Copilot',
          body: 'Agenten mit Tools verbinden und Entwicklungsabläufe mit GitHub Copilot, eigenen Skills und MCP-Anbindungen umsetzen.',
          link: { label: 'KI-Agenten und MCP', href: '/leistungen/github-copilot/' },
        },
        {
          title: 'Wiederkehrende Abläufe verbinden',
          body: 'Formulare, E-Mail, CRM und vorhandene Schnittstellen mit n8n, Make oder Power Automate verbinden.',
          link: { label: 'Prozessautomatisierung', href: '/leistungen/prozessautomatisierung/' },
        },
        {
          title: 'Web-Anwendungen und Angular-Komponenten',
          body: 'Eine Anwendung erweitern, ein internes Tool entwickeln oder ein bestehendes Designsystem in einer Angular-Komponentenbibliothek umsetzen.',
          link: { label: 'Angular-Entwicklung', href: '/leistungen/angular-entwicklung/' },
        },
      ],
      layout: 'list',
    },
    {
      id: 'zusammenarbeit',
      heading: 'In Stuttgart zu Hause, für die Zusammenarbeit flexibel',
      paragraphs: [
        'Ich bin in Stuttgart. Die technische Zusammenarbeit kann remote erfolgen, etwa über Ihr Repository, einen gemeinsamen Review und eine dokumentierte Übergabe.',
        'Auch bei einem lokalen Projekt beginnen wir mit einer konkreten Aufgabe. Wir klären vorhandene Systeme, das gewünschte Ergebnis und wer die Lösung später betreut. Termine und Verfügbarkeit stimmen wir passend zu meiner nebenberuflichen Tätigkeit ab.',
      ],
      layout: 'text',
    },
    {
      id: 'n8n',
      heading: 'Sie möchten einen Ablauf mit n8n umsetzen?',
      paragraphs: [
        'Wir können einen bestehenden Workflow prüfen oder einen klar abgegrenzten Ablauf neu aufbauen. Dazu gehören die Schnittstellen, relevante Fehlerfälle und eine verständliche Dokumentation.',
      ],
      links: [{ label: 'n8n-Beratung in Stuttgart', href: '/n8n-beratung-stuttgart/' }],
      layout: 'text',
    },
  ],
  finalCta: {
    heading: 'Was möchten Sie technisch umsetzen?',
    body: 'Beschreiben Sie die Aufgabe und Ihre vorhandenen Tools. Wir besprechen, welcher erste Schritt zu Ihrem Projekt passt.',
    action: contactAction('de'),
  },
  footer: pageFooter('de'),
  schemaKinds: ['Service', 'BreadcrumbList'],
} as const satisfies PageDefinition;
