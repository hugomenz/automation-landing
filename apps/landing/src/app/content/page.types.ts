export type PageLanguage = 'de' | 'en';

export type PageLocale = 'de_DE' | 'en';

export type PagePath = '/' | `/${string}/`;

export type PageKey =
  | 'home-de'
  | 'technical-request-qualification'
  | 'rfq-readiness-workshop'
  | 'internal-rfq-copilot'
  | 'end-of-line'
  | 'packaging-machinery'
  | 'palletising-systems'
  | 'stuttgart'
  | 'about-hugo-menz'
  | 'contact'
  | 'home-en'
  | 'n8n-consulting-stuttgart';

export type SchemaKind =
  | 'BreadcrumbList'
  | 'ContactPage'
  | 'FAQPage'
  | 'Person'
  | 'ProfessionalService'
  | 'Service'
  | 'WebSite';

export interface HreflangAlternate {
  readonly hreflang: 'de-DE' | 'en' | 'x-default';
  readonly path: PagePath;
}

export interface OpenGraphDefinition {
  readonly title: string;
  readonly description: string;
  readonly type: 'website';
  readonly locale: PageLocale;
  readonly imagePath: PagePath | `/${string}`;
  readonly imageAlt: string;
  readonly siteName: 'Hugo Menz Automation';
}

export interface TwitterDefinition {
  readonly card: 'summary_large_image';
  readonly title: string;
  readonly description: string;
  readonly imagePath: PagePath | `/${string}`;
  readonly imageAlt: string;
}

export interface PageSeo {
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: PagePath;
  readonly robots: 'index,follow';
  readonly openGraph: OpenGraphDefinition;
  readonly twitter: TwitterDefinition;
  readonly alternates?: readonly HreflangAlternate[];
}

export interface ContentLink {
  readonly label: string;
  readonly href: string;
  readonly lang?: PageLanguage;
  readonly dataCta?: string;
  readonly external?: boolean;
}

export interface BreadcrumbItem {
  readonly label: string;
  readonly path?: PagePath;
}

export interface HeroDiagramNode {
  readonly stage: string;
  readonly label: string;
}

export interface HeroDiagram {
  readonly fileLabel: string;
  readonly nodes: readonly HeroDiagramNode[];
  readonly footer: string;
}

export interface PagePortrait {
  readonly src: `/${string}`;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface PageHero {
  readonly kicker?: string;
  readonly h1: string;
  readonly lead?: string;
  readonly primaryCta?: ContentLink;
  readonly secondaryCta?: ContentLink;
  readonly trustLine?: string;
  readonly diagram?: HeroDiagram;
  readonly portrait?: PagePortrait;
}

export interface SectionItem {
  readonly title?: string;
  readonly body?: string;
  readonly points?: readonly string[];
  readonly link?: ContentLink;
  readonly label?: string;
}

export interface SectionColumn {
  readonly heading: string;
  readonly intro?: string;
  readonly points: readonly string[];
}

export type SectionLayout =
  | 'cards'
  | 'comparison'
  | 'contact'
  | 'list'
  | 'profile'
  | 'steps'
  | 'text';

export interface PageSection {
  readonly id: string;
  readonly eyebrow?: string;
  readonly heading: string;
  readonly intro?: string;
  readonly paragraphs?: readonly string[];
  readonly points?: readonly string[];
  readonly items?: readonly SectionItem[];
  readonly columns?: readonly SectionColumn[];
  readonly links?: readonly ContentLink[];
  readonly callout?: string;
  readonly ordered?: boolean;
  readonly layout?: SectionLayout;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface FaqBlock {
  readonly id: string;
  readonly eyebrow?: string;
  readonly heading: string;
  readonly items: readonly FaqItem[];
}

export interface FinalCta {
  readonly eyebrow?: string;
  readonly heading: string;
  readonly body: string;
  readonly action: ContentLink;
  readonly note?: string;
}

export interface PageHeaderCopy {
  readonly brand: string;
  readonly subtitle: string;
  readonly navigation: readonly ContentLink[];
  readonly cta: ContentLink;
}

export interface PageFooterCopy {
  readonly left: string;
  readonly right: string;
  readonly secondaryLink?: ContentLink;
}

export interface PageDefinition {
  readonly key: PageKey;
  readonly path: PagePath;
  readonly lang: PageLanguage;
  readonly locale: PageLocale;
  readonly seo: PageSeo;
  readonly breadcrumbs: readonly BreadcrumbItem[];
  readonly hero: PageHero;
  readonly sections: readonly PageSection[];
  readonly faq?: FaqBlock;
  readonly finalCta: FinalCta;
  readonly schemaKinds: readonly SchemaKind[];
  readonly header?: PageHeaderCopy;
  readonly footer?: PageFooterCopy;
}
