'use client';

import { readConsent } from '@/lib/consent';

const initializedPixelIds = new Set<string>();

/**
 * Returns the single OpenAI Ads command queue used by the root Pixel and event
 * call sites. Commands are buffered until the SDK has loaded.
 */
export function openAIAdsQueue(): OaiqQueue {
  if (!window.oaiq) {
    const buffered: IArguments[] = [];
    const stub = function () {
      buffered.push(arguments);
    } as unknown as OaiqQueue;
    stub.q = buffered;
    window.oaiq = stub;
  }

  return window.oaiq;
}

/** Prevents duplicate app-wide initialization if the root component remounts. */
export function initializeOpenAIAdsPixel(pixelId: string, debug: boolean): void {
  if (initializedPixelIds.has(pixelId)) return;

  openAIAdsQueue()('init', { pixelId, debug });
  initializedPixelIds.add(pixelId);
}

async function sha256(value: string): Promise<string> {
  const digest = await globalThis.crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(value),
  );

  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('');
}

/**
 * Records a lead only after the application's server has accepted it.
 * Measurement is best-effort and can never fail the underlying form flow.
 */
export async function trackOpenAILead(email: string): Promise<void> {
  try {
    if (readConsent() !== 'granted') return;

    const oaiq = openAIAdsQueue();
    const normalizedEmail = email.trim().toLowerCase();

    if (normalizedEmail) {
      try {
        const emailSha256 = await sha256(normalizedEmail);

        // Consent may have changed while the digest was being calculated.
        if (readConsent() !== 'granted') return;
        oaiq('init', { user: { email_sha256: emailSha256 } });
      } catch {
        // Matching data is optional; still record the anonymous conversion.
      }
    }

    if (readConsent() !== 'granted') return;
    oaiq('measure', 'lead_created', { type: 'customer_action' });
  } catch {
    // Ads measurement must not interrupt contact or booking completion.
  }
}
