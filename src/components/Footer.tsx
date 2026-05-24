import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import CookieSettingsButton from '@/components/CookieSettingsButton';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/penis-size-calculator', label: 'Penis Size Calculator' },
  { href: '/average-penis-size', label: 'Average Penis Size' },
  { href: '/average-penis-size-by-country', label: 'Average Size by Country' },
  { href: '/how-to-measure', label: 'How to Measure' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-use', label: 'Terms of Use' },
  { href: '/contact', label: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="container-page py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">{siteConfig.name}</h2>
            <p className="max-w-2xl text-sm text-slate-700">A private educational size comparison tool.</p>
            <p className="max-w-2xl text-xs text-slate-600">
              This site is for educational purposes only and is not medical advice.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-700 hover:text-slate-900 hover:underline">
                {link.label}
              </Link>
            ))}
            <CookieSettingsButton />
          </nav>
        </div>
        <p className="mt-8 text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
