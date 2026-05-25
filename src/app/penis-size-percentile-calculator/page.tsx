import type { Metadata } from 'next';
import Link from 'next/link';
import PenisSizeCalculator from '@/components/PenisSizeCalculator';
import EducationalDisclaimer from '@/components/EducationalDisclaimer';
import { siteConfig } from '@/lib/site';

const pageUrl = `${siteConfig.siteUrl}/penis-size-percentile-calculator`;

export const metadata: Metadata = {
  title: 'Penis Size Percentile Calculator | Length and Girth Comparison',
  description:
    'Use this private penis size percentile calculator to compare length or girth with global average data. Learn what percentile, z-score, and average size mean.'
};

const faqItems = [
  {
    q: 'What is a penis size percentile?',
    a: 'A percentile is a statistical estimate showing how a measurement compares with a reference distribution. A higher percentile means the value is above a larger share of the reference group.'
  },
  {
    q: 'Is the 50th percentile average?',
    a: 'Yes. The 50th percentile is around the middle of the reference distribution and is commonly interpreted as near average.'
  },
  {
    q: 'How accurate is this percentile calculator?',
    a: 'It is an educational estimate based on global average values and standard deviation assumptions. It is not a clinical measurement or diagnosis.'
  },
  {
    q: 'Does percentile use length or girth?',
    a: 'This calculator supports erect length, erect girth, and flaccid length modes. The percentile estimate is computed from the selected measurement type.'
  },
  {
    q: 'Is country data used for percentiles?',
    a: 'The percentile estimate is based on global reference distribution assumptions. Country values are presented as optional comparison context for selected measurement types.'
  },
  {
    q: 'Is this medical advice?',
    a: 'No. This page is for education only and does not replace care from a qualified healthcare professional.'
  }
];

export default function PercentileCalculatorPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };

  const webAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Penis Size Percentile Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'All',
    description:
      'Educational tool to estimate percentile and z-score from selected length or girth measurements using global reference averages.',
    url: pageUrl
  };

  return (
    <article className="space-y-10">
      <section className="rounded-2xl bg-gradient-to-b from-brand-50 to-white p-6 md:p-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Penis Size Percentile Calculator</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">Use a private educational calculator to estimate percentile and understand how length or girth compares with global references.</p>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">The estimate runs in your browser and is not medical advice.</p>
        <a href="#calculator" className="mt-6 inline-flex rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">Open the private percentile calculator</a>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Quick answer: what a penis size percentile means</h2>
        <p className="text-slate-700">A percentile tells you where a measurement sits inside a reference distribution. A result near the 50th percentile is around average. A result near the 84th percentile means the value is above about 84% of the reference distribution.</p>
      </section>

      <section className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-2xl font-semibold text-slate-900">Private percentile calculator CTA</h2>
        <p className="text-slate-700">Use the calculator below to estimate your percentile with length or girth inputs in centimeters or inches.</p>
        <p className="text-slate-700">Prefer the general comparison page? <Link className="text-brand-700 underline" href="/penis-size-calculator">Go to the penis size calculator</Link>.</p>
      </section>

      <PenisSizeCalculator />

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">How the percentile estimate works</h2>
        <p className="text-slate-700">The calculator compares your measurement with global average data for the selected measurement type. It then estimates where your value sits in a statistical distribution and returns an educational percentile.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">What z-score means</h2>
        <p className="text-slate-700">A z-score shows how many standard deviations a value is above or below the mean. A z-score near 0 is near average. A positive z-score is above average, and a negative z-score is below average. The percentile estimate is derived from this z-score relationship.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Average size vs percentile</h2>
        <p className="text-slate-700">Average is one summary point. Percentile gives relative position. Two values can both be within a normal range while still landing at different percentiles.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Why percentiles are estimates</h2>
        <p className="text-slate-700">Percentiles depend on reference data quality, sampling, measurement technique, and statistical assumptions. They are helpful for context but should not be interpreted as exact clinical rankings.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Length percentile</h2>
        <p className="text-slate-700">Length percentile uses your selected length value and the corresponding reference average and spread. Consistent measuring technique improves the usefulness of the estimate.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Girth percentile</h2>
        <p className="text-slate-700">Girth percentile is estimated from circumference input and global girth references. Use a flexible tape and repeatable tape tension for more consistent readings.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Country comparison limitations</h2>
        <p className="text-slate-700">Country-level figures may come from mixed methods and varying sample quality. For this reason, global references remain the primary basis for percentile interpretation.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Normal range explanation</h2>
        <p className="text-slate-700">Natural variation is expected. Being below or above average does not automatically indicate a medical issue. Percentile should be read as educational context, not a value judgment.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Educational disclaimer</h2>
        <p className="text-slate-700">This percentile calculator is intended for private education. It does not diagnose conditions, provide treatment, or replace individualized medical care.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details key={item.q} className="rounded-lg border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-2 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <EducationalDisclaimer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
    </article>
  );
}
