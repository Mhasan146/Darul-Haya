// Lightweight event tracking. Sends to Google Analytics 4 (gtag) when a
// measurement ID is configured via NEXT_PUBLIC_GA_ID and the visitor has
// consented (see components/CookieConsent.jsx + the GA setup in app/layout.js).
//
// Usage:  trackEvent('whatsapp_click', { source: 'hero' })

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return

  // Send to GA4 if gtag is present (script only loads when NEXT_PUBLIC_GA_ID is set).
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }

  // Echo to the console in development so events are visible without GA.
  if (process.env.NODE_ENV !== 'production') {
    console.log('[analytics]', name, params)
  }
}
