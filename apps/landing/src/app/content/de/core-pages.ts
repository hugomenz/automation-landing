import type { PageDefinition } from '../page.types';

export const TECHNICAL_REQUEST_QUALIFICATION = {
  key: 'technical-request-qualification',
  path: '/loesungen/technische-anfragequalifizierung/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Technische Anfragequalifizierung im Maschinenbau | Hugo Menz',
    description:
      'Unvollständige RFQs, Lastenhefte und Anhänge in eine prüfbare Anforderungsakte überführen – mit Quellen, offenen Punkten und menschlicher Freigabe.',
    canonicalPath: '/loesungen/technische-anfragequalifizierung/',
    robots: 'index,follow',
    openGraph: {
      title: 'Technische Anfragequalifizierung im Maschinenbau',
      description:
        'Unvollständige RFQs, Lastenhefte und Anhänge in eine prüfbare Anforderungsakte überführen – mit Quellen, offenen Punkten und menschlicher Freigabe.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Prüfbare technische Anforderungsakte mit Quellen und offenen Punkten',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Technische Anfragequalifizierung im Maschinenbau',
      description:
        'Unvollständige RFQs, Lastenhefte und Anhänge in eine prüfbare Anforderungsakte überführen – mit Quellen, offenen Punkten und menschlicher Freigabe.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Prüfbare technische Anforderungsakte mit Quellen und offenen Punkten',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Lösungen' },
    {
      label: 'Technische Anfragequalifizierung',
      path: '/loesungen/technische-anfragequalifizierung/',
    },
  ],
  hero: {
    kicker: 'Technische Anfragequalifizierung',
    h1: 'Technische Anfragen vor dem Angebot strukturiert qualifizieren',
    lead:
      'E-Mails, Lastenhefte, Fotos, Zeichnungen und Notizen werden in ein gemeinsames Anforderungsschema überführt. Fehlende Angaben, Widersprüche, Annahmen und technische Risiken bleiben sichtbar, bevor Vertrieb oder Engineering eine Budgetindikation freigeben.',
    primaryCta: {
      label: 'RFQ Readiness Workshop ansehen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-hero',
    },
    secondaryCta: {
      label: 'Internen RFQ-Copiloten ansehen',
      href: '/leistungen/interner-rfq-copilot/',
      dataCta: 'copilot-hero',
    },
  },
  sections: [
    {
      id: 'problem',
      heading: 'Das eigentliche Problem liegt vor der Kalkulation',
      intro:
        'Viele technische Anfragen sind nicht falsch, sondern unvollständig. Der Kunde beschreibt sein Ziel in seiner eigenen Sprache. Vertrieb, Projektierung und Engineering müssen daraus erst die Informationen rekonstruieren, die für eine erste Entscheidung relevant sind. Dieser Schritt ist wiederkehrend, verteilt und schwer nachvollziehbar.',
      points: [
        'Informationen verteilen sich auf mehrere Nachrichten und Dateien.',
        'Einheiten, Begriffe und Versionen sind nicht einheitlich.',
        'Kritische Angaben werden erst spät erkannt.',
        'Annahmen werden mündlich getroffen und später nicht mehr gefunden.',
        'Senior Engineers übernehmen Sortierarbeit, obwohl nur einzelne Entscheidungen ihre Erfahrung benötigen.',
      ],
      layout: 'list',
    },
    {
      id: 'anforderungsakte',
      heading: 'Ergebnis ist eine Anforderungsakte, keine automatisch erzeugte Wahrheit',
      intro: 'Die Akte sollte mindestens enthalten:',
      points: [
        'bestätigte Anforderungen;',
        'Quelle und Version jedes relevanten Wertes;',
        'interpretierte, aber noch nicht bestätigte Angaben;',
        'fehlende Pflichtfelder;',
        'Widersprüche;',
        'vorgeschlagene Rückfragen;',
        'Annahmen und Ausschlüsse;',
        'technische Risiken;',
        'Abdeckung durch freigegebene Regeln;',
        'Punkte, die zwingend Engineering benötigen.',
      ],
      callout:
        'Ein sauber formatiertes Feld ohne Quelle ist nicht automatisch verlässlich. Deshalb werden Fakten, Interpretation, Annahme und menschliche Entscheidung getrennt gespeichert.',
      layout: 'list',
    },
    {
      id: 'verarbeitung',
      heading: 'So verarbeitet der Copilot Eingaben',
      items: [
        { title: 'Anfrage und Anhänge aufnehmen.' },
        { title: 'Inhalte in das Schema der Maschinenfamilie einordnen.' },
        { title: 'Quellen zuordnen und Einheiten normalisieren.' },
        { title: 'Lücken und Widersprüche markieren.' },
        { title: 'Rückfragen priorisieren.' },
        { title: 'Regelabdeckung prüfen.' },
        { title: 'Ergebnis zur menschlichen Freigabe vorlegen.' },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'geeignet',
      heading: 'Geeignet, wenn ...',
      points: [
        'eine Maschinenfamilie wiederkehrende Anforderungen besitzt;',
        'Module, Optionen oder technische Grenzen dokumentierbar sind;',
        'mehrere Anfragen pro Monat oder ein hoher Aufwand pro Anfrage entsteht;',
        'historische Unterlagen und Expertenwissen zugänglich sind;',
        'ein Verantwortlicher Regeln freigibt und pflegt.',
      ],
      links: [
        {
          label: 'Angebotsprozesse für End-of-Line-Anlagen',
          href: '/branchen/end-of-line/',
        },
        {
          label: 'Technische Anfragequalifizierung für Verpackungsmaschinen',
          href: '/branchen/verpackungsmaschinen/',
        },
        {
          label: 'Angebotsqualifizierung für Palettieranlagen',
          href: '/branchen/palettieranlagen/',
        },
      ],
      layout: 'list',
    },
    {
      id: 'nicht-geeignet',
      heading: 'Nicht geeignet, wenn ...',
      points: [
        'jede Anfrage vollständig neue Forschung oder Versuche erfordert;',
        'niemand erklären kann, wie die erste Einschätzung heute entsteht;',
        'Preis und Machbarkeit ausschließlich aus Bauchgefühl kommen;',
        'keine Person Zeit für Validierung und Pflege bereitstellt;',
        'sofort eine öffentliche oder verbindliche Kalkulation erwartet wird.',
      ],
      layout: 'list',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zur technischen Anfragequalifizierung',
    items: [
      {
        question: 'Muss bereits ein CPQ vorhanden sein?',
        answer:
          'Nein. Ein Pilot kann vor einem CPQ ansetzen und zunächst Anforderungen, Quellen, Lücken und freigegebene Regeln strukturieren. Er kann auch zeigen, ob eine spätere CPQ-Einführung sinnvoll ist.',
      },
      {
        question: 'Kann die KI Preise festlegen?',
        answer:
          'Nein. Preise und Budgetwerte dürfen nur aus freigegebenen Tabellen, Modulen, Faktoren oder Formeln kommen. Die KI darf Informationen zuordnen, aber keinen Preis erfinden.',
      },
      {
        question: 'Wird eine Budgetindikation automatisch an den Kunden gesendet?',
        answer:
          'Nicht im ersten Pilot. Das System arbeitet intern. Jede Ausgabe wird geprüft und ausdrücklich freigegeben, bevor sie weiterverwendet wird.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'RFQ Readiness vor der Umsetzung prüfen',
    body: 'Der RFQ Readiness Workshop prüft, ob Prozess, Daten und Regeln für eine begrenzte Umsetzung ausreichen. Das Ergebnis kann ausdrücklich ein No-Go sein.',
    action: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;

export const RFQ_READINESS_WORKSHOP = {
  key: 'rfq-readiness-workshop',
  path: '/leistungen/rfq-readiness-workshop/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'RFQ Readiness Workshop für Maschinenbauer | Hugo Menz',
    description:
      'Prüfen Sie Prozess, Daten, Regeln und Wirtschaftlichkeit einer Angebotsautomatisierung – für eine klar abgegrenzte Maschinenfamilie.',
    canonicalPath: '/leistungen/rfq-readiness-workshop/',
    robots: 'index,follow',
    openGraph: {
      title: 'RFQ Readiness Workshop für Maschinenbauer',
      description:
        'Prüfen Sie Prozess, Daten, Regeln und Wirtschaftlichkeit einer Angebotsautomatisierung – für eine klar abgegrenzte Maschinenfamilie.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'RFQ Readiness Workshop für eine klar abgegrenzte Maschinenfamilie',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'RFQ Readiness Workshop für Maschinenbauer',
      description:
        'Prüfen Sie Prozess, Daten, Regeln und Wirtschaftlichkeit einer Angebotsautomatisierung – für eine klar abgegrenzte Maschinenfamilie.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'RFQ Readiness Workshop für eine klar abgegrenzte Maschinenfamilie',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Leistungen' },
    { label: 'RFQ Readiness Workshop', path: '/leistungen/rfq-readiness-workshop/' },
  ],
  hero: {
    kicker: 'RFQ Readiness Workshop',
    h1: 'Ist Ihre Maschinenfamilie bereit für Angebotsautomatisierung?',
    lead:
      'Bevor Software gebaut wird, prüfe ich, ob genügend Wiederholbarkeit, Daten, Regeln und wirtschaftlicher Nutzen vorhanden sind. Der Workshop liefert eine belastbare Entscheidungsgrundlage für eine Maschinenfamilie – einschließlich eines begründeten No-Go.',
    primaryCta: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-hero',
    },
  },
  sections: [
    {
      id: 'klaerung',
      heading: 'Was im Workshop geklärt wird',
      points: [
        'Welche Anfragen gehören tatsächlich zur gleichen Familie?',
        'Welche Angaben sind für Qualifikation und Budgetbasis unverzichtbar?',
        'Wo entstehen heute Stunden in Vertrieb und Engineering?',
        'Welche Module, Regeln, Tabellen oder Formeln existieren bereits?',
        'Welche Informationen liegen nur im Wissen einzelner Personen?',
        'Welche Fälle müssen gestoppt oder eskaliert werden?',
        'Welche Daten dürfen für eine historische Prüfung verwendet werden?',
        'Wie kann ein Pilot gemessen werden?',
      ],
      layout: 'list',
    },
    {
      id: 'lieferumfang',
      heading: 'Lieferumfang',
      points: [
        'Vorbereitung anhand eines kurzen Fragebogens.',
        'Gemeinsamer Workshop mit Vertrieb und, wenn nötig, Engineering/IT.',
        'Map des aktuellen RFQ-Prozesses.',
        'Bewertung einer Maschinenfamilie.',
        'Inventar von Daten, Dokumenten, Systemen und Regeln.',
        'Liste kritischer Risiken und Abhängigkeiten.',
        'Vorschlag für Messgrößen und historische Testfälle.',
        'Empfehlung Go, Go mit Bedingungen oder No-Go.',
        'Abgegrenzter Vorschlag für den nächsten Schritt.',
      ],
      layout: 'list',
    },
    {
      id: 'kein-workshop-inhalt',
      heading: 'Was der Workshop nicht ist',
      points: [
        'keine kostenlose Voranalyse des gesamten Portfolios;',
        'keine fertige Anwendung;',
        'keine automatische Kalkulation;',
        'keine CPQ-Auswahl für alle Geschäftsbereiche;',
        'keine Rechts- oder Security-Zertifizierung;',
        'keine Garantie, dass ein Pilot empfohlen wird.',
      ],
      layout: 'list',
    },
    {
      id: 'teilnehmende',
      heading: 'Welche Personen teilnehmen sollten',
      points: [
        'Verantwortlicher für technischen Vertrieb oder Projektierung;',
        'eine Person, die die Kalkulationslogik kennt;',
        'bei Bedarf Engineering, Controlling oder IT;',
        'ein Entscheider, der den nächsten Schritt freigeben kann.',
      ],
      layout: 'list',
    },
    {
      id: 'unterlagen',
      heading: 'Welche Unterlagen hilfreich sind',
      points: [
        'fünf bis zehn aktuelle RFQ-Beispiele;',
        'vorhandene Checklisten oder Fragebögen;',
        'Kalkulationsvorlagen, Modullisten oder Regeln;',
        'grobe Zahlen zu Volumen und Aufwand;',
        'Überblick über CRM, ERP und Dokumentablage.',
      ],
      layout: 'list',
    },
    {
      id: 'ergebnis',
      heading: 'Ergebnis',
      paragraphs: [
        'Sie wissen nach dem Workshop, ob ein begrenzter Pilot technisch und wirtschaftlich sinnvoll ist, welche Daten fehlen und welches Risiko vor der Umsetzung gelöst werden muss.',
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
        { label: 'Über Hugo Menz', href: '/ueber-hugo-menz/' },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zum RFQ Readiness Workshop',
    items: [
      {
        question: 'Kann der Workshop mit einem No-Go enden?',
        answer:
          'Ja. Ein begründetes No-Go ist ein valides Ergebnis, wenn Wiederholbarkeit, Daten, Regeln oder Wirtschaftlichkeit nicht ausreichen.',
      },
      {
        question: 'Wer sollte teilnehmen?',
        answer:
          'Mindestens eine Person aus technischem Vertrieb oder Projektierung und eine Person, die Kalkulationslogik oder technische Grenzen kennt. Für einzelne Themen können Engineering, Controlling oder IT hinzukommen.',
      },
      {
        question: 'Muss das gesamte Portfolio analysiert werden?',
        answer:
          'Nein. Der Workshop konzentriert sich auf eine konkrete Maschinenfamilie. Das gesamte Portfolio würde die Entscheidung unnötig verwässern.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Maschinenfamilie besprechen',
    body: 'Bezahlter Workshop mit fest abgegrenztem Umfang.',
    action: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
    note: 'Keine Preisangabe ohne vorherige Bestätigung des konkreten Umfangs.',
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;

export const INTERNAL_RFQ_COPILOT = {
  key: 'internal-rfq-copilot',
  path: '/leistungen/interner-rfq-copilot/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Interner RFQ-Copilot für Maschinenbauer | Hugo Menz',
    description:
      'Technische Anfragen intern strukturieren, Quellen nachweisen, Lücken erkennen und eine regelbasierte Budgetbasis zur Prüfung vorbereiten.',
    canonicalPath: '/leistungen/interner-rfq-copilot/',
    robots: 'index,follow',
    openGraph: {
      title: 'Interner RFQ-Copilot für Maschinenbauer',
      description:
        'Technische Anfragen intern strukturieren, Quellen nachweisen, Lücken erkennen und eine regelbasierte Budgetbasis zur Prüfung vorbereiten.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Interner RFQ-Copilot mit Quellen, freigegebenen Regeln und Review',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Interner RFQ-Copilot für Maschinenbauer',
      description:
        'Technische Anfragen intern strukturieren, Quellen nachweisen, Lücken erkennen und eine regelbasierte Budgetbasis zur Prüfung vorbereiten.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Interner RFQ-Copilot mit Quellen, freigegebenen Regeln und Review',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Leistungen' },
    { label: 'Interner RFQ-Copilot', path: '/leistungen/interner-rfq-copilot/' },
  ],
  hero: {
    kicker: 'Interner RFQ-Copilot',
    h1: 'Interner RFQ-Copilot für eine Maschinenfamilie',
    lead:
      'Der Copilot verarbeitet eingehende Anfragen intern und bereitet einen prüfbaren Entwurf für Vertrieb und Engineering vor. Kunden sehen keine ungeprüften Ergebnisse, und kein Preis wird ohne freigegebene Quelle erzeugt.',
    primaryCta: {
      label: 'RFQ Readiness Workshop ansehen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-hero',
    },
  },
  sections: [
    {
      id: 'eingaben',
      heading: 'Eingaben',
      points: [
        'E-Mail-Text und Anhänge;',
        'Lastenhefte und Spezifikationen;',
        'Fotos und vorhandene Zeichnungen;',
        'Gesprächsnotizen;',
        'manuelle Ergänzungen des Vertriebs.',
      ],
      layout: 'list',
    },
    {
      id: 'ausgaben',
      heading: 'Ausgaben',
      points: [
        'strukturierte Anforderungsakte;',
        'Quelle pro Feld;',
        'fehlende und widersprüchliche Angaben;',
        'priorisierte Rückfragen;',
        'Annahmen und Ausschlüsse;',
        'vorläufige Risikohinweise;',
        'mögliche Module ausschließlich aus freigegebenem Katalog;',
        'regelbasierte interne Budgetbasis, soweit abgedeckt;',
        'Entwurf für die weitere Übergabe.',
      ],
      layout: 'list',
    },
    {
      id: 'kontrollen',
      heading: 'Kontrollen',
      points: [
        'Fakten, Interpretation und Annahmen werden getrennt.',
        'Jede wirtschaftliche Zeile verweist auf eine freigegebene Quelle.',
        'Regeln und Preise besitzen Version und Gültigkeitsdatum.',
        'Nicht abgedeckte Fälle werden blockiert.',
        'Export oder Weitergabe erfordert eine explizite menschliche Freigabe.',
        'Korrekturen werden nachvollziehbar protokolliert.',
      ],
      layout: 'list',
    },
    {
      id: 'intern-beginnen',
      heading: 'Warum intern beginnen',
      paragraphs: [
        'Ein öffentlicher Wizard verändert gleichzeitig das Verhalten des Kunden, den Webauftritt, den Datenschutz und die Preiswahrnehmung. Ein interner Pilot kann dagegen mit historischen Fällen und im Schattenbetrieb lernen, ohne ungeprüfte Ergebnisse nach außen zu geben.',
      ],
      layout: 'text',
    },
    {
      id: 'pilotgrenzen',
      heading: 'Pilotgrenzen',
      points: [
        'eine Maschinenfamilie;',
        'wenige interne Nutzer;',
        'kein automatischer Versand;',
        'keine verbindliche Kalkulation;',
        'keine tiefe ERP-Integration;',
        'keine Abdeckung des gesamten Portfolios;',
        'klare technische Ausschlüsse.',
      ],
      links: [
        {
          label: 'Technische Anfragequalifizierung im Maschinenbau',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
        {
          label: 'Einsatz bei End-of-Line-Anlagen',
          href: '/branchen/end-of-line/',
        },
        {
          label: 'Einsatz bei Verpackungsmaschinen',
          href: '/branchen/verpackungsmaschinen/',
        },
        {
          label: 'Einsatz bei Palettieranlagen',
          href: '/branchen/palettieranlagen/',
        },
      ],
      layout: 'list',
    },
    {
      id: 'technologie',
      heading: 'Technologie ist Mittel zum Zweck',
      paragraphs: [
        'Je nach bestehender Landschaft können Angular, APIs, Webhooks, n8n, Make oder andere Komponenten eingesetzt werden. Entscheidend sind jedoch das Anforderungsschema, die freigegebenen Regeln, die Versionierung und der Review-Prozess.',
      ],
      links: [
        { label: 'n8n Beratung Stuttgart', href: '/n8n-beratung-stuttgart/' },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zum internen RFQ-Copiloten',
    items: [
      {
        question: 'Kann der Copilot Machbarkeit bestätigen?',
        answer:
          'Nein. Er kann bekannte Regeln prüfen und Abweichungen markieren. Technische Machbarkeit bleibt eine Entscheidung der zuständigen Experten.',
      },
      {
        question: 'Was passiert bei Sonderfällen?',
        answer:
          'Der Fall wird mit dem konkreten Blockiergrund an Engineering eskaliert. Das System soll Unsicherheit sichtbar machen, nicht durch eine erzwungene Antwort verdecken.',
      },
      {
        question: 'Können mehrere Produktfamilien gleichzeitig starten?',
        answer:
          'Für den ersten Pilot nicht. Erst wenn eine Familie stabil funktioniert, sollte der Umfang erweitert werden.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'RFQ Readiness Workshop anfragen',
    body: 'Vor dem internen Pilot wird geprüft, ob eine Maschinenfamilie genügend Wiederholbarkeit, Daten, freigegebene Regeln und klare technische Grenzen besitzt.',
    action: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
    note: 'Kein automatischer Versand und keine verbindliche Kalkulation ohne menschliche Freigabe.',
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
