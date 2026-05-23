import type { Metadata } from 'next';
import PenisSizeCalculator from '@/components/PenisSizeCalculator';

export const metadata: Metadata = {
  title: 'Penis Size Calculator: Compare Your Size to the Average',
  description: 'Private educational calculator to compare your measurement with global and country averages.'
};

const faq = [
  { q: 'Is this calculator private?', a: 'Yes. Calculations happen in your browser and no measurement is stored.' },
  { q: 'Is this a medical diagnosis?', a: 'No. This is educational information and not medical advice.' },
  { q: 'What averages are used?', a: 'Global baseline values are based on Veale et al. 2015 for the MVP.' }
];

export default function CalculatorPage() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return <div className="space-y-8"><h1 className="text-3xl font-bold">Penis Size Calculator</h1><PenisSizeCalculator /><section className="card"><h2 className="text-xl font-semibold mb-4">FAQ</h2><div className="space-y-3">{faq.map((item) => <div key={item.q}><h3 className="font-medium">{item.q}</h3><p className="text-slate-700">{item.a}</p></div>)}</div></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></div>;
}
