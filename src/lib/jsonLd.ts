import { siteConfig } from '@/lib/site';

type BreadcrumbItem = { name: string; path: string };
type FaqItem = { q: string; a: string };

type ArticleInput = { headline: string; description: string; path: string; dateModified?: string };
type WebPageInput = { name: string; description: string; path: string; type?: 'WebPage' | 'ContactPage' };
type WebApplicationInput = { name: string; description: string; path: string };
type DatasetInput = { name: string; description: string; path: string; keywords?: string[]; sources?: string[]; license?: string };

export function absoluteUrl(path: string): string {
  const base = siteConfig.siteUrl.replace(/\/+$/, '');
  const normalizedPath = path ? `/${path}`.replace(/\/{2,}/g, '/').replace(/^\/(https?:)/, '$1') : '/';
  return normalizedPath === '/' ? `${base}/` : `${base}${normalizedPath}`;
}

export function createOrganizationJsonLd(hasLogo = true) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.siteUrl
  };
  if (hasLogo) data.logo = absoluteUrl('/icon.png');
  return data;
}

export function createWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    publisher: { '@type': 'Organization', name: siteConfig.name }
  };
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) { return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.path) })) }; }

export function createFaqJsonLd(faqItems: FaqItem[]) { if (!faqItems?.length) return null; return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }; }

export function createArticleJsonLd({ headline, description, path, dateModified }: ArticleInput) {
  return { '@context': 'https://schema.org', '@type': 'Article', headline, description, publisher: { '@type': 'Organization', name: siteConfig.name }, mainEntityOfPage: absoluteUrl(path), dateModified: dateModified ?? new Date().toISOString().split('T')[0] };
}

export function createWebPageJsonLd({ name, description, path, type = 'WebPage' }: WebPageInput) { return { '@context': 'https://schema.org', '@type': type, name, description, url: absoluteUrl(path) }; }

export function createWebApplicationJsonLd({ name, description, path }: WebApplicationInput) { return { '@context': 'https://schema.org', '@type': 'WebApplication', name, description, url: absoluteUrl(path), applicationCategory: 'HealthApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, publisher: { '@type': 'Organization', name: siteConfig.name } }; }

export function createDatasetJsonLd({ name, description, path, keywords, sources, license }: DatasetInput) {
  const data: Record<string, unknown> = { '@context': 'https://schema.org', '@type': 'Dataset', name, description, url: absoluteUrl(path), creator: { '@type': 'Organization', name: siteConfig.name }, publisher: { '@type': 'Organization', name: siteConfig.name }, keywords };
  if (sources?.length) data.citation = sources;
  if (license) data.license = license;
  return data;
}
