/**
 * Single source of truth for the cookie banner decision.
 *
 * The decision lives in localStorage so it survives reloads, and every change is
 * announced on `window` so tracking components mounted elsewhere in the tree can
 * react without polling.
 */

export const CONSENT_STORAGE_KEY = 'cookie-consent';
export const CONSENT_CHANGE_EVENT = 'aiseo:consent-change';

export type ConsentDecision = 'granted' | 'denied';

/** Returns the stored decision, or null if the visitor has not answered the banner yet. */
export function readConsent(): ConsentDecision | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === 'granted' || stored === 'denied' ? stored : null;
  } catch {
    // Hardened browsers and Safari private mode can throw on storage access.
    return null;
  }
}

/** Persists the decision and notifies listeners in this tab. */
export function writeConsent(decision: ConsentDecision): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, decision);
  } catch {
    // Storage is unavailable, but the event below still propagates the decision
    // for the rest of this page session.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: decision }));
}
