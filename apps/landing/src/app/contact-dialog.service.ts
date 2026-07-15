import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactDialogService {
  private readonly document = inject(DOCUMENT);
  private previouslyFocusedElement: HTMLElement | null = null;

  readonly isOpen = signal(false);

  open(restoreFocusTo: HTMLElement | null = null): void {
    if (!this.isOpen()) {
      const activeElement = this.document.activeElement;
      this.previouslyFocusedElement =
        restoreFocusTo ??
        (activeElement && 'focus' in activeElement ? (activeElement as HTMLElement) : null);
    }

    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);

    const elementToRestore = this.previouslyFocusedElement;
    this.previouslyFocusedElement = null;

    setTimeout(() => {
      if (!this.isOpen() && elementToRestore?.isConnected) {
        elementToRestore.focus();
      }
    }, 0);
  }
}
