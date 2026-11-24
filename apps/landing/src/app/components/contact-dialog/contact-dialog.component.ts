import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CONTACT_FORM_WEBHOOK_URL } from '../../contact-form.config';
import { ContactDialogService } from '../../contact-dialog.service';
import {
  ContactFormRateLimiterService,
  RateLimitReason,
} from '../../contact-form-rate-limiter.service';
import { PageLocaleService } from '../../core/page-locale.service';
import { SnackbarService } from '../../snackbar.service';

type ContactFormStatus = 'idle' | 'success' | 'error';

const emailValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value)
    ? null
    : { invalidEmail: true };
};

const phoneValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;
  return /^[+\d\s\-().]{7,}$/.test(control.value) ? null : { invalidPhone: true };
};

const messageValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;
  const length = String(control.value).length;
  if (length < 20) return { messageTooShort: true };
  if (length > 1000) return { messageTooLong: true };
  return null;
};

const GENERAL_CONTACT_COPY = {
  de: {
    eyebrow: 'Kontakt mit Hugo Martin',
    title: 'Wobei brauchen Sie Unterstützung?',
    body:
      'Beschreiben Sie kurz Ihr Vorhaben: eine Angular-Anwendung, GitHub Copilot und Agenten oder einen Ablauf, den Sie automatisieren möchten.',
    confidentiality:
      'Eine kurze Beschreibung genügt. Bitte senden Sie keine Passwörter oder vertraulichen Daten.',
    closeLabel: 'Kontaktformular schließen',
    name: 'Name',
    email: 'E-Mail',
    phone: 'Telefon (optional)',
    message: 'Ihr Vorhaben',
    messagePlaceholder:
      'Was möchten Sie umsetzen oder vereinfachen? Welche Systeme nutzen Sie bereits?',
    nameRequired: 'Bitte geben Sie Ihren Namen ein.',
    emailRequired: 'Bitte geben Sie Ihre E-Mail ein.',
    emailInvalid: 'Bitte geben Sie eine gültige E-Mail ein.',
    phoneInvalid: 'Bitte geben Sie eine gültige Telefonnummer ein.',
    messageRequired: 'Bitte beschreiben Sie kurz Ihr Vorhaben.',
    messageTooShort: 'Mindestens 20 Zeichen erforderlich.',
    messageTooLong: 'Maximal 1000 Zeichen erlaubt.',
    errorSummary: 'Bitte korrigieren Sie die folgenden Fehler:',
    submit: 'Projekt besprechen',
    sending: 'Wird gesendet …',
    success: 'Danke. Ihre Anfrage wurde gesendet.',
    error: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
    missingWebhook: 'Das Formular ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.',
    rateMinute: 'Sie können höchstens zwei Nachrichten pro Minute senden.',
    rateSession: 'Sie haben das Nachrichtenlimit dieser Sitzung erreicht.',
    protection: 'Ihre Angaben helfen mir, Ihre Anfrage zu verstehen und zu beantworten.',
    messageHint: 'Zeichen',
  },
  en: {
    eyebrow: 'Contact Hugo Martin',
    title: 'How can I help?',
    body:
      'Briefly describe your project: an Angular application, GitHub Copilot and agents, or a process you want to automate.',
    confidentiality:
      'A short description is enough. Please do not send passwords or confidential data.',
    closeLabel: 'Close contact form',
    name: 'Name',
    email: 'Email',
    phone: 'Phone (optional)',
    message: 'Your project',
    messagePlaceholder:
      'What would you like to build or simplify? Which systems do you already use?',
    nameRequired: 'Please enter your name.',
    emailRequired: 'Please enter your email.',
    emailInvalid: 'Please enter a valid email address.',
    phoneInvalid: 'Please enter a valid phone number.',
    messageRequired: 'Please briefly describe your project.',
    messageTooShort: 'At least 20 characters are required.',
    messageTooLong: 'A maximum of 1000 characters is allowed.',
    errorSummary: 'Please correct the following errors:',
    submit: 'Discuss your project',
    sending: 'Sending …',
    success: 'Thank you. Your request has been sent.',
    error: 'Sending failed. Please try again.',
    missingWebhook: 'The form is currently unavailable. Please try again later.',
    rateMinute: 'You can send at most two messages per minute.',
    rateSession: 'You have reached the message limit for this session.',
    protection: 'Your details help me understand and respond to your request.',
    messageHint: 'characters',
  },
} as const;

