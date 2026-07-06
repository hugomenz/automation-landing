import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarService } from '../../snackbar.service';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-snackbar-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="snackbar-container">
      @for (msg of snackbarService.messages(); track msg.id) {
        <div [class]="'snackbar snackbar-' + msg.type" role="status" aria-live="polite">
          <div class="snackbar-content">
            @if (msg.type === 'success') {
              <span class="snackbar-icon">✓</span>
            } @else if (msg.type === 'error') {
              <span class="snackbar-icon error">✕</span>
            }
            <span class="snackbar-message">{{ msg.message }}</span>
          </div>
        </div>
      }
    </div>
  `,
  styles: `
    .snackbar-container {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      pointer-events: none;
    }

    .snackbar {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-size: 0.95rem;
      line-height: 1.4;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      pointer-events: auto;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .snackbar-success {
      background: #238636;
      color: #e6f6ef;
    }

    .snackbar-error {
      background: #8b2c2c;
      color: #ffc2c2;
    }

    .snackbar-content {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .snackbar-icon {
      font-weight: bold;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .snackbar-icon.error {
      color: #ff8787;
    }

    .snackbar-message {
      flex: 1;
    }

    @media (max-width: 640px) {
      .snackbar-container {
        bottom: 1rem;
        right: 1rem;
        left: 1rem;
      }

      .snackbar {
        width: 100%;
      }
    }
  `,
})
export class SnackbarContainerComponent {
  readonly snackbarService = inject(SnackbarService);
}
