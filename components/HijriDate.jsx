'use client'
import { useEffect, useState } from 'react'
import { HIJRI_OFFSET_DAYS, MOON_SIGHTING_NOTE } from '@/lib/siteConfig'

// Month names we control, rather than Intl's "Rabiʻ II" / "Dhuʻl-Qiʻdah",
// which is not how families here say them. Indexed by Hijri month number.
const HIJRI_MONTHS = [
  'Muharram',
  'Safar',
  'Rabi al-Awwal',
  'Rabi al-Thani',
  'Jumada al-Ula',
  'Jumada al-Akhirah',
  'Rajab',
  'Shaban',
  'Ramadan',
  'Shawwal',
  'Dhul Qadah',
  'Dhul Hijjah',
]

// Shows today's date in both the Islamic (Umm al-Qura, nudged by
// HIJRI_OFFSET_DAYS to match local sighting) and Gregorian calendars.
// Computed natively via Intl, no external library. Renders nothing on the
// server (and until mounted) so the visitor's own local date is used with no
// hydration mismatch.
export default function HijriDate({
  className = '',
  hijriClassName = '',
  gregorianClassName = '',
  separator = ' · ',
  stacked = false,
  showWeekday = true,
  showNote = false,
  noteClassName = '',
}) {
  const [dates, setDates] = useState(null)

  useEffect(() => {
    const now = new Date()
    try {
      // Offset applies to the Hijri reading only; the Gregorian date is today's.
      const shifted = new Date(now)
      shifted.setDate(shifted.getDate() + HIJRI_OFFSET_DAYS)

      const parts = new Intl.DateTimeFormat('en-GB-u-ca-islamic-umalqura', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }).formatToParts(shifted)
      const part = (type) => parts.find((p) => p.type === type)?.value
      const month = HIJRI_MONTHS[Number(part('month')) - 1]
      if (!month) throw new Error('unrecognised Hijri month')
      const hijri = `${Number(part('day'))} ${month} ${Number(part('year'))} AH`

      const gregorian = new Intl.DateTimeFormat('en-GB', {
        ...(showWeekday ? { weekday: 'long' } : {}),
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(now)
      setDates({ hijri, gregorian })
    } catch {
      setDates(null)
    }
  }, [showWeekday])

  if (!dates) return null

  const note = showNote ? (
    <span className={noteClassName || 'block text-[11px] opacity-80'}>{MOON_SIGHTING_NOTE}</span>
  ) : null

  if (stacked) {
    return (
      <span className={`flex flex-col leading-tight ${className}`}>
        <span className={hijriClassName}>{dates.hijri}</span>
        <span className={gregorianClassName}>{dates.gregorian}</span>
        {note}
      </span>
    )
  }

  return (
    <span className={className}>
      <span className={hijriClassName}>{dates.hijri}</span>
      <span aria-hidden="true">{separator}</span>
      <span className={gregorianClassName}>{dates.gregorian}</span>
      {note}
    </span>
  )
}
