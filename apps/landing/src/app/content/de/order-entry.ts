import type { PageDefinition } from '../page.types';

export const ORDER_ENTRY_AUTOMATION_DE = {
  key: 'order-entry-automation-de',
  path: '/leistungen/auftragserfassung-automatisierung/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Auftragserfassung automatisieren: Fallstudie | Hugo Menz',
    description:
      'Marktgestützte Fallstudie: Bestelldokumente extrahieren, deterministisch prüfen, Ausnahmen menschlich klären und als ERP-Entwurf vorbereiten.',
    canonicalPath: '/leistungen/auftragserfassung-automatisierung/',
    robots: 'index,follow',
    openGraph: {
      title: 'Auftragserfassung als kontrollierter Dokumentenprozess',
      description:
        'Unstrukturierte Bestellungen werden extrahiert, geprüft und mit sichtbaren Ausnahmen als ERP-Entwurf vorbereitet.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-general-de.png',
      imageAlt:
        'Kontrollierter Ablauf von einer Bestellung über Validierung und menschliche Prüfung zum ERP-Entwurf',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Auftragserfassung als kontrollierter Dokumentenprozess',
      description:
        'Marktgestützte Fallstudie mit deterministischen Prüfungen, menschlicher Ausnahmebehandlung und ERP-bereitem Export.',
      imagePath: '/og-general-de.png',
      imageAlt:
        'Kontrollierter Ablauf von einer Bestellung über Validierung und menschliche Prüfung zum ERP-Entwurf',
    },
    alternates: [
      { hreflang: 'de-DE', path: '/leistungen/auftragserfassung-automatisierung/' },
      { hreflang: 'en', path: '/en/order-entry-automation/' },
      { hreflang: 'x-default', path: '/leistungen/auftragserfassung-automatisierung/' },
    ],
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    {
      label: 'Auftragserfassung: Fallstudie',
      path: '/leistungen/auftragserfassung-automatisierung/',
    },
  ],
  hero: {
    kicker: 'Unabhängige Produktforschung · lokale Demo · Fallstudie',
    h1: 'Auftragserfassung als kontrollierten Dokumentenprozess vorbereiten',
    lead:
      'Eine zweite Anwendung derselben Methode wie bei RFQs: unstrukturierte Bestellungen werden extrahiert, gegen Pflichtfelder und fiktive Stammdaten geprüft, bei Ausnahmen an Menschen übergeben und als ERP-Entwurf vorbereitet.',
    primaryCta: {
      label: 'Technischen Ablauf ansehen',
      href: '#ablauf',
      dataCta: 'order-entry-flow-hero',
    },
    secondaryCta: {
      label: 'RFQ-Schwerpunkt ansehen',
      href: '/loesungen/technische-anfragequalifizierung/',
      dataCta: 'rfq-solution-order-entry-hero',
    },
    trustLine: 'synthetische Daten · deterministische Regeln · kein ERP-Schreibzugriff',
    diagram: {
      fileLabel: 'auftragserfassung.flow',
      nodes: [
        { stage: 'Eingang', label: 'E-Mail · CSV · Dokument' },
        { stage: 'Extrahieren', label: 'Kopf und Positionen' },
        { stage: 'Validieren', label: 'Pflichtfelder · Stammdaten' },
        { stage: 'Klären', label: 'menschliche Ausnahme' },
        { stage: 'Vorbereiten', label: 'ERP-Entwurf · JSON/CSV' },
      ],
      footer: 'lokale Demo · fiktive Stammdaten · keine externe Übertragung',
    },
  },
  sections: [
    {
      id: 'einordnung',
      eyebrow: 'Strategische Einordnung',
      heading: 'RFQ Automation bleibt der Schwerpunkt',
      paragraphs: [
        'Technische Anfragequalifizierung für Maschinenbauer bleibt mein Kernangebot. Auftragserfassung ist keine neue Firma und keine allgemeine Datenerfassungsleistung, sondern eine untersuchte zweite Anwendung desselben kontrollierten Dokumenten-Workflows.',
        'Bei RFQs entsteht eine prüfbare Grundlage für Vertrieb und Engineering. Bei Bestellungen entsteht ein prüfbarer Entwurf für das Zielsystem. In beiden Fällen bleiben Quellen, Regeln, Ausnahmen und menschliche Verantwortung sichtbar.',
      ],
      layout: 'text',
    },
    {
      id: 'forschung',
      eyebrow: 'Marktforschung',
      heading: 'Warum Auftragserfassung als zweiter Anwendungsfall untersucht wurde',
      intro:
        'Die Analyse nutzte öffentlich abrufbare Stellenanzeigen der Bundesagentur für Arbeit. Sie beschreibt Nachfrage nach Arbeitsschritten, nicht Softwarebudget, Kundenprojekte oder bewiesene Einsparungen.',
      points: [
        '1.576 Stellenanzeigen wurden mit Detailtext erfasst.',
        '1.382 aktuelle und prozessrelevante Anzeigen gingen in die Auswertung ein.',
        '448 Anzeigen bei 328 Unternehmen enthielten den dominanten Prozess Bestellung bis ERP-Vorbereitung oder -Erfassung.',
        '381 dieser Anzeigen nannten Kontrollen oder Ausnahmen; 334 nannten mindestens ein System.',
        'Die Erhebung hat den Stand 2. August 2026 und bleibt eine breite Stichprobe, keine Vollerhebung des deutschen Marktes.',
      ],
      callout:
        'Diese Zahlen belegen ein häufig beschriebenes Arbeitsmuster. Sie belegen weder eine ERP-Integration noch zahlende Kunden, Produktionsreife oder erzielte Einsparungen.',
      layout: 'list',
    },
    {
      id: 'ablauf',
      eyebrow: 'Kontrollierter Ablauf',
      heading: 'Vom Bestelldokument zum prüfbaren ERP-Entwurf',
      intro:
        'Der Prototyp trennt die Schritte so, dass jede Regel und jede Ausnahme einzeln nachvollziehbar bleibt.',
      items: [
        {
          title: 'Fiktiven Auftrag empfangen',
          body: 'Ein synthetischer Auftrag kommt als strukturierter Payload, CSV, Text oder E-Mail-Beispiel in die lokale Demo.',
        },
        {
          title: 'Felder normalisieren',
          body: 'Kundennummer, Bestellnummer, Termine, Lieferland und Positionen werden in ein gemeinsames Schema überführt.',
        },
        {
          title: 'Pflichtfelder prüfen',
          body: 'Fehlende Bestellköpfe, Positionen, Mengen oder Termine erzeugen einen klaren Blockiergrund.',
        },
        {
          title: 'Fiktive Stammdaten abgleichen',
          body: 'Kunden und Artikel werden gegen lokale Beispielstämme geprüft; Preise und länderspezifische Regeln bleiben deterministisch.',
        },
        {
          title: 'Ausnahmen menschlich klären',
          body: 'Unbekannte Stammdaten, Preisabweichungen und Sonderwünsche landen mit Regel-ID und Quelle in der Prüfliste.',
        },
        {
          title: 'ERP-Entwurf und Audit vorbereiten',
          body: 'Nur freigegebene Fälle erhalten einen JSON- oder CSV-Entwurf. Die Demo protokolliert die Entscheidung, schreibt aber in kein ERP.',
        },
      ],
      ordered: true,
      layout: 'ledger',
    },
    {
      id: 'eingaben',
      eyebrow: 'Eingaben und Extraktion',
      heading: 'Was die lokale Demo tatsächlich lesen kann',
      points: [
        'Fiktive Presets zeigen mehrere Auftrags- und Ausnahmearten ohne reale Unternehmensdaten.',
        'CSV-, TXT- und EML-Dateien werden im Browser lokal gelesen und in das Demo-Schema übertragen.',
        'PDF- und XLSX-Dateien werden nicht binär geparst. Dafür zeigt die Demo ausdrücklich nur einen vorbereiteten Adapter-Payload.',
        'Es gibt kein produktives OCR, keine Postfachanbindung und keinen externen Modellaufruf.',
      ],
      callout:
        'Extraktion ist in der Fallstudie ein austauschbarer Baustein. Die belastbare Prozesskontrolle beginnt mit einem expliziten Schema und deterministischen Prüfungen.',
      layout: 'list',
    },
    {
      id: 'kontrolle',
      eyebrow: 'Validierung und Ausnahmen',
      heading: 'Regeln entscheiden über Routing, Menschen über Abweichungen',
      columns: [
        {
          heading: 'Deterministische Prüfungen',
          points: [
            'Pflichtfelder und mindestens eine Position vorhanden',
            'Kunde im fiktiven Stammdatenauszug gefunden',
            'Artikel im fiktiven Artikelstamm gefunden',
            'Menge positiv und Bestellpreis gegen Demo-Stamm geprüft',
            'zusätzliche Regeln für Exportdaten, Rechnungsadresse oder Versandroute',
          ],
        },
        {
          heading: 'Menschliche Ausnahmebehandlung',
          points: [
            'fehlende oder widersprüchliche Angaben ergänzen',
            'Preisabweichungen fachlich bewerten',
            'Sonderwünsche und unbekannte Konfigurationen klären',
            'Stammdatenänderungen außerhalb des Workflows entscheiden',
            'Freigabe oder Abbruch nachvollziehbar protokollieren',
          ],
        },
      ],
      layout: 'comparison',
    },
    {
      id: 'stand',
      eyebrow: 'Implementierungsstand',
      heading: 'Prototyp und Fallstudie, keine produktive Integration',
      columns: [
        {
          heading: 'Implementiert',
          points: [
            'lokale Web-Demo mit synthetischen Auftragsszenarien',
            'Normalisierung in ein gemeinsames Auftragsschema',
            'Pflichtfeld-, Kunden-, Artikel- und Preisprüfungen',
            'sichtbare Ausnahmeliste und menschliche Markierung',
            'ERP-bereiter JSON-/CSV-Entwurf und Audit-Log',
            'lokal ausführbarer n8n-Workflow ohne Zugangsdaten',
          ],
        },
        {
          heading: 'Nicht implementiert',
          points: [
            'keine Verbindung zu SAP, Sage, Microsoft Dynamics oder einem anderen ERP',
            'kein Schreiben in ERP, CRM, Postfach oder Drittsystem',
            'kein produktives OCR oder binäres PDF-/XLSX-Parsing',
            'keine Mandanten-, Rollen- oder Berechtigungsverwaltung',
            'keine gemessenen Einsparungen, SLAs oder Produktivqualität',
            'keine realen Kundendokumente oder privaten Demos',
          ],
        },
      ],
      layout: 'comparison',
    },
    {
      id: 'datenschutz',
      eyebrow: 'Privatsphäre und Grenzen',
      heading: 'Die öffentliche Darstellung bleibt vollständig synthetisch',
      paragraphs: [
        'Alle Bestellungen, Kunden, Artikel, Preise und Stammdaten der Demo sind fiktiv. Die öffentliche Fallstudie nennt keine Interessenten und verlinkt keine privaten Einzel-Demos oder Forschungs-Repositories.',
        'Ein späterer Pilot müsste Datenminimierung, Auftragsverarbeitung, Aufbewahrung, Berechtigungen, Zielsystem und Abbruchkriterien vorab klären. Diese Entscheidungen sind nicht Teil des Prototyps.',
      ],
      layout: 'text',
    },
    {
      id: 'rfq-methode',
      eyebrow: 'Gemeinsame Methode',
      heading: 'Der gleiche Kontrollrahmen, ein anderes Zieldokument',
      intro:
        'RFQ Automation bleibt die spezialisierte Linie: technische Anforderungen, Quellen, Lücken und Risiken vor Kalkulation und Engineering. Auftragserfassung zeigt, dass derselbe Rahmen auch einen administrativen Industrievorgang sicher vorbereiten kann.',
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
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zur Auftragserfassungs-Fallstudie',
    items: [
      {
        question: 'Ist AuftragKlar ein produktives SaaS?',
        answer:
          'Nein. AuftragKlar ist der Arbeitsname einer unabhängigen Produktforschung mit lokaler Demo und versioniertem Workflow. Es gibt keine produktive Plattform und keine Kundenintegration.',
      },
      {
        question: 'Ist die Demo mit einem ERP verbunden?',
        answer:
          'Nein. Sie bereitet einen JSON- oder CSV-Entwurf vor. Es gibt keinen Schreibzugriff und keine bestätigte Integration mit SAP, Sage, Dynamics oder einem anderen ERP.',
      },
      {
        question: 'Welche Rolle behält der Mensch?',
        answer:
          'Eine Person klärt fehlende Daten, Preisabweichungen, Sonderwünsche und unbekannte Stammdaten. Erst danach kann ein Entwurf freigegeben oder verworfen werden.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Einen begrenzten Dokumentenprozess einordnen',
    body:
      'Für eine erste Einordnung reichen Eingangskanal, Dokumenttyp, Pflichtfelder, Stammdaten und typische Ausnahmen. Es werden keine vertraulichen Dokumente benötigt.',
    action: {
      label: 'Prozessgrenzen besprechen',
      href: '#contact-form',
      dataCta: 'order-entry-contact-final',
      contactContext: 'process-automation',
    },
    note: 'Fallstudie und lokale Demo · keine ERP-Integration · keine Produktivitätsbehauptung',
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;

