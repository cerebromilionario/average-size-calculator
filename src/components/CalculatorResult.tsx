type CalculatorResultData = {
  measurementLabel: string;
  valueCm: number;
  valueIn: number;
  globalAverageCm: number;
  globalAverageIn: number;
  diffGlobalCm: number;
  diffCountryCm?: number;
  countryAverageCm?: number;
  countryAverageIn?: number;
  estimatedPercentile: number;
  hasCountryComparison: boolean;
  countrySourceLabel?: string;
  countryConfidence?: 'higher' | 'medium' | 'lower';
};

function format(n: number) {
  return n.toFixed(2);
}

function classify(diffCm: number) {
  if (Math.abs(diffCm) <= 0.75) return 'Around average';
  return diffCm > 0 ? 'Above average' : 'Below average';
}

export default function CalculatorResult({ result, country }: { result: CalculatorResultData; country: string }) {
  const classification = classify(result.diffGlobalCm);
  const direction = result.diffGlobalCm >= 0 ? 'above' : 'below';

  return (
    <section className="mt-6 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-sky-50 p-6 shadow-sm" aria-live="polite">
      <h3 className="text-xl font-semibold text-slate-900">Your result</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-800">
        <li><strong>Measurement entered:</strong> {format(result.valueCm)} cm ({format(result.valueIn)} in)</li>
        <li><strong>Global average for {result.measurementLabel.toLowerCase()}:</strong> {format(result.globalAverageCm)} cm ({format(result.globalAverageIn)} in)</li>
        <li><strong>Difference from global average:</strong> {format(Math.abs(result.diffGlobalCm))} cm ({format(Math.abs(result.diffGlobalCm / 2.54))} in) {direction}</li>
        <li><strong>Classification:</strong> {classification}</li>
        <li className="rounded-lg border border-brand-200 bg-white px-3 py-2"><strong>Estimated percentile:</strong> ~{result.estimatedPercentile}th percentile<br /><span className="text-xs text-slate-600">Percentile is an educational estimate based on global average data.</span></li>
        {result.hasCountryComparison && typeof result.countryAverageCm === 'number' ? (
          <>
            <li><strong>{country} average:</strong> {format(result.countryAverageCm)} cm ({format(result.countryAverageIn ?? 0)} in)</li>
            <li><strong>Difference from {country} average:</strong> {format(Math.abs(result.diffCountryCm ?? 0))} cm ({format(Math.abs((result.diffCountryCm ?? 0) / 2.54))} in) {(result.diffCountryCm ?? 0) >= 0 ? 'above' : 'below'}</li>
          </>
        ) : result.hasCountryComparison ? (
          <li><strong>{country} average:</strong> Country-level data is not available for this measurement type.</li>
        ) : (
          <li><strong>Country comparison:</strong> Country-level data is not available for this measurement type. This result uses the global average only.</li>
        )}
        {result.hasCountryComparison && result.countrySourceLabel ? <li><strong>Country reference source:</strong> {result.countrySourceLabel}</li> : null}
        {result.countryConfidence === 'lower' ? <li>Country comparisons use compiled reference data and may be less reliable than global averages.</li> : null}
      </ul>
      <p className="mt-4 text-sm text-slate-700">Your measurement is {format(Math.abs(result.diffGlobalCm))} cm {direction} the global average for {result.measurementLabel.toLowerCase()}. This result is within a common adult range. Natural variation is normal. Averages are reference points, not medical standards.</p>
      <p className="mt-2 text-xs text-slate-600">Percentile is an estimate based on average and distribution assumptions. It should be interpreted as educational, not diagnostic. <a className="text-brand-700 underline" href="/penis-size-percentile-calculator">Learn how percentiles work</a>.</p>
    </section>
  );
}
