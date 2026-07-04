'use client'
import { useEffect } from 'react'

// Progressive scroll-reveal: fades/slides sections in as they enter view.
// Applied entirely in JS after hydration, so no-JS users and search engines
// see all content immediately. Skipped for reduced-motion and the hero.
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const sections = Array.from(document.querySelectorAll('main section'))
    // Leave the first section (hero, above the fold) instant for a fast LCP.
    const targets = sections.filter((el) => el.id !== 'about').slice(0, 40)
    if (targets.length === 0) return

    targets.forEach((el) => el.classList.add('reveal-init'))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
