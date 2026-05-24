'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/penis-size-calculator', label: 'Calculator' },
  { href: '/average-penis-size', label: 'Average Size' },
  { href: '/average-penis-size-by-country', label: 'By Country' },
  { href: '/how-to-measure', label: 'How to Measure' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <nav className="container-page py-3" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold text-slate-900 sm:text-base">Average Size Calculator</Link>
          <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm md:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>Menu</button>
          <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            {links.map((l) => <Link key={l.href} href={l.href} className="hover:text-slate-900">{l.label}</Link>)}
          </div>
        </div>
        {open && <div className="mt-3 grid gap-2 rounded-xl border border-slate-200 bg-white p-3 text-sm md:hidden">{links.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}</div>}
      </nav>
    </header>
  );
}
