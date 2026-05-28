import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import CookieSettingsButton from '@/components/CookieSettingsButton';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/90">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-base font-semibold">{siteConfig.name}</h2>
            <p className="mt-3 text-sm text-slate-600">Private educational comparison tool with modern, respectful health-tech design.</p>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-semibold text-slate-900">Tools</h3>
            <Link href="/penis-size-calculator">Penis Size Calculator</Link><br />
            <Link href="/penis-size-percentile-calculator">Percentile Calculator</Link>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-semibold text-slate-900">Learn</h3>
            <Link href="/average-penis-size">Average Penis Size</Link><br />
            <Link href="/average-penis-girth">Average Penis Girth</Link><br />
            <Link href="/average-penis-size-by-country">Average by Country</Link><br />
            <Link href="/is-my-penis-small">Is My Penis Small?</Link><br />
            <Link href="/does-penis-size-matter">Does Penis Size Matter?</Link><br />
            <Link href="/how-to-measure">How to Measure</Link><br />
            <Link href="/bone-pressed-vs-non-bone-pressed">Bone-Pressed Measurement</Link>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-semibold text-slate-900">Trust</h3>
            <Link href="/methodology">Methodology</Link><br />
            <Link href="/data-sources">Data Sources</Link><br />
            <Link href="/about">About</Link><br />
            <Link href="/glossary">Glossary</Link><br />
            <Link href="/privacy-policy">Privacy Policy</Link><br />
            <Link href="/terms-of-use">Terms of Use</Link><br />
            <Link href="/contact">Contact</Link><br />
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
