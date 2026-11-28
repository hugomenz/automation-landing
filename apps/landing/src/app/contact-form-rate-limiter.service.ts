import { Injectable } from '@angular/core';

export type RateLimitReason = 'minute' | 'session';

@Injectable({ providedIn: 'root' })
export class ContactFormRateLimiterService {
  private readonly rateLimitKey = 'contact_form_timestamps';
  private readonly sessionLimitKey = 'contact_form_session_count';
  private readonly rateWindowMs = 60_000;
  private readonly maxPerMinute = 2;
  private readonly maxPerSession = 2;
  private memoryTimestamps: number[] = [];
  private memorySessionCount = 0;

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
    const count = this.getSessionCount() + 1;
    this.memoryTimestamps = timestamps;
    this.memorySessionCount = count;
    // Storage is optional UX state. A successful HTTP response must remain successful.
    try {
      sessionStorage.setItem(this.rateLimitKey, JSON.stringify(timestamps));
      sessionStorage.setItem(this.sessionLimitKey, String(count));
    } catch {
      // Keep the in-memory limit for this page when storage is unavailable.
    }
  }

  private getTimestamps(): number[] {
    try {
      const stored = sessionStorage.getItem(this.rateLimitKey);
      const parsed: unknown = stored ? JSON.parse(stored) : [];
      const timestamps = Array.isArray(parsed)
        ? parsed.filter((value): value is number => typeof value === 'number' && Number.isFinite(value))
        : [];
      return this.memoryTimestamps.length >= timestamps.length ? [...this.memoryTimestamps] : timestamps;
    } catch {
      return [...this.memoryTimestamps];
    }
  }

  private getSessionCount(): number {
    try {
      const stored = sessionStorage.getItem(this.sessionLimitKey);
      const count = stored ? Number(stored) : 0;
      return Math.max(this.memorySessionCount, Number.isInteger(count) && count >= 0 ? count : 0);
    } catch {
      return this.memorySessionCount;
    }
  }
}
