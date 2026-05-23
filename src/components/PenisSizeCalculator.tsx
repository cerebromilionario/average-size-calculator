'use client';

import { useMemo, useState } from 'react';
import { COUNTRY_AVERAGES_CM, GLOBAL_AVERAGES_CM, MeasureType } from '@/data/penisSizeAverages';

const CM_PER_INCH = 2.54;

export default function PenisSizeCalculator() {
  const [value, setValue] = useState('');
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');
  const [country, setCountry] = useState('United States');
  const [measureType, setMeasureType] = useState<MeasureType>('erectLength');

  const result = useMemo(() => {
    const parsed = Number(value);
    if (!value || Number.isNaN(parsed) || parsed <= 0) return null;

    const valueCm = unit === 'cm' ? parsed : parsed * CM_PER_INCH;
    const global = GLOBAL_AVERAGES_CM[measureType];
    const countryData = COUNTRY_AVERAGES_CM.find((item) => item.country === country);
    const countryAverage = countryData?.[measureType];

    const diffGlobalCm = valueCm - global;
    const diffCountryCm = typeof countryAverage === 'number' ? valueCm - countryAverage : null;

    return { valueCm, diffGlobalCm, diffCountryCm, countryAverage };
  }, [value, unit, country, measureType]);

  const formatDiff = (diffCm: number) => {
    const absCm = Math.abs(diffCm).toFixed(2);
    const absIn = (Math.abs(diffCm) / CM_PER_INCH).toFixed(2);
    const direction = diffCm >= 0 ? 'above' : 'below';
    return `${absCm} cm (${absIn} in) ${direction}`;
  };

  return (
    <div className="card space-y-5">
      <h2 className="text-2xl font-semibold">Private Penis Size Calculator</h2>
      <p className="rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900"><strong>Privacy notice:</strong> Calculations happen in your browser only. This tool does not store your measurements.</p>
      <p className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900"><strong>Educational disclaimer:</strong> This tool is informational and not a medical diagnosis or medical advice.</p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="measurement-value" className="text-sm font-medium">Your measurement</label>
          <input id="measurement-value" aria-describedby="measurement-help" className="w-full rounded-md border border-slate-300 p-2" type="number" min="0" step="0.01" value={value} onChange={(e) => setValue(e.target.value)} />
          <p id="measurement-help" className="text-xs text-slate-500">Enter a positive number using your selected unit.</p>
        </div>
        <div className="space-y-1">
          <label htmlFor="measurement-unit" className="text-sm font-medium">Unit</label>
          <select id="measurement-unit" className="w-full rounded-md border border-slate-300 p-2" value={unit} onChange={(e) => setUnit(e.target.value as 'cm' | 'in')}>
            <option value="cm">Centimeters (cm)</option>
            <option value="in">Inches (in)</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="country" className="text-sm font-medium">Country</label>
          <select id="country" className="w-full rounded-md border border-slate-300 p-2" value={country} onChange={(e) => setCountry(e.target.value)}>
            {COUNTRY_AVERAGES_CM.map((item) => <option key={item.country} value={item.country}>{item.country}</option>)}
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="measure-type" className="text-sm font-medium">Measurement type</label>
          <select id="measure-type" className="w-full rounded-md border border-slate-300 p-2" value={measureType} onChange={(e) => setMeasureType(e.target.value as MeasureType)}>
            <option value="erectLength">Erect length</option>
            <option value="flaccidLength">Flaccid length</option>
            <option value="erectGirth">Erect girth</option>
          </select>
        </div>
      </div>

      {result && (
        <div className="space-y-2 rounded-lg bg-brand-50 p-4 text-sm text-slate-800">
          <p>Your measurement is {formatDiff(result.diffGlobalCm)} the global average.</p>
          {result.diffCountryCm !== null ? (
            <p>Compared with the average in {country}, your measurement is {formatDiff(result.diffCountryCm)} the average.</p>
          ) : (
            <p>Country comparison for {country} is currently unavailable for this measurement type.</p>
          )}
        </div>
      )}
    </div>
  );
}
