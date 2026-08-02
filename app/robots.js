const SITE_URL = (process.env.NEXT_PUBLIC_APP_URL || 'https://darulhaya.com').replace(/\/+$/, '')

export default function robots() {
  return {
    // /thank-you is a post-submission confirmation page — no value in search,
    // and indexing it can surface a dead-end result for brand queries.
    rules: { userAgent: '*', allow: '/', disallow: ['/thank-you'] },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
