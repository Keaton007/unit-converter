import type { MetadataRoute } from 'next';
import { conversionCategories } from '@/utils/conversions';
import { converterLandingPages } from '@/utils/converterLandingPages';

const baseUrl = 'https://unitconverter.it.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    '/',
    '/guides',
    '/about',
    '/contact',
    '/editorial',
    '/advertising',
    '/privacy',
    '/terms',
    '/converters',
  ];

  const guideRoutes = conversionCategories.map(
    (category) => `/guides/${category.name.toLowerCase().replace(/\s+/g, '-')}`
  );

  const converterRoutes = converterLandingPages.map((page) => `/converters/${page.slug}`);

  return [...staticRoutes, ...guideRoutes, ...converterRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }));
}

