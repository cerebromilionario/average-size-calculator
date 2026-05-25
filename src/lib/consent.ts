export type CookieConsentPreferences = {
  necessary: boolean;
  preferences?: boolean;
  analytics?: boolean;
  marketing?: boolean;
  acceptedAt?: string;
  version?: number;
};

export const CONSENT_STORAGE_KEY = 'average-size-cookie-consent-v1';

export function getCookieConsent(): CookieConsentPreferences | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsentPreferences;
  } catch {
    return null;
  }
}

export function hasMarketingConsent(): boolean {
  const consent = getCookieConsent();
  return consent?.marketing === true;
}
