'use client';

import { useMemo, useState } from 'react';

type Unit = 'cm' | 'mm' | 'in';

type FitResult = {
  category: string;
  explanation: string;
};

const UNIT_LABELS: Record<Unit, string> = {
  cm: 'centimeters',
  mm: 'millimeters',
  in: 'inches'
};

function parseInput(value: string) {
  if (!value.trim()) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

function toMillimeters(value: number, unit: Unit) {
  if (unit === 'cm') return value * 10;
  if (unit === 'in') return value * 25.4;
  return value;
}

function getFitResult(nominalWidth: number): FitResult {
  if (nominalWidth < 49) {
    return {
      category: 'Snug / smaller fit range',
      explanation: 'Your estimated nominal width is in a snug range. Some users may prefer condoms labeled snug, slim, or close fit.'
    };
  }

  if (nominalWidth <= 53) {
    return {
      category: 'Regular / standard fit range',
      explanation: 'Your estimated nominal width is near a regular fit range. Many standard condoms are in this general range, but brand sizing can vary.'
    };
  }

  if (nominalWidth <= 57) {
    return {
      category: 'Large fit range',
      explanation: 'Your estimated nominal width is in a larger fit range. Some users may prefer condoms labeled large or comfort fit.'
    };
  }

  return {
    category: 'XL / wider fit range',
    explanation: 'Your estimated nominal width is in a wider range. Some users may prefer condoms labeled XL, extra large, or wider fit.'
  };
}

export default function CondomSizeCalculator() {
  const [girth, setGirth] = useState('');
  const [length, setLength] = useState('');
  const [unit, setUnit] = useState<Unit>('cm');

  const result = useMemo(() => {
    const girthValue = parseInput(girth);
    const lengthValue = parseInput(length);

    const warnings: string[] = [];

    if (girthValue === null) {
      return {
        canShowResult: false,
        error: 'Enter girth or circumference to estimate condom nominal width.',
        warnings,
        girthMm: null,
        nominalWidth: null,
        fit: null
      };
    }

    if (Number.isNaN(girthValue)) {
      return {
        canShowResult: false,
        error: 'Use a numeric girth value. Decimals are allowed.',
        warnings,
        girthMm: null,
        nominalWidth: null,
        fit: null
      };
    }

    if (girthValue <= 0) {
      return {
        canShowResult: false,
        error: 'Girth must be greater than zero.',
        warnings,
        girthMm: null,
        nominalWidth: null,
        fit: null
      };
    }

    if (lengthValue !== null && (Number.isNaN(lengthValue) || lengthValue <= 0)) {
      warnings.push('Optional length was ignored because it must be a positive number if provided. Girth remains the main fit input.');
    }

    const girthMm = toMillimeters(girthValue, unit);
    const nominalWidth = girthMm / 2;

    if (girthMm < 60 || girthMm > 220) {
      warnings.push('Please check the measurement and unit. This value seems outside a typical input range for condom sizing estimates.');
    }

    return {
      canShowResult: true,
      error: '',
      warnings,
      girthMm,
      nominalWidth,
      fit: getFitResult(nominalWidth)
    };
  }, [girth, length, unit]);

  const hasResult = result.canShowResult && result.girthMm !== null && result.nominalWidth !== null && result.fit;

  return (
    <section id="calculator" className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/70 md:p-8" aria-labelledby="condom-calculator-heading">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Private browser calculator</p>
          <h2 id="condom-calculator-heading" className="mt-2 text-2xl font-semibold text-slate-900">Estimate condom nominal width</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Enter girth or circumference using centimeters, millimeters, or inches. Girth means the measurement around the body, not a straight width. Length is optional and used only as secondary context.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">No backend submission</span>
            <span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">No input storage</span>
            <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700">Girth-based estimate</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="condom-girth" className="text-sm font-medium text-slate-800">Girth / circumference</label>
              <input
                id="condom-girth"
                inputMode="decimal"
                className="input-modern"
                type="number"
                step="0.01"
                value={girth}
                onChange={(event) => setGirth(event.target.value)}
                aria-describedby="condom-input-help condom-calculation-message"
                placeholder="Example: 11.0"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="condom-unit" className="text-sm font-medium text-slate-800">Unit</label>
              <select id="condom-unit" className="input-modern" value={unit} onChange={(event) => setUnit(event.target.value as Unit)}>
                <option value="cm">Centimeters (cm)</option>
                <option value="mm">Millimeters (mm)</option>
                <option value="in">Inches (in)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="condom-length" className="text-sm font-medium text-slate-800">Length (optional)</label>
              <input
                id="condom-length"
                inputMode="decimal"
                className="input-modern"
                type="number"
                step="0.01"
                value={length}
                onChange={(event) => setLength(event.target.value)}
                aria-describedby="condom-input-help condom-calculation-message"
                placeholder="Optional"
              />
            </div>
          </div>

          <p id="condom-input-help" className="mt-3 text-xs leading-5 text-slate-500">
            Use the same unit for both fields if you enter length. The calculation can run with girth only because circumference is usually more important for condom fit than length.
          </p>

          {result.error ? (
            <p id="condom-calculation-message" role="alert" className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">{result.error}</p>
          ) : null}

          {result.warnings.length ? (
            <div className="mt-4 space-y-2" id="condom-calculation-message" role="status">
              {result.warnings.map((warning) => (
                <p key={warning} className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">{warning}</p>
              ))}
            </div>
          ) : null}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Your educational fit estimate</h3>
          {hasResult ? (
            <div className="mt-5 space-y-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Girth converted</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">{result.girthMm.toFixed(1)} mm</p>
                </div>
                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Estimated nominal width</p>
                  <p className="mt-2 text-3xl font-bold text-brand-800">{result.nominalWidth.toFixed(1)} mm</p>
                </div>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">Suggested fit category</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">{result.fit.category}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{result.fit.explanation}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">
                <p>
                  Formula used: estimated nominal width = girth in mm ÷ 2. Packaging and sizing labels vary by brand and country, and comfort, safe use, and manufacturer instructions matter.
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-sm leading-6 text-slate-600">
              Enter a positive girth or circumference value to see the converted measurement, estimated nominal width, and suggested fit range.
            </div>
          )}

          <p className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-xs leading-5 text-emerald-800">
            Privacy note: the calculator runs in your browser and does not intentionally store or upload your measurement input. Selected unit: {UNIT_LABELS[unit]}.
          </p>
        </div>
      </div>
    </section>
  );
}
