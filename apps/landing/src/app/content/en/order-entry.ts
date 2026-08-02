import type { PageDefinition } from '../page.types';

export const ORDER_ENTRY_AUTOMATION_EN = {
  key: 'order-entry-automation-en',
  path: '/en/order-entry-automation/',
  lang: 'en',
  locale: 'en_GB',
  seo: {
    title: 'Order Entry Automation case study | Hugo Menz',
    description:
      'Market-backed case study: extract order documents, apply deterministic checks, route exceptions to people and prepare an ERP-ready draft.',
    canonicalPath: '/en/order-entry-automation/',
    robots: 'index,follow',
    openGraph: {
      title: 'Order entry as a controlled document workflow',
      description:
        'Unstructured orders are extracted, validated and prepared as an ERP-ready draft with visible human exceptions.',
      type: 'website',
      locale: 'en_GB',
      imagePath: '/og-general-de.png',
      imageAlt:
        'Controlled workflow from an incoming order through validation and human review to an ERP-ready draft',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Order entry as a controlled document workflow',
      description:
        'Market-backed case study with deterministic validation, human exception handling and ERP-ready export.',
      imagePath: '/og-general-de.png',
      imageAlt:
        'Controlled workflow from an incoming order through validation and human review to an ERP-ready draft',
    },
    alternates: [
      { hreflang: 'de-DE', path: '/leistungen/auftragserfassung-automatisierung/' },
      { hreflang: 'en', path: '/en/order-entry-automation/' },
      { hreflang: 'x-default', path: '/leistungen/auftragserfassung-automatisierung/' },
    ],
  },
  breadcrumbs: [
    { label: 'Home', path: '/en/' },
    { label: 'Order entry case study', path: '/en/order-entry-automation/' },
  ],
  hero: {
    kicker: 'Independent product research · local demo · case study',
    h1: 'Prepare order entry as a controlled document workflow',
    lead:
      'A second application of the RFQ method: extract unstructured orders, check required fields and fictitious master data, route exceptions to people and prepare an ERP-ready draft.',
    primaryCta: {
      label: 'Inspect the technical workflow',
      href: '#workflow',
      dataCta: 'order-entry-flow-hero-en',
    },
    secondaryCta: {
      label: 'See the RFQ focus',
      href: '/en/#workflow',
      dataCta: 'rfq-solution-order-entry-hero-en',
    },
    trustLine: 'synthetic data · deterministic rules · no ERP write access',
    diagram: {
      fileLabel: 'order-entry.flow',
      nodes: [
        { stage: 'Input', label: 'email · CSV · document' },
        { stage: 'Extract', label: 'header and line items' },
        { stage: 'Validate', label: 'required fields · master data' },
        { stage: 'Clarify', label: 'human exception' },
        { stage: 'Prepare', label: 'ERP draft · JSON/CSV' },
      ],
      footer: 'local demo · fictitious master data · no external transmission',
    },
  },
  sections: [
    {
      id: 'position',
      eyebrow: 'Strategic position',
      heading: 'RFQ Automation remains the primary focus',
      paragraphs: [
        'Technical request qualification for machinery manufacturers remains my core offer. Order entry is not a new company or a generic data-entry service. It is a researched second application of the same controlled document method.',
        'RFQ work produces a reviewable basis for sales and engineering. Order-entry work produces a reviewable draft for the target system. Sources, rules, exceptions and human responsibility remain visible in both.',
      ],
      layout: 'text',
    },
    {
      id: 'research',
      eyebrow: 'Market research',
      heading: 'Why order entry was selected as a second application',
      intro:
        'The analysis used publicly accessible job postings from Germany’s Federal Employment Agency. It indicates demand for operational tasks, not software budget, customer work or proven savings.',
      points: [
        '1,576 job postings were collected with their detailed descriptions.',
        '1,382 recent and process-relevant postings entered the analysis.',
        '448 postings across 328 companies contained the dominant process from order receipt to ERP preparation or entry.',
        '381 of those postings mentioned controls or exceptions; 334 named at least one system.',
        'The research cut-off is 2 August 2026 and remains a broad sample, not a census of the German market.',
      ],
      callout:
        'These figures support a frequently described work pattern. They do not prove an ERP integration, paying customers, production readiness or realised savings.',
      layout: 'list',
    },
    {
      id: 'workflow',
      eyebrow: 'Controlled workflow',
      heading: 'From an order document to a reviewable ERP draft',
      intro:
        'The prototype separates each step so every rule and exception can be inspected independently.',
      items: [
        {
          title: 'Receive a fictitious order',
          body: 'A synthetic order enters the local demo as a structured payload, CSV, text or email example.',
        },
        {
          title: 'Normalise the fields',
          body: 'Customer ID, purchase order, dates, destination country and line items are mapped to one schema.',
        },
        {
          title: 'Validate required data',
          body: 'Missing order headers, line items, quantities or dates produce a specific blocking reason.',
        },
        {
          title: 'Match fictitious master data',
          body: 'Customers and articles are checked against local samples; price and country rules remain deterministic.',
        },
        {
          title: 'Route exceptions to a person',
          body: 'Unknown records, price deviations and special requests reach a review list with their rule ID and source.',
        },
        {
          title: 'Prepare the draft and audit trail',
          body: 'Only approved cases receive a JSON or CSV draft. The demo records the decision but writes to no ERP.',
        },
      ],
      ordered: true,
      layout: 'ledger',
    },
    {
      id: 'inputs',
      eyebrow: 'Inputs and extraction',
      heading: 'What the local demo can actually read',
      points: [
        'Fictitious presets cover several order and exception types without exposing real company data.',
        'CSV, TXT and EML files are read locally in the browser and mapped to the demo schema.',
        'PDF and XLSX files are not parsed as binary documents. The demo explicitly shows only a prepared adapter payload.',
        'There is no production OCR, mailbox connection or external model call.',
      ],
      callout:
        'Extraction is a replaceable component in this case study. Reliable process control starts with an explicit schema and deterministic checks.',
      layout: 'list',
    },
    {
      id: 'control',
      eyebrow: 'Validation and exceptions',
      heading: 'Rules decide routing; people decide deviations',
      columns: [
        {
          heading: 'Deterministic checks',
          points: [
            'required fields and at least one line item are present',
            'customer exists in the fictitious master-data extract',
            'article exists in the fictitious article master',
            'quantity is positive and order price matches the demo master',
            'additional rules cover export data, billing address or shipping route',
          ],
        },
        {
          heading: 'Human exception handling',
          points: [
            'complete missing or conflicting information',
            'assess price deviations',
            'clarify special requests and unknown configurations',
            'decide master-data changes outside the workflow',
            'record approval or rejection',
          ],
        },
      ],
      layout: 'comparison',
    },
    {
      id: 'status',
      eyebrow: 'Implementation status',
      heading: 'Prototype and case study, not a production integration',
      columns: [
        {
          heading: 'Implemented',
          points: [
            'local web demo with synthetic order scenarios',
            'normalisation into one order schema',
            'required-field, customer, article and price checks',
            'visible exception queue and human review marker',
            'ERP-ready JSON/CSV draft and audit log',
            'locally executable n8n workflow without credentials',
          ],
        },
        {
          heading: 'Not implemented',
          points: [
            'no SAP, Sage, Microsoft Dynamics or other ERP connection',
            'no write to an ERP, CRM, mailbox or third-party system',
            'no production OCR or binary PDF/XLSX parsing',
            'no tenant, role or permission management',
            'no measured savings, SLA or production-quality claim',
            'no real customer documents or private prospect demos',
          ],
        },
      ],
      layout: 'comparison',
    },
    {
      id: 'privacy',
      eyebrow: 'Privacy and limits',
      heading: 'The public presentation is entirely synthetic',
      paragraphs: [
        'Every order, customer, article, price and master-data record in the demo is fictitious. The public case study names no prospects and links no private demos or research repositories.',
        'A later pilot would need explicit decisions on data minimisation, processing agreements, retention, permissions, the target system and stop criteria. The prototype does not implement those decisions.',
      ],
      layout: 'text',
    },
    {
      id: 'rfq-method',
      eyebrow: 'Shared method',
      heading: 'The same control model, a different destination document',
      intro:
        'RFQ Automation remains the specialist line: technical requirements, sources, gaps and risks before costing and engineering. Order entry demonstrates that the same model can prepare an administrative industrial process safely.',
      links: [
        { label: 'RFQ workflow on the English homepage', href: '/en/#workflow' },
        { label: 'View the RFQ Fit Check demo', href: '/en/demo/rfq-fit-check/' },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Questions',
    heading: 'Questions about the order-entry case study',
    items: [
      {
        question: 'Is AuftragKlar a production SaaS?',
        answer:
          'No. AuftragKlar is the working name for independent product research with a local demo and versioned workflow. There is no production platform or customer integration.',
      },
      {
        question: 'Is the demo connected to an ERP?',
        answer:
          'No. It prepares a JSON or CSV draft. There is no write access and no confirmed integration with SAP, Sage, Dynamics or another ERP.',
      },
      {
        question: 'What remains a human decision?',
        answer:
          'A person resolves missing data, price deviations, special requests and unknown master data. Only then can a draft be approved or rejected.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Next step',
    heading: 'Assess one bounded document process',
    body:
      'An initial assessment only needs the input channel, document type, required fields, master data and typical exceptions. No confidential documents are required.',
    action: {
      label: 'Discuss the process boundary',
      href: '#contact-form',
      dataCta: 'order-entry-contact-final-en',
      contactContext: 'process-automation',
    },
    note: 'Case study and local demo · no ERP integration · no productivity claim',
  },
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;

