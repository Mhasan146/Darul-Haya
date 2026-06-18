// ── SITE-WIDE CONFIG ─────────────────────────────────────────────
// WhatsApp number: international format, digits only (no +, no spaces)
// e.g. Canada 416-555-1234 → 14165551234
export const WHATSAPP_NUMBER = '1XXXXXXXXXX'

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Assalamu alaikum, I'd like to learn more about Darul Haya admissions (Grades 3–8)."
)

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
// ─────────────────────────────────────────────────────────────────
