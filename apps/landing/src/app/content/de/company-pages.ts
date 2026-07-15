import type { PageDefinition } from '../page.types';

export const STUTTGART = {
  key: 'stuttgart',
  path: '/standorte/stuttgart/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Digitale Prozesse und Automatisierung in Stuttgart | Hugo Menz',
    description:
      'UX Engineering, interne Tools und Prozessautomatisierung aus Stuttgart – für komplexe technische und betriebliche Abläufe.',
    canonicalPath: '/standorte/stuttgart/',
    robots: 'index,follow',
    openGraph: {
      title: 'Digitale Prozesse und Automatisierung in Stuttgart',
      description:
        'Komplexe Abläufe verständlicher, besser bedienbar und sinnvoll automatisierbar machen.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-general-de.png',
      imageAlt: 'UX Engineering für digitale Prozesse, Automatisierung und Integrationen',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Digitale Prozesse und Automatisierung in Stuttgart',
      description:
        'Komplexe Abläufe verständlicher, besser bedienbar und sinnvoll automatisierbar machen.',
      imagePath: '/og-general-de.png',
      imageAlt: 'UX Engineering für digitale Prozesse, Automatisierung und Integrationen',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Standorte' },
    { label: 'Stuttgart', path: '/standorte/stuttgart/' },
  ],
  hero: {
    kicker: 'Stuttgart · Baden-Württemberg · Remote',
    h1: 'Digitale Prozesse und Automatisierung in Stuttgart',
    lead:
      'Von Stuttgart aus unterstütze ich Unternehmen dabei, komplexe digitale Abläufe verständlicher, besser bedienbar und sinnvoll automatisierbar zu machen – remote oder nach Vereinbarung vor Ort in Baden-Württemberg.',
    primaryCta: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-hero',
    },
  },
  sections: [
    {
      id: 'zusammenarbeit',
      heading: 'Mit einem konkreten Prozess beginnen',
      paragraphs: [
        'Zu Beginn grenze ich mit Ihnen einen konkreten Ablauf ab: Wer arbeitet damit, welche Informationen werden benötigt, wo entstehen Rückfragen und welche Systeme sind beteiligt? Daraus ergibt sich ein nachvollziehbarer nächster Schritt statt einer unnötig großen Transformation.',
      ],
      layout: 'text',
    },
    {
      id: 'aufgaben',
      heading: 'Typische Aufgabenstellungen',
      points: [
        'interne Tools und Oberflächen verständlicher gestalten;',
        'Anfragen, Formulare und Dokumente strukturiert erfassen;',
        'manuelle Dateneingaben und wiederkehrende Arbeitsschritte reduzieren;',
        'Freigaben und Übergaben nachvollziehbar abbilden;',
        'E-Mail, CRM, APIs und Fachsysteme verbinden;',
        'technische und administrative Abläufe kontrolliert automatisieren.',
      ],
      layout: 'list',
    },
    {
      id: 'industrieerfahrung',
      heading: 'Industrieerfahrung als fachlicher Vorteil',
      paragraphs: [
        'Meine Erfahrung im Sondermaschinenbau und in der Industrieautomation hilft besonders bei erklärungsbedürftigen Produkten, technischen Dokumenten und Übergaben zwischen Fachbereichen. Sie ist ein Vorteil für komplexe B2B-Prozesse, aber keine Beschränkung auf bestimmte Maschinenarten.',
      ],
      links: [
        {
          label: 'Industriebeispiel: technische Anfragequalifizierung',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
        { label: 'Über meinen Hintergrund', href: '/ueber-hugo-menz/' },
      ],
      layout: 'text',
    },
    {
      id: 'arbeitsweise',
      heading: 'So kann die Zusammenarbeit aussehen',
      points: [
        'unverbindliches Erstgespräch zur Einordnung;',
        'Prozessaufnahme remote oder nach Vereinbarung vor Ort;',
        'klar abgegrenzter Vorschlag für Analyse oder Umsetzung;',
        'direkte Zusammenarbeit von UX-Konzept bis technischer Umsetzung;',
        'Dokumentation und verständliche Übergabe.',
      ],
      layout: 'list',
    },
    {
      id: 'region',
      heading: 'Region und Zusammenarbeit',
      paragraphs: [
        'Mein Standort ist Stuttgart. Remote-Zusammenarbeit ist innerhalb Deutschlands und DACH möglich. Vor-Ort-Termine und mögliche Reisekosten werden vorab abgestimmt.',
      ],
      layout: 'text',
    },
  ],
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Einen digitalen Prozess konkret besprechen',
    body:
      'Beschreiben Sie kurz den heutigen Ablauf und den größten Engpass. Für das erste Gespräch reichen nicht vertrauliche Rahmendaten.',
    action: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
    note: 'Remote oder nach Vereinbarung vor Ort in Baden-Württemberg.',
  },
  schemaKinds: ['ProfessionalService', 'BreadcrumbList'],
} as const satisfies PageDefinition;

