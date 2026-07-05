const SITE_URL = (process.env.NEXT_PUBLIC_APP_URL || 'https://darulhaya.org').replace(/\/+$/, '')

const ROUTES = [
  '',
  '/about',
  '/programs/full-live',
  '/curriculum',
  '/faq',
  '/contact',
  '/register',
  '/privacy',
]

export default function sitemap() {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
