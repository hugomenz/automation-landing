import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

export type SnackbarType = 'success' | 'error';

export interface SnackbarMessage {
  type: SnackbarType;
  message: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  readonly messages = signal<SnackbarMessage[]>([]);

  show(type: SnackbarType, message: string, duration = 5000) {
    const id = Math.random().toString(36).substr(2, 9);
    const snackbar: SnackbarMessage = { type, message, id };

    this.messages.update((msgs) => [...msgs, snackbar]);

    setTimeout(() => {
      this.hide(id);
    }, duration);

    return id;
  }

  hide(id: string) {
    this.messages.update((msgs) => msgs.filter((m) => m.id !== id));
  }
}
