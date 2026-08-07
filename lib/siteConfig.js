// ── SITE-WIDE CONFIG ─────────────────────────────────────────────
// WhatsApp number: international format, digits only (no +, no spaces)
// e.g. Canada 416-555-1234 → 14165551234
export const WHATSAPP_NUMBER = '14374234787'

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Assalamu alaikum, I want to secure a spot for my child at Darul Haya (Grades 2-12). Please share enrollment details."
)

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

// Source-specific URLs for click attribution.
// Use with <WhatsAppLink source="hero"> (see components/WhatsAppLink.jsx)
// or swap these into plain <a> tags and route through /api/wa?src=X for server-side logging.
export const WHATSAPP_URL_HERO   = WHATSAPP_URL
export const WHATSAPP_URL_CTA    = WHATSAPP_URL
export const WHATSAPP_URL_BAR    = WHATSAPP_URL
export const WHATSAPP_URL_POPUP  = WHATSAPP_URL
// TODO: replace with redirect endpoint (/api/wa?src=X → WhatsApp) for server-side analytics
// ─────────────────────────────────────────────────────────────────
