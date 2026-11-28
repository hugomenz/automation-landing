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
    'AI Agents & Process Automation | Hugo Martin',
    'AI agents, MCP and API integration, process automation and custom web applications. IT services from Hugo Martin in Stuttgart and remotely.',
    PAGE_PAIRS.home,
  ),
  header: pageHeader('en', '/'),
  breadcrumbs: [{ label: 'Home', path: '/en/' }],
  hero: {
    kicker: 'IT services · Stuttgart',
    h1: 'Integrate AI agents. Automate processes. Build applications.',
    lead: 'I am Hugo Martin. I support small businesses and development teams with AI agents, connected workflows and custom web applications. I connect existing tools and data through MCP and APIs.',
    primaryCta: contactAction('en'),
    secondaryCta: { label: 'Explore services', href: '/en/services/' },
    trustLine: 'One point of contact · specific tasks · documented handover',
    diagram: projectDiagram('en'),
  },
  sections: [
    {
      id: 'services',
      heading: 'Technical implementation for your workflows',
      intro: 'We start with the task: which information is needed, which systems are involved and which step should become easier?',
      items: [
        {
          label: '01',
          title: 'AI agents and MCP integration',
          body: 'Set up agents for specific tasks and connect them to existing tools and data through MCP or APIs. Define their tasks, access and review steps.',
          link: { label: 'Explore AI agents and MCP', href: '/en/github-copilot/' },
        },
        {
          label: '02',
          title: 'Process automation and API integration',
          body: 'Connect forms, email, CRM and other systems. Build recurring workflows with n8n, Make or Power Automate and simplify manual handovers.',
          link: { label: 'Explore process automation', href: '/en/process-automation/' },
        },
        {
          label: '03',
          title: 'Angular & Design Systems',
          body: 'Build web apps and internal tools with Angular, extend existing applications and implement existing design systems as component libraries.',
          link: { label: 'Explore Angular & Design Systems', href: '/en/angular-development/' },
        },
        {
          label: '04',
          title: 'AI-assisted development workflows',
          body: 'Adapt GitHub Copilot to your repository with project knowledge, custom skills and agents. Coordinate tasks and automate recurring development work.',
          link: { label: 'Explore development workflows', href: '/en/github-copilot/#development' },
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
          title: 'An agent connected to an existing tool',
          body: 'Define a specific task, connect the suitable MCP server or API and check the workflow with agreed examples.',
        },
        {
          title: 'An internal tool connected to data',
          body: 'A team enters or reviews data in an Angular application. Forms, validation and API connections are built for the agreed workflow.',
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
        'A main focus is AI-assisted development with GitHub Copilot: custom skills and agents, MCP connections and coordination of recurring tasks. This technical experience also shapes my independent work.',
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
        answer: 'Yes. An MCP or API connection, an agent workflow, a feature or an Angular component can be a useful starting point.',
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
