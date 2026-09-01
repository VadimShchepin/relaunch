'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { type ConsentDecision, readConsent, writeConsent } from '@/lib/consent';

function updateGTMConsent(granted: boolean) {
  // Update GTM consent mode
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied',
      analytics_storage: granted ? 'granted' : 'denied',
    });
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored === null) {
      setVisible(true);
    } else {
      updateGTMConsent(stored === 'granted');
    }
  }, []);

  // writeConsent also emits the consent event that OpenAIPixel listens for.
  function decide(decision: ConsentDecision) {
    writeConsent(decision);
    updateGTMConsent(decision === 'granted');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-6">
      <div className="mx-auto max-w-xl bg-white rounded-xl shadow-lg border border-black/5 p-5 sm:p-6">
        <p className="text-sm text-gray-700 mb-4">
          Wir verwenden Cookies für das Conversion-Tracking von Google Ads und OpenAI
          (Anzeigen in ChatGPT), um die Wirksamkeit unserer Anzeigen zu messen. Diese Cookies
          werden erst nach Ihrer Zustimmung gesetzt. Weitere Informationen finden Sie in unserer{' '}
          <Link href="/datenschutz" className="underline hover:text-black">
            Datenschutzerklärung
          </Link>.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => decide('granted')}
            className="flex-1 px-5 py-2.5 rounded-full bg-brand-accent text-white text-sm font-medium transition-colors hover:bg-brand-accent/90"
          >
            Akzeptieren
          </button>
          <button
            onClick={() => decide('denied')}
            className="flex-1 px-5 py-2.5 rounded-full bg-gray-100 text-brand-text text-sm font-medium transition-colors hover:bg-gray-200"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
}
