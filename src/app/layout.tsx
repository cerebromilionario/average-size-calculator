import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CookieConsent from '@/components/CookieConsent';
import { GlobalContentAdsEnd } from '@/components/ads/GlobalContentAds';
import { siteConfig } from '@/lib/site';
import './globals.css';
import StructuredData from '@/components/StructuredData';
import JsonLd from '@/components/JsonLd';
import { createOrganizationJsonLd, createWebSiteJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <JsonLd data={createOrganizationJsonLd(false)} />
        <JsonLd data={createWebSiteJsonLd()} />
        <StructuredData />
        <main className="container-page">
          {children}
          <GlobalContentAdsEnd />
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
