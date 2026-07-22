import type { PageDefinition } from '../page.types';

export const HOME_DE = {
  key: 'home-de',
  path: '/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Angebotsprozess im Maschinenbau automatisieren | Hugo Menz',
    description:
      'Technische Kundenanfragen aus E-Mail, PDF und Lastenheft schneller qualifizieren. Für Maschinenbauer, mit freigegebenen Regeln und menschlicher Prüfung.',
    canonicalPath: '/',
    robots: 'index,follow',
    openGraph: {
      title: 'Angebotsprozess im Maschinenbau automatisieren',
      description:
        'Technische Kundenanfragen aus E-Mail, PDF und Lastenheft schneller qualifizieren. Für Maschinenbauer, mit freigegebenen Regeln und menschlicher Prüfung.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt:
        'Technische Anfragequalifizierung für Maschinenbauer mit freigegebenen Regeln und menschlicher Prüfung',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Angebotsprozess im Maschinenbau automatisieren',
      description:
        'Technische Kundenanfragen aus E-Mail, PDF und Lastenheft schneller qualifizieren. Für Maschinenbauer, mit freigegebenen Regeln und menschlicher Prüfung.',
      imagePath: '/og-rfq-preview.png',
      imageAlt:
        'Technische Anfragequalifizierung für Maschinenbauer mit freigegebenen Regeln und menschlicher Prüfung',
    },
    alternates: [
      { hreflang: 'de-DE', path: '/' },
      { hreflang: 'en', path: '/en/' },
      { hreflang: 'x-default', path: '/' },
    ],
  },
  header: {
    brand: 'Hugo Menz Automation',
    subtitle: 'Technische Angebotsprozesse · Maschinenbau',
    navigation: [
      { label: 'Lösung', href: '/#interner-rfq-copilot' },
      { label: 'Für wen', href: '/#passung' },
      { label: 'Vorgehen', href: '/#vorgehen' },
      { label: 'Über Hugo', href: '/ueber-hugo-menz/' },
      { label: 'Kontakt', href: '/kontakt/' },
      { label: 'EN', href: '/en/', lang: 'en' },
    ],
    cta: {
      label: 'RFQ-Fit-Check anfragen',
      href: '#contact-form',
      dataCta: 'contact-header',
      contactContext: 'rfq',
    },
  },
  breadcrumbs: [{ label: 'Startseite', path: '/' }],
  hero: {
    kicker: 'Technischer Angebotsprozess · Maschinenbau · Stuttgart',
    h1: 'Angebotsprozess im Maschinenbau: technische Anfragen schneller qualifizieren',
    lead:
      'Ich strukturiere E-Mails, Lastenhefte, PDFs und Fotos zu einer prüfbaren Grundlage für Vertrieb und Engineering. Fehlende Angaben, Widersprüche und Risiken bleiben sichtbar.',
    primaryCta: {
      label: 'RFQ-Fit-Check anfragen',
      href: '#contact-form',
      dataCta: 'contact-hero',
      contactContext: 'rfq',
    },
    secondaryCta: {
      label: 'So funktioniert der interne RFQ-Copilot',
      href: '/leistungen/interner-rfq-copilot/',
      dataCta: 'copilot-hero',
    },
    trustLine: 'Klarer Angebotsprozess · freigegebene Regeln · menschliche Prüfung',
    diagram: {
      fileLabel: 'technische-anfrage.flow',
      nodes: [
        { stage: 'Eingang', label: 'E-Mail · Lastenheft · Fotos' },
        { stage: 'Strukturieren', label: 'Anforderungen und Quellen' },
        { stage: 'Prüfen', label: 'Lücken · Widersprüche · Risiken' },
        { stage: 'Berechnen', label: 'freigegebene Regeln' },
        { stage: 'Freigeben', label: 'Vertriebsingenieur' },
      ],
      footer: 'keine erfundenen Preise · keine autonome Freigabe',
    },
  },
  sections: [
    {
      id: 'ausgangslage',
      eyebrow: 'Definition',
      heading: 'Was bedeutet technische Anfragequalifizierung im Maschinenbau?',
      intro:
        'Technische Anfragequalifizierung im Maschinenbau bedeutet, Kundenanfragen und Anhänge vor der Kalkulation in eine prüfbare Anforderungsakte zu überführen. Fehlende Informationen, Widersprüche, Risiken und nicht abgedeckte Sonderfälle werden sichtbar, bevor Vertrieb oder Engineering eine Entscheidung trifft.',
      points: [
        'Wichtige Produkt-, Leistungs- oder Schnittstellendaten fehlen.',
        'Mehrere Dokumente enthalten widersprüchliche Angaben.',
        'Vertriebsingenieure beantworten wiederkehrende Grundfragen manuell.',
        'Kalkulationswissen steckt in Tabellen, Regeln oder einzelnen Personen.',
        'Annahmen und Ausschlüsse gehen bei der Übergabe an Engineering verloren.',
      ],
      paragraphs: [
        'Der sinnvolle erste Schritt ist eine nachvollziehbare Vorbereitung der technischen Entscheidung, kein automatisch erzeugtes Angebot. E-Mails, Lastenhefte, PDFs, Fotos und Tabellen bleiben über ihre Quellen nachvollziehbar.',
      ],
      links: [
        {
          label: 'Technische Anfragequalifizierung im Detail',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
      ],
      layout: 'list',
    },
    {
      id: 'ablauf',
      eyebrow: 'Prozess',
      heading: 'Wie lassen sich Angebotsprozesse im Maschinenbau kontrolliert automatisieren?',
      intro:
        'Automatisiert werden klar begrenzte Vorbereitungsaufgaben: Informationen zusammenführen, Anforderungen strukturieren, offene Punkte markieren und freigegebene Regeln anwenden. Die fachliche Entscheidung und Freigabe bleiben beim Menschen.',
      items: [
        {
          label: 'Schritt 1',
          title: 'Kundenanfrage erfassen',
          body: 'E-Mails, Lastenhefte, PDFs, Fotos, Notizen und Formulardaten werden mit ihren Quellen zusammengeführt.',
        },
        {
          label: 'Schritt 2',
          title: 'Anforderungen strukturieren',
          body: 'Die Angaben werden dem freigegebenen Schema des ausgewählten Produkt- oder Lösungsbereichs zugeordnet.',
        },
        {
          label: 'Schritt 3',
          title: 'Offene Punkte prüfen',
          body: 'Fehlende Informationen, Widersprüche, Annahmen, Rückfragen und technische Risiken werden sichtbar.',
        },
        {
          label: 'Schritt 4',
          title: 'Budgetbasis vorbereiten',
          body: 'Nur freigegebene Module, Tabellen, Faktoren und Formeln dürfen in die interne Budgetbasis einfließen.',
        },
        {
          label: 'Schritt 5',
          title: 'Menschlich freigeben',
          body: 'Ein Vertriebsingenieur prüft den Stand, bevor er für Kundenkommunikation, Kalkulation, Engineering oder CRM verwendet wird.',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'interner-rfq-copilot',
      eyebrow: 'Interner RFQ-Copilot',
      heading: 'Welche Ergebnisse der interne RFQ-Copilot vorbereitet',
      intro:
        'Der interne Copilot strukturiert Informationen für Vertrieb und Engineering. Fachliche Entscheidungen bleiben beim Menschen.',
      items: [
        {
          title: 'Weniger manuelle Sortierarbeit',
          body: 'Dokumente, Anforderungen, Einheiten und Status werden in einem gemeinsamen Schema zusammengeführt.',
        },
        {
          title: 'Fehlende Pflichtdaten früher erkennen',
          body: 'Pflichtinformationen, die für eine erste technische Einschätzung fehlen, werden vor der Kalkulation markiert.',
        },
        {
          title: 'Nachweisbare Quellen pro Anforderung',
          body: 'Werte und Anforderungen bleiben mit Dokument, Fundstelle und Status verbunden; Annahmen werden getrennt ausgewiesen.',
        },
        {
          title: 'Gezieltere Rückfragen',
          body: 'Aus offenen Punkten entsteht eine priorisierte Fragenliste für Kunde, Vertrieb oder Engineering.',
        },
        {
          title: 'Saubere Übergabe',
          body: 'Der menschlich geprüfte Stand kann an Vertrieb, Kalkulation, Engineering oder CRM übergeben werden.',
        },
        {
          title: 'Kontrollierte Budgetbasis',
          body: 'Ausschließlich freigegebene Module, Tabellen, Faktoren und Formeln dürfen interne Budgetwerte liefern.',
        },
      ],
      links: [
        {
          label: 'Interner RFQ-Copilot im Detail',
          href: '/leistungen/interner-rfq-copilot/',
        },
      ],
      layout: 'cards',
    },
    {
      id: 'kontrolle',
      eyebrow: 'Grenzen und Kontrolle',
      heading: 'Wo Regeln enden und Engineering beginnt',
      intro:
        'Ein Sprachmodell kann Dokumente interpretieren. Es kann aber nicht die Verantwortung für technische Machbarkeit, Kosten oder Marge übernehmen.',
      columns: [
        {
          heading: 'Das System darf',
          points: [
            'Informationen extrahieren und mit ihrer Quelle verknüpfen.',
            'Begriffe in ein freigegebenes Anforderungsschema übertragen.',
            'fehlende Angaben, Widersprüche und Risiken markieren.',
            'Rückfragen vorschlagen.',
            'deterministische Regeln und versionierte Tabellen anwenden.',
          ],
        },
        {
          heading: 'Das System darf nicht',
          points: [
            'Preise, Module oder Maße erfinden.',
            'technische Machbarkeit selbstständig bestätigen.',
            'Margen, Annahmen oder Risiken eigenständig freigeben.',
            'eine Kundenantwort oder ein Angebot automatisch versenden.',
            'Fälle außerhalb des definierten Rahmens stillschweigend bearbeiten.',
          ],
        },
      ],
      callout:
        'Wenn eine Regel fehlt oder der Fall außerhalb des definierten technischen Rahmens liegt, muss das System stoppen und zur Prüfung eskalieren.',
      layout: 'comparison',
    },
    {
      id: 'passung',
      eyebrow: 'Für wen',
      heading: 'Für kleine und mittlere Maschinenbauer, unabhängig vom Maschinentyp',
      intro:
        'Der Ansatz passt, wenn sich ein Teil des technischen Angebotsprozesses wiederholbar beschreiben und klar abgrenzen lässt.',
      points: [
        'Ein Produkt- oder Lösungsbereich lässt sich klar abgrenzen.',
        'Eingangsgrößen, Module, Optionen oder technische Grenzen wiederholen sich.',
        'Historische Anfragen, Checklisten, Tabellen oder Regeln sind nutzbar.',
        'Ein verantwortlicher Fachexperte kann Regeln und Ergebnisse prüfen.',
        'Das Anfragevolumen rechtfertigt eine strukturierte Vorbereitung.',
      ],
      callout:
        'Wenn jeder Auftrag vollständig neue Versuche, Simulationen oder Konstruktion erfordert, ist eine regelbasierte Budgetbasis möglicherweise nicht sinnvoll.',
      layout: 'list',
    },
    {
      id: 'vorgehen',
      eyebrow: 'Vorgehen',
      heading: 'Einstieg mit einem klar abgegrenzten Angebotsprozess',
      items: [
        {
          label: 'Schritt 1',
          title: 'RFQ Readiness Workshop',
          body: 'Prozess, Volumen, Daten, Regeln und Risiken prüfen. Ergebnis: Go, Go mit Bedingungen oder No-Go.',
          link: {
            label: 'RFQ Readiness Workshop ansehen',
            href: '/leistungen/rfq-readiness-workshop/',
          },
        },
        {
          label: 'Schritt 2',
          title: 'Historische Prüfung',
          body: 'Alte Anfragen und freigegebene Kalkulationen nutzen, um Schema, Quellen, Regeln und Grenzen zu testen.',
        },
        {
          label: 'Schritt 3',
          title: 'Pilot im Schattenbetrieb',
          body: 'Neue Fälle parallel zum bestehenden Prozess bearbeiten, ohne Kundenkommunikation oder offizielle Kalkulation zu automatisieren.',
        },
        {
          label: 'Schritt 4',
          title: 'Begrenzter interner Rollout',
          body: 'Erst nach stabilen Regeln und akzeptierter Qualität wird der interne Einsatz kontrolliert erweitert.',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'profil',
      heading: 'Industrieerfahrung für prüfbare Angebotsprozesse',
      paragraphs: [
        'Heute arbeite ich als UX Engineer für digitale Prozesse und Automatisierung. Ich gestalte Abläufe, in denen komplexe technische Informationen, offene Entscheidungen und Freigaben verständlich und prüfbar bleiben.',
        'Zuvor arbeitete ich rund acht Jahre im Sondermaschinenbau und in der Industrieautomation. Heute verbinde ich diese Erfahrung mit UX, Software und Digitalisierung.',
      ],
      links: [
        { label: 'Mehr über Hugo Menz', href: '/ueber-hugo-menz/' },
        {
          label: 'Zusammenarbeit in Stuttgart',
          href: '/standorte/stuttgart/',
        },
      ],
      layout: 'profile',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zur technischen Anfragequalifizierung',
    items: [
      {
        question: 'Was bedeutet technische Anfragequalifizierung?',
        answer:
          'Technische Anfragequalifizierung überführt Kundenanfragen und Anhänge vor der Kalkulation in eine prüfbare Anforderungsakte. Quellen, fehlende Angaben, Widersprüche, Risiken und offene Entscheidungen bleiben sichtbar.',
      },
      {
        question: 'Welche Teile des Angebotsprozesses lassen sich automatisieren?',
        answer:
          'Klar begrenzte Vorbereitungsaufgaben wie Dokumente zusammenführen, Anforderungen strukturieren, Pflichtdaten prüfen, Rückfragen vorbereiten und freigegebene Regeln anwenden. Machbarkeit, Preisfreigabe und Kundenkommunikation bleiben menschliche Entscheidungen.',
      },
      {
        question: 'Für wen ist der Ansatz geeignet?',
        answer:
          'Für Maschinenbauer, wenn sich ein Teil des Angebotsprozesses wiederholbar beschreiben und klar abgrenzen lässt und ein verantwortlicher Fachexperte Regeln sowie Ergebnisse prüft.',
      },
      {
        question: 'Welche Rolle behält der Mensch?',
        answer:
          'Vertrieb oder Engineering prüft Quellen, Annahmen, Risiken und Regelanwendung. Erst nach dieser Prüfung dürfen Ergebnisse für Kalkulation, Engineering, CRM oder Kundenkommunikation verwendet werden.',
      },
      {
        question: 'Welche Angaben braucht der erste RFQ-Fit-Check?',
        answer:
          'Für die erste Einschätzung reichen Anfragevolumen, beteiligte Rollen und der größte Engpass. Vertrauliche Dokumente sind dafür nicht erforderlich.',
      },
      {
        question: 'Wann sollte man nicht automatisieren?',
        answer:
          'Wenn das Volumen zu gering ist, die Projekte kaum wiederholbar sind, Regeln nicht gepflegt werden können oder jede erste Einschätzung zwingend neue Versuche und detaillierte Konstruktion braucht.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'RFQ-Fit-Check für Ihren Angebotsprozess anfragen',
    body:
      'Beschreiben Sie Anfragevolumen, beteiligte Rollen und den größten Engpass. Für die erste Einschätzung sind keine vertraulichen Dokumente erforderlich. Sie erhalten eine Einschätzung, ob sich ein klar abgegrenzter RFQ Readiness Workshop sinnvoll vorbereiten lässt.',
    action: {
      label: 'RFQ-Fit-Check anfragen',
      href: '#contact-form',
      dataCta: 'contact-final',
      contactContext: 'rfq',
    },
    note: 'Kein autonomes Angebot. Keine erfundenen Preise. Eine klar begrenzte Prüfung mit menschlicher Freigabe.',
  },
  footer: {
    left: 'Hugo Menz Automation',
    right:
      'Technische Anfragequalifizierung und digitale Angebotsprozesse für Maschinenbauer.',
  },
  schemaKinds: ['Person', 'Organization', 'WebSite', 'FAQPage'],
} as const satisfies PageDefinition;
