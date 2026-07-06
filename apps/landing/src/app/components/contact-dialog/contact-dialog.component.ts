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
    messageRequired: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    missingWebhook: string;
    poweredBy: string;
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
    messageRequired: 'Bitte beschreiben Sie kurz den Prozess.',
    submit: 'Anfrage senden',
    sending: 'Wird gesendet ...',
    success: 'Danke. Ihre Anfrage wurde gesendet.',
    error: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
    missingWebhook:
      'Das Formular ist noch nicht konfiguriert. Hinterlegen Sie zuerst die Make-Webhook-URL.',
    poweredBy: 'Automation powered by Make',
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
    messageRequired: 'Please briefly describe the process.',
    submit: 'Send request',
    sending: 'Sending ...',
    success: 'Thanks. Your request has been sent.',
    error: 'Sending failed. Please try again.',
    missingWebhook:
      'The form is not configured yet. Add your Make webhook URL first.',
    poweredBy: 'Automation powered by Make',
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

  protected readonly contactDialog = inject(ContactDialogService);
  private readonly nameInput = viewChild<ElementRef<HTMLInputElement>>('nameInput');

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
  readonly emailError = computed(
    () => this.submitted() && !this.form().email.trim(),
  );
  readonly messageError = computed(
    () => this.submitted() && !this.form().message.trim(),
  );
  readonly canSubmit = computed(
    () => !!this.form().email.trim() && !!this.form().message.trim() && !this.isSending(),
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