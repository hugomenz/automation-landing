import { contactAction, pageFooter, pageHeader, pageSeo, PAGE_PAIRS, projectDiagram } from '../page.helpers';
import type { PageDefinition } from '../page.types';

export const HOME_DE = {
  key: 'home-de',
  path: '/',
  lang: 'de',
  locale: 'de_DE',
  seo: pageSeo(
    'de',
    '/',
    'KI-Agenten & Prozessautomatisierung | Hugo Martin',
    'KI-Agenten, MCP- und API-Integration, Prozessautomatisierung und individuelle Web-Anwendungen. IT-Dienstleistungen von Hugo Martin in Stuttgart und remote.',
    PAGE_PAIRS.home,
  ),
  header: pageHeader('de', '/en/'),
  breadcrumbs: [{ label: 'Startseite', path: '/' }],
  hero: {
    kicker: 'IT-Dienstleistungen · Stuttgart',
    h1: 'KI-Agenten integrieren. Prozesse automatisieren. Anwendungen entwickeln.',
    lead: 'Ich bin Hugo Martin. Ich unterstütze kleine Unternehmen und Entwicklungsteams mit KI-Agenten, vernetzten Arbeitsabläufen und individuellen Web-Anwendungen. Dazu verbinde ich vorhandene Tools und Daten über MCP und APIs.',
    primaryCta: contactAction('de'),
    secondaryCta: { label: 'Leistungen ansehen', href: '/leistungen/' },
    trustLine: 'Ein Ansprechpartner · konkrete Aufgaben · dokumentierte Übergabe',
    diagram: projectDiagram('de'),
  },
  sections: [
    {
      id: 'leistungen',
      heading: 'Technische Umsetzung für Ihre Arbeitsabläufe',
      intro: 'Wir starten bei der Aufgabe: Welche Informationen werden gebraucht, welche Systeme sind beteiligt und welcher Schritt soll einfacher werden?',
      items: [
        {
          label: '01',
          title: 'KI-Agenten und MCP-Integration',
          body: 'Agenten für konkrete Aufgaben einrichten und über MCP oder APIs mit vorhandenen Tools und Daten verbinden. Aufgaben, Zugriffe und Prüfschritte werden klar beschrieben.',
          link: { label: 'KI-Agenten und MCP ansehen', href: '/leistungen/github-copilot/' },
        },
        {
          label: '02',
          title: 'Prozessautomatisierung und API-Integration',
          body: 'Formulare, E-Mail, CRM und andere Systeme verbinden. Wiederkehrende Abläufe mit n8n, Make oder Power Automate umsetzen und unnötige manuelle Übergaben vereinfachen.',
          link: { label: 'Prozessautomatisierung ansehen', href: '/leistungen/prozessautomatisierung/' },
        },
        {
          label: '03',
          title: 'Angular & Design Systems',
          body: 'Web-Apps und interne Tools mit Angular entwickeln, bestehende Anwendungen erweitern und vorhandene Designsysteme technisch als Komponentenbibliothek umsetzen.',
          link: { label: 'Angular & Design Systems ansehen', href: '/leistungen/angular-entwicklung/' },
        },
        {
          label: '04',
          title: 'KI-gestützte Entwicklungsabläufe',
          body: 'GitHub Copilot mit Projektwissen, eigenen Skills und Agenten auf Ihr Repository abstimmen. Aufgaben koordinieren und wiederkehrende Entwicklungsarbeit automatisieren.',
          link: { label: 'Entwicklungsabläufe ansehen', href: '/leistungen/github-copilot/#entwicklung' },
        },
      ],
      layout: 'list',
    },
    {
      id: 'einstieg',
      heading: 'Ein guter Einstieg ist eine überschaubare Aufgabe',
      intro: 'Diese Beispiele zeigen mögliche Projektumfänge. Gemeinsam wählen wir den Teil, den Sie konkret brauchen.',
      items: [
        {
          title: 'Ein Agent mit Zugriff auf ein vorhandenes Tool',
          body: 'Eine konkrete Aufgabe festlegen, den passenden MCP-Server oder die API anbinden und den Ablauf an vereinbarten Beispielen prüfen.',
        },
        {
          title: 'Ein internes Tool mit Datenanbindung',
          body: 'Ein Team erfasst oder prüft Daten in einer Angular-Anwendung. Formulare, Validierung und API-Anbindung werden für den vereinbarten Arbeitsablauf umgesetzt.',
        },
        {
          title: 'Ein Ablauf zwischen zwei bestehenden Tools',
          body: 'Zum Beispiel Formulardaten übernehmen, einen Datensatz aktualisieren und die zuständige Person informieren. Fehlerfälle werden mitgedacht.',
        },
      ],
      layout: 'list',
    },
    {
      id: 'zusammenarbeit',
      heading: 'Klarer Umfang, direkte Zusammenarbeit',
      paragraphs: [
        'Sie beschreiben die Aufgabe, die beteiligten Tools und das gewünschte Ergebnis. Ich kläre mit Ihnen, was sich sinnvoll abgrenzen lässt und welche Informationen für die Umsetzung fehlen.',
        'Vor dem Start vereinbaren wir Umfang, Kosten und Zeitrahmen. Anschließend entwickeln und prüfen wir einen konkreten Baustein. Zur Übergabe gehören die vereinbarten Dateien oder Workflows und eine verständliche Dokumentation.',
        'Ich arbeite allein und biete diese Leistungen nebenberuflich an. Verfügbarkeit und weitere Betreuung stimmen wir deshalb ausdrücklich für das jeweilige Projekt ab.',
      ],
      layout: 'text',
    },
    {
      id: 'ueber-mich',
      heading: 'Hugo Martin. Technischer Hintergrund, praktische Umsetzung.',
      paragraphs: [
        'Mein Weg führte vom Maschinenbau in die Softwareentwicklung. Heute arbeite ich als UX Engineer bei EPLAN an einer gemeinsamen Angular-Komponentenbibliothek und an Werkzeugen für Entwickler.',
        'Ein Schwerpunkt sind KI-gestützte Entwicklungsabläufe mit GitHub Copilot: eigene Skills und Agenten, MCP-Anbindungen und die Koordination wiederkehrender Aufgaben. Diese technische Erfahrung prägt auch meine selbstständige Arbeit.',
      ],
      links: [
        { label: 'Mehr über mich', href: '/ueber-hugo-martin/' },
        { label: 'Zusammenarbeit in Stuttgart', href: '/standorte/stuttgart/' },
      ],
      layout: 'profile',
    },
  ],
  faq: {
    id: 'fragen',
    heading: 'Vor dem ersten Projekt',
    items: [
      {
        question: 'Muss ich schon eine vollständige Spezifikation haben?',
        answer: 'Eine kurze Beschreibung reicht für den ersten Kontakt: Was passiert heute, welche Tools sind beteiligt und was soll sich ändern? Daraus klären wir einen passenden ersten Umfang.',
      },
      {
        question: 'Kann ich Unterstützung für ein bestehendes System anfragen?',
        answer: 'Ja. Eine MCP- oder API-Anbindung, ein Agenten-Workflow, ein Feature oder eine Angular-Komponente kann ein sinnvoller Einstieg sein.',
      },
      {
        question: 'Wie werden Preis und Verfügbarkeit vereinbart?',
        answer: 'Beides hängt von Aufgabe, Zugängen und Aufwand ab. Vor einer Beauftragung erhalten Sie einen klaren Vorschlag zu Umfang, Kosten und Zeitrahmen. Meine nebenberufliche Verfügbarkeit planen wir dabei ein.',
      },
    ],
  },
  finalCta: {
    heading: 'Welche Aufgabe möchten Sie angehen?',
    body: 'Beschreiben Sie kurz den aktuellen Ablauf, die verwendeten Tools und das gewünschte Ergebnis. Dann klären wir den nächsten sinnvollen Schritt.',
    action: contactAction('de'),
    note: 'Für den ersten Kontakt genügt eine kurze Beschreibung.',
  },
  footer: pageFooter('de'),
  schemaKinds: ['Person', 'Organization', 'WebSite', 'FAQPage'],
} as const satisfies PageDefinition;
