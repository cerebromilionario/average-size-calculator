import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import StrategicAd from '@/components/ads/StrategicAd';

export const metadata: Metadata = {
  title: 'Average Size Calculator | Private Body Size Comparison Tool',
  description:
    'Use Average Size Calculator to privately compare your measurement with global and country averages. Educational, anonymous, and based on published size data.'
};

const faqItems = [
  {
    question: 'Is Average Size Calculator private?',
    answer:
      'Yes. The experience is designed as a private calculator so you can review results discreetly on your own device.'
  },
  {
    question: 'Does this tool store my measurement?',
    answer:
      'No. Your measurement is calculated in your browser and is not stored by default in an account database.'
  },
  {
    question: 'What does average size mean?',
    answer:
      'Average size is a statistical reference from published samples. It helps you understand where a value sits relative to a global average or country average.'
  },
  {
    question: 'Is this medical advice?',
    answer:
      'No. This site is for educational purposes only and does not provide diagnosis, treatment, or medical advice.'
  }
];

export default function HomePage() {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: 'A private educational size comparison tool.'
  };

  return (
    <div className="space-y-12 pb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      <section className="card space-y-5">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Average Size Calculator</h1>
        <p className="max-w-3xl text-lg text-slate-700">
          A private, educational tool to compare your measurement with global and country averages.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/penis-size-calculator"
            className="inline-flex items-center rounded-lg bg-brand-500 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            Use the Penis Size Calculator
          </Link>
          <Link
            href="/average-penis-size"
            className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-800 hover:bg-slate-100"
          >
            Learn About Average Penis Size
          </Link>
        </div>
        <p className="text-sm text-slate-600">Your measurement is calculated in your browser and is not stored.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Understanding average size in a clear and respectful way</h2>
        <p className="text-slate-700">
          Many people search for an average size calculator because they want a calm, factual answer to a personal question:
          are they below average, average, or above average? That question is common, and it can be difficult to evaluate
          without a trustworthy reference point. This website was created to offer that reference with a private calculator,
          plain language, and a neutral educational tone.
        </p>
        <p className="text-slate-700">
          The penis size calculator compares your entry against both global average and country average values, so you can
          compare your size with context instead of guessing. Rather than relying on forums or unverified claims, the tool
          provides a structured size comparison tool that uses published data and consistent units. You can enter values in
          centimeters or inches, choose a country, and immediately see how your value aligns with average ranges.
        </p>
        <p className="text-slate-700">
          Privacy matters when using any body-related calculator. Average Size Calculator is designed so people can review
          personal results discreetly, without creating an account and without unnecessary data sharing. The site also keeps
          the experience focused on educational purposes. Natural variation is common across individuals and populations,
          which means a single number should always be interpreted as a reference point, not as a personal judgment.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="card">
            <h3 className="text-lg font-semibold">Enter your measurement</h3>
            <p className="mt-2 text-sm text-slate-700">
              Input your measured value carefully. A consistent method improves the usefulness of any comparison.
            </p>
          </article>
          <article className="card">
            <h3 className="text-lg font-semibold">Choose your unit and country</h3>
            <p className="mt-2 text-sm text-slate-700">
              Select centimeters or inches and choose a location to compare against local country average data.
            </p>
          </article>
          <article className="card">
            <h3 className="text-lg font-semibold">Compare with average data</h3>
            <p className="mt-2 text-sm text-slate-700">
              Review your result against global average references and country benchmarks in one view.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why use this tool</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Private calculation for discreet use',
            'No account needed to access results',
            'Supports both cm and inches',
            'Includes country comparison and global references',
            'Educational explanation of result categories',
            'Mobile-friendly layout for quick checks on any device'
          ].map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700">
              {item}
            </div>
          ))}
        </div>
        <p className="text-slate-700">
          A good size comparison tool should reduce confusion, not increase it. This site keeps the process simple, private,
          and transparent so users can compare your size using practical benchmarks and clear wording.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Scientific and educational context</h2>
        <p className="text-slate-700">
          Average values can change between studies because methodology is different. Research may use different sampling
          sizes, age ranges, country groups, and measurement techniques. Some studies rely on self-reported values, while
          others use standardized clinical methods. These differences can shift the calculated global average and individual
          country averages.
        </p>
        <p className="text-slate-700">
          The tool uses published average size data and clearly explains that results are estimates for educational purposes.
          It is intended to help users understand statistical context, not to provide diagnosis or define personal health.
          If you have medical concerns, a qualified healthcare professional is the right source of guidance.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Explore related pages</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link className="card hover:bg-slate-100" href="/penis-size-calculator">
            Penis Size Calculator
          </Link>
          <Link className="card hover:bg-slate-100" href="/average-penis-size">
            Average Penis Size
          </Link>
          <Link className="card hover:bg-slate-100" href="/average-penis-size-by-country">
            Average Penis Size by Country
          </Link>
          <Link className="card hover:bg-slate-100" href="/how-to-measure">
            How to Measure Correctly
          </Link>
          <Link className="card hover:bg-slate-100" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="card hover:bg-slate-100" href="/contact">
            Contact
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>

      <StrategicAd type="native" />
        <div className="space-y-3">
          {faqItems.map((item) => (
            <article key={item.question} className="card">
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <p className="mt-2 text-slate-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
