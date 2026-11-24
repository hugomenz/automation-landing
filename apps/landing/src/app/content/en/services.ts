import { contactAction, pageFooter, pageHeader, pageSeo, PAGE_PAIRS } from '../page.helpers';
import type { PageDefinition } from '../page.types';

export const ANGULAR_DEVELOPMENT_EN = {
  key: 'angular-development-en',
  path: '/en/angular-development/',
  lang: 'en',
  locale: 'en_GB',
  seo: pageSeo(
    'en',
    '/en/angular-development/',
    'Custom Web Applications with Angular | Hugo Martin',
    'Technical support for Angular applications, internal tools and implementing existing design systems as component libraries. Hugo Martin, based in Stuttgart.',
    PAGE_PAIRS.angular,
  ),
  header: pageHeader('en', PAGE_PAIRS.angular[0], 'angular'),
  breadcrumbs: [
    { label: 'Home', path: '/en/' },
    { label: 'Angular development', path: '/en/angular-development/' },
  ],
  hero: {
    kicker: 'Angular · TypeScript · Component libraries',
    h1: 'Custom web applications and internal tools with Angular',
    lead: 'I develop Angular applications, internal tools and reusable components. I implement existing design guidelines and design systems in Angular.',
    primaryCta: contactAction('en', 'angular'),
    secondaryCta: { label: 'Explore possible tasks', href: '#tasks' },
    trustLine: 'Technical implementation · extend existing systems · clear scope',
  },
  sections: [
    {
      id: 'tasks',
      heading: 'Support for a specific part of your application',
      items: [
        {
          title: 'Applications and internal tools',
          body: 'Build forms, data views and internal workflows with Angular. This includes states, validation and connections to existing APIs.',
        },
        {
          title: 'Component libraries',
          body: 'Develop or extend reusable Angular components. Inputs, events, states and usage examples are clearly documented.',
        },
        {
          title: 'Extend existing applications',
          body: 'Add a focused feature, improve a component or complete a technical task in your existing repository.',
        },
      ],
      layout: 'list',
    },
    {
      id: 'design-systems',
      heading: 'Make an existing design system usable in Angular',
      paragraphs: [
        'Your design system or existing component library provides the design guidelines. My work is the technical implementation: component structure, TypeScript interfaces, states and behaviour in Angular.',
        'This also includes how other developers use the components. Clear examples, documented properties and consistent behaviour are part of the agreed implementation.',
      ],
      points: [
        'Understand the existing guidelines and use cases together.',
        'Build components with clear inputs and events.',
        'Cover relevant states and agreed test cases.',
        'Document usage and technical decisions.',
      ],
      layout: 'text',
    },
    {
      id: 'deliverables',
      heading: 'What we can agree to deliver',
      intro: 'We define the deliverables before starting. A small project could include:',
      points: [
        'An implemented feature or a defined set of Angular components.',
        'The required connection to existing interfaces.',
        'Relevant tests and a joint review of the agreed use case.',
        'Source code, examples and notes for future maintenance.',
      ],
      layout: 'list',
    },
    {
      id: 'getting-started',
      heading: 'Start with the task and its technical context',
      paragraphs: [
        'A short description of the application, its Angular version, existing design guidelines and the behaviour you need is helpful. We discuss access to code and systems in the next step.',
        'I work directly with you alongside my main role. We plan a clearly defined task and agree on availability, cost and handover.',
      ],
      links: [
        { label: 'My technical background', href: '/en/about/' },
        { label: 'AI agents for your development workflows', href: '/en/github-copilot/' },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'questions',
    heading: 'Questions about Angular support',
    items: [
      {
        question: 'Can I commission a single component or feature?',
        answer: 'Yes. A clearly defined component, form or API connection can be a suitable first project. We agree on behaviour, boundaries and review criteria beforehand.',
      },
      {
        question: 'How do you work with an existing design system?',
        answer: 'I implement existing guidelines in Angular. This includes components, TypeScript interfaces, behaviour, tests and developer documentation.',
      },
      {
        question: 'Can you work in an existing repository?',
        answer: 'Yes. I first review its structure, conventions and development workflows. We plan the task and handover around them.',
      },
    ],
  },
  finalCta: {
    heading: 'Which Angular task do you need help with?',
    body: 'Briefly describe the application, the feature or component you need and your existing technical setup.',
    action: contactAction('en', 'angular'),
  },
  footer: pageFooter('en'),
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;

export const GITHUB_COPILOT_EN = {
  key: 'github-copilot-en',
  path: '/en/github-copilot/',
  lang: 'en',
  locale: 'en_GB',
  seo: pageSeo(
    'en',
    '/en/github-copilot/',
    'AI Agents, MCP & GitHub Copilot | Hugo Martin',
    'Connect AI agents to tools and data: MCP and API integration, custom skills, agent orchestration and development workflows with GitHub Copilot.',
    PAGE_PAIRS.copilot,
  ),
  header: pageHeader('en', PAGE_PAIRS.copilot[0], 'copilot'),
  breadcrumbs: [
    { label: 'Home', path: '/en/' },
    { label: 'Services', path: '/en/services/' },
    { label: 'AI agents & MCP', path: '/en/github-copilot/' },
  ],
  hero: {
    kicker: 'AI agents · MCP integration · GitHub Copilot',
    h1: 'AI agents, MCP and GitHub Copilot for your workflows',
    lead: 'I set up agents for specific tasks and connect them to the tools and data they need. This includes MCP and API connections, custom skills and coordinated development workflows with GitHub Copilot.',
    primaryCta: contactAction('en', 'copilot'),
    secondaryCta: { label: 'Explore the service', href: '#scope' },
    trustLine: 'Specific tasks · suitable tool connections · results you can check',
  },
  sections: [
    {
      id: 'scope',
      heading: 'Integrate agents into existing workflows',
      items: [
        {
          title: 'AI agents for clearly defined tasks',
          body: 'Define the task, required context and expected result. Set up instructions and tools so the workflow can be checked with specific examples.',
        },
        {
          title: 'MCP and API integration',
          body: 'MCP stands for Model Context Protocol. It lets AI applications use tools and context from connected systems. I configure suitable MCP connections and integrate existing APIs into the agreed workflow.',
        },
        {
          title: 'Skills and agent orchestration',
          body: 'Describe recurring tasks as skills, assign work to suitable agents and define the handovers between their steps.',
        },
      ],
      layout: 'list',
    },
    {
      id: 'development',
      heading: 'AI-assisted development workflows with GitHub Copilot',
      paragraphs: [
        'I adapt GitHub Copilot to your repository. Project conventions, documentation, custom skills, agents and suitable tools become part of a clear development workflow.',
        'Possible tasks include work on Angular components, preparing tests and maintaining technical documentation. We agree on which steps to automate and where a developer reviews the result.',
      ],
      points: [
        'Organize project knowledge and instructions in the repository.',
        'Set up custom skills and agents for recurring tasks.',
        'Connect suitable MCP tools and other existing tools.',
        'Coordinate agent tasks and automate recurring steps.',
      ],
      layout: 'text',
    },
    {
      id: 'project-example',
      heading: 'A possible starting point: an agent connected to one tool',
      intro: 'An example of a clearly defined project scope:',
      items: [
        {
          label: '01',
          title: 'Choose a task and the intended result',
          body: 'Which information should the agent use? Which action is needed, and who reviews the result?',
        },
        {
          label: '02',
          title: 'Set up context and the connection',
          body: 'Configure the suitable MCP or API connection and document the agreed access, inputs and review steps.',
        },
        {
          label: '03',
          title: 'Check the example and improve the setup',
          body: 'Try the workflow with agreed inputs, review error cases and refine the configuration together.',
        },
      ],
      ordered: true,
      layout: 'ledger',
    },
    {
      id: 'handover',
      heading: 'A setup you can continue using',
      points: [
        'The agreed agent configurations, instructions and skills.',
        'Documented MCP or API connections and their requirements.',
        'Example tasks, review criteria and known limitations.',
        'An explanation of how to use and maintain the setup.',
      ],
      paragraphs: [
        'The features used depend on your environment, existing interfaces and the task. I work directly with you alongside my main role. We agree on scope, cost and availability before starting.',
      ],
      links: [
        { label: 'My technical background', href: '/en/about/' },
        { label: 'All services', href: '/en/services/' },
      ],
      layout: 'list',
    },
  ],
  faq: {
    id: 'questions',
    heading: 'Questions about agents, MCP and Copilot',
    items: [
      {
        question: 'Do I need an existing agent or Copilot setup?',
        answer: 'We can extend an existing setup or start with a first specific task. We first clarify your environment, available tools and intended result.',
      },
      {
        question: 'When is an MCP connection useful?',
        answer: 'When an agent needs suitable tools or context from another system. We check whether an appropriate MCP server is available or an API connection fits the agreed workflow better.',
      },
      {
        question: 'Does every task need several agents?',
        answer: 'The number of agents depends on the task. We split work when responsibilities, handovers and review steps can be described clearly.',
      },
    ],
  },
  finalCta: {
    heading: 'Which task should your agent support?',
    body: 'Describe the task, the tools and data available, and the result you need. We can then discuss a useful starting point.',
    action: contactAction('en', 'copilot'),
  },
  footer: pageFooter('en'),
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;

export const PROCESS_AUTOMATION_EN = {
  key: 'process-automation-en',
  path: '/en/process-automation/',
  lang: 'en',
  locale: 'en_GB',
  seo: pageSeo(
    'en',
    '/en/process-automation/',
    'Process Automation with n8n, Make & APIs | Hugo Martin',
    'Automate business processes and connect systems through APIs. Workflows with n8n, Make or Power Automate. Personal support from Hugo Martin in Stuttgart.',
    PAGE_PAIRS.automation,
  ),
  header: pageHeader('en', PAGE_PAIRS.automation[0], 'process-automation'),
  breadcrumbs: [
    { label: 'Home', path: '/en/' },
    { label: 'Process automation', path: '/en/process-automation/' },
  ],
  hero: {
    kicker: 'n8n · Make · Power Automate · APIs',
    h1: 'Automate recurring work between the tools you already use',
    lead: 'I connect existing systems through APIs and build clearly described business workflows. We start with one specific process, defined inputs, actions and error cases.',
    primaryCta: contactAction('en', 'process-automation'),
    secondaryCta: { label: 'Explore possible workflows', href: '#workflows' },
    trustLine: 'Connect existing tools · define exceptions · document the handover',
  },
  sections: [
    {
      id: 'workflows',
      heading: 'Possible tasks for a first automation project',
      intro: 'These examples describe possible project scopes. We look at your actual process to decide which steps make sense.',
      items: [
        {
          title: 'Connect a form to your CRM',
          body: 'Check new submissions, match them to a record and notify the responsible person. Include missing information and duplicate entries in the workflow.',
        },
        {
          title: 'Move information between tools',
          body: 'Read data through APIs or webhooks, convert it to the required format and pass it on using agreed rules.',
        },
        {
          title: 'Internal notifications and documents',
          body: 'Prepare status updates, reminders or documents from existing data. Required reviews can be included as a separate step.',
        },
      ],
      layout: 'list',
    },
    {
      id: 'tools',
      heading: 'Choose the tool around the process and your setup',
      paragraphs: [
        'Depending on the task, I work with n8n, Make or Power Automate. APIs and webhooks connect the systems involved. We also consider who will run and maintain the workflow.',
        'Before development, we clarify the available interfaces, required data and error handling. Your existing systems are the starting point.',
      ],
      links: [{ label: 'n8n support in Stuttgart (German)', href: '/n8n-beratung-stuttgart/', lang: 'de' }],
      layout: 'text',
    },
    {
      id: 'process',
      heading: 'From a manual step to a documented workflow',
      items: [
        {
          label: '01',
          title: 'Map the current process',
          body: 'Describe the trigger, data, tools, responsibilities and exceptions together.',
        },
        {
          label: '02',
          title: 'Build a focused workflow',
          body: 'Connect the agreed steps and check them with selected examples.',
        },
        {
          label: '03',
          title: 'Agree on operation and handover',
          body: 'Document the workflow, error messages, access requirements and responsibilities for ongoing operation.',
        },
      ],
      ordered: true,
      layout: 'ledger',
    },
    {
      id: 'deliverables',
      heading: 'A result you can work with',
      points: [
        'A workflow with the agreed trigger and required actions.',
        'Checks covering normal cases and relevant exceptions.',
        'Documented connections, rules and maintenance notes.',
        'A joint handover with clear next steps.',
      ],
      paragraphs: [
        'I work independently alongside my main job. We agree on scope, cost, availability and any further support for the specific project.',
      ],
      layout: 'list',
    },
  ],
  faq: {
    id: 'questions',
    heading: 'Questions about process automation',
    items: [
      {
        question: 'Can we start with a single manual step?',
        answer: 'Yes. A clear step between two tools can be a good starting point. We check which data and interfaces are available and what should happen in exceptional cases.',
      },
      {
        question: 'Do I need to use n8n, Make or Power Automate already?',
        answer: 'An existing setup can be the starting point. If you have not chosen a tool, we first clarify requirements, existing systems and future maintenance.',
      },
      {
        question: 'Who maintains the workflow after handover?',
        answer: 'We agree on this before starting. I document the agreed solution. Further changes or support can be arranged with a separate scope and suitable availability.',
      },
    ],
  },
  finalCta: {
    heading: 'Which manual process would you like to simplify?',
    body: 'Describe the trigger, the tools involved and the result you need. A specific example helps with the initial discussion.',
    action: contactAction('en', 'process-automation'),
  },
  footer: pageFooter('en'),
  schemaKinds: ['Service', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