export const ABOUT_HUGO_MENZ = {
  key: 'about-hugo-menz',
  path: '/ueber-hugo-menz/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Über Hugo Menz | UX Engineering und Industrieerfahrung',
    description:
      'Hugo Menz verbindet Erfahrung aus Sondermaschinenbau und Industrieautomation mit UX Engineering, Interface-Entwicklung und Prozessautomatisierung.',
    canonicalPath: '/ueber-hugo-menz/',
    robots: 'index,follow',
    openGraph: {
      title: 'Über Hugo Menz: UX Engineering und Industrieerfahrung',
      description:
        'Technische und betriebliche Prozesse verstehen und in klare Interfaces und Automatisierungen übersetzen.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-general-de.png',
      imageAlt: 'UX Engineering für digitale Prozesse, Automatisierung und Integrationen',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Über Hugo Menz: UX Engineering und Industrieerfahrung',
      description:
        'Technische und betriebliche Prozesse verstehen und in klare Interfaces und Automatisierungen übersetzen.',
      imagePath: '/og-general-de.png',
      imageAlt: 'UX Engineering für digitale Prozesse, Automatisierung und Integrationen',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Über Hugo Menz', path: '/ueber-hugo-menz/' },
  ],
  hero: {
    kicker: 'Persönlicher Hintergrund · Stuttgart',
    h1: 'UX Engineer für digitale Prozesse und Automatisierung',
    lead:
      'Ich verbinde das Verständnis technischer und betrieblicher Prozesse mit UX, Interface-Entwicklung und Automatisierung. So entstehen Werkzeuge, die nicht nur funktionieren, sondern im Arbeitsalltag verständlich und nutzbar bleiben.',
    primaryCta: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-hero',
    },
    secondaryCta: {
      label: 'Wie sich beides verbindet',
      href: '#zusammenspiel',
      dataCta: 'approach-hero',
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
      id: 'industrie',
      eyebrow: 'Industrieerfahrung',
      heading: 'Erfahrung im Sondermaschinenbau und in der Industrieautomation',
      paragraphs: [
        'Rund acht Jahre arbeitete ich an der Entwicklung und Umsetzung kundenspezifischer Maschinen. Mein beruflicher Schwerpunkt lag auf der Konstruktion und Entwicklung von Sondermaschinen.',
      ],
      points: [
        'mechanische Konstruktion und technische Dokumentation;',
        'Stücklisten, Einkauf und Lieferantenkoordination;',
        'Abstimmung mit Mechanik, Elektrik, Montage und Inbetriebnahme;',
        'Kommunikation mit Kunden und internen Fachbereichen;',
        'technische Koordination und Projektabwicklung;',
        'Umgang mit Anforderungen, Änderungen, Risiken und Abhängigkeiten.',
      ],
      layout: 'list',
    },
    {
      id: 'ux-engineering',
      eyebrow: 'Heutiger Schwerpunkt',
      heading: 'UX Engineering für Interfaces und digitale Abläufe',
      paragraphs: [
        'Heute arbeite ich als UX Engineer für digitale Prozesse und Automatisierung. Ich übersetze komplexe Anforderungen in klare Bedienabläufe, strukturierte Daten und wartbare technische Lösungen.',
      ],
      points: [
        'Interfaces und wiederverwendbare UI-Komponenten;',
        'interne Tools für klar abgegrenzte Aufgaben;',
        'Datenerfassung, Status und verständliche Fehlerrückmeldungen;',
        'Automatisierungen mit sichtbaren Ausnahmen und Freigaben;',
        'Integrationen über APIs und Webhooks;',
        'nachvollziehbare Übergaben zwischen Menschen und Systemen.',
      ],
      layout: 'list',
    },
    {
      id: 'zusammenspiel',
      eyebrow: 'Verbindung',
      heading: 'Technische Prozesse verstehen. Nutzung einfach machen.',
      paragraphs: [
        'Die Verbindung beider Perspektiven ist mein Vorteil: Ich kann mit Fachbereichen klären, was ein Prozess wirklich braucht, und daraus eine Oberfläche oder Automatisierung entwickeln, die im Arbeitsalltag funktioniert.',
      ],
      columns: [
        {
          heading: 'Fachliche Realität',
          points: [
            'Anforderungen, Datenquellen und Verantwortlichkeiten einordnen.',
            'Ausnahmen, Risiken und notwendige Entscheidungen erkennen.',
            'Technische und betriebliche Übergaben verstehen.',
          ],
        },
        {
          heading: 'Nutzbare Lösung',
          points: [
            'Informationen verständlich priorisieren.',
            'Klare Schritte, Zustände und Rückmeldungen gestalten.',
            'Nur sinnvolle Teile automatisieren und wartbar umsetzen.',
          ],
        },
      ],
      layout: 'comparison',
    },
    {
      id: 'probleme',
      eyebrow: 'Konkrete Aufgaben',
      heading: 'Bei diesen Problemen kann ich unterstützen',
      items: [
        {
          title: 'Unstrukturierte Eingänge',
          body: 'Anfragen, Dokumente und Formulare erfassen, ordnen und für die weitere Bearbeitung vorbereiten.',
        },
        {
          title: 'Manuelle Dateneingabe',
          body: 'Wiederholte Übertragungen reduzieren und Informationen kontrolliert zwischen Systemen weitergeben.',
        },
        {
          title: 'Unklare Freigaben und Übergaben',
          body: 'Status, Verantwortlichkeiten, offene Punkte und nächste Schritte nachvollziehbar machen.',
        },
        {
          title: 'Schwer bedienbare interne Tools',
          body: 'Oberflächen vereinfachen und häufige Aufgaben mit einer klaren Informationshierarchie unterstützen.',
        },
      ],
      links: [
        { label: 'Leistungen auf der Startseite', href: '/#leistungen' },
        { label: 'n8n als möglicher Baustein', href: '/n8n-beratung-stuttgart/' },
      ],
      layout: 'cards',
    },
  ],
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Einen konkreten Prozess besprechen',
    body:
      'In einem unverbindlichen Erstgespräch kläre ich mit Ihnen, wo Informationen verloren gehen, die Bedienung unnötig schwerfällt oder wiederkehrende Arbeit Zeit bindet.',
    action: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
    note: 'Sie sprechen direkt mit mir – von der Einordnung bis zu einer möglichen Umsetzung.',
  },
  schemaKinds: ['Person', 'BreadcrumbList'],
} as const satisfies PageDefinition;

