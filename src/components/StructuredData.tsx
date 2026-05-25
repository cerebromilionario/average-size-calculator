'use client';

import { usePathname } from 'next/navigation';
import { createBreadcrumbJsonLd, createWebPageJsonLd } from '@/lib/jsonLd';
import { siteConfig } from '@/lib/site';

const EXCLUDED_BREADCRUMB = new Set(['/privacy-policy', '/terms-of-use', '/contact', '/thank-you']);

const toTitle = (path: string) =>
  path
    .split('/')
    .filter(Boolean)
    .pop()
    ?.split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ') ?? 'Home';

export default function StructuredData() {
  const pathname = usePathname() || '/';

  const webPage = createWebPageJsonLd({
    name: pathname === '/' ? siteConfig.name : toTitle(pathname),
    description: siteConfig.description,
    path: pathname,
    type: pathname === '/contact' ? 'ContactPage' : 'WebPage'
  });

  const breadcrumb =
    pathname !== '/' && !EXCLUDED_BREADCRUMB.has(pathname)
      ? createBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: toTitle(pathname), path: pathname }
        ])
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      {breadcrumb ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      ) : null}
    </>
  );
}
