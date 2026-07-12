import type { PageDefinition } from '../page.types';

export const STUTTGART = {
  key: 'stuttgart',
  path: '/standorte/stuttgart/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Angebotsprozess-Automatisierung für Maschinenbauer in Stuttgart | Hugo Menz',
    description:
      'Technische Anfragen, Lastenhefte und Angebotsprozesse für Maschinenbauer in Stuttgart und Baden-Württemberg strukturiert digitalisieren.',
    canonicalPath: '/standorte/stuttgart/',
    robots: 'index,follow',
    openGraph: {
      title: 'Angebotsprozess-Automatisierung für Maschinenbauer in Stuttgart',
      description:
        'Technische Anfragen, Lastenhefte und Angebotsprozesse für Maschinenbauer in Stuttgart und Baden-Württemberg strukturiert digitalisieren.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Technische Angebotsprozesse für Maschinenbauer in Stuttgart',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Angebotsprozess-Automatisierung für Maschinenbauer in Stuttgart',
      description:
        'Technische Anfragen, Lastenhefte und Angebotsprozesse für Maschinenbauer in Stuttgart und Baden-Württemberg strukturiert digitalisieren.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Technische Angebotsprozesse für Maschinenbauer in Stuttgart',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Standorte' },
    { label: 'Stuttgart', path: '/standorte/stuttgart/' },
  ],
  hero: {
    kicker: 'Stuttgart · Baden-Württemberg · Remote',
    h1: 'Angebotsprozess-Automatisierung für Maschinenbauer in Stuttgart',
    lead:
      'Von Stuttgart aus unterstütze ich Maschinenbauer und Automatisierer dabei, technische Anfragen für einen klar abgegrenzten Maschinentyp oder Angebotsbereich strukturiert zu qualifizieren – remote oder nach Vereinbarung vor Ort in Baden-Württemberg.',
    primaryCta: {
      label: 'Pilot-Eignung prüfen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-hero',
    },
  },
  sections: [
    {
      id: 'zusammenarbeit',
      heading: 'Lokale Zusammenarbeit, klarer technischer Umfang',
      paragraphs: [
        'Der Einstieg erfolgt nicht mit einer großen Transformationsinitiative. Wir wählen einen konkreten Angebotsprozess, prüfen Daten und Regeln und entscheiden, ob ein interner Pilot sinnvoll ist.',
      ],
      links: [
        {
          label: 'Technische Anfragequalifizierung im Maschinenbau',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
      ],
      layout: 'text',
    },
    {
      id: 'zielgruppe',
      heading: 'Für wen der Ansatz gedacht ist',
      points: [
        'Sondermaschinenbauer mit wiederkehrenden Lösungsfamilien;',
        'Hersteller von End-of-Line- oder Verpackungstechnik;',
        'Automatisierer mit einer klar standardisierten Anwendung;',
        'technische Vertriebsteams mit hohem Vorbereitungsaufwand;',
        'Unternehmen, die noch nicht bereit für ein vollständiges CPQ-Projekt sind.',
      ],
      layout: 'list',
    },
    {
      id: 'arbeitsweise',
      heading: 'So kann die Zusammenarbeit aussehen',
      points: [
        'Vorab-Fit-Check per Videocall.',
        'Workshop remote oder nach Vereinbarung vor Ort.',
        'Analyse von Beispielen in einer abgesicherten Umgebung.',
        'Prototyp und Pilot in kurzen, nachvollziehbaren Schritten.',
        'Direkter Kontakt zur Person, die analysiert und umsetzt.',
      ],
      links: [
        { label: 'Über Hugo Menz', href: '/ueber-hugo-menz/' },
        {
          label: 'RFQ Readiness Workshop',
          href: '/leistungen/rfq-readiness-workshop/',
        },
      ],
      layout: 'list',
    },
    {
      id: 'region',
      heading: 'Region',
      paragraphs: [
        'Schwerpunkt ist Stuttgart und Baden-Württemberg. Remote-Zusammenarbeit ist innerhalb Deutschlands und DACH möglich. Konkrete Vor-Ort-Termine und Reisekosten werden vorab vereinbart.',
      ],
      layout: 'text',
    },
  ],
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Einen Anwendungsfall regional oder remote besprechen',
    body: 'Der Fit-Check klärt zunächst Anwendungsfall, heutigen RFQ-Prozess, Daten, Regeln und technische Grenzen.',
    action: {
      label: 'Anwendungsfall aus Stuttgart oder Baden-Württemberg besprechen',
      href: '/kontakt/',
      dataCta: 'contact-final',
    },
    note: 'Vor-Ort-Termine werden nach Vereinbarung geplant; es wird keine öffentlich zugängliche Niederlassung behauptet.',
  },
  schemaKinds: ['ProfessionalService', 'BreadcrumbList'],
} as const satisfies PageDefinition;

