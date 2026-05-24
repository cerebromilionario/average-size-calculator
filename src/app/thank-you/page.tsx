import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You | Average Size Calculator',
  description: 'Thank you for contacting Average Size Calculator. Your message has been sent.',
  robots: {
    index: false,
    follow: false
  }
};

export default function Page() {
  return (
    <article className="mx-auto w-full max-w-3xl py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Thank you</h1>
      <p className="mt-4 text-base leading-7 text-slate-700">
        Your message has been sent. We will review it as soon as possible.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
        >
          Back to home
        </Link>
        <Link
          href="/penis-size-calculator"
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Use the calculator
        </Link>
      </div>
    </article>
  );
}