export const CONTACT = {
  key: 'contact',
  path: '/kontakt/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Unverbindliches Erstgespräch | Kontakt zu Hugo Menz',
    description:
      'Besprechen Sie einen digitalen Prozess, eine interne Oberfläche oder eine Automatisierung unverbindlich mit Hugo Menz.',
    canonicalPath: '/kontakt/',
    robots: 'index,follow',
    openGraph: {
      title: 'Unverbindliches Erstgespräch mit Hugo Menz',
      description:
        'Einen komplexen digitalen oder betrieblichen Prozess kurz einordnen und einen sinnvollen nächsten Schritt klären.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-general-de.png',
      imageAlt: 'UX Engineering für digitale Prozesse, Automatisierung und Integrationen',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Unverbindliches Erstgespräch mit Hugo Menz',
      description:
        'Einen komplexen digitalen oder betrieblichen Prozess kurz einordnen und einen sinnvollen nächsten Schritt klären.',
      imagePath: '/og-general-de.png',
      imageAlt: 'UX Engineering für digitale Prozesse, Automatisierung und Integrationen',
    },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'Kontakt', path: '/kontakt/' },
  ],
  hero: {
    kicker: 'Kontakt · Unverbindliche Einordnung',
    h1: 'Einen konkreten Prozess unverbindlich besprechen',
    lead:
      'Beschreiben Sie kurz, welcher Ablauf heute Zeit kostet, Informationen verliert oder schwer zu bedienen ist. Für den Erstkontakt reichen nicht vertrauliche Rahmendaten.',
    primaryCta: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-hero',
    },
  },
  sections: [
    {
      id: 'contact-form',
      heading: 'Worum geht es?',
      paragraphs: [
        'Hilfreich sind eine kurze Beschreibung des heutigen Ablaufs, der beteiligten Personen oder Systeme, des größten Engpasses und des gewünschten Ziels.',
        'Bitte senden Sie im ersten Kontakt keine vertraulichen Dokumente, Zugangsdaten oder personenbezogenen Kundendaten. Der Umgang mit nicht öffentlichen Informationen wird vor einer Analyse separat vereinbart.',
      ],
      points: [
        'Name und E-Mail-Adresse',
        'Telefon, optional',
        'heutiger Prozess oder konkrete Aufgabe',
        'beteiligte Systeme oder Rollen, soweit bekannt',
        'gewünschtes Ziel oder wichtigste Verbesserung',
      ],
      layout: 'contact',
    },
    {
      id: 'erwartungsmanagement',
      heading: 'Was Sie im ersten Schritt erwarten können',
      paragraphs: [
        'Das Erstgespräch dient einer ersten Einordnung. Ich kläre mit Ihnen, ob das Thema sinnvoll abgegrenzt werden kann und ob eine Analyse, ein UX-Konzept, eine Integration oder eine kleine Umsetzung der passende nächste Schritt wäre. Es ist keine vollständige kostenlose Analyse.',
      ],
      links: [
        { label: 'Leistungen ansehen', href: '/#leistungen' },
        { label: 'Über Hugo Menz', href: '/ueber-hugo-menz/' },
      ],
      layout: 'text',
    },
    {
      id: 'alternative-kontaktwege',
      heading: 'Alternativer Kontaktweg',
      paragraphs: [
        'Sie können mich auch über mein bestehendes LinkedIn-Profil kontaktieren.',
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
    heading: 'Vertrauliche Informationen im Erstkontakt',
    items: [
      {
        question: 'Soll ich bereits Dokumente oder Zugangsdaten senden?',
        answer:
          'Nein. Für das Erstgespräch reichen eine grobe Prozessbeschreibung und nicht vertrauliche Rahmendaten. Der Umgang mit Dokumenten, Systemzugängen und Daten wird vor einer Analyse separat vereinbart.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Kontakt',
    heading: 'Den ersten Schritt einfach halten',
    body:
      'Eine kurze Beschreibung des Prozesses und des größten Engpasses genügt. Details lassen sich anschließend gezielt klären.',
    action: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
    note: 'Keine Datei-Uploads und keine vertraulichen Unterlagen im Erstkontakt.',
  },
  schemaKinds: ['ContactPage', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
