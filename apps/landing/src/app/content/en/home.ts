import type { PageDefinition } from '../page.types';

export const HOME_EN = {
  key: 'home-en',
  path: '/en/',
  lang: 'en',
  locale: 'en',
  seo: {
    title: 'Digitise quotation processes for machinery manufacturers | Hugo Menz',
    description:
      'Structure technical requests, identify missing information and prepare a rule-based budget basis for one machine family with human approval.',
    canonicalPath: '/en/',
    robots: 'index,follow',
    openGraph: {
      title: 'Digitise quotation processes for machinery manufacturers',
      description:
        'Turn emails, specifications, photos and PDFs into a reviewable requirements record with open points, approved rules and human sign-off.',
      type: 'website',
      locale: 'en',
      imagePath: '/og-rfq-preview.png',
      imageAlt:
        'Technical request qualification for machinery manufacturers with approved rules and human sign-off',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Digitise quotation processes for machinery manufacturers',
      description:
        'Turn emails, specifications, photos and PDFs into a reviewable requirements record with open points, approved rules and human sign-off.',
      imagePath: '/og-rfq-preview.png',
      imageAlt:
        'Technical request qualification for machinery manufacturers with approved rules and human sign-off',
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
      { label: 'Solution', href: '/en/#solution' },
      { label: 'Industries', href: '/en/#industries' },
      { label: 'Services', href: '/en/#process' },
      { label: 'About Hugo', href: '/en/#about' },
      { label: 'Contact', href: '/en/#contact' },
      { label: 'DE', href: '/', lang: 'de' },
    ],
    cta: { label: 'Check pilot fit', href: '/en/#contact', dataCta: 'readiness-header' },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'English', path: '/en/' },
  ],
  hero: {
    kicker: 'Technical sales processes · Stuttgart / Baden-Württemberg',
    h1: 'Digitise quotation processes for machinery manufacturers',
    lead:
      'I help machinery manufacturers turn incomplete requests, emails, specifications, photos and PDFs into a reviewable requirements record with open points, risks and a rule-based budget basis — before approval by a sales engineer.',
    primaryCta: {
      label: 'Check pilot fit',
      href: '/en/#contact',
      dataCta: 'readiness-hero',
    },
    secondaryCta: {
      label: 'How the internal RFQ copilot works',
      href: '/en/#solution',
      dataCta: 'copilot-hero',
    },
    trustLine: 'One machine family · approved rules · human review',
    diagram: {
      fileLabel: 'technical-request.flow',
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
      heading: 'From incomplete requests to a reviewable quotation basis',
      paragraphs: [
        'Technical requests rarely arrive in the format sales and engineering need for a reliable first assessment. Information is spread across emails, attachments, photos, notes and spreadsheets. Before a budget indication is possible, someone has to structure the content, identify gaps and make assumptions visible.',
      ],
      layout: 'text',
    },
    {
      id: 'solution',
      heading: 'What the internal RFQ copilot prepares',
      points: [
        'A structured requirements record.',
        'Missing information and contradictions.',
        'Prioritised follow-up questions.',
        'A rule-based budget basis from approved sources only.',
        'A clean handover for sales, engineering or CRM.',
      ],
      links: [
        {
          label: 'Technical request qualification (German service page)',
          href: '/loesungen/technische-anfragequalifizierung/',
          lang: 'de',
        },
        {
          label: 'Internal RFQ copilot (German service page)',
          href: '/leistungen/interner-rfq-copilot/',
          lang: 'de',
        },
      ],
      layout: 'list',
    },
    {
      id: 'control',
      heading: 'Where rules end and engineering begins',
      paragraphs: [
        'AI can interpret documents, but it must not invent prices, approve feasibility or send an offer. If a rule is missing or a case falls outside the defined technical envelope, the system must stop and escalate it for review.',
      ],
      layout: 'text',
    },
    {
      id: 'industries',
      heading: 'Suitable machine families',
      items: [
        {
          title: 'End-of-line equipment.',
          link: {
            label: 'End-of-line equipment (German page)',
            href: '/branchen/end-of-line/',
            lang: 'de',
          },
        },
        {
          title: 'Secondary packaging machinery.',
          link: {
            label: 'Secondary packaging machinery (German page)',
            href: '/branchen/verpackungsmaschinen/',
            lang: 'de',
          },
        },
        {
          title: 'Robotic palletising systems within a defined envelope.',
          link: {
            label: 'Robotic palletising systems (German page)',
            href: '/branchen/palettieranlagen/',
            lang: 'de',
          },
        },
      ],
      layout: 'cards',
    },
    {
      id: 'process',
      heading: 'A controlled path to implementation',
      items: [
        {
          title: 'RFQ readiness workshop.',
          link: {
            label: 'RFQ readiness workshop (German service page)',
            href: '/leistungen/rfq-readiness-workshop/',
            lang: 'de',
          },
        },
        { title: 'Historical evaluation.' },
        { title: 'Shadow-mode internal pilot.' },
        { title: 'Limited internal rollout.' },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'about',
      heading: 'Mechanical engineering experience with practical software delivery',
      paragraphs: [
        'I am a mechanical engineer and web developer based in Stuttgart. I combine around eight years of experience in special-purpose machinery, design, bills of materials, purchasing and project coordination with around three years of experience in Angular, TypeScript, APIs, webhooks, n8n, Make and automation.',
      ],
      links: [
        { label: 'About Hugo Menz (German page)', href: '/ueber-hugo-menz/', lang: 'de' },
        {
          label: 'Quotation process automation in Stuttgart (German page)',
          href: '/standorte/stuttgart/',
          lang: 'de',
        },
      ],
      layout: 'profile',
    },
  ],
  finalCta: {
    eyebrow: 'Next step',
    heading: 'Is one of your machine families suitable for this approach?',
    body: 'The first step is to assess process, volume, data, rules and technical limits. The result may also be a clear recommendation not to automate.',
    action: {
      label: 'Discuss a machine family',
      href: '/kontakt/',
      lang: 'de',
      dataCta: 'contact-final',
    },
    note: 'The contact form is currently available in German.',
  },
  footer: {
    left: 'Hugo Menz Automation',
    right: 'Technical request qualification and digital quotation processes for machinery manufacturers.',
    secondaryLink: {
      label: 'n8n consulting in Stuttgart (German page)',
      href: '/n8n-beratung-stuttgart/',
      lang: 'de',
    },
  },
  schemaKinds: ['Person', 'ProfessionalService', 'WebSite', 'BreadcrumbList'],
} as const satisfies PageDefinition;
