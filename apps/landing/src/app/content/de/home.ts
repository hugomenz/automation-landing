import type { PageDefinition } from '../page.types';

export const HOME_DE = {
  key: 'home-de',
  path: '/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Angebotsprozesse im Maschinenbau automatisieren | Hugo Menz',
    description:
      'Technische Kundenanfragen, E-Mails, Lastenhefte, Fotos und PDFs in eine prüfbare Angebotsgrundlage überführen – mit freigegebenen Regeln und menschlicher Prüfung.',
    canonicalPath: '/',
    robots: 'index,follow',
    openGraph: {
      title: 'Angebotsprozesse im Maschinenbau automatisieren',
      description:
        'Technische Anfragen in eine prüfbare Angebotsgrundlage mit offenen Punkten, freigegebenen Regeln und menschlicher Prüfung überführen.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt:
        'Technische Anfragequalifizierung für Maschinenbauer mit freigegebenen Regeln und menschlicher Prüfung',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Angebotsprozesse im Maschinenbau automatisieren',
      description:
        'Technische Anfragen in eine prüfbare Angebotsgrundlage mit offenen Punkten, freigegebenen Regeln und menschlicher Prüfung überführen.',
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
      label: 'Pilot-Eignung prüfen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-header',
    },
  },
  breadcrumbs: [{ label: 'Startseite', path: '/' }],
  hero: {
    kicker: 'Technische Angebotsprozesse · Maschinenbau · Stuttgart',
    h1: 'Technische Anfragen schneller zur prüfbaren Angebotsgrundlage führen',
    lead:
      'Ich unterstütze Maschinenbauer dabei, unvollständige Kundenanfragen, E-Mails, Lastenhefte, Fotos und PDFs in eine strukturierte, prüfbare Angebotsgrundlage zu überführen – mit offenen Punkten, Risiken und einer regelbasierten Budgetbasis vor der Freigabe durch Vertriebstechnik.',
    primaryCta: {
      label: 'Pilot-Eignung prüfen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-hero',
    },
    secondaryCta: {
      label: 'So funktioniert der interne RFQ-Copilot',
      href: '/leistungen/interner-rfq-copilot/',
      dataCta: 'copilot-hero',
    },
    trustLine: 'Eine Maschinenfamilie · freigegebene Regeln · menschliche Prüfung',
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
      eyebrow: 'Ausgangslage',
      heading: 'Warum die erste Angebotsphase so viel Abstimmung bindet',
      intro:
        'Technische Anfragen kommen selten in der Form an, die Vertrieb und Engineering für eine belastbare erste Einschätzung brauchen. Informationen liegen verteilt in E-Mails, Lastenheften, PDFs, Fotos, Notizen und Tabellen.',
      points: [
        'Wichtige Produkt-, Leistungs- oder Schnittstellendaten fehlen.',
        'Mehrere Dokumente enthalten widersprüchliche Angaben.',
        'Vertriebsingenieure beantworten wiederkehrende Grundfragen manuell.',
        'Kalkulationswissen steckt in Tabellen, Regeln oder einzelnen Personen.',
        'Annahmen und Ausschlüsse gehen bei der Übergabe an Engineering verloren.',
      ],
      paragraphs: [
        'Der erste sinnvolle Automatisierungsschritt ist deshalb nicht die automatische Angebotserstellung. Es ist eine bessere, nachvollziehbare Vorbereitung der technischen Entscheidung.',
      ],
      layout: 'list',
    },
    {
      id: 'ablauf',
      eyebrow: 'Prozess',
      heading: 'Von der Kundenanfrage zur menschlich geprüften Angebotsgrundlage',
      items: [
        {
          label: 'Schritt 1',
          title: 'Kundenanfrage erfassen',
          body: 'E-Mails, Lastenhefte, PDFs, Fotos, Notizen und Formulardaten werden mit ihren Quellen zusammengeführt.',
        },
        {
          label: 'Schritt 2',
          title: 'Anforderungen strukturieren',
          body: 'Die Angaben werden einem freigegebenen Schema für die ausgewählte Maschinenfamilie zugeordnet.',
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
      heading: 'Was der interne RFQ-Copilot vorbereitet',
      intro:
        'Der Copilot arbeitet intern und in einem klar abgegrenzten technischen Rahmen. Er bereitet Informationen für Vertrieb und Engineering vor, ersetzt aber keine fachliche Entscheidung.',
      items: [
        {
          title: 'Strukturierte Anforderungsakte',
          body: 'Anforderungen, Einheiten, Quellen und Status werden in einem gemeinsamen Schema zusammengeführt.',
        },
        {
          title: 'Fehlende Angaben',
          body: 'Pflichtinformationen, die für eine erste technische Einschätzung fehlen, werden eindeutig markiert.',
        },
        {
          title: 'Widersprüche und Risiken',
          body: 'Abweichende Werte, unbestätigte Annahmen und technische Blockierpunkte bleiben sichtbar.',
        },
        {
          title: 'Gezielte Rückfragen',
          body: 'Aus offenen Punkten entsteht eine priorisierte Fragenliste für Kunde, Vertrieb oder Engineering.',
        },
        {
          title: 'Regelbasierte Budgetbasis',
          body: 'Ausschließlich freigegebene Module, Tabellen, Faktoren und Formeln liefern interne Budgetwerte.',
        },
        {
          title: 'Saubere Übergabe',
          body: 'Der geprüfte Stand kann an Vertrieb, Engineering, Kalkulation oder CRM übergeben werden.',
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
      heading: 'Für welche Unternehmen der Ansatz geeignet ist',
      intro:
        'Der Ansatz richtet sich an Maschinenbauer, Sondermaschinenbauer, Anlagenbauer und Automatisierer, deren Lösungen zumindest teilweise wiederholbar beschrieben werden können.',
      points: [
        'Eine Maschinen- oder Lösungsfamilie lässt sich klar abgrenzen.',
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
      id: 'maschinenfamilien',
      eyebrow: 'Beispiele',
      heading: 'Beispiele für geeignete Maschinenfamilien',
      intro:
        'Diese Beispiele zeigen mögliche Ausgangspunkte. Auch andere Maschinenfamilien können geeignet sein, wenn Anforderungen, Module oder technische Grenzen ausreichend wiederholbar sind.',
      items: [
        {
          title: 'End-of-Line-Anlagen',
          body: 'Modulare Schritte am Linienende mit wiederkehrenden Eingangsgrößen, Optionen und Ausschlussregeln.',
          link: {
            label: 'End-of-Line-Beispiel ansehen',
            href: '/branchen/end-of-line/',
          },
        },
        {
          title: 'Verpackungsmaschinen',
          body: 'Definierte Plattformen mit bekannten Formaten, Optionen, Leistungsgrenzen und Produktabhängigkeiten.',
          link: {
            label: 'Verpackungsmaschinen-Beispiel ansehen',
            href: '/branchen/verpackungsmaschinen/',
          },
        },
        {
          title: 'Palettieranlagen',
          body: 'Robotergestützte Palettierung innerhalb eines bekannten Rahmens für Produkt, Palette, Leistung und Layout.',
          link: {
            label: 'Palettieranlagen-Beispiel ansehen',
            href: '/branchen/palettieranlagen/',
          },
        },
      ],
      layout: 'cards',
    },
    {
      id: 'vorgehen',
      eyebrow: 'Vorgehen',
      heading: 'Einstieg mit einer klar abgegrenzten Maschinenfamilie',
      items: [
        {
          label: 'Schritt 1',
          title: 'RFQ Readiness Workshop',
          body: 'Prozess, Volumen, Daten, Regeln, Risiken und eine geeignete Maschinenfamilie prüfen. Ergebnis: Go, Go mit Bedingungen oder No-Go.',
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
      heading: 'Maschinenbau verstehen. Automatisierung pragmatisch umsetzen.',
      paragraphs: [
        'Ich bin Maschinenbauingenieur. Rund acht Jahre habe ich im Sondermaschinenbau und in der Industrieautomation gearbeitet – unter anderem mit Konstruktion, Stücklisten, Einkauf, Lieferantenkoordination, Projektabwicklung und technischen Abstimmungen zwischen Kunde, Mechanik, Elektrik und Montage.',
        'Dazu kommen rund drei Jahre praktische Erfahrung mit Angular, TypeScript, APIs, Webhooks, n8n, Make und Automatisierung. Diese Kombination hilft mir, technische Angebotsprozesse fachlich einzugrenzen und pragmatisch umzusetzen.',
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
    {
      id: 'weitere-automatisierungen',
      eyebrow: 'Weitere Automatisierungen',
      heading: 'Ein anderer technischer oder betrieblicher Prozess kostet unnötig Zeit?',
      paragraphs: [
        'Neben technischen Angebotsprozessen unterstütze ich bei klar abgegrenzten Automatisierungen, Dokumentenflüssen und Systemintegrationen.',
      ],
      links: [
        {
          label: 'Weitere Prozessautomatisierungen ansehen',
          href: '/leistungen/prozessautomatisierung/',
        },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zur technischen Anfragequalifizierung',
    items: [
      {
        question: 'Für welche Maschinenfamilien funktioniert der Ansatz?',
        answer:
          'Für Familien mit wiederkehrenden Eingangsgrößen, Modulen, Optionen und Grenzen. Je stärker jeder Auftrag vollständig neu entwickelt werden muss, desto kleiner ist der sinnvoll automatisierbare Anteil.',
      },
      {
        question: 'Muss bereits ein CPQ vorhanden sein?',
        answer:
          'Nein. Der Pilot kann vor einem CPQ ansetzen und zunächst Anforderungen, Quellen, Lücken und freigegebene Kalkulationsregeln strukturieren.',
      },
      {
        question: 'Kann die KI Preise festlegen?',
        answer:
          'Nein. Preise und Budgetwerte dürfen nur aus freigegebenen Tabellen, Modulen, Faktoren oder Formeln kommen. Die KI darf Informationen zuordnen, aber keinen Preis erfinden.',
      },
      {
        question: 'Werden Kunden automatisch kontaktiert?',
        answer:
          'Nicht im ersten Pilot. Das System arbeitet intern. Rückfragen und Ergebnisse werden erst nach menschlicher Prüfung verwendet.',
      },
      {
        question: 'Welche Daten werden benötigt?',
        answer:
          'Eine ausgewählte Maschinenfamilie, Beispiele früherer Anfragen, vorhandene Checklisten oder Kalkulationslogik und ein verantwortlicher Experte, der Regeln und Ergebnisse freigeben kann.',
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
    heading: 'Ist Ihre Maschinenfamilie für diesen Ansatz geeignet?',
    body:
      'In einem RFQ Readiness Workshop prüfe ich Prozess, Volumen, Daten, Regeln und technische Grenzen. Sie erhalten eine klare Empfehlung – auch dann, wenn ein Pilot nicht sinnvoll ist.',
    action: {
      label: 'Pilot-Eignung prüfen',
      href: '/leistungen/rfq-readiness-workshop/',
      dataCta: 'readiness-final',
    },
    note: 'Kein autonomes Angebot. Keine erfundenen Preise. Eine klar begrenzte Prüfung mit menschlicher Freigabe.',
  },
  footer: {
    left: 'Hugo Menz Automation',
    right:
      'Technische Anfragequalifizierung und digitale Angebotsprozesse für Maschinenbauer.',
    secondaryLink: {
      label: 'Weitere Prozessautomatisierungen',
      href: '/leistungen/prozessautomatisierung/',
    },
  },
  schemaKinds: ['Person', 'ProfessionalService', 'WebSite', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
