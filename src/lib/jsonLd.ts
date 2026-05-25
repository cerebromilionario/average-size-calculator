import { siteConfig } from "@/lib/site";

type BreadcrumbItem = { name: string; path: string };
type FaqItem = { q: string; a: string };

const absoluteUrl = (path: string) => new URL(path, siteConfig.siteUrl).toString();

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function createFaqJsonLd(faqItems: FaqItem[]) {
  if (!faqItems?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };
}

export function createArticleJsonLd({ headline, description, path, dateModified }: { headline: string; description: string; path: string; dateModified: string; }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    publisher: { '@type': 'Organization', name: siteConfig.name },
    mainEntityOfPage: absoluteUrl(path),
    dateModified
  };
}

export function createWebPageJsonLd({ name, description, path, type = 'WebPage' }: { name: string; description: string; path: string; type?: 'WebPage' | 'ContactPage'; }) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url: absoluteUrl(path)
  };
}
