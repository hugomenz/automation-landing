import type { PageDefinition } from '../page.types';

export const TECHNICAL_REQUEST_QUALIFICATION = {
  key: 'technical-request-qualification',
  path: '/loesungen/technische-anfragequalifizierung/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Technische Anfragequalifizierung im Maschinenbau | Hugo Menz',
    description:
      'Unvollständige RFQs und Anhänge in eine prüfbare Anforderungsakte mit Quellen und offenen Punkten überführen.',
    canonicalPath: '/loesungen/technische-anfragequalifizierung/',
    robots: 'index,follow',
    openGraph: {
      title: 'Technische Anfragequalifizierung im Maschinenbau',
      description:
        'Unvollständige RFQs und Anhänge in eine prüfbare Anforderungsakte mit Quellen und offenen Punkten überführen.',
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
        'Unvollständige RFQs und Anhänge in eine prüfbare Anforderungsakte mit Quellen und offenen Punkten überführen.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Prüfbare technische Anforderungsakte mit Quellen und offenen Punkten',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    {
      label: 'Technische Anfragequalifizierung',
      path: '/loesungen/technische-anfragequalifizierung/',
    },
  ],
  hero: {
    kicker: 'Technische Anfragequalifizierung',
    h1: 'Technische Anfragen vor dem Angebot strukturiert qualifizieren',
    lead:
      'E-Mails, Lastenhefte und Anhänge werden in einer Anforderungsakte gebündelt. Lücken, Widersprüche und Risiken bleiben bis zur Freigabe sichtbar.',
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
        'Technische Anfragen sind oft unvollständig. Vertrieb und Engineering müssen die entscheidungsrelevanten Angaben erst aus mehreren Quellen rekonstruieren.',
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
        'Formatierte Daten sind ohne Quelle nicht automatisch verlässlich. Fakten, Annahmen und Entscheidungen bleiben deshalb getrennt.',
      layout: 'list',
    },
    {
      id: 'verarbeitung',
      heading: 'So entsteht die prüfbare Anforderungsakte',
      items: [
        { title: 'Anfrage, Anhänge und Dokumentversionen erfassen.' },
        { title: 'Inhalte dem freigegebenen Anforderungsschema des Produkt- oder Lösungsbereichs zuordnen.' },
        { title: 'Quelle, Fundstelle und Status pro Anforderung festhalten.' },
        { title: 'Einheiten normalisieren und abweichende Angaben gegenüberstellen.' },
        { title: 'Lücken, Widersprüche, Risiken und Rückfragen priorisieren.' },
        { title: 'Regelabdeckung sowie nicht abgedeckte Sonderfälle ausweisen.' },
        { title: 'Die Anforderungsakte zur fachlichen Prüfung vorlegen.' },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'geeignet',
      heading: 'Geeignet, wenn ...',
      points: [
        'sich für einen Produktbereich, Maschinentyp oder eine Lösungsfamilie wiederkehrende Anforderungen beschreiben lassen;',
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
    body: 'Beschreiben Sie Anfragevolumen, beteiligte Rollen und den größten Engpass. Für die erste Einschätzung sind keine vertraulichen Dokumente erforderlich. Danach lässt sich klären, ob ein begrenzter RFQ Readiness Workshop sinnvoll ist.',
    action: {
      label: 'RFQ-Fit-Check anfragen',
      href: '#contact-form',
      dataCta: 'contact-final',
      contactContext: 'rfq',
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
      'Prüfen Sie Prozess, Daten, Regeln und Wirtschaftlichkeit eines klar abgegrenzten technischen Angebotsprozesses.',
    canonicalPath: '/leistungen/rfq-readiness-workshop/',
    robots: 'index,follow',
    openGraph: {
      title: 'RFQ Readiness Workshop für Maschinenbauer',
      description:
        'Prüfen Sie Prozess, Daten, Regeln und Wirtschaftlichkeit eines klar abgegrenzten technischen Angebotsprozesses.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'RFQ Readiness Workshop für einen klar abgegrenzten Angebotsprozess',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'RFQ Readiness Workshop für Maschinenbauer',
      description:
        'Prüfen Sie Prozess, Daten, Regeln und Wirtschaftlichkeit eines klar abgegrenzten technischen Angebotsprozesses.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'RFQ Readiness Workshop für einen klar abgegrenzten Angebotsprozess',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'RFQ Readiness Workshop', path: '/leistungen/rfq-readiness-workshop/' },
  ],
  hero: {
    kicker: 'RFQ Readiness Workshop',
    h1: 'Ist Ihr Angebotsprozess bereit für kontrollierte Automatisierung?',
    lead:
      'Der Workshop prüft Wiederholbarkeit, Daten, Regeln und Nutzen eines klar abgegrenzten Angebotsprozesses. Ergebnis ist eine belastbare Go- oder No-Go-Entscheidung.',
    primaryCta: {
      label: 'Workshop anfragen',
      href: '#contact-form',
      dataCta: 'contact-hero',
      contactContext: 'rfq',
    },
    trustLine:
      'Erster Kontakt: Anfragevolumen · beteiligte Rollen · größter Engpass · keine vertraulichen Dokumente erforderlich',
  },
  sections: [
    {
      id: 'klaerung',
      heading: 'Was im Workshop geklärt wird',
      points: [
        'Welche Anfragen gehören zum gleichen Produkt- oder Lösungsbereich?',
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
        'Bewertung des ausgewählten Angebotsprozesses.',
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
      intro:
        'Für die erste Kontaktaufnahme werden keine vertraulichen Dokumente benötigt. Nach abgestimmtem Umfang können für den Workshop folgende Unterlagen hilfreich sein:',
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
          'Nein. Der Workshop konzentriert sich auf einen konkreten Angebotsprozess oder Produktbereich. Das gesamte Portfolio würde die Entscheidung unnötig verwässern.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Angebotsprozess besprechen',
    body: 'Beschreiben Sie Anfragevolumen, beteiligte Rollen und den größten Engpass. Im ersten Kontakt klären wir ohne vertrauliche Dokumente, ob sich ein Workshop sinnvoll abgrenzen lässt.',
    action: {
      label: 'Workshop anfragen',
      href: '#contact-form',
      dataCta: 'contact-final',
      contactContext: 'rfq',
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
    { label: 'Interner RFQ-Copilot', path: '/leistungen/interner-rfq-copilot/' },
  ],
  hero: {
    kicker: 'Interner RFQ-Copilot',
    h1: 'Interner RFQ-Copilot für technische Angebotsprozesse',
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
      id: 'definition',
      eyebrow: 'Kurz erklärt',
      heading: 'Was ist ein RFQ-Copilot?',
      intro:
        'Ein interner RFQ-Copilot strukturiert technische Kundenanfragen, verbindet Anforderungen mit ihren Quellen und markiert Lücken, Widersprüche sowie nicht abgedeckte Sonderfälle. Er bereitet Entscheidungen vor, trifft aber keine autonome Machbarkeits-, Preis- oder Freigabeentscheidung.',
      links: [
        {
          label: 'Methode der technischen Anfragequalifizierung',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
      ],
      layout: 'text',
    },
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
      id: 'vergleich',
      eyebrow: 'Einordnung',
      heading: 'Was unterscheidet RFQ-Copilot, CPQ, CRM und Document AI?',
      intro:
        'Die vier Kategorien lösen unterschiedliche Aufgaben und können sich ergänzen. Entscheidend ist, an welcher Stelle des Angebotsprozesses strukturierte, freigegebene Daten bereits vorliegen.',
      columns: [
        {
          heading: 'RFQ-Copilot',
          intro:
            'Zweck: unstrukturierte technische Anfragen vor Kalkulation und Engineering qualifizieren.',
          points: [
            'Eingabe: E-Mails, Spezifikationen, Anhänge und freigegebene Regeln.',
            'Ausgabe: Anforderungsakte, Quellen, Lücken, Widersprüche, Risiken und Rückfragen.',
            'Automatisiert: Strukturierung, Prüfhinweise und abgedeckte Regelanwendung.',
            'Entscheidet nicht: Machbarkeit, Preisfreigabe oder Kundenantwort.',
            'Freigabe: menschliche Prüfung ist vor jeder Weitergabe verpflichtend.',
            'Passt: wenn RFQs vor einem CPQ oder Engineering-Schritt noch unstrukturiert sind.',
          ],
        },
        {
          heading: 'CPQ',
          intro:
            'Zweck: Produkte und Optionen innerhalb eines gepflegten Regel- und Preismodells konfigurieren.',
          points: [
            'Eingabe: strukturierte Merkmale, Produktlogik, Kataloge und Preisregeln.',
            'Ausgabe: gültige Konfiguration, Preis oder Angebotsdokument.',
            'Automatisiert: Konfiguration und Kalkulation innerhalb des definierten Modells.',
            'Entscheidet nicht: unklare technische Anforderungen außerhalb des Modells.',
            'Freigabe: richtet sich nach Preis-, Ausnahme- und Angebotsregeln des Unternehmens.',
            'Passt: wenn Produkt- und Preisdaten bereits strukturiert und gepflegt sind.',
          ],
        },
        {
          heading: 'CRM',
          intro:
            'Zweck: Kunden, Kontakte, Aktivitäten, Verkaufschancen und Kommunikation verwalten.',
          points: [
            'Eingabe: Konto-, Kontakt-, Aktivitäts- und Opportunity-Daten.',
            'Ausgabe: Pipeline, Historie, Aufgaben und Vertriebsstatus.',
            'Automatisiert: Vertriebsabläufe, Erinnerungen und Datenübergaben.',
            'Entscheidet nicht: technische Eignung, Konfiguration oder Preis.',
            'Freigabe: folgt den Vertriebs- und Datenprozessen des Unternehmens.',
            'Passt: als führendes System für Kundenbeziehung und Opportunity-Status.',
          ],
        },
        {
          heading: 'Document AI',
          intro:
            'Zweck: Inhalte aus Dokumenten und Bildern extrahieren, klassifizieren oder zuordnen.',
          points: [
            'Eingabe: PDFs, Scans, Bilder und andere Dokumente.',
            'Ausgabe: Text, Felder, Klassen oder erkannte Dokumentstrukturen.',
            'Automatisiert: Erfassung und Vorstrukturierung von Dokumentinhalten.',
            'Entscheidet nicht: technische Machbarkeit, Preis oder Angebotsfreigabe.',
            'Freigabe: mehrdeutige oder geschäftskritische Inhalte benötigen Prüfung.',
            'Passt: als Extraktionsbaustein innerhalb eines fachlich kontrollierten Prozesses.',
          ],
        },
      ],
      layout: 'comparison',
    },
    {
      id: 'intern-beginnen',
      heading: 'Warum intern beginnen',
      paragraphs: [
        'Ein interner Pilot kann mit historischen Fällen im Schattenbetrieb lernen. So gelangen keine ungeprüften Ergebnisse zu Kunden.',
      ],
      layout: 'text',
    },
    {
      id: 'pilotgrenzen',
      heading: 'Pilotgrenzen',
      points: [
        'ein klar abgegrenzter Angebotsprozess;',
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
        question: 'Können mehrere Produkt- oder Lösungsbereiche gleichzeitig pilotiert werden?',
        answer:
          'Für den ersten Pilot nicht. Zunächst sollte ein abgegrenzter Angebotsprozess stabil funktionieren.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'RFQ Readiness Workshop anfragen',
    body: 'Beschreiben Sie Anfragevolumen, beteiligte Rollen und den größten Engpass. Für die erste Einschätzung sind keine vertraulichen Dokumente erforderlich. Danach lässt sich ein geeigneter Workshop- oder No-Go-Schritt abgrenzen.',
    action: {
      label: 'RFQ-Fit-Check anfragen',
      href: '#contact-form',
      dataCta: 'contact-final',
      contactContext: 'rfq',
    },
    note: 'Kein automatischer Versand und keine verbindliche Kalkulation ohne menschliche Freigabe.',
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
