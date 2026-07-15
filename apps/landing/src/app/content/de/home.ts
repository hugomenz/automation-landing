import type { PageDefinition } from '../page.types';

export const HOME_DE = {
  key: 'home-de',
  path: '/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'UX Engineering und Prozessautomatisierung | Hugo Menz',
    description:
      'Nutzerfreundliche interne Tools, Prozessautomatisierung und Systemintegrationen für komplexe technische und betriebliche Abläufe.',
    canonicalPath: '/',
    robots: 'index,follow',
    openGraph: {
      title: 'UX Engineering und Prozessautomatisierung',
      description:
        'Komplexe Abläufe in klare Interfaces, strukturierte Daten und kontrollierte Automatisierungen überführen.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-general-de.png',
      imageAlt: 'UX Engineering für digitale Prozesse, Automatisierung und Integrationen',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'UX Engineering und Prozessautomatisierung',
      description:
        'Komplexe Abläufe in klare Interfaces, strukturierte Daten und kontrollierte Automatisierungen überführen.',
      imagePath: '/og-general-de.png',
      imageAlt: 'UX Engineering für digitale Prozesse, Automatisierung und Integrationen',
    },
    alternates: [
      { hreflang: 'de-DE', path: '/' },
      { hreflang: 'en', path: '/en/' },
      { hreflang: 'x-default', path: '/' },
    ],
  },
  header: {
    brand: 'Hugo Menz Automation',
    subtitle: 'UX Engineering · Prozesse · Automatisierung',
    navigation: [
      { label: 'Leistungen', href: '/#leistungen' },
      {
        label: 'RFQ & Industrie',
        href: '/loesungen/technische-anfragequalifizierung/',
      },
      { label: 'KI-Sichtbarkeit', href: '/ki-sichtbarkeit-industrie/' },
      { label: 'Über Hugo', href: '/ueber-hugo-menz/' },
      { label: 'EN', href: '/en/', lang: 'en' },
    ],
    cta: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-header',
    },
  },
  breadcrumbs: [{ label: 'Startseite', path: '/' }],
  hero: {
    kicker: 'UX Engineering · Digitale Prozesse · Automatisierung',
    h1: 'Digitale Prozesse verständlich und nutzbar machen',
    lead:
      'Ich verbinde UX Engineering, Interface-Entwicklung und Automatisierung, um unübersichtliche Arbeitsabläufe in klare, bedienbare digitale Prozesse zu überführen – besonders dort, wo Dokumente, Fachwissen und mehrere Systeme zusammenkommen.',
    primaryCta: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-hero',
    },
    secondaryCta: {
      label: 'Leistungen ansehen',
      href: '/#leistungen',
      dataCta: 'services-hero',
    },
    trustLine: 'UX Engineering · klare Prozesse · kontrollierte Automatisierung',
    diagram: {
      fileLabel: 'digitaler-prozess.flow',
      nodes: [
        { stage: 'Eingang', label: 'E-Mail · Formular · Dokument' },
        { stage: 'Strukturieren', label: 'Daten und Kontext' },
        { stage: 'Bearbeiten', label: 'Regeln und Integrationen' },
        { stage: 'Prüfen', label: 'Ausnahmen und Freigaben' },
        { stage: 'Übergeben', label: 'Team · CRM · Fachsystem' },
      ],
      footer: 'nachvollziehbar · nutzerzentriert · kontrolliert',
    },
  },
  sections: [
    {
      id: 'ausgangslage',
      eyebrow: 'Ausgangslage',
      heading: 'Wenn Informationen, Systeme und Arbeitsschritte nicht zusammenpassen',
      intro:
        'Viele Prozesse sind nicht deshalb langsam, weil Menschen zu wenig leisten. Die nötigen Informationen sind verteilt, müssen mehrfach übertragen werden oder erreichen die richtige Person zu spät.',
      points: [
        'Anfragen und Dokumente kommen unstrukturiert an.',
        'Daten werden wiederholt aus E-Mails oder PDFs übertragen.',
        'Freigaben und Zuständigkeiten sind nicht eindeutig.',
        'Informationen gehen zwischen Abteilungen verloren.',
        'Interne Werkzeuge sind schwer verständlich oder umständlich zu bedienen.',
        'Formulare, Postfach, CRM und Fachsysteme arbeiten nebeneinander statt zusammen.',
      ],
      paragraphs: [
        'Ich untersuche zuerst den tatsächlichen Arbeitsablauf. Daraus entsteht eine Lösung, die den Menschen im Prozess Orientierung gibt und nur dort automatisiert, wo Regeln und Daten dafür ausreichen.',
      ],
      layout: 'list',
    },
    {
      id: 'leistungen',
      eyebrow: 'Leistungen',
      heading: 'Was ich entwickle und verbessere',
      intro:
        'Der passende Umfang kann eine einzelne Oberfläche, eine Integration oder ein durchgängiger interner Ablauf sein. Entscheidend ist nicht das Werkzeug, sondern ob der Prozess danach verständlicher und verlässlicher funktioniert.',
      items: [
        {
          title: 'Interfaces und interne Tools',
          body: 'Klare Oberflächen und UI-Komponenten für Aufgaben, die heute in Tabellen, E-Mails oder schwer bedienbaren Systemen verteilt sind.',
        },
        {
          title: 'Informationen erfassen und strukturieren',
          body: 'Formulare und Abläufe, die relevante Angaben vollständig aufnehmen, verständlich ordnen und für die weitere Bearbeitung vorbereiten.',
        },
        {
          title: 'Wiederkehrende Abläufe automatisieren',
          body: 'Nachvollziehbare Workflows für Routineaufgaben, Prüfungen, Benachrichtigungen und Freigaben – mit sichtbaren Ausnahmen.',
        },
        {
          title: 'Systeme verbinden',
          body: 'Integrationen zwischen Formularen, E-Mail, CRM, APIs und internen Systemen, ohne die fachliche Verantwortung zu verstecken.',
        },
        {
          title: 'Technische Anfragen qualifizieren',
          body: 'Ein konkretes Industriebeispiel: Dokumente, Anforderungen, Lücken und Quellen für Vertrieb und Engineering strukturiert vorbereiten.',
          link: {
            label: 'Technische Anfragequalifizierung ansehen',
            href: '/loesungen/technische-anfragequalifizierung/',
          },
        },
        {
          title: 'KI-Sichtbarkeit verbessern',
          body: 'Unternehmens-, Produkt- und Fachinformationen so aufbereiten, dass Suchmaschinen und KI-Systeme sie besser verstehen können.',
          link: {
            label: 'KI-Sichtbarkeit für Industrieunternehmen',
            href: '/ki-sichtbarkeit-industrie/',
          },
        },
      ],
      layout: 'cards',
    },
    {
      id: 'zusammenspiel',
      eyebrow: 'Arbeitsweise',
      heading: 'Nutzer verstehen und den Betrieb ernst nehmen',
      intro:
        'Eine gute digitale Lösung muss zwei Dinge gleichzeitig leisten: Sie muss für die Menschen verständlich sein und mit den realen Daten, Regeln und Verantwortlichkeiten des Unternehmens funktionieren.',
      columns: [
        {
          heading: 'UX und Bedienbarkeit',
          points: [
            'Aufgaben und Informationsbedarf der Nutzer verstehen.',
            'Klare Schritte, Zustände und Rückmeldungen gestalten.',
            'Fehler vermeiden und Korrekturen verständlich machen.',
            'Komplexität nur dort zeigen, wo sie gebraucht wird.',
          ],
        },
        {
          heading: 'Prozess und technische Realität',
          points: [
            'Datenquellen, Regeln und Schnittstellen klären.',
            'Ausnahmen und menschliche Entscheidungen sichtbar halten.',
            'Übergaben zwischen Rollen und Systemen absichern.',
            'Eine wartbare Lösung statt unnötiger Technik wählen.',
          ],
        },
      ],
      callout:
        'Meine Erfahrung aus Sondermaschinenbau und Industrieautomation hilft mir, technische und betriebliche Zusammenhänge schnell einzuordnen. UX Engineering macht daraus einen Ablauf, der im Alltag nutzbar bleibt.',
      layout: 'comparison',
    },
    {
      id: 'anwendungsfaelle',
      eyebrow: 'Anwendungsfälle',
      heading: 'Wo dieser Ansatz besonders hilfreich ist',
      intro:
        'Meine tiefste Prozesserfahrung stammt aus Industrie und Maschinenbau. Relevant ist der Ansatz aber überall dort, wo B2B-Abläufe erklärungsbedürftig sind und Informationen kontrolliert zwischen Menschen und Systemen fließen müssen.',
      items: [
        {
          title: 'Anfragen und Dokumente',
          body: 'Unterschiedliche Eingänge erfassen, fehlende Angaben sichtbar machen und einen prüfbaren Arbeitsstand schaffen.',
        },
        {
          title: 'Manuelle Routinearbeit',
          body: 'Wiederkehrende Übertragungen, Prüfungen und Benachrichtigungen reduzieren, ohne Ausnahmen zu übergehen.',
        },
        {
          title: 'Übergaben und Freigaben',
          body: 'Verantwortlichkeiten, Status und nächste Schritte zwischen Teams nachvollziehbar abbilden.',
        },
        {
          title: 'Schwer bedienbare interne Werkzeuge',
          body: 'Oberflächen vereinfachen, Informationshierarchien klären und häufige Aufgaben gezielt unterstützen.',
        },
      ],
      links: [
        { label: 'Industriebeispiel End-of-Line', href: '/branchen/end-of-line/' },
        {
          label: 'Industriebeispiel Verpackungsmaschinen',
          href: '/branchen/verpackungsmaschinen/',
        },
        {
          label: 'Industriebeispiel Palettieranlagen',
          href: '/branchen/palettieranlagen/',
        },
      ],
      layout: 'cards',
    },
    {
      id: 'vorgehen',
      eyebrow: 'Vorgehen',
      heading: 'Von der Ausgangslage zu einer nutzbaren Lösung',
      items: [
        {
          label: 'Schritt 1',
          title: 'Problem eingrenzen',
          body: 'Im Erstgespräch geht es um den heutigen Ablauf, beteiligte Personen und Systeme sowie den größten Engpass.',
        },
        {
          label: 'Schritt 2',
          title: 'Prozess und Nutzung verstehen',
          body: 'Ich ordne Aufgaben, Informationen, Regeln, Ausnahmen und Übergaben und mache den sinnvollen Umfang sichtbar.',
        },
        {
          label: 'Schritt 3',
          title: 'Lösung entwerfen und umsetzen',
          body: 'Interface, Workflow oder Integration entstehen in einem klar abgegrenzten Rahmen mit nachvollziehbaren Entscheidungen.',
        },
        {
          label: 'Schritt 4',
          title: 'Im Alltag prüfen',
          body: 'Die Lösung wird mit realistischen Fällen getestet, dokumentiert und nur bei erkennbarem Nutzen erweitert.',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'profil',
      heading: 'UX Engineering mit industrieller Prozesserfahrung',
      paragraphs: [
        'Ich arbeite als UX Engineer für digitale Prozesse und Automatisierung. Zuvor war ich rund acht Jahre im Sondermaschinenbau und in der Industrieautomation tätig – unter anderem in Konstruktion, technischer Koordination, Einkauf, Lieferantenabstimmung und Projektabwicklung.',
        'Heute verbinde ich dieses Prozessverständnis mit Interface-Entwicklung, UI-Komponenten, APIs und Automatisierung. Sie arbeiten direkt mit mir – von der ersten Einordnung bis zu einer möglichen Umsetzung.',
      ],
      links: [
        { label: 'Mehr über meinen Hintergrund', href: '/ueber-hugo-menz/' },
        { label: 'Zusammenarbeit in Stuttgart', href: '/standorte/stuttgart/' },
      ],
      layout: 'profile',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zur Zusammenarbeit',
    items: [
      {
        question: 'Arbeiten Sie ausschließlich mit Maschinenbauunternehmen?',
        answer:
          'Nein. Meine Erfahrung im Maschinenbau ist ein Vorteil bei komplexen technischen und betrieblichen Abläufen, aber keine Branchengrenze. Entscheidend ist, ob ein Prozess, eine interne Oberfläche oder ein Datenfluss sinnvoll verbessert werden kann.',
      },
      {
        question: 'Welche Prozesse eignen sich für eine Automatisierung?',
        answer:
          'Gute Kandidaten enthalten wiederkehrende Schritte, klare Informationsübergaben oder häufige manuelle Übertragungen. Ausnahmen und Entscheidungen, die Fachwissen benötigen, sollten sichtbar bei den zuständigen Menschen bleiben.',
      },
      {
        question: 'Muss dafür ein komplett neues System entstehen?',
        answer:
          'Nicht unbedingt. Je nach Ausgangslage kann eine bessere Oberfläche, ein klareres Formular, eine Integration oder ein kleiner interner Workflow ausreichen.',
      },
      {
        question: 'Welche Technologien setzen Sie ein?',
        answer:
          'Die Technologie folgt dem Prozess. Je nach Aufgabe können Angular, TypeScript, APIs, Webhooks, n8n, Make oder vorhandene Systeme beteiligt sein. Entscheidend sind Bedienbarkeit, Wartbarkeit und klare Verantwortlichkeiten.',
      },
      {
        question: 'Was passiert im unverbindlichen Erstgespräch?',
        answer:
          'Sie beschreiben den heutigen Ablauf und das gewünschte Ziel. Ich gebe eine erste Einschätzung, ob und wie sich das Problem sinnvoll eingrenzen lässt. Das Gespräch ist keine vollständige kostenlose Analyse.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'Welchen Prozess möchten Sie verständlicher machen?',
    body:
      'Beschreiben Sie kurz den heutigen Ablauf und den größten Engpass. Im unverbindlichen Erstgespräch kläre ich mit Ihnen, welcher nächste Schritt sinnvoll sein kann.',
    action: {
      label: 'Unverbindliches Erstgespräch',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
    note: 'Für den ersten Kontakt reichen nicht vertrauliche Rahmendaten.',
  },
  footer: {
    left: 'Hugo Menz Automation',
    right: 'UX Engineering, digitale Prozesse und Automatisierung für komplexe B2B-Abläufe.',
    secondaryLink: {
      label: 'n8n Beratung Stuttgart',
      href: '/n8n-beratung-stuttgart/',
    },
  },
  schemaKinds: ['Person', 'ProfessionalService', 'WebSite', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
