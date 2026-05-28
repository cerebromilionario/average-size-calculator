import type { Metadata } from 'next';
import Link from 'next/link';
import { GLOBAL_AVERAGES_CM, GLOBAL_AVERAGE_SOURCE } from '@/data/penisSizeAverages';
import { siteConfig } from '@/lib/site';
import StrategicAd from '@/components/ads/StrategicAd';

export const metadata: Metadata = {
  title: 'Is My Penis Small? Compare With Average Size Data',
  description:
    'Wondering if your penis is small or average? Learn how size compares with global averages, percentiles, measurement methods, and normal variation.'
};

const toInches = (cm: number) => cm / 2.54;
const formatCm = (value: number) => `${value.toFixed(2)} cm`;
const formatInches = (value: number) => `${toInches(value).toFixed(2)} in`;

export default function Page() {
  const erectLength = GLOBAL_AVERAGES_CM.erectLength;
  const erectGirth = GLOBAL_AVERAGES_CM.erectGirth;
  const flaccidLength = GLOBAL_AVERAGES_CM.flaccidLength;

  const faqItems = [
    { q: 'Is my penis small if I am below average?', a: 'Not necessarily. Below average is a statistical position and may still be within common natural variation.' },
    { q: 'What is considered average penis size?', a: `This site uses global references of ${formatCm(erectLength)} (${formatInches(erectLength)}) erect length, ${formatCm(erectGirth)} (${formatInches(erectGirth)}) erect girth, and ${formatCm(flaccidLength)} (${formatInches(flaccidLength)}) flaccid length.` },
    { q: 'Is 5 inches small?', a: '5 inches (12.7 cm) is close to the global erect-length average and often near average in practice.' },
    { q: 'Is 4 inches small?', a: '4 inches (10.16 cm) is below the global erect-length average, but below average alone is not a diagnosis.' },
    { q: 'What does below average mean?', a: 'It means a value is under the central reference, not that there is automatically a health problem.' },
    { q: 'Can measuring incorrectly make me think I am smaller?', a: 'Yes. Technique and units can change outcomes enough to affect interpretation.' },
    { q: 'Should I use a percentile calculator?', a: 'Percentile adds context by showing where your value sits in a distribution.' },
    { q: 'Are country averages reliable?', a: 'Country datasets are useful but often mixed in quality, so global references are usually more stable.' },
    { q: 'Can anxiety affect how I see my body?', a: 'Yes. Anxiety and comparison habits can make self-perception less accurate.' },
    { q: 'Is this page medical advice?', a: 'No. This page is educational and cannot diagnose any condition.' }
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

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Is My Penis Small?',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Average Size Calculator' },
    publisher: { '@type': 'Organization', name: 'Average Size Calculator' },
    mainEntityOfPage: `${siteConfig.siteUrl}/is-my-penis-small`,
    dateModified: new Date().toISOString()
  };

  return (
    <article className="space-y-10">
      <section className="space-y-5 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Is My Penis Small?</h1>
        <p className="max-w-3xl text-base text-slate-700 sm:text-lg">A private, educational guide to understanding size, averages, percentiles, and normal variation.</p>
        <div className="flex flex-wrap gap-2 text-sm">{['Private', 'Educational', 'Based on average data', 'No measurement stored'].map((badge) => <span key={badge} className="rounded-full border border-slate-300 bg-white px-3 py-1 font-medium text-slate-700">{badge}</span>)}</div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/penis-size-calculator" className="rounded-md bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800">Use the Penis Size Calculator</Link>
          <Link href="/penis-size-percentile-calculator" className="rounded-md border border-slate-300 px-5 py-3 text-center font-semibold text-slate-800 hover:bg-slate-100">Try the Percentile Calculator</Link>
        </div>
      </section>
      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Quick answer: how do I know if I am small?</h2><p className="text-slate-700">A measurement can be below average and still fall within common natural variation. The first step is to measure consistently, then compare with global averages or percentile estimates.</p><ul className="list-disc space-y-1 pl-5 text-slate-700"><li>Average is a statistical reference point, not a medical judgment.</li><li>Small technique differences can change comparisons when a value is close to average.</li><li>Use the <Link className="text-brand-700 underline" href="/how-to-measure">measurement guide</Link>, then compare with the <Link className="text-brand-700 underline" href="/penis-size-calculator">penis size calculator</Link> or <Link className="text-brand-700 underline" href="/penis-size-percentile-calculator">percentile calculator</Link>.</li></ul></section>
      <section className="space-y-4"><h2 className="text-2xl font-semibold text-slate-900">What is the average penis size?</h2><p className="text-slate-700">This site uses published global references for consistency: erect length {formatCm(erectLength)} ({formatInches(erectLength)}), erect girth {formatCm(erectGirth)} ({formatInches(erectGirth)}), and flaccid length {formatCm(flaccidLength)} ({formatInches(flaccidLength)}). These values are educational anchors for questions such as “is my penis below average” and “is my penis normal”.</p><p className="text-slate-700">Global references typically provide more stable orientation than country tables alone. Country values can still be informative, but dataset quality can vary across sources and methods.</p><p><Link className="font-medium text-brand-700 underline" href="/average-penis-size">Learn more about average penis size</Link></p><p className="text-sm text-slate-600">Reference: {GLOBAL_AVERAGE_SOURCE.label}. <a className="text-brand-700 underline" href={GLOBAL_AVERAGE_SOURCE.url} target="_blank" rel="noopener noreferrer">PubMed source</a>.</p></section>

      <StrategicAd type="native" />
      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">What does “small” actually mean?</h2><p className="text-slate-700">In common language, people often use small to mean below average penis size. In clinical care, evaluation is different: professionals assess full context, not one number. That distinction matters because statistics are descriptive, while diagnosis requires professional assessment.</p><p className="text-slate-700">Self-perception can also be influenced by penis size anxiety, social comparison, unrealistic expectations, and incorrect measurement. A grounded interpretation focuses on reliable data, not on isolated visual impressions.</p></section>
      <section className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-5"><h2 className="text-2xl font-semibold text-slate-900">Below average does not always mean medically small</h2><p className="text-slate-700">Below average is common in any distribution. By definition, many values sit below a central reference and many sit above it. This statistical fact is normal and expected.</p><p className="text-slate-700">Being below average does not automatically indicate disease or dysfunction. If concern includes pain, incomplete development, persistent functional difficulty, painful curvature, or sustained distress, seek individualized guidance from a qualified professional.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Measure correctly before you compare</h2><p className="text-slate-700">Incorrect measurement is one of the most common reasons people conclude “am I small” prematurely. Erect length is measured from base to tip with consistent placement. Erect girth is measured around the shaft using a flexible tape. Keep units consistent and avoid mixing centimeters and inches mid-comparison.</p><p className="text-slate-700">Repeat under similar conditions and use an average of repeated attempts if needed. Small procedural differences can change your interpretation, especially when your value is near the average.</p><p><Link className="font-medium text-brand-700 underline" href="/how-to-measure">Learn how to measure correctly</Link></p></section>
      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Average vs percentile: which one should you use?</h2><p className="text-slate-700">Average and percentile answer different questions. Average tells you the center reference. Percentile tells you how your measurement compares across the distribution. Around the 50th percentile is generally close to average.</p><p className="text-slate-700">A low percentile is not a diagnosis; it is a statistical position. For users who want a more precise comparison than average alone, percentile can reduce confusion and provide clearer interpretation.</p><p><Link className="font-medium text-brand-700 underline" href="/penis-size-percentile-calculator">Use the percentile calculator</Link></p></section>
      <section className="grid gap-4 md:grid-cols-2"><div className="space-y-3 rounded-xl border border-slate-200 bg-white p-5"><h2 className="text-2xl font-semibold text-slate-900">Is 5 inches small?</h2><p className="text-slate-700">5 inches equals approximately 12.7 cm, which is close to the global average erect length of {formatCm(erectLength)} ({formatInches(erectLength)}). Depending on method and rounding, it may be very close to average.</p><p className="text-slate-700">If you want individual context, compare with the <Link className="text-brand-700 underline" href="/penis-size-calculator">penis size calculator</Link> and optionally add percentile interpretation.</p></div><div className="space-y-3 rounded-xl border border-slate-200 bg-white p-5"><h2 className="text-2xl font-semibold text-slate-900">Is 4 inches small?</h2><p className="text-slate-700">4 inches equals approximately 10.16 cm. This is below the global average erect length. Still, below average alone is not a medical judgment.</p><p className="text-slate-700">If concern is persistent and connected to function, development, pain, or health questions, professional evaluation can provide personalized support.</p></div></section>
      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Why many people think they are smaller than they are</h2><p className="text-slate-700">Several factors can distort perception: top-down viewing angle, social comparison, unrealistic content standards, exaggerated self-reports online, and inconsistent measurement methods. Anxiety can amplify all of these effects.</p><p className="text-slate-700">A practical approach is to shift from visual comparison to measured comparison. Objective data collected consistently are usually more calming and useful than repeated guessing.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Should I compare with my country average?</h2><p className="text-slate-700">Country averages can be interesting, but they are secondary to global references for most users. Country compilations may mix methodologies, sample quality, and time periods.</p><p className="text-slate-700">On this site, country comparison is available for erect length in the main calculator. Use it as added context rather than a definitive judgment.</p><p><Link className="font-medium text-brand-700 underline" href="/penis-size-calculator">Compare with your country average</Link> · <Link className="text-brand-700 underline" href="/average-penis-size-by-country">Average penis size by country</Link></p></section>
      <section className="space-y-3"><h2 className="text-2xl font-semibold text-slate-900">When should you talk to a healthcare professional?</h2><p className="text-slate-700">This page provides education, not diagnosis. Consider professional guidance if you have pain, difficulties with sexual function, concerns about development, sudden size changes, painful curvature, intense anxiety, or persistent emotional distress. You deserve clear and respectful care.</p></section>
      <section className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-5"><h2 className="text-2xl font-semibold text-slate-900">Private size comparison</h2><p className="text-slate-700">The calculator runs in your browser and no measurement is stored. You do not need an account and you do not need to send photos. For safety and privacy, avoid submitting sensitive medical information through the contact form.</p><p><Link className="text-brand-700 underline" href="/privacy-policy">Privacy Policy</Link> · <Link className="text-brand-700 underline" href="/terms-of-use">Terms of Use</Link> · <Link className="text-brand-700 underline" href="/contact">Contact</Link></p></section>
      <section className="space-y-4"><h2 className="text-2xl font-semibold text-slate-900">Quick reference table</h2><div className="overflow-auto rounded-xl border border-slate-200 bg-white"><table className="w-full text-left text-sm sm:text-base"><thead className="bg-slate-50"><tr><th className="px-4 py-3">Question</th><th className="px-4 py-3">Helpful reference</th></tr></thead><tbody><tr className="border-t"><td className="px-4 py-3">Am I below average?</td><td className="px-4 py-3">Compare with global average</td></tr><tr className="border-t"><td className="px-4 py-3">Am I statistically low?</td><td className="px-4 py-3">Use percentile estimate</td></tr><tr className="border-t"><td className="px-4 py-3">Did I measure correctly?</td><td className="px-4 py-3">Follow the measurement guide</td></tr><tr className="border-t"><td className="px-4 py-3">How do I compare by country?</td><td className="px-4 py-3">Use the main calculator</td></tr><tr className="border-t"><td className="px-4 py-3">Do I need medical advice?</td><td className="px-4 py-3">Speak with a qualified professional for health concerns</td></tr></tbody></table></div></section>
      <section className="space-y-4"><h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>{faqItems.map((item) => <div key={item.q} className="space-y-1"><h3 className="text-lg font-semibold text-slate-900">{item.q}</h3><p className="text-slate-700">{item.a}</p></div>)}</section>
      <section className="rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Compare privately with average data</h2><p className="text-slate-700">If you want a clearer answer, measure correctly and use the private calculator. Your measurement is calculated in your browser and is not stored.</p><div className="flex flex-col gap-3 sm:flex-row sm:justify-center"><Link href="/penis-size-calculator" className="rounded-md bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800">Use the Penis Size Calculator</Link><Link href="/penis-size-percentile-calculator" className="rounded-md border border-brand-300 bg-white px-5 py-3 text-center font-semibold text-brand-800 hover:bg-brand-100">Try Percentile Calculator</Link></div></section>
      <section className="rounded-xl border border-blue-200 bg-blue-50 p-5 space-y-2"><h2 className="text-xl font-semibold text-slate-900">Educational disclaimer</h2><p className="text-slate-700">This page is for educational purposes only. It is not medical advice and should not be used to diagnose any condition. If you have concerns about pain, development, sexual function, or health, consider speaking with a qualified healthcare professional.</p></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-2xl font-semibold text-slate-900">Key facts</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>This page is educational and does not provide medical diagnosis.</li>
          <li>This site uses global reference data and transparent methodology.</li>
          <li>Country data is secondary context and used only for erect length where available.</li>
          <li>Percentiles are educational estimates based on statistical assumptions.</li>
          <li>Measurements are calculated in the browser and are not stored.</li>
        </ul>
      </section>

    </article>
  );
}
