import type { PageDefinition } from '../page.types';

export const END_OF_LINE = {
  key: 'end-of-line',
  path: '/branchen/end-of-line/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Angebotsprozesse für End-of-Line-Anlagen digitalisieren | Hugo Menz',
    description:
      'Technische Anfragen für modulare End-of-Line-Anlagen strukturieren, Lücken erkennen und eine regelbasierte Budgetbasis vorbereiten.',
    canonicalPath: '/branchen/end-of-line/',
    robots: 'index,follow',
    openGraph: {
      title: 'Angebotsprozesse für End-of-Line-Anlagen digitalisieren',
      description:
        'Technische Anfragen für modulare End-of-Line-Anlagen strukturieren, Lücken erkennen und eine regelbasierte Budgetbasis vorbereiten.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Technische Anfragequalifizierung für modulare End-of-Line-Anlagen',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Angebotsprozesse für End-of-Line-Anlagen digitalisieren',
      description:
        'Technische Anfragen für modulare End-of-Line-Anlagen strukturieren, Lücken erkennen und eine regelbasierte Budgetbasis vorbereiten.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Technische Anfragequalifizierung für modulare End-of-Line-Anlagen',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Branchen' },
    { label: 'End-of-Line', path: '/branchen/end-of-line/' },
  ],
  hero: {
    kicker: 'Maschinenfamilien · End-of-Line',
    h1: 'Angebotsprozesse für End-of-Line-Anlagen digitalisieren',
    lead:
      'End-of-Line-Projekte kombinieren häufig bekannte Module mit kundenspezifischen Randbedingungen. Genau diese Mischung kann sich für einen begrenzten internen RFQ-Pilot eignen – wenn Eingangsgrößen, Optionen und Ausschlüsse klar beschrieben werden.',
    primaryCta: {
      label: 'RFQ Readiness Workshop ansehen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-hero',
    },
  },
  sections: [
    {
      id: 'typische-anfragen',
      heading: 'Typische Anfragen',
      points: [
        'Palettieren und Depalettieren;',
        'Kartonieren, Aufrichten und Verschließen;',
        'Etikettieren und Kennzeichnen;',
        'Umreifen, Stretch- oder Schrumpfverpacken;',
        'Fördertechnik und Puffer;',
        'Kombination mehrerer Module am Linienende.',
      ],
      layout: 'list',
    },
    {
      id: 'fehlende-angaben',
      heading: 'Welche Angaben häufig fehlen',
      points: [
        'Produkt- und Verpackungsabmessungen;',
        'Gewicht, Stabilität und Varianten;',
        'Leistung und Spitzenlast;',
        'Ein- und Auslaufrichtung;',
        'Paletten, Trays, Zwischenlagen oder Kartons;',
        'Layout und verfügbare Höhe;',
        'Schnittstellen zu vor- und nachgelagerten Anlagen;',
        'Sicherheits- und Umgebungsanforderungen;',
        'Umfang von Montage, FAT, SAT und Schulung.',
      ],
      layout: 'list',
    },
    {
      id: 'regelbasiert',
      heading: 'Was sich regelbasiert vorbereiten lässt',
      points: [
        'Zuordnung zu einer Lösungsfamilie;',
        'Auswahl vorhandener Module und Optionen;',
        'Prüfung einfacher Kompatibilitäten;',
        'Markierung fehlender Pflichtangaben;',
        'Aufwandstreiber und Risikoklassen;',
        'interne Budgetbasis aus freigegebenen Modulen und Faktoren.',
      ],
      layout: 'list',
    },
    {
      id: 'engineering',
      heading: 'Wann Engineering übernehmen muss',
      points: [
        'instabile oder deformierbare Produkte;',
        'unbekannte Materialeigenschaften;',
        'extreme Leistungen;',
        'stark eingeschränkter Bauraum;',
        'besondere Hygiene-, Pharma- oder ATEX-Anforderungen;',
        'neue Greifer-, Vision- oder Prozesskonzepte;',
        'ungeklärte Schnittstellen im Brownfield.',
      ],
      layout: 'list',
    },
    {
      id: 'pilotvorgehen',
      heading: 'Pilotvorgehen',
      items: [
        { title: 'Eine konkrete End-of-Line-Familie auswählen.' },
        { title: 'Pflichtdaten und technische Grenzen definieren.' },
        { title: 'Historische RFQ gegen das Schema prüfen.' },
        { title: 'Freigegebene Module und Budgetregeln versionieren.' },
        { title: 'Neue Fälle intern und parallel bearbeiten.' },
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
        {
          label: 'Technische Anfragequalifizierung für Verpackungsmaschinen',
          href: '/branchen/verpackungsmaschinen/',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zur Angebotsqualifizierung für End-of-Line-Anlagen',
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
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Eine End-of-Line-Familie klar abgrenzen',
    body: 'Im Workshop werden Pflichtdaten, bekannte Module, technische Grenzen und Blockierregeln für eine konkrete End-of-Line-Familie geprüft.',
    action: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
    note: 'Der Copilot bereitet vor; Vertrieb und Engineering geben das Ergebnis frei.',
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;

export const PACKAGING_MACHINERY = {
  key: 'packaging-machinery',
  path: '/branchen/verpackungsmaschinen/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Technische Anfragequalifizierung für Verpackungsmaschinen | Hugo Menz',
    description:
      'Anfragen für Verpackungsmaschinen strukturiert qualifizieren – mit Produktdaten, Formaten, Leistung, Schnittstellen, offenen Punkten und Review.',
    canonicalPath: '/branchen/verpackungsmaschinen/',
    robots: 'index,follow',
    openGraph: {
      title: 'Technische Anfragequalifizierung für Verpackungsmaschinen',
      description:
        'Anfragen für Verpackungsmaschinen strukturiert qualifizieren – mit Produktdaten, Formaten, Leistung, Schnittstellen, offenen Punkten und Review.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Strukturierte technische Anfrage für eine Verpackungsmaschinen-Plattform',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Technische Anfragequalifizierung für Verpackungsmaschinen',
      description:
        'Anfragen für Verpackungsmaschinen strukturiert qualifizieren – mit Produktdaten, Formaten, Leistung, Schnittstellen, offenen Punkten und Review.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Strukturierte technische Anfrage für eine Verpackungsmaschinen-Plattform',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Branchen' },
    { label: 'Verpackungsmaschinen', path: '/branchen/verpackungsmaschinen/' },
  ],
  hero: {
    kicker: 'Maschinenfamilien · Verpackungsmaschinen',
    h1: 'Technische Anfragequalifizierung für Verpackungsmaschinen',
    lead:
      'Verpackungsanfragen wirken oft standardisiert, enthalten aber entscheidende Abhängigkeiten von Produkt, Packmittel, Leistung und Formatwechsel. Ein guter Pilot konzentriert sich deshalb auf eine klar definierte Plattform, nicht auf jede Verpackungsanwendung.',
    primaryCta: {
      label: 'RFQ Readiness Workshop ansehen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-hero',
    },
  },
  sections: [
    {
      id: 'startpunkt',
      heading: 'Guter Startpunkt',
      intro: 'Der P0-Fokus liegt auf sekundären Verpackungsprozessen, zum Beispiel:',
      points: [
        'Kartonaufrichten und -verschließen;',
        'Gruppieren und Einpacken;',
        'Etikettieren;',
        'definierte Formatwechsel;',
        'modulare Zuführung und Fördertechnik;',
        'kombinierbare Standardoptionen.',
      ],
      layout: 'list',
    },
    {
      id: 'eingangsgroessen',
      heading: 'Relevante Eingangsgrößen',
      points: [
        'Produkt und Primärverpackung;',
        'Abmessungen, Gewicht und Stabilität;',
        'Packmittel und Material;',
        'gewünschtes Packbild;',
        'Leistung und Puffer;',
        'Anzahl der Formate;',
        'Wechselhäufigkeit und Rüstkonzept;',
        'Qualitäts- und Kennzeichnungsanforderungen;',
        'Reinigung und Umgebung;',
        'Steuerung, Daten und Linienintegration.',
      ],
      layout: 'list',
    },
    {
      id: 'pilotgrenzen',
      heading: 'Grenzen des ersten Piloten',
      intro: 'Nicht als erste Familie verwenden:',
      points: [
        'aseptische Prozesse;',
        'pharmazeutisch validierte Anwendungen;',
        'Dosierung oder Füllung mit unbekanntem Produktverhalten;',
        'Packstoffe, deren Verhalten erst getestet werden muss;',
        'Hochgeschwindigkeitsprozesse ohne validierte Leistungsdaten;',
        'vollständig neue Plattformen.',
      ],
      layout: 'list',
    },
    {
      id: 'ergebnis',
      heading: 'Ergebnis der Qualifizierung',
      points: [
        'strukturierte Produkt- und Packmitteldaten;',
        'fehlende Pflichtangaben;',
        'Format- und Leistungsrahmen;',
        'mögliche Plattform oder Module;',
        'technische Ausschlüsse;',
        'Fragen für Muster- oder Machbarkeitstests;',
        'regelbasierte Budgetbasis, soweit abgedeckt.',
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
        {
          label: 'Angebotsqualifizierung für Palettieranlagen',
          href: '/branchen/palettieranlagen/',
        },
      ],
      layout: 'list',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zur Anfragequalifizierung für Verpackungsmaschinen',
    items: [
      {
        question: 'Kann der Copilot Machbarkeit bestätigen?',
        answer:
          'Nein. Er kann bekannte Regeln prüfen und Abweichungen markieren. Technische Machbarkeit bleibt eine Entscheidung der zuständigen Experten.',
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
    heading: 'Eine Verpackungsmaschinen-Plattform als Pilot prüfen',
    body: 'Der Einstieg konzentriert sich auf eine klar definierte Plattform mit wiederkehrenden Formaten, Optionen und Leistungsgrenzen.',
    action: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
    note: 'Machbarkeit und ungeprüfte Produktabhängigkeiten bleiben bei den zuständigen Experten.',
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;

export const PALLETISING_SYSTEMS = {
  key: 'palletising-systems',
  path: '/branchen/palettieranlagen/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Angebotsqualifizierung für Palettieranlagen | Hugo Menz',
    description:
      'RFQ für robotergestützte Palettieranlagen strukturieren: Produkt, Leistung, Palettenbild, Layout, Sicherheit, Optionen und offene Risiken.',
    canonicalPath: '/branchen/palettieranlagen/',
    robots: 'index,follow',
    openGraph: {
      title: 'Angebotsqualifizierung für Palettieranlagen',
      description:
        'RFQ für robotergestützte Palettieranlagen strukturieren: Produkt, Leistung, Palettenbild, Layout, Sicherheit, Optionen und offene Risiken.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Angebotsqualifizierung für robotergestützte Palettieranlagen',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Angebotsqualifizierung für Palettieranlagen',
      description:
        'RFQ für robotergestützte Palettieranlagen strukturieren: Produkt, Leistung, Palettenbild, Layout, Sicherheit, Optionen und offene Risiken.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Angebotsqualifizierung für robotergestützte Palettieranlagen',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Branchen' },
    { label: 'Palettieranlagen', path: '/branchen/palettieranlagen/' },
  ],
  hero: {
    kicker: 'Maschinenfamilien · Palettieranlagen',
    h1: 'Angebotsqualifizierung für robotergestützte Palettieranlagen',
    lead:
      'Robotergestütztes Palettieren kann als Pilot geeignet sein, wenn Produkt, Palettensystem, Leistung, Layout und Optionen innerhalb eines bekannten technischen Rahmens liegen. Der Copilot bereitet die Anfrage vor und blockiert Fälle, die neue Simulation oder Konstruktion benötigen.',
    primaryCta: {
      label: 'RFQ Readiness Workshop ansehen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-hero',
    },
  },
  sections: [
    {
      id: 'rahmen',
      heading: 'Eingeschlossener technischer Rahmen',
      points: [
        'geschlossene Kartons oder starre Trays;',
        'bekannte Abmessungen und Gewichte;',
        'definierte SKU oder chargenweiser Betrieb;',
        'freigegebene Palettentypen;',
        'bekannte Palettenmuster oder Regelklassen;',
        'ein oder zwei Zuführungen;',
        'ein oder zwei Palettenplätze;',
        'trockene Industrieumgebung;',
        'bekannte Steuerungs- und Sicherheitsstandards.',
      ],
      layout: 'list',
    },
    {
      id: 'anfragedaten',
      heading: 'Daten, die die Anfrage benötigt',
      items: [
        { title: 'Abmessungen, Gewicht und Fotos des Packstücks.' },
        { title: 'Stabilität, Oberfläche und Schwerpunkt.' },
        { title: 'Nennleistung und Spitzenleistung.' },
        { title: 'Anzahl der Formate und Wechselstrategie.' },
        { title: 'Palettentypen und maximale Höhe.' },
        { title: 'Muster, Orientierung und Überstand.' },
        { title: 'Zwischenlagen, Trays oder Kantenschutz.' },
        { title: 'Einlaufhöhe, Richtung und Geschwindigkeit.' },
        { title: 'Abtransport der vollen Palette.' },
        { title: 'Layout, Säulen, Türen und Wartungszugang.' },
        { title: 'Umgebung, Temperatur, Staub und Reinigung.' },
        { title: 'PLC, HMI, Signale und Datenübergabe.' },
        { title: 'Sicherheitskonzept.' },
        { title: 'Installation, FAT, SAT und Schulung.' },
        { title: 'Land und Termin der Inbetriebnahme.' },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'budgetmodule',
      heading: 'Mögliche Budgetmodule',
      points: [
        'Basiszelle;',
        'Roboterklasse;',
        'Greiferklasse;',
        'Produktzuführung;',
        'Palettenfördertechnik;',
        'Palettenspender;',
        'Zwischenlagenmagazin;',
        'Sicherheit;',
        'Steuerung und HMI;',
        'Montage und Inbetriebnahme;',
        'Logistik;',
        'freigegebene Risikoreserve.',
      ],
      layout: 'list',
    },
    {
      id: 'ausschluesse',
      heading: 'Ausschlüsse des ersten Piloten',
      points: [
        'zufälliges Mischpalettieren;',
        'Säcke oder deformierbare Produkte;',
        'offene Gebinde mit beweglichem Inhalt;',
        'extrem fragile Produkte;',
        '3D-Vision oder Bin Picking;',
        'ATEX, Cleanroom oder Washdown;',
        'pharmazeutische Validierung;',
        'mehrere hochsynchrone Linien;',
        'Layouts, die eine neue Kinematik oder Simulation erfordern.',
      ],
      layout: 'list',
    },
    {
      id: 'blockierlogik',
      heading: 'Blockierlogik',
      paragraphs: [
        'Wenn Produktstabilität, Leistung, Layout oder Greifkonzept außerhalb der freigegebenen Klassen liegen, darf keine Budgetbasis erzeugt werden. Der Fall wird mit dem Grund an Engineering übergeben.',
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
        {
          label: 'Angebotsprozesse für End-of-Line-Anlagen',
          href: '/branchen/end-of-line/',
        },
      ],
      callout:
        'Wenn eine Regel fehlt, wird nicht geschätzt. Der Vertriebsingenieur oder Engineering prüft den Fall.',
      layout: 'text',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zur Angebotsqualifizierung für Palettieranlagen',
    items: [
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
    heading: 'Den technischen Rahmen einer Palettierfamilie prüfen',
    body: 'Der Workshop grenzt Produkte, Palettensystem, Leistung, Layout, Optionen und Blockierfälle für einen möglichen internen Pilot ab.',
    action: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
    note: 'Fälle außerhalb der freigegebenen Klassen werden ohne Budgetbasis an Engineering übergeben.',
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
