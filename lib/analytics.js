// Analytics placeholder — wire up your preferred provider here.
// Supported: Google Analytics 4, Plausible, PostHog, Mixpanel, etc.
//
// GA4:       gtag('event', name, params)
// Plausible: plausible(name, { props: params })
// PostHog:   posthog.capture(name, params)

export function trackEvent(name, params = {}) {
  // TODO: replace with real analytics provider call
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    console.log('[analytics]', name, params)
  }
}
