export type MeasureType = 'erectLength' | 'flaccidLength' | 'erectGirth';

export const GLOBAL_AVERAGES_CM: Record<MeasureType, number> = {
  erectLength: 13.12,
  erectGirth: 11.66,
  flaccidLength: 9.16
};

export type CountryAverage = {
  country: string;
  erectLength: number;
  flaccidLength: number;
  erectGirth: number;
};

// IMPORTANT: Country-level values below are sample MVP data.
// They must be clinically audited and source-verified before any programmatic expansion.
export const COUNTRY_AVERAGES_CM: CountryAverage[] = [
  { country: 'Brazil', erectLength: 14.8, flaccidLength: 10.5, erectGirth: 12.2 },
  { country: 'United States', erectLength: 13.6, flaccidLength: 9.8, erectGirth: 11.8 },
  { country: 'United Kingdom', erectLength: 13.1, flaccidLength: 9.2, erectGirth: 11.6 },
  { country: 'Canada', erectLength: 13.9, flaccidLength: 9.7, erectGirth: 11.7 },
  { country: 'Germany', erectLength: 14.0, flaccidLength: 9.6, erectGirth: 11.9 },
  { country: 'France', erectLength: 13.5, flaccidLength: 9.3, erectGirth: 11.7 },
  { country: 'India', erectLength: 12.8, flaccidLength: 8.9, erectGirth: 11.3 },
  { country: 'Japan', erectLength: 12.7, flaccidLength: 8.8, erectGirth: 11.1 }
];
