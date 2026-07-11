import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  OnDestroy,
  signal,
  viewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MAKE_WEBHOOK_URL } from '../../contact-form.config';
import { LandingContent } from '../../content';
import { ContactDialogService } from '../../contact-dialog.service';
import { ContactFormRateLimiterService } from '../../contact-form-rate-limiter.service';
import { LanguageService } from '../../language.service';
import { SnackbarService } from '../../snackbar.service';

type ContactFormStatus = 'idle' | 'success' | 'error';

// Validators
const emailValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return EMAIL_REGEX.test(control.value) ? null : { invalidEmail: true };
};

const phoneValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;
  const PHONE_REGEX = /^[+\d\s\-().]{7,}$/;
  return PHONE_REGEX.test(control.value) ? null : { invalidPhone: true };
};

const messageValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) return null;
  const length = control.value.length;
  if (length < 20) return { messageTooShort: true };
  if (length > 1000) return { messageTooLong: true };
  return null;
};

const CONTACT_DIALOG_COPY: Record<
  'de' | 'en',
  {
    eyebrow: string;
    title: string;
    body: string;
    closeLabel: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    emailRequired: string;
    emailInvalid: string;
    phoneInvalid: string;
    messageRequired: string;
    messageTooShort: string;
    messageTooLong: string;
    errorSummary: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    missingWebhook: string;
    poweredBy: string;
    messageHint: string;
  }
> = {
  de: {
    eyebrow: 'Kontakt',
    title: 'Prozess kurz schildern',
    body:
      'Schicken Sie mir die Eckdaten. Ich prüfe den Ablauf und melde mich mit einer klaren Einschätzung.',
    closeLabel: 'Kontaktformular schließen',
    name: 'Name',
    email: 'E-Mail',
    phone: 'Telefon',
    message: 'Nachricht',
    emailRequired: 'Bitte geben Sie Ihre E-Mail ein.',
    emailInvalid: 'Bitte geben Sie eine gültige E-Mail ein.',
    phoneInvalid: 'Bitte geben Sie eine gültige Telefonnummer ein.',
    messageRequired: 'Bitte beschreiben Sie kurz den Prozess.',
    messageTooShort: 'Mindestens 20 Zeichen erforderlich.',
    messageTooLong: 'Maximal 1000 Zeichen erlaubt.',
    errorSummary: 'Bitte korrigieren Sie die folgenden Fehler:',
    submit: 'Anfrage senden',
    sending: 'Wird gesendet ...',
    success: 'Danke. Ihre Anfrage wurde gesendet.',
    error: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
    missingWebhook:
      'Das Formular ist noch nicht konfiguriert. Hinterlegen Sie zuerst die Make-Webhook-URL.',
    poweredBy: 'Automation powered by Make',
    messageHint: 'Zeichen',
  },
  en: {
    eyebrow: 'Contact',
    title: 'Briefly describe the process',
    body:
      'Send me the key details. I will review the workflow and reply with a clear recommendation.',
    closeLabel: 'Close contact form',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    emailRequired: 'Please enter your email.',
    emailInvalid: 'Please enter a valid email address.',
    phoneInvalid: 'Please enter a valid phone number.',
    messageRequired: 'Please briefly describe the process.',
    messageTooShort: 'Minimum 20 characters required.',
    messageTooLong: 'Maximum 1000 characters allowed.',
    errorSummary: 'Please correct the following errors:',
    submit: 'Send request',
    sending: 'Sending ...',
    success: 'Thanks. Your request has been sent.',
    error: 'Sending failed. Please try again.',
    missingWebhook:
      'The form is not configured yet. Add your Make webhook URL first.',
    poweredBy: 'Automation powered by Make',
    messageHint: 'characters',
  },
};

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
  private readonly languageService = inject(LanguageService);
  private readonly snackbarService = inject(SnackbarService);
  private readonly rateLimiter = inject(ContactFormRateLimiterService);

  protected readonly contactDialog = inject(ContactDialogService);
  private readonly nameInput = viewChild<ElementRef<HTMLInputElement>>('nameInput');

  readonly copy = computed(() => CONTACT_DIALOG_COPY[this.languageService.language()]);
  readonly isSending = signal(false);
  readonly status = signal<ContactFormStatus>('idle');

  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
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

  readonly submitted = signal(false);

  readonly messageLength = computed(() => this.form.get('message')?.value?.length ?? 0);

  readonly errors = computed(() => {
    const errors: string[] = [];
    if (!this.submitted()) return errors;

    const nameCtrl = this.form.get('name');
    const emailCtrl = this.form.get('email');
    const phoneCtrl = this.form.get('phone');
    const messageCtrl = this.form.get('message');

    if (emailCtrl?.hasError('required') || (!emailCtrl?.value && this.submitted())) {
      errors.push(this.copy().emailRequired);
    } else if (emailCtrl?.hasError('invalidEmail')) {
      errors.push(this.copy().emailInvalid);
    }

    if (phoneCtrl?.hasError('invalidPhone')) {
      errors.push(this.copy().phoneInvalid);
    }

    if (!messageCtrl?.value && this.submitted()) {
      errors.push(this.copy().messageRequired);
    } else if (messageCtrl?.hasError('messageTooShort')) {
      errors.push(this.copy().messageTooShort);
    } else if (messageCtrl?.hasError('messageTooLong')) {
      errors.push(this.copy().messageTooLong);
    }

    return errors;
  });

  readonly canSubmit = computed(
    () =>
      this.form.get('email')?.valid &&
      this.form.get('phone')?.valid &&
      this.form.get('message')?.valid &&
      !this.isSending(),
  );

  constructor() {
    effect(() => {
      const isOpen = this.contactDialog.isOpen();

      this.document.body.style.overflow = isOpen ? 'hidden' : '';

      if (isOpen) {
        setTimeout(() => {
          this.nameInput()?.nativeElement.focus();
        }, 0);
      }
    });
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }

  close(): void {
    this.contactDialog.close();
    this.submitted.set(false);
    this.form.reset();
    this.status.set('idle');
  }

  async submit(): Promise<void> {
    this.submitted.set(true);

    if (!this.canSubmit()) {
      return;
    }

    // Check rate limit
    const rateLimitCheck = this.rateLimiter.canSubmit();
    if (!rateLimitCheck.allowed) {
      this.snackbarService.show('error', rateLimitCheck.reason || 'Rate limit exceeded.');
      return;
    }

    if (!MAKE_WEBHOOK_URL.trim()) {
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
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Make webhook returned ${response.status}`);
      }

      // Record successful submission for rate limiting
      this.rateLimiter.recordSubmission();

      this.snackbarService.show('success', this.copy().success);
      this.status.set('success');
      this.submitted.set(false);
      this.form.reset();

      // Close modal after brief delay to let snackbar appear
      setTimeout(() => {
        this.close();
      }, 300);
    } catch {
      this.snackbarService.show('error', this.copy().error);
      this.status.set('error');
    } finally {
      this.isSending.set(false);
    }
  }

  private clearFeedback(): void {
    this.status.set('idle');
  }
}
