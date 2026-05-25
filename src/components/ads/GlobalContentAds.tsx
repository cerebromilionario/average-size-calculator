'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import StrategicAd from './StrategicAd';

const EXCLUDED_ROUTES = new Set(['/privacy-policy', '/terms-of-use', '/contact', '/thank-you']);

function shouldHideAds(pathname: string): boolean {
  if (EXCLUDED_ROUTES.has(pathname)) return true;

  const normalized = pathname.toLowerCase();
  return normalized.includes('cookie') || normalized.includes('consent');
}

export default function GlobalContentAds() {
  const pathname = usePathname();

  const hideAds = useMemo(() => shouldHideAds(pathname), [pathname]);
  if (hideAds) return null;

  return (
    <StrategicAd type="native" className="mb-6" />
  );
}

export function GlobalContentAdsEnd() {
  const pathname = usePathname();

  const hideAds = useMemo(() => shouldHideAds(pathname), [pathname]);
  if (hideAds) return null;

  return <StrategicAd type="rectangle" className="mt-6" />;
}
