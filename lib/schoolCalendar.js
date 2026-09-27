import data from '@/data/school-calendar-2026-27.json'

export const CALENDAR = data

const DAY = 86400000
const utc = (iso) => Date.parse(`${iso}T12:00:00Z`)

export const iso = (ms) => new Date(ms).toISOString().slice(0, 10)

/** Every date from start to end inclusive, as ISO strings. */
export function range(start, end) {
  const out = []
  for (let t = utc(start); t <= utc(end); t += DAY) out.push(iso(t))
  return out
}

/**
 * Hijri reading for an ISO date, derived from the month-start table in the
 * JSON rather than recomputed, so the site and the printed calendars agree
 * to the day.
 */
export function hijri(isoDate) {
  const t = utc(isoDate)
  const starts = CALENDAR.hijriMonthStarts
  let found = null
  for (const s of starts) {
    if (utc(s.gregorian) <= t) found = s
    else break
  }
  if (!found) return null
  const day = Math.round((t - utc(found.gregorian)) / DAY) + 1
  return { day, month: found.name, year: found.year }
}

export const hijriLabel = (isoDate) => {
  const h = hijri(isoDate)
  return h ? `${h.day} ${h.month} ${h.year}` : ''
}

/** ISO date -> the event covering it. Multi-day events cover every day. */
export function dayMap() {
  const map = new Map()
  for (const e of CALENDAR.events) {
    for (const d of range(e.start, e.end)) map.set(d, e)
  }
  return map
}

/** The Gregorian months the school year spans, oldest first. */
export function schoolMonths() {
  const out = []
  const first = new Date(utc(CALENDAR.firstDay))
  const last = new Date(utc(CALENDAR.lastDay))
  let y = first.getUTCFullYear()
  let m = first.getUTCMonth()
  while (y < last.getUTCFullYear() || (y === last.getUTCFullYear() && m <= last.getUTCMonth())) {
    out.push({ year: y, month: m })
    m += 1
    if (m > 11) { m = 0; y += 1 }
  }
  return out
}

/**
 * A month laid out Monday to Sunday: an array of 6 weeks x 7 cells.
 * Cells outside the month are null.
 */
export function monthGrid(year, month) {
  const first = new Date(Date.UTC(year, month, 1, 12))
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0, 12)).getUTCDate()
  // getUTCDay() is Sunday-based; shift so Monday is column 0.
  const lead = (first.getUTCDay() + 6) % 7
  const cells = Array(lead).fill(null)
  for (let d = 1; d <= daysInMonth; d += 1) {
    cells.push(iso(Date.UTC(year, month, d, 12)))
  }
  while (cells.length % 7) cells.push(null)
  const weeks = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))
  return weeks
}

export const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
