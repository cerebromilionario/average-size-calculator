import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Average Size Calculator' };

export default function HomePage() {
  return <div className="space-y-6"><h1 className="text-3xl font-bold">Average Size Calculator</h1><p className="text-slate-700">A private educational tool to compare measurements with global and country averages in a respectful, clinical style.</p><Link href="/penis-size-calculator" className="inline-block rounded-lg bg-brand-500 px-4 py-2 text-white">Use the Calculator</Link></div>;
}
