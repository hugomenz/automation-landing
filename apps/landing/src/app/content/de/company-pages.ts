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
      'Von Stuttgart aus unterstütze ich kleine und mittlere Maschinenbauer dabei, technische Anfragen in einem klar abgegrenzten Angebotsprozess zu qualifizieren, unabhängig vom Maschinentyp.',
    primaryCta: {
      label: 'RFQ Readiness Workshop ansehen',
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
        'kleine und mittlere Maschinenbauer mit wiederkehrender Angebotsarbeit;',
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
    heading: 'Einen technischen Angebotsprozess regional oder remote prüfen',
    body:
      'Der RFQ Readiness Workshop klärt Angebotsprozess, Daten, Regeln und technische Grenzen.',
    action: {
      label: 'RFQ Readiness Workshop ansehen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-final',
    },
  },
  schemaKinds: ['Service', 'BreadcrumbList'],
} as const satisfies PageDefinition;

export const ABOUT_HUGO_MENZ = {
  key: 'about-hugo-menz',
  path: '/ueber-hugo-menz/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Über Hugo Menz | Maschinenbau-Erfahrung für RFQ-Prozesse',
    description:
      'Hugo Menz verbindet rund acht Jahre im Sondermaschinenbau und in der Industrieautomation mit UX Engineering für prüfbare technische Angebotsprozesse.',
    canonicalPath: '/ueber-hugo-menz/',
    robots: 'index,follow',
    openGraph: {
      title: 'Über Hugo Menz: Maschinenbau-Erfahrung und UX Engineering',
      description:
        'Industrieerfahrung und UX Engineering für prüfbare technische Anfrage- und Angebotsprozesse.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Maschinenbau-Erfahrung und digitale Prozessautomatisierung bei Hugo Menz',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Über Hugo Menz: Maschinenbau-Erfahrung und UX Engineering',
      description:
        'Industrieerfahrung und UX Engineering für prüfbare technische Anfrage- und Angebotsprozesse.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Maschinenbau-Erfahrung und digitale Prozessautomatisierung bei Hugo Menz',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Über Hugo Menz', path: '/ueber-hugo-menz/' },
  ],
  hero: {
    kicker: 'Maschinenbau · UX Engineering · technische Angebotsprozesse',
    h1: 'Hugo Menz: Maschinenbau-Erfahrung für prüfbare digitale Angebotsprozesse',
    lead:
      'Ich verbinde Erfahrung aus Sondermaschinenbau und Industrieautomation mit UX Engineering, damit technische Anfragen, Regeln, offene Punkte und Freigaben verständlich und prüfbar bleiben.',
    primaryCta: {
      label: 'RFQ-Fit-Check anfragen',
      href: '#contact-form',
      dataCta: 'contact-hero',
      contactContext: 'rfq',
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
      id: 'heute',
      eyebrow: 'Heute',
      heading: 'UX Engineering für prüfbare digitale Abläufe',
      paragraphs: [
        'Heute gestalte ich digitale Produkte und Prozesse so, dass Menschen komplexe technische Informationen verstehen, Quellen und Annahmen prüfen und Freigaben bewusst erteilen können.',
      ],
      layout: 'text',
    },
    {
      id: 'maschinenbau',
      eyebrow: 'Industrieller Hintergrund',
      heading: 'Zuvor: rund acht Jahre im Sondermaschinenbau und in der Industrieautomation',
      paragraphs: [
        'Vor meinem Wechsel in die Softwareentwicklung und Digitalisierung arbeitete ich an der Konstruktion und Entwicklung kundenspezifischer Maschinen sowie an der technischen Koordination bis zur Umsetzung.',
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
      id: 'wechsel',
      eyebrow: 'Beruflicher Wechsel',
      heading: 'Von der mechanischen Konstruktion in die Softwareentwicklung',
      paragraphs: [
        'Danach wechselte ich in die Softwareentwicklung und Digitalisierung. Heute verbinde ich diesen Hintergrund mit meiner Arbeit als UX Engineer.',
      ],
      layout: 'text',
    },
    {
      id: 'kombination',
      eyebrow: 'Verbindung',
      heading: 'Was diese Kombination im Projekt bringt',
      paragraphs: [
        'Ich erkenne technische Abhängigkeiten und operative Grenzen früh und übersetze sie in einen verständlichen digitalen Ablauf.',
      ],
      columns: [
        {
          heading: 'Technische Einordnung',
          points: [
            'Anforderungen, Rollen und Grenzen verstehen.',
            'Risiken und Ausnahmen früh erkennen.',
            'Verantwortlichkeiten realistisch abbilden.',
          ],
        },
        {
          heading: 'Nutzbare Umsetzung',
          points: [
            'Informationen auf Entscheidungen reduzieren.',
            'Schritte und Status verständlich darstellen.',
            'Sonderfälle an die richtige Person übergeben.',
          ],
        },
      ],
      links: [
        {
          label: 'Technische Anfragequalifizierung im Maschinenbau',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
        {
          label: 'Kontrollen im internen RFQ-Copiloten',
          href: '/leistungen/interner-rfq-copilot/',
        },
        {
          label: 'RFQ Readiness Workshop',
          href: '/leistungen/rfq-readiness-workshop/',
        },
      ],
      layout: 'comparison',
    },
    {
      id: 'probleme',
      eyebrow: 'Schwerpunkt',
      heading: 'Welche RFQ-Aufgaben ich verständlicher und prüfbarer mache',
      items: [
        {
          title: 'Technische Anfragen strukturieren',
          body: 'E-Mails, Lastenhefte, PDFs und Fotos in eine nachvollziehbare Anforderungsakte überführen.',
        },
        {
          title: 'Lücken und Widersprüche sichtbar machen',
          body: 'Fehlende Pflichtdaten, abweichende Werte, Annahmen und Risiken vor der Kalkulation kennzeichnen.',
        },
        {
          title: 'Freigegebene Regeln kontrolliert anwenden',
          body: 'Nur dokumentierte Module, Tabellen, Faktoren und Formeln für interne Budgetschritte zulassen.',
        },
        {
          title: 'Menschliche Freigaben unterstützen',
          body: 'Quellen, Status, offene Entscheidungen und Blockiergründe für Vertrieb und Engineering verständlich darstellen.',
        },
      ],
      layout: 'cards',
    },
  ],
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'RFQ-Fit-Check für einen Angebotsprozess anfragen',
    body:
      'Beschreiben Sie Anfragevolumen, beteiligte Rollen und den größten Engpass. Für die erste Einschätzung sind keine vertraulichen Dokumente erforderlich.',
    action: {
      label: 'RFQ-Fit-Check anfragen',
      href: '#contact-form',
      dataCta: 'contact-final',
      contactContext: 'rfq',
    },
    note: 'Sie sprechen direkt mit mir.',
  },
  schemaKinds: ['Person', 'BreadcrumbList'],
} as const satisfies PageDefinition;

export const CONTACT = {
  key: 'contact',
  path: '/kontakt/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'RFQ-Fit-Check für Maschinenbauer | Kontakt zu Hugo Menz',
    description:
      'Besprechen Sie Ihren technischen Angebotsprozess und die Voraussetzungen für einen begrenzten internen RFQ-Pilot.',
    canonicalPath: '/kontakt/',
    robots: 'index,follow',
    openGraph: {
      title: 'RFQ-Fit-Check für einen technischen Angebotsprozess',
      description:
        'Anfragevolumen, Angebotsprozess, beteiligte Rollen und den größten Engpass einordnen.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Kontakt zu Hugo Menz für die Prüfung eines technischen Angebotsprozesses',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'RFQ-Fit-Check für einen technischen Angebotsprozess',
      description:
        'Anfragevolumen, Angebotsprozess, beteiligte Rollen und den größten Engpass einordnen.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'Kontakt zu Hugo Menz für die Prüfung eines technischen Angebotsprozesses',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Kontakt', path: '/kontakt/' },
  ],
  hero: {
    kicker: 'Kontakt · RFQ-Pilot · Angebotsprozess',
    h1: 'RFQ-Fit-Check für Ihren technischen Angebotsprozess',
    lead:
      'Beschreiben Sie kurz den heutigen Angebotsprozess und, falls relevant, den Produktbereich, Maschinentyp oder die Lösungsfamilie. Nicht vertrauliche Rahmendaten reichen aus.',
    primaryCta: {
      label: 'RFQ-Fit-Check anfragen',
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
        'heutiger technischer Angebotsprozess und größter Engpass;',
        'Produktbereich, Maschinentyp oder Lösungsfamilie, falls relevant;',
        'ungefähres Anfragevolumen;',
        'beteiligte Rollen in Vertrieb und Engineering;',
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
    heading: 'Angebotsprozess kurz beschreiben',
    body:
      'Nennen Sie ungefähres Anfragevolumen, beteiligte Rollen, heutigen Angebotsprozess und den größten Engpass.',
    action: {
      label: 'RFQ-Fit-Check anfragen',
      href: '#contact-form',
      dataCta: 'readiness-final',
      contactContext: 'rfq',
    },
    note: 'Keine Datei-Uploads. Bitte senden Sie noch keine vertraulichen Kundendaten.',
  },
  schemaKinds: ['ContactPage', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
