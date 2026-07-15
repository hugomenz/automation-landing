import type { PageDefinition } from '../page.types';

export const N8N_CONSULTING_STUTTGART = {
  key: 'n8n-consulting-stuttgart',
  path: '/n8n-beratung-stuttgart/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'n8n Beratung für technische Workflows in Stuttgart | Hugo Menz',
    description:
      'n8n Workflows, APIs und Webhooks in Stuttgart nachvollziehbar planen, prüfen und umsetzen, als technischer Baustein mit menschlicher Kontrolle.',
    canonicalPath: '/n8n-beratung-stuttgart/',
    robots: 'index,follow',
    openGraph: {
      title: 'n8n Beratung für technische Workflows in Stuttgart',
      description:
        'n8n Workflows, APIs und Webhooks nachvollziehbar planen, prüfen und umsetzen, als technischer Baustein mit menschlicher Kontrolle.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-general-de.png',
      imageAlt: 'Prozessautomatisierung für technische B2B-Abläufe und Systemintegrationen',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'n8n Beratung für technische Workflows in Stuttgart',
      description:
        'n8n Workflows, APIs und Webhooks nachvollziehbar planen, prüfen und umsetzen, als technischer Baustein mit menschlicher Kontrolle.',
      imagePath: '/og-general-de.png',
      imageAlt: 'Prozessautomatisierung für technische B2B-Abläufe und Systemintegrationen',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Technologie' },
    { label: 'n8n Beratung Stuttgart', path: '/n8n-beratung-stuttgart/' },
  ],
  hero: {
    kicker: 'Technologie · n8n · APIs · Stuttgart',
    h1: 'n8n Beratung für technische Workflows in Stuttgart',
    lead:
      'Ich plane, prüfe und implementiere nachvollziehbare Workflows mit n8n, APIs und Webhooks, abgestimmt auf den Prozess, die beteiligten Systeme und die Menschen, die damit arbeiten.',
    primaryCta: {
      label: 'n8n-Prozess einordnen',
      href: '#contact-form',
      dataCta: 'contact-hero',
      contactContext: 'process-automation',
    },
    secondaryCta: {
      label: 'Weitere Prozessautomatisierungen',
      href: '/leistungen/prozessautomatisierung/',
      dataCta: 'services-hero',
    },
    trustLine: 'Technologie nach Prozess wählen · Fehlerfälle sichtbar machen · Menschen entscheiden lassen',
  },
  sections: [
    {
      id: 'rolle',
      eyebrow: 'Einordnung',
      heading: 'n8n als Baustein, nicht als Geschäftsversprechen',
      paragraphs: [
        'Ein stabiler Workflow beginnt mit einem klaren Prozess, verlässlichen Daten, Regeln, Ausnahmen und Verantwortlichkeiten. Erst danach lässt sich entscheiden, ob n8n, Make, eine direkte API oder ein internes Tool der passende technische Weg ist.',
        'Für die technische Anfragequalifizierung stehen eine prüfbare Anforderungsakte, Quellen, freigegebene Regeln und menschliche Freigabe im Vordergrund. n8n kann Systeme verbinden und Abläufe steuern, ersetzt diese fachlichen Grundlagen aber nicht.',
      ],
      links: [
        {
          label: 'Technische Anfragequalifizierung im Maschinenbau',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
        {
          label: 'Interner RFQ-Copilot',
          href: '/leistungen/interner-rfq-copilot/',
        },
      ],
      layout: 'text',
    },
    {
      id: 'leistungen',
      eyebrow: 'Technische Leistungen',
      heading: 'Wann n8n sinnvoll sein kann',
      intro:
        'n8n ist häufig passend, wenn Prozesse über mehrere Tools laufen, eigene Regeln benötigen und Datenflüsse nachvollziehbar bleiben sollen.',
      items: [
        {
          title: 'API-Integrationen und Webhooks',
          body: 'Tools verbinden, Daten kontrolliert übergeben, Webhook-Trigger einrichten und Fehlerfälle sichtbar machen.',
        },
        {
          title: 'Dokument- und E-Mail-Verarbeitung',
          body: 'Eingänge klassifizieren, Daten extrahieren und Ergebnisse zur Prüfung vorbereiten.',
        },
        {
          title: 'CRM- und Systemübergaben',
          body: 'Geprüfte Informationen an CRM, Tabellen, Datenbanken oder interne Systeme weitergeben.',
        },
        {
          title: 'Benachrichtigungen und Freigaben',
          body: 'Verantwortliche Personen über offene Punkte, Blockiergründe oder nötige Entscheidungen informieren.',
        },
      ],
      layout: 'cards',
    },
    {
      id: 'passung',
      eyebrow: 'Passung',
      heading: 'Wann etwas anderes besser ist',
      items: [
        {
          title: 'Make für einfache Standardintegrationen',
          body: 'Wenn eine einfache Standardintegration reicht und Geschwindigkeit wichtiger ist als individuelle Logik, kann Make der kürzere Weg sein.',
        },
        {
          title: 'Direkte API für kleine, stabile Verbindungen',
          body: 'Wenn zwei Systeme mit klarer Logik verbunden werden, kann eine direkte Integration wartbarer sein.',
        },
        {
          title: 'Internes Tool für Bedienung und Rechte',
          body: 'Wenn ein Prozess eine eigene Oberfläche, Rechteverwaltung oder langfristige Produktlogik braucht, ist ein kleines internes Tool oft geeigneter.',
        },
      ],
      callout:
        'Ich empfehle n8n nicht allein deshalb, weil es verfügbar ist. Der Prozess und seine Anforderungen bestimmen die technische Lösung.',
      layout: 'cards',
    },
    {
      id: 'human-review',
      eyebrow: 'Kontrolle',
      heading: 'KI-Automatisierung mit menschlicher Kontrolle',
      paragraphs: [
        'KI kann Informationen klassifizieren, Dokumente zusammenfassen, Daten extrahieren oder Entwürfe vorbereiten. Kritische Entscheidungen, technische Machbarkeit, Preise, Margen und Freigaben bleiben bei den zuständigen Menschen.',
      ],
      callout:
        'Wenn Daten, Regeln oder technische Grenzen fehlen, muss der Workflow stoppen und den Fall mit einem nachvollziehbaren Grund eskalieren.',
      layout: 'text',
    },
    {
      id: 'workflow-pruefung',
      eyebrow: 'Workflow-Prüfung',
      heading: 'Bestehende n8n Workflows verbessern',
      intro:
        'Wenn ein Workflow bereits läuft, aber fragil, unübersichtlich oder schlecht dokumentiert ist, prüfe ich ihn gezielt und mache konkrete Verbesserungsvorschläge.',
      items: [
        {
          title: 'Technische Prüfung',
          body: 'Trigger, Credentials, API-Aufrufe, Webhooks, Datenmapping, Fehlerbehandlung und Logging werden sichtbar gemacht.',
        },
        {
          title: 'Wartbarkeit',
          body: 'Ich prüfe, ob der Workflow verständlich benannt, sauber strukturiert und für spätere Anpassungen dokumentiert ist.',
        },
        {
          title: 'Nächster Schritt',
          body: 'Sie bekommen eine priorisierte Liste: was sofort repariert werden sollte, was vereinfacht werden kann und was stabil genug ist.',
        },
      ],
      layout: 'cards',
    },
    {
      id: 'ablauf',
      eyebrow: 'Ablauf',
      heading: 'Von der Prozess-Idee zum nachvollziehbaren Workflow',
      items: [
        {
          title: 'Prozess verstehen',
          body: 'Sie zeigen mir Trigger, Datenquellen, Regeln, Ausnahmen und Zielsysteme.',
        },
        {
          title: 'Technischen Weg skizzieren',
          body: 'Ich zeige, was in n8n sinnvoll ist und wo eine andere Lösung besser wäre.',
        },
        {
          title: 'Umsetzen und testen',
          body: 'Der Workflow wird mit vereinbarten Testfällen geprüft, einschließlich Fehler- und Eskalationslogik.',
        },
        {
          title: 'Dokumentieren und übergeben',
          body: 'Sie erhalten einen dokumentierten Workflow, den Ihr Team nachvollziehen und pflegen kann.',
        },
      ],
      links: [
        {
          label: 'Zusammenarbeit in Stuttgart und Baden-Württemberg',
          href: '/standorte/stuttgart/',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zur n8n Beratung in Stuttgart',
    items: [
      {
        question: 'Bieten Sie n8n Beratung vor Ort in Stuttgart an?',
        answer:
          'Ja. Ich arbeite remote und nach Vereinbarung auch im Raum Stuttgart vor Ort, vor allem für Workshops, Prozessaufnahme und Übergabe.',
      },
      {
        question: 'Können Sie bestehende n8n Workflows prüfen?',
        answer:
          'Ja. Ich prüfe bestehende Workflows auf Wartbarkeit, Fehlerfälle, Dokumentation, Datenqualität und unnötige Komplexität.',
      },
      {
        question: 'Wann ist n8n besser als Make?',
        answer:
          'n8n passt oft besser, wenn Workflows komplexer werden, eigene Logik brauchen, Daten kontrolliert verarbeitet werden sollen oder Self-Hosting wichtig ist. Make kann schneller sein, wenn eine einfache Standardintegration reicht.',
      },
      {
        question: 'Können n8n Workflows dokumentiert und übergeben werden?',
        answer:
          'Ja. Zur Umsetzung gehört eine kurze, verständliche Dokumentation mit Triggern, Datenflüssen, Regeln, Fehlerfällen und Hinweisen für die spätere Pflege.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Erst den Prozess prüfen, dann die Technologie wählen',
    body: 'Beschreiben Sie den technischen Prozess, die beteiligten Systeme, bekannte Regeln und den größten Engpass. Ich prüfe, ob n8n dafür ein sinnvoller Baustein ist.',
    action: {
      label: 'n8n-Prozess einordnen',
      href: '#contact-form',
      dataCta: 'contact-final',
      contactContext: 'process-automation',
    },
    note: 'n8n ist eine mögliche Implementierungstechnologie, nicht die automatische Entscheidung über Preise oder Machbarkeit.',
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
