import type { MetadataRoute } from 'next';

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || 'https://example.com';
}

export default function robots(): MetadataRoute.Robots {
  const base = getBaseUrl().replace(/\/$/, '');

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`
  };
}
