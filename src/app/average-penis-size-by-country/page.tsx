import type { Metadata } from 'next';
import { COUNTRY_AVERAGES_CM } from '@/data/penisSizeAverages';

export const metadata: Metadata = {
  title: 'Average Penis Size by Country',
  description: 'Country-level educational reference table in centimeters for erect length, flaccid length, and erect girth.'
};

export default function Page() {
  return <div className="space-y-4"><h1 className="text-3xl font-bold">Average Penis Size by Country</h1><p className="text-slate-700">Educational reference table in centimeters. Some countries may have incomplete fields during MVP validation.</p><div className="overflow-auto card"><table className="w-full text-left text-sm"><thead><tr><th>Country</th><th>Erect length</th><th>Flaccid length</th><th>Erect girth</th></tr></thead><tbody>{COUNTRY_AVERAGES_CM.map((row) => <tr key={row.country} className="border-t"><td className="py-2">{row.country}</td><td>{row.erectLength ? `${row.erectLength} cm` : 'N/A'}</td><td>{row.flaccidLength ? `${row.flaccidLength} cm` : 'N/A'}</td><td>{row.erectGirth ? `${row.erectGirth} cm` : 'N/A'}</td></tr>)}</tbody></table></div></div>;
}
