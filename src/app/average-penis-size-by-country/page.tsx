import type { Metadata } from 'next';
import { COUNTRY_AVERAGES_CM } from '@/data/penisSizeAverages';

export const metadata: Metadata = {
  title: 'Average Penis Size by Country',
  description:
    'Average penis size by country with source and confidence labels, plus context on global average penis size and country reference data limits.'
};

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Are country penis size averages accurate?', acceptedAnswer: { '@type': 'Answer', text: 'Country averages are approximate educational references and can vary by source quality and methodology.' } },
      { '@type': 'Question', name: 'Why do country averages vary by source?', acceptedAnswer: { '@type': 'Answer', text: 'Country rankings can compile mixed studies and surveys that use different samples and measurement methods.' } },
      { '@type': 'Question', name: 'Which average is more reliable, global or country data?', acceptedAnswer: { '@type': 'Answer', text: 'Global pooled references from standardized measured studies are usually more reliable for broad comparison.' } },
      { '@type': 'Question', name: 'Can I compare my size by country?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but country comparison should be treated as secondary educational context, not diagnosis.' } }
    ]
  };

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">Average Penis Size by Country</h1>
      <p className="text-slate-700">This country average penis size table provides educational country reference data. It supports penis size comparison by country while keeping global average penis size as the main benchmark.</p>
      <p className="text-slate-700">Explore your own context in the <a className="text-brand-700 underline" href="/penis-size-calculator">penis size calculator</a> and read the broader baseline on <a className="text-brand-700 underline" href="/average-penis-size">average penis size</a>.</p>
      <div className="overflow-auto card">
        <table className="w-full text-left text-sm">
          <thead><tr><th>Country</th><th>Average erect length</th><th>Source</th><th>Confidence</th></tr></thead>
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
        <h2 className="text-2xl font-semibold text-slate-900">How reliable are country averages?</h2>
        <p className="text-slate-700">Country averages can vary by source. Some rankings use compilations or surveys, while professionally measured studies are generally more reliable.</p>
        <p className="text-slate-700">Small country-to-country differences should not be interpreted as definitive. The goal is educational comparison, not diagnosis.</p>
        <p className="text-sm text-slate-600">Educational disclaimer: country reference data may use mixed methodologies and should not be treated as a clinical standard.</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
