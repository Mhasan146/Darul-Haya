'use client'
import { useEffect, useState } from 'react'

// Shows today's date in both the Islamic (Umm al-Qura) and Gregorian calendars.
// Computed natively via Intl — no external library. Renders nothing on the
// server (and until mounted) so the visitor's own local date is used with no
// hydration mismatch.
export default function HijriDate({
  className = '',
  hijriClassName = '',
  gregorianClassName = '',
  separator = ' · ',
  stacked = false,
  showWeekday = true,
}) {
  const [dates, setDates] = useState(null)

  useEffect(() => {
    const now = new Date()
    try {
      // The en-GB Islamic formatter already appends the "AH" era.
      const hijri = new Intl.DateTimeFormat('en-GB-u-ca-islamic-umalqura', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(now)
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

  if (stacked) {
    return (
      <span className={`flex flex-col leading-tight ${className}`}>
        <span className={hijriClassName}>{dates.hijri}</span>
        <span className={gregorianClassName}>{dates.gregorian}</span>
      </span>
    )
  }

  return (
    <span className={className}>
      <span className={hijriClassName}>{dates.hijri}</span>
      <span aria-hidden="true">{separator}</span>
      <span className={gregorianClassName}>{dates.gregorian}</span>
    </span>
  )
}
