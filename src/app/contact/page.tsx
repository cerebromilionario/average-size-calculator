import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact' };

export default function Page() {
  return <article className="prose prose-slate max-w-none"><h1>Contact</h1><p>For editorial questions, email: contact@example.com</p></article>;
}
