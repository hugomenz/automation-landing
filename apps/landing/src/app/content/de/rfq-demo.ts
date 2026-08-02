import type { PageDefinition } from '../page.types';

export const RFQ_DEMO_DE = {
  key: 'rfq-demo-de',
  path: '/de/demo/rfq-fit-check/',
  lang: 'de',
  locale: 'de_DE',
  seo: {
    title: 'RFQ-Fit-Check Demo für Maschinenbauer | Hugo Menz',
    description:
      'Interaktive Demo: Eine technische Kundenanfrage mit PDF und Produktbild wird strukturiert, auf Lücken und Widersprüche geprüft und für Vertrieb und Engineering vorbereitet.',
    canonicalPath: '/de/demo/rfq-fit-check/',
    robots: 'index,follow',
    openGraph: {
      title: 'RFQ-Fit-Check Demo für Maschinenbauer',
      description:
        'Sehen Sie an einem vorbereiteten Beispiel, wie PDF, Produktbild und RFQ-Daten zu einer prüfbaren Entscheidungsgrundlage werden.',
      type: 'website',
      locale: 'de_DE',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'RFQ-Fit-Check mit technischen Anforderungen, Lücken und Quellen',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'RFQ-Fit-Check Demo für Maschinenbauer',
      description:
        'Vorbereitete Demo mit PDF, Produktbild, Taktzeit-Prüfung und priorisierten Rückfragen.',
      imagePath: '/og-rfq-preview.png',
      imageAlt: 'RFQ-Fit-Check mit technischen Anforderungen, Lücken und Quellen',
    },
    alternates: [
      { hreflang: 'de-DE', path: '/de/demo/rfq-fit-check/' },
      { hreflang: 'en', path: '/en/demo/rfq-fit-check/' },
      { hreflang: 'x-default', path: '/en/demo/rfq-fit-check/' },
    ],
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'RFQ-Fit-Check Demo', path: '/de/demo/rfq-fit-check/' },
  ],
  hero: {
    kicker: 'Interaktive Beispielanalyse',
    h1: 'So könnte Ihr RFQ-Fit-Check aussehen',
    lead:
      'Ein vorbereiteter Kundenfall zeigt, wie Formularangaben, PDF und Produktbild gemeinsam geprüft werden. Starten Sie die Demo – alle Daten sind bereits ausgefüllt.',
  },
  sections: [
    {
      id: 'demo',
      heading: 'Vorbereitete technische Kundenanfrage',
      intro:
        'Die Demo simuliert den Ablauf ohne echte Kundendaten zu übertragen. Im späteren System lassen sich Pflichtfelder, technische Regeln, Standardlösungen und die gewünschte Tonalität an Ihr Unternehmen anpassen.',
      layout: 'text',
    },
  ],
  finalCta: {
    eyebrow: 'Für Ihren Prozess',
    heading: 'Eigene RFQ-Regeln und Dokumente testen',
    body:
      'In einem klar abgegrenzten Pilot prüfen wir, welche Angaben, Dokumente und Freigaben für Ihren Angebotsprozess wirklich relevant sind.',
    action: {
      label: 'RFQ-Fit-Check anfragen',
      href: '/kontakt/',
      dataCta: 'rfq-demo-contact',
      contactContext: 'rfq',
    },
  },
  schemaKinds: ['BreadcrumbList', 'Service'],
} as const satisfies PageDefinition;
