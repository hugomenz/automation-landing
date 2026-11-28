import '@angular/compiler';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ContactFormRateLimiterService } from './contact-form-rate-limiter.service';

afterEach(() => vi.unstubAllGlobals());
describe('contact submission bookkeeping', () => {
  it('does not turn an accepted submission into an error when storage is denied', () => {
    vi.stubGlobal('sessionStorage', { getItem() { throw new Error('Denied'); }, setItem() { throw new Error('Denied'); } });
    const limiter = new ContactFormRateLimiterService();
    expect(limiter.canSubmit().allowed).toBe(true);
    expect(() => limiter.recordSubmission()).not.toThrow();
    limiter.recordSubmission();
    expect(limiter.canSubmit().allowed).toBe(false);
  });
  it('ignores corrupt stored data without breaking submission', () => {
    vi.stubGlobal('sessionStorage', { getItem(key: string) { return key.includes('timestamps') ? '{"bad":true}' : 'NaN'; }, setItem() {} });
    const limiter = new ContactFormRateLimiterService();
    expect(limiter.canSubmit().allowed).toBe(true);
    limiter.recordSubmission();
    limiter.recordSubmission();
    expect(limiter.canSubmit().allowed).toBe(false);
  });
  it('persists normal bookkeeping across service instances', () => {
    const state = new Map<string,string>();
    vi.stubGlobal('sessionStorage', { getItem(key:string) { return state.get(key) ?? null; }, setItem(key:string,value:string) { state.set(key,value); } });
    const first = new ContactFormRateLimiterService();
    first.recordSubmission();first.recordSubmission();
    expect(new ContactFormRateLimiterService().canSubmit().allowed).toBe(false);
  });
});
