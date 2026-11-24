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
    'Angular Development & Component Libraries | Hugo Martin',
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
    h1: 'Angular development for applications and component libraries',
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
        { label: 'Copilot for your development workflows', href: '/en/github-copilot/' },
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
    'GitHub Copilot Skills, Agents & Workflows | Hugo Martin',
    'GitHub Copilot support for everyday development: custom skills and agents, coordinated tasks and automated workflows with clear review steps.',
    PAGE_PAIRS.copilot,
  ),
  header: pageHeader('en', PAGE_PAIRS.copilot[0], 'copilot'),
  breadcrumbs: [
    { label: 'Home', path: '/en/' },
    { label: 'GitHub Copilot', path: '/en/github-copilot/' },
  ],
  hero: {
    kicker: 'GitHub Copilot · Skills · Agents · Developer Experience',
    h1: 'Make GitHub Copilot part of your development workflow',
    lead: 'I set up custom skills, agents and coordinated workflows for specific development tasks. Project knowledge, recurring steps and review criteria become part of a clear process.',
    primaryCta: contactAction('en', 'copilot'),
    secondaryCta: { label: 'Explore the scope', href: '#scope' },
    trustLine: 'Work in the repository · assign clear tasks · review the results',
  },
  sections: [
    {
      id: 'scope',
      heading: 'Set up Copilot around the way your team works',
      items: [
        {
          title: 'Project knowledge and custom skills',
          body: 'Turn conventions, recurring tasks and relevant context into clear instructions and reusable skills.',
        },
        {
          title: 'Agents with defined tasks',
          body: 'Configure agents for specific development steps. Define inputs, expected outputs and the review that follows.',
        },
        {
          title: 'Coordinate tasks between agents',
          body: 'Split suitable work and describe the handovers. This makes it clear which agent works on which part.',
        },
        {
          title: 'Improve Developer Experience',
          body: 'Connect recurring development tasks, documentation and project tools in a workflow the team can maintain.',
        },
      ],
      layout: 'list',
    },
    {
      id: 'project-example',
      heading: 'A possible starting point: a workflow for component changes',
      intro: 'An example of a clearly defined project scope:',
      items: [
        {
          label: '01',
          title: 'Choose one recurring task',
          body: 'For example, a change to an Angular component together with its examples and tests.',
        },
        {
          label: '02',
          title: 'Prepare context and steps',
          body: 'Add relevant guidelines, files, tasks and expected results to the skills and agents.',
        },
        {
          label: '03',
          title: 'Try an example and improve the setup',
          body: 'Run the workflow on an agreed task, review the results together and refine the instructions.',
        },
      ],
      ordered: true,
      layout: 'ledger',
    },
    {
      id: 'handover',
      heading: 'Keep the setup and knowledge clear',
      points: [
        'The agreed instructions, skills and agent configurations.',
        'A documented workflow with responsibilities and handovers.',
        'Example tasks and clear review criteria.',
        'An explanation of how the team can use and maintain the setup.',
      ],
      paragraphs: [
        'I evaluate new features in the context of the task. The features we use also depend on your existing development environment and what is available there.',
      ],
      layout: 'list',
    },
    {
      id: 'working-together',
      heading: 'Begin with a recurring development task',
      paragraphs: [
        'For the first conversation, it helps to know your development environment, current use of Copilot and one specific recurring task. We use that to define an initial workflow.',
        'I offer this support personally alongside my main job. We agree on scope, availability and cost before starting.',
      ],
      links: [
        { label: 'More about my background', href: '/en/about/' },
        { label: 'Angular applications and component libraries', href: '/en/angular-development/' },
      ],
      layout: 'text',
    },
  ],
  faq: {
    id: 'questions',
    heading: 'Questions about Copilot, skills and agents',
    items: [
      {
        question: 'Do I need an existing Copilot setup?',
        answer: 'We can improve an existing setup or prepare a first, clearly defined workflow. We start by checking your development environment and the features available there.',
      },
      {
        question: 'Does every task need several agents?',
        answer: 'The number of agents depends on the task. We choose a clear workflow and split work when responsibilities and handovers can be described properly.',
      },
      {
        question: 'How are the results reviewed?',
        answer: 'We agree on example tasks and review criteria beforehand. These can include existing tests, alignment with project conventions and a review by the responsible developer.',
      },
    ],
  },
  finalCta: {
    heading: 'Which development task keeps coming back?',
    body: 'Describe the task, your development environment and how you currently use GitHub Copilot. We can then discuss a specific starting point.',
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
    'Connect administrative workflows: forms, email, CRM and APIs with n8n, Make or Power Automate. Personal technical support from Hugo Martin in Stuttgart.',
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
    lead: 'I connect existing systems and build clearly described administrative workflows. We start with one specific process, defined inputs, actions and error cases.',
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
