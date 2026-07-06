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
import { MAKE_WEBHOOK_URL } from '../../contact-form.config';
import { LandingContent } from '../../content';
import { ContactDialogService } from '../../contact-dialog.service';
import { ContactFormRateLimiterService } from '../../contact-form-rate-limiter.service';
import { LanguageService } from '../../language.service';
import { SnackbarService } from '../../snackbar.service';

type ContactFormValue = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormStatus = 'idle' | 'success' | 'error';

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

  private readonly EMAIL_REGEX =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private readonly PHONE_REGEX = /^[+\d\s\-().]{7,}$/;
  private readonly MESSAGE_MIN_LENGTH = 20;
  private readonly MESSAGE_MAX_LENGTH = 1000;

  readonly copy = computed(() => CONTACT_DIALOG_COPY[this.languageService.language()]);
  readonly form = signal<ContactFormValue>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  readonly submitted = signal(false);
  readonly isSending = signal(false);
  readonly status = signal<ContactFormStatus>('idle');
  readonly feedback = signal('');

  readonly messageLength = computed(() => this.form().message.length);

  readonly emailError = computed(() => {
    if (!this.submitted()) return false;
    const email = this.form().email.trim();
    if (!email) return true;
    return !this.EMAIL_REGEX.test(email);
  });

  readonly phoneError = computed(() => {
    if (!this.submitted()) return false;
    const phone = this.form().phone.trim();
    if (!phone) return false; // Phone is optional
    return !this.PHONE_REGEX.test(phone);
  });

  readonly messageError = computed(() => {
    if (!this.submitted()) return false;
    const message = this.form().message.trim();
    if (!message) return true;
    return (
      message.length < this.MESSAGE_MIN_LENGTH ||
      message.length > this.MESSAGE_MAX_LENGTH
    );
  });

  readonly canSubmit = computed(() => {
    const email = this.form().email.trim();
    const message = this.form().message.trim();
    const phone = this.form().phone.trim();

    const emailValid = email && this.EMAIL_REGEX.test(email);
    const phoneValid = !phone || this.PHONE_REGEX.test(phone);
    const messageValid =
      message &&
      message.length >= this.MESSAGE_MIN_LENGTH &&
      message.length <= this.MESSAGE_MAX_LENGTH;

    return emailValid && phoneValid && messageValid && !this.isSending();
  });

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
    this.clearFeedback();
  }

  updateField(field: keyof ContactFormValue, value: string): void {
    this.form.update((current) => ({
      ...current,
      [field]: value,
    }));
    this.clearFeedback();
  }

  async submit(): Promise<void> {
    this.submitted.set(true);
    this.clearFeedback();

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

    const payload = {
      name: this.form().name.trim(),
      email: this.form().email.trim(),
      phone: this.form().phone.trim(),
      message: this.form().message.trim(),
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
      this.submitted.set(false);
      this.form.set({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Close modal after brief delay to let snackbar appear
      setTimeout(() => {
        this.close();
      }, 300);
    } catch {
      this.snackbarService.show('error', this.copy().error);
    } finally {
      this.isSending.set(false);
    }
  }

  private clearFeedback(): void {
    this.status.set('idle');
    this.feedback.set('');
  }
}