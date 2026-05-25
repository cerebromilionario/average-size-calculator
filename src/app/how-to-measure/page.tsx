import type { Metadata } from 'next';
import Link from 'next/link';
import { GLOBAL_AVERAGES_CM } from '@/data/penisSizeAverages';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'How to Measure Penis Size Correctly | Length and Girth Guide',
  description:
    'Learn how to measure penis length and girth correctly in centimeters or inches. Follow a private, educational guide before using the size calculator.'
};

const toInches = (cm: number) => cm / 2.54;

export default function Page() {
  const faqItems = [
    {
      q: 'How do you measure penis size correctly?',
      a: 'Use a consistent method: measure erect length from pubic bone to tip along the top side, measure girth around the thickest area with a flexible tape, and keep units consistent.'
    },
    {
      q: 'Should length be measured from the top or underside?',
      a: 'Length should be measured along the top side. This method is more consistent for educational comparisons and matches common research protocols.'
    },
    {
      q: 'Should I measure in centimeters or inches?',
      a: 'Either is fine. Use one unit consistently when entering values into the calculator so your comparison remains accurate.'
    },
    {
      q: 'How do you measure erect girth?',
      a: 'Wrap a flexible tape around the thickest part of the shaft, keep it level, and avoid pulling tightly so the number reflects true circumference.'
    },
    {
      q: 'Why does flaccid length vary so much?',
      a: 'Flaccid length changes with temperature, stress, activity, and time of day. Variation is common, so this value should be interpreted more cautiously.'
    },
    {
      q: 'Should I measure more than once?',
      a: 'Yes. Taking two to three measurements under similar conditions and using a typical value improves reliability.'
    },
    {
      q: 'Can measuring incorrectly affect the calculator result?',
      a: 'Yes. Small measurement errors can change percent differences and interpretation, especially when values are close to the average.'
    },
    {
      q: 'Is this measurement guide medical advice?',
      a: 'No. This guide is educational only and does not diagnose or treat health conditions.'
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

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Measure Penis Size Correctly',
    description: 'A private educational guide for measuring length and girth in centimeters or inches.',
    totalTime: 'PT10M',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Prepare measurement tools',
        text: 'Prepare a rigid ruler or straight measuring tape for length and a flexible measuring tape for girth in a private, comfortable setting.'
      },
      {
        '@type': 'HowToStep',
        name: 'Measure erect length',
        text: 'Measure erect length from the pubic bone at the base to the tip along the top side using a straight ruler.'
      },
      {
        '@type': 'HowToStep',
        name: 'Measure erect girth',
        text: 'Measure erect girth by wrapping a flexible tape around the thickest part and recording the circumference without overtightening.'
      },
      {
        '@type': 'HowToStep',
        name: 'Measure flaccid length',
        text: 'Measure flaccid length from the pubic bone to the tip using the same top-side method, understanding this value varies more naturally.'
      },
      {
        '@type': 'HowToStep',
        name: 'Enter values with the correct unit',
        text: 'Enter your values into the calculator in centimeters or inches, keeping units consistent for accurate comparison.'
      }
    ]
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Measure Penis Size Correctly',
    description:
      'Learn how to measure penis length and girth correctly in centimeters or inches. Follow a private, educational guide before using the size calculator.',
    author: {
      '@type': 'Organization',
      name: 'Average Size Calculator'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Average Size Calculator'
    },
    mainEntityOfPage: `${siteConfig.siteUrl}/how-to-measure`,
    dateModified: new Date().toISOString()
  };

  return (
    <article className="space-y-10">
      <section className="space-y-5 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How to Measure Penis Size Correctly</h1>
        <p className="max-w-3xl text-base text-slate-700 sm:text-lg">A private, educational guide to measuring length and girth before comparing your result with average size data.</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/penis-size-calculator" className="rounded-md bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800">
            Use the Penis Size Calculator
          </Link>
          <Link href="/average-penis-size" className="rounded-md border border-slate-300 px-5 py-3 text-center font-semibold text-slate-800 hover:bg-slate-100">
            Learn About Average Penis Size
          </Link>
        </div>
        <p className="text-sm text-slate-600">Accurate measurement matters. Small measurement differences can change the comparison result.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Quick measurement guide</h2>
        <div className="overflow-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="px-4 py-3">Measurement</th>
                <th className="px-4 py-3">How to measure</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Erect length</td>
                <td className="px-4 py-3">Measure from the pubic bone at the base to the tip along the top side.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Erect girth</td>
                <td className="px-4 py-3">Wrap a flexible measuring tape around the thickest part of the shaft.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Flaccid length</td>
                <td className="px-4 py-3">Measure from the pubic bone at the base to the tip while flaccid.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-700">Use either centimeters or inches, but keep the same unit when entering your result into the calculator.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">What you need</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>A rigid ruler or straight measuring tape for length.</li>
          <li>A flexible measuring tape for girth (circumference).</li>
          <li>A private, comfortable setting where you can measure calmly.</li>
          <li>Enough time to take measurements carefully without rushing.</li>
          <li>A simple way to record values immediately to avoid memory errors.</li>
        </ul>
        <p className="text-slate-700">Avoid visual estimates. Estimation is often less accurate than direct measurement, and even small errors can affect the comparison output.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">How to measure erect length</h2>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Use a rigid ruler or straight measuring tape.</li>
          <li>Place the ruler on the top side.</li>
          <li>Press gently to the pubic bone at the base.</li>
          <li>Measure to the tip.</li>
          <li>Record the value in cm or inches.</li>
        </ol>
        <p className="text-slate-700">Measuring from skin level only, without gentle pressure to the pubic bone, may underestimate length in people with more pubic fat tissue. Using the bone-pressed method improves consistency across body types and time points.</p>
        <p className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">The calculator&apos;s country comparison currently uses erect length data, so this is the most important measurement to take consistently.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">How to measure erect girth</h2>
        <p className="text-slate-700">Girth means circumference around the shaft. Use a flexible measuring tape and place it around the thickest section while keeping the tape level and flat against the skin.</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Measure around the thickest part, not diagonally.</li>
          <li>Do not pull the tape too tight; it should be snug but not compressing tissue.</li>
          <li>Write down the number in centimeters or inches immediately.</li>
        </ul>
        <p className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">The calculator compares erect girth with a global average only. Country-level girth data is not available in the current dataset.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">How to measure flaccid length</h2>
        <p className="text-slate-700">Measure from the base to the tip using the same top-side method used for erect length. A consistent method matters because flaccid values naturally fluctuate more across different conditions.</p>
        <p className="text-slate-700">Flaccid length can vary with temperature, stress, recent physical activity, and time of day. Because of this, it is best interpreted as a range rather than a fixed constant, and repeated measurements are usually more useful than a single reading.</p>
        <p className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">The calculator compares flaccid length with a global average only. Country-level flaccid length data is not available in the current dataset.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Centimeters or inches?</h2>
        <p className="text-slate-700">You can measure in centimeters or inches. The calculator supports both units and converts automatically. The key is to avoid mixing units for a single entry.</p>
        <p className="text-slate-700">Reference conversion: 1 inch = 2.54 cm.</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>13.12 cm is about 5.16 inches.</li>
          <li>11.66 cm is about 4.59 inches.</li>
        </ul>
        <p className="text-slate-700">For additional context, global average references currently used by this site are {GLOBAL_AVERAGES_CM.erectLength.toFixed(2)} cm ({toInches(GLOBAL_AVERAGES_CM.erectLength).toFixed(2)} inches) for erect length, {GLOBAL_AVERAGES_CM.erectGirth.toFixed(2)} cm ({toInches(GLOBAL_AVERAGES_CM.erectGirth).toFixed(2)} inches) for erect girth, and {GLOBAL_AVERAGES_CM.flaccidLength.toFixed(2)} cm ({toInches(GLOBAL_AVERAGES_CM.flaccidLength).toFixed(2)} inches) for flaccid length.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Common measurement mistakes</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Measuring from the underside instead of the top side.',
            'Not pressing to the pubic bone.',
            'Using a soft tape for length in a curved way.',
            'Pulling the tape too tight for girth.',
            'Mixing centimeters and inches.',
            'Comparing flaccid measurements as if they were stable.',
            'Rounding too aggressively.',
            'Measuring once and assuming the result is exact.'
          ].map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">What to do after measuring</h2>
        <p className="text-slate-700">Start by comparing against global averages. This gives a stable baseline that is generally easier to interpret than narrow differences between data sources.</p>
        <p className="text-slate-700">Use country comparison only for erect length, because country data in this tool is compiled for erect length specifically. Girth and flaccid length comparisons are global-only in the current dataset.</p>
        <p className="text-slate-700">Remember that an average is a statistical reference, not a diagnosis. Small differences rarely have practical meaning, and natural variation is common.</p>
        <p>
          <Link className="font-medium text-brand-700 underline" href="/penis-size-calculator">
            Compare your measurement privately
          </Link>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Private measurement and calculation</h2>
        <p className="text-slate-700">You do not need an account to use this site. Measurements can be entered anonymously, and the calculator is designed to run privately in your browser.</p>
        <p className="text-slate-700">Your measurement is personal. The calculator is designed to work privately in your browser and does not need to store your input.</p>
        <p className="text-slate-700">If you want to learn more about data handling, see our <Link className="text-brand-700 underline" href="/privacy-policy">privacy policy</Link>. If you need help or want to report a content issue, use the <Link className="text-brand-700 underline" href="/contact">contact page</Link>.</p>
      </section>

      <section className="rounded-xl border border-blue-200 bg-blue-50 p-5 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Educational disclaimer</h2>
        <p className="text-slate-700">This guide is for educational purposes only. It is not medical advice and should not be used to diagnose any condition. If you have concerns about pain, sexual function, development, or health, consider speaking with a qualified healthcare professional.</p>
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
        <h2 className="text-2xl font-semibold text-slate-900">Ready to compare?</h2>
        <p className="text-slate-700">Use a consistent method, then compare your measurement with global data and country erect-length context.</p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/penis-size-calculator" className="rounded-md bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">Use the Penis Size Calculator</Link>
          <Link href="/average-penis-size-by-country" className="rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-100">Explore average penis size by country</Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </article>
  );
}
