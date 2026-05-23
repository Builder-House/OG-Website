import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://builderhouse.in'
  const pages = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/case-studies',
    '/industries',
    '/process',
    '/faq',
    '/contact',
    '/our-story',
    '/careers',
    '/blog',
    '/privacy-policy',
    '/terms',
    '/refund-policy',
  ]

  return pages.map((page) => ({
    url: `${base}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : 0.8,
  }))
}
