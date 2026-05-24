export type MeasureType = 'erectLength' | 'flaccidLength' | 'erectGirth';

export type DataConfidence = 'higher' | 'medium' | 'lower';

export type CountryAverage = {
  country: string;
  countryCode: string;
  region?: string;
  erectLength?: number;
  flaccidLength?: number;
  erectGirth?: number;
  sourceLabel: string;
  sourceUrl?: string;
  sourceType:
    | 'peer-reviewed'
    | 'compiled-country-ranking'
    | 'survey'
    | 'mixed-methodology'
    | 'unknown-methodology';
  confidence: DataConfidence;
  notes?: string;
};

export const GLOBAL_AVERAGES_CM: Record<MeasureType, number> = {
  erectLength: 13.12,
  erectGirth: 11.66,
  flaccidLength: 9.16
};

export const GLOBAL_AVERAGE_SOURCE = {
  label: 'Veale et al. 2015 systematic review',
  description:
    'Systematic review and nomograms of flaccid and erect penis length and circumference in up to 15,521 men.',
  url: 'https://pubmed.ncbi.nlm.nih.gov/25487360/',
  quality: 'higher' as const
};

const COUNTRY_REFERENCE_NOTE =
  'Country-level averages are compiled reference values and may use mixed methodologies. Interpret as educational estimates, not medical standards.';

