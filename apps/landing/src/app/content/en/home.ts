import type { PageDefinition } from '../page.types';

export const HOME_EN = {
  key: 'home-en',
  path: '/en/',
  lang: 'en',
  locale: 'en_GB',
  seo: {
    title: 'Automate quotation processes for machinery manufacturers | Hugo Menz',
    description:
      'Turn technical enquiries, emails, specifications, photos and PDFs into a reviewable quotation basis using approved rules and human review.',
    canonicalPath: '/en/',
    robots: 'index,follow',
    openGraph: {
      title: 'Automate quotation processes for machinery manufacturers',
      description:
        'Turn incomplete technical enquiries into a reviewable quotation basis with open points, approved rules and human review.',
      type: 'website',
      locale: 'en_GB',
      imagePath: '/og-rfq-preview-en.png',
      imageAlt:
        'Technical enquiry qualification for machinery manufacturers with approved rules and human review',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Automate quotation processes for machinery manufacturers',
      description:
        'Turn incomplete technical enquiries into a reviewable quotation basis with open points, approved rules and human review.',
      imagePath: '/og-rfq-preview-en.png',
      imageAlt:
        'Technical enquiry qualification for machinery manufacturers with approved rules and human review',
    },
    alternates: [
      { hreflang: 'de-DE', path: '/' },
      { hreflang: 'en', path: '/en/' },
      { hreflang: 'x-default', path: '/' },
    ],
  },
  header: {
    brand: 'Hugo Menz Automation',
    subtitle: 'Technical quotation processes · Machinery',
    navigation: [
      { label: 'Solution', href: '/en/#internal-rfq-copilot' },
      { label: 'Who it is for', href: '/en/#fit' },
      { label: 'Approach', href: '/en/#process' },
      { label: 'About Hugo', href: '/en/#about' },
      { label: 'Contact', href: '/en/#contact' },
      { label: 'DE', href: '/', lang: 'de' },
    ],
    cta: {
      label: 'Check pilot fit',
      href: '#contact-form',
      dataCta: 'readiness-header',
      contactContext: 'rfq',
    },
  },
  breadcrumbs: [
    { label: 'Home', path: '/en/' },
    { label: 'English', path: '/en/' },
  ],
  hero: {
    kicker: 'Technical quotation processes · Machinery manufacturing · Stuttgart',
    h1: 'Turn technical enquiries into a reviewable quotation basis',
    lead:
      'I help machinery manufacturers turn incomplete enquiries into a reviewable basis for sales and engineering.',
    primaryCta: {
      label: 'Check pilot fit',
      href: '#contact-form',
      dataCta: 'readiness-hero',
      contactContext: 'rfq',
    },
    secondaryCta: {
      label: 'How the internal RFQ copilot works',
      href: '/en/#internal-rfq-copilot',
      dataCta: 'copilot-hero',
    },
    trustLine: 'Clear quotation process · approved rules · human review',
    diagram: {
      fileLabel: 'technical-enquiry.flow',
      nodes: [
        { stage: 'Input', label: 'Email · specification · photos' },
        { stage: 'Structure', label: 'Requirements and sources' },
        { stage: 'Check', label: 'Gaps · contradictions · risks' },
        { stage: 'Calculate', label: 'approved rules' },
        { stage: 'Approve', label: 'Sales engineer' },
      ],
      footer: 'no invented prices · no autonomous approval',
    },
  },
  sections: [
    {
      id: 'problem',
      eyebrow: 'Current situation',
      heading: 'Why the first quotation phase requires so much coordination',
      intro:
        'Technical enquiries are often spread across emails, specifications, PDFs, photos and spreadsheets. The details must be brought together before a reliable assessment.',
      points: [
        'Relevant product, performance or interface data is missing.',
        'Documents contain conflicting values or assumptions.',
        'Sales engineers repeatedly clarify the same basic questions.',
        'Budget knowledge is held in spreadsheets, rules or individual experience.',
        'Assumptions and exclusions are lost during handover to engineering.',
      ],
      paragraphs: [
        'The useful first step is traceable preparation for a technical decision, not an automatically generated quotation.',
      ],
      layout: 'list',
    },
    {
      id: 'workflow',
      eyebrow: 'Process',
      heading: 'From customer enquiry to human approval',
      items: [
        {
          label: 'Step 1',
          title: 'Capture the enquiry',
          body: 'Emails, specifications, PDFs, photos, notes and form data are collected together with their sources.',
        },
        {
          label: 'Step 2',
          title: 'Structure requirements',
          body: 'Information is mapped to the approved schema for the selected product or solution area.',
        },
        {
          label: 'Step 3',
          title: 'Review open points',
          body: 'Missing information, contradictions, assumptions, follow-up questions and risks remain visible.',
        },
        {
          label: 'Step 4',
          title: 'Prepare a budget basis',
          body: 'Only approved modules, tables, factors and formulas may contribute internal budget values.',
        },
        {
          label: 'Step 5',
          title: 'Human review and approval',
          body: 'A sales engineer reviews the result before it is used in customer communication, costing, engineering or the CRM.',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'internal-rfq-copilot',
      eyebrow: 'Internal RFQ copilot',
      heading: 'What the internal RFQ copilot prepares',
      intro:
        'The copilot works internally and within a clearly defined technical scope. It prepares information for sales and engineering; it does not replace their decision.',
      items: [
        {
          title: 'Structured requirements record',
          body: 'Requirements, units, sources and status are brought into one shared schema.',
        },
        {
          title: 'Missing information',
          body: 'Required inputs for the first technical assessment are clearly marked.',
        },
        {
          title: 'Contradictions and risks',
          body: 'Conflicting values, unconfirmed assumptions and technical blockers remain visible.',
        },
        {
          title: 'Prioritised follow-up questions',
          body: 'Open points become a focused question list for the customer, sales or engineering.',
        },
        {
          title: 'Rule-based budget basis',
          body: 'Internal values come only from approved modules, tables, factors and formulas.',
        },
        {
          title: 'Clean handover',
          body: 'The reviewed result can be passed to sales, engineering, calculation or CRM.',
        },
      ],
      links: [
        {
          label: 'Internal RFQ copilot (German service page)',
          href: '/leistungen/interner-rfq-copilot/',
          lang: 'de',
        },
      ],
      layout: 'cards',
    },
    {
      id: 'control',
      eyebrow: 'Limits and control',
      heading: 'Where rules end and engineering begins',
      intro:
        'AI can interpret documents, but it cannot take responsibility for technical feasibility, costs or margin.',
      columns: [
        {
          heading: 'The system may',
          points: [
            'extract information and link it to its source;',
            'map terms into an approved requirements schema;',
            'flag missing information, contradictions and risks;',
            'suggest follow-up questions;',
            'apply deterministic rules and versioned tables.',
          ],
        },
        {
          heading: 'The system must not',
          points: [
            'invent prices, modules or dimensions;',
            'confirm technical feasibility by itself;',
            'approve margins, assumptions or risks;',
            'send a customer response or quotation automatically;',
            'silently process cases outside the defined scope.',
          ],
        },
      ],
      callout:
        'If a rule is missing or a case falls outside the defined technical scope, the system must stop and escalate it for review.',
      layout: 'comparison',
    },
    {
      id: 'fit',
      eyebrow: 'Who it is for',
      heading: 'For small and medium-sized machinery manufacturers',
      intro:
        'The approach can fit regardless of the machinery they build when part of the technical quotation process can be described consistently and scoped clearly.',
      points: [
        'One product or solution area can be clearly defined.',
        'Inputs, modules, options or technical limits repeat across enquiries.',
        'Historical enquiries, checklists, tables or approved rules are usable.',
        'A responsible expert can review rules and results.',
        'The enquiry volume justifies structured preparation.',
      ],
      callout:
        'If every project requires completely new trials, simulation or engineering, a rule-based budget basis may not be appropriate.',
      layout: 'list',
    },
    {
      id: 'process',
      eyebrow: 'Approach',
      heading: 'A controlled path to implementation',
      items: [
        {
          label: 'Step 1',
          title: 'RFQ readiness workshop',
          body: 'Assess process, volume, data, rules and risks. The outcome can be go, conditional go or no-go.',
        },
        {
          label: 'Step 2',
          title: 'Historical evaluation',
          body: 'Use previous enquiries and approved calculations to test the schema, sources, rules and boundaries.',
        },
        {
          label: 'Step 3',
          title: 'Shadow-mode pilot',
          body: 'Process new cases alongside the existing workflow without automating customer communication or official calculations.',
        },
        {
          label: 'Step 4',
          title: 'Limited internal rollout',
          body: 'Extend internal use only after rules are stable and the reviewed quality is accepted.',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'about',
      heading: 'UX Engineer with a mechanical engineering background',
      paragraphs: [
        'I currently work as a UX Engineer for digital processes and automation. I design interfaces and workflows that make complex information understandable and reviewable.',
        'Before moving into software and digitalisation, I spent around eight years in special-purpose machinery and industrial automation. Today I combine that background with UX and digital product work.',
      ],
      layout: 'profile',
    },
    {
      id: 'further-automation',
      eyebrow: 'Further automation',
      heading: 'Does another technical or operational process consume unnecessary time?',
      paragraphs: [
        'In addition to technical quotation processes, I support clearly scoped automation, document workflows and system integrations.',
      ],
      links: [
        {
          label: 'Further process automation (German page)',
          href: '/leistungen/prozessautomatisierung/',
          lang: 'de',
        },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Frequently asked questions',
    heading: 'Questions about technical enquiry qualification',
    items: [
      {
        question: 'Who is this suitable for?',
        answer:
          'Small and medium-sized machinery manufacturers, regardless of the machinery they build, provided part of the quotation process can be described consistently.',
      },
      {
        question: 'Does a CPQ system need to be in place?',
        answer:
          'No. A pilot can start before CPQ and first structure requirements, sources, gaps and approved calculation rules.',
      },
      {
        question: 'Can AI set prices?',
        answer:
          'No. Prices and budget values may come only from approved tables, modules, factors or formulas. AI may classify information, but it must not invent a price.',
      },
      {
        question: 'Are customers contacted automatically?',
        answer:
          'Not in the initial pilot. The system works internally. Questions and results are used only after human review.',
      },
      {
        question: 'When should the process not be automated?',
        answer:
          'When volume is too low, projects are barely repeatable, rules cannot be maintained or every first assessment requires new trials and detailed engineering.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Next step',
    heading: 'Is your quotation process suitable for this approach?',
    body:
      'Describe the quotation process, approximate enquiry volume, roles involved and main bottleneck. I will assess whether a clearly scoped review is useful.',
    action: {
      label: 'Check pilot fit',
      href: '#contact-form',
      dataCta: 'readiness-final',
      contactContext: 'rfq',
    },
    note: 'No autonomous quotation. No invented prices. Human approval remains required.',
  },
  footer: {
    left: 'Hugo Menz Automation',
    right: 'Technical enquiry qualification and quotation processes for machinery manufacturers.',
    secondaryLink: {
      label: 'Further process automation (German page)',
      href: '/leistungen/prozessautomatisierung/',
      lang: 'de',
    },
  },
  schemaKinds: ['Person', 'ProfessionalService', 'WebSite', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
