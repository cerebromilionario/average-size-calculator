import type { Metadata } from 'next';
import Link from 'next/link';
import CondomSizeCalculator from '@/components/CondomSizeCalculator';
import JsonLd from '@/components/JsonLd';
import StrategicAd from '@/components/ads/StrategicAd';
import { createArticleJsonLd, createFaqJsonLd, createWebApplicationJsonLd } from '@/lib/jsonLd';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Condom Size Calculator | Find Size by Girth and Nominal Width' },
  description:
    'Use this private educational condom size calculator to estimate nominal width from girth or circumference and understand snug, regular, large, and wider fit ranges.'
};

const faqItems = [
  {
    q: 'How do I calculate condom size?',
    a: 'Measure girth or circumference, convert it to millimeters, and divide by two to estimate nominal width. Treat the result as an educational starting point, not a product guarantee.'
  },
  {
    q: 'What is condom nominal width?',
    a: 'Nominal width is the approximate flat width of a condom, usually listed in millimeters. It is related to circumference but is not the same as girth.'
  },
  {
    q: 'Is condom size based on length or girth?',
    a: 'Girth is usually the more important input for fit because it relates to tightness and slipping. Length can still matter for coverage and comfort.'
  },
  {
    q: 'How do I measure girth for condom size?',
    a: 'Use a flexible tape around the body at a consistent point. Do not use a rigid ruler or a straight-width measurement.'
  },
  {
    q: 'What condom size is regular?',
    a: 'In this calculator, an estimated nominal width from 49 mm to 53 mm is shown as a regular or standard fit range. Product labels vary.'
  },
  {
    q: 'What does snug fit mean?',
    a: 'Snug, slim, or close-fit labels usually indicate a smaller nominal-width range. The exact meaning can vary by manufacturer.'
  },
  {
    q: 'What does large or XL fit mean?',
    a: 'Large, comfort, XL, or wider labels usually indicate larger nominal-width ranges. The terms are not perfectly standardized across brands or countries.'
  },
  {
    q: 'Is girth the same as width?',
    a: 'No. Girth means circumference around. Width is a straight-line distance and should not be entered as girth.'
  },
  {
    q: 'Can the calculator recommend a brand?',
    a: 'No. This page provides an educational fit estimate only and does not recommend specific brands or products.'
  },
  {
    q: 'Does the calculator store my measurement?',
    a: 'No. The calculation runs in your browser and the site does not intentionally store or upload your measurement input.'
  },
  {
    q: 'Can product sizing vary by brand?',
    a: 'Yes. Packaging, nominal-width labels, elasticity, shape, and country-specific labeling can vary by manufacturer.'
  },
  {
    q: 'Is this medical advice?',
    a: 'No. This calculator is educational only and does not provide medical advice, diagnosis, treatment, or a guarantee of fit.'
  }
];

const mistakes = [
  'Using length instead of girth as the main sizing input.',
  'Measuring straight width instead of circumference.',
  'Mixing inches, centimeters, and millimeters.',
  'Rounding too aggressively.',
  'Assuming all “large” labels mean the same size.',
  'Ignoring manufacturer sizing information.',
  'Treating the calculator as a guarantee.'
] as const;

const nextTools = [
  ['Estimate condom fit range', 'Condom Size Calculator', '/condom-size-calculator'],
  ['Measure girth correctly', 'How to Measure', '/how-to-measure'],
  ['Learn average girth', 'Average Penis Girth', '/average-penis-girth'],
  ['Compare length/girth with averages', 'Penis Size Calculator', '/penis-size-calculator'],
  ['Estimate percentile', 'Percentile Calculator', '/penis-size-percentile-calculator'],
  ['Understand data sources', 'Data Sources', '/data-sources']
] as const;

