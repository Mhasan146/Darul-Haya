'use client'
// Drop-in replacement for a plain <a> WhatsApp link that also fires an
// analytics event so you can compare click-through rates by source.
// Usage:
//   <WhatsAppLink href={WHATSAPP_URL} source="hero" className="...">
//     Chat on WhatsApp →
//   </WhatsAppLink>
import { trackEvent } from '@/lib/analytics'

export default function WhatsAppLink({ href, source, className, children }) {
  if (!href?.startsWith('https://')) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent('whatsapp_click', { source })}
    >
      {children}
    </a>
  )
}
