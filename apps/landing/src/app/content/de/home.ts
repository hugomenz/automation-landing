import type { PageDefinition } from '../page.types';

export const HOME_DE = {
  key: 'home-de',
  path: '/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'Angebotsprozesse im Maschinenbau digitalisieren | Hugo Menz',
    description:
      'Technische Anfragen strukturieren, Lücken erkennen und eine regelbasierte Budgetbasis vorbereiten – als interner Pilot für eine Maschinenfamilie.',
    canonicalPath: '/',
    robots: 'index,follow',
    openGraph: {
      title: 'Angebotsprozesse im Maschinenbau digitalisieren',
      description:
        'Aus E-Mails, Lastenheften, Fotos und PDFs wird eine prüfbare Anforderungsakte – mit offenen Punkten, freigegebenen Regeln und menschlicher Freigabe.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt:
        'Technische Anfragequalifizierung für Maschinenbauer mit freigegebenen Regeln und menschlicher Freigabe',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Angebotsprozesse im Maschinenbau digitalisieren',
      description:
        'Aus E-Mails, Lastenheften, Fotos und PDFs wird eine prüfbare Anforderungsakte – mit offenen Punkten, freigegebenen Regeln und menschlicher Freigabe.',
      imagePath: '/og-rfq-preview.png',
      imageAlt:
        'Technische Anfragequalifizierung für Maschinenbauer mit freigegebenen Regeln und menschlicher Freigabe',
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
      {
        label: 'Lösung',
        href: '/loesungen/technische-anfragequalifizierung/',
      },
      { label: 'Branchen', href: '/#maschinenfamilien' },
      { label: 'Leistungen', href: '/leistungen/rfq-readiness-workshop/' },
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
    kicker: 'Technische Vertriebsprozesse · Stuttgart / Baden-Württemberg',
    h1: 'Angebotsprozesse im Maschinenbau digitalisieren',
    lead:
      'Ich unterstütze Maschinenbauer dabei, unvollständige Anfragen, E-Mails, Lastenhefte, Fotos und PDFs in eine prüfbare Anforderungsakte mit offenen Punkten, Risiken und einer regelbasierten Budgetbasis zu überführen – vor der Freigabe durch den Vertriebsingenieur.',
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
      heading: 'Von unvollständigen Anfragen zur prüfbaren Angebotsgrundlage',
      intro:
        'Technische Anfragen kommen selten in der Form an, die Vertrieb und Engineering für eine belastbare erste Einschätzung brauchen. Informationen liegen in E-Mails, Anhängen, Fotos, Notizen und einzelnen Tabellen. Bevor eine Budgetindikation möglich ist, muss jemand den Inhalt ordnen, Lücken erkennen und Annahmen sichtbar machen.',
      points: [
        'Wichtige Produkt-, Leistungs- oder Schnittstellendaten fehlen.',
        'Mehrere Dokumente enthalten widersprüchliche Angaben.',
        'Vertriebsingenieure beantworten immer wieder dieselben Grundfragen.',
        'Kalkulationswissen steckt in Excel-Dateien oder einzelnen Personen.',
        'Annahmen und Ausschlüsse gehen bei der Übergabe an Engineering verloren.',
      ],
      paragraphs: [
        'Der erste sinnvolle Automatisierungsschritt ist deshalb nicht die automatische Angebotserstellung. Es ist eine bessere, nachvollziehbare Vorbereitung der technischen Entscheidung.',
      ],
      layout: 'list',
    },
    {
      id: 'interner-rfq-copilot',
      eyebrow: 'Interner RFQ-Copilot',
      heading: 'Was der Pilot vorbereitet',
      intro:
        'Der Copilot arbeitet intern und für eine klar abgegrenzte Maschinenfamilie. Er bereitet Informationen vor, damit Vertrieb und Engineering schneller prüfen können – er ersetzt ihre Entscheidung nicht.',
      items: [
        {
          title: 'Strukturierte Anforderungsakte',
          body: 'Anforderungen, Einheiten, Quellen und Status werden in einem gemeinsamen Schema zusammengeführt.',
        },
        {
          title: 'Fehlende Angaben und Widersprüche',
          body: 'Kritische Lücken, widersprüchliche Werte und nicht bestätigte Annahmen werden sichtbar markiert.',
        },
        {
          title: 'Gezielte Rückfragen',
          body: 'Aus den offenen Punkten entsteht eine priorisierte Liste von Fragen für Kunde, Vertrieb oder Engineering.',
        },
        {
          title: 'Regelbasierte Budgetbasis',
          body: 'Nur freigegebene Module, Tabellen, Faktoren und Formeln dürfen in eine interne Budgetbasis einfließen.',
        },
        {
          title: 'Saubere Übergabe',
          body: 'Der geprüfte Stand kann als Grundlage für CRM, Kalkulation, Projektierung oder das nächste Kundengespräch dienen.',
        },
      ],
      links: [
        {
          label: 'Technische Anfragequalifizierung im Maschinenbau',
          href: '/loesungen/technische-anfragequalifizierung/',
        },
      ],
      layout: 'cards',
    },
    {
      id: 'kontrolle',
      eyebrow: 'Kontrolle',
      heading: 'Wo Regeln enden und Engineering beginnt',
      intro:
        'Ein Sprachmodell kann Dokumente interpretieren. Es kann aber nicht die Verantwortung für technische Machbarkeit, Kosten oder Marge übernehmen. Deshalb werden Interpretation, Regelwerk und menschliche Entscheidung getrennt.',
      columns: [
        {
          heading: 'Das System darf',
          points: [
            'Informationen aus Dokumenten extrahieren und mit der Quelle verknüpfen.',
            'Begriffe klassifizieren und in ein freigegebenes Schema übertragen.',
            'fehlende Angaben und Widersprüche markieren.',
            'Rückfragen vorschlagen.',
            'deterministische Regeln und versionierte Preistabellen anwenden.',
          ],
        },
        {
          heading: 'Das System darf nicht',
          points: [
            'Preise oder Module erfinden.',
            'fehlende Maße stillschweigend ergänzen.',
            'technische Machbarkeit bestätigen.',
            'Margen oder Risiken eigenständig freigeben.',
            'eine Kundenantwort oder ein Angebot automatisch versenden.',
          ],
        },
      ],
      callout:
        'Wenn eine Regel fehlt oder der Fall außerhalb des definierten technischen Rahmens liegt, muss das System stoppen und zur Prüfung eskalieren.',
      layout: 'comparison',
    },
    {
      id: 'maschinenfamilien',
      eyebrow: 'Maschinenfamilien',
      heading: 'Für welche Anwendungen der Ansatz geeignet sein kann',
      intro:
        'Gute Kandidaten haben wiederkehrende Eingangsgrößen, bekannte Module und klare Ausschlussregeln. Der Pilot startet bewusst nicht mit dem gesamten Portfolio.',
      items: [
        {
          title: 'End-of-Line-Anlagen',
          body: 'Palettieren, Kartonieren, Verschließen, Etikettieren und weitere modulare Schritte am Linienende.',
          link: {
            label: 'Angebotsprozesse für End-of-Line-Anlagen',
            href: '/branchen/end-of-line/',
          },
        },
        {
          title: 'Verpackungsmaschinen',
          body: 'Vor allem sekundäre Verpackungsprozesse mit wiederkehrenden Formaten, Optionen und Leistungsgrenzen.',
          link: {
            label: 'Technische Anfragequalifizierung für Verpackungsmaschinen',
            href: '/branchen/verpackungsmaschinen/',
          },
        },
        {
          title: 'Palettieranlagen',
          body: 'Robotergestützte Palettierung von definierten Kartons oder starren Trays innerhalb eines klaren technischen Rahmens.',
          link: {
            label: 'Angebotsprozesse für Palettieranlagen',
            href: '/branchen/palettieranlagen/',
          },
        },
        {
          label: 'Negativer Fit',
          title: 'Nicht jede Sondermaschine ist ein guter Kandidat',
          body: 'Wenn jede Lösung von neuen Versuchen, Simulationen oder vollständig individueller Konstruktion abhängt, ist eine regelbasierte Budgetbasis möglicherweise nicht sinnvoll. Ein Workshop darf deshalb auch mit einem begründeten No-Go enden.',
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
            label: 'RFQ Readiness Workshop',
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
          body: 'Erst nach messbarer Entlastung, stabilen Regeln und akzeptierter Qualität wird der Einsatz erweitert.',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'profil',
      heading: 'Maschinenbau verstehen. Software pragmatisch umsetzen.',
      paragraphs: [
        'Ich bin Maschinenbauingenieur und Webentwickler in Stuttgart. Rund acht Jahre habe ich in Sondermaschinenbau, Konstruktion, Stücklisten, Einkauf, Lieferantenkoordination und Projektabwicklung gearbeitet. Dazu kommen rund drei Jahre Erfahrung mit Angular, TypeScript, APIs, Webhooks, n8n, Make und Automatisierung.',
        'Diese Kombination ist für technische Angebotsprozesse entscheidend: Die Lösung muss nicht nur Dokumente lesen und Systeme verbinden. Sie muss auch erkennen, welche Angaben für eine Maschine relevant sind, wo eine Regel belastbar ist und wann Engineering übernehmen muss.',
      ],
      points: [
        'Direkter Ansprechpartner von Analyse bis Umsetzung.',
        'Technischer Blick auf Anforderungen, Module, Kostenquellen und Risiken.',
        'Klare Trennung von Fakten, Annahmen und automatisierten Vorschlägen.',
        'Bereitschaft, von einer Automatisierung abzuraten, wenn die Voraussetzungen fehlen.',
      ],
      links: [
        { label: 'Über Hugo Menz', href: '/ueber-hugo-menz/' },
        {
          label: 'Angebotsprozess-Automatisierung in Stuttgart',
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
        question: 'Für welche Maschinenfamilien funktioniert der Ansatz?',
        answer:
          'Für Familien mit wiederkehrenden Eingangsgrößen, Modulen, Optionen und Grenzen. Je stärker jeder Auftrag vollständig neu entwickelt werden muss, desto kleiner ist der sinnvoll automatisierbare Anteil.',
      },
      {
        question: 'Muss bereits ein CPQ vorhanden sein?',
        answer:
          'Nein. Der Pilot kann vor einem CPQ ansetzen und zunächst Anforderungen, Quellen, Lücken und freigegebene Kalkulationsregeln strukturieren. Er kann auch zeigen, ob eine spätere CPQ-Einführung überhaupt sinnvoll ist.',
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
    body: 'In einem RFQ Readiness Workshop prüfen wir Prozess, Volumen, Daten, Regeln und technische Grenzen. Sie erhalten eine klare Empfehlung – auch dann, wenn ein Pilot nicht sinnvoll ist.',
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
      'Technische Anfragequalifizierung und digitale Angebotsprozesse für Maschinenbauer in Deutschland.',
    secondaryLink: {
      label: 'n8n Beratung Stuttgart',
      href: '/n8n-beratung-stuttgart/',
    },
  },
  schemaKinds: ['Person', 'ProfessionalService', 'WebSite', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
