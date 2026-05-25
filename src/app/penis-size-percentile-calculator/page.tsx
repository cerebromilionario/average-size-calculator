import type { Metadata } from 'next';
import Link from 'next/link';
import PercentileEstimator from '@/components/PercentileEstimator';
import EducationalDisclaimer from '@/components/EducationalDisclaimer';
import { siteConfig } from '@/lib/site';

const pageUrl = `${siteConfig.siteUrl}/penis-size-percentile-calculator`;

export const metadata: Metadata = {
  title: 'Penis Size Percentile Calculator | Length and Girth Percentile',
  description:
    'Estimate your length and girth percentile using global reference averages. Learn what percentile, z-score, average, and normal variation mean in a private educational calculator.'
};

const faqItems = [
  {
    q: 'What is a penis size percentile?',
    a: 'A percentile estimates where a measurement sits in a reference distribution. It is a statistical position, not a personal score.'
  },
  {
    q: 'What does the 50th percentile mean?',
    a: 'The 50th percentile is near the middle of the reference distribution, usually close to the average value.'
  },
  {
    q: 'What is a z-score?',
    a: 'A z-score shows how many standard deviations a value is above or below the reference mean, which helps estimate percentile.'
  },
  {
    q: 'Is a higher percentile better?',
    a: 'No. A percentile is descriptive, not a quality grade, health score, or measure of personal worth.'
  },
  {
    q: 'Does this calculator use length, girth, or both?',
    a: 'It can estimate percentile from length, girth, or both when values are provided.'
  },
  {
    q: 'Does this percentile calculator use country data?',
    a: 'No. This page uses global reference averages. Country-level comparison is available on the main calculator page.'
  },
  {
    q: 'How accurate is the percentile estimate?',
    a: 'It is an educational estimate based on reference averages and distribution assumptions, not an exact clinical measurement.'
  },
  {
    q: 'Can measuring incorrectly change my percentile?',
    a: 'Yes. Small measurement errors can shift percentile estimates, especially when values are close to the reference mean.'
  },
  {
    q: 'Is below the 50th percentile still normal?',
    a: 'Yes. Values below, near, and above the middle percentile can all be part of normal human variation.'
  },
  {
    q: 'Is this medical advice?',
    a: 'No. This calculator is educational and does not diagnose conditions or replace professional medical care.'
  }
];

