import type { PageDefinition } from '../page.types';

export const RFQ_DEMO_EN = {
  key: 'rfq-demo-en',
  path: '/en/demo/rfq-fit-check/',
  lang: 'en',
  locale: 'en_GB',
  seo: {
    title: 'RFQ Fit Check demo for machinery manufacturers | Hugo Menz',
    description:
      'Interactive demo: see how an RFQ, PDF and product image become a reviewable technical decision package with gaps, contradictions and sourced evidence.',
    canonicalPath: '/en/demo/rfq-fit-check/',
    robots: 'index,follow',
    openGraph: {
      title: 'RFQ Fit Check demo for machinery manufacturers',
      description:
        'Explore a prepared example showing how RFQ data, a PDF and a product image are checked together.',
      type: 'website',
      locale: 'en_GB',
      imagePath: '/og-rfq-preview-en.png',
      imageAlt: 'RFQ Fit Check showing technical requirements, gaps and source evidence',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'RFQ Fit Check demo for machinery manufacturers',
      description:
        'Prepared RFQ demo with a PDF, product image, cycle-time check and prioritised clarification questions.',
      imagePath: '/og-rfq-preview-en.png',
      imageAlt: 'RFQ Fit Check showing technical requirements, gaps and source evidence',
    },
    alternates: [
      { hreflang: 'de-DE', path: '/de/demo/rfq-fit-check/' },
      { hreflang: 'en', path: '/en/demo/rfq-fit-check/' },
      { hreflang: 'x-default', path: '/en/demo/rfq-fit-check/' },
    ],
  },
  breadcrumbs: [
    { label: 'Home', path: '/en/' },
    { label: 'RFQ Fit Check demo', path: '/en/demo/rfq-fit-check/' },
  ],
  hero: {
    kicker: 'Interactive example analysis',
    h1: 'See what your RFQ Fit Check could look like',
    lead:
      'A prepared customer case shows how form data, a PDF and a product image are reviewed together. Start the demo — everything is already filled in.',
  },
  sections: [
    {
      id: 'demo',
      heading: 'Prepared technical customer enquiry',
      intro:
        'The demo simulates the process without transferring real customer data. Required fields, technical rules, standard solutions and tone can later be adapted to your company.',
      layout: 'text',
    },
  ],
  finalCta: {
    eyebrow: 'For your process',
    heading: 'Test your own RFQ rules and documents',
    body:
      'In a clearly scoped pilot, we identify which inputs, documents and approvals actually matter in your quotation process.',
    action: {
      label: 'Discuss an RFQ Fit Check',
      href: '/en/#contact',
      dataCta: 'rfq-demo-contact-en',
      contactContext: 'rfq',
    },
  },
  schemaKinds: ['BreadcrumbList', 'Service'],
} as const satisfies PageDefinition;
