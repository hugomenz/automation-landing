import { contactAction, pageFooter, pageHeader, pageSeo } from '../page.helpers';
import type { PageDefinition } from '../page.types';

export const N8N_CONSULTING_STUTTGART = {
  key: 'n8n-consulting-stuttgart',
  path: '/n8n-beratung-stuttgart/',
  lang: 'de',
  locale: 'de_DE',
  seo: pageSeo(
    'de',
    '/n8n-beratung-stuttgart/',
    'n8n-Beratung Stuttgart | Workflows & APIs | Hugo Martin',
    'Persönliche Unterstützung mit n8n in Stuttgart: Workflows aufbauen, APIs verbinden und bestehende Abläufe prüfen. Mit Dokumentation und klarer Übergabe.',
  ),
  header: pageHeader('de', '/en/', 'process-automation'),
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'n8n-Beratung Stuttgart', path: '/n8n-beratung-stuttgart/' },
  ],
  hero: {
    kicker: 'n8n · Schnittstellen · Stuttgart',
    h1: 'n8n-Beratung für einen konkreten Arbeitsablauf',
    lead: 'Ich helfe Ihnen, wiederkehrende Aufgaben mit n8n zu verbinden: Daten aus Formularen übernehmen, Systeme über APIs anbinden oder einen bestehenden Workflow weiterentwickeln.',
    primaryCta: contactAction('de', 'process-automation'),
    secondaryCta: { label: 'Mögliche Aufgaben ansehen', href: '#aufgaben' },
    trustLine: 'Persönlich aus Stuttgart · nebenberuflich · Zusammenarbeit auch remote',
  },
  sections: [
    {
      id: 'aufgaben',
      heading: 'Mit einem überschaubaren Ablauf beginnen',
      intro: 'Mögliche Aufgaben für ein erstes Projekt:',
      items: [
        {
          title: 'Formulare und CRM verbinden',
          body: 'Eingaben prüfen, Daten zuordnen und im vereinbarten Zielsystem anlegen oder aktualisieren. Rückmeldungen und relevante Fehlerfälle gehören zum Ablauf.',
        },
        {
          title: 'Daten über APIs austauschen',
          body: 'Informationen aus einem bestehenden System abrufen, umwandeln und an ein anderes System übergeben. Wir klären die vorhandenen Schnittstellen und Zugänge.',
        },
        {
          title: 'Einen bestehenden Workflow prüfen',
          body: 'Den aktuellen Ablauf nachvollziehen, einen konkreten Fehler untersuchen oder einen zusätzlichen Schritt einbauen und dokumentieren.',
        },
      ],
      layout: 'list',
    },
    {
      id: 'vorgehen',
      heading: 'Vom aktuellen Ablauf zur überprüfbaren Umsetzung',
      items: [
        {
          label: '01',
          title: 'Aufgabe und Systeme verstehen',
          body: 'Wir gehen den aktuellen Ablauf durch und bestimmen Auslöser, Eingaben und gewünschtes Ergebnis. Auch Ausnahmen und die spätere Betreuung werden besprochen.',
        },
        {
          label: '02',
          title: 'Workflow umsetzen und gemeinsam prüfen',
          body: 'Ich baue oder erweitere den vereinbarten Workflow. An passenden Beispielen prüfen wir die Datenübertragung und die zuvor festgelegten Fehlerfälle.',
        },
        {
          label: '03',
          title: 'Dokumentieren und übergeben',
          body: 'Sie erhalten den Workflow und eine Erklärung seiner Schritte, Voraussetzungen und Grenzen. Wir halten fest, wie er betrieben und bei Bedarf angepasst wird.',
        },
      ],
      ordered: true,
      layout: 'ledger',
    },
    {
      id: 'werkzeugwahl',
      heading: 'Das Werkzeug muss zu Ihrem Arbeitsablauf passen',
      paragraphs: [
        'Wenn Sie bereits n8n verwenden, prüfen wir den vorhandenen Aufbau und die konkrete Aufgabe. Wenn Sie noch kein Werkzeug gewählt haben, berücksichtigen wir Ihre Systeme, Zugänge und die spätere Betreuung.',
        'Je nach Ausgangslage kommen auch Make, Power Automate oder eine direkte API-Anbindung infrage. Die Entscheidung treffen wir anhand Ihres Ablaufs und des vereinbarten Projektumfangs.',
      ],
      links: [{ label: 'Mehr zur Prozessautomatisierung', href: '/leistungen/prozessautomatisierung/' }],
      layout: 'text',
    },
    {
      id: 'zusammenarbeit',
      heading: 'Direkte Zusammenarbeit mit Hugo Martin',
      paragraphs: [
        'Ich bin in Stuttgart und biete technische Dienstleistungen nebenberuflich an. Unsere Zusammenarbeit kann remote erfolgen, mit abgestimmten Terminen und einem gemeinsamen Review.',
        'Vor dem Start vereinbaren wir Umfang, Kosten, Verfügbarkeit und Übergabe. Wenn Sie nach dem Projekt weitere Unterstützung brauchen, besprechen wir diese gesondert.',
      ],
      links: [
        { label: 'Über meinen technischen Hintergrund', href: '/ueber-hugo-martin/' },
        { label: 'Weitere Leistungen in Stuttgart', href: '/standorte/stuttgart/' },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'fragen',
    heading: 'Fragen zur n8n-Unterstützung',
    items: [
      {
        question: 'Können Sie einen vorhandenen n8n-Workflow übernehmen?',
        answer: 'Ich kann einen bestehenden Ablauf prüfen und eine klar beschriebene Erweiterung oder Fehlerbehebung übernehmen. Zuerst klären wir den Aufbau, die verbundenen Systeme und den gewünschten Umfang.',
      },
      {
        question: 'Können auch eigene APIs angebunden werden?',
        answer: 'Wir prüfen gemeinsam die vorhandene Schnittstelle, ihre Dokumentation und die benötigten Daten. Daraus ergibt sich, wie die Verbindung umgesetzt und geprüft werden kann.',
      },
      {
        question: 'Wer betreut den Workflow nach der Übergabe?',
        answer: 'Das vereinbaren wir vor dem Start. Die Übergabe enthält die besprochene Dokumentation. Weiterentwicklung und laufende Betreuung sind separate Aufgaben, die wir bei Bedarf abstimmen.',
      },
    ],
  },
  finalCta: {
    heading: 'Welchen Ablauf möchten Sie mit n8n verbinden?',
    body: 'Nennen Sie die beteiligten Tools, den heutigen Ablauf und das gewünschte Ergebnis. Wir prüfen gemeinsam einen sinnvollen ersten Schritt.',
    action: contactAction('de', 'process-automation'),
  },
  footer: pageFooter('de'),
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
