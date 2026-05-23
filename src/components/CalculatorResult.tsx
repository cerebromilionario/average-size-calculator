type CalculatorResultData = {
  measurementLabel: string;
  valueCm: number;
  valueIn: number;
  globalAverageCm: number;
  globalAverageIn: number;
  diffGlobalCm: number;
  diffCountryCm: number | null;
  countryAverageCm?: number;
  countryAverageIn: number | null;
  estimatedPercentile: number;
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
    <section className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5" aria-live="polite">
      <h3 className="text-xl font-semibold text-slate-900">Your result</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-800">
        <li><strong>Measurement entered:</strong> {format(result.valueCm)} cm ({format(result.valueIn)} in)</li>
        <li><strong>Global average for {result.measurementLabel.toLowerCase()}:</strong> {format(result.globalAverageCm)} cm ({format(result.globalAverageIn)} in)</li>
        <li><strong>Difference from global average:</strong> {format(Math.abs(result.diffGlobalCm))} cm ({format(Math.abs(result.diffGlobalCm / 2.54))} in) {direction}</li>
        <li><strong>Classification:</strong> {classification}</li>
        <li><strong>Estimated percentile:</strong> ~{result.estimatedPercentile}th percentile</li>
        {typeof result.countryAverageCm === 'number' ? (
          <>
            <li><strong>{country} average:</strong> {format(result.countryAverageCm)} cm ({format(result.countryAverageIn ?? 0)} in)</li>
            <li><strong>Difference from {country} average:</strong> {format(Math.abs(result.diffCountryCm ?? 0))} cm ({format(Math.abs((result.diffCountryCm ?? 0) / 2.54))} in) {(result.diffCountryCm ?? 0) >= 0 ? 'above' : 'below'}</li>
          </>
        ) : (
          <li><strong>{country} average:</strong> Country data is not currently available for this measurement type.</li>
        )}
      </ul>
      <p className="mt-4 text-sm text-slate-700">Your measurement is {format(Math.abs(result.diffGlobalCm))} cm {direction} the global average for {result.measurementLabel.toLowerCase()}. This result is within a common adult range. Natural variation is normal. Averages are reference points, not medical standards.</p>
      <p className="mt-2 text-xs text-slate-600">Percentile is an estimate based on average and distribution assumptions. It should be interpreted as educational, not diagnostic.</p>
    </section>
  );
}
