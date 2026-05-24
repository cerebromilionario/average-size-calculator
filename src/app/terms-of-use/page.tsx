import type { Metadata } from 'next';
import Link from 'next/link';

const effectiveDate = 'May 24, 2026';
const termsUrl = 'https://averagesizecalculator.com/terms-of-use';

export const metadata: Metadata = {
  title: 'Terms of Use | Average Size Calculator',
  description:
    'Read the Terms of Use for Average Size Calculator, including educational use, medical disclaimer, data limitations, acceptable use, and external source information.'
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  headline: 'Terms of Use',
  description:
    'Terms of Use for Average Size Calculator covering educational use, medical disclaimer, data limitations, and responsible use expectations.',
  publisher: {
    '@type': 'Organization',
    name: 'Average Size Calculator'
  },
  mainEntityOfPage: termsUrl,
  url: termsUrl
};

export default function Page() {
  return (
    <article className="mx-auto w-full max-w-3xl py-8 sm:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="mb-8 border-b border-slate-200 pb-6 sm:mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Terms of Use</h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          These Terms of Use explain how you may use Average Size Calculator. By using this website, you agree to use
          it responsibly and understand that the information provided is for educational purposes only.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          <span className="font-medium text-slate-800">Effective date:</span> {effectiveDate}
        </p>
      </header>

      <div className="space-y-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Educational purpose</h2>
          <p className="mt-3 leading-7">
            Average Size Calculator provides educational tools and reference content to help users understand
            statistical average ranges. Calculator results are estimates based on available average data and should be
            interpreted as general references, not as individual assessments.
          </p>
          <p className="mt-3 leading-7">
            Statistical averages do not describe every person and should not be used alone for medical decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">No medical advice</h2>
          <p className="mt-3 leading-7">
            Average Size Calculator does not provide medical advice, diagnosis, or treatment. The calculator and
            educational content are not a substitute for a qualified healthcare professional.
          </p>
          <p className="mt-3 leading-7">
            If you have concerns about pain, development, sexual function, significant anxiety, or your health, consult
            a licensed healthcare professional. Do not use this website for medical emergencies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Adults only</h2>
          <p className="mt-3 leading-7">
            This website is intended for adults only and is not directed to children or minors. Users who are under the
            age of majority in their jurisdiction should not use this tool. The content is educational, but it covers a
            sensitive topic.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Calculator results and limitations</h2>
          <p className="mt-3 leading-7">
            Results depend on the measurement entered by the user. Incorrect measurement method or input can change the
            output. Global and country averages have known limitations, and country-level data may come from compiled
            sources with varying methodologies.
          </p>
          <p className="mt-3 leading-7">
            Small differences should not be overinterpreted. Any percentiles shown are educational estimates rather than
            precise clinical findings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Country data</h2>
          <p className="mt-3 leading-7">
            Country comparison features use compiled reference data. The country table currently focuses on average
            erect length and does not provide complete country-level data for every category, such as girth or flaccid
            length.
          </p>
          <p className="mt-3 leading-7">
            For many users, the global average can be a more stable reference point. For details, see{' '}
            <Link href="/average-penis-size-by-country" className="underline">
              Average Size by Country
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">User responsibility</h2>
          <p className="mt-3 leading-7">By using this website, you agree to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
            <li>Use the site lawfully and responsibly.</li>
            <li>Not attempt to attack, disrupt, or abuse the website or its infrastructure.</li>
            <li>Not use the content to harass, shame, or humiliate other people.</li>
            <li>Not treat the results as personal judgment, diagnosis, or medical evaluation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Privacy</h2>
          <p className="mt-3 leading-7">
            Your use of this website is also governed by our{' '}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            . The calculator is designed to run in the browser, and measurement inputs should not be stored by the
            site. Contact form data is processed only when voluntarily submitted.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">External links and sources</h2>
          <p className="mt-3 leading-7">
            Average Size Calculator may link to third-party sources such as PubMed, WorldData.info, or other reference
            websites. External links are provided for educational reference.
          </p>
          <p className="mt-3 leading-7">
            We do not control third-party content, policies, or availability. External sources can change over time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Intellectual property</h2>
          <p className="mt-3 leading-7">
            Unless otherwise stated, the site text, layout, branding, and original content belong to Average Size
            Calculator, excluding clearly cited third-party sources.
          </p>
          <p className="mt-3 leading-7">
            You may use the website for personal and educational purposes. You may not copy, republish, or commercially
            exploit site content without permission, except where applicable law allows.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">No warranties</h2>
          <p className="mt-3 leading-7">
            This website is provided on an “as is” basis. We do not guarantee that content will always be complete,
            current, or free from errors.
          </p>
          <p className="mt-3 leading-7">We may update, suspend, or remove parts of the website at any time.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Limitation of liability</h2>
          <p className="mt-3 leading-7">
            You use this tool at your own discretion and risk. Average Size Calculator is not responsible for decisions
            made based on calculator output or related content.
          </p>
          <p className="mt-3 leading-7">
            Nothing on this website should be treated as a substitute for professional advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Changes to these terms</h2>
          <p className="mt-3 leading-7">
            We may update these Terms of Use from time to time. When relevant changes are made, the effective date on
            this page will be updated. Continued use of the website after changes means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-3 leading-7">
            If you have questions about these Terms of Use, please contact us through the{' '}
            <Link href="/contact" className="underline">
              Contact page
            </Link>
            .
          </p>
          <p className="mt-3 leading-7">
            You can also visit our <Link href="/" className="underline">Home page</Link>, use the{' '}
            <Link href="/penis-size-calculator" className="underline">Penis Size Calculator</Link>, or read{' '}
            <Link href="/average-penis-size" className="underline">Average Penis Size</Link> for educational
            background.
          </p>
        </section>
      </div>
    </article>
  );
}
