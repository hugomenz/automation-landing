import type { PageDefinition } from '../page.types';

export const HOME_EN = {
  key: 'home-en',
  path: '/en/',
  lang: 'en',
  locale: 'en',
  seo: {
    title: 'UX Engineering and Process Automation | Hugo Menz',
    description:
      'User-friendly internal tools, process automation and system integrations for complex technical and operational workflows.',
    canonicalPath: '/en/',
    robots: 'index,follow',
    openGraph: {
      title: 'UX Engineering and Process Automation',
      description:
        'Turn complex workflows into clear interfaces, structured data and controlled automation.',
      type: 'website',
      locale: 'en',
      imagePath: '/og-general-en.png',
      imageAlt: 'UX engineering for digital processes, automation and integrations',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'UX Engineering and Process Automation',
      description:
        'Turn complex workflows into clear interfaces, structured data and controlled automation.',
      imagePath: '/og-general-en.png',
      imageAlt: 'UX engineering for digital processes, automation and integrations',
    },
    alternates: [
      { hreflang: 'de-DE', path: '/' },
      { hreflang: 'en', path: '/en/' },
      { hreflang: 'x-default', path: '/' },
    ],
  },
  header: {
    brand: 'Hugo Menz Automation',
    subtitle: 'UX Engineering · Processes · Automation',
    navigation: [
      { label: 'Services', href: '/en/#services' },
      { label: 'Use cases', href: '/en/#use-cases' },
      {
        label: 'AI Search',
        href: '/en/ai-search-readiness-industrial-companies/',
      },
      { label: 'About Hugo', href: '/en/#about' },
      { label: 'DE', href: '/', lang: 'de' },
    ],
    cta: { label: 'Introductory call', href: '#contact-form', dataCta: 'contact-header' },
  },
  breadcrumbs: [
    { label: 'Startseite', path: '/' },
    { label: 'English', path: '/en/' },
  ],
  hero: {
    kicker: 'UX Engineering · Digital Processes · Automation',
    h1: 'Make digital processes clear and usable',
    lead:
      'I combine UX engineering, interface development and automation to turn fragmented work into clear, usable digital processes — especially where documents, specialist knowledge and several systems come together.',
    primaryCta: {
      label: 'Introductory call',
      href: '#contact-form',
      dataCta: 'contact-hero',
    },
    secondaryCta: {
      label: 'View services',
      href: '/en/#services',
      dataCta: 'services-hero',
    },
    trustLine: 'UX engineering · clear processes · controlled automation',
    diagram: {
      fileLabel: 'digital-process.flow',
      nodes: [
        { stage: 'Input', label: 'Email · form · document' },
        { stage: 'Structure', label: 'Data and context' },
        { stage: 'Process', label: 'Rules and integrations' },
        { stage: 'Review', label: 'Exceptions and approvals' },
        { stage: 'Handover', label: 'Team · CRM · business system' },
      ],
      footer: 'traceable · user-centred · controlled',
    },
  },
  sections: [
    {
      id: 'problem',
      heading: 'When information, systems and work steps do not fit together',
      paragraphs: [
        'Many processes are slow because information is scattered, entered more than once or reaches the right person too late. I first look at the real workflow, then design a solution that gives people clarity and only automates steps supported by reliable data and rules.',
      ],
      points: [
        'Requests and documents arrive without a consistent structure.',
        'Data is copied repeatedly from emails or PDFs.',
        'Approvals and responsibilities are unclear.',
        'Information is lost between departments.',
        'Internal tools are difficult to understand or use.',
        'Forms, email, CRM and business systems remain disconnected.',
      ],
      layout: 'list',
    },
    {
      id: 'services',
      heading: 'What I design and improve',
      intro:
        'The right scope may be one interface, an integration or an end-to-end internal workflow. The tool matters less than making the process clearer and more reliable.',
      items: [
        {
          title: 'Interfaces and internal tools',
          body: 'Clear screens and UI components for tasks currently spread across spreadsheets, emails or difficult systems.',
        },
        {
          title: 'Structured information capture',
          body: 'Forms and workflows that collect relevant details, organise them clearly and prepare them for further work.',
        },
        {
          title: 'Process automation',
          body: 'Traceable workflows for routine tasks, checks, notifications and approvals, with visible exceptions.',
        },
        {
          title: 'System integrations',
          body: 'Connections between forms, email, CRM, APIs and internal systems without hiding professional responsibility.',
        },
        {
          title: 'Technical request qualification',
          body: 'An industrial example: preparing documents, requirements, gaps and sources for sales and engineering review.',
          link: {
            label: 'Technical request qualification (German)',
            href: '/loesungen/technische-anfragequalifizierung/',
            lang: 'de',
          },
        },
        {
          title: 'AI-search visibility',
          body: 'Improving the company, product and expert information that helps search and AI systems understand an industrial business.',
          link: {
            label: 'AI Search Readiness for industry',
            href: '/en/ai-search-readiness-industrial-companies/',
          },
        },
      ],
      layout: 'cards',
    },
    {
      id: 'approach',
      heading: 'Understand users and respect operational reality',
      intro:
        'A useful digital solution has to work for the people using it and with the company’s actual data, rules and responsibilities.',
      columns: [
        {
          heading: 'UX and usability',
          points: [
            'Understand users’ tasks and information needs.',
            'Design clear steps, states and feedback.',
            'Prevent errors and make corrections understandable.',
            'Show complexity only where it is needed.',
          ],
        },
        {
          heading: 'Process and technical reality',
          points: [
            'Clarify data sources, rules and interfaces.',
            'Keep exceptions and human decisions visible.',
            'Secure handovers between roles and systems.',
            'Choose a maintainable solution without unnecessary technology.',
          ],
        },
      ],
      callout:
        'My background in special-purpose machinery and industrial automation helps me understand technical and operational dependencies. UX engineering turns that understanding into a workflow people can use.',
      layout: 'comparison',
    },
    {
      id: 'use-cases',
      heading: 'Where this approach is particularly useful',
      intro:
        'My deepest process experience comes from industry and machinery. The approach also fits other complex B2B workflows where information needs to move safely between people and systems.',
      items: [
        {
          title: 'Requests and documents',
          body: 'Capture different inputs, expose missing information and create a reviewable working record.',
        },
        {
          title: 'Manual routine work',
          body: 'Reduce repeated transfers, checks and notifications without ignoring exceptions.',
        },
        {
          title: 'Handovers and approvals',
          body: 'Make responsibilities, status and next steps clear across teams.',
        },
        {
          title: 'Difficult internal tools',
          body: 'Simplify interfaces, clarify information hierarchy and support frequent tasks.',
        },
      ],
      layout: 'cards',
    },
    {
      id: 'process',
      heading: 'From the current situation to a usable solution',
      items: [
        {
          title: 'Define the problem.',
          body: 'The introductory call covers the current workflow, people and systems involved, and the main bottleneck.',
        },
        {
          title: 'Understand process and use.',
          body: 'I map tasks, information, rules, exceptions and handovers to define a useful scope.',
        },
        {
          title: 'Design and implement.',
          body: 'The interface, workflow or integration is built within a clear boundary and with traceable decisions.',
        },
        {
          title: 'Test in real work.',
          body: 'The solution is checked with realistic cases, documented and expanded only where useful.',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'about',
      heading: 'UX engineering backed by industrial process experience',
      paragraphs: [
        'I work as a UX engineer for digital processes and automation. Before that, I spent around eight years in special-purpose machinery and industrial automation, including mechanical design, technical coordination, purchasing, supplier coordination and project delivery.',
        'Today I combine that process understanding with interface development, UI components, APIs and automation. You work directly with me from the first assessment through to a possible implementation.',
      ],
      links: [
        { label: 'More about my background (German)', href: '/ueber-hugo-menz/', lang: 'de' },
        { label: 'Working together in Stuttgart (German)', href: '/standorte/stuttgart/', lang: 'de' },
      ],
      layout: 'profile',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Frequently asked questions',
    heading: 'Questions about working together',
    items: [
      {
        question: 'Do you only work with machinery manufacturers?',
        answer:
          'No. My machinery background is useful for complex technical and operational work, but it is not an industry boundary. What matters is whether a process, internal interface or data flow can be improved meaningfully.',
      },
      {
        question: 'Which processes are suitable for automation?',
        answer:
          'Good candidates contain recurring steps, clear information handovers or repeated manual transfers. Exceptions and decisions that require expertise should remain visible to the responsible people.',
      },
      {
        question: 'Does this require a completely new system?',
        answer:
          'Not necessarily. A better interface, clearer form, targeted integration or small internal workflow may be enough.',
      },
      {
        question: 'What happens in the introductory call?',
        answer:
          'You describe the current workflow and intended outcome. I provide an initial view of whether and how the problem can be scoped. The call is not a complete free analysis.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Next step',
    heading: 'Which process would you like to make easier to use?',
    body:
      'Briefly describe the current workflow and the main bottleneck. In an introductory call, I will help clarify a sensible next step.',
    action: {
      label: 'Introductory call',
      href: '#contact-form',
      dataCta: 'contact-final',
    },
    note: 'Non-confidential context is enough for the first contact.',
  },
  footer: {
    left: 'Hugo Menz Automation',
    right: 'UX engineering, digital processes and automation for complex B2B workflows.',
    secondaryLink: {
      label: 'n8n consulting in Stuttgart (German)',
      href: '/n8n-beratung-stuttgart/',
      lang: 'de',
    },
  },
  schemaKinds: ['Person', 'ProfessionalService', 'WebSite', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
