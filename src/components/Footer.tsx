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
            <Link href="/penis-size-calculator">Calculator</Link><br/>
            <Link href="/penis-size-percentile-calculator">Percentile Calculator</Link><br/>
            <Link href="/average-penis-size-by-country">By Country</Link>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-semibold text-slate-900">Learn</h3>
            <Link href="/average-penis-size">Average Size</Link><br/>
            <Link href="/average-penis-girth">Average Penis Girth</Link><br/>
            <Link href="/how-to-measure">How to Measure</Link><br/>
            <Link href="/is-my-penis-small">Is My Penis Small?</Link><br/>
            <Link href="/is-5-inches-average">Is 5 Inches Average?</Link><br/>
            <Link href="/does-penis-size-matter">Does Size Matter?</Link><br/>
            <Link href="/methodology">Methodology</Link><br/>
            <Link href="/data-sources">Data Sources</Link><br/>
            <Link href="/bone-pressed-vs-non-bone-pressed">Bone-Pressed Measurement</Link>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-semibold text-slate-900">Legal & Contact</h3>
            <Link href="/privacy-policy">Privacy Policy</Link><br/>
            <Link href="/terms-of-use">Terms of Use</Link><br/>
            <Link href="/contact">Contact</Link><br/>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
