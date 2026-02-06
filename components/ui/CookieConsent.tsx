'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'cookie-consent';
const GA_ID = 'AW-17934090542';

function loadGtag() {
  // Avoid loading twice
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.gtag('consent', 'default', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  });
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'granted') {
      loadGtag();
    } else if (stored !== 'denied') {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'granted');
    loadGtag();
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, 'denied');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-6">
      <div className="mx-auto max-w-xl bg-white rounded-xl shadow-lg border border-black/5 p-5 sm:p-6">
        <p className="text-sm text-gray-700 mb-4">
          Wir verwenden Cookies für Google Ads Conversion-Tracking, um die Wirksamkeit
          unserer Anzeigen zu messen. Diese Cookies werden erst nach Ihrer Zustimmung gesetzt.
          Weitere Informationen finden Sie in unserer{' '}
          <Link href="/datenschutz" className="underline hover:text-black">
            Datenschutzerklärung
          </Link>.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            className="flex-1 px-5 py-2.5 rounded-full bg-brand-accent text-white text-sm font-medium transition-colors hover:bg-brand-accent/90"
          >
            Akzeptieren
          </button>
          <button
            onClick={reject}
            className="flex-1 px-5 py-2.5 rounded-full bg-gray-100 text-brand-text text-sm font-medium transition-colors hover:bg-gray-200"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
}
