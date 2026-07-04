const SITE_URL = (process.env.NEXT_PUBLIC_APP_URL || 'https://darulhaya.com').replace(/\/+$/, '')

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
