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
      'So that complex products are not only discoverable through traditional search, but are also described clearly enough for ChatGPT, Gemini, Perplexity and other AI-search systems to understand your company and consider its content as potential source material.',
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
        'AI Search Readiness combines technical SEO, structured company and product data, traceable sources and clearly written specialist content. The aim is to make machinery, services and technical expertise unambiguous, understandable and discoverable for traditional search engines and AI systems.',
        'From Stuttgart, Hugo Menz Automation supports industrial companies and other B2B providers across Baden-Württemberg, Germany and the DACH region. GEO, AI SEO, LLMO and AI Search Optimization are methods within a clearly bounded AI Search Readiness assessment.',
      ],
      callout:
        'We improve the technical, semantic and content foundations that help AI-search systems understand your company, products and expertise and consider them as potential sources.',
      layout: 'text',
    },
    {
      id: 'industrial-problem',
      eyebrow: 'Baseline',
      heading: 'Why industrial offers can be difficult for AI-search systems to interpret',
      intro:
        'Many industrial companies already have the relevant knowledge, but it may not be connected in one consistent, verifiable and understandable structure. This can leave uncertainty about what a manufacturer offers, which product fits an application and which source supports a claim.',
      points: [
        'Product information is often distributed across PDFs, product pages, portals and dealer websites.',
        'Product names, series and technical terminology may differ between documents.',
        'Expertise held by sales, engineering and service is often only partly visible on the website.',
        'Important performance data, operating limits or company facts may not be easy to verify.',
        'Machines, options and B2B services can be difficult for external buyers to compare.',
        'Content may be written for insiders rather than answering specific purchasing questions directly.',
        'The relationship between the company, products, applications and expertise may remain unclear.',
        'Language versions, data sheets and dealer copy can contradict one another.',
        'AI systems may therefore use directories, competitors or distributors instead of the manufacturer as a source.',
      ],
      layout: 'list',
    },
    {
      id: 'definitions',
      eyebrow: 'Definitions',
      heading: 'SEO, GEO and AI Search Readiness: how do they differ?',
      intro:
        'These methods complement one another. The important question is not which new acronym to adopt, but whether technical products are discoverable, clearly described and supported by credible evidence.',
      items: [
        {
          title: 'SEO',
          body: 'Technical SEO and useful content improve discoverability in traditional search. This includes indexability, clear page structures, internal links and relevant answers to search queries.',
        },
        {
          title: 'GEO',
          body: 'Generative Engine Optimization considers how content is understood, retrieved, mentioned and potentially cited in generated answers. GEO depends on accessible, unambiguous and trustworthy information.',
        },
        {
          title: 'AI Search Readiness',
          body: 'AI Search Readiness is the broader business-oriented service. LLMO improves information for understanding and retrieval by language models; AI Search Optimization applies the same objective to AI-powered search experiences. The service connects these methods with product data, evidence, ownership and practical measurement.',
        },
      ],
      callout:
        'GEO does not replace technical SEO, useful content or trustworthy company information. Visibility without credible evidence is not sustainable.',
      layout: 'cards',
    },
    {
      id: 'audience',
      eyebrow: 'Audience',
      heading: 'Which companies can benefit most from the assessment',
      intro:
        'Industrial companies are the primary focus, particularly SMEs and mid-sized providers with products that require explanation. Other B2B companies may also benefit when information is distributed across systems, markets or partners.',
      points: [
        'manufacturers of technical products, machinery or equipment;',
        'companies with complex product portfolios and many variants;',
        'B2B service providers with long sales and decision cycles;',
        'suppliers whose products require application guidance or technical advice;',
        'companies with fragmented product information and multiple data sources;',
        'multilingual websites and international product communication;',
        'sales through dealers, distributors or international markets;',
        'companies whose websites, PDFs and internal product data do not consistently agree.',
      ],
      layout: 'list',
    },
    {
      id: 'service-scope',
      eyebrow: 'Service scope',
      heading: 'Review technical, semantic and content signals together',
      intro:
        'The service is modular but follows one shared question: can search engines and AI systems consistently identify the company, its products, applications and supporting evidence?',
      items: [
        {
          title: 'Buyer questions and visibility baseline',
          points: [
            'analyse relevant buyer questions and realistic search prompts;',
            'review AI-search and LLM visibility in a selected set of systems;',
            'compare the baseline with up to three relevant competitors.',
          ],
        },
        {
          title: 'Indexation and crawler access',
          points: [
            'review technical indexability and crawlability;',
            'assess robots rules and relevant AI-crawler access where applicable;',
            'document technical obstacles and unintended exclusions.',
          ],
        },
        {
          title: 'Entities and product data',
          points: [
            'review company, product, application and expert entity signals;',
            'check product names, facts and terminology for consistency;',
            'recommend established Schema.org types where they accurately represent visible content.',
          ],
        },
        {
          title: 'Sources and specialist content',
          points: [
            'assess whether factual claims are ready to be used and cited as sources;',
            'prioritise product, application and comparison pages;',
            'recommend answer-first content and useful FAQs.',
          ],
        },
        {
          title: 'Languages and measurement',
          points: [
            'check multilingual facts and terminology for contradictions;',
            'create a measurement plan for mentions, citations and source URLs;',
            'treat qualified enquiries as a business signal without attributing them broadly to a single AI platform.',
          ],
        },
      ],
      callout:
        'Structured data alone does not create AI-search visibility. It only helps when technical access, visible content, product facts and sources align.',
      layout: 'cards',
    },
    {
      id: 'audit',
      eyebrow: 'Entry offer',
      heading: 'Industrial AI Visibility Audit',
      intro:
        'The audit is a clearly bounded baseline assessment. The final scope depends on the website, product portfolio, languages and target markets.',
      points: [
        'define 25–40 relevant buyer questions together;',
        'review a selected set of AI-search systems;',
        'compare visibility with up to three relevant competitors;',
        'review technical indexation, crawlability and crawler rules;',
        'assess company, product, application and expertise signals;',
        'analyse the pages, sources and evidence gaps currently visible;',
        'prepare a prioritised 90-day action plan with a recommendation to proceed, wait or not invest.',
      ],
      callout:
        'After a short initial assessment, you receive a clearly defined scope and a fixed project price. The initial assessment is not a complete free audit.',
      layout: 'list',
    },
    {
      id: 'pilot',
      eyebrow: 'Optional second phase',
      heading: 'Implementation pilot after the audit',
      intro:
        'If the findings support further investment, a bounded implementation phase can follow. It is not required after every audit and is scoped separately.',
      points: [
        'correct technical obstacles;',
        'create or improve one central evidence or expertise page;',
        'optimise selected product or application pages;',
        'implement appropriate structured data;',
        'improve consistency across facts, product names and terminology;',
        'establish a prompt, mention, source and citation monitoring baseline with a before-and-after review.',
      ],
      callout:
        'The findings determine whether and how implementation should proceed. No specific mention or outcome within a fixed period is promised.',
      layout: 'list',
    },
    {
      id: 'deliverables',
      eyebrow: 'Deliverables',
      heading: 'What you may receive as a documented working basis',
      intro:
        'The result is not a vague promise of “more visibility”. It is a traceable basis for management decisions and implementation.',
      points: [
        'documented visibility baseline;',
        'prioritised set of relevant buyer questions;',
        'competitor comparison;',
        'technical indexation and crawler findings;',
        'entity, product-data and content findings;',
        'source and evidence gaps;',
        'recommendations prioritised by impact and effort;',
        'practical implementation backlog;',
        'measurement framework for mentions, citations, source URLs and qualified enquiries;',
        'final management summary.',
      ],
      layout: 'list',
    },
    {
      id: 'process',
      eyebrow: 'Process',
      heading: 'Four steps from the baseline to controlled measurement',
      items: [
        {
          title: 'Define the baseline and relevant buyer questions',
          body: 'Products, markets, languages, competitors and the most important information needs are bounded together.',
        },
        {
          title: 'Review technical, semantic and content signals',
          body: 'The website, product information, sources and selected AI answers are assessed against the same questions.',
        },
        {
          title: 'Prioritise actions by impact and effort',
          body: 'Findings are converted into an actionable backlog. Not every gap requires a new page or a new system.',
        },
        {
          title: 'Implement and measure visibility in a controlled way',
          body: 'Selected changes are implemented traceably and compared with the defined baseline.',
        },
      ],
      ordered: true,
      layout: 'steps',
    },
    {
      id: 'why-hugo-menz',
      eyebrow: 'Why Hugo Menz',
      heading: 'Understand industry and make technical information usable',
      paragraphs: [
        'I combine experience in special-purpose machinery and industrial projects with web development and automation. This means I can connect website findings with product data, technical sources and internal information processes instead of treating them only as a marketing topic.',
        'From Stuttgart, I work remotely and, by arrangement, with industrial and B2B companies in the Stuttgart region. You work directly with me from the assessment through to a possible technical implementation.',
        'The bounded audit can be a good fit when you do not need broad SEO-agency support, but a technical assessment of product information, sources and AI-search signals. The focus is on useful, maintainable systems and clear facts rather than a short-lived marketing trend.',
      ],
      points: [
        'understanding of machinery, industrial sales questions and products that require explanation;',
        'experience with software development, APIs, data flows and automation;',
        'ability to structure technical information, terminology and sources;',
        'ability to connect website findings with internal product and data processes;',
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
        'ChatGPT, Gemini, Google AI Overviews or the current Google AI-search experience, Perplexity, Microsoft Copilot and Claude decide which information they retrieve and how they formulate an answer.',
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
          'AI-search visibility describes whether AI-search systems can correctly understand a company, its technical products, applications and expertise, retrieve them for relevant questions and potentially consider them as sources. The assessment records specific questions, answers, mentions and source URLs.',
      },
      {
        question: 'What is the difference between SEO, GEO and AI Search Readiness?',
        answer:
          'SEO mainly improves discoverability in traditional search. GEO considers understanding, retrieval, mentions and citations in generated answers. AI Search Readiness connects both with product data, sources, specialist content and a measurement framework that supports business decisions.',
      },
      {
        question: 'Can a mention in ChatGPT or Gemini be guaranteed?',
        answer:
          'No. The platforms generate their own answers and may change sources, models and presentation at any time. The service can improve the foundations for understanding, discoverability, source eligibility and measurement.',
      },
      {
        question: 'Which industrial companies is the service suitable for?',
        answer:
          'It can be particularly relevant to manufacturers of machinery, equipment and technical products whose portfolios require explanation, operate in several languages or are distributed across websites, PDFs, dealers and other sources. Other B2B companies may also be suitable.',
      },
      {
        question: 'Does Hugo Menz offer GEO or AI-search optimization in Stuttgart?',
        answer:
          'Yes. From Stuttgart, Hugo Menz Automation offers AI Search Readiness for industrial companies and other B2B providers. GEO or Generative Engine Optimization, technical SEO, LLMO and AI Search Optimization are used as methods to make company, product and specialist information more understandable, discoverable and source-ready for AI-search systems. Work is available remotely and, by arrangement, in the Stuttgart region; mentions or recommendations are not guaranteed.',
      },
      {
        question: 'How is the baseline measured?',
        answer:
          'A prioritised set of real buyer questions is defined first. Selected AI-search systems, visible answers, mentions, competitors, source URLs and technical website signals are then documented. This baseline becomes the reference point for later reviews.',
      },
      {
        question: 'Which company and product data is required?',
        answer:
          'Useful inputs include public website content, product pages, data sheets, FAQs, terminology lists, application and market information, and access to responsible subject-matter experts. Confidential data is only included under a separate agreement.',
      },
      {
        question: 'Does new content have to be created?',
        answer:
          'Not automatically. Existing material can often be consolidated, clarified or connected more effectively first. New content is useful when important buyer questions, evidence, applications or comparisons are genuinely missing.',
      },
      {
        question: 'Can existing product pages and PDFs be used?',
        answer:
          'Yes. Existing pages and PDFs are important inputs to the assessment. The review checks whether their content is accessible, current, consistent, clearly attributable and sufficiently discoverable from the website.',
      },
      {
        question: 'Does the assessment work for multilingual websites?',
        answer:
          'Yes. Languages and markets are agreed in the scope. The review checks whether product names, performance data, company facts and central claims are consistent across language versions.',
      },
      {
        question: 'How is it decided whether implementation is worthwhile?',
        answer:
          'The decision considers the relevance of buyer questions, current visibility gaps, technical and organisational readiness, competition, effort and expected business value. The audit may also recommend waiting or not investing.',
      },
      {
        question: 'Does GEO replace traditional SEO?',
        answer:
          'No. GEO requires a technically accessible website, useful content and trustworthy information. Traditional SEO remains an essential part of the foundation.',
      },
      {
        question: 'What happens after the audit?',
        answer:
          'You receive findings, priorities, an action plan and a recommendation. You can then implement internally, commission a bounded pilot, assign individual actions separately or deliberately make no immediate change.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Next step',
    heading: 'Assess your company’s AI-search visibility',
    body:
      'Briefly describe your website, main product groups, target markets and languages. I will first assess whether an Industrial AI Visibility Audit can be scoped clearly and usefully.',
    action: {
      label: 'Assess AI-search visibility',
      href: '#contact-form',
      dataCta: 'ai-search-final',
    },
    note:
      'After the initial assessment, you receive a clear scope and a fixed project price. The initial assessment does not replace a complete audit.',
  },
  schemaKinds: ['Service', 'Person', 'BreadcrumbList', 'FAQPage'],
} as const satisfies PageDefinition;
