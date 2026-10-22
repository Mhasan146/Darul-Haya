'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Progressive scroll-reveal. Each section rises as one block; inside it,
// anything marked .stagger cascades its children in order (the --i index
// below sets each child's delay). Applied entirely after hydration, so no-JS
// visitors and search engines see all content immediately. Skipped for
// reduced motion and for the hero, which has its own load choreography.
export default function ScrollReveal() {
  // Re-run per route: the layout persists across client-side navigation, so
  // without this only the first page a visitor lands on would animate.
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const sections = Array.from(document.querySelectorAll('main section'))
    const targets = sections.filter((el) => el.id !== 'about').slice(0, 40)
    if (targets.length === 0) return

    targets.forEach((el) => {
      el.querySelectorAll('.stagger').forEach((group) => {
        Array.from(group.children).forEach((child, i) => {
          child.style.setProperty('--i', String(Math.min(i, 10)))
        })
      })
      // Anything already on screen at load shows immediately instead of
      // flashing out and back in.
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) return
      el.classList.add('reveal-init')
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )

    targets.filter((el) => el.classList.contains('reveal-init')).forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
