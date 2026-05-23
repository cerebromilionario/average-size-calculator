import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy details for the MVP calculator, including local-only processing and no account or measurement storage.'
};

export default function Page() {
  return <article className="prose prose-slate max-w-none"><h1>Privacy Policy</h1><p>This MVP does not use user accounts, backend measurement storage, or personal profile collection.</p><p>Measurements entered in the calculator are processed locally in your browser and are not sent to a database by default.</p><p>If analytics are ever introduced, this policy should be updated before deployment.</p></article>;
}
