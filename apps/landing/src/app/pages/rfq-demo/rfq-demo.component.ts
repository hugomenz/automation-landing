import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import type { PageDefinition } from '../../content/page.types';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';

type DemoState = 'ready' | 'loading' | 'done';

const DEMO_COPY = {
  de: {
    caseLabel: 'Beispielfall',
    workspaceEyebrow: 'Vorbereiteter Kundenfall',
    workspaceHeading: 'Technische Anfrage',
    workspaceNote: 'Alle Angaben sind für diese Demo bereits ausgefüllt. Es werden keine Daten übertragen.',
    fieldsLabel: 'Vorbereitete RFQ-Daten',
    fields: [
      ['Unternehmen', 'Musterwerk GmbH'],
      ['Projekt', 'Palettierzelle Linie 4'],
      ['Anlagentyp', 'Roboter-Palettierzelle'],
      ['Taktzeit', '3,3 s'],
      ['Liefertermin', '15.12.2026'],
      ['Bodenverschraubung', 'Möglich · max. 120 mm'],
    ],
    requestLabel: 'Technische Anfrage',
    requestText: 'Wir benötigen eine Palettierzelle für geschlossene Kartons mit 8–12 kg. Ziel sind 20 Kartons/min; im Lastenheft stehen 18 Zyklen/min. Reinigung täglich mit Wasser, Steuerung Siemens S7-1500. Bitte prüfen Sie Machbarkeit und offene Punkte.',
    attachmentsLabel: 'Vorbereitete Anhänge',
    pdfName: 'Lastenheft_Palettierzelle.pdf',
    pdfMeta: '12 Seiten · Text erkannt',
    imageName: 'Layout_Linie4.png',
    imageMeta: 'Produkt und Layout erkannt',
    buttonReady: 'RFQ-Fit-Check starten',
    buttonLoading: 'Anfrage wird geprüft …',
    buttonDone: 'Analyse abgeschlossen',
    loaderSteps: ['Dokumente lesen', 'Anforderungen abgleichen', 'Lücken priorisieren'],
    analysisLabel: 'ANALYSE',
    decisionEyebrow: 'Entscheidung',
    decisionHeading: 'Taktzeit-Widerspruch blockiert die Auslegung',
    decisionBody: '20 Kartons/min entsprechen 3,0 s pro Karton. Die angegebenen 3,3 s liefern nur 18,2 Kartons/min – diese Differenz beeinflusst Roboter-, Greifer- und Pufferdimensionierung.',
    stats: ['belegte Fakten', 'offene Angaben', 'Widerspruch', 'Dateien gelesen'],
    gapsKicker: 'Vor Angebot klären',
    gapsHeading: 'Diese Punkte blockieren eine belastbare Auslegung',
    gaps: [
      ['Leistung vs. Taktzeit', 'kritisch', '20 Kartons/min erfordern 3,0 s; angegeben sind 3,3 s beziehungsweise 18 Zyklen/min.', 'Dokumentenvergleich'],
      ['Linien-Schnittstelle', 'kritisch', 'Signale, Protokoll und Verantwortungsgrenze sind nicht definiert.', 'Schnittstellenliste'],
      ['FAT/SAT-Kriterien', 'kritisch', 'Messbare Abnahmekriterien und Testumfang fehlen.', 'Lastenheft'],
      ['Reinigungsstandard', 'prüfen', 'IP-Schutzart, Reinigungsmittel und Ablaufkonzept müssen bestätigt werden.', 'Kundenanfrage'],
    ],
    evidenceKicker: 'Mit Quelle belegt',
    evidenceHeading: 'Erkannte Anforderungen',
    evidence: [
      ['Anlagentyp', '100%', 'Roboter-Palettierzelle', 'RFQ-Formular'],
      ['Taktzeit', '100%', '3,3 s', 'RFQ-Formular'],
      ['Produktgewicht', '96%', '8–12 kg je Karton', 'Lastenheft · S. 4'],
      ['Sollleistung', '94%', '20 Kartons/min', 'Kundenanfrage'],
      ['Steuerung', '98%', 'Siemens S7-1500', 'Lastenheft · S. 7'],
      ['Bodenbefestigung', '100%', 'Möglich · max. 120 mm', 'RFQ-Formular'],
    ],
    nextKicker: 'Nächster Schritt',
    nextText: 'Drei gebündelte Rückfragen senden und den Fall anschließend erneut prüfen.',
    contactLabel: 'Eigene RFQ-Demo besprechen',
    contactHref: '/kontakt/',
  },
  en: {
    caseLabel: 'Example case',
    workspaceEyebrow: 'Prepared customer case',
    workspaceHeading: 'Technical enquiry',
    workspaceNote: 'Everything is pre-filled for this demo. No data is transmitted.',
    fieldsLabel: 'Prepared RFQ data',
    fields: [
      ['Company', 'Musterwerk GmbH'],
      ['Project', 'Palletising cell · Line 4'],
      ['Machine type', 'Robotic palletising cell'],
      ['Cycle time', '3.3 s'],
      ['Target delivery', '15 Dec 2026'],
      ['Floor anchoring', 'Permitted · max. 120 mm'],
    ],
    requestLabel: 'Technical enquiry',
    requestText: 'We need a palletising cell for sealed cartons weighing 8–12 kg. The target is 20 cartons/min, while the specification states 18 cycles/min. Daily washdown with water and a Siemens S7-1500 controller are required. Please assess feasibility and identify open points.',
    attachmentsLabel: 'Prepared attachments',
    pdfName: 'Palletising_Cell_Specification.pdf',
    pdfMeta: '12 pages · text extracted',
    imageName: 'Line4_Layout.png',
    imageMeta: 'Product and layout recognised',
    buttonReady: 'Start RFQ Fit Check',
    buttonLoading: 'Checking enquiry …',
    buttonDone: 'Analysis complete',
    loaderSteps: ['Reading documents', 'Checking requirements', 'Prioritising gaps'],
    analysisLabel: 'ANALYSIS',
    decisionEyebrow: 'Decision',
    decisionHeading: 'Cycle-time contradiction blocks system sizing',
    decisionBody: '20 cartons/min requires 3.0 seconds per carton. The stated 3.3 seconds only delivers 18.2 cartons/min — a difference that affects robot, gripper and buffer sizing.',
    stats: ['evidence-backed facts', 'open inputs', 'contradiction', 'files reviewed'],
    gapsKicker: 'Clarify before quoting',
    gapsHeading: 'These points block reliable system sizing',
    gaps: [
      ['Throughput vs. cycle time', 'critical', '20 cartons/min requires 3.0 s; the inputs state 3.3 s and 18 cycles/min.', 'Cross-document check'],
      ['Line interface', 'critical', 'Signals, protocol and the responsibility boundary are not defined.', 'Interface specification'],
      ['FAT/SAT criteria', 'critical', 'Measurable acceptance criteria and the test scope are missing.', 'Specification'],
      ['Washdown standard', 'review', 'Ingress protection, cleaning agents and drainage concept must be confirmed.', 'Customer enquiry'],
    ],
    evidenceKicker: 'Supported by a source',
    evidenceHeading: 'Requirements identified',
    evidence: [
      ['Machine type', '100%', 'Robotic palletising cell', 'RFQ form'],
      ['Cycle time', '100%', '3.3 s', 'RFQ form'],
      ['Product weight', '96%', '8–12 kg per carton', 'Specification · p. 4'],
      ['Target throughput', '94%', '20 cartons/min', 'Customer enquiry'],
      ['Controller', '98%', 'Siemens S7-1500', 'Specification · p. 7'],
      ['Floor anchoring', '100%', 'Permitted · max. 120 mm', 'RFQ form'],
    ],
    nextKicker: 'Next step',
    nextText: 'Send the three bundled clarification questions, then review the case again.',
    contactLabel: 'Discuss your own RFQ demo',
    contactHref: '/en/#contact',
  },
} as const;

@Component({
  selector: 'app-rfq-demo',
  standalone: true,
  imports: [BreadcrumbsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rfq-demo.component.html',
  styleUrl: './rfq-demo.component.css',
})
export class RfqDemoComponent {
  readonly page = input.required<PageDefinition>();
  readonly copy = computed(() => DEMO_COPY[this.page().lang]);
  readonly statValues = [8, 3, 1, 2] as const;
  readonly state = signal<DemoState>('ready');
  readonly loadingStep = signal(0);
  private readonly result = viewChild<ElementRef<HTMLElement>>('result');

  startAnalysis(): void {
    if (this.state() !== 'ready') return;

    this.state.set('loading');
    this.loadingStep.set(0);

    const steps = [1, 2, 3];
    steps.forEach((step, index) => {
      window.setTimeout(() => this.loadingStep.set(step), 430 * (index + 1));
    });

    window.setTimeout(() => {
      this.state.set('done');
      window.setTimeout(
        () => this.result()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        60,
      );
    }, 1850);
  }
}
