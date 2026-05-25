'use client';

import { useEffect, useRef, useState } from 'react';
import { hasMarketingConsent } from '@/lib/consent';
import AdSlot from './AdSlot';

declare global {
  interface Window {
    atOptions?: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
  }
}

export default function AdsterraBanner300x250() {
  const [canLoadAds, setCanLoadAds] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const updateConsent = () => setCanLoadAds(hasMarketingConsent());
    updateConsent();
    window.addEventListener('cookie-consent-updated', updateConsent);
    return () => window.removeEventListener('cookie-consent-updated', updateConsent);
  }, []);

  useEffect(() => {
    if (!canLoadAds || !containerRef.current || loadedRef.current) return;
    loadedRef.current = true;

    window.atOptions = {
      key: 'a54acc1d3ca25cecd1d5809aa01aa89b',
      format: 'iframe',
      height: 250,
      width: 300,
      params: {}
    };

    const script = document.createElement('script');
    script.src = 'https://www.highperformanceformat.com/a54acc1d3ca25cecd1d5809aa01aa89b/invoke.js';
    script.async = true;
    containerRef.current.appendChild(script);
  }, [canLoadAds]);

  if (!canLoadAds) return null;

  return (
    <AdSlot minHeight="min-h-[290px]">
      <div ref={containerRef} className="flex min-h-[250px] w-[300px] max-w-full items-center justify-center" />
    </AdSlot>
  );
}
