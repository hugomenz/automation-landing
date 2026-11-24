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
    'Angular-Entwicklung & Komponentenbibliotheken | Hugo Martin',
    'Technische Unterstützung für Angular-Anwendungen, interne Tools und die Umsetzung bestehender Designsysteme als Komponentenbibliothek. Hugo Martin, Stuttgart.',
    PAGE_PAIRS.angular,
  ),
  header: pageHeader('de', PAGE_PAIRS.angular[1], 'angular'),
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Angular-Entwicklung', path: '/leistungen/angular-entwicklung/' },
  ],
  hero: {
    kicker: 'Angular · TypeScript · Komponentenbibliotheken',
    h1: 'Angular-Entwicklung für Anwendungen und Komponentenbibliotheken',
    lead: 'Ich entwickle Angular-Anwendungen, interne Tools und wiederverwendbare Komponenten. Bestehende Gestaltungsvorgaben und Designsysteme setze ich technisch in Angular um.',
    primaryCta: contactAction('de', 'angular'),
    secondaryCta: { label: 'Mögliche Aufgaben', href: '#aufgaben' },
    trustLine: 'Technische Umsetzung · bestehende Systeme erweitern · klarer Umfang',
  },
  sections: [
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
      heading: 'Ein bestehendes Designsystem in Angular nutzbar machen',
      paragraphs: [
        'Ihr Designsystem oder Ihre vorhandene Komponentenbibliothek liefert die Gestaltungsvorgaben. Mein Beitrag ist die technische Umsetzung: Komponentenstruktur, TypeScript-Schnittstellen, Zustände und Verhalten in Angular.',
        'Dabei geht es auch darum, wie andere Entwickler die Komponenten einsetzen. Verständliche Beispiele, dokumentierte Eigenschaften und ein konsistentes Verhalten gehören zur vereinbarten Umsetzung.',
      ],
      points: [
        'Vorhandene Vorgaben und Anwendungsfälle gemeinsam klären.',
        'Komponenten mit klaren Eingaben und Ereignissen umsetzen.',
        'Relevante Zustände und vereinbarte Prüffälle abdecken.',
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
        { label: 'Copilot für Ihre Entwicklungsabläufe', href: '/leistungen/github-copilot/' },
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
    'GitHub Copilot: Skills, Agenten & Workflows | Hugo Martin',
    'GitHub Copilot für Ihren Entwicklungsalltag: eigene Skills und Agenten, koordinierte Aufgaben und automatisierte Workflows mit klaren Prüfschritten.',
    PAGE_PAIRS.copilot,
  ),
  header: pageHeader('de', PAGE_PAIRS.copilot[1], 'copilot'),
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'GitHub Copilot', path: '/leistungen/github-copilot/' },
  ],
  hero: {
    kicker: 'GitHub Copilot · Skills · Agenten · Developer Experience',
    h1: 'GitHub Copilot auf Ihre Entwicklungsabläufe abstimmen',
    lead: 'Ich richte eigene Skills, Agenten und koordinierte Workflows für konkrete Entwicklungsaufgaben ein. Projektwissen, wiederkehrende Schritte und Prüfkriterien werden Teil eines nachvollziehbaren Ablaufs.',
    primaryCta: contactAction('de', 'copilot'),
    secondaryCta: { label: 'Leistungsumfang ansehen', href: '#umfang' },
    trustLine: 'Am Repository arbeiten · Aufgaben klar verteilen · Ergebnisse prüfen',
  },
  sections: [
    {
      id: 'umfang',
      heading: 'Copilot dort einrichten, wo Ihr Team tatsächlich arbeitet',
      items: [
        {
          title: 'Projektwissen und eigene Skills',
          body: 'Konventionen, wiederkehrende Aufgaben und benötigten Kontext in verständliche Anweisungen und wiederverwendbare Skills übersetzen.',
        },
        {
          title: 'Agenten mit klaren Aufgaben',
          body: 'Agenten für abgegrenzte Entwicklungsschritte konfigurieren. Eingaben, erwartete Ergebnisse und die anschließende Prüfung werden festgelegt.',
        },
        {
          title: 'Aufgaben zwischen Agenten koordinieren',
          body: 'Geeignete Arbeitsschritte aufteilen und ihre Übergaben beschreiben. So lässt sich nachvollziehen, welcher Agent welchen Teil bearbeitet.',
        },
        {
          title: 'Developer Experience verbessern',
          body: 'Wiederkehrende Entwicklungsaufgaben, Dokumentation und projektbezogene Werkzeuge in einen Arbeitsablauf einbinden, den das Team weiterpflegen kann.',
        },
      ],
      layout: 'list',
    },
    {
      id: 'projektbeispiel',
      heading: 'Ein möglicher Einstieg: ein Workflow für Komponentenarbeit',
      intro: 'Ein Beispiel für einen klar abgegrenzten Projektumfang:',
      items: [
        {
          label: '01',
          title: 'Eine wiederkehrende Aufgabe auswählen',
          body: 'Zum Beispiel eine Änderung an einer Angular-Komponente mit den dazugehörigen Beispielen und Tests.',
        },
        {
          label: '02',
          title: 'Kontext und Schritte vorbereiten',
          body: 'Relevante Vorgaben, Dateien, Aufgaben und erwartete Ergebnisse in Skills und Agenten einarbeiten.',
        },
        {
          label: '03',
          title: 'Am Beispiel prüfen und nachbessern',
          body: 'Den Ablauf an einer vereinbarten Aufgabe erproben, Ergebnisse gemeinsam prüfen und die Anweisungen überarbeiten.',
        },
      ],
      ordered: true,
      layout: 'ledger',
    },
    {
      id: 'uebergabe',
      heading: 'Einrichtung und Wissen bleiben nachvollziehbar',
      points: [
        'Die vereinbarten Anweisungen, Skills und Agentenkonfigurationen.',
        'Ein dokumentierter Ablauf mit Zuständigkeiten und Übergaben.',
        'Beispielaufgaben und klare Kriterien für die Prüfung.',
        'Eine Erklärung zur Nutzung und weiteren Pflege im Team.',
      ],
      paragraphs: [
        'Neue Funktionen bewerte ich im Kontext der Aufgabe. Welche davon im Projekt eingesetzt werden, hängt auch von Ihrer bestehenden Entwicklungsumgebung und den verfügbaren Funktionen ab.',
      ],
      layout: 'list',
    },
    {
      id: 'zusammenarbeit',
      heading: 'Mit einer wiederkehrenden Aufgabe beginnen',
      paragraphs: [
        'Für das erste Gespräch sind Ihre Entwicklungsumgebung, die bisherige Copilot-Nutzung und eine konkrete wiederkehrende Aufgabe hilfreich. Daraus grenzen wir einen ersten Workflow ab.',
        'Ich biete diese Unterstützung persönlich und nebenberuflich an. Umfang, Verfügbarkeit und Kosten stimmen wir vor dem Start ab.',
      ],
      links: [
        { label: 'Mehr zu meinem Hintergrund', href: '/ueber-hugo-martin/' },
        { label: 'Angular-Anwendungen und Komponentenbibliotheken', href: '/leistungen/angular-entwicklung/' },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'fragen',
    heading: 'Fragen zu Copilot, Skills und Agenten',
    items: [
      {
        question: 'Muss bereits eine Copilot-Einrichtung vorhanden sein?',
        answer: 'Wir können eine bestehende Einrichtung weiterentwickeln oder einen ersten abgegrenzten Workflow vorbereiten. Zu Beginn prüfen wir die Entwicklungsumgebung und welche Funktionen dort verfügbar sind.',
      },
      {
        question: 'Braucht jede Aufgabe mehrere Agenten?',
        answer: 'Die Zahl der Agenten richtet sich nach der Aufgabe. Wir wählen einen verständlichen Ablauf und teilen Arbeit nur dann auf, wenn die Zuständigkeiten und Übergaben klar beschrieben werden können.',
      },
      {
        question: 'Was gehört zur Prüfung der Ergebnisse?',
        answer: 'Wir vereinbaren vorab Beispielaufgaben und Prüfkriterien. Dazu können die vorhandenen Tests, die Übereinstimmung mit Projektkonventionen und ein Review durch den zuständigen Entwickler gehören.',
      },
    ],
  },
  finalCta: {
    heading: 'Welche Entwicklungsaufgabe wiederholt sich bei Ihnen?',
    body: 'Nennen Sie die Aufgabe, Ihre Entwicklungsumgebung und Ihren bisherigen Einsatz von GitHub Copilot. Daraus besprechen wir einen konkreten Einstieg.',
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
    'Administrative Abläufe verbinden und automatisieren: Formulare, E-Mail, CRM und APIs mit n8n, Make oder Power Automate. Persönliche Unterstützung von Hugo Martin.',
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
    lead: 'Ich verbinde bestehende Systeme und setze klar beschriebene administrative Workflows um. Der Einstieg ist ein konkreter Ablauf mit definierten Eingaben, Aktionen und Fehlerfällen.',
    primaryCta: contactAction('de', 'process-automation'),
    secondaryCta: { label: 'Mögliche Abläufe ansehen', href: '#ablaeufe' },
    trustLine: 'Vorhandene Tools verbinden · Ausnahmen klären · nachvollziehbar übergeben',
  },
  sections: [
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
