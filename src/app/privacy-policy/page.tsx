import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { createWebPageJsonLd } from '@/lib/jsonLd';

const effectiveDate = 'May 25, 2026';

export const metadata: Metadata = {
  title: 'Privacy Policy | Average Size Calculator',
  description:
    'Read the Average Size Calculator privacy policy. Learn how private calculations work, what data is not stored, and how this educational tool protects user privacy.'
};

const jsonLd = createWebPageJsonLd({
  name: 'Privacy Policy',
  description:
    'Privacy policy for Average Size Calculator explaining local browser-based calculations and limited technical processing.',
  path: '/privacy-policy'
});


export default function Page() {
  return (
    <article className="mx-auto w-full max-w-3xl py-8 sm:py-10">
      <JsonLd data={jsonLd} />

      <header className="mb-8 border-b border-slate-200 pb-6 sm:mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          Your privacy matters. Average Size Calculator is designed to provide private educational calculations without
          requiring an account or storing your measurement input.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          <span className="font-medium text-slate-800">Effective date:</span> {effectiveDate}
        </p>
      </header>

      <div className="space-y-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Information we do not collect</h2>
          <p className="mt-3 leading-7">
            The measurement you enter into the calculator is processed in your browser and is not stored by Average
            Size Calculator.
          </p>
          <p className="mt-3 leading-7">We do not collect:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
            <li>Calculator measurements entered by you.</li>
            <li>Your name.</li>
            <li>Your email address, unless you choose to share it through our <Link href="/contact" className="underline">Contact page</Link>.</li>
            <li>User account data (we do not require accounts).</li>
            <li>Personal medical records.</li>
            <li>Payment information.</li>
            <li>Personal photos or images.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Calculator privacy</h2>
          <p className="mt-3 leading-7">
            Your measurement stays on your device. The calculator does not require an account and does not
            intentionally store your input on our servers.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
            <li>The calculator runs in your browser.</li>
            <li>Your input is used only to generate the on-screen result.</li>
            <li>The site does not need to send your measurement to a database to calculate a result.</li>
            <li>The site does not create an individual profile based on your measurement.</li>
            <li>Refreshing or closing the page clears calculator input from the interface.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Information we may collect automatically</h2>
          <p className="mt-3 leading-7">
            Like most websites, our hosting provider may process basic technical information necessary to deliver the
            site and maintain security.
          </p>
          <p className="mt-3 leading-7">This technical information may include:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
            <li>IP address.</li>
            <li>Browser type and version.</li>
            <li>General device information.</li>
            <li>Pages visited.</li>
            <li>Date and time of requests.</li>
            <li>Security and error logs.</li>
          </ul>
          <p className="mt-3 leading-7">
            This information is used for site delivery, security, and technical diagnostics, not to identify the
            measurement entered in the calculator.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Analytics</h2>
          <p className="mt-3 leading-7">
            At this time, Average Size Calculator does not use third-party analytics tools such as Google Analytics. If
            analytics are added in the future, this policy will be updated to explain what is collected and how it is
            used.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Cookies and advertising</h2>
          <p className="mt-3 leading-7">
            We use necessary cookies and local storage to remember your cookie choices and keep core site
            functionality working. Optional categories are available through our cookie settings panel: Preferences,
            Analytics, and Marketing.
          </p>
          <p className="mt-3 leading-7">
            If you accept Marketing cookies, the site may load advertising scripts from third-party ad networks such as
            Adsterra. These third parties may use cookies, identifiers, or similar technologies to display ads,
            measure performance, and prevent abuse. Advertising scripts are not loaded unless Marketing consent is
            enabled in Cookie settings.
          </p>
          <p className="mt-3 leading-7">
            Calculator measurements are not intentionally sent to advertising networks by Average Size Calculator. The
            calculator is designed to run in your browser and not store your measurement input.
          </p>
          <p className="mt-3 leading-7">
            You can change your choices at any time using <span className="font-medium text-slate-900">Cookie settings</span>
            in the footer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Contact information</h2>
          <p className="mt-3 leading-7">
            If you contact us, you may voluntarily provide your name, email address, subject, and message content. We
            use this information only to review and respond to your message.
          </p>
          <p className="mt-3 leading-7">
            Contact form submissions are processed and forwarded by Netlify Forms. Please do not include sensitive medical
            information in contact messages.
          </p>
          <p className="mt-3 leading-7">
            We do not sell your contact information or share it for marketing without your consent. You can reach us on
            our <Link href="/contact" className="underline">Contact page</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Third-party links</h2>
          <p className="mt-3 leading-7">
            Our pages may include links to third-party websites or sources, such as PubMed or WorldData.info. When you
            click an external link, you leave Average Size Calculator.
          </p>
          <p className="mt-3 leading-7">External websites have their own privacy practices and policies.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Educational and health disclaimer</h2>
          <p className="mt-3 leading-7">
            Average Size Calculator is an educational tool. It does not provide medical diagnosis and does not replace
            professional healthcare advice.
          </p>
          <p className="mt-3 leading-7">
            If you have concerns about health, development, pain, or sexual function, seek guidance from a qualified
            healthcare professional.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Data retention</h2>
          <p className="mt-3 leading-7">Calculator measurements are not stored by the site.</p>
          <p className="mt-3 leading-7">
            Contact messages, if sent, may be retained only as long as reasonably necessary to respond and manage
            follow-up communication.
          </p>
          <p className="mt-3 leading-7">
            Technical logs created by hosting or infrastructure providers may be retained according to provider
            operational and security practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Children&apos;s privacy</h2>
          <p className="mt-3 leading-7">
            This site is intended for adults and is not directed to children. We do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">International users</h2>
          <p className="mt-3 leading-7">
            Average Size Calculator can be accessed from multiple countries. Technical information needed to deliver the
            site may be processed on servers or by service providers located outside your country.
          </p>
          <p className="mt-3 leading-7">
            By using the site, you understand that such technical processing may occur as part of normal website
            delivery and security operations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Changes to this policy</h2>
          <p className="mt-3 leading-7">
            We may update this Privacy Policy from time to time. When relevant changes are made, we will update the
            effective date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Contact us</h2>
          <p className="mt-3 leading-7">
            If you have questions about this Privacy Policy, please contact us through the{' '}
            <Link href="/contact" className="underline">Contact page</Link>.
          </p>
          <p className="mt-3 leading-7">
            You can also return to our <Link href="/" className="underline">Home page</Link> or use the{' '}
            <Link href="/penis-size-calculator" className="underline">Penis Size Calculator</Link>.
          </p>
        </section>
      </div>
    </article>
  );
}
