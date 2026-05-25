'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { CONSENT_STORAGE_KEY } from '@/lib/consent';

type ConsentPreferences = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  acceptedAt: string;
  version: 1;
};

type OptionalPreferences = Pick<ConsentPreferences, 'preferences' | 'analytics' | 'marketing'>;

const defaultOptionalPreferences: OptionalPreferences = {
  preferences: false,
  analytics: false,
  marketing: false
};

export default function CookieConsent() {
  const [isReady, setIsReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [optionalPreferences, setOptionalPreferences] = useState<OptionalPreferences>(defaultOptionalPreferences);

  const saveConsent = (prefs: OptionalPreferences) => {
    const consent: ConsentPreferences = {
      necessary: true,
      preferences: prefs.preferences,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      acceptedAt: new Date().toISOString(),
      version: 1
    };

    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    setOptionalPreferences(prefs);
    setShowBanner(false);
    setShowModal(false);
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  const handleAcceptAll = () => {
    saveConsent({ preferences: true, analytics: true, marketing: true });
  };

  const handleRejectOptional = () => {
    saveConsent(defaultOptionalPreferences);
  };

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);

    if (!storedConsent) {
      setShowBanner(true);
      setIsReady(true);
      return;
    }

    try {
      const parsed = JSON.parse(storedConsent) as Partial<ConsentPreferences>;
      const parsedPrefs: OptionalPreferences = {
        preferences: Boolean(parsed.preferences),
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing)
      };

      setOptionalPreferences(parsedPrefs);
      setShowBanner(false);
    } catch {
      setShowBanner(true);
      setOptionalPreferences(defaultOptionalPreferences);
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    const openSettings = () => {
      const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (storedConsent) {
        try {
          const parsed = JSON.parse(storedConsent) as Partial<ConsentPreferences>;
          setOptionalPreferences({
            preferences: Boolean(parsed.preferences),
            analytics: Boolean(parsed.analytics),
            marketing: Boolean(parsed.marketing)
          });
        } catch {
          setOptionalPreferences(defaultOptionalPreferences);
        }
      }
      setShowModal(true);
    };

    window.addEventListener('open-cookie-settings', openSettings);
    return () => window.removeEventListener('open-cookie-settings', openSettings);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <>
      {showBanner && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 shadow-lg backdrop-blur"
          role="region"
          aria-label="Cookie preferences"
          aria-live="polite"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
            <h2 className="text-base font-semibold text-slate-900">Cookie preferences</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              We use necessary cookies and local storage to keep this site working and remember your choices. Optional
              categories can be managed at any time. We do not store calculator measurements.{' '}
              <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-slate-900">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleRejectOptional}
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center rounded-md border border-slate-900 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-900/50 p-4 sm:items-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-xl bg-white p-5 shadow-xl sm:rounded-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="cookie-settings-title" className="text-xl font-semibold text-slate-900">
                  Cookie settings
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Choose which optional categories you want to allow. Necessary cookies are always active because they
                  are required for the site to work.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close cookie settings"
                onClick={() => setShowModal(false)}
                className="rounded-md border border-slate-300 px-2 py-1 text-slate-700 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-lg border border-slate-200 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-slate-900">Necessary cookies</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Required for basic site functionality, security, and remembering your cookie choices.
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-900 px-2 py-1 text-xs font-semibold text-white">Always active</span>
                </div>
              </div>

              {[
                {
                  key: 'preferences',
                  label: 'Preferences',
                  description:
                    'Helps remember basic display or usability preferences. Calculator measurements are not stored.'
                },
                {
                  key: 'analytics',
                  label: 'Analytics',
                  description:
                    'Helps understand basic site usage if analytics tools are added in the future. Currently, no third-party analytics are used.'
                },
                {
                  key: 'marketing',
                  label: 'Marketing',
                  description:
                    'Used to load third-party advertising scripts, such as Adsterra, when you choose to allow marketing cookies. Calculator measurements are not stored in advertising cookies by this site.'
                }
              ].map((item) => (
                <div key={item.key} className="rounded-lg border border-slate-200 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <label htmlFor={`cookie-${item.key}`} className="font-medium text-slate-900">
                        {item.label}
                      </label>
                      <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                    </div>
                    <input
                      id={`cookie-${item.key}`}
                      type="checkbox"
                      checked={optionalPreferences[item.key as keyof OptionalPreferences]}
                      onChange={(event) =>
                        setOptionalPreferences((current) => ({
                          ...current,
                          [item.key]: event.target.checked
                        }))
                      }
                      className="h-5 w-5 cursor-pointer accent-slate-900"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => saveConsent(optionalPreferences)}
                className="inline-flex items-center justify-center rounded-md border border-slate-900 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Save choices
              </button>
              <button
                type="button"
                onClick={handleRejectOptional}
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
