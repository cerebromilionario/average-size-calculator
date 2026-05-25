import type { Metadata } from 'next';
import Link from 'next/link';
import PercentileEstimator from '@/components/PercentileEstimator';
import EducationalDisclaimer from '@/components/EducationalDisclaimer';
import { siteConfig } from '@/lib/site';

const pageUrl = `${siteConfig.siteUrl}/penis-size-percentile-calculator`;

export const metadata: Metadata = {
  title: 'Penis Size Percentile Calculator | Length and Girth Percentile',
  description:
    'Estimate your length and girth percentile using global reference averages. Learn what percentile and z-score mean in a private educational calculator.'
};

const faqItems = [
  { q: 'What is a penis size percentile?', a: 'A percentile estimates where a measurement falls in a reference distribution. For example, the 50th percentile is near the center of the distribution.' },
  { q: 'What does the 50th percentile mean?', a: 'It means the measurement is close to the reference average and center point of the distribution.' },
  { q: 'What is a z-score?', a: 'A z-score shows how many standard deviations a value is above or below the reference mean. Positive values are above the mean, negative values are below it.' },
  { q: 'Does this percentile calculator use country data?', a: 'No. This estimator focuses on global reference averages and distribution assumptions for educational percentile context.' },
  { q: 'Is length percentile different from girth percentile?', a: 'Yes. Length and girth are separate measurements with different averages and statistical spread, so each has its own percentile estimate.' },
  { q: 'How accurate is the percentile estimate?', a: 'It is an educational estimate based on reference data and statistical assumptions. It should not be interpreted as a precise clinical ranking.' },
  { q: 'Is this medical advice?', a: 'No. This tool is educational only and does not diagnose, treat, or replace professional medical care.' }
];

export default function PercentileCalculatorPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
  };

  const webAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Percentile Estimator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'All',
    description: 'Educational percentile estimator for erect length and erect girth using global reference averages and z-score interpretation.',
    url: pageUrl
  };

  return (
    <article className="space-y-10">
      <section className="rounded-2xl bg-gradient-to-b from-brand-50 to-white p-6 md:p-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Penis Size Percentile Calculator</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">Understand where a measurement falls in a statistical distribution with a private percentile and z-score estimator.</p>
        <a href="#calculator" className="mt-6 inline-flex rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">Open the Percentile Estimator</a>
      </section>

      <PercentileEstimator />

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">What is a penis size percentile?</h2>
        <p className="text-slate-700">A percentile is a relative position in a distribution, not an absolute quality score. A result near 50th is around the center, while higher or lower values indicate position above or below that center.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">How the percentile estimator works</h2>
        <p className="text-slate-700">The estimator converts units, compares erect length and erect girth with global reference averages, calculates z-scores, and maps those values to percentile estimates using a normal distribution model.</p>
      </section>

      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Length percentile vs girth percentile</h2><p className="text-slate-700">Length percentile and girth percentile are calculated independently. A person may be around average in one measurement and above or below average in the other.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">What is a z-score?</h2><p className="text-slate-700">A z-score expresses distance from the mean in standard deviations. Around 0 is near average; around +1 is roughly the 84th percentile; around -1 is roughly the 16th percentile.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Average size vs percentile</h2><p className="text-slate-700">Average gives one midpoint. Percentile gives distribution position. Together they help interpret context more clearly than a single number alone.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Why percentiles are estimates</h2><p className="text-slate-700">Percentiles depend on reference populations, study methods, and statistical assumptions. They are useful educational guidance, but not exact clinical ranking.</p></section>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900">When to use the main size calculator</h2>
        <h3 className="font-semibold text-slate-900">Want to compare with your country average?</h3>
        <p className="text-slate-700">The percentile estimator uses global reference data. To compare your erect length with country-level reference data, use the main penis size calculator.</p>
        <Link className="inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700" href="/penis-size-calculator">Use the Penis Size Calculator</Link>
      </section>

      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Educational disclaimer</h2><p className="text-slate-700">This percentile estimator is for educational use only. It is not medical advice and should not be used to diagnose or treat health conditions.</p></section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
        <div className="space-y-3">{faqItems.map((item) => <details key={item.q} className="rounded-lg border border-slate-200 bg-white p-4"><summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary><p className="mt-2 text-slate-700">{item.a}</p></details>)}</div>
      </section>

      <EducationalDisclaimer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
    </article>
  );
}
