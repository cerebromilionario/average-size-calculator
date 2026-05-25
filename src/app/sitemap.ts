import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.siteUrl;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl().replace(/\/$/, '');
  const routes = ['', '/penis-size-calculator', '/penis-size-percentile-calculator', '/average-penis-size', '/average-penis-size-by-country', '/how-to-measure', '/privacy-policy', '/terms-of-use', '/contact', '/is-my-penis-small'];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
}