const ANGULAR_CONTACT_COPY = {
  de: {
    ...GENERAL_CONTACT_COPY.de,
    eyebrow: 'Angular-Entwicklung',
    title: 'Was möchten Sie mit Angular umsetzen?',
    body:
      'Geht es um eine Webanwendung, ein internes Tool oder eine bestehende Komponentenbibliothek? Beschreiben Sie die Aufgabe und den aktuellen Stand.',
    message: 'Angular-Aufgabe',
    messagePlaceholder:
      'Welche Anwendung oder Komponenten sind betroffen? Was funktioniert bereits, und wobei benötigen Sie Unterstützung?',
    messageRequired: 'Bitte beschreiben Sie kurz Ihre Angular-Aufgabe.',
  },
  en: {
    ...GENERAL_CONTACT_COPY.en,
    eyebrow: 'Angular development',
    title: 'What would you like to build with Angular?',
    body:
      'Tell me about your web application, internal tool or existing component library, and where you need technical support.',
    message: 'Angular task',
    messagePlaceholder:
      'Which application or components are involved? What already works, and where do you need support?',
    messageRequired: 'Please briefly describe your Angular task.',
  },
} as const;

const COPILOT_CONTACT_COPY = {
  de: {
    ...GENERAL_CONTACT_COPY.de,
    eyebrow: 'GitHub Copilot & Agenten',
    title: 'Welche Entwicklungsaufgabe möchten Sie vereinfachen?',
    body:
      'Beschreiben Sie, wie Ihr Team heute arbeitet und wo eigene Skills, Agenten oder automatisierte Abläufe helfen könnten.',
    message: 'Entwicklungsablauf und Ziel',
    messagePlaceholder:
      'Wie nutzen Sie GitHub Copilot bereits? Welche Aufgaben sollen Skills oder Agenten unterstützen?',
    messageRequired: 'Bitte beschreiben Sie kurz die Entwicklungsaufgabe.',
  },
  en: {
    ...GENERAL_CONTACT_COPY.en,
    eyebrow: 'GitHub Copilot & agents',
    title: 'Which development task would you like to simplify?',
    body:
      'Describe how your team works today and where custom skills, agents or automated workflows could help.',
    message: 'Development workflow and goal',
    messagePlaceholder:
      'How do you currently use GitHub Copilot? Which tasks should skills or agents support?',
    messageRequired: 'Please briefly describe the development task.',
  },
} as const;

const PROCESS_AUTOMATION_CONTACT_COPY = {
  de: {
    ...GENERAL_CONTACT_COPY.de,
    eyebrow: 'Prozessautomatisierung',
    title: 'Welchen Ablauf möchten Sie vereinfachen?',
    body:
      'Beschreiben Sie den heutigen Ablauf, die beteiligten Systeme und wiederkehrende Arbeit. So können wir den Bedarf und einen passenden Projektumfang klären.',
    message: 'Ablauf und gewünschtes Ergebnis',
    messagePlaceholder:
      'Was erledigen Sie heute manuell? Welche Tools nutzen Sie, und was soll sich ändern?',
    messageRequired: 'Bitte beschreiben Sie kurz den Ablauf.',
  },
  en: {
    ...GENERAL_CONTACT_COPY.en,
    eyebrow: 'Process automation',
    title: 'Which workflow would you like to simplify?',
    body:
      'Briefly describe the current process, tools and repetitive work. This helps us understand the need and define a suitable project scope.',
    message: 'Workflow and intended outcome',
    messagePlaceholder:
      'What do you do manually today? Which tools do you use, and what would you like to change?',
    messageRequired: 'Please briefly describe the workflow.',
  },
} as const;