export const ABOUT_HUGO_MENZ = {
  key: 'about-hugo-menz',
  path: '/ueber-hugo-menz/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Über Hugo Menz | Maschinenbau, Webentwicklung und Automatisierung',
    description:
      'Maschinenbauingenieur und Webentwickler aus Stuttgart mit Erfahrung in Sondermaschinenbau, Konstruktion, APIs und Automatisierung.',
    canonicalPath: '/ueber-hugo-menz/',
    robots: 'index,follow',
    openGraph: {
      title: 'Über Hugo Menz: Maschinenbau und Webentwicklung',
      description:
        'Maschinenbauingenieur und Webentwickler aus Stuttgart mit Erfahrung in Sondermaschinenbau, Konstruktion, APIs und Automatisierung.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Hugo Martin Menz, Maschinenbauingenieur und Webentwickler in Stuttgart',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Über Hugo Menz: Maschinenbau und Webentwicklung',
      description:
        'Maschinenbauingenieur und Webentwickler aus Stuttgart mit Erfahrung in Sondermaschinenbau, Konstruktion, APIs und Automatisierung.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Hugo Martin Menz, Maschinenbauingenieur und Webentwickler in Stuttgart',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Über Hugo Menz', path: '/ueber-hugo-menz/' },
  ],
  hero: {
    kicker: 'Über Hugo Menz',
    h1: 'Maschinenbau-Erfahrung trifft Webentwicklung und Automatisierung',
    lead:
      'Ich verbinde rund acht Jahre Erfahrung in Sondermaschinenbau und industrieller Projektarbeit mit rund drei Jahren Webentwicklung und Automatisierung.',
    portrait: {
      src: '/hugo.jfif',
      alt: 'Hugo Martin Menz, Maschinenbauingenieur und Webentwickler in Stuttgart',
      width: 640,
      height: 480,
    },
  },
  sections: [
    {
      id: 'maschinenbau',
      heading: 'Erfahrung im Maschinenbau',
      points: [
        'mechanische Konstruktion;',
        'Stücklisten und technische Dokumentation;',
        'Abstimmung mit Einkauf und Lieferanten;',
        'Projektkoordination;',
        'Kommunikation zwischen Kunde, Mechanik, Elektrik, Montage und Inbetriebnahme;',
        'Verständnis für technische Risiken, Annahmen und Änderungen.',
      ],
      layout: 'list',
    },
    {
      id: 'software',
      heading: 'Erfahrung in Software und Automatisierung',
      points: [
        'TypeScript und Angular;',
        'APIs und Webhooks;',
        'n8n und Make;',
        'interne Web-Tools;',
        'strukturierte Datenflüsse;',
        'Human-in-the-loop-Workflows;',
        'nachvollziehbare Fehler- und Freigabelogik.',
      ],
      layout: 'list',
    },
    {
      id: 'kombination',
      heading: 'Warum diese Kombination für RFQ-Prozesse wichtig ist',
      paragraphs: [
        'Ein technischer Angebotsprozess lässt sich nicht allein durch einen Chatbot oder eine Integration verbessern. Zuerst muss verstanden werden, welche Informationen der ausgewählte Maschinentyp tatsächlich benötigt, welche Regeln belastbar sind und welche Entscheidungen bei erfahrenen Menschen bleiben.',
      ],
      links: [
        {
          label: 'Technische Anfragequalifizierung im Maschinenbau',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
      ],
      layout: 'text',
    },
    {
      id: 'arbeitsprinzipien',
      heading: 'Arbeitsprinzipien',
      points: [
        'Ein klarer Anwendungsfall statt das ganze Portfolio.',
        'Fakten und Quellen statt scheinbarer Sicherheit.',
        'Freigegebene Regeln statt erfundener Preise.',
        'Pilot im Schattenbetrieb statt sofortiger Kundenkontakt.',
        'Ein begründetes No-Go ist ein valides Ergebnis.',
      ],
      layout: 'list',
    },
    {
      id: 'zusammenarbeit',
      heading: 'Zusammenarbeit',
      paragraphs: [
        'Sie sprechen direkt mit mir – von der Analyse bis zur technischen Umsetzung. Wo Spezialwissen, rechtliche Prüfung oder Security-Audits nötig sind, wird das transparent als eigene Abhängigkeit benannt.',
      ],
      links: [
        {
          label: 'Angebotsprozess-Automatisierung in Stuttgart',
          href: '/standorte/stuttgart/',
        },
        { label: 'Kontakt zu Hugo Menz', href: '/kontakt/' },
      ],
      layout: 'text',
    },
  ],
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Einen Anwendungsfall statt das ganze Portfolio prüfen',
    body: 'Der Workshop grenzt den technischen Umfang ab und kann mit einer Empfehlung für Go, Go mit Bedingungen oder No-Go enden.',
    action: {
      label: 'RFQ Readiness Workshop ansehen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-final',
    },
    note: 'Sie sprechen direkt mit mir – von der Analyse bis zur technischen Umsetzung.',
  },
  schemaKinds: ['Person', 'BreadcrumbList'],
} as const satisfies PageDefinition;

