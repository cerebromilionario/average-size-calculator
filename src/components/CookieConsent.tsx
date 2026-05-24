'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'average-size-cookie-consent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent !== 'accepted') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 shadow-lg backdrop-blur"
      role="region"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-slate-700">
          We use essential cookies and similar technologies to improve site functionality and understand basic usage.
          We do not store calculator measurements.{' '}
          <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-slate-900">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <Link
            href="/privacy-policy"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Learn more
          </Link>
          <button
            type="button"
            onClick={handleAccept}
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
