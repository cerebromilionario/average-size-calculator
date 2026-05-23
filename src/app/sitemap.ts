import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com';
  const routes = ['', '/penis-size-calculator', '/average-penis-size', '/average-penis-size-by-country', '/how-to-measure', '/privacy-policy', '/contact'];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}
