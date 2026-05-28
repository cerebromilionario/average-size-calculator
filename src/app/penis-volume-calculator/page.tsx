import type { Metadata } from 'next';
import Link from 'next/link';
import PenisVolumeCalculator from '@/components/PenisVolumeCalculator';
import JsonLd from '@/components/JsonLd';
import StrategicAd from '@/components/ads/StrategicAd';
import { createArticleJsonLd, createFaqJsonLd, createWebApplicationJsonLd } from '@/lib/jsonLd';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Penis Volume Calculator | Estimate Volume from Length and Girth',
  description:
    'Use this private educational penis volume calculator to estimate approximate volume from length and girth using a simple cylinder formula in cm³, mL, and cubic inches.'
};

const faqItems = [
  {
    q: 'What is a penis volume calculator?',
    a: 'It is an educational tool that estimates approximate geometric volume from length and girth using a simplified cylinder model.'
  },
  {
    q: 'How is penis volume estimated?',
    a: 'The calculator treats girth as circumference, converts circumference into radius, and applies a cylinder volume formula.'
  },
  {
    q: 'What formula does this calculator use?',
    a: 'It uses volume = length × girth² / (4π), which is equivalent to π × radius² × length after converting circumference to radius.'
  },
  {
    q: 'Is girth the same as width?',
    a: 'No. Girth means circumference around the shaft. Width is a straight-line distance and should not be entered as girth.'
  },
  {
    q: 'Why does girth affect volume so much?',
    a: 'Girth is squared in the formula, so small changes in circumference can produce larger changes in estimated volume.'
  },
  {
    q: 'Is volume a medical measurement?',
    a: 'No. On this site, volume is a geometric estimate for educational context and is not a clinical measurement or health score.'
  },
  {
    q: 'Can I compare volume with average penis size?',
    a: 'This site does not use a validated average volume dataset. For average comparisons, use length and girth tools instead.'
  },
  {
    q: 'Does country data apply to volume?',
    a: 'No. Country data on this site applies only to erect length, not to volume, girth, or flaccid length.'
  },
  {
    q: 'Can incorrect measurement change the volume result?',
    a: 'Yes. Unit mix-ups, rounding, tape tension, and using width instead of circumference can change the estimate.'
  },
  {
    q: 'Does this calculator store my measurements?',
    a: 'No. The calculation runs in your browser and the page does not intentionally store or upload your inputs.'
  },
  {
    q: 'Is the cylinder formula exact?',
    a: 'No. Human anatomy is not a perfect cylinder, so the formula should be read as a simplified approximation.'
  },
  {
    q: 'Is this medical advice?',
    a: 'No. This page is educational only and does not provide medical advice, diagnosis, or treatment.'
  }
];

const mistakes = [
  'Using width instead of girth.',
  'Mixing cm and inches.',
  'Rounding too much.',
  'Using non-bone-pressed length with references based on another method.',
  'Treating volume as a health score.',
  'Assuming the cylinder model is exact.',
  'Comparing volume with country rankings.'
] as const;

const calculatorLinks = [
  ['Estimate approximate volume', 'Penis Volume Calculator', '/penis-volume-calculator'],
  ['Compare length/girth with averages', 'Penis Size Calculator', '/penis-size-calculator'],
  ['Estimate percentile', 'Percentile Calculator', '/penis-size-percentile-calculator'],
  ['Learn average values', 'Average Penis Size', '/average-penis-size'],
  ['Learn girth', 'Average Penis Girth', '/average-penis-girth'],
  ['Learn measurement method', 'How to Measure', '/how-to-measure']
] as const;

