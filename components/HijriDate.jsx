'use client'
import { useEffect, useState } from 'react'
import { MOON_SIGHTING_NOTE } from '@/lib/siteConfig'
import { hijriNow, sunsetToday } from '@/lib/hijri'

// Shows today's date in both the Hijri and Gregorian calendars. The Hijri
// date turns over at sunset in Toronto, as the Islamic day does, rather than
// at midnight (lib/hijri.js), and is nudged by HIJRI_OFFSET_DAYS to match
// local moon sighting. Renders nothing on the server (and until mounted) so
// the visitor's own clock is used with no hydration mismatch.
export default function HijriDate({
  className = '',
  hijriClassName = '',
  gregorianClassName = '',
  separator = ' \u00b7 ',
  stacked = false,
  showWeekday = true,
  showNote = false,
  noteClassName = '',
}) {
  const [dates, setDates] = useState(null)

  useEffect(() => {
    let timer
    const render = () => {
      const now = new Date()
      try {
        const h = hijriNow(now)
        if (!h) throw new Error('unrecognised Hijri month')
        const gregorian = new Intl.DateTimeFormat('en-GB', {
          ...(showWeekday ? { weekday: 'long' } : {}),
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(now)
        setDates({ hijri: `${h.day} ${h.month} ${h.year} AH`, gregorian })
      } catch {
        setDates(null)
      }
      // If the page is still open at Maghrib, turn the date over right then
      // instead of waiting for a reload.
      const sunset = sunsetToday(now)
      const wait = sunset ? sunset.getTime() - now.getTime() : -1
      if (wait > 0 && wait < 864e5) timer = setTimeout(render, wait + 1000)
    }
    render()
    return () => clearTimeout(timer)
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
