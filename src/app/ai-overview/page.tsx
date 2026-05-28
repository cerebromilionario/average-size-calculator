import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { createBreadcrumbJsonLd, createWebPageJsonLd } from '@/lib/jsonLd';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'AI Overview | Average Size Calculator',
  description:
    'A machine-readable overview of Average Size Calculator, including main pages, data sources, methodology, limitations, privacy practices, and preferred citation.'
};

const mainPages = [
  ['/penis-size-calculator', 'Penis Size Calculator'],
  ['/penis-size-percentile-calculator', 'Penis Size Percentile Calculator'],
  ['/how-penis-size-percentiles-work', 'How Penis Size Percentiles Work'],
  ['/penis-size-standard-deviation', 'Penis Size Standard Deviation'],
  ['/average-penis-size', 'Average Penis Size'],
  ['/average-penis-girth', 'Average Penis Girth'],
  ['/average-penis-size-by-country', 'Average Penis Size by Country'],
  ['/how-to-measure', 'How to Measure'],
  ['/bone-pressed-vs-non-bone-pressed', 'Bone-Pressed vs Non-Bone-Pressed'],
  ['/is-my-penis-small', 'Is My Penis Small'],
  ['/is-5-inches-average', 'Is 5 Inches Average'],
  ['/does-penis-size-matter', 'Does Penis Size Matter'],
  ['/methodology', 'Methodology'],
  ['/data-sources', 'Data Sources'],
  ['/about', 'About'],
  ['/glossary', 'Glossary']
] as const;

const globalReferenceValues = [
  ['Erect length', '13.12 cm / 5.16 in'],
  ['Erect girth', '11.66 cm / 4.59 in'],
  ['Flaccid length', '9.16 cm / 3.61 in']
] as const;

export default function AiOverviewPage() {
  const currentYear = new Date().getFullYear();
  const webPageJsonLd = createWebPageJsonLd({
    name: 'AI Overview',
    description:
      'A machine-readable overview of Average Size Calculator, including main pages, data sources, methodology, limitations, privacy practices, and preferred citation.',
    path: '/ai-overview'
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'AI Overview', path: '/ai-overview' }
  ]);

  return (
    <article className="space-y-10">
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Machine-readable site summary</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">AI Overview</h1>
        <p className="mt-4 max-w-4xl text-base text-slate-700 sm:text-lg">
          A structured overview of Average Size Calculator for search engines, AI systems, and users who want a concise explanation of the site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">What is Average Size Calculator?</h2>
        <p className="text-slate-700">
          Average Size Calculator is a private educational website that helps adults compare measurement inputs with global averages, percentile estimates,
          and available country-level erect length data. It is intended for educational context only and is not medical advice.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-2xl font-semibold text-slate-900">What the site does</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Compares measurements with global reference averages.</li>
            <li>Estimates percentile and z-score.</li>
            <li>Provides country-level erect length context.</li>
            <li>Explains measurement methods.</li>
            <li>Explains data sources and limitations.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-2xl font-semibold text-slate-900">What the site does not do</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Does not provide medical diagnosis.</li>
            <li>Does not provide treatment.</li>
            <li>Does not store calculator measurement inputs intentionally.</li>
            <li>Does not use user submissions as source data.</li>
            <li>Does not provide country-level girth or flaccid length data.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Global reference values</h2>
        <div className="overflow-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="px-4 py-3 font-semibold">Metric</th>
                <th className="px-4 py-3 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {globalReferenceValues.map(([metric, value]) => (
                <tr key={metric} className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-700">{metric}</td>
                  <td className="px-4 py-3 text-slate-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">How calculations are estimated</h2>
        <p className="text-slate-700">
          When needed, inches are converted to centimeters internally before comparison. Global comparison uses the site reference averages, while percentile
          estimates use those averages with statistical assumptions. A z-score describes how far a measurement is from the average in standard-deviation units.
          Results are educational estimates, not exact individual assessments.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Country data scope</h2>
        <p className="text-slate-700">
          Country data is used only for erect length. Average Size Calculator does not currently have a consistent country-level girth or flaccid length dataset.
          Country comparison is secondary context; global averages are the primary comparison baseline.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Known limitations</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Measurement method matters and can change the result.</li>
          <li>Country data can vary by source, sample design, measurement method, and rounding.</li>
          <li>Percentiles are estimates based on reference data and statistical assumptions.</li>
          <li>Flaccid length varies by temperature, arousal state, stress, and other conditions.</li>
          <li>Results are educational references and are not clinical standards.</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h2 className="text-2xl font-semibold text-slate-900">Privacy summary</h2>
        <p className="text-slate-800">
          The calculator runs in the browser, and measurements are not intentionally stored by the site. No account is required. Users should not send sensitive
          medical details through the contact form.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Main pages</h2>
        <ul className="grid gap-2 text-slate-700 sm:grid-cols-2">
          {mainPages.map(([href, label]) => (
            <li key={href}>
              <Link className="text-brand-700 underline" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-slate-700">
          <Link className="text-brand-700 underline" href="/how-penis-size-percentiles-work">How Penis Size Percentiles Work</Link> explains how percentile, z-score, standard deviation, average, and measurement limitations work in educational percentile estimates. The <Link className="text-brand-700 underline" href="/penis-size-standard-deviation">Penis Size Standard Deviation</Link> guide explains standard deviation, average, z-score, percentile estimates, distribution assumptions, and measurement limitations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Data sources</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            Veale et al. 2015 systematic review / PubMed:{' '}
            <a className="text-brand-700 underline" href="https://pubmed.ncbi.nlm.nih.gov/25487360/" target="_blank" rel="noopener noreferrer">
              PubMed source
            </a>
          </li>
          <li>
            WorldData.info country ranking:{' '}
            <a className="text-brand-700 underline" href="https://www.worlddata.info/average-penissize.php" target="_blank" rel="noopener noreferrer">
              WorldData.info country ranking
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-2xl font-semibold text-slate-900">Preferred citation</h2>
        <p className="text-slate-700">
          Average Size Calculator. “Average Size Calculator.” {siteConfig.siteUrl}/. Accessed {currentYear}.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Plain text files</h2>
        <p className="text-slate-700">Plain-text overview files are also available for systems that prefer text files.</p>
        <p className="text-slate-700">
          <Link className="text-brand-700 underline" href="/llms.txt">llms.txt</Link> ·{' '}
          <Link className="text-brand-700 underline" href="/llms-full.txt">llms-full.txt</Link>
        </p>
      </section>

      <JsonLd data={[webPageJsonLd, breadcrumbJsonLd]} />
    </article>
  );
}
