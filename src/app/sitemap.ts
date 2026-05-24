import type { MetadataRoute } from 'next';

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || 'https://example.com';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl().replace(/\/$/, '');
  const routes = ['', '/penis-size-calculator', '/average-penis-size', '/average-penis-size-by-country', '/how-to-measure', '/privacy-policy', '/terms-of-use', '/contact'];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
}
