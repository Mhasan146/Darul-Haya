'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

// Cookie-consent banner for Google Analytics. GA loads in a "denied" state by
// default (see app/layout.js); this banner flips analytics_storage to
// "granted" only when the visitor accepts, and remembers the choice so it
// isn't shown again. Nothing renders if NEXT_PUBLIC_GA_ID is unset, because
// the layout doesn't mount this component in that case.
const STORAGE_KEY = 'dh_consent'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShow(true)
    } catch {
      // localStorage blocked — don't nag; simply don't show the banner.
    }
  }, [])

  function choose(granted) {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied')
    } catch {}
    if (granted && typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' })
    }
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-amber/30 bg-clay text-white shadow-2xl"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-white/90">
          We use cookies to understand how visitors use our site so we can improve it.{' '}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-amber">
            Privacy policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => choose(false)}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="rounded-full bg-amber px-5 py-2 text-sm font-semibold text-clay transition-colors hover:bg-amber-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