@Component({
  selector: 'app-contact-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-dialog.component.html',
  styleUrl: './contact-dialog.component.css',
})
export class ContactDialogComponent implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly pageLocale = inject(PageLocaleService);
  private readonly snackbarService = inject(SnackbarService);
  private readonly rateLimiter = inject(ContactFormRateLimiterService);

  protected readonly contactDialog = inject(ContactDialogService);
  private readonly dialog = viewChild<ElementRef<HTMLElement>>('dialog');
  private readonly nameInput = viewChild<ElementRef<HTMLInputElement>>('nameInput');

  readonly copy = computed(() => {
    const copyByContext = {
      general: GENERAL_CONTACT_COPY,
      angular: ANGULAR_CONTACT_COPY,
      copilot: COPILOT_CONTACT_COPY,
      'process-automation': PROCESS_AUTOMATION_CONTACT_COPY,
    } as const;

    return copyByContext[this.contactDialog.context()][this.pageLocale.language()];
  });
  readonly isSending = signal(false);
  readonly status = signal<ContactFormStatus>('idle');
  readonly submitted = signal(false);

  readonly form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, emailValidator],
      nonNullable: true,
    }),
    phone: new FormControl('', {
      validators: [phoneValidator],
      nonNullable: true,
    }),
    message: new FormControl('', {
      validators: [Validators.required, messageValidator],
      nonNullable: true,
    }),
  });

  private readonly formValue = toSignal(this.form.valueChanges, {
    initialValue: this.form.getRawValue(),
  });
  private readonly formStatus = toSignal(this.form.statusChanges, {
    initialValue: this.form.status,
  });

  readonly messageLength = computed(() => this.formValue().message?.length ?? 0);
  readonly errors = computed(() => {
    this.formValue();
    this.formStatus();

    if (!this.submitted()) return [];

    const errors: string[] = [];
    const name = this.form.controls.name;
    const email = this.form.controls.email;
    const phone = this.form.controls.phone;
    const message = this.form.controls.message;

    if (name.hasError('required')) errors.push(this.copy().nameRequired);
    if (email.hasError('required')) {
      errors.push(this.copy().emailRequired);
    } else if (email.hasError('invalidEmail')) {
      errors.push(this.copy().emailInvalid);
    }
    if (phone.hasError('invalidPhone')) errors.push(this.copy().phoneInvalid);
    if (message.hasError('required')) {
      errors.push(this.copy().messageRequired);
    } else if (message.hasError('messageTooShort')) {
      errors.push(this.copy().messageTooShort);
    } else if (message.hasError('messageTooLong')) {
      errors.push(this.copy().messageTooLong);
    }

    return errors;
  });
  readonly canSubmit = computed(() => {
    this.formStatus();
    return this.form.valid && !this.isSending();
  });

  constructor() {
    effect(() => {
      const isOpen = this.contactDialog.isOpen();
      this.document.body.style.overflow = isOpen ? 'hidden' : '';

      if (isOpen) {
        setTimeout(() => this.nameInput()?.nativeElement.focus(), 0);
      }
    });
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }

  @HostListener('document:keydown', ['$event'])
  handleDocumentKeydown(event: KeyboardEvent): void {
    if (!this.contactDialog.isOpen()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }

    if (event.key === 'Tab') this.trapFocus(event);
  }

  close(): void {
    this.contactDialog.close();
    this.submitted.set(false);
    this.form.reset();
    this.status.set('idle');
  }

  async submit(): Promise<void> {
    this.submitted.set(true);
    this.form.markAllAsTouched();

    if (!this.canSubmit()) return;

    const rateLimit = this.rateLimiter.canSubmit();
    if (!rateLimit.allowed) {
      this.snackbarService.show('error', this.rateLimitMessage(rateLimit.reason));
      return;
    }

    if (!CONTACT_FORM_WEBHOOK_URL.trim()) {
      this.snackbarService.show('error', this.copy().missingWebhook);
      return;
    }

    const formValue = this.form.getRawValue();
    const payload = {
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      phone: formValue.phone.trim(),
      message: formValue.message.trim(),
      page_url: window.location.href,
      source: 'website_contact_form',
      contact_context: this.contactDialog.context(),
    };

    this.isSending.set(true);

    try {
      const response = await fetch(CONTACT_FORM_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`Contact webhook returned ${response.status}`);

      this.rateLimiter.recordSubmission();
      this.snackbarService.show('success', this.copy().success);
      this.status.set('success');
      this.submitted.set(false);
      this.form.reset();
      setTimeout(() => this.close(), 300);
    } catch {
      this.snackbarService.show('error', this.copy().error);
      this.status.set('error');
    } finally {
      this.isSending.set(false);
    }
  }

  private rateLimitMessage(reason?: RateLimitReason): string {
    return reason === 'session' ? this.copy().rateSession : this.copy().rateMinute;
  }

  private trapFocus(event: KeyboardEvent): void {
    const dialog = this.dialog()?.nativeElement;
    if (!dialog) return;

    const focusableElements = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter(
      (element) => !element.hasAttribute('hidden') && element.getAttribute('aria-hidden') !== 'true',
    );

    if (focusableElements.length === 0) {
      event.preventDefault();
      dialog.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = this.document.activeElement;
    const focusIsOutsideDialog = !activeElement || !dialog.contains(activeElement);

    if (event.shiftKey && (activeElement === firstElement || focusIsOutsideDialog)) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && (activeElement === lastElement || focusIsOutsideDialog)) {
      event.preventDefault();
      firstElement.focus();
    }
  }
}
