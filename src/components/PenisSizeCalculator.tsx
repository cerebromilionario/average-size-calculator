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

function erf(x: number): number {
  const sign = x >= 0 ? 1 : -1;
  const absX = Math.abs(x);

  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const t = 1 / (1 + p * absX);
  const y =
    1 -
    (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
      t *
      Math.exp(-absX * absX));

  return sign * y;
}

function normalCdf(x: number): number {
  return (1 + erf(x / Math.sqrt(2))) / 2;
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
    const hasCountryComparison = measureType === 'erectLength';
    const countryAverage =
      hasCountryComparison && typeof countryData?.[measureType] === 'number'
        ? countryData[measureType]
        : undefined;
    const diffGlobalCm = valueCm - global;
    const diffCountryCm = typeof countryAverage === 'number' ? valueCm - countryAverage : undefined;

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
      countryAverageIn: typeof countryAverage === 'number' ? cmToIn(countryAverage) : undefined,
      estimatedPercentile,
      hasCountryComparison,
      countrySourceLabel: countryData?.sourceLabel,
      countryConfidence: countryData?.confidence
    };
  }, [error, measureType, country, valueCm]);

  return (
    <div id="calculator" className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/60 md:p-8">
      <h2 className="text-2xl font-semibold text-slate-900">Start your private comparison</h2>
      <p className="mt-2 text-sm text-slate-600">For adults only. Your input is calculated on your device and is not stored or sent to a server.</p><div className="mt-4 flex flex-wrap gap-2 text-xs"><span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">Private</span><span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">Browser-based</span><span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700">Educational</span></div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="measurement-value" className="text-sm font-medium text-slate-800">Measurement value</label>
          <input id="measurement-value" inputMode="decimal" className="input-modern" type="number" min="0" step="0.01" value={value} onChange={(e) => setValue(e.target.value)} aria-invalid={Boolean(error)} aria-describedby="measurement-help calculation-error" />
          <p id="measurement-help" className="text-xs text-slate-500">Enter your measured value. Decimals are accepted.</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="measurement-unit" className="text-sm font-medium text-slate-800">Unit</label>
          <select id="measurement-unit" className="input-modern" value={unit} onChange={(e) => setUnit(e.target.value as 'cm' | 'in')}>
            <option value="cm">Centimeters (cm)</option>
            <option value="in">Inches (in)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="measure-type" className="text-sm font-medium text-slate-800">Measurement type</label>
          <select id="measure-type" className="input-modern" value={measureType} onChange={(e) => setMeasureType(e.target.value as MeasureType)}>
            <option value="erectLength">Erect length — global + country comparison</option>
            <option value="erectGirth">Erect girth — global average only</option>
            <option value="flaccidLength">Flaccid length — global average only</option>
          </select>
          <p className="text-xs text-slate-500">Country comparison is currently available for erect length only. Girth and flaccid length use global averages.</p>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="country" className="text-sm font-medium text-slate-800">Country</label>
          <select id="country" className="input-modern" value={country} onChange={(e) => setCountry(e.target.value)}>
            {COUNTRY_AVERAGES_CM.map((item) => <option key={item.country} value={item.country}>{item.country}</option>)}
          </select>
        </div>
      </div>

      {error ? (
        <p id="calculation-error" role="alert" className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">{error}</p>
      ) : null}

      {result ? <CalculatorResult result={result} country={country} /> : null}
    </div>
  );
}
