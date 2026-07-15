import type { PageDefinition } from '../page.types';

export const INDUSTRIAL_AI_SEARCH_DE = {
  key: 'industrial-ai-search-de',
  path: '/ki-sichtbarkeit-industrie/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'KI-Sichtbarkeit für Industrieunternehmen | GEO & AI Search | Hugo Menz',
    description:
      'AI Search Readiness aus Stuttgart für Industrieunternehmen: technische Signale, Produktdaten, Quellen und Inhalte für ChatGPT, Gemini, Perplexity und Google AI prüfen.',
    canonicalPath: '/ki-sichtbarkeit-industrie/',
    robots: 'index,follow',
    openGraph: {
      title: 'KI-Sichtbarkeit für Industrieunternehmen',
      description:
        'Hugo Menz Automation prüft von Stuttgart aus technische Signale, Produktdaten, Quellen und Fachinhalte für die KI-Sichtbarkeit von Industrieunternehmen.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-industrial-ai-search-de.png',
      imageAlt:
        'Vorschaugrafik zur KI-Sichtbarkeit für Industrieunternehmen mit den Prüffeldern technischer Zugriff, Produktdaten, Quellen und Messung',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'KI-Sichtbarkeit für Industrieunternehmen',
      description:
        'Hugo Menz Automation prüft von Stuttgart aus technische Signale, Produktdaten, Quellen und Fachinhalte für ChatGPT, Gemini, Perplexity und Google AI.',
      imagePath: '/og-industrial-ai-search-de.png',
      imageAlt:
        'Vorschaugrafik zur KI-Sichtbarkeit für Industrieunternehmen mit den Prüffeldern technischer Zugriff, Produktdaten, Quellen und Messung',
    },
    alternates: [
      { hreflang: 'de-DE', path: '/ki-sichtbarkeit-industrie/' },
      {
        hreflang: 'en',
        path: '/en/ai-search-readiness-industrial-companies/',
      },
      { hreflang: 'x-default', path: '/ki-sichtbarkeit-industrie/' },
    ],
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'KI-Sichtbarkeit für Industrieunternehmen', path: '/ki-sichtbarkeit-industrie/' },
  ],
  hero: {
    kicker: 'AI Search Readiness · Industrie · Stuttgart',
    h1: 'KI-Sichtbarkeit für Industrieunternehmen',
    lead:
      'Damit erklärungsbedürftige Produkte auch von ChatGPT, Gemini, Perplexity und anderen KI-Suchsystemen verstanden und als mögliche Quelle berücksichtigt werden können.',
    primaryCta: {
      label: 'KI-Sichtbarkeit prüfen lassen',
      href: '#contact-form',
      dataCta: 'ai-search-hero',
      contactContext: 'ai-search',
    },
    secondaryCta: {
      label: 'Leistungsumfang ansehen',
      href: '#leistungsumfang',
      dataCta: 'ai-search-scope',
    },
    trustLine: 'Technik · Semantik · Fachinhalte · nachvollziehbare Quellen',
  },
  sections: [
    {
      id: 'kurzantwort',
      eyebrow: 'Kurzantwort',
      heading: 'Was AI Search Readiness für Industrieunternehmen bedeutet',
      paragraphs: [
        'AI Search Readiness verbindet technisches SEO, klare Produktdaten, belegbare Quellen und Fachinhalte.',
        'Hugo Menz Automation bietet diesen Audit von Stuttgart aus an.',
        'GEO, Generative Engine Optimization, LLMO und AI Search Optimization sind Methoden innerhalb des Audits.',
      ],
      callout:
        'Ich verbessere die technischen, semantischen und inhaltlichen Voraussetzungen, damit KI-Suchsysteme Ihr Unternehmen, Ihre Produkte und Ihre Fachkompetenz besser verstehen und als mögliche Quelle berücksichtigen können.',
      layout: 'text',
    },
    {
      id: 'audit',
      eyebrow: 'Einstiegsangebot',
      heading: 'Industrial AI Visibility Audit',
      intro:
        'Eine begrenzte Bestandsaufnahme für die vereinbarte Website, Sprachen und Märkte.',
      points: [
        '25 bis 40 relevante Käuferfragen definieren und ausgewählte KI-Suchsysteme prüfen;',
        'mit bis zu drei relevanten Wettbewerbern vergleichen;',
        'technische Indexierung, Crawlbarkeit und Crawler-Regeln prüfen;',
        'Unternehmens-, Produkt- und Kompetenzsignale sowie sichtbare Quellen und Beleglücken analysieren;',
        'einen priorisierten 90-Tage-Maßnahmenplan mit einer Empfehlung erstellen: umsetzen, abwarten oder nicht investieren.',
      ],
      callout:
        'Nach einer kurzen Ersteinschätzung erhalten Sie einen festen Umfang und Projektpreis. Die Ersteinschätzung ist kein vollständiges kostenloses Audit.',
      layout: 'list',
    },
    {
      id: 'industrieproblem',
      eyebrow: 'Ausgangslage',
      heading: 'Warum industrielle Angebote für KI-Suchsysteme schwer einzuordnen sein können',
      intro:
        'Besonders relevant ist die Prüfung bei komplexen, erklärungsbedürftigen oder mehrsprachigen Angeboten.',
      points: [
        'Produktinformationen und Begriffe sind über PDFs, Seiten, Portale oder Händler verteilt.',
        'Fachwissen bleibt unsichtbar und wichtige Fakten sind schwer zu verifizieren.',
        'Inhalte beantworten interne Fachfragen, aber keine konkreten Einkaufsfragen.',
        'Zusammenhänge zwischen Unternehmen, Produkten, Anwendungen und Kompetenz bleiben unklar.',
        'KI-Systeme können dann Verzeichnisse, Wettbewerber oder Distributoren als Quelle nutzen.',
      ],
      layout: 'list',
    },
    {
      id: 'begriffe',
      eyebrow: 'Einordnung',
      heading: 'SEO, GEO und AI Search Readiness: Was ist der Unterschied?',
      items: [
        {
          title: 'SEO',
          body: 'SEO verbessert technische Indexierbarkeit und klassische Auffindbarkeit.',
        },
        {
          title: 'GEO',
          body: 'GEO verbessert, wie Inhalte in generierten Antworten verstanden, gefunden und möglicherweise zitiert werden.',
        },
        {
          title: 'AI Search Readiness',
          body: 'AI Search Readiness verbindet SEO und GEO mit Produktdaten, Quellen und Messung.',
        },
      ],
      callout:
        'GEO ersetzt weder technisches SEO noch nützliche Inhalte und glaubwürdige Belege.',
      layout: 'cards',
    },
    {
      id: 'leistungsumfang',
      eyebrow: 'Leistungsumfang',
      heading: 'Technische, semantische und inhaltliche Signale gemeinsam prüfen',
      items: [
        {
          title: 'Käuferfragen und Sichtbarkeitsbaseline',
          points: [
            'relevante Käuferfragen und realistische Suchprompts definieren;',
            'KI-Sichtbarkeit und LLM Visibility in ausgewählten Systemen prüfen und mit bis zu drei Wettbewerbern vergleichen.',
          ],
        },
        {
          title: 'Indexierung und Crawler-Zugriff',
          points: [
            'technische Indexierbarkeit und Crawlbarkeit prüfen;',
            'robots-Regeln, relevanten AI-Crawler-Zugriff und technische Hindernisse bewerten.',
          ],
        },
        {
          title: 'Entitäten und Produktdaten',
          points: [
            'Signale zu Unternehmen, Produkten, Anwendungen und Fachpersonen prüfen;',
            'Produktnamen, Fakten und Terminologie abgleichen und passende Schema.org-Typen empfehlen.',
          ],
        },
        {
          title: 'Quellen und Fachinhalte',
          points: [
            'Quellen- und Zitierfähigkeit nachvollziehbarer Aussagen bewerten;',
            'Produkt-, Anwendungs- und Vergleichsseiten sowie Answer-first-Inhalte und FAQs priorisieren.',
          ],
        },
        {
          title: 'Sprachen und Messung',
          points: [
            'mehrsprachige Fakten und Begriffe auf Widersprüche prüfen;',
            'Nennungen, Zitate, Quell-URLs und qualifizierte Anfragen mit einem klaren Messplan erfassen.',
          ],
        },
      ],
      callout:
        'Strukturierte Daten allein erzeugen keine KI-Sichtbarkeit. Sie helfen nur dann, wenn technische Zugänglichkeit, sichtbare Inhalte, Produktfakten und Quellen zusammenpassen.',
      layout: 'cards',
    },
    {
      id: 'ergebnisse',
      eyebrow: 'Ergebnisse und optionale Umsetzung',
      heading: 'Was Sie erhalten und was danach möglich ist',
      intro:
        'Konkrete Befunde statt eines vagen Versprechens von „mehr Sichtbarkeit“:',
      items: [
        {
          title: 'Dokumentierte Arbeitsgrundlage',
          points: [
            'Sichtbarkeitsbaseline, Käuferfragen und Wettbewerbervergleich;',
            'technische, semantische und inhaltliche Befunde;',
            'Lücken bei Quellen und überprüfbaren Belegen;',
            'priorisierte Empfehlungen und Implementierungs-Backlog;',
            'Messrahmen und Management-Zusammenfassung.',
          ],
        },
        {
          title: 'Optionaler Umsetzungspilot',
          points: [
            'technische Hindernisse korrigieren;',
            'eine zentrale Fachseite und ausgewählte Produkt- oder Anwendungsseiten verbessern;',
            'strukturierte Daten, Fakten und Terminologie konsistent umsetzen;',
            'Prompt-, Quellen- und Zitatmonitoring mit Vorher-nachher-Prüfung einrichten.',
          ],
        },
      ],
      callout:
        'Die Befunde entscheiden über eine Umsetzung. Bestimmte Nennungen oder Ergebnisse werden nicht zugesagt.',
      layout: 'cards',
    },
    {
      id: 'prozess',
      eyebrow: 'Vorgehen',
      heading: 'In vier Schritten von der Ausgangslage zur kontrollierten Messung',
      items: [
        {
          title: 'Ausgangslage und relevante Käuferfragen definieren',
        },
        {
          title: 'Technische, semantische und inhaltliche Signale prüfen',
        },
        {
          title: 'Maßnahmen nach Wirkung und Aufwand priorisieren',
        },
        {
          title: 'Umsetzung und Sichtbarkeit kontrolliert messen',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'warum-hugo-menz',
      heading: 'Industrieerfahrung mit UX und digitaler Struktur verbinden',
      paragraphs: [
        'Heute arbeite ich als UX Engineer. Zuvor war ich rund acht Jahre im Sondermaschinenbau und in der Industrieautomation tätig. Diese Kombination hilft mir, komplexe Fachinformationen verständlich zu strukturieren.',
      ],
      points: [
        'Verständnis für Maschinenbau, industrielle Vertriebsfragen und erklärungsbedürftige Produkte.',
        'Klare Informationsarchitektur und verständliche Wege durch komplexe Inhalte.',
        'Technische Informationen, Quellen sowie Produkt- und Datenprozesse verbinden.',
        'Fokus auf nützliche, wartbare Systeme statt auf Marketingtrends.',
        'Auch von einer Umsetzung abraten, wenn Datenbasis, Relevanz oder erwartbarer Nutzen nicht ausreichen.',
      ],
      links: [{ label: 'Über Hugo Menz', href: '/ueber-hugo-menz/' }],
      layout: 'profile',
    },
    {
      id: 'grenzen',
      eyebrow: 'Ehrliche Grenzen',
      heading: 'Voraussetzungen verbessern, Plattformantworten nicht kontrollieren',
      paragraphs: [
        'Kein Dienstleister kann eine Nennung, Quelle oder Empfehlung in einem bestimmten KI-System garantieren. Die Antworten werden von den jeweiligen Plattformen erzeugt und können sich jederzeit verändern. Die Arbeit verbessert die Voraussetzungen für Verständnis, Auffindbarkeit, Quellenfähigkeit und Messbarkeit.',
      ],
      callout:
        'Das gilt für ChatGPT, Gemini, Google AI Overviews, Perplexity, Microsoft Copilot, Claude und andere KI-Suchsysteme.',
      layout: 'text',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Häufige Fragen',
    heading: 'Fragen zu KI-Sichtbarkeit, GEO und dem Audit',
    items: [
      {
        question: 'Was bedeutet KI-Sichtbarkeit für Industrieunternehmen?',
        answer:
          'Sie zeigt, ob KI-Suchsysteme Unternehmen, Produkte und Fachwissen bei relevanten Käuferfragen verstehen, abrufen und als mögliche Quelle berücksichtigen können.',
      },
      {
        question: 'Was ist der Unterschied zwischen SEO, GEO und AI Search Readiness?',
        answer:
          'SEO verbessert klassische Auffindbarkeit. GEO betrachtet generierte Antworten. AI Search Readiness verbindet beides mit Produktdaten, Quellen, Fachinhalten und Messung.',
      },
      {
        question: 'Kann eine Erwähnung in ChatGPT oder Gemini garantiert werden?',
        answer:
          'Nein. Die Plattformen erzeugen ihre Antworten selbst. Verbessern lassen sich nur die Voraussetzungen für Verständnis, Auffindbarkeit, Quellenfähigkeit und Messbarkeit.',
      },
      {
        question: 'Für welche Industrieunternehmen ist das Angebot geeignet?',
        answer:
          'Für Hersteller und B2B-Anbieter mit komplexen, erklärungsbedürftigen oder mehrsprachigen Angeboten und verteilten Produktinformationen.',
      },
      {
        question: 'Bietet Hugo Menz GEO oder KI-SEO in Stuttgart an?',
        answer:
          'Ja. Hugo Menz Automation bietet von Stuttgart aus AI Search Readiness für Industrie- und B2B-Unternehmen an. GEO, technisches SEO, LLMO und AI Search Optimization sind die eingesetzten Methoden.',
      },
      {
        question: 'Wie wird die Ausgangslage gemessen?',
        answer:
          'Über definierte Käuferfragen sowie dokumentierte Antworten, Nennungen, Wettbewerber, Quell-URLs und technische Website-Signale.',
      },
      {
        question: 'Welche Unternehmens- und Produktdaten werden benötigt?',
        answer:
          'Website-Inhalte, Produktseiten, Datenblätter, FAQs, Terminologie sowie Informationen zu Anwendungen, Märkten und zuständigen Fachpersonen.',
      },
      {
        question: 'Müssen neue Inhalte erstellt werden?',
        answer:
          'Nicht automatisch. Vorhandenes Material kann oft konsolidiert, präzisiert und besser verknüpft werden.',
      },
      {
        question: 'Können bestehende Produktseiten und PDFs genutzt werden?',
        answer:
          'Ja. Geprüft wird, ob ihre Inhalte zugänglich, aktuell, konsistent, eindeutig zugeordnet und auf der Website auffindbar sind.',
      },
      {
        question: 'Funktioniert die Analyse bei mehrsprachigen Websites?',
        answer:
          'Ja. Produktnamen, Leistungsdaten, Unternehmensfakten und Kernaussagen werden zwischen den vereinbarten Sprachversionen abgeglichen.',
      },
      {
        question: 'Wie wird entschieden, ob sich eine Umsetzung lohnt?',
        answer:
          'Nach Relevanz, Sichtbarkeitslücken, Voraussetzungen, Wettbewerb, Aufwand und erwartetem Nutzen. Das Ergebnis kann auch „abwarten“ oder „nicht investieren“ lauten.',
      },
      {
        question: 'Ersetzt GEO klassisches SEO?',
        answer:
          'Nein. Technische Zugänglichkeit, hilfreiche Inhalte und vertrauenswürdige Informationen bleiben die Grundlage.',
      },
      {
        question: 'Was passiert nach dem Audit?',
        answer:
          'Sie können intern umsetzen, einen begrenzten Pilot beauftragen, einzelne Maßnahmen vergeben oder bewusst zunächst nichts verändern.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'KI-Sichtbarkeit Ihres Unternehmens prüfen',
    body:
      'Nennen Sie Website, Produktgruppen, Märkte und Sprachen. Ich prüfe, ob sich der Audit klar abgrenzen lässt.',
    action: {
      label: 'KI-Sichtbarkeit prüfen lassen',
      href: '#contact-form',
      dataCta: 'ai-search-final',
      contactContext: 'ai-search',
    },
    note:
      'Nach der Ersteinschätzung erhalten Sie Umfang und festen Projektpreis. Sie ersetzt kein Audit.',
  },
  schemaKinds: ['Service', 'Person', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