export const CONTACT = {
  key: 'contact',
  path: '/kontakt/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Pilot-Eignung prüfen | Kontakt zu Hugo Menz',
    description:
      'Besprechen Sie einen wiederkehrenden Maschinentyp oder Angebotsbereich, Ihren heutigen RFQ-Prozess und die Voraussetzungen für einen begrenzten internen Pilot.',
    canonicalPath: '/kontakt/',
    robots: 'index,follow',
    openGraph: {
      title: 'Pilot-Eignung prüfen',
      description:
        'Besprechen Sie einen wiederkehrenden Maschinentyp oder Angebotsbereich, Ihren heutigen RFQ-Prozess und die Voraussetzungen für einen begrenzten internen Pilot.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Kontakt zu Hugo Menz für die Prüfung eines technischen Anwendungsfalls',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Pilot-Eignung prüfen',
      description:
        'Besprechen Sie einen wiederkehrenden Maschinentyp oder Angebotsbereich, Ihren heutigen RFQ-Prozess und die Voraussetzungen für einen begrenzten internen Pilot.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Kontakt zu Hugo Menz für die Prüfung eines technischen Anwendungsfalls',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Kontakt', path: '/kontakt/' },
  ],
  hero: {
    kicker: 'Kontakt · Pilot-Eignung',
    h1: 'Eignung für einen Pilot prüfen',
    lead:
      'Beschreiben Sie kurz den wiederkehrenden Maschinentyp oder Angebotsbereich und den heutigen Angebotsprozess. Ich prüfe zunächst, ob ein RFQ Readiness Workshop sinnvoll ist. Sie müssen im ersten Kontakt keine vertraulichen Kundendokumente hochladen.',
    primaryCta: {
      label: 'Pilot-Eignung beschreiben',
      href: '#contact-form',
      dataCta: 'contact-hero',
    },
  },
  sections: [
    {
      id: 'contact-form',
      heading: 'Pilot-Eignung beschreiben',
      paragraphs: [
        'Hilfreich sind: typischer Maschinentyp oder Anwendungsbereich, ungefähres Anfragevolumen, beteiligte Rollen und der größte Engpass.',
        'Bitte senden Sie im ersten Kontakt keine vertraulichen Lastenhefte, Zeichnungen oder Kundendaten. Der Umgang mit Dokumenten wird vor einer Analyse separat vereinbart.',
      ],
      points: [
        'Name (Unternehmen gern im Nachrichtentext)',
        'E-Mail-Adresse',
        'Telefon, optional',
        'Maschinentyp oder Anwendungsbereich und aktueller Prozess im Nachrichtentext',
        'Keine Datei-Uploads',
      ],
      layout: 'contact',
    },
    {
      id: 'erwartungsmanagement',
      heading: 'Was Sie im ersten Schritt erwarten können',
      paragraphs: [
        'Der erste Schritt ist keine Produktdemo und keine automatische Kalkulation. Ziel ist zu klären, ob genügend Wiederholbarkeit, Daten und Regeln für eine begrenzte Prüfung vorhanden sind.',
      ],
      links: [
        {
          label: 'RFQ Readiness Workshop',
          href: '/leistungen/rfq-readiness-workshop/',
        },
        {
          label: 'Technische Anfragequalifizierung im Maschinenbau',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
      ],
      layout: 'text',
    },
    {
      id: 'alternative-kontaktwege',
      heading: 'Alternative Kontaktwege',
      paragraphs: [
        'Wenn Sie zunächst öffentlich verfügbare Informationen teilen möchten, können Sie mich auch über mein bestehendes LinkedIn-Profil kontaktieren.',
      ],
      links: [
        {
          label: 'LinkedIn-Profil von Hugo Martin Menz',
          href: 'https://www.linkedin.com/in/hugomartin-menz/',
          external: true,
        },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Frage',
    heading: 'Vertrauliche Dokumente im Erstkontakt',
    items: [
      {
        question: 'Können vertrauliche Dokumente im ersten Gespräch hochgeladen werden?',
        answer:
          'Nein. Im ersten Kontakt reichen eine grobe Prozessbeschreibung und nicht vertrauliche Rahmendaten. Der Umgang mit Dokumenten und Daten wird vor einer Analyse separat vereinbart.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Kontakt',
    heading: 'Pilot-Eignung ohne vertrauliche Unterlagen beschreiben',
    body: 'Nennen Sie Maschinentyp oder Anwendungsbereich, ungefähres Anfragevolumen, beteiligte Rollen und den größten Engpass. Die vorhandenen Validierungen und Schutzmechanismen bleiben aktiv.',
    action: {
      label: 'Pilot-Eignung beschreiben',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
    note: 'Keine Datei-Uploads. Bitte senden Sie noch keine Lastenhefte, Zeichnungen oder vertraulichen Kundendaten.',
  },
  schemaKinds: ['ContactPage', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
