import { siteConfig } from './site.config';

export type Language = 'de' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface DiagramNode {
  stage: string;
  label: string;
  kind: 'input' | 'check' | 'action' | 'store';
}

export interface HeroDiagram {
  fileLabel: string;
  nodes: DiagramNode[];
  footer: string;
}

export interface BannerCase {
  label: string;
  pill?: string;
  detail?: string;
  diagram?: HeroDiagram;
}

export interface HelpRow {
  text: string;
  marker: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface BuildItem {
  title: string;
  body: string;
}

export interface LandingContent {
  languageName: string;
  alternateLanguageName: string;
  meta: {
    title: string;
    description: string;
  };
  brand: {
    title: string;
    subtitle: string;
  };
  nav: NavItem[];
  navCta: string;
  hero: {
    kicker: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    techLine: string;
    diagram: HeroDiagram;
  };
  banner: {
    prefix: string;
    cases: BannerCase[];
  };
  help: {
    eyebrow: string;
    title: string;
    intro: string;
    rows: HelpRow[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: ProcessStep[];
  };
  build: {
    eyebrow: string;
    title: string;
    intro: string;
    items: BuildItem[];
  };
  outcome: {
    eyebrow: string;
    title: string;
    points: string[];
    highlight: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    points: string[];
  };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
    note: string;
    personName: string;
    personRole: string;
  };
  footer: {
    left: string;
    right: string;
    contactLabel: string;
    builtWith: string;
  };
}

export const LANDING_CONTENT: Record<Language, LandingContent> = {
  de: {
    languageName: 'Deutsch',
    alternateLanguageName: 'English',
    meta: {
      title: siteConfig.seo.localized.de.title,
      description: siteConfig.seo.localized.de.description,
    },
    brand: {
      title: siteConfig.name,
      subtitle: 'Prozessautomatisierung · Deutschland',
    },
    nav: [
      { label: 'Wobei ich helfe', href: '#help' },
      { label: 'Ablauf', href: '#process' },
      { label: 'Beispiele', href: '#build' },
      { label: 'Vertrauen', href: '#trust' },
      { label: 'Kontakt', href: '#contact' },
    ],
    navCta: 'Prozess besprechen',
    hero: {
      kicker: 'Prozessautomatisierung für kleine und mittlere Unternehmen',
      title: 'Ich automatisiere Prozesse, die jeden Tag Zeit kosten.',
      body:
        'Sie zeigen mir, was heute manuell läuft. Ich baue daraus einen Workflow, der Tools verbindet, Aufgaben startet und sauber dokumentiert ist.',
      primaryCta: 'Prozess besprechen',
      secondaryCta: 'Beispiele ansehen',
      techLine: 'n8n · Make · APIs · CRM · Google Sheets · Airtable · Slack · HubSpot',
      diagram: {
        fileLabel: 'kontaktformular-crm.flow',
        nodes: [
          { stage: 'Input', label: 'Kontaktformular', kind: 'input' },
          { stage: 'Prüfen', label: 'Dublette prüfen', kind: 'check' },
          { stage: 'Aktion', label: 'CRM anlegen', kind: 'action' },
          { stage: 'Dokumentation', label: 'Vertrieb informieren', kind: 'store' },
        ],
        footer: 'ohne Copy-Paste · sauber dokumentiert',
      },
    },
    banner: {
      prefix: 'Ich baue Automatisierungen für Abläufe wie',
      cases: [
        {
          label: 'Kontaktformulare, die direkt im CRM landen',
          detail: 'ohne Copy-Paste und ohne Nachfassen',
          pill: 'Vertrieb',
          diagram: {
            fileLabel: 'kontaktformular-crm.flow',
            nodes: [
              { stage: 'Input', label: 'Kontaktformular', kind: 'input' },
              { stage: 'Prüfen', label: 'Dublette prüfen', kind: 'check' },
              { stage: 'Aktion', label: 'CRM anlegen', kind: 'action' },
              { stage: 'Dokumentation', label: 'Vertrieb informieren', kind: 'store' },
            ],
            footer: 'ohne Copy-Paste · sauber dokumentiert',
          },
        },
        {
          label: 'Reports, die jeden Montag automatisch rausgehen',
          detail: 'mit aktuellen Zahlen und dokumentiertem Versand',
          pill: 'Reporting',
          diagram: {
            fileLabel: 'wochenreport.flow',
            nodes: [
              { stage: 'Input', label: 'Datenquellen', kind: 'input' },
              { stage: 'Prüfen', label: 'Werte prüfen', kind: 'check' },
              { stage: 'Aktion', label: 'Report senden', kind: 'action' },
              { stage: 'Dokumentation', label: 'Verlauf speichern', kind: 'store' },
            ],
            footer: 'jede Woche automatisch',
          },
        },
        {
          label: 'Support-Anfragen, die direkt richtig landen',
          detail: 'mit Kategorie, Priorität und Zuständigkeit',
          pill: 'Support',
          diagram: {
            fileLabel: 'support-routing.flow',
            nodes: [
              { stage: 'Input', label: 'Anfrage', kind: 'input' },
              { stage: 'Prüfen', label: 'Kategorie prüfen', kind: 'check' },
              { stage: 'Aktion', label: 'Owner setzen', kind: 'action' },
              { stage: 'Dokumentation', label: 'Status speichern', kind: 'store' },
            ],
            footer: 'klare Zuständigkeiten',
          },
        },
        {
          label: 'Rechnungen, die geprüft und sauber abgelegt werden',
          detail: 'statt E-Mail, Download und Handarbeit',
          pill: 'Backoffice',
          diagram: {
            fileLabel: 'rechnung-ablage.flow',
            nodes: [
              { stage: 'Input', label: 'Rechnung', kind: 'input' },
              { stage: 'Prüfen', label: 'Daten lesen', kind: 'check' },
              { stage: 'Aktion', label: 'Prüfung markieren', kind: 'action' },
              { stage: 'Dokumentation', label: 'Ablage speichern', kind: 'store' },
            ],
            footer: 'weniger manuelle Ablage',
          },
        },
        {
          label: 'Neue Kunden, bei denen sofort Aufgaben starten',
          detail: 'damit im Onboarding nichts liegen bleibt',
          pill: 'Onboarding',
          diagram: {
            fileLabel: 'onboarding.flow',
            nodes: [
              { stage: 'Input', label: 'Neuer Kunde', kind: 'input' },
              { stage: 'Prüfen', label: 'Daten prüfen', kind: 'check' },
              { stage: 'Aktion', label: 'Aufgaben starten', kind: 'action' },
              { stage: 'Dokumentation', label: 'Fortschritt speichern', kind: 'store' },
            ],
            footer: 'nichts bleibt liegen',
          },
        },
        {
          label: 'Leads, die automatisch beim richtigen Team landen',
          detail: 'mit Prüfung, Weiterleitung und sauberem Status',
          pill: 'CRM',
          diagram: {
            fileLabel: 'lead-routing.flow',
            nodes: [
              { stage: 'Input', label: 'Lead', kind: 'input' },
              { stage: 'Prüfen', label: 'Passung prüfen', kind: 'check' },
              { stage: 'Aktion', label: 'Team informieren', kind: 'action' },
              { stage: 'Dokumentation', label: 'Status speichern', kind: 'store' },
            ],
            footer: 'klare Weiterleitung',
          },
        },
      ],
    },
    help: {
      eyebrow: 'Typische Abläufe',
      title: 'Wobei ich helfe',
      intro:
        'Meistens beginnt es nicht mit einem Tool. Es beginnt mit einem Ablauf, der jeden Tag manuell wiederholt wird.',
      rows: [
        { text: 'Leads landen in E-Mails, aber nicht sauber im CRM.', marker: 'crm' },
        { text: 'Reports werden jede Woche manuell gebaut.', marker: 'report' },
        { text: 'Kundenanfragen müssen von Hand sortiert werden.', marker: 'support' },
        { text: 'Daten werden zwischen Tools kopiert.', marker: 'data' },
        { text: 'Angebote und Follow-ups hängen an einzelnen Personen.', marker: 'sales' },
        { text: 'Support-Tickets brauchen klare Regeln und Zuständigkeit.', marker: 'support' },
        { text: 'Excel ist zum internen Prozess geworden.', marker: 'data' },
        { text: 'Neue Kunden brauchen immer dieselben manuellen Schritte.', marker: 'manual' },
        {
          text: 'Rechnungen, PDFs oder Anhänge müssen ausgelesen und abgelegt werden.',
          marker: 'data',
        },
        {
          text: 'Slack oder E-Mail ist voller Aufgaben, aber niemand hat den Überblick.',
          marker: 'manual',
        },
      ],
    },
    process: {
      eyebrow: 'Ablauf',
      title: 'So läuft es',
      intro:
        'Kein langer Strategieprozess. Wir nehmen einen konkreten Ablauf, machen ihn sichtbar und bauen die Automation dafür.',
      steps: [
        {
          number: '01',
          title: 'Zeigen',
          body: 'Sie zeigen mir den Prozess und wo heute manuelle Arbeit entsteht.',
        },
        {
          number: '02',
          title: 'Planen',
          body: 'Ich skizziere den Workflow: Trigger, Daten, Regeln, Ausnahmen.',
        },
        {
          number: '03',
          title: 'Bauen',
          body: 'Ich verbinde die Tools, teste echte Fälle und baue Fehlerlogik ein.',
        },
        {
          number: '04',
          title: 'Übergeben',
          body: 'Sie bekommen eine funktionierende Automation mit kurzer Dokumentation.',
        },
      ],
    },
    build: {
      eyebrow: 'Beispiele',
      title: 'Was ich baue',
      intro:
        'Keine abstrakten Pakete. Das sind typische Automationen, die ich für Teams umsetzen kann.',
      items: [
        {
          title: 'CRM-Automationen',
          body: 'Leads, Deals, Kontakte und Follow-ups automatisch aktualisieren.',
        },
        {
          title: 'Lead-Routing',
          body: 'Anfragen prüfen, qualifizieren und an die richtige Person schicken.',
        },
        {
          title: 'Reporting-Flows',
          body: 'Daten sammeln, bereinigen und regelmäßig als Report ausgeben.',
        },
        {
          title: 'Support-Routing',
          body: 'Tickets sortieren, priorisieren und Zuständigkeiten setzen.',
        },
        {
          title: 'Google Sheets / Airtable Workflows',
          body: 'Tabellen als Prozess ersetzen oder sauber in Workflows einbinden.',
        },
        {
          title: 'API-Verbindungen',
          body: 'Tools verbinden, wenn es keine fertige Integration gibt.',
        },
        {
          title: 'Dokumentenverarbeitung',
          body: 'PDFs, E-Mails oder Anhänge auslesen und strukturiert speichern.',
        },
        {
          title: 'Slack / Teams Benachrichtigungen',
          body: 'Wichtige Ereignisse automatisch an den richtigen Kanal senden.',
        },
        {
          title: 'Human-in-the-loop KI-Workflows',
          body: 'KI nutzen, aber kritische Entscheidungen beim Menschen lassen.',
        },
        {
          title: 'Interne Tools',
          body: 'Kleine Interfaces bauen, wenn ein Workflow bedienbar sein muss.',
        },
        {
          title: 'n8n / Make Workflows',
          body: 'Workflows bauen, testen, dokumentieren und wartbar machen.',
        },
      ],
    },
    outcome: {
      eyebrow: 'Ergebnis',
      title: 'Was Sie am Ende haben',
      points: [
        'Einen Workflow, der läuft',
        'Weniger manuelle Schritte',
        'Weniger Copy-Paste',
        'Klare Regeln und Zuständigkeiten',
        'Dokumentation für Ihr Team',
        'Tests mit echten Fällen',
        'Eine Lösung, die nicht nur in einer Demo funktioniert',
        'Einen Ansprechpartner, der den Prozess verstanden hat',
      ],
      highlight:
        'Das Ziel ist nicht, ein Tool einzuführen. Das Ziel ist, dass ein nerviger Prozess nicht mehr jeden Tag Zeit frisst.',
    },
    trust: {
      eyebrow: 'Zusammenarbeit',
      title: 'Warum mit mir',
      points: [
        'Sie sprechen direkt mit der Person, die baut.',
        'Ich denke den Prozess mit, nicht nur das Tool.',
        'Ich sage auch, wenn etwas nicht automatisiert werden sollte.',
        'Ich dokumentiere, was gebaut wurde.',
        'Ich teste mit echten Fällen.',
        'Ich baue so, dass Ihr Team es versteht.',
        'Ich halte die Lösung bewusst einfach, wenn einfach reicht.',
      ],
    },
    cta: {
      eyebrow: 'Kontakt',
      title: 'Zeigen Sie mir den Prozess. Ich sage Ihnen, was sich automatisieren lässt.',
      body:
        'Schicken Sie mir kurz, was heute manuell passiert. Ich schaue mir den Ablauf an und sage Ihnen, ob und wie ich ihn automatisieren würde.',
      button: 'Prozess besprechen',
      note: 'Kein Sales-Theater. Erst prüfen wir, ob der Prozess sinnvoll automatisierbar ist.',
      personName: siteConfig.name,
      personRole: 'Prozessautomatisierung · Deutschland',
    },
    footer: {
      left: siteConfig.name,
      right: 'Praktische Prozessautomatisierung für Unternehmen in Deutschland.',
      contactLabel: 'Kontakt',
      builtWith: 'Gebaut mit Angular',
    },
  },
  en: {
    languageName: 'English',
    alternateLanguageName: 'Deutsch',
    meta: {
      title: siteConfig.seo.localized.en.title,
      description: siteConfig.seo.localized.en.description,
    },
    brand: {
      title: siteConfig.name,
      subtitle: 'Process automation · Germany',
    },
    nav: [
      { label: 'What I help with', href: '#help' },
      { label: 'Process', href: '#process' },
      { label: 'Examples', href: '#build' },
      { label: 'Trust', href: '#trust' },
      { label: 'Contact', href: '#contact' },
    ],
    navCta: 'Discuss a process',
    hero: {
      kicker: 'Process automation for small and mid-sized companies',
      title: 'I automate the processes that cost you time every day.',
      body:
        'You show me what runs manually today. I turn it into a workflow that connects your tools, triggers tasks and is cleanly documented.',
      primaryCta: 'Discuss a process',
      secondaryCta: 'See examples',
      techLine: 'n8n · Make · APIs · CRM · Google Sheets · Airtable · Slack · HubSpot',
      diagram: {
        fileLabel: 'contact-form-crm.flow',
        nodes: [
          { stage: 'Input', label: 'Contact form', kind: 'input' },
          { stage: 'Check', label: 'Check duplicates', kind: 'check' },
          { stage: 'Action', label: 'Create CRM record', kind: 'action' },
          { stage: 'Documentation', label: 'Notify sales', kind: 'store' },
        ],
        footer: 'no copy-paste · documented',
      },
    },
    banner: {
      prefix: 'I build automations for workflows like',
      cases: [
        {
          label: 'Contact forms that land directly in your CRM',
          detail: 'without copy-paste or manual follow-up',
          pill: 'Sales',
          diagram: {
            fileLabel: 'contact-form-crm.flow',
            nodes: [
              { stage: 'Input', label: 'Contact form', kind: 'input' },
              { stage: 'Check', label: 'Check duplicates', kind: 'check' },
              { stage: 'Action', label: 'Create CRM record', kind: 'action' },
              { stage: 'Documentation', label: 'Notify sales', kind: 'store' },
            ],
            footer: 'no copy-paste · documented',
          },
        },
        {
          label: 'Reports that go out automatically every Monday',
          detail: 'with current numbers and tracked delivery',
          pill: 'Reporting',
          diagram: {
            fileLabel: 'weekly-report.flow',
            nodes: [
              { stage: 'Input', label: 'Data sources', kind: 'input' },
              { stage: 'Check', label: 'Validate values', kind: 'check' },
              { stage: 'Action', label: 'Send report', kind: 'action' },
              { stage: 'Documentation', label: 'Save history', kind: 'store' },
            ],
            footer: 'sent automatically every week',
          },
        },
        {
          label: 'Support requests that land with the right owner',
          detail: 'with category, priority and clear responsibility',
          pill: 'Support',
          diagram: {
            fileLabel: 'support-routing.flow',
            nodes: [
              { stage: 'Input', label: 'Request', kind: 'input' },
              { stage: 'Check', label: 'Check category', kind: 'check' },
              { stage: 'Action', label: 'Assign owner', kind: 'action' },
              { stage: 'Documentation', label: 'Save status', kind: 'store' },
            ],
            footer: 'clear ownership',
          },
        },
        {
          label: 'Invoices that get checked and filed cleanly',
          detail: 'instead of email, download and manual work',
          pill: 'Back office',
          diagram: {
            fileLabel: 'invoice-filing.flow',
            nodes: [
              { stage: 'Input', label: 'Invoice', kind: 'input' },
              { stage: 'Check', label: 'Read data', kind: 'check' },
              { stage: 'Action', label: 'Mark review', kind: 'action' },
              { stage: 'Documentation', label: 'Save archive', kind: 'store' },
            ],
            footer: 'less manual filing',
          },
        },
        {
          label: 'New customers that trigger the right tasks immediately',
          detail: 'so onboarding does not depend on memory',
          pill: 'Onboarding',
          diagram: {
            fileLabel: 'onboarding.flow',
            nodes: [
              { stage: 'Input', label: 'New customer', kind: 'input' },
              { stage: 'Check', label: 'Check data', kind: 'check' },
              { stage: 'Action', label: 'Start tasks', kind: 'action' },
              { stage: 'Documentation', label: 'Save progress', kind: 'store' },
            ],
            footer: 'nothing gets forgotten',
          },
        },
        {
          label: 'Leads that reach the right team automatically',
          detail: 'with checks, routing and a clean status',
          pill: 'CRM',
          diagram: {
            fileLabel: 'lead-routing.flow',
            nodes: [
              { stage: 'Input', label: 'Lead', kind: 'input' },
              { stage: 'Check', label: 'Check fit', kind: 'check' },
              { stage: 'Action', label: 'Notify team', kind: 'action' },
              { stage: 'Documentation', label: 'Save status', kind: 'store' },
            ],
            footer: 'clear routing',
          },
        },
      ],
    },
    help: {
      eyebrow: 'Typical workflows',
      title: 'What I help with',
      intro:
        'Most of the time it does not start with a tool. It starts with a process that gets repeated manually every day.',
      rows: [
        { text: 'Leads land in email, but never cleanly in the CRM.', marker: 'crm' },
        { text: 'Reports get built by hand every week.', marker: 'report' },
        { text: 'Customer requests have to be sorted manually.', marker: 'support' },
        { text: 'Data gets copied between tools.', marker: 'data' },
        { text: 'Quotes and follow-ups depend on single people.', marker: 'sales' },
        { text: 'Support tickets need clear rules and ownership.', marker: 'support' },
        { text: 'Excel has quietly become an internal process.', marker: 'data' },
        { text: 'New customers always need the same manual steps.', marker: 'manual' },
        {
          text: 'Invoices, PDFs or attachments need to be read out and filed.',
          marker: 'data',
        },
        {
          text: 'Slack or email is full of tasks, but nobody has the overview.',
          marker: 'manual',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'How it works',
      intro:
        'No long strategy process. We take one concrete workflow, make it visible and build the automation for it.',
      steps: [
        {
          number: '01',
          title: 'Show',
          body: 'You show me the process and where manual work happens today.',
        },
        {
          number: '02',
          title: 'Plan',
          body: 'I sketch the workflow: triggers, data, rules, exceptions.',
        },
        {
          number: '03',
          title: 'Build',
          body: 'I connect the tools, test real cases and add error handling.',
        },
        {
          number: '04',
          title: 'Hand over',
          body: 'You get a working automation with short documentation.',
        },
      ],
    },
    build: {
      eyebrow: 'Examples',
      title: 'What I build',
      intro:
        'No abstract packages. These are typical automations I can implement for teams.',
      items: [
        {
          title: 'CRM automations',
          body: 'Update leads, deals, contacts and follow-ups automatically.',
        },
        {
          title: 'Lead routing',
          body: 'Check requests, qualify them and send them to the right person.',
        },
        {
          title: 'Reporting flows',
          body: 'Collect data, clean it up and output it as a regular report.',
        },
        {
          title: 'Support routing',
          body: 'Sort tickets, prioritize them and set ownership.',
        },
        {
          title: 'Google Sheets / Airtable workflows',
          body: 'Replace spreadsheet processes or wire them cleanly into workflows.',
        },
        {
          title: 'API connections',
          body: 'Connect tools when there is no ready-made integration.',
        },
        {
          title: 'Document processing',
          body: 'Read out PDFs, emails or attachments and store them structured.',
        },
        {
          title: 'Slack / Teams notifications',
          body: 'Send important events automatically to the right channel.',
        },
        {
          title: 'Human-in-the-loop AI workflows',
          body: 'Use AI, but keep critical decisions with a human.',
        },
        {
          title: 'Internal tools',
          body: 'Build small interfaces when a workflow needs to be operated.',
        },
        {
          title: 'n8n / Make workflows',
          body: 'Build, test, document and maintain workflows.',
        },
      ],
    },
    outcome: {
      eyebrow: 'Outcome',
      title: 'What you end up with',
      points: [
        'A workflow that runs',
        'Fewer manual steps',
        'Less copy-paste',
        'Clear rules and ownership',
        'Documentation for your team',
        'Tests with real cases',
        'A solution that works beyond a demo',
        'A contact who understood the process',
      ],
      highlight:
        'The goal is not to introduce a tool. The goal is that an annoying process stops eating time every day.',
    },
    trust: {
      eyebrow: 'Working together',
      title: 'Why work with me',
      points: [
        'You talk directly to the person who builds it.',
        'I think through the process, not just the tool.',
        'I also tell you when something should not be automated.',
        'I document what was built.',
        'I test with real cases.',
        'I build so that your team understands it.',
        'I keep the solution deliberately simple when simple is enough.',
      ],
    },
    cta: {
      eyebrow: 'Contact',
      title: 'Show me the process. I will tell you what can be automated.',
      body:
        'Send me a short description of what happens manually today. I will look at the workflow and tell you whether and how I would automate it.',
      button: 'Discuss a process',
      note: 'No sales theatre. First we check whether the process makes sense to automate.',
      personName: siteConfig.name,
      personRole: 'Process automation · Germany',
    },
    footer: {
      left: siteConfig.name,
      right: 'Practical process automation for companies in Germany.',
      contactLabel: 'Contact',
      builtWith: 'Built with Angular',
    },
  },
};
