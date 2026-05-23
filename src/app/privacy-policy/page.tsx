import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function Page() {
  return <article className="prose prose-slate max-w-none"><h1>Privacy Policy</h1><p>This MVP does not use accounts, backend storage, analytics, or databases.</p><p>Measurements are processed locally in your browser and are not stored by this site.</p></article>;
}
