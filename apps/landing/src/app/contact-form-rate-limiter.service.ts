import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactFormRateLimiterService {
  private readonly RATE_LIMIT_KEY = 'contact_form_timestamps';
  private readonly SESSION_LIMIT_KEY = 'contact_form_session_count';
  private readonly RATE_WINDOW_MS = 60000; // 1 minuto
  private readonly MAX_PER_MINUTE = 2;
  private readonly MAX_PER_SESSION = 2;

  canSubmit(): { allowed: boolean; reason?: string } {
    const now = Date.now();

    // Get submission timestamps from session storage
    const timestamps = this.getTimestamps();
    const sessionCount = this.getSessionCount();

    // Clean old timestamps outside the rate window
    const recentTimestamps = timestamps.filter((ts) => now - ts < this.RATE_WINDOW_MS);

    // Check per-minute rate limit
    if (recentTimestamps.length >= this.MAX_PER_MINUTE) {
      return {
        allowed: false,
        reason: `Solo puedes enviar ${this.MAX_PER_MINUTE} mensajes por minuto. Intenta de nuevo en un momento.`,
      };
    }

    // Check per-session limit
    if (sessionCount >= this.MAX_PER_SESSION) {
      return {
        allowed: false,
        reason: `Has alcanzado el máximo de ${this.MAX_PER_SESSION} mensajes por sesión.`,
      };
    }

    return { allowed: true };
  }

  recordSubmission(): void {
    const now = Date.now();

    // Record timestamp
    const timestamps = this.getTimestamps();
    timestamps.push(now);
    sessionStorage.setItem(this.RATE_LIMIT_KEY, JSON.stringify(timestamps));

    // Increment session count
    const sessionCount = this.getSessionCount();
    sessionStorage.setItem(this.SESSION_LIMIT_KEY, String(sessionCount + 1));
  }

  private getTimestamps(): number[] {
    try {
      const stored = sessionStorage.getItem(this.RATE_LIMIT_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  private getSessionCount(): number {
    try {
      const stored = sessionStorage.getItem(this.SESSION_LIMIT_KEY);
      return stored ? parseInt(stored, 10) : 0;
    } catch {
      return 0;
    }
  }
}
