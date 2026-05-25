import type { Metadata } from 'next';
import Link from 'next/link';
import DataQualityNotice from '@/components/DataQualityNotice';
import { GLOBAL_AVERAGES_CM, GLOBAL_AVERAGE_SOURCE } from '@/data/penisSizeAverages';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Average Penis Size: Length, Girth, and What Is Normal',
  description:
    'Learn the average penis size for erect length, erect girth, and flaccid length in centimeters and inches. Understand what average means and how to interpret the data.'
};

const toInches = (cm: number) => cm / 2.54;

const formatCm = (value: number) => `${value.toFixed(2)} cm`;
const formatInches = (value: number) => `${toInches(value).toFixed(2)} in`;

export default function Page() {
  const erectLength = GLOBAL_AVERAGES_CM.erectLength;
  const erectGirth = GLOBAL_AVERAGES_CM.erectGirth;
  const flaccidLength = GLOBAL_AVERAGES_CM.flaccidLength;

  const faqItems = [
    {
      q: 'What is the average penis size?',
      a: `The global reference averages used here are ${formatCm(erectLength)} for erect length, ${formatCm(erectGirth)} for erect girth, and ${formatCm(flaccidLength)} for flaccid length.`
    },
    {
      q: 'What is the average erect penis length?',
      a: `The average erect length used on this site is ${formatCm(erectLength)} (${formatInches(erectLength)}).`
    },
    {
      q: 'What is the average erect penis girth?',
      a: `The average erect girth used on this site is ${formatCm(erectGirth)} (${formatInches(erectGirth)}).`
    },
    {
      q: 'What is the average flaccid penis length?',
      a: `The average flaccid length used on this site is ${formatCm(flaccidLength)} (${formatInches(flaccidLength)}).`
    },
    {
      q: 'Is below average still normal?',
      a: 'Yes. Many people are naturally below or above the average, and that alone does not indicate a medical problem.'
    },
    {
      q: 'Are country averages reliable?',
      a: 'Country values can be useful as secondary context, but global peer-reviewed references are usually more consistent for broad comparison.'
    },
    {
      q: 'How should penis size be measured?',
      a: 'Use a consistent method from base to tip for length and a flexible tape for girth. Repeat measurements under similar conditions.'
    },
    {
      q: 'Is this page medical advice?',
      a: 'No. This page is educational only and does not diagnose, treat, or replace care from a qualified healthcare professional.'
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

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Average Penis Size',
    description:
      'Learn the average penis size for erect length, erect girth, and flaccid length in centimeters and inches. Understand what average means and how to interpret the data.',
    author: {
      '@type': 'Organization',
      name: 'Average Size Calculator'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Average Size Calculator'
    },
    mainEntityOfPage: `${siteConfig.siteUrl}/average-penis-size`,
    dateModified: new Date().toISOString()
  };

  return (
    <article className="space-y-10">
      <section className="space-y-5 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Average Penis Size</h1>
        <p className="max-w-3xl text-base text-slate-700 sm:text-lg">
          Learn the average erect length, erect girth, and flaccid length, and understand what these numbers actually mean.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/penis-size-calculator" className="rounded-md bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800">
            Use the Penis Size Calculator
          </Link>
          <Link href="/average-penis-size-by-country" className="rounded-md border border-slate-300 px-5 py-3 text-center font-semibold text-slate-800 hover:bg-slate-100">
            See Average Size by Country
          </Link>
          <Link href="/penis-size-percentile-calculator" className="rounded-md border border-brand-300 px-5 py-3 text-center font-semibold text-brand-800 hover:bg-brand-50">
            Learn Percentiles
          </Link>
        </div>
        <p className="text-sm text-slate-600">This page is educational and is not medical advice.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">What is the average penis size?</h2>
        <div className="overflow-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="px-4 py-3">Measurement type</th>
                <th className="px-4 py-3 text-right">Average cm</th>
                <th className="px-4 py-3 text-right">Average inches</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Erect length</td>
                <td className="px-4 py-3 text-right">{formatCm(erectLength)}</td>
                <td className="px-4 py-3 text-right">{formatInches(erectLength)}</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Erect girth</td>
                <td className="px-4 py-3 text-right">{formatCm(erectGirth)}</td>
                <td className="px-4 py-3 text-right">{formatInches(erectGirth)}</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Flaccid length</td>
                <td className="px-4 py-3 text-right">{formatCm(flaccidLength)}</td>
                <td className="px-4 py-3 text-right">{formatInches(flaccidLength)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-700">These global averages are used by this site as educational reference values. Individual measurements vary naturally, and being above or below an average does not automatically mean there is a medical problem.</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-medium text-slate-600">Average erect length</p>
          <p className="text-2xl font-bold text-slate-900">{formatCm(erectLength)}</p>
          <p className="text-sm text-slate-600">{formatInches(erectLength)}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-medium text-slate-600">Average erect girth</p>
          <p className="text-2xl font-bold text-slate-900">{formatCm(erectGirth)}</p>
          <p className="text-sm text-slate-600">{formatInches(erectGirth)}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-medium text-slate-600">Average flaccid length</p>
          <p className="text-2xl font-bold text-slate-900">{formatCm(flaccidLength)}</p>
          <p className="text-sm text-slate-600">{formatInches(flaccidLength)}</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Where do these averages come from?</h2>
        <p className="text-slate-700">The global references on this page come from the Veale et al. 2015 systematic review. The analysis reviewed measurements in up to 15,521 men and used these pooled measurements to build nomograms. This approach is generally more methodologically reliable than informal online surveys because it emphasizes standardized techniques and study-level quality review.</p>
        <p className="text-slate-700">Even with stronger methodology, averages remain statistical references. They are not a definition of an individual person’s health, function, or worth.</p>
        <p className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">Source: {GLOBAL_AVERAGE_SOURCE.label}, PubMed. <a className="text-brand-700 underline" href={GLOBAL_AVERAGE_SOURCE.url} target="_blank" rel="noreferrer">Read on PubMed</a>.</p>
      </section>

      <DataQualityNotice />

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">What does average actually mean?</h2>
        <p className="text-slate-700">An average is a statistical center point. It is useful for context, but it does not represent every individual. In any natural biological measurement, many people are a bit below and many people are a bit above the average.</p>
        <p className="text-slate-700">Small differences should not be overinterpreted. A difference of a few millimeters or a fraction of an inch can come from measurement method, ruler angle, tape tension, body position, or timing. Average values do not define sexual function, fertility, confidence, relationship quality, or personal value.</p>
        <p className="text-slate-700">Another important point is context: population averages summarize many groups and methods into one number, while your personal measurement reflects one body at one moment. Because of this, average values should be read as orientation, not evaluation. People with similar measurements may have very different experiences, confidence levels, and health profiles.</p>
        <p className="text-slate-700">Interpreting averages responsibly also means avoiding all-or-nothing thinking. Being close to a mean is not a requirement, and being farther from it does not imply that something is wrong. Educational statistics are most useful when they reduce anxiety and improve understanding, not when they are used as social rankings.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Average erect penis length</h2>
        <p className="text-slate-700">The global average erect length used on this site is {formatCm(erectLength)} ({formatInches(erectLength)}). This is often the measurement most people search for when they ask “what is normal.”</p>
        <p className="text-slate-700">For consistency, erect length should be measured from the base to the tip using a straight ruler and a repeatable technique. See <Link className="text-brand-700 underline" href="/how-to-measure">how to measure</Link> for a step-by-step method.</p>
        <p className="text-slate-700">If you are tracking over time, use the same approach each time: similar posture, similar room temperature, and similar timing. Repeated, consistent measurements are more informative than a single isolated value.</p>
        <p className="text-slate-700">Search behavior often emphasizes erect length because it is easy to compare. However, interpretation should remain balanced: statistics can describe groups, but they do not predict individual well-being or relationship outcomes.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Average erect penis girth</h2>
        <p className="text-slate-700">Girth means circumference around the shaft. The global average erect girth used on this site is {formatCm(erectGirth)} ({formatInches(erectGirth)}).</p>
        <p className="text-slate-700">Girth should be measured with a flexible measuring tape placed around the mid-shaft without pulling too tightly. To keep comparisons consistent, this calculator currently uses global average references for girth rather than country-specific girth values.</p>
        <p className="text-slate-700">Tape placement and pressure can change girth readings more than expected. Measuring at the same location and with gentle, repeatable tension improves reliability. If your values differ across attempts, take multiple readings and use a reasonable average.</p>
        <p className="text-slate-700">Because country-level girth datasets are less standardized, presenting a global reference is usually clearer and less misleading for educational use.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Average flaccid penis length</h2>
        <p className="text-slate-700">The global average flaccid length used on this site is {formatCm(flaccidLength)} ({formatInches(flaccidLength)}).</p>
        <p className="text-slate-700">Flaccid size naturally varies more across moments and conditions, including temperature, anxiety, activity, and environment. For this reason, the calculator uses global reference values for flaccid length and does not treat country flaccid values as a primary benchmark.</p>
        <p className="text-slate-700">It is common for flaccid measurements to fluctuate within the same day. This variability is expected and usually reflects normal physiology rather than a health issue. If you compare flaccid values, do so cautiously and avoid drawing strong conclusions from one reading.</p>
        <p className="text-slate-700">When people worry after seeing temporary changes, it often helps to focus on consistent measuring conditions and long-term patterns instead of moment-to-moment variation.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Is below average still normal?</h2>
        <p className="text-slate-700">Yes. Below average can still be well within common natural variation. “Below average” is a statistical label, not a diagnosis.</p>
        <p className="text-slate-700">If you experience pain, persistent concern, development questions, or difficulty with sexual function, consider discussing it with a qualified healthcare professional. This page does not diagnose conditions.</p>
        <p className="text-slate-700">A supportive clinical conversation can provide personalized guidance that no generalized webpage can offer. Medical professionals can evaluate symptoms, history, and context rather than relying on a single statistic.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Average penis size by country</h2>
        <p className="text-slate-700">This page prioritizes global peer-reviewed averages because they are generally the most stable educational reference. Country comparisons can still be useful, but they are secondary context and may vary depending on methodology and source quality.</p>
        <p className="text-slate-700">On this site, country values for erect length are compiled from WorldData.info. They can support broad context, but small country-to-country differences should not be treated as definitive or clinically meaningful.</p>
        <p className="text-slate-700">Country lists can mix older and newer studies, different sampling methods, and different measurement protocols. That is why this page keeps global peer-reviewed averages as the primary reference and presents country figures as supplemental context only.</p>
        <p><Link className="text-brand-700 underline font-medium" href="/average-penis-size-by-country">See average penis size by country</Link></p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">How to compare your measurement</h2>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Measure correctly with a consistent method and conditions.</li>
          <li>Choose centimeters or inches and keep units consistent.</li>
          <li>Select the measurement type you are comparing: length or girth.</li>
          <li>Compare with global average values first.</li>
          <li>Use country comparison only as a secondary educational reference.</li>
        </ol>
        <p className="text-slate-700">You can apply these steps privately with the <Link className="text-brand-700 underline" href="/penis-size-calculator">penis size calculator</Link> and review distribution context on the <Link className="text-brand-700 underline" href="/penis-size-percentile-calculator">penis size percentile calculator</Link>.</p>
        <p className="text-slate-700">For many users, the most useful outcome is perspective: understanding that variation is common and that averages are simply reference points. If comparison is increasing stress, take a pause and return to objective measurement and educational context.</p>
      </section>

      <section className="rounded-xl border border-blue-200 bg-blue-50 p-5 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Educational disclaimer</h2>
        <p className="text-slate-700">This page is for educational purposes only. It is not medical advice and should not be used to diagnose any condition. If you have concerns about your body, sexual function, development, pain, or health, consider speaking with a qualified healthcare professional.</p>
        <p className="text-sm text-slate-700">You can also review our <Link className="text-brand-700 underline" href="/privacy-policy">privacy policy</Link> or <Link className="text-brand-700 underline" href="/contact">contact</Link> us with feedback about this educational content.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
        {faqItems.map((item) => (
          <div key={item.q} className="space-y-1">
            <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
            <p className="text-slate-700">{item.a}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 text-center space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Compare privately and consistently</h2>
        <p className="text-slate-700">Use the calculator to compare length or girth against global reference values in centimeters or inches.</p>
        <Link href="/penis-size-calculator" className="inline-block rounded-md bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">Use the private penis size calculator</Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </article>
  );
}
