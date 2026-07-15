import type { PageDefinition } from '../page.types';

export const PROCESS_AUTOMATION = {
  key: 'process-automation',
  path: '/leistungen/prozessautomatisierung/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Prozessautomatisierung und Systemintegration | Hugo Menz',
    description:
      'Klar abgegrenzte technische und betriebliche B2B-Abläufe strukturieren, automatisieren und über APIs, Webhooks, n8n oder Make verbinden.',
    canonicalPath: '/leistungen/prozessautomatisierung/',
    robots: 'index,follow',
    openGraph: {
      title: 'Prozessautomatisierung und Systemintegration',
      description:
        'Dokumentenflüsse, Prüfungen, Freigaben und Systemübergaben nachvollziehbar automatisieren.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-general-de.png',
      imageAlt:
        'Prozessautomatisierung für technische B2B-Abläufe mit Dokumentenflüssen, Freigaben und Systemintegrationen',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Prozessautomatisierung und Systemintegration',
      description:
        'Dokumentenflüsse, Prüfungen, Freigaben und Systemübergaben nachvollziehbar automatisieren.',
      imagePath: '/og-general-de.png',
      imageAlt:
        'Prozessautomatisierung für technische B2B-Abläufe mit Dokumentenflüssen, Freigaben und Systemintegrationen',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Leistungen' },
    {
      label: 'Prozessautomatisierung',
      path: '/leistungen/prozessautomatisierung/',
    },
  ],
  hero: {
    kicker: 'Weitere Automatisierungen · B2B-Prozesse · Systemintegration',
    h1: 'Prozessautomatisierung und Systemintegration für technische und betriebliche B2B-Abläufe',
    lead:
      'Ich unterstütze bei klar abgegrenzten Abläufen, in denen Dokumente, Daten und Systeme heute manuell zusammengeführt werden – mit nachvollziehbaren Regeln, sichtbaren Ausnahmen und menschlicher Freigabe.',
    primaryCta: {
      label: 'Anderen Prozess beschreiben',
      href: '#contact-form',
      dataCta: 'process-contact-hero',
      contactContext: 'process-automation',
    },
    secondaryCta: {
      label: 'Technischen Angebotsprozess ansehen',
      href: '/loesungen/technische-anfragequalifizierung/',
      dataCta: 'rfq-solution-hero',
    },
    trustLine: 'klar abgegrenzt · nachvollziehbare Regeln · menschliche Kontrolle',
    diagram: {
      fileLabel: 'prozessautomatisierung.flow',
      nodes: [
        { stage: 'Eingang', label: 'Dokument · Formular · E-Mail' },
        { stage: 'Strukturieren', label: 'Daten und Kontext' },
        { stage: 'Prüfen', label: 'Regeln und Ausnahmen' },
        { stage: 'Freigeben', label: 'zuständige Person' },
        { stage: 'Übergeben', label: 'CRM · Fachsystem · Team' },
      ],
      footer: 'keine versteckten Entscheidungen · kontrollierte Übergaben',
    },
  },
  sections: [
    {
      id: 'ausgangslage',
      eyebrow: 'Ausgangslage',
      heading: 'Wenn wiederkehrende Arbeit zwischen Dokumenten und Systemen hängen bleibt',
      intro:
        'Nicht jeder Prozess braucht ein großes Digitalisierungsprojekt. Häufig reicht ein klar begrenzter Ablauf, in dem Eingänge strukturiert, Regeln angewendet und Ergebnisse kontrolliert weitergegeben werden.',
      points: [
        'Informationen werden wiederholt aus E-Mails oder Dokumenten übertragen.',
        'Prüfungen, Benachrichtigungen oder Freigaben erfolgen manuell.',
        'Formulare, CRM und Fachsysteme sind nicht sinnvoll verbunden.',
        'Status, Ausnahmen und Verantwortlichkeiten bleiben unklar.',
        'Fehler fallen erst bei der nächsten Übergabe auf.',
      ],
      layout: 'list',
    },
    {
      id: 'leistungsumfang',
      eyebrow: 'Leistungsumfang',
      heading: 'Was sich klar abgrenzen lässt',
      items: [
        {
          title: 'Arbeitsabläufe analysieren',
          body: 'Wiederkehrende Schritte, beteiligte Rollen, Datenquellen, Entscheidungen und Ausnahmen gemeinsam einordnen.',
        },
        {
          title: 'Dokumente und Daten strukturieren',
          body: 'Relevante Informationen aus Eingängen erfassen, vereinheitlichen und für die weitere Bearbeitung vorbereiten.',
        },
        {
          title: 'Prüfungen und Freigaben automatisieren',
          body: 'Klare Regeln für Validierungen, Benachrichtigungen und Freigaben umsetzen, ohne Ausnahmen zu verstecken.',
        },
        {
          title: 'API- und Webhook-Integrationen',
          body: 'Formulare, E-Mail, CRM und Fachsysteme über vorhandene APIs oder Webhooks kontrolliert verbinden.',
        },
        {
          title: 'Human-in-the-loop-Workflows',
          body: 'Entscheidungspunkte so gestalten, dass zuständige Personen prüfen, korrigieren oder stoppen können.',
        },
        {
          title: 'Übergaben dokumentieren',
          body: 'Status, Quellen, Fehlerfälle und nächste Schritte für Betrieb und Wartung nachvollziehbar festhalten.',
        },
      ],
      layout: 'cards',
    },
    {
      id: 'kontrolle',
      eyebrow: 'Verantwortung',
      heading: 'Automatisieren, ohne Entscheidungen zu verstecken',
      paragraphs: [
        'Ein Ablauf wird nur dort automatisiert, wo Eingaben, Regeln und gewünschte Ergebnisse ausreichend klar sind. Unvollständige oder ungewöhnliche Fälle müssen sichtbar bleiben und an eine zuständige Person zurückgegeben werden.',
      ],
      points: [
        'Quellen und Bearbeitungsstatus bleiben nachvollziehbar.',
        'Ausnahmen werden markiert statt automatisch übergangen.',
        'Freigaben bleiben bei den verantwortlichen Personen.',
        'Fehlerfälle und Wiederanlauf werden vor dem Einsatz beschrieben.',
      ],
      layout: 'list',
    },
    {
      id: 'vorgehen',
      eyebrow: 'Vorgehen',
      heading: 'Vom heutigen Ablauf zur kontrollierten Umsetzung',
      items: [
        {
          label: 'Schritt 1',
          title: 'Ablauf verstehen',
          body: 'Eingänge, Rollen, Systeme, Regeln, Ausnahmen und den größten Engpass erfassen.',
        },
        {
          label: 'Schritt 2',
          title: 'Umfang abgrenzen',
          body: 'Festlegen, was automatisiert werden kann, welche Entscheidungen beim Menschen bleiben und woran Erfolg geprüft wird.',
        },
        {
          label: 'Schritt 3',
          title: 'Umsetzen und testen',
          body: 'Integrationen und Ablauflogik mit realistischen Fällen, Fehlern und Freigaben prüfen.',
        },
        {
          label: 'Schritt 4',
          title: 'Dokumentieren und übergeben',
          body: 'Betrieb, Verantwortlichkeiten, Fehlerbehandlung und mögliche Erweiterungen nachvollziehbar festhalten.',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'technologien',
      eyebrow: 'Technologie',
      heading: 'Werkzeuge folgen dem Prozess',
      paragraphs: [
        'Je nach vorhandenen Systemen können APIs, Webhooks, n8n oder Make geeignete Bausteine sein. Entscheidend ist nicht das Werkzeug, sondern ob der Ablauf kontrollierbar, wartbar und für die zuständigen Personen nachvollziehbar bleibt.',
      ],
      links: [
        {
          label: 'n8n Beratung als technischer Baustein',
          href: '/n8n-beratung-stuttgart/',
        },
      ],
      layout: 'text',
    },
    {
      id: 'schwerpunkt',
      eyebrow: 'Einordnung',
      heading: 'Technische Angebotsprozesse im Maschinenbau bleiben mein Schwerpunkt',
      paragraphs: [
        'Meine tiefste Prozesserfahrung liegt im Sondermaschinenbau und in der Industrieautomation. Weitere Automatisierungen übernehme ich, wenn der Ablauf fachlich klar begrenzt ist und sich mit vorhandenen Daten, Regeln und Systemen nachvollziehbar umsetzen lässt.',
      ],
      links: [
        {
          label: 'Technische Anfragequalifizierung im Maschinenbau',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zu weiteren Prozessautomatisierungen',
    items: [
      {
        question: 'Welche Prozesse eignen sich?',
        answer:
          'Geeignet sind klar begrenzte Abläufe mit wiederkehrenden Eingängen, nachvollziehbaren Regeln und definierten Übergaben. Ausnahmen und fachliche Entscheidungen müssen sichtbar beschrieben werden können.',
      },
      {
        question: 'Muss ein bestehendes System ersetzt werden?',
        answer:
          'Nicht unbedingt. Häufig geht es darum, vorhandene Formulare, E-Mail, CRM oder Fachsysteme kontrolliert miteinander zu verbinden.',
      },
      {
        question: 'Sind n8n oder Make immer erforderlich?',
        answer:
          'Nein. Sie sind mögliche technische Bausteine. Die Auswahl folgt dem Prozess, den vorhandenen Systemen und den Anforderungen an Betrieb und Wartung.',
      },
      {
        question: 'Bleiben Freigaben bei Menschen?',
        answer:
          'Ja, wenn der Prozess eine fachliche oder betriebliche Entscheidung erfordert. Die Automatisierung bereitet vor, prüft bekannte Regeln und übergibt Ausnahmen sichtbar.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Einen klar abgegrenzten Prozess einordnen',
    body:
      'Beschreiben Sie den heutigen Ablauf, beteiligte Systeme, wiederkehrende Arbeit und den größten Engpass. Ich prüfe zunächst, ob sich eine sinnvolle Automatisierung klar abgrenzen lässt.',
    action: {
      label: 'Anderen Prozess beschreiben',
      href: '#contact-form',
      dataCta: 'process-contact-final',
      contactContext: 'process-automation',
    },
    note: 'Die erste Einordnung ist keine vollständige kostenlose Prozessanalyse.',
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
