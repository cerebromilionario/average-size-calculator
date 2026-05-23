'use client';

import { useMemo, useState } from 'react';
import { COUNTRY_AVERAGES_CM, GLOBAL_AVERAGES_CM, MeasureType } from '@/data/penisSizeAverages';
import CalculatorResult from '@/components/CalculatorResult';

const CM_PER_INCH = 2.54;
const MIN_CM = 3;
const MAX_CM = 30;

const measurementLabels: Record<MeasureType, string> = {
  erectLength: 'Erect length',
  erectGirth: 'Erect girth',
  flaccidLength: 'Flaccid length'
};

const measurementStdDevCm: Record<MeasureType, number> = {
  erectLength: 1.66,
  erectGirth: 1.10,
  flaccidLength: 1.57
};

function cmToIn(cm: number) {
  return cm / CM_PER_INCH;
}

function normalCdf(x: number) {
  return (1 + Math.erf(x / Math.sqrt(2))) / 2;
}

export default function PenisSizeCalculator() {
  const [value, setValue] = useState('');
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');
  const [country, setCountry] = useState('United States');
  const [measureType, setMeasureType] = useState<MeasureType>('erectLength');

  const parsed = Number(value);
  const valueCm = unit === 'cm' ? parsed : parsed * CM_PER_INCH;

  const error = useMemo(() => {
    if (value.trim().length === 0) return 'Enter a measurement value to calculate.';
    if (Number.isNaN(parsed)) return 'Use numbers only (decimals are allowed).';
    if (parsed <= 0) return 'Please enter a positive measurement.';
    if (valueCm < MIN_CM) return 'This value is below the expected adult range. Please re-check your measurement.';
    if (valueCm > MAX_CM) return 'This value is above the expected adult range. Please verify your unit and measurement.';
    return '';
  }, [parsed, value, valueCm]);

  const result = useMemo(() => {
    if (error) return null;
    const global = GLOBAL_AVERAGES_CM[measureType];
    const countryData = COUNTRY_AVERAGES_CM.find((item) => item.country === country);
    const countryAverage = countryData?.[measureType];
    const diffGlobalCm = valueCm - global;
    const diffCountryCm = typeof countryAverage === 'number' ? valueCm - countryAverage : null;

    const std = measurementStdDevCm[measureType];
    const z = (valueCm - global) / std;
    const estimatedPercentile = Math.max(1, Math.min(99, Math.round(normalCdf(z) * 100)));

    return {
      measurementLabel: measurementLabels[measureType],
      valueCm,
      valueIn: cmToIn(valueCm),
      globalAverageCm: global,
      globalAverageIn: cmToIn(global),
      diffGlobalCm,
      diffCountryCm,
      countryAverageCm: countryAverage,
      countryAverageIn: typeof countryAverage === 'number' ? cmToIn(countryAverage) : null,
      estimatedPercentile
    };
  }, [error, measureType, country, valueCm]);

  return (
    <div id="calculator" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-semibold text-slate-900">Start your private comparison</h2>
      <p className="mt-2 text-sm text-slate-600">For adults only. Your input is calculated on your device and is not stored or sent to a server.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="measurement-value" className="text-sm font-medium text-slate-800">Measurement value</label>
          <input id="measurement-value" inputMode="decimal" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base" type="number" min="0" step="0.01" value={value} onChange={(e) => setValue(e.target.value)} aria-invalid={Boolean(error)} aria-describedby="measurement-help calculation-error" />
          <p id="measurement-help" className="text-xs text-slate-500">Enter your measured value. Decimals are accepted.</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="measurement-unit" className="text-sm font-medium text-slate-800">Unit</label>
          <select id="measurement-unit" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base" value={unit} onChange={(e) => setUnit(e.target.value as 'cm' | 'in')}>
            <option value="cm">Centimeters (cm)</option>
            <option value="in">Inches (in)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="measure-type" className="text-sm font-medium text-slate-800">Measurement type</label>
          <select id="measure-type" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base" value={measureType} onChange={(e) => setMeasureType(e.target.value as MeasureType)}>
            <option value="erectLength">Erect length</option>
            <option value="erectGirth">Erect girth</option>
            <option value="flaccidLength">Flaccid length</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="country" className="text-sm font-medium text-slate-800">Country</label>
          <select id="country" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base" value={country} onChange={(e) => setCountry(e.target.value)}>
            {COUNTRY_AVERAGES_CM.map((item) => <option key={item.country} value={item.country}>{item.country}</option>)}
          </select>
        </div>
      </div>

      {error ? (
        <p id="calculation-error" role="alert" className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">{error}</p>
      ) : null}

      {result ? <CalculatorResult result={result} country={country} /> : null}
    </div>
  );
}
