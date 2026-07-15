import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ContactDialogService } from '../../contact-dialog.service';
import { ContentLink } from '../../content/page.types';

@Component({
  selector: 'app-content-link',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './content-link.component.html',
  styleUrl: './content-link.component.css',
})
export class ContentLinkComponent {
  private readonly contactDialog = inject(ContactDialogService);

  readonly link = input.required<ContentLink>();
  readonly variant = input<'primary' | 'secondary' | 'text'>('text');
  readonly className = computed(() =>
    this.variant() === 'text' ? 'content-link' : `btn btn-${this.variant()}`,
  );
  readonly opensDialog = computed(() => this.link().href === '#contact-form');

  openContactForm(): void {
    this.contactDialog.open(this.link().contactContext ?? 'rfq');
  }
}
