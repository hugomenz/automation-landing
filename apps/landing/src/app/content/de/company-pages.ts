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
        'Technische Anfragen und Angebotsprozesse für Maschinenbauer in Stuttgart und Baden-Württemberg strukturiert digitalisieren.',
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
        'Technische Anfragen und Angebotsprozesse für Maschinenbauer in Stuttgart und Baden-Württemberg strukturiert digitalisieren.',
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
      'Von Stuttgart aus unterstütze ich Maschinenbauer, Sondermaschinenbauer und Automatisierer dabei, technische Anfragen für eine klar abgegrenzte Maschinenfamilie strukturiert zu qualifizieren, remote oder nach Vereinbarung vor Ort in Baden-Württemberg.',
    primaryCta: {
      label: 'Pilot-Eignung prüfen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-hero',
    },
    secondaryCta: {
      label: 'Technische Anfragequalifizierung ansehen',
      href: '/loesungen/technische-anfragequalifizierung/',
      dataCta: 'solution-hero',
    },
  },
  sections: [
    {
      id: 'zusammenarbeit',
      heading: 'Lokale Zusammenarbeit, klarer technischer Umfang',
      paragraphs: [
        'Der Einstieg erfolgt nicht mit einer großen Transformationsinitiative. Ich grenze mit Ihnen einen konkreten Angebotsprozess ein, prüfe Daten und Regeln und bewerte, ob ein interner Pilot sinnvoll ist.',
      ],
      layout: 'text',
    },
    {
      id: 'zielgruppe',
      heading: 'Für wen der Ansatz gedacht ist',
      points: [
        'Maschinen- und Sondermaschinenbauer mit wiederkehrenden Lösungsfamilien;',
        'Anlagenbauer und Automatisierer mit klar beschreibbaren Anwendungen;',
        'technische Vertriebsteams mit hohem Vorbereitungsaufwand;',
        'Unternehmen mit nutzbaren Modulen, Regeln, Tabellen oder historischen Anfragen;',
        'Unternehmen, die vor einem größeren CPQ-Projekt klein und kontrolliert beginnen möchten.',
      ],
      layout: 'list',
    },
    {
      id: 'arbeitsweise',
      heading: 'So kann die Zusammenarbeit aussehen',
      points: [
        'Vorab-Fit-Check per Videocall.',
        'Workshop remote oder nach Vereinbarung vor Ort.',
        'Prüfung historischer Fälle in einer abgesicherten Umgebung.',
        'Pilot im Schattenbetrieb mit menschlicher Freigabe.',
        'Direkter Kontakt von der Analyse bis zur möglichen Umsetzung.',
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
    heading: 'Eine Maschinenfamilie regional oder remote prüfen',
    body:
      'Der RFQ Readiness Workshop klärt Maschinenfamilie, heutigen Angebotsprozess, Daten, Regeln und technische Grenzen.',
    action: {
      label: 'Pilot-Eignung prüfen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-final',
    },
  },
  schemaKinds: ['ProfessionalService', 'BreadcrumbList'],
} as const satisfies PageDefinition;

export const ABOUT_HUGO_MENZ = {
  key: 'about-hugo-menz',
  path: '/ueber-hugo-menz/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Über Hugo Menz | Maschinenbau und Prozessautomatisierung',
    description:
      'Maschinenbauingenieur aus Stuttgart mit rund acht Jahren Erfahrung im Sondermaschinenbau und praktischer Erfahrung mit APIs und Automatisierung.',
    canonicalPath: '/ueber-hugo-menz/',
    robots: 'index,follow',
    openGraph: {
      title: 'Über Hugo Menz: Maschinenbau und Prozessautomatisierung',
      description:
        'Erfahrung aus dem Sondermaschinenbau und der Industrieautomation trifft praktische digitale Prozessautomatisierung.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Maschinenbau-Erfahrung und digitale Prozessautomatisierung bei Hugo Menz',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Über Hugo Menz: Maschinenbau und Prozessautomatisierung',
      description:
        'Erfahrung aus dem Sondermaschinenbau und der Industrieautomation trifft praktische digitale Prozessautomatisierung.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Maschinenbau-Erfahrung und digitale Prozessautomatisierung bei Hugo Menz',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Über Hugo Menz', path: '/ueber-hugo-menz/' },
  ],
  hero: {
    kicker: 'Maschinenbau · Automatisierung · Stuttgart',
    h1: 'Maschinenbau-Erfahrung trifft digitale Prozessautomatisierung',
    lead:
      'Ich verbinde rund acht Jahre Erfahrung im Sondermaschinenbau und in der Industrieautomation mit praktischer Erfahrung in Webtechnologien, APIs und Automatisierung. Mein Schwerpunkt liegt auf klar abgegrenzten digitalen Prozessen, die technische Arbeit vorbereiten und nachvollziehbar unterstützen.',
    primaryCta: {
      label: 'Pilot-Eignung prüfen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-hero',
    },
    secondaryCta: {
      label: 'Wie sich beides verbindet',
      href: '#kombination',
      dataCta: 'combination-hero',
    },
    portrait: {
      src: '/hugo.jfif',
      alt: 'Porträt von Hugo Martin Menz',
      width: 400,
      height: 400,
    },
  },
  sections: [
    {
      id: 'maschinenbau',
      eyebrow: 'Industrieller Hintergrund',
      heading: 'Rund acht Jahre im Sondermaschinenbau und in der Industrieautomation',
      paragraphs: [
        'Mein beruflicher Schwerpunkt lag auf der Konstruktion und Entwicklung kundenspezifischer Maschinen sowie der technischen Koordination bis zur Umsetzung.',
      ],
      points: [
        'mechanische Konstruktion und technische Dokumentation;',
        'Stücklisten, Einkauf und Lieferantenkoordination;',
        'Abstimmung mit Mechanik, Elektrik, Montage und Inbetriebnahme;',
        'Kommunikation mit Kunden und internen Fachbereichen;',
        'Projektabwicklung, Änderungen, Risiken und Abhängigkeiten.',
      ],
      layout: 'list',
    },
    {
      id: 'automatisierung',
      eyebrow: 'Praktische Umsetzung',
      heading: 'Rund drei Jahre mit Webtechnologien, APIs und Automatisierung',
      paragraphs: [
        'Für digitale Abläufe arbeite ich praktisch mit Angular, TypeScript, APIs, Webhooks, n8n, Make und Automatisierung. Entscheidend ist dabei nicht das Werkzeug, sondern ein klarer Prozess mit nachvollziehbaren Regeln und Übergaben.',
      ],
      points: [
        'strukturierte Datenflüsse und Dokumentenverarbeitung;',
        'API- und Webhook-Integrationen;',
        'Prüf-, Fehler- und Freigabelogik;',
        'Human-in-the-loop-Workflows;',
        'nachvollziehbare Übergaben zwischen Menschen und Systemen.',
      ],
      layout: 'list',
    },
    {
      id: 'kombination',
      eyebrow: 'Verbindung',
      heading: 'Technische Prozesse verstehen und sinnvoll automatisieren',
      paragraphs: [
        'Für technische Angebotsprozesse reicht es nicht, Dokumente zu lesen oder Systeme zu verbinden. Zuerst muss verstanden werden, welche Angaben eine Maschinenfamilie tatsächlich benötigt, welche Regeln belastbar sind und wann Vertrieb oder Engineering übernehmen müssen.',
      ],
      columns: [
        {
          heading: 'Fachliche Einordnung',
          points: [
            'Anforderungen, Module und technische Grenzen verstehen.',
            'Fakten, Annahmen, Risiken und Quellen trennen.',
            'Fälle erkennen, die neue Konstruktion oder Versuche brauchen.',
          ],
        },
        {
          heading: 'Kontrollierte Umsetzung',
          points: [
            'Informationen in ein freigegebenes Schema überführen.',
            'bekannte Regeln deterministisch anwenden.',
            'offene Punkte sichtbar an Fachleute zurückgeben.',
          ],
        },
      ],
      layout: 'comparison',
    },
    {
      id: 'probleme',
      eyebrow: 'Schwerpunkt',
      heading: 'Bei welchen Problemen ich im Angebotsprozess unterstütze',
      items: [
        {
          title: 'Verteilte Kundeninformationen',
          body: 'E-Mails, Lastenhefte, PDFs, Fotos und Notizen in eine gemeinsame Anforderungsakte überführen.',
        },
        {
          title: 'Fehlende Angaben und Widersprüche',
          body: 'Offene Punkte, Annahmen und technische Risiken vor der Budgetindikation sichtbar machen.',
        },
        {
          title: 'Regelbasierte Budgetvorbereitung',
          body: 'Freigegebene Module, Tabellen, Faktoren und Formeln kontrolliert anwenden.',
        },
        {
          title: 'Übergaben an Vertrieb und Engineering',
          body: 'Einen prüfbaren Stand mit Quellen, Rückfragen und klaren Verantwortlichkeiten vorbereiten.',
        },
      ],
      layout: 'cards',
    },
    {
      id: 'arbeitsprinzipien',
      eyebrow: 'Arbeitsprinzipien',
      heading: 'Klarer Umfang statt scheinbarer Vollautomatisierung',
      points: [
        'Eine Maschinenfamilie statt das ganze Portfolio.',
        'Fakten und Quellen statt scheinbarer Sicherheit.',
        'Freigegebene Regeln statt erfundener Preise.',
        'Pilot im Schattenbetrieb statt sofortiger Kundenkontakt.',
        'Ein begründetes No-Go ist ein valides Ergebnis.',
      ],
      layout: 'list',
    },
  ],
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Eine Maschinenfamilie statt das ganze Portfolio prüfen',
    body:
      'Der RFQ Readiness Workshop grenzt den technischen Umfang ab und kann mit einer Empfehlung für Go, Go mit Bedingungen oder No-Go enden.',
    action: {
      label: 'Pilot-Eignung prüfen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-final',
    },
    note: 'Sie sprechen direkt mit mir, von der Einordnung bis zu einer möglichen Umsetzung.',
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
      'Besprechen Sie eine Maschinenfamilie, Ihren heutigen Angebotsprozess und die Voraussetzungen für einen begrenzten internen RFQ-Pilot.',
    canonicalPath: '/kontakt/',
    robots: 'index,follow',
    openGraph: {
      title: 'Pilot-Eignung für einen technischen Angebotsprozess prüfen',
      description:
        'Maschinenfamilie, Anfragevolumen, Angebotsprozess, beteiligte Rollen und den größten Engpass einordnen.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Kontakt zu Hugo Menz für die Prüfung einer Maschinenfamilie',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Pilot-Eignung für einen technischen Angebotsprozess prüfen',
      description:
        'Maschinenfamilie, Anfragevolumen, Angebotsprozess, beteiligte Rollen und den größten Engpass einordnen.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Kontakt zu Hugo Menz für die Prüfung einer Maschinenfamilie',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Kontakt', path: '/kontakt/' },
  ],
  hero: {
    kicker: 'Kontakt · RFQ-Pilot · Maschinenfamilie',
    h1: 'Eignung einer Maschinenfamilie für einen RFQ-Pilot prüfen',
    lead:
      'Beschreiben Sie kurz die Maschinenfamilie und den heutigen Angebotsprozess. Für die erste Einordnung reichen nicht vertrauliche Rahmendaten.',
    primaryCta: {
      label: 'Pilot-Eignung prüfen',
      href: '#contact-form',
      dataCta: 'readiness-hero',
      contactContext: 'rfq',
    },
  },
  sections: [
    {
      id: 'contact-form',
      heading: 'Diese Angaben helfen bei der ersten Einordnung',
      points: [
        'Maschinenfamilie oder klar abgegrenzte Lösungsfamilie;',
        'ungefähres Anfragevolumen;',
        'heutiger Angebotsprozess;',
        'beteiligte Rollen in Vertrieb und Engineering;',
        'größter Engpass vor der ersten Budgetindikation.',
      ],
      paragraphs: [
        'Bitte senden Sie im ersten Kontakt keine vertraulichen Lastenhefte, Zeichnungen oder Kundendaten. Der Umgang mit Dokumenten wird vor einer Analyse separat vereinbart.',
      ],
      layout: 'contact',
    },
    {
      id: 'erwartungsmanagement',
      heading: 'Was im ersten Schritt geprüft wird',
      paragraphs: [
        'Der erste Schritt ist keine Produktdemo und keine automatische Kalkulation. Ziel ist zu klären, ob genügend Wiederholbarkeit, Daten und Regeln für einen begrenzten RFQ Readiness Workshop vorhanden sind.',
      ],
      links: [
        {
          label: 'RFQ Readiness Workshop ansehen',
          href: '/leistungen/rfq-readiness-workshop/',
        },
        {
          label: 'Technische Anfragequalifizierung ansehen',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
      ],
      layout: 'text',
    },
    {
      id: 'alternative-kontaktwege',
      heading: 'Alternativer Kontaktweg',
      paragraphs: [
        'Wenn Sie zunächst ausschließlich öffentlich verfügbare Informationen teilen möchten, können Sie mich auch über mein bestehendes LinkedIn-Profil kontaktieren.',
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
    heading: 'Maschinenfamilie und Angebotsprozess kurz beschreiben',
    body:
      'Nennen Sie Maschinenfamilie, ungefähres Anfragevolumen, beteiligte Rollen, heutigen Angebotsprozess und den größten Engpass.',
    action: {
      label: 'Pilot-Eignung prüfen',
      href: '#contact-form',
      dataCta: 'readiness-final',
      contactContext: 'rfq',
    },
    note: 'Keine Datei-Uploads. Bitte senden Sie noch keine vertraulichen Kundendaten.',
  },
  schemaKinds: ['ContactPage', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
