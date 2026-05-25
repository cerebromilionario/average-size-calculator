import type { Metadata } from 'next';
import Link from 'next/link';
import { COUNTRY_AVERAGES_CM, GLOBAL_AVERAGES_CM } from '@/data/penisSizeAverages';
import StrategicAd from '@/components/ads/StrategicAd';
import JsonLd from '@/components/JsonLd';
import { createArticleJsonLd, createDatasetJsonLd, createFaqJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Average Penis Size by Country | Country Comparison Data',
  description:
    'Compare average penis size by country using compiled erect length data. Learn how country averages should be interpreted and compare with global averages.'
};

const faqItems = [
  {
    q: 'What does average penis size by country mean?',
    a: 'It means an estimated country-level average for erect length from a compiled dataset. It is a broad population reference, not an individual prediction.'
  },
  {
    q: 'Are country penis size averages accurate?',
    a: 'They are best treated as approximate references. Methods, samples, and source quality can vary across countries and over time.'
  },
  {
    q: 'Why does this table only show erect length?',
    a: 'This dataset provides country-level values for erect length. It does not provide country-level values for all other measurements.'
  },
  {
    q: 'Why are girth and flaccid length not listed by country?',
    a: 'Comparable country-level values for erect girth and flaccid length are not available in this source, so this page does not list them by country.'
  },
  {
    q: 'Is the global average more reliable than country data?',
    a: 'For most users, yes. A peer-reviewed global systematic review is usually a more stable benchmark than compiled country rankings.'
  },
  {
    q: 'Can I compare my own measurement with my country average?',
    a: 'Yes, as an educational reference. Measure consistently first, and avoid overinterpreting small differences from any average.'
  }
];

