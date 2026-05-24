import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { siteConfig } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <nav className="container-page flex flex-wrap gap-4 py-4 text-sm" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/penis-size-calculator">Calculator</Link>
            <Link href="/average-penis-size">Average Size</Link>
            <Link href="/average-penis-size-by-country">By Country</Link>
            <Link href="/how-to-measure">How to Measure</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="container-page">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
