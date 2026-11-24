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
    'Angular, GitHub Copilot & Automatisierung | Hugo Martin',
    'Hugo Martin in Stuttgart: Angular-Anwendungen, GitHub Copilot mit Skills und Agenten sowie Prozessautomatisierung für kleine Unternehmen und Entwicklungsteams.',
    PAGE_PAIRS.home,
  ),
  header: pageHeader('de', '/en/'),
  breadcrumbs: [{ label: 'Startseite', path: '/' }],
  hero: {
    kicker: 'Technische Dienstleistungen · Stuttgart',
    h1: 'Angular entwickeln. Copilot einrichten. Abläufe automatisieren.',
    lead: 'Ich bin Hugo Martin. Ich unterstütze kleine Unternehmen und Entwicklungsteams mit Webanwendungen, internen Tools und automatisierten Arbeitsabläufen. Persönlich, nebenberuflich und mit einem klaren Projektumfang.',
    primaryCta: contactAction('de'),
    secondaryCta: { label: 'Leistungen ansehen', href: '/#leistungen' },
    trustLine: 'Ein Ansprechpartner · konkrete Aufgaben · dokumentierte Übergabe',
    diagram: projectDiagram('de'),
  },
  sections: [
    {
      id: 'leistungen',
      heading: 'Drei Bereiche, in denen ich technisch unterstütze',
      intro: 'Wir starten bei einer konkreten Aufgabe in Ihrer Anwendung, Ihrem Entwicklungsalltag oder einem wiederkehrenden Geschäftsprozess.',
      items: [
        {
          label: '01',
          title: 'Angular-Entwicklung',
          body: 'Webanwendungen und interne Tools entwickeln, bestehende Anwendungen erweitern und bestehende Designsysteme technisch als Angular-Komponentenbibliothek umsetzen.',
          link: { label: 'Angular-Entwicklung ansehen', href: '/leistungen/angular-entwicklung/' },
        },
        {
          label: '02',
          title: 'GitHub Copilot und Developer Experience',
          body: 'Eigene Skills und Agenten einrichten, Aufgaben zwischen Agenten koordinieren und wiederkehrende Entwicklungsarbeit automatisieren.',
          link: { label: 'GitHub Copilot ansehen', href: '/leistungen/github-copilot/' },
        },
        {
          label: '03',
          title: 'Prozessautomatisierung',
          body: 'Formulare, E-Mail, CRM und andere Systeme über APIs verbinden. Wiederkehrende administrative Abläufe mit n8n, Make oder Power Automate umsetzen.',
          link: { label: 'Prozessautomatisierung ansehen', href: '/leistungen/prozessautomatisierung/' },
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
          title: 'Ein internes Formular mit Datenanbindung',
          body: 'Ein Team erfasst Daten in einer Angular-Anwendung. Felder, Validierung und API-Anbindung werden an einem klaren Arbeitsablauf umgesetzt.',
        },
        {
          title: 'Ein Copilot-Workflow für das Repository',
          body: 'Projektwissen, wiederkehrende Schritte und Prüfkriterien werden in Anweisungen, Skills und Agenten für eine ausgewählte Entwicklungsaufgabe übersetzt.',
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
        'Ein Schwerpunkt ist GitHub Copilot: eigene Skills und Agenten, die Koordination ihrer Aufgaben und automatisierte Entwicklungsabläufe. Diese technische Erfahrung prägt auch meine selbstständige Arbeit.',
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
        answer: 'Ja. Ein abgegrenztes Feature, eine Angular-Komponente, ein Copilot-Workflow oder eine einzelne Integration kann ein sinnvoller Einstieg sein.',
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
