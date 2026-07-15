import type { PageDefinition } from '../page.types';

export const INDUSTRIAL_AI_SEARCH_EN = {
  key: 'industrial-ai-search-en',
  path: '/en/ai-search-readiness-industrial-companies/',
  lang: 'en',
  locale: 'en',
  seo: {
    title: 'AI Search Readiness for Industrial Companies | Hugo Menz',
    description:
      'AI Search Readiness from Stuttgart for industrial companies: assess technical signals, product data, sources and content for ChatGPT, Gemini, Perplexity and Google AI.',
    canonicalPath: '/en/ai-search-readiness-industrial-companies/',
    robots: 'index,follow',
    openGraph: {
      title: 'AI Search Readiness for Industrial Companies',
      description:
        'From Stuttgart, Hugo Menz Automation assesses technical signals, product data, sources and specialist content for industrial AI-search visibility.',
      type: 'website',
      locale: 'en',
      imagePath: '/og-industrial-ai-search-en.png',
      imageAlt:
        'AI Search Readiness preview showing technical access, product data, sources and measurement review areas for industrial companies',
      siteName: 'Hugo Menz Automation',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Search Readiness for Industrial Companies',
      description:
        'From Stuttgart, Hugo Menz Automation assesses technical signals, product data, sources and specialist content for ChatGPT, Gemini, Perplexity and Google AI.',
      imagePath: '/og-industrial-ai-search-en.png',
      imageAlt:
        'AI Search Readiness preview showing technical access, product data, sources and measurement review areas for industrial companies',
    },
    alternates: [
      { hreflang: 'de-DE', path: '/ki-sichtbarkeit-industrie/' },
      {
        hreflang: 'en',
        path: '/en/ai-search-readiness-industrial-companies/',
      },
      { hreflang: 'x-default', path: '/ki-sichtbarkeit-industrie/' },
    ],
  },
  breadcrumbs: [
    { label: 'Home', path: '/en/' },
    {
      label: 'AI Search Readiness for Industrial Companies',
      path: '/en/ai-search-readiness-industrial-companies/',
    },
  ],
  hero: {
    kicker: 'AI Search Readiness · Industry · Stuttgart',
    h1: 'AI Search Readiness for Industrial Companies',
    lead:
      'Help ChatGPT, Gemini, Perplexity and other AI-search systems understand complex products and consider your content as potential source material.',
    primaryCta: {
      label: 'Assess AI-search visibility',
      href: '#contact-form',
      dataCta: 'ai-search-hero',
    },
    secondaryCta: {
      label: 'View the service scope',
      href: '#service-scope',
      dataCta: 'ai-search-scope',
    },
    trustLine: 'Technical access · semantics · specialist content · traceable sources',
  },
  sections: [
    {
      id: 'short-answer',
      eyebrow: 'Short answer',
      heading: 'What AI Search Readiness means for industrial companies',
      paragraphs: [
        'AI Search Readiness combines technical SEO, structured company and product data, traceable sources and clear specialist content. It makes machinery, services and expertise easier for search and AI systems to understand and find.',
        'From Stuttgart, Hugo Menz Automation offers this audit to industrial and B2B companies. GEO, Generative Engine Optimization, LLMO and AI Search Optimization are methods within the service – not the offer itself.',
      ],
      callout:
        'I improve the technical, semantic and content foundations that help AI-search systems understand your company, products and expertise and consider them as potential sources.',
      layout: 'text',
    },
    {
      id: 'audit',
      eyebrow: 'Entry offer',
      heading: 'Industrial AI Visibility Audit',
      intro:
        'A clearly bounded baseline assessment, scoped to the website, portfolio, languages and markets.',
      points: [
        'define 25–40 relevant buyer questions and review selected AI-search systems;',
        'compare visibility with up to three relevant competitors;',
        'review technical indexation, crawlability and crawler rules;',
        'analyse company, product and expertise signals plus visible sources and evidence gaps;',
        'prepare a prioritised 90-day action plan with a recommendation to proceed, wait or not invest.',
      ],
      callout:
        'After a short initial assessment, you receive a clearly defined scope and a fixed project price. The initial assessment is not a complete free audit.',
      layout: 'list',
    },
    {
      id: 'industrial-problem',
      eyebrow: 'Baseline',
      heading: 'Why industrial offers can be difficult for AI-search systems to interpret',
      intro:
        'In many companies, knowledge is spread across pages, documents and partners. The assessment is especially relevant to manufacturers of technical products, machinery or equipment and B2B providers with complex portfolios, long sales cycles or international markets.',
      points: [
        'Product information is often split between PDFs, product, portal and dealer pages; terminology or language versions may differ.',
        'Sales, engineering and service expertise may remain hidden, while important facts can be difficult to verify.',
        'Machinery and services are hard to compare when content speaks to insiders rather than specific purchasing questions.',
        'The relationship between the company, products, applications and expertise may remain unclear.',
        'AI systems may then use directories, competitors or distributors instead of the manufacturer as a source.',
      ],
      layout: 'list',
    },
    {
      id: 'definitions',
      eyebrow: 'Definitions',
      heading: 'SEO, GEO and AI Search Readiness: how do they differ?',
      items: [
        {
          title: 'SEO',
          body: 'SEO improves indexability and discoverability in traditional search through technical foundations and useful answers.',
        },
        {
          title: 'GEO',
          body: 'Generative Engine Optimization improves how content is understood, retrieved, mentioned and potentially cited in generated answers.',
        },
        {
          title: 'AI Search Readiness',
          body: 'AI Search Readiness is the business framework connecting SEO, GEO, LLMO and AI Search Optimization with product data, sources and measurement.',
        },
      ],
      callout:
        'GEO does not replace technical SEO, useful content or trustworthy company information. Visibility without credible evidence is not sustainable.',
      layout: 'cards',
    },
    {
      id: 'service-scope',
      eyebrow: 'Service scope',
      heading: 'Review technical, semantic and content signals together',
      items: [
        {
          title: 'Buyer questions and visibility baseline',
          points: [
            'define relevant buyer questions and realistic search prompts;',
            'review AI-search and LLM visibility in selected systems and compare up to three competitors.',
          ],
        },
        {
          title: 'Indexation and crawler access',
          points: [
            'review technical indexability and crawlability;',
            'assess robots rules, relevant AI-crawler access and technical obstacles.',
          ],
        },
        {
          title: 'Entities and product data',
          points: [
            'review company, product, application and expert entity signals;',
            'align product names, facts and terminology and recommend suitable Schema.org types.',
          ],
        },
        {
          title: 'Sources and specialist content',
          points: [
            'assess whether factual claims are ready to be used and cited as sources;',
            'prioritise product, application and comparison pages, answer-first content and FAQs.',
          ],
        },
        {
          title: 'Languages and measurement',
          points: [
            'check multilingual facts and terminology for contradictions;',
            'track mentions, citations, source URLs and qualified enquiries through a clear measurement plan.',
          ],
        },
      ],
      callout:
        'Structured data alone does not create AI-search visibility. It only helps when technical access, visible content, product facts and sources align.',
      layout: 'cards',
    },
    {
      id: 'deliverables',
      eyebrow: 'Deliverables and optional implementation',
      heading: 'What you receive – and what can follow',
      intro:
        'Concrete findings instead of a vague promise of “more visibility”:',
      items: [
        {
          title: 'Documented working basis',
          points: [
            'visibility baseline, buyer questions and competitor comparison;',
            'technical, semantic and content findings;',
            'source and evidence gaps;',
            'prioritised recommendations and implementation backlog;',
            'measurement framework and management summary.',
          ],
        },
        {
          title: 'Optional implementation pilot',
          points: [
            'correct technical obstacles;',
            'improve one central expertise page and selected product or application pages;',
            'implement structured data and align facts and terminology;',
            'establish prompt, source and citation monitoring with a before-and-after review.',
          ],
        },
      ],
      callout:
        'The findings determine whether implementation should proceed. No specific mention or outcome within a fixed period is promised.',
      layout: 'cards',
    },
    {
      id: 'process',
      eyebrow: 'Process',
      heading: 'Four steps from the baseline to controlled measurement',
      items: [
        {
          title: 'Define the baseline and relevant buyer questions',
        },
        {
          title: 'Review technical, semantic and content signals',
        },
        {
          title: 'Prioritise actions by impact and effort',
        },
        {
          title: 'Implement and measure visibility in a controlled way',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'why-hugo-menz',
      heading: 'Understand industry and make technical information usable',
      paragraphs: [
        'I combine experience in special-purpose machinery and industrial projects with UX engineering, interface development and automation. You work directly with me from the assessment through to a possible technical implementation.',
      ],
      points: [
        'understanding of machinery, industrial sales questions and products that require explanation;',
        'experience with software development, APIs, data flows and automation;',
        'ability to connect technical information and sources with product and data processes;',
        'focus on useful, maintainable systems rather than marketing trends;',
        'willingness to advise against implementation when the data, relevance or expected value is insufficient.',
      ],
      links: [
        {
          label: 'About Hugo Menz (German page)',
          href: '/ueber-hugo-menz/',
          lang: 'de',
        },
      ],
      layout: 'profile',
    },
    {
      id: 'limitations',
      eyebrow: 'Honest limitations',
      heading: 'Improve the foundations without controlling platform answers',
      paragraphs: [
        'No service provider can guarantee a mention, citation or recommendation in a specific AI system. Answers are generated by the respective platforms and may change at any time. The work improves the foundations for understanding, discoverability, source eligibility and measurement.',
      ],
      callout:
        'This applies to ChatGPT, Gemini, Google AI Overviews, Perplexity, Microsoft Copilot, Claude and other AI-search systems.',
      layout: 'text',
    },
  ],
  faq: {
    id: 'faq',
    eyebrow: 'Frequently asked questions',
    heading: 'Questions about AI-search visibility, GEO and the audit',
    items: [
      {
        question: 'What does AI-search visibility mean for industrial companies?',
        answer:
          'It shows whether AI-search systems can understand companies, products and expertise, retrieve them for buyer questions and consider them as potential sources.',
      },
      {
        question: 'What is the difference between SEO, GEO and AI Search Readiness?',
        answer:
          'SEO improves traditional discoverability. GEO addresses generated answers. AI Search Readiness connects both with product data, sources, content and measurement.',
      },
      {
        question: 'Can a mention in ChatGPT or Gemini be guaranteed?',
        answer:
          'No. Platforms generate their own answers. Only the foundations for understanding, discoverability, source eligibility and measurement can be improved.',
      },
      {
        question: 'Which industrial companies is the service suitable for?',
        answer:
          'Manufacturers and B2B providers with complex, multilingual or explanation-heavy offers and product information spread across several sources.',
      },
      {
        question: 'Does Hugo Menz offer GEO or AI-search optimization in Stuttgart?',
        answer:
          'Yes. From Stuttgart, Hugo Menz Automation offers AI Search Readiness for industrial and B2B companies, using GEO, technical SEO, LLMO and AI Search Optimization.',
      },
      {
        question: 'How is the baseline measured?',
        answer:
          'Through defined buyer questions and documented answers, mentions, competitors, source URLs and technical website signals.',
      },
      {
        question: 'Which company and product data is required?',
        answer:
          'Website content, product pages, data sheets, FAQs, terminology and information about applications, markets and subject-matter experts.',
      },
      {
        question: 'Does new content have to be created?',
        answer:
          'Not automatically. Existing material can often be consolidated, clarified and connected more effectively.',
      },
      {
        question: 'Can existing product pages and PDFs be used?',
        answer:
          'Yes. The review checks whether their content is accessible, current, consistent, clearly attributable and discoverable from the website.',
      },
      {
        question: 'Does the assessment work for multilingual websites?',
        answer:
          'Yes. Product names, performance data, company facts and central claims are compared across the agreed language versions.',
      },
      {
        question: 'How is it decided whether implementation is worthwhile?',
        answer:
          'By relevance, visibility gaps, readiness, competition, effort and expected value. The recommendation may be to wait or not invest.',
      },
      {
        question: 'Does GEO replace traditional SEO?',
        answer:
          'No. Technical access, useful content and trustworthy information remain the foundation.',
      },
      {
        question: 'What happens after the audit?',
        answer:
          'You can implement internally, commission a bounded pilot, assign individual actions or deliberately make no immediate change.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Next step',
    heading: 'Assess your company’s AI-search visibility',
    body:
      'Share your website, product groups, target markets and languages. I will assess whether the audit can be scoped usefully.',
    action: {
      label: 'Assess AI-search visibility',
      href: '#contact-form',
      dataCta: 'ai-search-final',
    },
    note:
      'After the initial assessment, you receive a clear scope and fixed project price. It does not replace a complete audit.',
  },
  schemaKinds: ['Service', 'Person', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
