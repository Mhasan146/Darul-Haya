// ── SITE-WIDE CONFIG ─────────────────────────────────────────────
// WhatsApp number: international format, digits only (no +, no spaces)
// e.g. Canada 416-555-1234 → 14165551234
export const WHATSAPP_NUMBER = '14374234787'

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Assalamu alaikum, I want to secure a spot for my child at Darul Haya (Grades 1-12). Please share enrollment details."
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

// ── ONTARIO MINISTRY REGISTRATION ────────────────────────────────
// Straight off the OnSIS approval notice. The registration belongs to
// LearnHaven Ontario; Darul Haya operates as a brand of it, so copy must
// never attribute the school number to Darul Haya on its own.
// Used by the homepage band, the FAQ answer, the footer and the School
// structured data, so it is stated once here.
// Registration and inspection are NOT an endorsement: the Ministry does not
// endorse or recommend private schools, so never word it as though it does.
export const MINISTRY = {
  registeredName: 'LearnHaven Ontario',
  bsid: '885538',
  boardNumber: 'B78599',
  boardName: 'CR Private Inspected',
  openDate: '2026-09-08',
  openDateLabel: 'Sep 8, 2026',
}

// Shown wherever the relationship needs stating in one line.
export const BRAND_OF_LINE = `Darul Haya is a brand of ${MINISTRY.registeredName}.`

// ── HIJRI DATE ───────────────────────────────────────────────────
// The site computes the Hijri date from the Umm al-Qura calendar, which is
// astronomical. Local moon sighting can land a day either side of it, so this
// offset nudges the displayed date to match what our community is observing.
//   -1 = show one day earlier   0 = Umm al-Qura as-is   +1 = one day later
// Checked 2026-09-27, which was 15 Rabi al-Thani 1448 locally while
// Umm al-Qura had 16. Adjust here if a month starts a day off; it is the only
// place the offset lives.
export const HIJRI_OFFSET_DAYS = -1

// Shown wherever a Hijri date appears, since every month begins on sighting.
export const MOON_SIGHTING_NOTE =
  'Every Hijri month begins with the sighting of the moon, so dates can shift by a day.'
// ─────────────────────────────────────────────────────────────────
