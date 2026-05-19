import { source } from '@/lib/source';
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://docs.tasmil-finance.xyz';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages().map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page.url === '/docs' ? 1.0 : 0.8,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    ...pages,
  ];
}
