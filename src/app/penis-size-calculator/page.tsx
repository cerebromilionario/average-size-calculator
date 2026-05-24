import type { Metadata } from 'next';
import PenisSizeCalculator from '@/components/PenisSizeCalculator';
import AverageReferenceTable from '@/components/AverageReferenceTable';
import EducationalDisclaimer from '@/components/EducationalDisclaimer';
import CalculatorFaq, { getFaqJsonLd } from '@/components/CalculatorFaq';
import DataQualityNotice from '@/components/DataQualityNotice';
import { siteConfig } from '@/lib/site';

const pageUrl = `${siteConfig.siteUrl}/penis-size-calculator`;

export const metadata: Metadata = {
  title: 'Penis Size Calculator | Compare Your Size to the Average',
  description:
    'Use this private penis size calculator to compare your length or girth with global and country averages. Get an educational estimate in cm or inches.'
};

export default function CalculatorPage() {
  const faqJsonLd = getFaqJsonLd();
  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Penis Size Calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'All',
    description:
      'Private educational calculator to compare penis size measurements against global and country average references in centimeters or inches.',
    url: pageUrl
  };

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-gradient-to-b from-brand-50 to-white p-6 md:p-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Penis Size Calculator</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">Privately compare your measurement with global and country averages in centimeters or inches.</p>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">Your measurement is calculated in your browser and is not stored.</p>
        <a href="#calculator" className="mt-6 inline-flex rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">Start the private calculation</a>
      </section>

      <PenisSizeCalculator />

      <DataQualityNotice />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">How to use the penis size calculator</h2>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Measure correctly using a consistent method and a flexible measuring tool.</li>
          <li>Enter your measurement as a decimal or whole number.</li>
          <li>Choose centimeters or inches.</li>
          <li>Select the measurement type: erect length, erect girth, or flaccid length.</li>
          <li>Choose your country for additional comparison context.</li>
          <li>Read your global and country comparison, plus the educational percentile estimate.</li>
        </ol>
        <p className="text-slate-700">For best consistency, measure under similar conditions and repeat carefully if needed. <a className="text-brand-700 underline" href="/how-to-measure">Learn how to measure correctly</a>.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">What your result means</h2>
        <p className="text-slate-700">The calculator classifies results as below average, around average, or above average using global reference values. Below average does not automatically indicate a medical condition, and above average does not indicate superior health or function. Average is a statistical midpoint, not a target that every individual should match.</p>
        <p className="text-slate-700">Small differences are common and may have little practical meaning. Measurement technique, timing, and unit conversion can all change outcomes. Natural variation across adults is normal, and this tool is designed to provide private educational context rather than judgment.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Global average penis size used by this calculator</h2>
        <AverageReferenceTable />
        <p className="text-slate-700">These values are used as educational reference points and may vary between studies, countries, and measurement methods.</p>
        <h3 className="text-lg font-semibold text-slate-900">Sources and methodology</h3>
        <p className="text-slate-700">Global reference values are aligned with commonly cited pooled research values used in public health discussions. Country entries are presented as optional comparative context and can vary by sample size, data source quality, and method standardization. Percentile output is an estimate based on normal-distribution assumptions and should not be interpreted as a diagnostic or clinical statistic.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Compare with average penis size by country</h2>
        <p className="text-slate-700">Country comparison is a secondary reference layer. The global comparison is the primary benchmark. Country averages are currently available for erect length because the country dataset is based on compiled erect length rankings. Erect girth and flaccid length are compared only with global averages from published research.</p>
        <p className="text-slate-700">You can switch country directly in the calculator to view available comparisons. For a wider overview, visit <a className="text-brand-700 underline" href="/average-penis-size-by-country">See average penis size by country</a>.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Private and anonymous calculation</h2>
        <p className="text-slate-700">Your measurement stays on your device. The calculator does not require an account and does not store your input.</p>
        <p className="text-slate-700">No backend submission is required for the calculation itself. This allows educational use in a private, low-friction format that users can access quickly on desktop or mobile.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Related educational resources</h2>
        <p className="text-slate-700">If you want deeper context, review our pages on <a className="text-brand-700 underline" href="/average-penis-size">average penis size</a>, <a className="text-brand-700 underline" href="/average-penis-size-by-country">country comparisons</a>, and <a className="text-brand-700 underline" href="/how-to-measure">measurement guidance</a>. You can also read our <a className="text-brand-700 underline" href="/privacy-policy">privacy policy</a> or <a className="text-brand-700 underline" href="/contact">contact us</a> for questions.</p>
      </section>

      <EducationalDisclaimer />
      <CalculatorFaq />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
    </div>
  );
}
