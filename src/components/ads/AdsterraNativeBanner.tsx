'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { hasMarketingConsent } from '@/lib/consent';
import AdSlot from './AdSlot';

const NATIVE_CONTAINER_ID = 'container-ee0cc23801883bf328babb3a19b4b5c3';

export default function AdsterraNativeBanner() {
  const [canLoadAds, setCanLoadAds] = useState(false);

  useEffect(() => {
    const updateConsent = () => setCanLoadAds(hasMarketingConsent());
    updateConsent();
    window.addEventListener('cookie-consent-updated', updateConsent);
    return () => window.removeEventListener('cookie-consent-updated', updateConsent);
  }, []);

  if (!canLoadAds) return null;

  return (
    <AdSlot minHeight="min-h-[220px]">
      <div className="w-full">
        <div id={NATIVE_CONTAINER_ID} />
        <Script
          id="adsterra-native-banner"
          src="https://pl29544754.effectivecpmnetwork.com/ee0cc23801883bf328babb3a19b4b5c3/invoke.js"
          strategy="lazyOnload"
          async
          data-cfasync="false"
        />
      </div>
    </AdSlot>
  );
}
