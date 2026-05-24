import type { Metadata } from 'next';
import Link from 'next/link';
import DataQualityNotice from '@/components/DataQualityNotice';
import { COUNTRY_AVERAGES_CM } from '@/data/penisSizeAverages';

export const metadata: Metadata = {
  title: 'Average Penis Size by Country | Country Comparison Data',
  description:
    'Compare average penis size by country using compiled reference data. Learn how country averages differ from global peer-reviewed averages and how to interpret them.'
};

export default function Page() {
  const faqItems = [
    {
      q: 'Are average penis size by country rankings accurate?',
      a: 'They are approximate compiled reference data, not definitive national clinical values. Method quality and sampling can vary.'
    },
    {
      q: 'Why do country averages vary by source?',
      a: 'Different sources may combine different studies, sample sizes, time periods, and measurement methods, which can produce different values.'
    },
    {
      q: 'Is the global average more reliable than country data?',
      a: 'In general, yes. A peer-reviewed global systematic review is usually more consistent for broad comparison than compiled country rankings.'
    },
    {
      q: 'Can I compare my measurement with my country average?',
      a: 'Yes, as a broad educational reference. Small differences should not be overinterpreted as clinically meaningful.'
    }
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Average Penis Size by Country</h1>
      <p className="text-slate-700">This page presents average penis size by country as compiled reference data for educational context. It is a country average penis size overview, not a competitive ranking, and the global average penis size remains the primary benchmark.</p>
      <p className="text-slate-700">For personal context, use the <Link className="text-brand-700 underline" href="/penis-size-calculator">penis size calculator</Link>. You can also review the global baseline on <Link className="text-brand-700 underline" href="/average-penis-size">average penis size</Link> and improve consistency with <Link className="text-brand-700 underline" href="/how-to-measure">how to measure</Link>.</p>

      <DataQualityNotice />

      <div className="overflow-auto card">
        <table className="w-full text-left text-sm">
          <thead>
            <tr>
              <th>Country (A-Z)</th>
              <th>Average erect length</th>
              <th>Source</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            {COUNTRY_AVERAGES_CM.map((row) => (
              <tr key={row.country} className="border-t">
                <td className="py-2">{row.country}</td>
                <td>{row.erectLength ? `${row.erectLength.toFixed(2)} cm` : 'N/A'}</td>
                <td>{row.sourceUrl ? <a className="text-brand-700 underline" href={row.sourceUrl} target="_blank" rel="noreferrer">{row.sourceLabel}</a> : row.sourceLabel}</td>
                <td className="capitalize">{row.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900">Methodology and limitations</h2>
        <p className="text-slate-700">Global averages come from a peer-reviewed systematic review. Country averages come from a compiled public country ranking.</p>
        <p className="text-slate-700">Country data may combine different sources or measurement methods. This penis size comparison by country is useful for broad reference only.</p>
        <p className="text-slate-700">Small differences between countries should not be overinterpreted. This site is educational and not medical advice.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
        {faqItems.map((item) => (
          <div key={item.q}>
            <h3 className="font-semibold text-slate-900">{item.q}</h3>
            <p className="text-slate-700">{item.a}</p>
          </div>
        ))}
      </section>

      <p className="text-sm text-slate-600">Educational disclaimer: compiled reference data can vary by source methodology and should not be treated as a clinical diagnosis or performance metric.</p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
