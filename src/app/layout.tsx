import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Average Size Calculator',
  description: 'Educational anatomy resource with a private calculator to compare measurements with global and country averages.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <nav className="container-page py-4 flex flex-wrap gap-4 text-sm">
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
      </body>
    </html>
  );
}
