import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/research/*/overview'],
    },
    sitemap: 'https://nichehunter.crack404.com/sitemap.xml',
  };
}