export default function PenisVolumeCalculatorPage() {
  const currentYear = new Date().getFullYear();
  const appJsonLd = createWebApplicationJsonLd({
    name: 'Penis Volume Calculator',
    description: 'Private educational calculator that estimates approximate volume from length and girth using a simple cylinder formula.',
    path: '/penis-volume-calculator'
  });
  const articleJsonLd = createArticleJsonLd({
    headline: 'Penis Volume Calculator',
    description:
      'Educational guide and private calculator that estimates approximate geometric volume from length and girth using a simplified cylinder formula.',
    path: '/penis-volume-calculator'
  });
  const faqJsonLd = createFaqJsonLd(faqItems);

  return (
    <article className="space-y-10">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-brand-50 to-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Volume estimator</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Penis Volume Calculator</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Estimate approximate volume from length and girth using a simple geometric formula. Results are educational estimates, not medical measurements.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            {['Private', 'Educational', 'Length + girth', 'No medical diagnosis'].map((badge) => (
              <span key={badge} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 font-medium text-slate-700 shadow-sm">{badge}</span>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#calculator" className="btn-primary">Use the Calculator</a>
            <Link href="/average-penis-girth" className="btn-secondary">Learn About Girth</Link>
          </div>
        </div>
      </section>

      <PenisVolumeCalculator />

      <section className="rounded-2xl border border-brand-100 bg-brand-50/70 p-6 shadow-sm" aria-labelledby="quick-volume-answer">
        <h2 id="quick-volume-answer" className="text-2xl font-semibold text-slate-900">Quick answer: how does the penis volume calculator work?</h2>
        <p className="mt-3 leading-7 text-slate-700">
          The penis volume calculator estimates approximate volume from length and girth using a simple cylinder formula. It treats girth as circumference, converts it into a radius, and then calculates estimated volume. The result is a geometric estimate for educational context, not a clinical or medical measurement.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>Length and girth are required.</li>
          <li>Girth means circumference around the shaft, not straight width.</li>
          <li>The formula uses a cylinder approximation.</li>
          <li>Results can be shown in cm³, mL, and cubic inches.</li>
          <li>Measurement method and rounding can change the result.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Key facts</h2>
        <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
          <li className="rounded-xl bg-slate-50 p-3">Volume combines length and girth into one geometric estimate.</li>
          <li className="rounded-xl bg-slate-50 p-3">The calculator uses circumference to estimate radius.</li>
          <li className="rounded-xl bg-slate-50 p-3">A cylinder model is simple, but anatomy is not a perfect cylinder.</li>
          <li className="rounded-xl bg-slate-50 p-3">Volume is not used here as a medical diagnosis or health score.</li>
          <li className="rounded-xl bg-slate-50 p-3">Correct measurement of length and girth matters.</li>
          <li className="rounded-xl bg-slate-50 p-3">Results are calculated in the browser and are not stored.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">What is penis volume?</h2>
        <p className="leading-7 text-slate-700">
          Penis volume is a geometric estimate that combines two separate measurements: length and girth. Length describes distance from base to tip, while girth describes circumference around the shaft. Volume is not the same as either measurement alone. It is a calculated value that asks a simple geometry question: if the measured length and circumference were modeled as a cylinder, how much space would that cylinder contain?
        </p>
        <p className="leading-7 text-slate-700">
          That framing matters because volume can change when either length or girth changes. A length-only view ignores circumference, and a girth-only view ignores distance. A penis volume estimate combines both into one number, usually reported as cm³, mL, or cubic inches. Since 1 cm³ equals 1 mL, the metric result can be read in either of those units.
        </p>
        <p className="leading-7 text-slate-700">
          On this site, volume is not presented as a medical classification, health score, or personal value judgment. It is an educational way to understand the relationship between two measurements. For reference averages and measurement background, see the <Link className="text-brand-700 underline" href="/methodology">methodology</Link>, <Link className="text-brand-700 underline" href="/data-sources">data sources</Link>, and <Link className="text-brand-700 underline" href="/glossary">glossary</Link> pages.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Penis volume formula</h2>
        <p className="leading-7 text-slate-700">The calculator uses this simplified formula:</p>
        <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-800">volume = length × girth² / (4π)</p>
        <p className="leading-7 text-slate-700">
          In this formula, girth means circumference. Circumference can be converted into radius with radius = girth / (2π). Standard cylinder volume is π × radius² × length. If you substitute the radius expression into the cylinder formula, it simplifies to length × girth² / (4π). The calculator uses that equivalent version because it lets users enter the measurements they can actually take: length and circumference.
        </p>
        <p className="leading-7 text-slate-700">
          If the inputs are in centimeters, the result is first calculated in cm³ and then converted to cubic inches. If the inputs are in inches, the result is first calculated in cubic inches and then converted to cm³ using 1 cubic inch = 16.387064 cm³. The formula is transparent, but it remains an approximation rather than a clinical measurement.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Why girth affects volume strongly</h2>
        <p className="leading-7 text-slate-700">
          Girth has a strong effect because the formula squares girth. In plain terms, circumference is used to estimate radius, and the circular area of a cylinder depends on radius squared. Because of that squared term, a small change in girth can produce a noticeably larger change in estimated volume than many people expect.
        </p>
        <p className="leading-7 text-slate-700">
          This is only a mathematical property of the cylinder model. It does not mean that a larger or smaller estimate is better or worse, and it does not describe health, function, or worth. It simply explains why a length and girth volume calculator may show a bigger change when circumference changes than when length changes by a similarly small amount.
        </p>
      </section>

      <StrategicAd type="native" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Length vs girth vs volume</h2>
        <p className="leading-7 text-slate-700">
          Length, girth, and volume answer different questions. Length is a one-dimensional distance. Girth is a circumference around the shaft. Volume combines length and girth into a three-dimensional estimate. Two people can have the same length but different volume estimates if their girth differs. Two people can also have the same girth but different volume estimates if their lengths differ.
        </p>
        <p className="leading-7 text-slate-700">
          For average size context, use the <Link className="text-brand-700 underline" href="/average-penis-size">average penis size</Link> guide for length and overall references, and the <Link className="text-brand-700 underline" href="/average-penis-girth">average penis girth</Link> guide for circumference. Volume is a derived geometric estimate, while those pages describe the measurements used by the site as primary references.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">How to measure before using the volume calculator</h2>
        <p className="leading-7 text-slate-700">
          Consistent measurement matters before you calculate penis volume. Measure length using the same method each time, and make sure you understand whether a reference uses a bone-pressed or non-bone-pressed method. A method mismatch can make comparisons less meaningful even when the calculator itself is working correctly.
        </p>
        <p className="leading-7 text-slate-700">
          For girth, use a flexible tape and wrap it around the shaft at a consistent point, often the thickest point or the point specified by the method you are following. Do not enter straight width. Width is a line across; girth is circumference around. Avoid aggressive rounding, keep both inputs in the same unit, and re-check any number that seems unexpectedly high or low. For step-by-step context, review <Link className="text-brand-700 underline" href="/how-to-measure">how to measure</Link> and the guide to <Link className="text-brand-700 underline" href="/bone-pressed-vs-non-bone-pressed">bone-pressed vs non-bone-pressed measurement</Link>.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Cylinder approximation and limitations</h2>
        <p className="leading-7 text-slate-700">
          The cylinder model is useful because it is simple and explainable. Human anatomy, however, is not a perfect cylinder. Shape can vary along the length, circumference can vary by measurement point, and measurement conditions can affect inputs. The formula intentionally simplifies these details so it can provide an approximate educational result.
        </p>
        <p className="leading-7 text-slate-700">
          Because of those limitations, the result should not be used for diagnosis, clinical comparison, treatment decisions, or personal judgment. It is best read as a transparent estimate based on length, girth, and a clearly stated formula.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Can volume be compared with average size?</h2>
        <p className="leading-7 text-slate-700">
          The global averages used by this website are length, girth, and flaccid length references. The site does not use a validated global average volume dataset. For that reason, this penis size volume calculator shows an estimated volume number but does not label it as above average, below average, or average.
        </p>
        <p className="leading-7 text-slate-700">
          If your goal is comparison with average values, use the <Link className="text-brand-700 underline" href="/penis-size-calculator">penis size calculator</Link>. If your goal is statistical position within a reference distribution, use the <Link className="text-brand-700 underline" href="/penis-size-percentile-calculator">penis size percentile calculator</Link>. Those tools are built around the site reference measurements rather than a derived volume estimate.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Does country data apply to volume?</h2>
        <p className="leading-7 text-slate-700">
          No. Country data on this site is used only for erect length. There is no country dataset for penis volume, and this page does not estimate volume by country. Applying country rankings to a derived volume result would create false precision because the necessary country-level length-and-girth volume dataset is not used here.
        </p>
        <p className="leading-7 text-slate-700">
          If you want to understand the limited country feature that does exist, read the <Link className="text-brand-700 underline" href="/average-penis-size-by-country">average penis size by country</Link> page. Country context should not be extended to volume, girth, or medical interpretation on this site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Common mistakes when calculating volume</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {mistakes.map((mistake) => (
            <div key={mistake} className="rounded-xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm">{mistake}</div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Private volume calculation</h2>
        <p className="leading-7 text-slate-700">
          The calculator is designed to run in your browser. It does not require an account, does not upload measurements, and does not intentionally store length or girth inputs. You can enter values, change units, and read the estimate without submitting a form to a backend service.
        </p>
        <p className="leading-7 text-slate-700">
          Please avoid sending sensitive medical information through contact forms or messages. If you have personal health concerns, it is safer to speak with a qualified healthcare professional. For broader site practices, read the <Link className="text-brand-700 underline" href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Which calculator should you use?</h2>
        <div className="overflow-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="px-4 py-3 font-semibold">Goal</th>
                <th className="px-4 py-3 font-semibold">Recommended tool</th>
              </tr>
            </thead>
            <tbody>
              {calculatorLinks.map(([goal, label, href]) => (
                <tr key={goal} className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-700">{goal}</td>
                  <td className="px-4 py-3"><Link className="text-brand-700 underline" href={href}>{label}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Educational disclaimer</h2>
        <p className="mt-3 leading-7 text-amber-950">
          This calculator is for educational purposes only. It estimates approximate geometric volume from length and girth using a simplified cylinder formula. It is not medical advice, diagnosis, treatment, or a clinical measurement. If you have concerns about pain, development, sexual function, body image distress, or health, consider speaking with a qualified healthcare professional.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">How to cite this page</h2>
        <p className="text-slate-700">
          Average Size Calculator. “Penis Volume Calculator.” Average Size Calculator, {siteConfig.siteUrl}/penis-volume-calculator. Accessed {currentYear}.
        </p>
      </section>

      <StrategicAd type="rectangle" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-3 leading-6 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
        <h2 className="text-2xl font-semibold">Continue with primary size tools</h2>
        <p className="mt-3 max-w-3xl text-slate-200">Use volume as educational geometry only. For average comparisons and percentile context, continue with the site tools built around length and girth references.</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href="/penis-size-calculator" className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-100">Use Size Calculator</Link>
          <Link href="/penis-size-percentile-calculator" className="rounded-xl border border-white/30 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10">Use Percentile Calculator</Link>
        </div>
      </section>

      <JsonLd data={faqJsonLd ? [appJsonLd, articleJsonLd, faqJsonLd] : [appJsonLd, articleJsonLd]} />
    </article>
  );
}
