// Hijri date helpers. The Islamic day begins at sunset, not midnight, so after
// Maghrib the date shown must already be the next day. Sunset is computed for
// the school's location (Toronto, Eastern Time) with the standard almanac
// sunrise/sunset algorithm: accurate to a minute or two, no network, no
// dependency.
import { HIJRI_OFFSET_DAYS } from '@/lib/siteConfig'

export const SCHOOL_LOCATION = { lat: 43.6532, lng: -79.3832, tz: 'America/Toronto' }

export const HIJRI_MONTHS = [
  'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Ula',
  'Jumada al-Akhirah', 'Rajab', 'Shaban', 'Ramadan', 'Shawwal',
  'Dhul Qadah', 'Dhul Hijjah',
]

const rad = (d) => (d * Math.PI) / 180
const deg = (r) => (r * 180) / Math.PI
const norm = (v, m) => ((v % m) + m) % m

/** Sunset for a calendar date at lat/lng, as hours UTC (0-24, may wrap). */
function sunsetUTCHours(year, month, day, lat, lng) {
  const n = Math.floor((Date.UTC(year, month - 1, day) - Date.UTC(year, 0, 0)) / 864e5)
  const lngHour = lng / 15
  const t = n + (18 - lngHour) / 24
  const M = 0.9856 * t - 3.289
  const L = norm(M + 1.916 * Math.sin(rad(M)) + 0.02 * Math.sin(rad(2 * M)) + 282.634, 360)
  let RA = norm(deg(Math.atan(0.91764 * Math.tan(rad(L)))), 360)
  RA = (RA + Math.floor(L / 90) * 90 - Math.floor(RA / 90) * 90) / 15
  const sinDec = 0.39782 * Math.sin(rad(L))
  const cosDec = Math.cos(Math.asin(sinDec))
  const cosH = (Math.cos(rad(90.833)) - sinDec * Math.sin(rad(lat))) / (cosDec * Math.cos(rad(lat)))
  if (cosH < -1 || cosH > 1) return null // no sunset (polar); never happens in Ontario
  const H = deg(Math.acos(cosH)) / 15
  const T = H + RA - 0.06571 * t - 6.622
  return norm(T - lngHour, 24)
}

/** Today's year/month/day on the school's clock. */
function schoolDate(now) {
  const p = new Intl.DateTimeFormat('en-CA', {
    timeZone: SCHOOL_LOCATION.tz, year: 'numeric', month: 'numeric', day: 'numeric',
  }).formatToParts(now)
  const g = (t) => Number(p.find((x) => x.type === t).value)
  return { y: g('year'), m: g('month'), d: g('day') }
}

/** The exact instant of sunset on the school's current calendar date. */
export function sunsetToday(now = new Date()) {
  const { y, m, d } = schoolDate(now)
  const ut = sunsetUTCHours(y, m, d, SCHOOL_LOCATION.lat, SCHOOL_LOCATION.lng)
  if (ut == null) return null
  // Toronto's sunset is always well after noon UTC; a small value means the
  // formula wrapped past midnight UTC (summer evenings), so it is tomorrow UTC.
  const hours = ut < 12 ? ut + 24 : ut
  return new Date(Date.UTC(y, m - 1, d) + hours * 3600e3)
}

/**
 * Hijri date right now: the school's calendar date, moved on a day once the
 * sun has set, then nudged by HIJRI_OFFSET_DAYS to match local moon sighting.
 */
export function hijriNow(now = new Date()) {
  const { y, m, d } = schoolDate(now)
  const sunset = sunsetToday(now)
  const afterSunset = sunset != null && now >= sunset
  const base = new Date(Date.UTC(y, m - 1, d, 12) + ((afterSunset ? 1 : 0) + HIJRI_OFFSET_DAYS) * 864e5)
  // 'islamic-umalqura' is the BCP-47 calendar identifier the Intl API
  // requires. It is not display copy and never reaches the page; renaming it
  // would simply stop the Hijri date from resolving.
  const parts = new Intl.DateTimeFormat('en-GB-u-ca-islamic-umalqura', {
    day: 'numeric', month: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).formatToParts(base)
  const part = (t) => Number(parts.find((x) => x.type === t)?.value)
  const month = HIJRI_MONTHS[part('month') - 1]
  if (!month) return null
  return { day: part('day'), month, year: part('year'), afterSunset }
}
