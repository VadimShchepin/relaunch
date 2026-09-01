'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CONSENT_CHANGE_EVENT, readConsent } from '@/lib/consent';

const PIXEL_ID = 'LTJhkopUbUNsMFWeigf1if';
const SDK_SRC = 'https://bzrcdn.openai.com/sdk/oaiq.min.js';

/**
 * Creates the command queue if it does not exist yet.
 *
 * Commands pushed here are replayed by the SDK when it finishes loading, so this
 * component never has to wait for the CDN before calling init or measure.
 */
function queue(): OaiqQueue {
  if (!window.oaiq) {
    const buffered: IArguments[] = [];
    const stub = function () {
      // Buffers the raw arguments object, matching what the SDK expects to replay.
      buffered.push(arguments);
    } as unknown as OaiqQueue;
    stub.q = buffered;
    window.oaiq = stub;
  }
  return window.oaiq;
}

/** Verbose SDK logging locally, and on production only via ?oaiq_debug in the URL. */
function debugEnabled(): boolean {
  if (process.env.NODE_ENV !== 'production') return true;
  return new URLSearchParams(window.location.search).has('oaiq_debug');
}

/**
 * OpenAI ads pixel (ChatGPT Ads), gated on the cookie banner.
 *
 * The SDK's own default is permissive: its internal consent state starts as null
 * and it only stops sending when told `consent, false`. So the gate here is that
 * the script tag is not rendered at all until the visitor has accepted, which
 * means no request reaches OpenAI and no identifiers are written beforehand.
 */
export function OpenAIPixel() {
  const pathname = usePathname();
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const sync = () => setGranted(readConsent() === 'granted');
    sync();
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    // Keeps other tabs of the same site in step.
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  useEffect(() => {
    if (!granted) {
      // Only has an effect if the visitor withdrew consent after the SDK loaded.
      window.oaiq?.('consent', false);
      return;
    }
    const oaiq = queue();
    oaiq('consent', true);
    oaiq('init', { pixelId: PIXEL_ID, debug: debugEnabled() });
  }, [granted]);

  // The configured conversion is the page visit, so this fires on the landing
  // page and again on every client-side route change.
  useEffect(() => {
    if (!granted) return;
    queue()('measure', 'page_viewed', { type: 'contents' });
  }, [granted, pathname]);

  if (!granted) return null;

  return <Script id="oaiq-sdk" src={SDK_SRC} strategy="afterInteractive" />;
}
