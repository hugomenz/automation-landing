import { contactAction, pageFooter, pageHeader, pageSeo, PAGE_PAIRS } from '../page.helpers';
import type { PageDefinition } from '../page.types';

export const ANGULAR_DEVELOPMENT_DE = {
  key: 'angular-development-de',
  path: '/leistungen/angular-entwicklung/',
  lang: 'de',
  locale: 'de_DE',
  seo: pageSeo(
    'de',
    '/leistungen/angular-entwicklung/',
    'Angular-Entwicklung & Design Systems | Hugo Martin',
    'Angular Frontend Engineering für Design Systems, Komponenten-APIs, Accessibility, Dokumentation und Tests. Hugo Martin, Stuttgart und remote.',
    PAGE_PAIRS.angular,
  ),
  header: pageHeader('de', PAGE_PAIRS.angular[1], 'angular'),
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Angular-Entwicklung', path: '/leistungen/angular-entwicklung/' },
  ],
  hero: {
    kicker: 'Angular · TypeScript · Komponentenbibliotheken',
    h1: 'Angular und Design Systems für Entwicklungsteams',
    lead: 'Mein Schwerpunkt sind Angular, Design Systems und wiederverwendbare UI-Komponenten. Ich entwickle Komponenten-APIs, Zustände, Dokumentation und Tests und unterstütze Teams bei der Integration in bestehende Anwendungen.',
    primaryCta: contactAction('de', 'angular'),
    secondaryCta: { label: 'Mögliche Aufgaben', href: '#aufgaben' },
    trustLine: 'Technische Umsetzung · bestehende Systeme erweitern · klarer Umfang',
  },
  sections: [
    {
      id: 'belege', heading: 'Eigenen Code und Beispiele prüfen',
      paragraphs: ['Meine berufliche Erfahrung umfasst die Entwicklung und Pflege einer gemeinsamen Angular-Komponentenbibliothek. Menz UI ist ein davon unabhängiges Open-Source-Projekt mit eigenen Komponenten, Dokumentation und Tests. Es enthält keinen internen Unternehmenscode.'],
      links: [{ label: 'Menz UI: Angular-Komponenten und Dokumentation auf GitHub', href: 'https://github.com/hugomenz/menz-design-system', external: true }],
      callout: 'Built and testable. Die KI-Beispiele verwenden einen Mocked adapter mit synthetischen Daten.', layout: 'text',
    },
    {
      id: 'aufgaben',
      heading: 'Unterstützung an einer konkreten Stelle Ihrer Anwendung',
      items: [
        {
          title: 'Anwendungen und interne Tools',
          body: 'Formulare, Datenansichten und interne Arbeitsabläufe mit Angular umsetzen. Dazu gehören Zustände, Validierung und die Anbindung vorhandener APIs.',
        },
        {
          title: 'Komponentenbibliotheken',
          body: 'Wiederverwendbare Angular-Komponenten entwickeln oder erweitern. Eingaben, Ereignisse, Zustände und Anwendungsbeispiele werden nachvollziehbar dokumentiert.',
        },
        {
          title: 'Bestehende Anwendungen weiterentwickeln',
          body: 'Ein abgegrenztes Feature ergänzen, eine Komponente überarbeiten oder technische Aufgaben im vorhandenen Repository bearbeiten.',
        },
      ],
      layout: 'list',
    },
    {
      id: 'designsysteme',
      heading: 'Design Systems als verlässliche Angular-Komponentenbibliothek',
      paragraphs: [
        'Ihr Designsystem oder Ihre vorhandene Komponentenbibliothek liefert die Gestaltungsvorgaben. Mein Beitrag ist die technische Umsetzung: Komponentenstruktur, TypeScript-Schnittstellen, Zustände und Verhalten in Angular.',
        'Dabei geht es auch darum, wie andere Entwickler die Komponenten einsetzen. Verständliche Beispiele, dokumentierte Eigenschaften und ein konsistentes Verhalten gehören zur vereinbarten Umsetzung.',
      ],
      points: [
        'Vorhandene Vorgaben und Anwendungsfälle gemeinsam klären.',
        'Komponenten mit klaren Eingaben und Ereignissen umsetzen.',
        'Tastaturbedienung, Accessibility, Fehlerfälle und vereinbarte Prüffälle abdecken.',
        'Verwendung und technische Entscheidungen dokumentieren.',
      ],
      layout: 'text',
    },
    {
      id: 'ergebnis',
      heading: 'Was wir als Ergebnis vereinbaren können',
      intro: 'Der konkrete Lieferumfang wird vor dem Start festgelegt. Ein kleines Projekt kann zum Beispiel Folgendes umfassen:',
      points: [
        'Ein umgesetztes Feature oder eine definierte Gruppe von Angular-Komponenten.',
        'Die benötigte Anbindung an vorhandene Schnittstellen.',
        'Passende Tests und eine gemeinsame Prüfung am vereinbarten Anwendungsfall.',
        'Quellcode, Beispiele und Hinweise zur weiteren Pflege.',
      ],
      layout: 'list',
    },
    {
      id: 'start',
      heading: 'Für den Start brauche ich Ihre Aufgabe und den technischen Rahmen',
      paragraphs: [
        'Hilfreich sind eine kurze Beschreibung der Anwendung, die eingesetzte Angular-Version, vorhandene Gestaltungsvorgaben und das gewünschte Verhalten. Den nötigen Zugriff auf Code und Systeme klären wir im nächsten Schritt.',
        'Ich arbeite persönlich und nebenberuflich. Wir planen deshalb eine klar begrenzte Aufgabe und stimmen Verfügbarkeit, Kosten und Übergabe gemeinsam ab.',
      ],
      links: [
        { label: 'Mein technischer Hintergrund', href: '/ueber-hugo-martin/' },
        { label: 'KI-Agenten für Ihre Entwicklungsabläufe', href: '/leistungen/github-copilot/' },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'fragen',
    heading: 'Fragen zur Angular-Unterstützung',
    items: [
      {
        question: 'Kann ich eine einzelne Komponente oder ein Feature beauftragen?',
        answer: 'Ja. Eine klar abgegrenzte Komponente, ein Formular oder eine API-Anbindung kann ein passender erster Auftrag sein. Wir definieren vorher Verhalten, Grenzen und Prüfkriterien.',
      },
      {
        question: 'Wie arbeiten Sie mit einem vorhandenen Designsystem?',
        answer: 'Ich übernehme die technische Umsetzung vorhandener Vorgaben in Angular. Dazu gehören Komponenten, TypeScript-Schnittstellen, Verhalten, Tests und Dokumentation für Entwickler.',
      },
      {
        question: 'Können Sie im bestehenden Repository arbeiten?',
        answer: 'Ja. Zuerst sehe ich mir Struktur, Konventionen und Entwicklungsabläufe an. Die Aufgabe und die Übergabe richten wir danach aus.',
      },
    ],
  },
  finalCta: {
    heading: 'Welche Angular-Aufgabe liegt bei Ihnen an?',
    body: 'Beschreiben Sie kurz die Anwendung, den gewünschten Baustein und den vorhandenen technischen Rahmen.',
    action: contactAction('de', 'angular'),
  },
  footer: pageFooter('de'),
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;

export const GITHUB_COPILOT_DE = {
  key: 'github-copilot-de',
  path: '/leistungen/github-copilot/',
  lang: 'de',
  locale: 'de_DE',
  seo: pageSeo(
    'de',
    '/leistungen/github-copilot/',
    'KI-Agenten, MCP & GitHub Copilot | Hugo Martin',
    'KI-Agenten mit Tools und Daten verbinden: MCP- und API-Integration, eigene Skills, Agenten-Orchestrierung und Entwicklungsabläufe mit GitHub Copilot.',
    PAGE_PAIRS.copilot,
  ),
  header: pageHeader('de', PAGE_PAIRS.copilot[1], 'copilot'),
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Leistungen', path: '/leistungen/' },
    { label: 'KI-Agenten & MCP', path: '/leistungen/github-copilot/' },
  ],
  hero: {
    kicker: 'KI-Agenten · MCP-Integration · GitHub Copilot',
    h1: 'KI-Agenten, MCP und GitHub Copilot für Ihre Arbeitsabläufe',
    lead: 'Ich richte Agenten für konkrete Aufgaben ein und verbinde sie mit den benötigten Tools und Daten. Dazu gehören MCP- und API-Anbindungen, eigene Skills sowie koordinierte Entwicklungsabläufe mit GitHub Copilot.',
    primaryCta: contactAction('de', 'copilot'),
    secondaryCta: { label: 'Leistungsumfang ansehen', href: '#umfang' },
    trustLine: 'Konkrete Aufgaben · passende Tool-Anbindung · prüfbare Ergebnisse',
  },
  sections: [
    {
      id: 'umfang',
      heading: 'Agenten in vorhandene Arbeitsabläufe einbinden',
      items: [
        {
          title: 'KI-Agenten für klar definierte Aufgaben',
          body: 'Aufgabe, benötigten Kontext und erwartetes Ergebnis festlegen. Anweisungen und Tools so einrichten, dass sich der Ablauf anhand konkreter Beispiele prüfen lässt.',
        },
        {
          title: 'MCP- und API-Integration',
          body: 'MCP steht für Model Context Protocol. Darüber können KI-Anwendungen Werkzeuge und Kontext aus angebundenen Systemen nutzen. Ich richte passende MCP-Verbindungen ein und binde vorhandene APIs in den vereinbarten Ablauf ein.',
        },
        {
          title: 'Skills und Agenten-Orchestrierung',
          body: 'Wiederkehrende Aufgaben als Skills beschreiben, Arbeit auf passende Agenten verteilen und die Übergaben zwischen ihren Schritten festlegen.',
        },
      ],
      layout: 'list',
    },
    {
      id: 'entwicklung',
      heading: 'KI-gestützte Entwicklungsabläufe mit GitHub Copilot',
      paragraphs: [
        'Ich stimme GitHub Copilot auf Ihr Repository ab: Projektkonventionen, Dokumentation, eigene Skills, Agenten und die passenden Werkzeuge werden Teil eines klaren Entwicklungsablaufs.',
        'Mögliche Aufgaben sind die Arbeit an Angular-Komponenten, die Vorbereitung von Tests oder die Pflege technischer Dokumentation. Wir vereinbaren, welche Schritte automatisiert werden und wo ein Entwickler das Ergebnis prüft.',
      ],
      points: [
        'Projektwissen und Anweisungen im Repository strukturieren.',
        'Eigene Skills und Agenten für wiederkehrende Aufgaben einrichten.',
        'MCP-Tools und weitere vorhandene Werkzeuge passend anbinden.',
        'Agenten-Aufgaben koordinieren und wiederkehrende Schritte automatisieren.',
      ],
      layout: 'text',
    },
    {
      id: 'projektbeispiel',
      heading: 'Ein möglicher Einstieg: ein Agent mit einer Tool-Anbindung',
      intro: 'Ein Beispiel für einen klar abgegrenzten Projektumfang:',
      items: [
        {
          label: '01',
          title: 'Eine Aufgabe und das gewünschte Ergebnis auswählen',
          body: 'Welche Informationen soll der Agent nutzen? Welche Aktion wird gebraucht, und wer prüft das Ergebnis?',
        },
        {
          label: '02',
          title: 'Kontext und Verbindung einrichten',
          body: 'Die passende MCP- oder API-Verbindung einrichten und die vereinbarten Zugriffe, Eingaben und Prüfschritte dokumentieren.',
        },
        {
          label: '03',
          title: 'Am Beispiel prüfen und nachbessern',
          body: 'Den Ablauf mit vereinbarten Eingaben erproben, Fehlerfälle durchgehen und die Konfiguration gemeinsam überarbeiten.',
        },
      ],
      ordered: true,
      layout: 'ledger',
    },
    {
      id: 'uebergabe',
      heading: 'Eine Einrichtung, die Sie weiterverwenden können',
      points: [
        'Die vereinbarten Agentenkonfigurationen, Anweisungen und Skills.',
        'Dokumentierte MCP- oder API-Verbindungen und ihre Voraussetzungen.',
        'Beispielaufgaben, Prüfkriterien und bekannte Grenzen.',
        'Eine Erklärung zur Nutzung und weiteren Pflege im Team.',
      ],
      paragraphs: [
        'Welche Funktionen zum Einsatz kommen, hängt von Ihrer Umgebung, den vorhandenen Schnittstellen und der Aufgabe ab. Ich arbeite persönlich und nebenberuflich. Umfang, Kosten und Verfügbarkeit stimmen wir vor dem Start ab.',
      ],
      links: [
        { label: 'Mein technischer Hintergrund', href: '/ueber-hugo-martin/' },
        { label: 'Alle Leistungen', href: '/leistungen/' },
      ],
      layout: 'list',
    },
  ],
  faq: {
    id: 'fragen',
    heading: 'Fragen zu Agenten, MCP und Copilot',
    items: [
      {
        question: 'Muss bereits eine Agenten- oder Copilot-Einrichtung vorhanden sein?',
        answer: 'Wir können eine vorhandene Einrichtung erweitern oder mit einer ersten konkreten Aufgabe beginnen. Zuerst klären wir Ihre Umgebung, die verfügbaren Tools und das gewünschte Ergebnis.',
      },
      {
        question: 'Wann ist eine MCP-Anbindung sinnvoll?',
        answer: 'Wenn ein Agent passende Werkzeuge oder Kontext aus einem anderen System nutzen soll. Wir prüfen, ob ein geeigneter MCP-Server vorhanden ist oder eine API-Anbindung besser zum vereinbarten Ablauf passt.',
      },
      {
        question: 'Braucht jede Aufgabe mehrere Agenten?',
        answer: 'Die Zahl der Agenten richtet sich nach der Aufgabe. Wir teilen Arbeit auf, wenn Zuständigkeiten, Übergaben und Prüfschritte klar beschrieben werden können.',
      },
    ],
  },
  finalCta: {
    heading: 'Welche Aufgabe soll Ihr Agent unterstützen?',
    body: 'Nennen Sie die Aufgabe, die vorhandenen Tools und Daten und das gewünschte Ergebnis. Daraus besprechen wir einen konkreten Einstieg.',
    action: contactAction('de', 'copilot'),
  },
  footer: pageFooter('de'),
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;

export const PROCESS_AUTOMATION_DE = {
  key: 'process-automation-de',
  path: '/leistungen/prozessautomatisierung/',
  lang: 'de',
  locale: 'de_DE',
  seo: pageSeo(
    'de',
    '/leistungen/prozessautomatisierung/',
    'Prozessautomatisierung mit n8n, Make & APIs | Hugo Martin',
    'Geschäftsabläufe automatisieren und Systeme über APIs verbinden. Workflows mit n8n, Make oder Power Automate. Persönliche Unterstützung von Hugo Martin.',
    PAGE_PAIRS.automation,
  ),
  header: pageHeader('de', PAGE_PAIRS.automation[1], 'process-automation'),
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Prozessautomatisierung', path: '/leistungen/prozessautomatisierung/' },
  ],
  hero: {
    kicker: 'n8n · Make · Power Automate · APIs',
    h1: 'Wiederkehrende Abläufe zwischen Ihren Tools automatisieren',
    lead: 'Ich verbinde bestehende Systeme über APIs und setze klar beschriebene Geschäftsabläufe um. Der Einstieg ist ein konkreter Ablauf mit definierten Eingaben, Aktionen und Fehlerfällen.',
    primaryCta: contactAction('de', 'process-automation'),
    secondaryCta: { label: 'Mögliche Abläufe ansehen', href: '#ablaeufe' },
    trustLine: 'Vorhandene Tools verbinden · Ausnahmen klären · nachvollziehbar übergeben',
  },
  sections: [
    {
      id: 'labor',
      heading: 'Automatisierungsbeispiele selbst prüfen',
      paragraphs: ['Im öffentlichen Labor können Sie synthetische Abläufe und dokumentierte Fehlerfälle untersuchen. Die Beispiele sind eigene technische Nachweise und keine Kundenprojekte.'],
      links: [{ label: 'Automation Lab: Demos und technische Nachweise', href: 'https://hugomenz.github.io/automation-portfolio/', external: true }],
      callout: 'Built and testable. Der jeweilige Integrationsstatus steht direkt beim Beispiel.',
      layout: 'text',
    },
    {
      id: 'ablaeufe',
      heading: 'Mögliche Aufgaben für eine erste Automatisierung',
      intro: 'Diese Beispiele beschreiben mögliche Projektumfänge. Welche Schritte sinnvoll sind, prüfen wir an Ihrem tatsächlichen Ablauf.',
      items: [
        {
          title: 'Formular und CRM verbinden',
          body: 'Neue Eingaben prüfen, einem Datensatz zuordnen und die zuständige Person informieren. Fehlende Angaben und doppelte Einträge werden berücksichtigt.',
        },
        {
          title: 'Informationen zwischen Tools übertragen',
          body: 'Daten über APIs oder Webhooks übernehmen, in das benötigte Format bringen und nach vereinbarten Regeln weitergeben.',
        },
        {
          title: 'Interne Benachrichtigungen und Dokumente',
          body: 'Statusmeldungen, Erinnerungen oder Dokumente aus vorhandenen Daten vorbereiten. Notwendige Prüfungen lassen sich als eigener Schritt einplanen.',
        },
      ],
      layout: 'list',
    },
    {
      id: 'werkzeuge',
      heading: 'Das Werkzeug folgt dem Ablauf und Ihrer Umgebung',
      paragraphs: [
        'Je nach Aufgabe arbeite ich mit n8n, Make oder Power Automate. APIs und Webhooks verbinden die beteiligten Systeme. Wir betrachten auch, wer den Workflow später betreibt und pflegt.',
        'Vor der Umsetzung klären wir die verfügbaren Schnittstellen, die benötigten Daten und den Umgang mit Fehlern. Bestehende Systeme bleiben der Ausgangspunkt für die Lösung.',
      ],
      links: [{ label: 'n8n-Beratung in Stuttgart', href: '/n8n-beratung-stuttgart/' }],
      layout: 'text',
    },
    {
      id: 'ablauf',
      heading: 'Vom manuellen Schritt zum dokumentierten Workflow',
      items: [
        {
          label: '01',
          title: 'Den heutigen Ablauf aufnehmen',
          body: 'Auslöser, Daten, beteiligte Tools, Verantwortliche und Ausnahmen gemeinsam beschreiben.',
        },
        {
          label: '02',
          title: 'Einen begrenzten Workflow umsetzen',
          body: 'Die vereinbarten Schritte verbinden und anhand ausgewählter Beispiele prüfen.',
        },
        {
          label: '03',
          title: 'Betrieb und Übergabe klären',
          body: 'Dokumentation, Fehlermeldungen, Zugänge und Verantwortlichkeiten für den weiteren Betrieb festhalten.',
        },
      ],
      ordered: true,
      layout: 'ledger',
    },
    {
      id: 'lieferumfang',
      heading: 'Ein Ergebnis, mit dem Sie weiterarbeiten können',
      points: [
        'Ein Workflow mit dem vereinbarten Auslöser und den benötigten Aktionen.',
        'Eine Prüfung an normalen Fällen und relevanten Ausnahmen.',
        'Dokumentierte Verbindungen, Regeln und Hinweise zur Pflege.',
        'Eine gemeinsame Übergabe mit geklärten nächsten Schritten.',
      ],
      paragraphs: [
        'Ich arbeite allein und nebenberuflich. Umfang, Kosten, Verfügbarkeit und gegebenenfalls weitere Betreuung vereinbaren wir für das konkrete Projekt.',
      ],
      layout: 'list',
    },
  ],
  faq: {
    id: 'fragen',
    heading: 'Fragen zur Prozessautomatisierung',
    items: [
      {
        question: 'Kann ein einzelner manueller Schritt der Einstieg sein?',
        answer: 'Ja. Ein klar beschriebener Schritt zwischen zwei Tools kann ein guter Anfang sein. Wir prüfen, welche Daten und Schnittstellen vorhanden sind und was bei Ausnahmen passieren soll.',
      },
      {
        question: 'Muss ich n8n, Make oder Power Automate bereits nutzen?',
        answer: 'Eine vorhandene Lösung kann der Ausgangspunkt sein. Wenn noch kein Werkzeug gewählt ist, klären wir zuerst Anforderungen, bestehende Systeme und die spätere Betreuung.',
      },
      {
        question: 'Wer betreut den Workflow nach der Übergabe?',
        answer: 'Das legen wir vor Projektbeginn fest. Ich dokumentiere die vereinbarte Lösung. Weitere Anpassungen oder Unterstützung können wir mit einem eigenen Umfang und passender Verfügbarkeit vereinbaren.',
      },
    ],
  },
  finalCta: {
    heading: 'Welchen manuellen Ablauf möchten Sie vereinfachen?',
    body: 'Beschreiben Sie den Auslöser, die beteiligten Tools und das gewünschte Ergebnis. Ein konkretes Beispiel hilft bei der ersten Einschätzung.',
    action: contactAction('de', 'process-automation'),
  },
  footer: pageFooter('de'),
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
