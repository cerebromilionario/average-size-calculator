import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.siteUrl;
}

export default function robots(): MetadataRoute.Robots {
  const base = getBaseUrl().replace(/\/$/, '');

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`
  };
}
