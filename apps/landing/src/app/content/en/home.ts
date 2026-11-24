import { contactAction, pageFooter, pageHeader, pageSeo, PAGE_PAIRS, projectDiagram } from '../page.helpers';
import type { PageDefinition } from '../page.types';

export const HOME_EN = {
  key: 'home-en',
  path: '/en/',
  lang: 'en',
  locale: 'en_GB',
  seo: pageSeo(
    'en',
    '/en/',
    'Angular, GitHub Copilot & Automation | Hugo Martin',
    'Hugo Martin in Stuttgart: Angular applications, GitHub Copilot skills and agents, and process automation for small businesses and development teams.',
    PAGE_PAIRS.home,
  ),
  header: pageHeader('en', '/'),
  breadcrumbs: [{ label: 'Home', path: '/en/' }],
  hero: {
    kicker: 'Technical services · Stuttgart',
    h1: 'Build with Angular. Set up Copilot. Automate workflows.',
    lead: 'I am Hugo Martin. I support small businesses and development teams with web applications, internal tools and automated workflows. I work directly with you, alongside my main role, with a clear project scope.',
    primaryCta: contactAction('en'),
    secondaryCta: { label: 'Explore services', href: '/en/#services' },
    trustLine: 'One point of contact · specific tasks · documented handover',
    diagram: projectDiagram('en'),
  },
  sections: [
    {
      id: 'services',
      heading: 'Three areas of technical support',
      intro: 'We start with a specific task in your application, your development work or a recurring business process.',
      items: [
        {
          label: '01',
          title: 'Angular development',
          body: 'Build web applications and internal tools, extend existing applications and implement existing design systems as Angular component libraries.',
          link: { label: 'Explore Angular development', href: '/en/angular-development/' },
        },
        {
          label: '02',
          title: 'GitHub Copilot and Developer Experience',
          body: 'Set up custom skills and agents, coordinate tasks between agents and automate recurring development work.',
          link: { label: 'Explore GitHub Copilot support', href: '/en/github-copilot/' },
        },
        {
          label: '03',
          title: 'Process automation',
          body: 'Connect forms, email, CRM and other systems through APIs. Build recurring administrative workflows with n8n, Make or Power Automate.',
          link: { label: 'Explore process automation', href: '/en/process-automation/' },
        },
      ],
      layout: 'list',
    },
    {
      id: 'starting-point',
      heading: 'A small, clear task is a useful starting point',
      intro: 'These examples show possible project scopes. Together, we choose the part you need.',
      items: [
        {
          title: 'An internal form connected to your data',
          body: 'A team enters data in an Angular application. Fields, validation and the API connection are built around one clear workflow.',
        },
        {
          title: 'A Copilot workflow for your repository',
          body: 'Project knowledge, recurring steps and review criteria become instructions, skills and agents for a selected development task.',
        },
        {
          title: 'A workflow between two existing tools',
          body: 'For example, read form data, update a record and notify the right person. The workflow also covers errors and exceptions.',
        },
      ],
      layout: 'list',
    },
    {
      id: 'working-together',
      heading: 'Clear scope and direct collaboration',
      paragraphs: [
        'You describe the task, the tools involved and the result you want. We identify a practical scope and any information needed before development.',
        'Before starting, we agree on scope, cost and timing. We then build and review one specific part. The handover includes the agreed files or workflows and clear documentation.',
        'I work independently and offer these services alongside my main job. We agree on availability and any further support for each project.',
      ],
      layout: 'text',
    },
    {
      id: 'about-me',
      heading: 'Hugo Martin. Technical background, practical development.',
      paragraphs: [
        'I moved from mechanical engineering into software development. Today, I work as a UX Engineer at EPLAN on a shared Angular component library and tools for developers.',
        'A main focus is GitHub Copilot: custom skills and agents, coordination between them and automated development workflows. This technical experience also shapes my independent work.',
      ],
      links: [{ label: 'More about me', href: '/en/about/' }],
      layout: 'profile',
    },
  ],
  faq: {
    id: 'questions',
    heading: 'Before your first project',
    items: [
      {
        question: 'Do I need a complete specification?',
        answer: 'A short description is enough for the first contact: what happens today, which tools are involved and what should change? We use that to define a suitable first scope.',
      },
      {
        question: 'Can you help with an existing system?',
        answer: 'Yes. A focused feature, an Angular component, a Copilot workflow or one integration can be a useful starting point.',
      },
      {
        question: 'How do we agree on price and availability?',
        answer: 'Both depend on the task, access requirements and effort. Before you commission the work, I provide a clear proposal for scope, cost and timing. We plan around my part-time availability.',
      },
    ],
  },
  finalCta: {
    heading: 'Which task would you like to work on?',
    body: 'Briefly describe your current workflow, the tools you use and the result you want. We can then discuss a practical next step.',
    action: contactAction('en'),
    note: 'A short description is enough for the first contact.',
  },
  footer: pageFooter('en'),
  schemaKinds: ['Person', 'Organization', 'WebSite', 'FAQPage'],
} as const satisfies PageDefinition;
