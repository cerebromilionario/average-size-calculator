import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const contactUrl = `${siteConfig.siteUrl}/contact`;

export const metadata: Metadata = {
  title: 'Contact | Average Size Calculator',
  description:
    'Contact Average Size Calculator with questions, feedback, corrections, or privacy requests related to this private educational size comparison tool.'
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Average Size Calculator',
  description:
    'Contact page for Average Size Calculator where users can send questions, feedback, corrections, privacy requests, and technical issue reports.',
  url: contactUrl,
  publisher: {
    '@type': 'Organization',
    name: 'Average Size Calculator'
  }
};

export default function Page() {
  return (
    <article className="mx-auto w-full max-w-4xl py-8 sm:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="mb-8 sm:mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Contact Average Size Calculator</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
          Have a question, correction, privacy request, or feedback about the calculator? Use the form below to contact
          us.
        </p>
        <p className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
          Please do not use this form for urgent medical concerns. This site is educational and is not a medical
          service.
        </p>
      </header>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">Send a message</h2>
        <form
          name="contact"
          method="POST"
          action="/thank-you"
          className="mt-5 space-y-5"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden" aria-hidden="true">
            <label>
              Do not fill this out if you are human:
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-md border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-md border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-800">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full rounded-md border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={20}
              rows={6}
              className="w-full rounded-md border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            Send message
          </button>
        </form>

        <p className="mt-5 text-sm leading-6 text-slate-600">
          Do not include sensitive medical information in this form. Messages are processed via Netlify Forms.
          For details, read our{' '}
          <Link href="/privacy-policy" className="font-medium text-slate-800 underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">What you can contact us about</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Feedback about the calculator</li>
          <li>Data corrections or source suggestions</li>
          <li>Privacy questions</li>
          <li>Technical issues</li>
          <li>General questions about the educational content</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-slate-900">Medical questions</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Average Size Calculator cannot provide medical advice, diagnosis, or treatment. If you have concerns about
          pain, development, sexual function, or health, consider speaking with a qualified healthcare professional.
        </p>
      </section>

      <section className="mt-8 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600">
        <p>
          You can also return to the <Link href="/" className="underline">home page</Link> or continue to the{' '}
          <Link href="/penis-size-calculator" className="underline">calculator</Link>.
        </p>
      </section>
    </article>
  );
}
