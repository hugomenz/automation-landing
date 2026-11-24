import { contactAction, pageFooter, pageHeader, pageSeo, PAGE_PAIRS } from '../page.helpers';
import type { PageDefinition } from '../page.types';

export const ABOUT_HUGO_MARTIN_EN = {
  key: 'about-hugo-martin-en',
  path: '/en/about/',
  lang: 'en',
  locale: 'en_GB',
  seo: pageSeo(
    'en',
    '/en/about/',
    'About Hugo Martin | Angular, Copilot & Automation',
    'My path from mechanical engineering to software development. I offer personal support with Angular, GitHub Copilot and process automation from Stuttgart.',
    PAGE_PAIRS.about,
  ),
  header: pageHeader('en', PAGE_PAIRS.about[0]),
  breadcrumbs: [
    { label: 'Home', path: '/en/' },
    { label: 'About Hugo Martin', path: '/en/about/' },
  ],
  hero: {
    kicker: 'Hugo Martin · Stuttgart',
    h1: 'Technical work with the whole workflow in mind',
    lead: 'My background is in mechanical engineering, and I now work in software development. I focus on Angular, GitHub Copilot and automating recurring tasks.',
    primaryCta: contactAction('en'),
    secondaryCta: {
      label: 'My LinkedIn profile',
      href: 'https://www.linkedin.com/in/hugomartin-menz/',
      external: true,
    },
    trustLine: 'Direct contact · alongside my main role · German, English and Spanish',
    portrait: {
      src: '/hugo.jfif',
      alt: 'Portrait of Hugo Martin',
      width: 400,
      height: 400,
    },
  },
  sections: [
    {
      id: 'background',
      heading: 'From mechanical engineering to applications and development workflows',
      paragraphs: [
        'My career started in mechanical engineering, mechanical design and technical project work. It taught me to clarify requirements, understand dependencies and explain technical decisions.',
        'Today, I work at EPLAN as a UX Engineer. My work includes Angular, shared component libraries, internal tools and development workflows. I also work with GitHub Copilot, custom skills, agents and automation.',
      ],
      layout: 'text',
    },
    {
      id: 'services',
      heading: 'How I can support your project',
      items: [
        {
          title: 'Angular',
          body: 'Develop applications, internal tools and component libraries. I implement existing design systems in Angular.',
          link: { label: 'Angular development', href: '/en/angular-development/' },
        },
        {
          title: 'GitHub Copilot and Developer Experience',
          body: 'Set up project knowledge, custom skills and agents, and coordinated development workflows in your repository.',
          link: { label: 'GitHub Copilot', href: '/en/github-copilot/' },
        },
        {
          title: 'Process automation',
          body: 'Connect recurring tasks with n8n, Make, Power Automate and existing APIs.',
          link: { label: 'Process automation', href: '/en/process-automation/' },
        },
      ],
      layout: 'list',
    },
    {
      id: 'working-together',
      heading: 'You work directly with me',
      paragraphs: [
        'I offer these services alongside my main role. We plan a clear project scope and agree on availability, cost and timing before starting.',
        'I want you to be able to keep using the solution. The agreed result includes understandable code or clear workflows, with suitable documentation and handover.',
        'I am based in Stuttgart and also work remotely. We can communicate and prepare documentation in German, English or Spanish.',
      ],
      links: [{ label: 'Working together in Stuttgart (German)', href: '/standorte/stuttgart/', lang: 'de' }],
      layout: 'text',
    },
  ],
  finalCta: {
    heading: 'A specific task is a good starting point',
    body: 'Briefly describe your project and existing systems. We can then discuss a useful scope together.',
    action: contactAction('en'),
  },
  footer: pageFooter('en'),
  schemaKinds: ['Person', 'BreadcrumbList'],
} as const satisfies PageDefinition;

export const CONTACT_EN = {
  key: 'contact-en',
  path: '/en/contact/',
  lang: 'en',
  locale: 'en_GB',
  seo: pageSeo(
    'en',
    '/en/contact/',
    'Contact Hugo Martin | Discuss Your Technical Project',
    'Discuss your Angular, GitHub Copilot or process automation task. Contact Hugo Martin directly in Stuttgart for a clearly scoped technical project.',
    PAGE_PAIRS.contact,
  ),
  header: pageHeader('en', PAGE_PAIRS.contact[0]),
  breadcrumbs: [
    { label: 'Home', path: '/en/' },
    { label: 'Contact', path: '/en/contact/' },
  ],
  hero: {
    kicker: 'Contact · Project enquiry',
    h1: 'What technical task do you need help with?',
    lead: 'Whether it involves Angular, GitHub Copilot or process automation, describe the task, your existing tools and the result you need.',
    primaryCta: contactAction('en', 'general', 'Send an enquiry'),
    trustLine: 'Direct contact with Hugo Martin · Stuttgart and remote',
  },
  sections: [
    {
      id: 'your-enquiry',
      heading: 'Useful information to get started',
      intro: 'A short description is enough. It helps to include:',
      points: [
        'The task and the result you want to achieve.',
        'The application, repository or tools you work with.',
        'What is already in place and where you need support.',
        'Your preferred timing and any important constraints.',
      ],
      layout: 'list',
    },
    {
      id: 'topic',
      heading: 'What is your project about?',
      items: [
        {
          title: 'Angular development',
          body: 'Applications, component libraries, internal tools and API connections.',
          link: contactAction('en', 'angular', 'Discuss an Angular task'),
        },
        {
          title: 'GitHub Copilot',
          body: 'Skills, agents, orchestration and automated development workflows.',
          link: contactAction('en', 'copilot', 'Discuss a Copilot task'),
        },
        {
          title: 'Process automation',
          body: 'Connect workflows across forms, email, CRM and other systems.',
          link: contactAction('en', 'process-automation', 'Discuss a workflow'),
        },
      ],
      layout: 'list',
    },
    {
      id: 'next-step',
      heading: 'What happens after your enquiry',
      paragraphs: [
        'I review your description and get in touch to clarify open questions and the technical starting point. We can then agree on a suitable project scope.',
        'I work alongside my main role. We agree on availability, cost, timing and handover before you commission the work.',
      ],
      links: [
        { label: 'More about my background', href: '/en/about/' },
        {
          label: 'My LinkedIn profile',
          href: 'https://www.linkedin.com/in/hugomartin-menz/',
          external: true,
        },
      ],
      layout: 'text',
    },
  ],
  finalCta: {
    heading: 'Tell me about your task',
    body: 'You do not need a finished specification. A specific problem and some context are enough for an initial discussion.',
    action: contactAction('en', 'general', 'Send an enquiry'),
  },
  footer: pageFooter('en'),
  schemaKinds: ['ContactPage', 'BreadcrumbList'],
} as const satisfies PageDefinition;
