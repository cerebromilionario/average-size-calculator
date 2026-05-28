import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StrategicAd from '@/components/ads/StrategicAd';
import { GLOBAL_AVERAGES_CM } from '@/data/penisSizeAverages';
import { siteConfig } from '@/lib/site';
import { createArticleJsonLd, createFaqJsonLd } from '@/lib/jsonLd';

const pagePath = '/how-penis-size-percentiles-work';
const pageUrl = `${siteConfig.siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: {
    absolute: 'How Penis Size Percentiles Work | Percentile, Z-Score, and Average'
  },
  description:
    'Learn how penis size percentiles work, what percentile means, how z-score and standard deviation are used, and how to interpret results as educational estimates.'
};

const faqItems = [
  {
    q: 'What does penis size percentile mean?',
    a: 'It means an estimated position within a reference distribution. It is statistical context, not a health rating or personal grade.'
  },
  {
    q: 'What is the 50th percentile?',
    a: 'The 50th percentile is near the middle of the reference distribution and is often close to the average in a balanced distribution.'
  },
  {
    q: 'Is a higher percentile better?',
    a: 'No. A higher percentile simply means a measurement is higher within the reference distribution. It does not mean better health or higher value.'
  },
  {
    q: 'How is percentile estimated?',
    a: 'The calculator compares a measurement with a global reference average, estimates a z-score, and converts that z-score into an approximate percentile.'
  },
  {
    q: 'What is a z-score?',
    a: 'A z-score describes how many standard deviations a measurement is above or below the reference average.'
  },
  {
    q: 'What is standard deviation?',
    a: 'Standard deviation describes how spread out values are around the average. It helps translate a difference in centimeters or inches into statistical context.'
  },
  {
    q: 'Can length and girth have different percentiles?',
    a: 'Yes. Length and girth are separate measurements with separate reference averages, so their percentile estimates can differ.'
  },
  {
    q: 'Does the percentile calculator use country data?',
    a: 'No. The percentile calculator uses global reference data rather than country data to avoid mixing datasets with different methods.'
  },
  {
    q: 'Can measuring incorrectly change my percentile?',
    a: 'Yes. Inconsistent technique, rounding, or unit conversion mistakes can shift a percentile estimate, especially near the average.'
  },
  {
    q: 'Is below the 50th percentile still normal?',
    a: 'Often, yes. Below 50 means below the reference midpoint, not automatically abnormal. This site does not provide diagnoses.'
  },
  {
    q: 'Are percentile results exact?',
    a: 'No. Percentile results are educational estimates based on reference data and statistical assumptions, not exact clinical classifications.'
  },
  {
    q: 'Is this medical advice?',
    a: 'No. This page is educational only. For health, pain, development, function, or body image concerns, consider a qualified healthcare professional.'
  }
];

const quickBullets = [
  'Percentile describes position in a reference distribution.',
  'The 50th percentile is close to the average.',
  'Z-score helps estimate how far a value is from the average.',
  'Measurement method can change the result.',
  'Percentile is context, not a personal score or health diagnosis.'
];

const keyFacts = [
  'This site uses global reference averages for percentile estimates.',
  'Percentile estimates depend on average, standard deviation, and distribution assumptions.',
  'Length and girth can have different percentiles.',
  'Country data is not used for the percentile calculator.',
  'Small measurement errors can shift percentile estimates.',
  'Percentiles are educational estimates, not clinical classifications.'
];

const commonMistakes = [
  'Treating percentile as a personal grade.',
  'Assuming below 50 means abnormal.',
  'Comparing length percentile with girth percentile.',
  'Using inconsistent measurement methods.',
  'Ignoring rounding and unit conversion.',
  'Comparing global percentiles with country rankings.',
  'Reading an estimate as a diagnosis.'
];

const nextPages = [
  ['Your estimated percentile', '/penis-size-percentile-calculator', 'the percentile calculator'],
  ['Whether you are above or below average', '/penis-size-calculator', 'the comparison calculator'],
  ['Global average values', '/average-penis-size', 'the average size guide'],
  ['Country comparison', '/average-penis-size-by-country', 'the country comparison table'],
  ['Measurement instructions', '/how-to-measure', 'the measurement guide'],
  ['Data assumptions', '/methodology', 'the methodology page'],
  ['Source details', '/data-sources', 'the data sources page']
] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

export default function HowPenisSizePercentilesWorkPage() {
  const currentYear = new Date().getFullYear();
  const articleJsonLd = createArticleJsonLd({
    headline: 'How Penis Size Percentiles Work',
    description:
      'Educational guide explaining percentile, average, z-score, standard deviation, distribution assumptions, measurement limits, and calm interpretation of percentile estimates.',
    path: pagePath
  });
  const faqJsonLd = createFaqJsonLd(faqItems);

  return (
    <article className="space-y-10">
      <JsonLd data={[articleJsonLd, faqJsonLd].filter(Boolean) as Record<string, unknown>[]} />

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-brand-50 to-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Percentile guide</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">How Penis Size Percentiles Work</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              A clear educational guide to percentile, average, z-score, standard deviation, and why results should be interpreted as estimates rather than medical judgments.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700 sm:text-sm">
              {['Educational', 'Statistical context', 'Private calculator', 'No medical diagnosis'].map((badge) => (
                <span key={badge} className="rounded-full border border-slate-300 bg-white/90 px-3 py-1 shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="rounded-lg bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800" href="/penis-size-percentile-calculator">
                Try the Percentile Calculator
              </Link>
              <Link className="rounded-lg border border-brand-300 bg-white px-5 py-3 text-center font-semibold text-brand-800 hover:bg-brand-50" href="/methodology">
                Read the Methodology
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/85 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Reference midpoint</p>
            <p className="mt-3 text-3xl font-bold text-slate-950">50th percentile</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Near the center of a reference distribution. Useful for context, but not a judgment about health, worth, or quality.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Quick answer: how do penis size percentiles work?</h2>
        <p className="mt-3 text-slate-800">
          A penis size percentile estimates where a measurement falls within a reference distribution. The 50th percentile is near the middle of the reference data, values above 50 are above that reference midpoint, and values below 50 are below it. Percentiles on this site are educational estimates based on global reference data and statistical assumptions, not medical diagnoses.
        </p>
        <ul className="mt-4 grid gap-2 text-slate-800 sm:grid-cols-2">
          {quickBullets.map((item) => (
            <li key={item} className="rounded-xl border border-blue-100 bg-white px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Key facts</h2>
        <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
          {keyFacts.map((fact) => (
            <li key={fact} className="rounded-xl bg-slate-50 p-4">
              {fact}
            </li>
          ))}
        </ul>
      </section>

      <Section title="What does percentile mean?">
        <p className="text-slate-700">
          A percentile is a relative position inside a reference distribution. If a calculator says a value is around a certain penis size percentile, it is estimating where that measurement sits compared with the reference values used by the calculator. It is not measuring personal worth, attractiveness, health, or quality.
        </p>
        <p className="text-slate-700">
          The 50th percentile means a measurement is near the center of the reference data. The 75th percentile means the value is above a larger share of the reference distribution. The 25th percentile means the value is below the center of that same reference distribution. These are position labels, not value judgments.
        </p>
        <p className="text-slate-700">
          This is why the question “what does penis size percentile mean” should be answered statistically. Percentile is context. It helps translate a measurement into a distribution position, but it does not say whether a person is healthy or whether a measurement is clinically important.
        </p>
      </Section>

      <Section title="What is the 50th percentile?">
        <p className="text-slate-700">
          The 50th percentile is the point near the middle of a reference distribution. In a balanced distribution, it is usually close to the average or median. For an average penis size percentile estimate, values around the reference average often appear close to the 50th percentile, although rounding and distribution assumptions can create small differences.
        </p>
        <p className="text-slate-700">
          The global average erect length used by this site is {GLOBAL_AVERAGES_CM.erectLength.toFixed(2)} cm / 5.16 in. The global average erect girth used by this site is {GLOBAL_AVERAGES_CM.erectGirth.toFixed(2)} cm / 4.59 in. These values are educational references, not clinical cutoffs.
        </p>
        <p className="text-slate-700">
          For a broader explanation of average values, read the <Link className="text-brand-700 underline" href="/average-penis-size">average penis size</Link> guide. The important idea is simple: the 50th percentile penis size is near the reference midpoint, not a requirement or goal.
        </p>
      </Section>

      <Section title="How the percentile calculator estimates results">
        <p className="text-slate-700">
          The <Link className="text-brand-700 underline" href="/penis-size-percentile-calculator">penis size percentile calculator</Link> follows a practical statistical workflow. First, the user enters a measurement. Next, the user chooses the unit, such as centimeters or inches, and selects the metric being compared, such as length or girth.
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Measurements entered in inches are converted to centimeters when needed.</li>
          <li>The converted value is compared with the global reference average for that metric.</li>
          <li>A penis size z-score is estimated from the measurement, average, and standard deviation.</li>
          <li>The z-score is converted into an approximate percentile estimate.</li>
          <li>The result is displayed as educational context rather than as a medical judgment.</li>
        </ol>
        <p className="text-slate-700">
          The process is designed to explain distribution position clearly. It is not designed to produce a clinical classification, and it should not be used as a substitute for professional advice.
        </p>
      </Section>

      <Section title="What is a z-score?">
        <p className="text-slate-700">The basic formula is: z-score = (measurement - average) / standard deviation.</p>
        <p className="text-slate-700">
          A z-score of 0 means the measurement is close to the reference average. A positive z-score means the measurement is above the average. A negative z-score means the measurement is below the average. The farther the z-score is from 0, the farther the value is from the average in standard-deviation units.
        </p>
        <p className="text-slate-700">
          This is useful because a difference of 1 cm does not always have the same statistical meaning. A z-score translates an absolute difference into distribution context, which is then used to estimate percentile.
        </p>
      </Section>

      <StrategicAd type="native" className="rounded-2xl border border-slate-100 bg-white p-2" />

      <Section title="Why standard deviation matters">
        <p className="text-slate-700">
          Standard deviation describes how spread out measurements are around the average. If values are tightly grouped, a small difference from the average can move a percentile estimate more. If values are widely spread, the same difference may have a smaller percentile effect.
        </p>
        <p className="text-slate-700">
          This is why penis size standard deviation is part of a percentile estimate. Two people may differ by a small number of centimeters, but the percentile impact depends on the spread of the reference distribution. Percentiles near the extremes are especially sensitive because fewer observations sit in those tails of the distribution.
        </p>
        <p className="text-slate-700">
          Standard deviation is a statistical tool, not a diagnosis. For plain-language definitions, see the <Link className="text-brand-700 underline" href="/glossary">Glossary</Link>.
        </p>
      </Section>

      <Section title="Percentile is not the same as average">
        <p className="text-slate-700">
          Average and percentile answer different questions. Average describes a central value in a dataset. Percentile describes relative position inside the reference distribution. A person can be close to the average and still not be exactly at the 50th percentile because real values, rounded values, and modeled distributions do not always line up perfectly.
        </p>
        <p className="text-slate-700">
          Measurement method also matters. If one measurement is bone-pressed and another is non-bone-pressed, they should not be treated as identical. If one value is rounded heavily, the percentile estimate may change. Percentile is best read as a range-like educational estimate, not a precise identity.
        </p>
      </Section>

      <Section title="Length percentile vs girth percentile">
        <p className="text-slate-700">
          Length and girth are different measurements, so they can have different percentile estimates. A length percentile describes position for length. A girth percentile describes position for circumference. Girth means the distance around the shaft, not straight-line width.
        </p>
        <p className="text-slate-700">
          Because the averages and standard deviations are different, a measurement can be closer to the middle for one metric and farther from the middle for another. Review <Link className="text-brand-700 underline" href="/average-penis-girth">average penis girth</Link> for circumference context and <Link className="text-brand-700 underline" href="/how-to-measure">how to measure</Link> for technique. Country is not used for girth percentile estimates on this site.
        </p>
      </Section>

      <Section title="Does country affect percentile?">
        <p className="text-slate-700">
          On this site, percentile uses a global reference. Country data is used in the main calculator only for erect length comparison, and country comparison is secondary context. Country is not used to estimate percentile on this page or in the percentile calculator.
        </p>
        <p className="text-slate-700">
          This separation avoids mixing datasets with different sampling methods, measurement protocols, and quality levels. You can review country context on the <Link className="text-brand-700 underline" href="/average-penis-size-by-country">average penis size by country</Link> page and source scope on the <Link className="text-brand-700 underline" href="/data-sources">data sources</Link> page.
        </p>
      </Section>

      <Section title="Why percentile results are estimates">
        <p className="text-slate-700">
          A percentile estimate depends on reference studies, sample composition, measurement method, unit conversion, standard deviation, and the assumption that the distribution can be approximated in a useful way. Real biological data may not be perfectly normal, and source studies do not all use identical methods.
        </p>
        <p className="text-slate-700">
          Percentiles at the extremes are less stable than percentiles near the middle. Small rounding differences, such as entering a rounded inch value rather than a more precise centimeter value, can also change the output. The result should be interpreted as educational context, not as an exact clinical number.
        </p>
      </Section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Common mistakes when reading percentiles</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {commonMistakes.map((mistake) => (
            <div key={mistake} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm">
              {mistake}
            </div>
          ))}
        </div>
      </section>

      <Section title="How to measure before using a percentile calculator">
        <p className="text-slate-700">
          Measure carefully before comparing. Length requires a consistent method from the same starting point to the same endpoint. Bone-pressed and non-bone-pressed length can produce different values, so the method should match the reference or be interpreted cautiously.
        </p>
        <p className="text-slate-700">
          Girth should be measured with a flexible tape around the shaft, using gentle contact rather than excessive pressure. Keep the unit consistent, avoid unnecessary rounding, and consider repeating the measurement if the first reading seems uncertain. The <Link className="text-brand-700 underline" href="/how-to-measure">measurement guide</Link> and <Link className="text-brand-700 underline" href="/bone-pressed-vs-non-bone-pressed">bone-pressed vs non-bone-pressed</Link> explanation can help.
        </p>
      </Section>

      <Section title="How to interpret your percentile calmly">
        <p className="text-slate-700">
          Percentile is context. Being below the reference average does not automatically mean there is a problem, and being above the reference average does not mean better health. The most useful interpretation is usually broad perspective: where a measurement sits in a distribution and how much uncertainty surrounds that estimate.
        </p>
        <p className="text-slate-700">
          If concern persists, or if there are questions about pain, development, function, health, or body image distress, consider speaking with a qualified healthcare professional. Avoid compulsive comparison. The <Link className="text-brand-700 underline" href="/is-my-penis-small">Is My Penis Small?</Link> guide may be a better next step for anxiety-focused reading.
        </p>
      </Section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Which page should you use next?</h2>
        <div className="overflow-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="px-4 py-3 font-semibold">If you want to know...</th>
                <th className="px-4 py-3 font-semibold">Use this page</th>
              </tr>
            </thead>
            <tbody>
              {nextPages.map(([need, href, label]) => (
                <tr key={href} className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-700">{need}</td>
                  <td className="px-4 py-3">
                    <Link className="font-medium text-brand-700 underline" href={href}>
                      {label}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Section title="Private percentile calculation">
        <p className="text-slate-700">
          The calculator runs in the browser, does not require an account, and does not require sending a photo. Measurements are not intentionally stored by the site as user profiles. This privacy-focused design supports quick educational comparison without creating unnecessary records.
        </p>
        <p className="text-slate-700">
          The contact form should not be used to send sensitive medical details. For more information, read the <Link className="text-brand-700 underline" href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </Section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Educational disclaimer</h2>
        <p className="mt-3 text-slate-800">
          This page is for educational purposes only. It is not medical advice, diagnosis, or treatment. Percentile estimates should be used as statistical context, not as a health classification. If you have concerns about pain, development, sexual function, body image distress, or health, consider speaking with a qualified healthcare professional.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-2xl font-semibold text-slate-900">How to cite this page</h2>
        <p className="text-slate-700">
          Average Size Calculator. “How Penis Size Percentiles Work.” Average Size Calculator, {pageUrl}. Accessed {currentYear}.
        </p>
      </section>

      <StrategicAd type="rectangle" className="rounded-2xl border border-slate-100 bg-white p-2" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
        <div className="grid gap-3">
          {faqItems.map((item) => (
            <details key={item.q} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-3 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-slate-900 p-6 text-white sm:p-8">
        <h2 className="text-2xl font-semibold">Ready to estimate your percentile?</h2>
        <p className="mt-3 max-w-3xl text-slate-200">
          Use the private calculator for an educational percentile estimate, then review the methodology if you want to understand the assumptions behind the result.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link className="rounded-lg bg-white px-5 py-3 text-center font-semibold text-slate-900 hover:bg-slate-100" href="/penis-size-percentile-calculator">
            Try the Percentile Calculator
          </Link>
          <Link className="rounded-lg border border-slate-500 px-5 py-3 text-center font-semibold text-white hover:bg-slate-800" href="/methodology">
            Read the Methodology
          </Link>
        </div>
      </section>
    </article>
  );
}
