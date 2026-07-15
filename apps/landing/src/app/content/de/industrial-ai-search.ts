import type { PageDefinition } from '../page.types';

export const INDUSTRIAL_AI_SEARCH_DE = {
  key: 'industrial-ai-search-de',
  path: '/ki-sichtbarkeit-industrie/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'KI-Sichtbarkeit für Industrieunternehmen | GEO & AI Search | Hugo Menz',
    description:
      'AI Search Readiness für Industrieunternehmen: technische Signale, Produktdaten, Quellen und Inhalte für ChatGPT, Gemini, Perplexity und Google AI prüfen und verbessern.',
    canonicalPath: '/ki-sichtbarkeit-industrie/',
    robots: 'index,follow',
    openGraph: {
      title: 'KI-Sichtbarkeit für Industrieunternehmen',
      description:
        'Technische Signale, Produktdaten, Quellen und Fachinhalte prüfen und verbessern, damit KI-Suchsysteme Industrieunternehmen und technische Produkte besser verstehen können.',
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
        'Technische Signale, Produktdaten, Quellen und Fachinhalte für ChatGPT, Gemini, Perplexity und Google AI prüfen und verbessern.',
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
    kicker: 'AI Search Readiness · Industrie',
    h1: 'KI-Sichtbarkeit für Industrieunternehmen',
    lead:
      'Damit erklärungsbedürftige Produkte nicht nur über klassische Suchmaschinen gefunden, sondern auch von ChatGPT, Gemini, Perplexity und anderen KI-Suchsystemen verstanden und als mögliche Quelle berücksichtigt werden können.',
    primaryCta: {
      label: 'KI-Sichtbarkeit prüfen lassen',
      href: '#contact-form',
      dataCta: 'ai-search-hero',
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
        'AI Search Readiness verbindet technisches SEO, strukturierte Unternehmens- und Produktdaten, nachvollziehbare Quellen und klar formulierte Fachinhalte. Ziel ist es, Maschinen, Leistungen und technische Kompetenzen für klassische Suchmaschinen und KI-Systeme eindeutig verständlich und auffindbar zu machen.',
      ],
      callout:
        'Wir schaffen die technischen, semantischen und inhaltlichen Voraussetzungen, damit KI-Suchsysteme Ihr Unternehmen, Ihre Produkte und Ihre Fachkompetenz besser verstehen und als mögliche Quelle berücksichtigen können.',
      layout: 'text',
    },
    {
      id: 'industrieproblem',
      eyebrow: 'Ausgangslage',
      heading: 'Warum industrielle Angebote für KI-Suchsysteme schwer einzuordnen sein können',
      intro:
        'In vielen Industrieunternehmen ist das relevante Wissen vorhanden, aber nicht an einer Stelle konsistent, prüfbar und verständlich verbunden. Dadurch kann unklar bleiben, wofür ein Hersteller steht, welches Produkt zu einer Anwendung passt und welche Quelle eine Aussage belegt.',
      points: [
        'Produktinformationen verteilen sich häufig auf PDFs, Produktseiten, Portale und Händlerseiten.',
        'Produktnamen, Baureihen und technische Begriffe können je nach Dokument unterschiedlich verwendet werden.',
        'Fachwissen aus Vertrieb, Engineering und Service ist auf der Website oft nur teilweise sichtbar.',
        'Wichtige Leistungsdaten, Einsatzgrenzen oder Unternehmensfakten lassen sich nicht immer leicht verifizieren.',
        'Maschinen, Optionen und B2B-Leistungen sind für Außenstehende häufig schwer vergleichbar.',
        'Inhalte sind teilweise für interne Fachkreise formuliert und beantworten konkrete Einkaufsfragen nicht direkt.',
        'Die Beziehung zwischen Unternehmen, Produkten, Anwendungen und Fachkompetenz kann undeutlich bleiben.',
        'Mehrsprachige Seiten, Datenblätter und Händlertexte können voneinander abweichen.',
        'KI-Systeme können deshalb Verzeichnisse, Wettbewerber oder Distributoren statt des Herstellers als Quelle heranziehen.',
      ],
      layout: 'list',
    },
    {
      id: 'begriffe',
      eyebrow: 'Einordnung',
      heading: 'SEO, GEO und AI Search Readiness: Was ist der Unterschied?',
      intro:
        'Die Methoden ergänzen einander. Entscheidend ist nicht ein neues Kürzel, sondern ob technische Produkte auffindbar, eindeutig beschrieben und durch belastbare Informationen belegt sind.',
      items: [
        {
          title: 'SEO',
          body: 'Technisches SEO und hilfreiche Inhalte verbessern die Auffindbarkeit in der klassischen Suche. Dazu gehören unter anderem Indexierbarkeit, klare Seitenstrukturen, interne Verknüpfungen und passende Antworten auf Suchanfragen.',
        },
        {
          title: 'GEO',
          body: 'Generative Engine Optimization betrachtet, wie Inhalte in generierten Antworten verstanden, abgerufen, erwähnt und möglicherweise zitiert werden. GEO baut auf zugänglichen, eindeutigen und vertrauenswürdigen Informationen auf.',
        },
        {
          title: 'AI Search Readiness',
          body: 'AI Search Readiness ist der breitere, geschäftsorientierte Leistungsrahmen. LLMO optimiert Informationen für das Verständnis und den Abruf durch Sprachmodelle; AI Search Optimization überträgt dieses Ziel auf KI-gestützte Sucherlebnisse. Der Leistungsrahmen verbindet diese Methoden mit Produktdaten, Quellen, Zuständigkeiten und einer belastbaren Messung.',
        },
      ],
      callout:
        'GEO ersetzt weder technisches SEO noch nützliche Inhalte oder vertrauenswürdige Unternehmensinformationen. Sichtbarkeit ohne glaubwürdige Belege ist nicht nachhaltig.',
      layout: 'cards',
    },
    {
      id: 'zielgruppe',
      eyebrow: 'Zielgruppe',
      heading: 'Für welche Unternehmen die Prüfung besonders relevant sein kann',
      intro:
        'Der Schwerpunkt liegt auf Industrieunternehmen. Auch andere B2B-Anbieter können profitieren, wenn Produkte oder Leistungen erklärungsbedürftig sind und Informationen über mehrere Systeme, Märkte oder Partner verteilt werden.',
      points: [
        'Hersteller technischer Produkte, Maschinen oder Anlagen;',
        'Unternehmen mit komplexen Produktportfolios und vielen Varianten;',
        'B2B-Dienstleister mit langen Vertriebs- und Entscheidungszyklen;',
        'Anbieter, deren Produkte Anwendungserklärung oder technische Beratung benötigen;',
        'Unternehmen mit fragmentierten Produktinformationen und mehreren Datenquellen;',
        'mehrsprachige Websites und internationale Produktkommunikation;',
        'Vertrieb über Händler, Distributoren oder internationale Märkte;',
        'Unternehmen, bei denen Website, PDFs und interne Produktdaten nicht durchgängig übereinstimmen.',
      ],
      layout: 'list',
    },
    {
      id: 'leistungsumfang',
      eyebrow: 'Leistungsumfang',
      heading: 'Technische, semantische und inhaltliche Signale gemeinsam prüfen',
      intro:
        'Die Leistung ist modular, folgt aber einer gemeinsamen Fragestellung: Können Suchmaschinen und KI-Systeme das Unternehmen, seine Produkte, Anwendungen und Belege konsistent erfassen?',
      items: [
        {
          title: 'Käuferfragen und Sichtbarkeitsbaseline',
          points: [
            'relevante Käuferfragen und realistische Suchprompts analysieren;',
            'KI-Sichtbarkeit und LLM Visibility in ausgewählten KI-Suchsystemen prüfen;',
            'mit bis zu drei relevanten Wettbewerbern vergleichen.',
          ],
        },
        {
          title: 'Indexierung und Crawler-Zugriff',
          points: [
            'technische Indexierbarkeit und Crawlbarkeit prüfen;',
            'robots-Regeln und den Zugriff relevanter AI-Crawler bewerten, soweit anwendbar;',
            'technische Hindernisse und unbeabsichtigte Ausschlüsse dokumentieren.',
          ],
        },
        {
          title: 'Entitäten und Produktdaten',
          points: [
            'Signale zu Unternehmen, Produkten, Anwendungen und Fachpersonen prüfen;',
            'Produktnamen, Fakten und Terminologie auf Konsistenz untersuchen;',
            'etablierte Schema.org-Typen dort empfehlen, wo sie sichtbare Inhalte korrekt abbilden.',
          ],
        },
        {
          title: 'Quellen und Fachinhalte',
          points: [
            'Quellen- und Zitierfähigkeit nachvollziehbarer Aussagen bewerten;',
            'Produkt-, Anwendungs- und Vergleichsseiten priorisieren;',
            'Answer-first-Inhalte und nützliche FAQs empfehlen.',
          ],
        },
        {
          title: 'Sprachen und Messung',
          points: [
            'mehrsprachige Fakten und Begriffe auf Widersprüche prüfen;',
            'einen Messplan für Nennungen, Zitate und verwendete Quell-URLs aufbauen;',
            'qualifizierte Anfragen als Geschäftssignal einordnen, ohne sie einem einzelnen KI-System pauschal zuzuschreiben.',
          ],
        },
      ],
      callout:
        'Strukturierte Daten allein erzeugen keine KI-Sichtbarkeit. Sie helfen nur dann, wenn technische Zugänglichkeit, sichtbare Inhalte, Produktfakten und Quellen zusammenpassen.',
      layout: 'cards',
    },
    {
      id: 'audit',
      eyebrow: 'Einstiegsangebot',
      heading: 'Industrial AI Visibility Audit',
      intro:
        'Das Audit ist eine klar abgegrenzte Bestandsaufnahme. Der endgültige Umfang hängt von Website, Produktportfolio, Sprachen und Zielmärkten ab.',
      points: [
        '25–40 relevante Käuferfragen gemeinsam definieren;',
        'eine ausgewählte Gruppe von KI-Suchsystemen prüfen;',
        'mit bis zu drei relevanten Wettbewerbern vergleichen;',
        'technische Indexierung, Crawlbarkeit und Crawler-Regeln prüfen;',
        'Unternehmens-, Produkt-, Anwendungs- und Fachkompetenzsignale bewerten;',
        'aktuell sichtbare Seiten, Quellen und Beleglücken analysieren;',
        'einen priorisierten 90-Tage-Maßnahmenplan mit Empfehlung für Umsetzen, Abwarten oder Nicht-Investieren erstellen.',
      ],
      callout:
        'Sie erhalten nach einer kurzen Ersteinschätzung einen klar abgegrenzten Leistungsumfang und einen festen Projektpreis. Die Ersteinschätzung ist kein vollständiges kostenloses Audit.',
      layout: 'list',
    },
    {
      id: 'pilot',
      eyebrow: 'Optionale zweite Phase',
      heading: 'Umsetzungspilot nach dem Audit',
      intro:
        'Wenn die Ausgangslage eine Investition rechtfertigt, kann eine begrenzte Umsetzung folgen. Sie ist nicht Bestandteil jedes Audits und wird separat abgegrenzt.',
      points: [
        'technische Hindernisse korrigieren;',
        'eine zentrale Evidenz- oder Fachseite neu erstellen oder verbessern;',
        'ausgewählte Produkt- oder Anwendungsseiten optimieren;',
        'passende strukturierte Daten implementieren;',
        'Fakten, Produktnamen und Terminologie konsistenter ausrichten;',
        'eine Baseline für Prompt-, Nennungs-, Quellen- und Zitatmonitoring mit Vorher-nachher-Prüfung einrichten.',
      ],
      callout:
        'Ob und in welchem Umfang umgesetzt wird, entscheidet sich nach den Befunden. Eine bestimmte Nennung oder ein Ergebnis innerhalb eines festen Zeitraums wird nicht zugesagt.',
      layout: 'list',
    },
    {
      id: 'ergebnisse',
      eyebrow: 'Ergebnisse',
      heading: 'Was Sie als dokumentierte Arbeitsgrundlage erhalten können',
      intro:
        'Das Ergebnis ist kein abstraktes Versprechen von „mehr Sichtbarkeit“, sondern eine nachvollziehbare Grundlage für Entscheidungen und Umsetzung.',
      points: [
        'dokumentierte Sichtbarkeitsbaseline;',
        'priorisierte Sammlung relevanter Käuferfragen;',
        'Wettbewerbervergleich;',
        'technische Befunde zu Indexierung und Crawlern;',
        'Befunde zu Entitäten, Produktdaten und Inhalten;',
        'Lücken bei Quellen und überprüfbaren Belegen;',
        'priorisierte Empfehlungen nach Wirkung und Aufwand;',
        'konkreter Implementierungs-Backlog;',
        'Messrahmen für Nennungen, Zitate, Quell-URLs und qualifizierte Anfragen;',
        'abschließende Management-Zusammenfassung.',
      ],
      layout: 'list',
    },
    {
      id: 'prozess',
      eyebrow: 'Vorgehen',
      heading: 'In vier Schritten von der Ausgangslage zur kontrollierten Messung',
      items: [
        {
          title: 'Ausgangslage und relevante Käuferfragen definieren',
          body: 'Produkte, Märkte, Sprachen, Wettbewerber und die wichtigsten Informationsbedürfnisse werden gemeinsam abgegrenzt.',
        },
        {
          title: 'Technische, semantische und inhaltliche Signale prüfen',
          body: 'Website, Produktinformationen, Quellen und ausgewählte KI-Antworten werden anhand derselben Fragen untersucht.',
        },
        {
          title: 'Maßnahmen nach Wirkung und Aufwand priorisieren',
          body: 'Befunde werden in einen umsetzbaren Backlog überführt. Nicht jede Lücke erfordert eine neue Seite oder ein neues System.',
        },
        {
          title: 'Umsetzung und Sichtbarkeit kontrolliert messen',
          body: 'Ausgewählte Änderungen werden nachvollziehbar umgesetzt und mit einer definierten Baseline verglichen.',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'warum-hugo-menz',
      eyebrow: 'Warum Hugo Menz',
      heading: 'Industrie verstehen und technische Informationen nutzbar machen',
      paragraphs: [
        'Ich verbinde Erfahrung im Sondermaschinenbau und in industriellen Projekten mit Webentwicklung und Automatisierung. Dadurch kann ich Website-Befunde nicht nur als Marketingthema betrachten, sondern mit Produktdaten, technischen Quellen und internen Informationsprozessen verbinden.',
        'Sie sprechen direkt mit mir – von der Analyse bis zur möglichen technischen Umsetzung. Der Schwerpunkt liegt auf nützlichen, wartbaren Systemen und klaren Fakten statt auf einem kurzfristigen Marketingtrend.',
      ],
      points: [
        'Verständnis für Maschinenbau, industrielle Vertriebsfragen und erklärungsbedürftige Produkte.',
        'Erfahrung mit Softwareentwicklung, APIs, Datenflüssen und Automatisierung.',
        'Technische Informationen, Begriffe und Quellen strukturiert zusammenführen.',
        'Website-Befunde mit Produkt- und Datenprozessen im Unternehmen verbinden.',
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
        'ChatGPT, Gemini, Google AI Overviews beziehungsweise die aktuelle Google-KI-Suche, Perplexity, Microsoft Copilot und Claude entscheiden selbst, welche Informationen sie abrufen und wie sie eine Antwort formulieren.',
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
          'KI-Sichtbarkeit beschreibt, ob KI-Suchsysteme ein Unternehmen, seine technischen Produkte, Anwendungen und Fachkompetenz korrekt verstehen, bei passenden Fragen abrufen und möglicherweise als Quelle berücksichtigen können. Gemessen werden konkrete Fragen, Antworten, Nennungen und verwendete Quellen.',
      },
      {
        question: 'Was ist der Unterschied zwischen SEO, GEO und AI Search Readiness?',
        answer:
          'SEO verbessert vor allem die Auffindbarkeit in klassischen Suchmaschinen. GEO betrachtet Verständnis, Abruf, Nennungen und Zitate in generierten Antworten. AI Search Readiness verbindet beide Perspektiven mit Produktdaten, Quellen, Fachinhalten und einem geschäftlich nutzbaren Messrahmen.',
      },
      {
        question: 'Kann eine Erwähnung in ChatGPT oder Gemini garantiert werden?',
        answer:
          'Nein. Die Plattformen erzeugen ihre Antworten selbst und können Quellen, Modelle und Darstellung jederzeit verändern. Verbessert werden können die Voraussetzungen für Verständnis, Auffindbarkeit, Quellenfähigkeit und Messbarkeit.',
      },
      {
        question: 'Für welche Industrieunternehmen ist das Angebot geeignet?',
        answer:
          'Besonders relevant kann es für Hersteller von Maschinen, Anlagen und technischen Produkten sein, deren Portfolio erklärungsbedürftig, mehrsprachig oder über Website, PDFs, Händler und weitere Quellen verteilt ist. Auch andere B2B-Unternehmen können passen.',
      },
      {
        question: 'Wie wird die Ausgangslage gemessen?',
        answer:
          'Zunächst wird ein priorisierter Satz realer Käuferfragen definiert. Anschließend werden ausgewählte KI-Suchsysteme, sichtbare Antworten, Nennungen, Wettbewerber, Quell-URLs und technische Website-Signale dokumentiert. Diese Baseline dient später als Vergleichspunkt.',
      },
      {
        question: 'Welche Unternehmens- und Produktdaten werden benötigt?',
        answer:
          'Hilfreich sind öffentliche Website-Inhalte, Produktseiten, Datenblätter, FAQs, Terminologielisten, Informationen zu Anwendungen und Zielmärkten sowie zuständige Fachpersonen. Vertrauliche Daten werden nur nach separater Vereinbarung einbezogen.',
      },
      {
        question: 'Müssen neue Inhalte erstellt werden?',
        answer:
          'Nicht automatisch. Häufig lässt sich zunächst vorhandenes Material konsolidieren, präzisieren oder besser verknüpfen. Neue Inhalte sind sinnvoll, wenn wichtige Käuferfragen, Belege, Anwendungen oder Vergleiche bisher nachvollziehbar fehlen.',
      },
      {
        question: 'Können bestehende Produktseiten und PDFs genutzt werden?',
        answer:
          'Ja. Bestehende Seiten und PDFs sind wichtige Quellen für die Analyse. Geprüft wird, ob ihre Inhalte zugänglich, aktuell, konsistent, eindeutig zugeordnet und auf der Website ausreichend auffindbar sind.',
      },
      {
        question: 'Funktioniert die Analyse bei mehrsprachigen Websites?',
        answer:
          'Ja. Sprachen und Märkte werden im Umfang festgelegt. Dabei wird geprüft, ob Produktnamen, Leistungsdaten, Unternehmensfakten und zentrale Aussagen zwischen den Sprachversionen übereinstimmen.',
      },
      {
        question: 'Wie wird entschieden, ob sich eine Umsetzung lohnt?',
        answer:
          'Die Entscheidung berücksichtigt Relevanz der Käuferfragen, aktuelle Sichtbarkeitslücken, technische und organisatorische Voraussetzungen, Wettbewerb sowie Aufwand und erwartbaren geschäftlichen Nutzen. Das Audit kann auch die Empfehlung ergeben, abzuwarten oder nicht zu investieren.',
      },
      {
        question: 'Ersetzt GEO klassisches SEO?',
        answer:
          'Nein. GEO benötigt eine technisch zugängliche Website, hilfreiche Inhalte und vertrauenswürdige Informationen. Klassisches SEO bleibt ein wesentlicher Teil der Grundlage.',
      },
      {
        question: 'Was passiert nach dem Audit?',
        answer:
          'Sie erhalten Befunde, Prioritäten, einen Maßnahmenplan und eine Empfehlung. Anschließend können Sie intern umsetzen, einen begrenzten Pilot beauftragen, einzelne Maßnahmen separat vergeben oder bewusst zunächst nichts verändern.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Nächster Schritt',
    heading: 'KI-Sichtbarkeit Ihres Unternehmens prüfen',
    body:
      'Beschreiben Sie kurz Ihre Website, die wichtigsten Produktgruppen, Zielmärkte und Sprachen. Ich prüfe zunächst, ob sich der Industrial AI Visibility Audit sinnvoll und klar abgrenzen lässt.',
    action: {
      label: 'KI-Sichtbarkeit prüfen lassen',
      href: '#contact-form',
      dataCta: 'ai-search-final',
    },
    note:
      'Nach der Ersteinschätzung erhalten Sie einen klaren Leistungsumfang und einen festen Projektpreis. Die Ersteinschätzung ersetzt kein vollständiges Audit.',
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