export default function CondomSizeCalculatorPage() {
  const currentYear = new Date().getFullYear();
  const appJsonLd = createWebApplicationJsonLd({
    name: 'Condom Size Calculator',
    description: 'Private educational calculator that estimates condom nominal width from girth or circumference.',
    path: '/condom-size-calculator'
  });
  const articleJsonLd = createArticleJsonLd({
    headline: 'Condom Size Calculator',
    description:
      'Educational guide and private calculator that estimates condom nominal width from girth or circumference and explains snug, regular, large, and wider fit ranges.',
    path: '/condom-size-calculator'
  });
  const faqJsonLd = createFaqJsonLd(faqItems);

  return (
    <article className="space-y-10">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-brand-50 to-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Fit guide</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Condom Size Calculator</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Estimate condom nominal width from girth or circumference, understand fit ranges, and learn how to measure correctly before choosing a size.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            {['Private', 'Educational', 'Girth-based', 'No brand recommendations'].map((badge) => (
              <span key={badge} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 font-medium text-slate-700 shadow-sm">{badge}</span>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#calculator" className="btn-primary">Use the Calculator</a>
            <Link href="/how-to-measure" className="btn-secondary">Learn How to Measure</Link>
          </div>
        </div>
      </section>

      <CondomSizeCalculator />

      <section className="rounded-2xl border border-brand-100 bg-brand-50/70 p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Quick answer: how does the condom size calculator work?</h2>
        <p className="mt-3 leading-7 text-slate-700">
          The condom size calculator estimates nominal width from girth or circumference. Nominal width is approximately half the circumference when a condom is laid flat, so the calculator converts your girth to millimeters and divides it by two. The result is an educational fit estimate, not a guarantee that a specific product or brand will fit perfectly.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>Girth or circumference is the most important input.</li>
          <li>Length is optional and usually less important for fit than girth.</li>
          <li>Estimated nominal width = girth in mm ÷ 2.</li>
          <li>Sizing labels vary by brand and country.</li>
          <li>Always follow product instructions and use a properly fitting condom.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Key facts</h2>
        <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
          <li className="rounded-xl border border-slate-200 bg-slate-50 p-3">Condom sizing is usually based on nominal width.</li>
          <li className="rounded-xl border border-slate-200 bg-slate-50 p-3">Nominal width is measured in millimeters.</li>
          <li className="rounded-xl border border-slate-200 bg-slate-50 p-3">Girth means circumference, not straight width.</li>
          <li className="rounded-xl border border-slate-200 bg-slate-50 p-3">A too-tight fit may feel uncomfortable or increase risk of problems during use.</li>
          <li className="rounded-xl border border-slate-200 bg-slate-50 p-3">A too-loose fit may slip more easily.</li>
          <li className="rounded-xl border border-slate-200 bg-slate-50 p-3">This calculator provides an educational estimate only.</li>
          <li className="rounded-xl border border-slate-200 bg-slate-50 p-3 md:col-span-2">The site does not store your measurement input.</li>
        </ul>
      </section>

      <StrategicAd type="native" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">What is condom nominal width?</h2>
        <p className="leading-7 text-slate-700">
          Condom nominal width is the approximate flat width of a condom, normally written in millimeters on product information or sizing tables. It is called a flat width because it describes the width of the condom when it is laid flat, not the measurement around the body. This distinction matters because many people measure circumference at home, then need a way to compare that circular measurement with the flat nominal-width numbers printed by manufacturers.
        </p>
        <p className="leading-7 text-slate-700">
          Nominal width is useful because it creates a simple comparison point between different products, labels, and fit categories. A smaller nominal width generally indicates a closer fit, while a larger nominal width generally indicates more room. However, nominal width is not a complete description of shape, elasticity, material feel, or comfort. Two products with similar nominal-width values can still feel different because their design, thickness, taper, and labeling language vary.
        </p>
        <p className="leading-7 text-slate-700">
          This calculator uses nominal width as an educational bridge between your girth measurement and common sizing language. It does not interpret any specific product package, and it does not claim that one number is perfect. When comparing options, read the manufacturer’s sizing information and instructions carefully. If you need help with measurement basics before using a condom width calculator, start with the <Link className="text-brand-700 underline" href="/how-to-measure">measurement guide</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">How girth relates to condom size</h2>
        <p className="leading-7 text-slate-700">
          Girth and circumference mean the same thing in this sizing context: the distance around. They are not a straight-line width across. Because a condom is a flexible sleeve, the measurement around the body is usually more informative for fit than length alone. If the circumference estimate is too small for a chosen product, the fit may feel overly tight. If it is too large for a chosen product, slipping may be more likely.
        </p>
        <p className="leading-7 text-slate-700">
          The reason this page uses girth is simple: nominal width is approximately half of circumference when the condom is laid flat. In other words, a circular circumference can be converted into a flat-width comparison by dividing the circumference by two. The calculator converts centimeters or inches into millimeters first, then divides the millimeter girth by two to estimate condom nominal width.
        </p>
        <p className="leading-7 text-slate-700">
          That estimate should be read as a starting point. Fit involves stretch, comfort, placement, product instructions, and manufacturer design. The calculator can help you understand whether your measurement is closer to a snug, regular, large, or wider range, but it should not be treated as a guarantee that a specific product, package, or label will fit perfectly.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Condom size formula</h2>
        <p className="leading-7 text-slate-700">The simplified condom size formula used by this calculator is:</p>
        <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-lg font-semibold text-slate-900">estimated nominal width = girth in millimeters ÷ 2</p>
        <p className="leading-7 text-slate-700">
          If girth is 110 mm, estimated nominal width is about 55 mm. The formula is straightforward, but the interpretation should stay cautious. Nominal width is only one part of fit, and product sizing can vary. Use the estimate to understand the general range, then compare it with clear manufacturer sizing information instead of relying on the calculator alone.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Condom size chart by girth</h2>
        <p className="leading-7 text-slate-700">
          The chart below mirrors the calculator categories and gives a quick condom size by girth reference. It is helpful when you want to compare condom size in mm without entering a value, but the calculator gives a more specific nominal-width estimate to one decimal place.
        </p>
        <div className="overflow-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="px-4 py-3 font-semibold">Girth / circumference</th>
                <th className="px-4 py-3 text-right font-semibold">Estimated nominal width</th>
                <th className="px-4 py-3 font-semibold">General fit range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-200"><td className="px-4 py-3 text-slate-700">Under 98 mm</td><td className="px-4 py-3 text-right text-slate-700">Under 49 mm</td><td className="px-4 py-3 text-slate-700">Snug / smaller fit</td></tr>
              <tr className="border-t border-slate-200"><td className="px-4 py-3 text-slate-700">98–106 mm</td><td className="px-4 py-3 text-right text-slate-700">49–53 mm</td><td className="px-4 py-3 text-slate-700">Regular / standard fit</td></tr>
              <tr className="border-t border-slate-200"><td className="px-4 py-3 text-slate-700">106–114 mm</td><td className="px-4 py-3 text-right text-slate-700">53–57 mm</td><td className="px-4 py-3 text-slate-700">Large fit</td></tr>
              <tr className="border-t border-slate-200"><td className="px-4 py-3 text-slate-700">Over 114 mm</td><td className="px-4 py-3 text-right text-slate-700">Over 57 mm</td><td className="px-4 py-3 text-slate-700">XL / wider fit</td></tr>
            </tbody>
          </table>
        </div>
        <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          This chart is an educational estimate. Product sizing, elasticity, shape, and labeling vary by brand and country.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">How to measure for condom size</h2>
        <p className="leading-7 text-slate-700">
          To measure for condom size, use a flexible measuring tape and measure circumference. A rigid ruler is not appropriate for girth because it measures a straight line, not the distance around. Keep the tape flat, avoid twisting it, and avoid pulling it so tightly that it compresses the measurement. Measure at a consistent point rather than changing location each time.
        </p>
        <p className="leading-7 text-slate-700">
          Unit consistency is important. If you measure in centimeters, the calculator converts centimeters to millimeters by multiplying by 10. If you measure in inches, it converts inches to millimeters by multiplying by 25.4. If you already have millimeters, the value stays in millimeters. Avoid rounding too aggressively before entering the number because small changes in girth can change the estimated nominal width.
        </p>
        <p className="leading-7 text-slate-700">
          For a more detailed walkthrough, read <Link className="text-brand-700 underline" href="/how-to-measure">how to measure correctly</Link>. If you want broader educational context about circumference and averages, the <Link className="text-brand-700 underline" href="/average-penis-girth">average girth guide</Link> explains girth as circumference and separates it from straight width.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Is length important for condom size?</h2>
        <p className="leading-7 text-slate-700">
          Length can matter for coverage and comfort, so it should not be ignored entirely. That said, girth is usually more important for the fit questions people are trying to solve with a condom fit calculator: tightness, looseness, and slipping. A product can be long enough but still feel too tight or too loose if the nominal width is not appropriate for the user’s circumference.
        </p>
        <p className="leading-7 text-slate-700">
          That is why the length field in this calculator is optional. You can enter length as context, but the nominal-width estimate comes from girth. If you want a general educational comparison of both length and girth against averages, use the <Link className="text-brand-700 underline" href="/penis-size-calculator">penis size calculator</Link>. If you want percentile context, use the <Link className="text-brand-700 underline" href="/penis-size-percentile-calculator">percentile calculator</Link>. For product selection, always check the package information and instructions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Snug, regular, large, and XL fit ranges</h2>
        <p className="leading-7 text-slate-700">
          Fit labels are commercial descriptions, and they are not perfectly standardized across every brand, country, or package. Snug, slim, or close-fit wording often points to a smaller nominal-width range. Regular or standard wording usually points to an intermediate range. Large, comfort, XL, extra large, or wider wording usually points to larger nominal widths. Those labels can be helpful, but they should not replace the actual nominal-width number when it is available.
        </p>
        <p className="leading-7 text-slate-700">
          This page uses four plain-language categories to make the estimate easier to read: snug or smaller under 49 mm, regular from 49 mm to 53 mm, large above 53 mm through 57 mm, and XL or wider above 57 mm. These ranges are educational groupings. They are not medical categories, legal standards, or brand recommendations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Why fit matters</h2>
        <p className="leading-7 text-slate-700">
          Fit matters because it affects comfort and correct use. A too-tight fit may feel uncomfortable or may increase the chance of problems during use. A too-loose fit may slip more easily. The goal of a condom sizing guide is not to create anxiety or promise perfection; it is to help users understand measurement, compare nominal widths, and follow product instructions carefully.
        </p>
        <p className="leading-7 text-slate-700">
          If you have health concerns, discomfort, repeated fit problems, or questions about safe use, consider speaking with a qualified healthcare professional. This page provides general education, not individual medical advice. For the site’s broader approach to calculations and limitations, read the <Link className="text-brand-700 underline" href="/methodology">methodology</Link> and <Link className="text-brand-700 underline" href="/data-sources">data sources</Link> pages.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Common condom sizing mistakes</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {mistakes.map((mistake) => (
            <div key={mistake} className="rounded-xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm">{mistake}</div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">How this calculator protects privacy</h2>
        <p className="leading-7 text-slate-700">
          The calculator runs in your browser. It does not require an account, does not upload measurements, and does not intentionally store your girth or length input. You can enter a value, change the unit, and read the educational estimate without submitting a form to a backend service.
        </p>
        <p className="leading-7 text-slate-700">
          Please avoid sending sensitive medical information through the contact form or other messages. If you have personal health concerns, it is safer to speak with a qualified healthcare professional. For broader site practices, read the <Link className="text-brand-700 underline" href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Which tool should you use next?</h2>
        <div className="overflow-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="px-4 py-3 font-semibold">Goal</th>
                <th className="px-4 py-3 font-semibold">Recommended page</th>
              </tr>
            </thead>
            <tbody>
              {nextTools.map(([goal, label, href]) => (
                <tr key={goal} className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-700">{goal}</td>
                  <td className="px-4 py-3"><Link className="text-brand-700 underline" href={href}>{label}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-6 text-slate-600">
          You can also review the <Link className="text-brand-700 underline" href="/average-penis-size">average penis size</Link> page for broader measurement context and the <Link className="text-brand-700 underline" href="/glossary">glossary</Link> for definitions of key terms.
        </p>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Educational disclaimer</h2>
        <p className="mt-3 leading-7 text-amber-950">
          This calculator is for educational purposes only. It estimates condom nominal width from girth using a simplified sizing formula. It does not guarantee that a specific condom, product, or brand will fit perfectly. Always read and follow the manufacturer’s instructions. If you have health concerns, discomfort, repeated fit problems, or questions about safe use, consider speaking with a qualified healthcare professional.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">How to cite this page</h2>
        <p className="text-slate-700">
          Average Size Calculator. “Condom Size Calculator.” Average Size Calculator, {siteConfig.siteUrl}/condom-size-calculator. Accessed {currentYear}.
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
        <h2 className="text-2xl font-semibold">Measure carefully before choosing a size</h2>
        <p className="mt-3 max-w-3xl text-slate-200">
          Use the calculator as a private educational starting point, then compare the result with product sizing information and manufacturer instructions.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a href="#calculator" className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-100">Use the Calculator Again</a>
          <Link href="/how-to-measure" className="rounded-xl border border-white/30 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10">Open Measurement Guide</Link>
        </div>
      </section>

      <JsonLd data={faqJsonLd ? [appJsonLd, articleJsonLd, faqJsonLd] : [appJsonLd, articleJsonLd]} />
    </article>
  );
}
