const faq = [
  { q: 'How does the penis size calculator work?', a: 'You enter a measured value, choose the unit and measurement type, and the calculator compares your input with global and country averages.' },
  { q: 'Is this calculator private?', a: 'Yes. The calculation runs in your browser and your input is not stored in an account or database.' },
  { q: 'What is the average erect penis length?', a: 'This calculator uses a global reference of 13.12 cm (5.16 inches) for erect length.' },
  { q: 'What is the average erect penis girth?', a: 'This calculator uses a global reference of 11.66 cm (4.59 inches) for erect girth.' },
  { q: 'Is my penis small if I am below average?', a: 'Not necessarily. Below average is a statistical comparison and does not by itself indicate a health problem.' },
  { q: 'How accurate are country averages?', a: 'Country averages are useful context, but data quality and methods vary. Global standardized references are often more stable.' },
  { q: 'Should I measure in centimeters or inches?', a: 'Use whichever unit you prefer. The calculator converts values and shows both centimeters and inches in the result.' },
  { q: 'Is this medical advice?', a: 'No. This page is educational and not a medical diagnosis or treatment recommendation.' }
];

export function getFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
  };
}

export default function CalculatorFaq() {
  return <section><h2 className="text-2xl font-semibold text-slate-900">Frequently asked questions</h2><div className="mt-4 space-y-4">{faq.map((item) => <article key={item.q} className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="font-semibold">{item.q}</h3><p className="mt-1 text-sm text-slate-700">{item.a}</p></article>)}</div></section>;
}