// Country-level averages are compiled reference values.
// They may come from mixed methodologies and should not be interpreted
// as clinical standards. The global averages from Veale et al. 2015
// are more suitable for general educational comparison because they are
// based on standardized measurements across studies.
export const COUNTRY_AVERAGES_CM: CountryAverage[] = [
  { country: 'Afghanistan', countryCode: 'AF', region: 'Asia', erectLength: 13.69, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Albania', countryCode: 'AL', region: 'Europe', erectLength: 14.19, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Algeria', countryCode: 'DZ', region: 'Africa', erectLength: 14.49, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Angola', countryCode: 'AO', region: 'Africa', erectLength: 15.73, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Argentina', countryCode: 'AR', region: 'South America', erectLength: 14.88, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Armenia', countryCode: 'AM', region: 'Asia', erectLength: 13.14, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Australia', countryCode: 'AU', region: 'Oceania', erectLength: 14.46, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Austria', countryCode: 'AT', region: 'Europe', erectLength: 14.53, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Azerbaijan', countryCode: 'AZ', region: 'Asia', erectLength: 13.72, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Bangladesh', countryCode: 'BD', region: 'Asia', erectLength: 11.2, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Belarus', countryCode: 'BY', region: 'Europe', erectLength: 14.63, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Belgium', countryCode: 'BE', region: 'Europe', erectLength: 14.77, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Bolivia', countryCode: 'BO', region: 'South America', erectLength: 16.51, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Brazil', countryCode: 'BR', region: 'South America', erectLength: 15.22, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Bulgaria', countryCode: 'BG', region: 'Europe', erectLength: 15.02, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Cambodia', countryCode: 'KH', region: 'Asia', erectLength: 10.04, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Cameroon', countryCode: 'CM', region: 'Africa', erectLength: 16.67, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Canada', countryCode: 'CA', region: 'North America', erectLength: 15.71, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Cape Verde', countryCode: 'CV', region: 'Africa', erectLength: 14.05, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Central African Republic', countryCode: 'CF', region: 'Africa', erectLength: 15.33, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Chad', countryCode: 'TD', region: 'Africa', erectLength: 15.39, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Chile', countryCode: 'CL', region: 'South America', erectLength: 14.59, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'China', countryCode: 'CN', region: 'Asia', erectLength: 13.07, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Colombia', countryCode: 'CO', region: 'South America', erectLength: 15.26, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Costa Rica', countryCode: 'CR', region: 'North America', erectLength: 15.01, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Croatia', countryCode: 'HR', region: 'Europe', erectLength: 14.77, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Cuba', countryCode: 'CU', region: 'North America', erectLength: 15.87, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Democratic Republic of the Congo', countryCode: 'CD', region: 'Africa', erectLength: 14.48, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Denmark', countryCode: 'DK', region: 'Europe', erectLength: 14.88, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Ecuador', countryCode: 'EC', region: 'South America', erectLength: 17.61, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Egypt', countryCode: 'EG', region: 'Africa', erectLength: 15.69, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'El Salvador', countryCode: 'SV', region: 'North America', erectLength: 14.88, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Finland', countryCode: 'FI', region: 'Europe', erectLength: 13.77, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'France', countryCode: 'FR', region: 'Europe', erectLength: 15.74, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Gambia', countryCode: 'GM', region: 'Africa', erectLength: 15.88, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Georgia', countryCode: 'GE', region: 'Asia', erectLength: 15.61, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Germany', countryCode: 'DE', region: 'Europe', erectLength: 14.52, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Greece', countryCode: 'GR', region: 'Europe', erectLength: 13.3, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Haiti', countryCode: 'HT', region: 'North America', erectLength: 16.01, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Honduras', countryCode: 'HN', region: 'North America', erectLength: 15, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Hong Kong', countryCode: 'HK', region: 'Asia', erectLength: 11.19, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Hungary', countryCode: 'HU', region: 'Europe', erectLength: 14.99, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'India', countryCode: 'IN', region: 'Asia', erectLength: 13.71, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Indonesia', countryCode: 'ID', region: 'Asia', erectLength: 11.67, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Iran', countryCode: 'IR', region: 'Asia', erectLength: 14.55, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Ireland', countryCode: 'IE', region: 'Europe', erectLength: 12.78, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Israel', countryCode: 'IL', region: 'Asia', erectLength: 13.6, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Italy', countryCode: 'IT', region: 'Europe', erectLength: 15.35, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Ivory Coast', countryCode: 'CI', region: 'Africa', erectLength: 15.22, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Japan', countryCode: 'JP', region: 'Asia', erectLength: 13.56, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Latvia', countryCode: 'LV', region: 'Europe', erectLength: 14.69, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Libya', countryCode: 'LY', region: 'Africa', erectLength: 13.74, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Malaysia', countryCode: 'MY', region: 'Asia', erectLength: 11.49, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Mexico', countryCode: 'MX', region: 'North America', erectLength: 14.92, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Mongolia', countryCode: 'MN', region: 'Asia', erectLength: 12.77, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Myanmar', countryCode: 'MM', region: 'Asia', erectLength: 10.7, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Netherlands', countryCode: 'NL', region: 'Europe', erectLength: 15.87, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'New Zealand', countryCode: 'NZ', region: 'Oceania', erectLength: 13.99, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Nigeria', countryCode: 'NG', region: 'Africa', erectLength: 14.38, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'North Macedonia', countryCode: 'MK', region: 'Europe', erectLength: 13.98, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Norway', countryCode: 'NO', region: 'Europe', erectLength: 14.34, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Pakistan', countryCode: 'PK', region: 'Asia', erectLength: 12.2, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Paraguay', countryCode: 'PY', region: 'South America', erectLength: 15.53, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Philippines', countryCode: 'PH', region: 'Asia', erectLength: 10.85, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Poland', countryCode: 'PL', region: 'Europe', erectLength: 14.29, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Romania', countryCode: 'RO', region: 'Europe', erectLength: 12.73, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Russia', countryCode: 'RU', region: 'Europe', erectLength: 13.21, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Senegal', countryCode: 'SN', region: 'Africa', erectLength: 15.89, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Serbia', countryCode: 'RS', region: 'Europe', erectLength: 14.87, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Singapore', countryCode: 'SG', region: 'Asia', erectLength: 11.53, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'South Korea', countryCode: 'KR', region: 'Asia', erectLength: 12.81, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Spain', countryCode: 'ES', region: 'Europe', erectLength: 13.85, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Sri Lanka', countryCode: 'LK', region: 'Asia', erectLength: 10.89, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Sudan', countryCode: 'SD', region: 'Africa', erectLength: 16.47, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Sweden', countryCode: 'SE', region: 'Europe', erectLength: 15.08, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Switzerland', countryCode: 'CH', region: 'Europe', erectLength: 14.35, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Taiwan', countryCode: 'TW', region: 'Asia', erectLength: 12.6, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Thailand', countryCode: 'TH', region: 'Asia', erectLength: 11.45, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Turkey', countryCode: 'TR', region: 'Asia', erectLength: 12.99, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Turkmenistan', countryCode: 'TM', region: 'Asia', erectLength: 13.48, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Ukraine', countryCode: 'UA', region: 'Europe', erectLength: 13.97, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'United Kingdom', countryCode: 'GB', region: 'Europe', erectLength: 13.13, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'United States', countryCode: 'US', region: 'North America', erectLength: 13.58, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Venezuela', countryCode: 'VE', region: 'South America', erectLength: 13.33, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Vietnam', countryCode: 'VN', region: 'Asia', erectLength: 13.22, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Yemen', countryCode: 'YE', region: 'Asia', erectLength: 12.72, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Zambia', countryCode: 'ZM', region: 'Africa', erectLength: 15.78, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE },
  { country: 'Zimbabwe', countryCode: 'ZW', region: 'Africa', erectLength: 15.68, sourceLabel: 'WorldData.info country ranking', sourceUrl: 'https://www.worlddata.info/average-penissize.php', sourceType: 'compiled-country-ranking', confidence: 'lower', notes: COUNTRY_REFERENCE_NOTE }
];
