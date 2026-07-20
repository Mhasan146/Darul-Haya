'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { WHATSAPP_URL } from '@/lib/siteConfig'

export default function MobileApplyBar() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const hero = document.getElementById('about')
    if (hero) {
      const observer = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { threshold: 0 }
      )
      observer.observe(hero)
      return () => observer.disconnect()
    }
    // Non-homepage: show after 120px scroll
    const onScroll = () => setVisible(window.scrollY > 120)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible || pathname === '/register') return null

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-clay/95 backdrop-blur-sm border-t border-white/10 px-5 py-3 flex items-center justify-between gap-4">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 text-sm hover:text-white transition-colors min-w-0"
      >
        Chat on WhatsApp
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <Link
        href="/register"
        className="shrink-0 bg-white text-clay px-5 py-2 rounded-full font-semibold text-sm hover:bg-beige transition-colors"
      >
        Apply Now
      </Link>
    </div>
  )
}
