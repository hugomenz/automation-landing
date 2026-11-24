import { contactAction, pageFooter, pageHeader, pageSeo, PAGE_PAIRS } from '../page.helpers';
import type { PageDefinition } from '../page.types';

export const SERVICES_OVERVIEW_EN = {
  key: 'services-overview-en',
  path: '/en/services/',
  lang: 'en',
  locale: 'en_GB',
  seo: pageSeo(
    'en',
    '/en/services/',
    'IT Services: AI Agents, MCP & Automation | Hugo Martin',
    'My services: AI agents, MCP and API integration, process automation, Angular web applications and development workflows with GitHub Copilot.',
    PAGE_PAIRS.services,
  ),
  header: pageHeader('en', PAGE_PAIRS.services[0]),
  breadcrumbs: [
    { label: 'Home', path: '/en/' },
    { label: 'Services', path: '/en/services/' },
  ],
  hero: {
    kicker: 'IT services · Hugo Martin',
    h1: 'AI agents, automation and web applications',
    lead: 'I support small businesses and development teams with technical implementation: connecting agents to tools, automating manual workflows and building suitable applications.',
    primaryCta: contactAction('en'),
    trustLine: 'Stuttgart and remote · direct contact · clear project scope',
  },
  sections: [
    {
      id: 'offer',
      heading: 'How I can help',
      items: [
        {
          label: '01',
          title: 'AI agents, MCP and API integration',
          body: 'Set up agents for specific tasks and connect them to the tools and data they need. This includes suitable MCP connections, existing APIs, custom skills and clear handovers between agents.',
          link: { label: 'AI agents and MCP', href: '/en/github-copilot/' },
        },
        {
          label: '02',
          title: 'Process automation',
          body: 'Build recurring workflows across forms, email, CRM and other systems. Depending on the task, I use n8n, Make, Power Automate, APIs or webhooks.',
          link: { label: 'Process automation', href: '/en/process-automation/' },
        },
        {
          label: '03',
          title: 'Custom web applications and internal tools',
          body: 'Build web apps with Angular, extend existing applications and connect APIs. I implement existing design systems and component libraries technically in Angular.',
          link: { label: 'Web applications with Angular', href: '/en/angular-development/' },
        },
        {
          label: '04',
          title: 'AI-assisted development workflows',
          body: 'Adapt GitHub Copilot to your repository with project knowledge, skills, agents and MCP tools. Coordinate recurring tasks and improve Developer Experience.',
          link: { label: 'GitHub Copilot and development workflows', href: '/en/github-copilot/#development' },
        },
      ],
      layout: 'list',
    },
    {
      id: 'working-together',
      heading: 'From a specific task to a useful solution',
      paragraphs: [
        'We start with your workflow, existing systems and intended result. We then agree on the scope, review criteria, cost and timing.',
        'The agreed result includes implementation, suitable checks and a clear handover. Source code, workflows or agent configurations are documented for continued use.',
        'I work directly with you alongside my main role. We agree on availability and further support for each project.',
      ],
      links: [{ label: 'About my technical background', href: '/en/about/' }],
      layout: 'text',
    },
  ],
  finalCta: {
    heading: 'Which task would you like to work on?',
    body: 'Briefly describe the current workflow, your tools and the result you need. A specific task is enough for an initial discussion.',
    action: contactAction('en'),
  },
  footer: pageFooter('en'),
  schemaKinds: ['Service', 'BreadcrumbList'],
} as const satisfies PageDefinition;
