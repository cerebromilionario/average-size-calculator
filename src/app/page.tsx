import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Average Size Calculator',
  description: 'Educational hub with a private penis size calculator, measurement guidance, and country/global average references.'
};

export default function HomePage() {
  return <div className="space-y-6"><h1 className="text-3xl font-bold">Average Size Calculator</h1><p className="text-slate-700">A private educational resource to compare measurements with global and country averages using a respectful, clinical tone.</p><p className="text-slate-700">You can use the calculator, review measurement methodology, and read contextual articles before drawing conclusions.</p><div className="flex flex-wrap gap-3"><Link href="/penis-size-calculator" className="inline-block rounded-lg bg-brand-500 px-4 py-2 text-white">Use the Calculator</Link><Link href="/how-to-measure" className="inline-block rounded-lg border border-slate-300 px-4 py-2">How to Measure</Link></div></div>;
}
