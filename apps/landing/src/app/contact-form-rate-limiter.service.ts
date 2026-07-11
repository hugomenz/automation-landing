import { Injectable } from '@angular/core';

export type RateLimitReason = 'minute' | 'session';

@Injectable({ providedIn: 'root' })
export class ContactFormRateLimiterService {
  private readonly rateLimitKey = 'contact_form_timestamps';
  private readonly sessionLimitKey = 'contact_form_session_count';
  private readonly rateWindowMs = 60_000;
  private readonly maxPerMinute = 2;
  private readonly maxPerSession = 2;

  canSubmit(): { allowed: boolean; reason?: RateLimitReason } {
    const now = Date.now();
    const recentTimestamps = this.getTimestamps().filter(
      (timestamp) => now - timestamp < this.rateWindowMs,
    );

    if (recentTimestamps.length >= this.maxPerMinute) {
      return { allowed: false, reason: 'minute' };
    }

    if (this.getSessionCount() >= this.maxPerSession) {
      return { allowed: false, reason: 'session' };
    }

    return { allowed: true };
  }

  recordSubmission(): void {
    const timestamps = this.getTimestamps();
    timestamps.push(Date.now());
    sessionStorage.setItem(this.rateLimitKey, JSON.stringify(timestamps));
    sessionStorage.setItem(this.sessionLimitKey, String(this.getSessionCount() + 1));
  }

  private getTimestamps(): number[] {
    try {
      const stored = sessionStorage.getItem(this.rateLimitKey);
      return stored ? (JSON.parse(stored) as number[]) : [];
    } catch {
      return [];
    }
  }

  private getSessionCount(): number {
    try {
      const stored = sessionStorage.getItem(this.sessionLimitKey);
      return stored ? Number.parseInt(stored, 10) : 0;
    } catch {
      return 0;
    }
  }
}