export default function Page() {
  const sortedCountries = [...COUNTRY_AVERAGES_CM].sort((a, b) => a.country.localeCompare(b.country));
  const countryCount = sortedCountries.length;
  const dateModified = new Date().toISOString().split('T')[0];

  const faqJsonLd = createFaqJsonLd(faqItems);
  const articleJsonLd = createArticleJsonLd({
    headline: 'Average Penis Size by Country',
    description: 'Compare average penis size by country using compiled erect length data. Learn how country averages should be interpreted and compare with global averages.',
    path: '/average-penis-size-by-country',
    dateModified
  });
  const datasetJsonLd = createDatasetJsonLd({
    name: 'Average Penis Size by Country Reference Table',
    description: 'An educational country comparison table for average erect length values, with limitations and source context.',
    path: '/average-penis-size-by-country',
    sources: ['WorldData.info country ranking']
  });

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Average Penis Size by Country</h1>
        <p className="mt-3 text-base text-slate-700 md:text-lg">
          Compare average erect length by country and understand how country-level size data should be interpreted.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/penis-size-calculator" className="rounded-lg bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800">
            Use the Penis Size Calculator
          </Link>
          <Link href="/average-penis-size" className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-800 hover:bg-slate-50">
            Learn About Global Averages
          </Link>
        </div>
        <p className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-3 text-sm text-slate-800">
          Country data is useful for broad reference only. The global average remains the better general comparison point.
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">What does this country table show?</h2>
        <p className="text-slate-700">
          This table shows average erect length by country. It does not include country-level erect girth or flaccid length because those values are not available in this dataset. For those measurements, the calculator uses global averages from published research.
        </p>
        <p className="text-slate-700">
          The table currently includes {countryCount} countries and territories from the project&apos;s compiled country dataset. Values are intended for educational context, not for diagnosing health, predicting individual outcomes, or judging normality in a clinical sense.
        </p>
      </section>

      <section className="card space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-slate-900">Country table (alphabetical)</h2>
          <p className="text-sm text-slate-600">Sorted A–Z by country name</p>
        </div>
        <div className="overflow-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-800">
              <tr>
                <th className="px-3 py-2 font-semibold">Country</th>
                <th className="px-3 py-2 font-semibold">Average erect length</th>
                <th className="px-3 py-2 font-semibold">Average erect length (inches)</th>
              </tr>
            </thead>
            <tbody>
              {sortedCountries.map((row) => {
                const inches = row.erectLength ? row.erectLength / 2.54 : null;
                return (
                  <tr key={row.countryCode} className="border-t border-slate-100">
                    <td className="px-3 py-2 text-slate-900">{row.country}</td>
                    <td className="px-3 py-2 text-slate-700">{row.erectLength ? `${row.erectLength.toFixed(2)} cm` : 'N/A'}</td>
                    <td className="px-3 py-2 text-slate-700">{inches ? `${inches.toFixed(2)} in` : 'N/A'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Data source</h2>
        <p className="text-slate-700">
          Country-level values on this page are based on the{' '}
          <a className="text-brand-700 underline" href="https://www.worlddata.info/average-penissize.php" target="_blank" rel="noreferrer">
            WorldData.info country ranking
          </a>
          . This source is used here for country averages of erect length only.
        </p>
        <p className="text-slate-700">
          Compiled country rankings should be interpreted as approximate reference data. They are helpful for broad comparison, but they are not a substitute for clinical assessment and are not used on this site as medical diagnosis.
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Methodology and limitations</h2>

      <StrategicAd type="native" />
        <p className="text-slate-700">
          Country-level datasets can involve variable methodology. Depending on the source, values may be derived from studies, surveys, aggregated reports, or mixed compilations. Because of that variation, confidence can differ across countries even when values are presented in a single table.
        </p>
        <p className="text-slate-700">
          Small differences between country averages should not be interpreted as definitive. In practical terms, a small gap between two country estimates may reflect differences in source methods, sample composition, or data harmonization rather than a meaningful population-level distinction.
        </p>
        <p className="text-slate-700">
          For general comparison, this site places higher weight on global peer-reviewed benchmarks than on country rankings. Before comparing any number, it is important to use consistent measurement technique; you can{' '}
          <Link className="text-brand-700 underline" href="/how-to-measure">
            learn how to measure correctly
          </Link>
          .
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Country averages vs global average</h2>
        <p className="text-slate-700">
          Global average erect length: <strong>{GLOBAL_AVERAGES_CM.erectLength.toFixed(2)} cm / {(GLOBAL_AVERAGES_CM.erectLength / 2.54).toFixed(2)} in</strong>.
        </p>
        <p className="text-slate-700">
          The global average comes from a peer-reviewed systematic review, while country averages are compiled reference values. For most users, the global average is the more stable comparison point.
        </p>
        <p className="text-slate-700">
          If you want broader context beyond country-level estimates,{' '}
          <Link className="text-brand-700 underline" href="/average-penis-size">
            learn more about average penis size
          </Link>
          .
        </p>
      </section>

      <section className="rounded-2xl border border-brand-200 bg-brand-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Compare your measurement privately</h2>
        <p className="mt-2 text-slate-700">
          Use the calculator to compare your measurement with the global average and, when available, your selected country average. Your input is calculated in your browser and is not stored.
        </p>
        <div className="mt-4">
          <Link href="/penis-size-calculator" className="rounded-lg bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800">
            Use the Penis Size Calculator
          </Link>
        </div>
      </section>

      <section className="card space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">How to use country comparisons responsibly</h2>
        <p className="text-slate-700">
          Country averages can be informative when viewed with context, but they should remain secondary to a stable baseline. Most users benefit more from comparing with the global average, then focusing on consistent technique and realistic interpretation.
        </p>
        <p className="text-slate-700">
          If you are reviewing this data for personal education, start with measurement quality, then compare to broad references, and avoid drawing strong conclusions from very narrow differences. You can also review our{' '}
          <Link className="text-brand-700 underline" href="/privacy-policy">
            privacy policy
          </Link>{' '}
          for data handling details or use the{' '}
          <Link className="text-brand-700 underline" href="/contact">
            contact
          </Link>{' '}
          page if you have questions about methodology.
        </p>
      </section>

      <section className="card space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
        {faqItems.map((item) => (
          <div key={item.q} className="space-y-1">
            <h3 className="font-semibold text-slate-900">{item.q}</h3>
            <p className="text-slate-700">{item.a}</p>
          </div>
        ))}
      </section>

      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <JsonLd data={articleJsonLd} />
      <JsonLd data={datasetJsonLd} />
    </div>
  );
}