export default function PercentileCalculatorPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };

  const webAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Penis Size Percentile Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'All',
    description:
      'Educational percentile and z-score estimator for erect length and girth using global reference averages and standard deviation assumptions.',
    url: pageUrl
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Penis Size Percentile Calculator',
    description:
      'Educational guide to percentile, z-score, average, distribution, and normal variation for global reference length and girth comparisons.',
    mainEntityOfPage: pageUrl,
    url: pageUrl,
    author: {
      '@type': 'Organization',
      name: 'Average Size Calculator'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Average Size Calculator'
    }
  };

  return (
    <article className="space-y-10">
      <section className="rounded-2xl bg-gradient-to-b from-brand-50 to-white p-6 md:p-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Penis Size Percentile Calculator</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          Estimate where your length and girth fall within a global reference distribution, and learn what percentile and z-score mean.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
          {['Private', 'Educational', 'Global reference data', 'No measurement stored'].map((badge) => (
            <span key={badge} className="rounded-full border border-slate-300 bg-white px-3 py-1">
              {badge}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#calculator" className="inline-flex rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">
            Open the Percentile Estimator
          </a>
          <Link className="inline-flex rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50" href="/penis-size-calculator">
            Compare with country average
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">What is a penis size percentile?</h2>
        <p className="text-slate-700">A percentile shows where a measurement falls compared with a reference distribution. If a result is near the 50th percentile, it is near the middle of the dataset. A result around the 84th percentile means the value is above roughly 84% of the reference group. A result around the 16th percentile means the value is below roughly 84% of the reference group and above about 16%.</p>
        <p className="text-slate-700">A percentile is a statistical comparison, not a judgment. It helps describe where a measurement falls compared with reference data. It does not measure confidence, relationship quality, sexual function, or health status.</p>
      </section>

      <section id="calculator" className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm space-y-4">
        <p className="text-slate-700">Enter length and/or girth to estimate percentile using global reference averages. The result is calculated in your browser and is not stored.</p>
        <PercentileEstimator />
        <p className="text-sm text-slate-600">This estimator uses global averages and standard deviation assumptions. It does not use country-level data.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><h3 className="font-semibold text-slate-900">Distribution-based</h3><p className="mt-2 text-sm text-slate-700">Results come from a statistical distribution model, not from a social ranking.</p></div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><h3 className="font-semibold text-slate-900">Standardized</h3><p className="mt-2 text-sm text-slate-700">Values are converted to centimeters when needed so comparisons use the same unit scale.</p></div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><h3 className="font-semibold text-slate-900">Educational context</h3><p className="mt-2 text-sm text-slate-700">Interpretations focus on variation, limits, and statistical meaning rather than labels.</p></div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">How the percentile calculator works</h2>
        <p className="text-slate-700">First, you enter length, girth, or both. If your input is in inches, the calculator converts it to centimeters so each step uses consistent reference units. Next, the estimator compares your value with a global average. It then calculates how far your value is from that average and scales that difference by a standard deviation assumption.</p>
        <p className="text-slate-700">That standardized distance is called a z-score. The z-score is then mapped to a percentile using a normal distribution model. This process turns one raw measurement into an estimate that is easier to interpret in context. Instead of only seeing a number in cm or inches, you also see where that number falls within the broader statistical range.</p>
      </section>

      <section className="space-y-3 rounded-xl border border-brand-100 bg-brand-50 p-5">
        <h2 className="text-2xl font-semibold text-slate-900">What is a z-score?</h2>
        <p className="text-slate-700">A z-score tells you how many standard deviations a value is above or below the reference average. A z-score of 0 means near the average. A z-score of +1 means about one standard deviation above the average, often near the 84th percentile. A z-score of -1 means about one standard deviation below the average, often near the 16th percentile.</p>
        <p className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-mono text-sm text-slate-800">z-score = (your measurement - average) / standard deviation</p>
        <p className="text-slate-700">You do not need to do this manually to use the calculator. The formula is shown so the process stays transparent and educational.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Average size vs percentile</h2>
        <p className="text-slate-700">An average is a midpoint, but it does not describe the full spread of values. Percentile adds distribution context. It shows whether a measurement is close to the center, moderately away from it, or farther into the upper or lower tails.</p>
        <p className="text-slate-700">Two people can both be close to average but have different percentile estimates depending on how far their measurements are from the reference mean. This is why average and percentile are complementary: one gives a central number, and the other gives position within variation.</p>
        <p className="text-slate-700">If you want a broader background on reference means, see <Link className="text-brand-700 underline" href="/average-penis-size">Learn about average penis size</Link>.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Length percentile</h2>
        <p className="text-slate-700">Length percentile compares erect length with a global reference distribution. The global mean used on this page is 13.12 cm (5.16 in). Accurate technique matters because even small differences can shift the estimated percentile, especially for values close to the mean.</p>
        <p className="text-slate-700">For consistency, measure under similar conditions and use the same approach each time. If you need a step-by-step guide, review <Link className="text-brand-700 underline" href="/how-to-measure">how to measure correctly</Link>. Country-level comparison is a separate feature and belongs to the main calculator page.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Girth percentile</h2>
        <p className="text-slate-700">Girth percentile compares erect circumference with a global reference distribution. The global mean used on this page is 11.66 cm (4.59 in). Girth should be measured around the thickest part with a flexible measuring tape to reduce avoidable error.</p>
        <p className="text-slate-700">This website does not provide country averages for girth on the percentile page. Girth percentile here is based on global reference data, allowing a consistent, distribution-focused estimate.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Why percentiles are estimates</h2>
        <p className="text-slate-700">Every percentile tool relies on assumptions. Research studies use different sample sizes, inclusion criteria, and measurement methods. Real populations also do not follow a perfectly normal curve in every situation, even when a normal model is useful for interpretation.</p>
        <p className="text-slate-700">Because of that, small differences should not be overinterpreted. Global reference data is generally more useful than informal online claims, but it still has uncertainty. Very low or very high estimates can be less stable, partly because small measurement differences may have a larger effect in distribution tails.</p>
        <p className="text-slate-700">The best way to use this result is as educational statistical context, not absolute precision.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">What is considered a normal percentile?</h2>
        <p className="text-slate-700">Most people fall within a broad range around the average. Being below the 50th percentile does not automatically mean a problem, and being above the 50th percentile does not imply better health. Percentile is a statistical location, not a measure of function or value.</p>
        <p className="text-slate-700">Percentile also does not measure self-esteem, relationship success, or compatibility. If you have concerns about pain, development, sexual function, or persistent distress, consider discussing those concerns with a qualified healthcare professional.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Percentile interpretation table</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 bg-white text-sm">
            <thead className="bg-slate-50"><tr><th className="px-4 py-3 text-left font-semibold text-slate-900">Estimated percentile</th><th className="px-4 py-3 text-left font-semibold text-slate-900">General interpretation</th></tr></thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr><td className="px-4 py-3">Around 50th</td><td className="px-4 py-3">Close to the reference average</td></tr>
              <tr><td className="px-4 py-3">Below 50th</td><td className="px-4 py-3">Below the reference average</td></tr>
              <tr><td className="px-4 py-3">Above 50th</td><td className="px-4 py-3">Above the reference average</td></tr>
              <tr><td className="px-4 py-3">Very low or very high</td><td className="px-4 py-3">May reflect measurement differences, natural variation, or limitations of the estimate</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-2xl font-semibold text-slate-900">Does the percentile calculator use country data?</h2>
        <p className="text-slate-700">No. This percentile page uses global reference data for statistical consistency. Country data is used on the main calculator only for erect length comparison and can be less stable across sources.</p>
        <p className="text-slate-700">If your goal is country average context rather than percentile distribution context, use the dedicated comparison tool. You can also read <Link className="text-brand-700 underline" href="/average-penis-size-by-country">average size by country</Link> for educational background.</p>
        <Link className="inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700" href="/penis-size-calculator">Compare with your country average</Link>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Reading your result in context</h2>
        <p className="text-slate-700">Your percentile result is most useful when treated as one data point in a broader educational context. Use it to understand distribution position, then move on rather than repeatedly re-checking small fluctuations.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Private percentile calculation</h2>
        <p className="text-slate-700">The calculation runs in your browser and your inputs are not stored by this tool. You do not need an account, and you do not need to upload images.</p>
        <p className="text-slate-700">For site policies, see the <Link className="text-brand-700 underline" href="/privacy-policy">Privacy Policy</Link> and <Link className="text-brand-700 underline" href="/terms-of-use">Terms of Use</Link>. If you need to contact the team, use the <Link className="text-brand-700 underline" href="/contact">contact page</Link> and avoid sending sensitive medical details.</p>
      </section>


      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Understanding percentile distribution in plain language</h2>
        <p className="text-slate-700">A distribution describes how often different values appear in a reference dataset. Many values cluster around the center, and fewer appear as you move toward either end. Percentile translates that shape into a simple statement about position. That makes it easier to interpret than a raw number alone.</p>
        <p className="text-slate-700">For example, two measurements can differ by what looks like a small numerical amount, but if they are on opposite sides of the center, their percentile labels can differ meaningfully. The opposite can also happen: a larger numerical gap at the far tail may represent a smaller percentile change. This is why percentile interpretation should always consider distribution behavior rather than only eyeballing centimeters or inches.</p>
        <p className="text-slate-700">In practical terms, percentile is a way to answer the question: “Where does this value sit relative to a global reference sample?” It is not trying to answer personal, psychological, or relationship questions. Used correctly, it provides statistical context and reduces confusion created by informal claims online.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">How measurement consistency improves interpretation</h2>
        <p className="text-slate-700">Consistency matters as much as the final number. If one measurement is taken with one method and another is taken with a different method, the comparison becomes noisy. Repeating a consistent process gives better educational value and helps avoid overreacting to tiny differences.</p>
        <p className="text-slate-700">Try to use the same tape or ruler, similar body position, and similar measurement conditions each time. Record values carefully and avoid rounding too aggressively. When values are near the average, even small rounding changes can move percentile estimates up or down by several points.</p>
        <p className="text-slate-700">If your goal is understanding general statistical position, one or two careful measurements are usually enough. If your goal is tracking change over time, consistency is even more important than precision in a single session, because trend interpretation depends on comparable methods.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Interpreting percentile without overthinking</h2>
        <p className="text-slate-700">A common mistake is treating a small percentile difference as a major real-world difference. In most educational contexts, nearby percentile ranges are better interpreted as broadly similar rather than dramatically different. Percentile is best used for orientation, not for strict categorization.</p>
        <p className="text-slate-700">Another common mistake is comparing results across tools that use different datasets and assumptions. If one calculator uses one reference mean and another uses a different mean or spread, outputs will differ even when your input is identical. That does not automatically mean one tool is wrong; it usually means the models are different.</p>
        <p className="text-slate-700">The healthiest interpretation approach is to use percentile as a neutral statistic. It can answer “where,” but not “why.” It can provide context, but not identity. That perspective keeps the result informative, calm, and realistic.</p>
      </section>
      <section className="space-y-3 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5">
        <h2 className="text-2xl font-semibold text-slate-900">Educational disclaimer</h2>
        <p className="text-slate-700">This percentile calculator is for educational purposes only. It is not medical advice and should not be used to diagnose any condition. If you have concerns about pain, development, sexual function, or health, consider speaking with a qualified healthcare professional.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Example percentile interpretations</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="font-semibold text-slate-900">Example 1</h3><p className="mt-2 text-sm text-slate-700">A measurement close to the average will usually produce a percentile near the middle of the distribution.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="font-semibold text-slate-900">Example 2</h3><p className="mt-2 text-sm text-slate-700">A measurement above the average may produce a percentile above 50, depending on how far it is from the mean.</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="font-semibold text-slate-900">Example 3</h3><p className="mt-2 text-sm text-slate-700">A measurement below the average may still fall within common natural variation.</p></div>
        </div>
      </section>


      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Using percentile results responsibly</h2>
        <p className="text-slate-700">Responsible use means focusing on statistical literacy instead of self-criticism. A percentile output can clarify where a measurement falls in global reference data, but it cannot tell you whether you are healthy, attractive, or successful. Those outcomes are influenced by many factors beyond a single number.</p>
        <p className="text-slate-700">It is also reasonable to step back if repeated checking increases stress. Educational tools should reduce uncertainty, not amplify worry. If concerns are persistent and affect wellbeing, speaking with a qualified professional can provide better support than repeated online comparisons.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details key={item.q} className="rounded-lg border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-2 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <EducationalDisclaimer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </article>
  );
}
