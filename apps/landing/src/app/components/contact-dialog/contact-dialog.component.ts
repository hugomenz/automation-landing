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

const CONTACT_DIALOG_COPY = {
  de: {
    eyebrow: 'Pilot-Eignung prüfen',
    title: 'Maschinenfamilie kurz beschreiben',
    body:
      'Beschreiben Sie die Maschinenfamilie und den heutigen Angebotsprozess. Ich prüfe zunächst, ob ein RFQ Readiness Workshop sinnvoll ist.',
    confidentiality:
      'Bitte senden Sie im ersten Kontakt keine vertraulichen Lastenhefte, Zeichnungen oder Kundendaten. Der Umgang mit Dokumenten wird vor einer Analyse separat vereinbart.',
    closeLabel: 'Kontaktformular schließen',
    name: 'Name',
    email: 'E-Mail',
    phone: 'Telefon (optional)',
    message: 'Maschinenfamilie und heutiger RFQ-Prozess',
    messagePlaceholder:
      'Hilfreich sind: Maschinenfamilie, ungefähres Anfragevolumen, beteiligte Rollen und der größte Engpass.',
    nameRequired: 'Bitte geben Sie Ihren Namen ein.',
    emailRequired: 'Bitte geben Sie Ihre E-Mail ein.',
    emailInvalid: 'Bitte geben Sie eine gültige E-Mail ein.',
    phoneInvalid: 'Bitte geben Sie eine gültige Telefonnummer ein.',
    messageRequired: 'Bitte beschreiben Sie kurz die Maschinenfamilie und den Prozess.',
    messageTooShort: 'Mindestens 20 Zeichen erforderlich.',
    messageTooLong: 'Maximal 1000 Zeichen erlaubt.',
    errorSummary: 'Bitte korrigieren Sie die folgenden Fehler:',
    submit: 'Pilot-Eignung prüfen',
    sending: 'Wird gesendet …',
    success: 'Danke. Ihre Anfrage wurde gesendet.',
    error: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
    missingWebhook: 'Das Formular ist noch nicht konfiguriert.',
    rateMinute: 'Sie können höchstens zwei Nachrichten pro Minute senden.',
    rateSession: 'Sie haben das Nachrichtenlimit dieser Sitzung erreicht.',
    protection: 'Geschützt durch die bestehenden Formular-Kontrollen',
    messageHint: 'Zeichen',
  },
  en: {
    eyebrow: 'Check pilot fit',
    title: 'Briefly describe the machine family',
    body:
      'Describe the machine family and the current quotation process. I will first assess whether an RFQ readiness workshop is a sensible next step.',
    confidentiality:
      'Please do not send confidential specifications, drawings or customer data in this first contact. Document handling will be agreed separately before any analysis.',
    closeLabel: 'Close contact form',
    name: 'Name',
    email: 'Email',
    phone: 'Phone (optional)',
    message: 'Machine family and current RFQ process',
    messagePlaceholder:
      'Helpful context: machine family, approximate request volume, roles involved and the main bottleneck.',
    nameRequired: 'Please enter your name.',
    emailRequired: 'Please enter your email.',
    emailInvalid: 'Please enter a valid email address.',
    phoneInvalid: 'Please enter a valid phone number.',
    messageRequired: 'Please briefly describe the machine family and process.',
    messageTooShort: 'At least 20 characters are required.',
    messageTooLong: 'A maximum of 1000 characters is allowed.',
    errorSummary: 'Please correct the following errors:',
    submit: 'Check pilot fit',
    sending: 'Sending …',
    success: 'Thank you. Your request has been sent.',
    error: 'Sending failed. Please try again.',
    missingWebhook: 'The form is not configured yet.',
    rateMinute: 'You can send at most two messages per minute.',
    rateSession: 'You have reached the message limit for this session.',
    protection: 'Protected by the existing form controls',
    messageHint: 'characters',
  },
} as const;

