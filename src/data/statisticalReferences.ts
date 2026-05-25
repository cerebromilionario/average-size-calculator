import { MeasureType } from '@/data/penisSizeAverages';

export const STATISTICAL_REFERENCES = {
  averageErectLengthCm: 13.12,
  averageErectGirthCm: 11.66,
  standardDeviationCm: {
    erectLength: 1.66,
    erectGirth: 1.1,
    flaccidLength: 1.57
  } satisfies Record<MeasureType, number>
};

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

export function normalCdf(x: number): number {
  return (1 + erf(x / Math.sqrt(2))) / 2;
}

export function percentileFromZScore(zScore: number): number {
  return Math.max(1, Math.min(99, Math.round(normalCdf(zScore) * 100)));
}
