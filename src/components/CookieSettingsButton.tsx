'use client';

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
      className="text-left text-slate-700 hover:text-slate-900 hover:underline"
    >
      Cookie settings
    </button>
  );
}
