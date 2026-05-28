import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StrategicAd from '@/components/ads/StrategicAd';
import { createArticleJsonLd, createFaqJsonLd } from '@/lib/jsonLd';
import { siteConfig } from '@/lib/site';

const pagePath = '/penis-size-standard-deviation';
const pageUrl = `${siteConfig.siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: {
    absolute: 'Penis Size Standard Deviation | Average, Z-Score, and Percentile'
  },
  description:
    'Learn what penis size standard deviation means, how it relates to average, z-score, percentile estimates, measurement variation, and educational calculator results.'
};

const quickBullets = [
  'Average describes a central reference value.',
  'Standard deviation describes spread around that average.',
  'Z-score uses standard deviation to show distance from the average.',
  'Percentile estimates depend on average, standard deviation, and distribution assumptions.',
  'Small measurement errors can change statistical estimates.'
];

const keyFacts = [
  'Standard deviation is not the same as average.',
  'A z-score of 0 means a value is close to the reference average.',
  'Positive z-scores are above the reference average.',
  'Negative z-scores are below the reference average.',
  'Length and girth can have different statistical distributions.',
  'Country data is not used for standard deviation estimates on this site.',
  'Results are educational estimates, not clinical classifications.'
];

const commonMistakes = [
  'Thinking standard deviation is the average.',
  'Treating z-score as a personal grade.',
  'Assuming below average means abnormal.',
  'Comparing length and girth as if they use the same distribution.',
  'Ignoring measurement method.',
  'Using country rankings as percentile data.',
  'Reading estimates as diagnosis.'
];

const nextPages = [
  ['Your estimated percentile', '/penis-size-percentile-calculator', 'the penis size percentile calculator'],
  ['How percentiles work', '/how-penis-size-percentiles-work', 'the percentile explanation guide'],
  ['Whether you are above or below average', '/penis-size-calculator', 'the average comparison calculator'],
  ['Global average values', '/average-penis-size', 'the global average guide'],
  ['Country comparison', '/average-penis-size-by-country', 'the country comparison page'],
  ['Measurement instructions', '/how-to-measure', 'the measurement guide'],
  ['Data assumptions', '/methodology', 'the methodology page'],
  ['Source details', '/data-sources', 'the data sources page'],
  ['Statistical definitions', '/glossary', 'the glossary']
] as const;

const faqItems = [
  {
    q: 'What does penis size standard deviation mean?',
    a: 'It describes how spread out measurements are around a reference average. It helps place a measurement into statistical context.'
  },
  {
    q: 'Is standard deviation the same as average?',
    a: 'No. Average describes a central reference value, while standard deviation describes how much values vary around that average.'
  },
  {
    q: 'How does standard deviation affect percentile?',
    a: 'Standard deviation helps convert the difference from the average into a z-score, which can then be translated into an approximate percentile.'
  },
  {
    q: 'What is a z-score?',
    a: 'A z-score describes how far a measurement is from the reference average in standard-deviation units.'
  },
  {
    q: 'What does a z-score of 0 mean?',
    a: 'A z-score of 0 means the value is close to the reference average, before considering rounding and measurement uncertainty.'
  },
  {
    q: 'Is a positive z-score better?',
    a: 'No. A positive z-score only means the value is above the reference average. It is not a health rating or personal grade.'
  },
  {
    q: 'Can length and girth have different standard deviations?',
    a: 'Yes. Length and girth are different measurements and can have different averages, spreads, and distribution shapes.'
  },
  {
    q: 'Does country data affect standard deviation?',
    a: 'No. This site uses global reference assumptions for standard deviation and percentile estimates, not country rankings.'
  },
  {
    q: 'Can measuring incorrectly change a z-score?',
    a: 'Yes. Technique, unit choice, and rounding can change the measurement input, which can shift the z-score and percentile estimate.'
  },
  {
    q: 'Are standard deviation estimates exact?',
    a: 'No. They depend on reference data, measurement methods, rounding, and distribution assumptions, so they should be read as educational estimates.'
  },
  {
    q: 'Is below average still normal?',
    a: 'Often, yes. Below average means below a reference midpoint, not automatically abnormal. This site does not classify health.'
  },
  {
    q: 'Is this medical advice?',
    a: 'No. This page is educational only. For pain, development, function, body image distress, or health concerns, consider a qualified healthcare professional.'
  }
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

export default function PenisSizeStandardDeviationPage() {
  const currentYear = new Date().getFullYear();
  const articleJsonLd = createArticleJsonLd({
    headline: 'Penis Size Standard Deviation',
    description:
      'Educational guide explaining standard deviation, average, z-score, percentile estimates, distribution assumptions, measurement variation, and limitations.',
    path: pagePath
  });
  const faqJsonLd = createFaqJsonLd(faqItems);

  return (
    <article className="space-y-10">
      <JsonLd data={[articleJsonLd, faqJsonLd].filter(Boolean) as Record<string, unknown>[]} />

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-brand-50 to-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Statistics guide</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Penis Size Standard Deviation</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              A clear educational guide to standard deviation, average, z-score, percentile estimates, and why small measurement differences can change statistical context.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700 sm:text-sm">
              {['Educational', 'Statistics', 'Percentile context', 'No medical diagnosis'].map((badge) => (
                <span key={badge} className="rounded-full border border-slate-300 bg-white/90 px-3 py-1 shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="rounded-lg bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800" href="/penis-size-percentile-calculator">
                Try the Percentile Calculator
              </Link>
              <Link className="rounded-lg border border-brand-300 bg-white px-5 py-3 text-center font-semibold text-brand-800 hover:bg-brand-50" href="/how-penis-size-percentiles-work">
                Read How Percentiles Work
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/85 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Core idea</p>
            <p className="mt-3 text-3xl font-bold text-slate-950">Spread around average</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Standard deviation is a statistics term. It helps explain variation in a group without turning a measurement into a diagnosis or personal score.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Quick answer: what is penis size standard deviation?</h2>
        <p className="mt-3 text-slate-800">
          Standard deviation describes how spread out measurements are around an average. In a percentile estimate, standard deviation helps convert the difference between a measurement and the average into a z-score, which can then be translated into an approximate percentile. On this site, standard deviation is used only for educational statistical context, not medical diagnosis.
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

      <Section title="What does standard deviation mean?">
        <p className="text-slate-700">
          Standard deviation is a measure of dispersion. It describes how much individual values tend to spread out around an average. When many measurements are close to the average, the spread is narrower. When measurements vary widely, the spread is wider. For a penis size standard deviation discussion, the goal is not to label a person; the goal is to describe variation in a reference group.
        </p>
        <p className="text-slate-700">
          Values near the average have a smaller statistical distance from the center of the reference data. Values farther from the average have a larger statistical distance. That distance can be summarized with a z-score, then interpreted as an approximate percentile if the distribution assumption is suitable. None of those steps creates a medical diagnosis, a quality judgment, or a personal grade.
        </p>
      </Section>

      <Section title="Average vs standard deviation">
        <p className="text-slate-700">
          The average is a central reference value. Standard deviation is the variation around that reference value. Average penis size data can tell you where the center of a study or pooled reference sits, but the average alone does not show the normal penis size range or how measurements are distributed around the center.
        </p>
        <p className="text-slate-700">
          Two measurements can differ by a small amount in centimeters or inches, yet their statistical interpretation depends on the spread of the data. If two values are close to the average, their percentile estimates may also be near the middle. If a value is farther from the average relative to the spread of the data, the estimated percentile moves farther from the middle.
        </p>
      </Section>

      <Section title="How standard deviation connects to z-score">
        <p className="text-slate-700">
          In simple text, the formula is: z-score = (measurement - average) / standard deviation. The measurement is the value being compared, the average is the reference center, and the standard deviation is the spread used to express that difference in statistical units.
        </p>
        <p className="text-slate-700">
          A penis size z-score of 0 means the value is close to the reference average. A positive z-score means the value is above the reference average. A negative z-score means the value is below the reference average. Z-score is useful because it compares distance from the average after considering spread, but it is still a statistical estimate rather than a diagnosis.
        </p>
      </Section>

      <Section title="How standard deviation connects to percentile">
        <p className="text-slate-700">
          A percentile is an estimated position in a distribution. After a z-score is estimated, it can be translated into an approximate percentile using a distribution model. The 50th percentile sits near the center of a balanced reference distribution, while values above or below the center move to higher or lower percentile estimates.
        </p>
        <p className="text-slate-700">
          Percentiles at the extremes are more sensitive to assumptions than percentiles near the middle. If the standard deviation used in a model changes, the same measurement can produce a different percentile estimate. The guide on <Link className="text-brand-700 underline" href="/how-penis-size-percentiles-work">how penis size percentiles work</Link> explains this relationship in more detail.
        </p>
      </Section>

      <Section title="Why standard deviation matters for a size calculator">
        <p className="text-slate-700">
          A calculator does not only compare the raw difference in centimeters or inches. Penis size calculator statistics depend on both the reference average and the spread around that average. A small difference near the center may have a different interpretation from a larger difference farther away from the center.
        </p>
        <p className="text-slate-700">
          Rounding can also matter. A rounded input may shift the z-score slightly, especially when the value is near a percentile boundary. Incorrect measurement can create a larger shift. Use the <Link className="text-brand-700 underline" href="/penis-size-percentile-calculator">penis size percentile calculator</Link> as an educational estimator, not as a clinically precise instrument.
        </p>
      </Section>

      <StrategicAd type="native" className="rounded-2xl border border-slate-100 bg-white p-2" />

      <Section title="Standard deviation and normal variation">
        <p className="text-slate-700">
          Natural variation exists in human anatomy. Being below a reference average does not automatically mean something is abnormal, and being above a reference average does not mean better health. Standard deviation helps describe how group measurements vary; it does not define personal value or individual health.
        </p>
        <p className="text-slate-700">
          Percentile should be read as context. It can answer a narrow statistical question, but it cannot answer broader questions about confidence, function, relationships, or wellbeing. If anxiety is the main concern, the <Link className="text-brand-700 underline" href="/is-my-penis-small">Is My Penis Small?</Link> guide may be a calmer next page.
        </p>
      </Section>

      <Section title="Length, girth, and different distributions">
        <p className="text-slate-700">
          Length and girth are different metrics. Each can have its own average, standard deviation, and distribution shape. Girth means circumference around the shaft, not straight-line width. Because the measurements describe different things, a length percentile and a girth percentile should not be mixed as if they came from one shared distribution.
        </p>
        <p className="text-slate-700">
          This site does not use country comparison for girth. Country-level comparison is limited to erect length, while girth uses global reference context. Read more about <Link className="text-brand-700 underline" href="/average-penis-girth">average penis girth</Link> and use the <Link className="text-brand-700 underline" href="/how-to-measure">measurement guide</Link> before entering values.
        </p>
      </Section>

      <Section title="Does country data affect standard deviation?">
        <p className="text-slate-700">
          On this site, standard deviation and percentile estimates use global reference assumptions. Country data is used separately as a secondary comparison for erect length. Mixing country rankings with a global percentile model could create false precision because the sources, samples, and measurement methods may not match.
        </p>
        <p className="text-slate-700">
          Country should not be treated as an input that recalculates standard deviation on this page. For country context, see the <Link className="text-brand-700 underline" href="/average-penis-size-by-country">average penis size by country</Link> page. For source scope and limitations, review the <Link className="text-brand-700 underline" href="/data-sources">data sources</Link> page.
        </p>
      </Section>

      <Section title="Why standard deviation estimates are not exact">
        <p className="text-slate-700">
          Standard deviation estimates are not exact because studies can use different samples, inclusion criteria, measurement methods, and rounding practices. Real biological data may not be perfectly normal, and a simple model may not capture every feature of the true penis size distribution.
        </p>
        <p className="text-slate-700">
          Country data has additional limitations because compiled rankings may combine sources with different methods. Even within global reference data, rounded values can alter estimates. The safest interpretation is that the calculator is educational and non-clinical. The <Link className="text-brand-700 underline" href="/methodology">methodology</Link> page explains the site assumptions, while the <Link className="text-brand-700 underline" href="/glossary">glossary</Link> defines common terms.
        </p>
      </Section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Common mistakes when interpreting standard deviation</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {commonMistakes.map((mistake) => (
            <div key={mistake} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm">
              {mistake}
            </div>
          ))}
        </div>
      </section>

      <Section title="How measurement method affects standard deviation context">
        <p className="text-slate-700">
          Standard deviation is statistical, but the input still needs to be measured carefully. Bone-pressed and non-bone-pressed length can produce different length values because they use different starting points. If the method changes, the measurement changes, and the z-score and percentile estimate can shift.
        </p>
        <p className="text-slate-700">
          Girth should be measured with a flexible tape around the circumference, not estimated visually. Units should be consistent, and unnecessary rounding should be avoided. Review <Link className="text-brand-700 underline" href="/how-to-measure">how to measure</Link> and the <Link className="text-brand-700 underline" href="/bone-pressed-vs-non-bone-pressed">bone-pressed vs non-bone-pressed</Link> guide before using calculator results as context.
        </p>
      </Section>

      <Section title="How to use standard deviation calmly">
        <p className="text-slate-700">
          Use standard deviation as context, not as identity. It can help explain why a measurement is near or far from a reference average, but it should not become a reason for repeated checking or comparison. A percentile is a statistical estimate about a measurement, not a statement about worth.
        </p>
        <p className="text-slate-700">
          If there is persistent distress, pain, development concern, function concern, or another health question, consider speaking with a qualified healthcare professional. Educational calculators can support understanding, but they are not a replacement for individualized medical guidance.
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

      <Section title="Private statistical comparison">
        <p className="text-slate-700">
          The calculator runs in the browser, does not require an account, and does not require sending a photo. Measurements are not intentionally stored by the site as user profiles. This keeps the comparison private and focused on education rather than long-term tracking.
        </p>
        <p className="text-slate-700">
          The contact form should not be used for sensitive medical details. If you need to understand what information the site collects, read the <Link className="text-brand-700 underline" href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </Section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Educational disclaimer</h2>
        <p className="mt-3 text-slate-800">
          This page is for educational purposes only. It is not medical advice, diagnosis, or treatment. Standard deviation, z-score, and percentile estimates should be used as statistical context, not as health classifications. If you have concerns about pain, development, sexual function, body image distress, or health, consider speaking with a qualified healthcare professional.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-2xl font-semibold text-slate-900">How to cite this page</h2>
        <p className="text-slate-700">
          Average Size Calculator. “Penis Size Standard Deviation.” Average Size Calculator, {pageUrl}. Accessed {currentYear}.
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
        <h2 className="text-2xl font-semibold">Ready to estimate statistical context?</h2>
        <p className="mt-3 max-w-3xl text-slate-200">
          Use the private percentile calculator for an educational estimate, then read the percentile guide to understand the average, z-score, and standard deviation assumptions behind the result.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link className="rounded-lg bg-white px-5 py-3 text-center font-semibold text-slate-900 hover:bg-slate-100" href="/penis-size-percentile-calculator">
            Try the Percentile Calculator
          </Link>
          <Link className="rounded-lg border border-slate-500 px-5 py-3 text-center font-semibold text-white hover:bg-slate-800" href="/how-penis-size-percentiles-work">
            Read How Percentiles Work
          </Link>
        </div>
      </section>
    </article>
  );
}
