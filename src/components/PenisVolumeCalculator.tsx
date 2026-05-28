'use client';

import { useMemo, useState } from 'react';

const CM_PER_INCH = 2.54;
const CUBIC_INCH_TO_CM3 = 16.387064;
const CM3_TO_CUBIC_INCH = 0.0610237;
const MIN_LENGTH_CM = 3;
const MAX_LENGTH_CM = 35;
const MIN_GIRTH_CM = 3;
const MAX_GIRTH_CM = 25;

type Unit = 'cm' | 'in';

function toCm(value: number, unit: Unit) {
  return unit === 'cm' ? value : value * CM_PER_INCH;
}

function formatCm3(value: number) {
  return value.toFixed(1);
}

function formatCubicInches(value: number) {
  return value.toFixed(2);
}

export default function PenisVolumeCalculator() {
  const [length, setLength] = useState('');
  const [girth, setGirth] = useState('');
  const [unit, setUnit] = useState<Unit>('cm');

  const lengthNumber = Number(length);
  const girthNumber = Number(girth);
  const lengthCm = toCm(lengthNumber, unit);
  const girthCm = toCm(girthNumber, unit);

  const error = useMemo(() => {
    if (!length.trim() || !girth.trim()) return 'Enter both length and girth to estimate volume.';
    if (Number.isNaN(lengthNumber) || Number.isNaN(girthNumber)) return 'Use numbers only. Decimals are allowed.';
    if (lengthNumber <= 0 || girthNumber <= 0) return 'Please enter positive measurements greater than zero.';
    if (lengthCm < MIN_LENGTH_CM) return 'The length value looks unusually low. Please re-check the measurement and unit.';
    if (girthCm < MIN_GIRTH_CM) return 'The girth value looks unusually low. Remember that girth means circumference, not width.';
    if (lengthCm > MAX_LENGTH_CM) return 'The length value looks unusually high. Please verify the unit and measurement before interpreting the result.';
    if (girthCm > MAX_GIRTH_CM) return 'The girth value looks unusually high. Please verify that you entered circumference and the correct unit.';
    return '';
  }, [girth, girthCm, girthNumber, length, lengthCm, lengthNumber]);

  const result = useMemo(() => {
    if (error) return null;

    if (unit === 'in') {
      const cubicInches = (lengthNumber * girthNumber ** 2) / (4 * Math.PI);
      const cm3 = cubicInches * CUBIC_INCH_TO_CM3;
      return { cm3, ml: cm3, cubicInches };
    }

    const cm3 = (lengthNumber * girthNumber ** 2) / (4 * Math.PI);
    const cubicInches = cm3 * CM3_TO_CUBIC_INCH;
    return { cm3, ml: cm3, cubicInches };
  }, [error, girthNumber, lengthNumber, unit]);

  return (
    <section id="calculator" className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/70 md:p-8" aria-labelledby="volume-calculator-heading">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Private browser calculator</p>
          <h2 id="volume-calculator-heading" className="mt-2 text-2xl font-semibold text-slate-900">Estimate approximate volume</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Enter length and girth/circumference using the same unit. The calculator treats girth as the circumference around the shaft, not straight width, and uses a simplified cylinder model.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">No backend submission</span>
            <span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">No input storage</span>
            <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700">Educational estimate</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="volume-length" className="text-sm font-medium text-slate-800">Length</label>
              <input
                id="volume-length"
                inputMode="decimal"
                className="input-modern"
                type="number"
                min="0"
                step="0.01"
                value={length}
                onChange={(event) => setLength(event.target.value)}
                aria-describedby="volume-input-help volume-calculation-error"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="volume-girth" className="text-sm font-medium text-slate-800">Girth / circumference</label>
              <input
                id="volume-girth"
                inputMode="decimal"
                className="input-modern"
                type="number"
                min="0"
                step="0.01"
                value={girth}
                onChange={(event) => setGirth(event.target.value)}
                aria-describedby="volume-input-help volume-calculation-error"
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="volume-unit" className="text-sm font-medium text-slate-800">Unit</label>
              <select id="volume-unit" className="input-modern" value={unit} onChange={(event) => setUnit(event.target.value as Unit)}>
                <option value="cm">Centimeters (cm)</option>
                <option value="in">Inches (in)</option>
              </select>
              <p id="volume-input-help" className="text-xs leading-5 text-slate-500">
                Use one unit for both fields. Girth means circumference around the body, not a straight-line width measurement.
              </p>
            </div>
          </div>

          {error ? (
            <p id="volume-calculation-error" role="alert" className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">{error}</p>
          ) : null}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Estimated result</h3>
          {result ? (
            <div className="mt-4 space-y-4">
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">cm³</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{formatCm3(result.cm3)}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">mL</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{formatCm3(result.ml)}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Cubic inches</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{formatCubicInches(result.cubicInches)}</p>
                </div>
              </div>
              <p className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-950">
                This is a geometric estimate based on a cylinder model. It is not a medical measurement and should be interpreted only as educational context.
              </p>
              <p className="text-xs leading-5 text-slate-500">Formula used: volume = length × girth² / (4π).</p>
            </div>
          ) : (
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white p-5 text-sm leading-6 text-slate-600">
              Your approximate volume will appear here after you enter valid length and girth measurements.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