const INDUSTRIAL_AI_SEARCH_CONTACT_COPY = {
  de: {
    eyebrow: 'KI-Sichtbarkeit prüfen',
    title: 'Ausgangslage kurz beschreiben',
    body:
      'Beschreiben Sie Ihre Website, die wichtigsten Produktgruppen, Zielmärkte und Sprachen. Ich prüfe zunächst, ob sich ein Industrial AI Visibility Audit sinnvoll abgrenzen lässt.',
    confidentiality:
      'Bitte senden Sie im ersten Kontakt keine vertraulichen Produktdaten, Kundendokumente oder internen Analysen. Der Umgang mit nicht öffentlichen Informationen wird vor einer Analyse separat vereinbart.',
    closeLabel: 'Kontaktformular schließen',
    name: 'Name',
    email: 'E-Mail',
    phone: 'Telefon (optional)',
    message: 'Website, Produktportfolio und Zielmärkte',
    messagePlaceholder:
      'Hilfreich sind: Website, wichtige Produktgruppen, Zielmärkte, Sprachen und bekannte Fragen zur KI-Sichtbarkeit.',
    nameRequired: 'Bitte geben Sie Ihren Namen ein.',
    emailRequired: 'Bitte geben Sie Ihre E-Mail ein.',
    emailInvalid: 'Bitte geben Sie eine gültige E-Mail ein.',
    phoneInvalid: 'Bitte geben Sie eine gültige Telefonnummer ein.',
    messageRequired: 'Bitte beschreiben Sie kurz die Ausgangslage.',
    messageTooShort: 'Mindestens 20 Zeichen erforderlich.',
    messageTooLong: 'Maximal 1000 Zeichen erlaubt.',
    errorSummary: 'Bitte korrigieren Sie die folgenden Fehler:',
    submit: 'KI-Sichtbarkeit prüfen lassen',
    sending: 'Wird gesendet …',
    success: 'Danke. Ihre Anfrage wurde gesendet.',
    error: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
    missingWebhook: 'Das Formular ist noch nicht konfiguriert.',
    rateMinute: 'Sie können höchstens zwei Nachrichten pro Minute senden.',
    rateSession: 'Sie haben das Nachrichtenlimit dieser Sitzung erreicht.',
    protection: 'Geschützt durch die bestehenden Formular-Kontrollen',
    messageHint: 'Zeichen',
  },
  en: {
    eyebrow: 'Assess AI-search visibility',
    title: 'Briefly describe the baseline',
    body:
      'Describe your website, main product groups, target markets and languages. I will first assess whether an Industrial AI Visibility Audit can be scoped usefully.',
    confidentiality:
      'Please do not send confidential product data, customer documents or internal analyses in this first contact. Handling of non-public information will be agreed separately before any assessment.',
    closeLabel: 'Close contact form',
    name: 'Name',
    email: 'Email',
    phone: 'Phone (optional)',
    message: 'Website, product portfolio and target markets',
    messagePlaceholder:
      'Helpful context: website, main product groups, target markets, languages and known AI-search visibility questions.',
    nameRequired: 'Please enter your name.',
    emailRequired: 'Please enter your email.',
    emailInvalid: 'Please enter a valid email address.',
    phoneInvalid: 'Please enter a valid phone number.',
    messageRequired: 'Please briefly describe the baseline.',
    messageTooShort: 'At least 20 characters are required.',
    messageTooLong: 'A maximum of 1000 characters is allowed.',
    errorSummary: 'Please correct the following errors:',
    submit: 'Assess AI-search visibility',
    sending: 'Sending …',
    success: 'Thank you. Your request has been sent.',
    error: 'Sending failed. Please try again.',
    missingWebhook: 'The form is not configured yet.',
    rateMinute: 'You can send at most two messages per minute.',
    rateSession: 'You have reached the message limit for this session.',
    protection: 'Protected by the existing form controls',
    messageHint: 'characters',
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
    const pageKey = this.pageLocale.pageKey();
    const isIndustrialAiSearchCampaign =
      pageKey === 'industrial-ai-search-de' || pageKey === 'industrial-ai-search-en';

    return (isIndustrialAiSearchCampaign
      ? INDUSTRIAL_AI_SEARCH_CONTACT_COPY
      : CONTACT_DIALOG_COPY)[this.pageLocale.language()];
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
