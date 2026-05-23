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
      <p className="text-sm text-slate-600">This tool is private. Your measurement is calculated in your browser and is not stored.</p>
      <p className="text-sm text-slate-600">This tool is for educational purposes only and is not medical advice.</p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium">Your measurement</span>
          <input className="w-full rounded-md border border-slate-300 p-2" type="number" min="0" step="0.01" value={value} onChange={(e) => setValue(e.target.value)} />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">Unit</span>
          <select className="w-full rounded-md border border-slate-300 p-2" value={unit} onChange={(e) => setUnit(e.target.value as 'cm' | 'in')}>
            <option value="cm">Centimeters (cm)</option>
            <option value="in">Inches (in)</option>
          </select>
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">Country</span>
          <select className="w-full rounded-md border border-slate-300 p-2" value={country} onChange={(e) => setCountry(e.target.value)}>
            {COUNTRY_AVERAGES_CM.map((item) => <option key={item.country} value={item.country}>{item.country}</option>)}
          </select>
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">Measurement type</span>
          <select className="w-full rounded-md border border-slate-300 p-2" value={measureType} onChange={(e) => setMeasureType(e.target.value as MeasureType)}>
            <option value="erectLength">Erect length</option>
            <option value="flaccidLength">Flaccid length</option>
            <option value="erectGirth">Erect girth</option>
          </select>
        </label>
      </div>

      {result && (
        <div className="rounded-lg bg-brand-50 p-4 text-sm text-slate-800 space-y-2">
          <p>Your measurement is {formatDiff(result.diffGlobalCm)} the global average.</p>
          {result.diffCountryCm !== null && <p>Compared with the average in {country}, your measurement is {formatDiff(result.diffCountryCm)} the average.</p>}
        </div>
      )}
    </div>
  );
}
