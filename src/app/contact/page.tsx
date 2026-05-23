import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page for editorial feedback, correction requests, and educational content suggestions.'
};

export default function Page() {
  return <article className="prose prose-slate max-w-none"><h1>Contact</h1><p>For editorial feedback or correction requests, email: contact@example.com.</p><p>Please do not send personal medical data by email. For medical concerns, seek guidance from a qualified healthcare professional.</p></article>;
}
