'use client'
import { useEffect, useState } from 'react'

// Shows today's date in both the Islamic (Umm al-Qura) and Gregorian calendars.
// Computed natively via Intl — no external library. Renders nothing on the
// server (and until mounted) so the visitor's own local date is used with no
// hydration mismatch.
export default function HijriDate({ className = '', separator = ' · ' }) {
  const [dates, setDates] = useState(null)

  useEffect(() => {
    const now = new Date()
    try {
      const hijri = new Intl.DateTimeFormat('en-GB-u-ca-islamic-umalqura', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(now)
      const gregorian = new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(now)
      // The en-GB Islamic formatter already appends the "AH" era.
      setDates({ hijri, gregorian })
    } catch {
      setDates(null)
    }
  }, [])

  if (!dates) return null

  return (
    <span className={className}>
      <span>{dates.hijri}</span>
      <span aria-hidden="true">{separator}</span>
      <span>{dates.gregorian}</span>
    </span>
  )
}
