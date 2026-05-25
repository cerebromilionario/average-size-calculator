'use client';

import { useMemo, useState } from 'react';
import { percentileFromZScore, STATISTICAL_REFERENCES } from '@/data/statisticalReferences';

const CM_PER_INCH = 2.54;
const MIN_CM = 3;
const MAX_CM = 30;

function toCm(value: number, unit: 'cm' | 'in') {
  return unit === 'cm' ? value : value * CM_PER_INCH;
}

function interpretation(zScore: number) {
  if (zScore < -0.5) return 'below average';
  if (zScore > 0.5) return 'above average';
  return 'around average';
}

export default function PercentileEstimator() {
  const [length, setLength] = useState('');
  const [girth, setGirth] = useState('');
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');

  const lengthNumber = Number(length);
  const girthNumber = Number(girth);
  const lengthCm = toCm(lengthNumber, unit);
  const girthCm = toCm(girthNumber, unit);

  const error = useMemo(() => {
    if (!length.trim() || !girth.trim()) return 'Enter both erect length and erect girth to estimate percentiles.';
    if (Number.isNaN(lengthNumber) || Number.isNaN(girthNumber)) return 'Use numbers only (decimals are allowed).';
    if (lengthNumber <= 0 || girthNumber <= 0) return 'Please enter positive measurements.';
    if (lengthCm < MIN_CM || girthCm < MIN_CM) return 'One or more values are below the expected adult range. Please re-check measurements.';
    if (lengthCm > MAX_CM || girthCm > MAX_CM) return 'One or more values are above the expected adult range. Please verify units and values.';
    return '';
  }, [girth, girthCm, girthNumber, length, lengthCm, lengthNumber]);

  const result = useMemo(() => {
    if (error) return null;

    const lengthZ = (lengthCm - STATISTICAL_REFERENCES.averageErectLengthCm) / STATISTICAL_REFERENCES.standardDeviationCm.erectLength;
    const girthZ = (girthCm - STATISTICAL_REFERENCES.averageErectGirthCm) / STATISTICAL_REFERENCES.standardDeviationCm.erectGirth;

    return {
      lengthZ,
      girthZ,
      lengthPercentile: percentileFromZScore(lengthZ),
      girthPercentile: percentileFromZScore(girthZ)
    };
  }, [error, girthCm, lengthCm]);

  return (
    <section id="calculator" className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/60 md:p-8">
      <h2 className="text-2xl font-semibold text-slate-900">Percentile Estimator</h2>
      <p className="mt-2 text-sm text-slate-600">Estimate erect length and girth percentile with global reference averages. Results are educational and private.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="length" className="text-sm font-medium text-slate-800">Erect length</label>
          <input id="length" className="input-modern" inputMode="decimal" type="number" min="0" step="0.01" value={length} onChange={(e) => setLength(e.target.value)} />
        </div>

        <div className="space-y-2">
          <label htmlFor="girth" className="text-sm font-medium text-slate-800">Erect girth</label>
          <input id="girth" className="input-modern" inputMode="decimal" type="number" min="0" step="0.01" value={girth} onChange={(e) => setGirth(e.target.value)} />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="unit" className="text-sm font-medium text-slate-800">Unit</label>
          <select id="unit" className="input-modern" value={unit} onChange={(e) => setUnit(e.target.value as 'cm' | 'in')}>
            <option value="cm">Centimeters (cm)</option>
            <option value="in">Inches (in)</option>
          </select>
        </div>
      </div>

      {error ? <p className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">{error}</p> : null}

      {result ? (
        <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-semibold text-slate-900">Estimated statistical result</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <p className="rounded-lg bg-white p-3 text-sm text-slate-700"><strong>Length percentile estimate:</strong> {result.lengthPercentile}th</p>
            <p className="rounded-lg bg-white p-3 text-sm text-slate-700"><strong>Girth percentile estimate:</strong> {result.girthPercentile}th</p>
            <p className="rounded-lg bg-white p-3 text-sm text-slate-700"><strong>Length z-score:</strong> {result.lengthZ.toFixed(2)} ({interpretation(result.lengthZ)})</p>
            <p className="rounded-lg bg-white p-3 text-sm text-slate-700"><strong>Girth z-score:</strong> {result.girthZ.toFixed(2)} ({interpretation(result.girthZ)})</p>
          </div>
          <p className="text-sm text-slate-600">A 50th percentile result means your measurement is close to the reference average. A percentile is not a medical diagnosis and should be interpreted as an educational estimate.</p>
          <p className="text-sm text-slate-600">In a normal distribution, the 16th percentile is about one standard deviation below average, while the 84th percentile is about one standard deviation above average.</p>
        </div>
      ) : null}
    </section>
  );
}
