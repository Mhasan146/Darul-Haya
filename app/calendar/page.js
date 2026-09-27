import Link from 'next/link'
import { WHATSAPP_URL, MOON_SIGHTING_NOTE } from '@/lib/siteConfig'
import MonthGrid from '@/components/MonthGrid'
import { CALENDAR, hijri, hijriLabel } from '@/lib/schoolCalendar'

export const metadata = {
  title: 'School Calendar 2026-27 | Darul Haya Online School',
  description:
    'Darul Haya 2026-27 school year calendar, aligned to the Ontario school year. First day, last day, winter break, March Break, statutory holidays and Eid closures, with Hijri dates.',
  alternates: { canonical: '/calendar' },
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const parts = (d) => {
  const [y, m, day] = d.split('-').map(Number)
  return { y, m: m - 1, d: day, wd: new Date(Date.UTC(y, m - 1, day)).getUTCDay() }
}
const long = (d, withYear = true) => {
  const p = parts(d)
  return `${WEEKDAY[p.wd]}, ${MONTHS[p.m]} ${p.d}${withYear ? `, ${p.y}` : ''}`
}
const shortDate = (d) => {
  const p = parts(d)
  return `${WEEKDAY[p.wd].slice(0, 3)}, ${MONTHS[p.m].slice(0, 3)} ${p.d}, ${p.y}`
}

/** "Mon, Dec 21, 2026 to Fri, Jan 1, 2027" / "Tue, Mar 9 or Wed, Mar 10, 2027" */
function gregorianLabel(e) {
  if (e.start === e.end) return long(e.start)
  const join = e.kind === 'eid' ? 'or' : 'to'
  const sameYear = e.start.slice(0, 4) === e.end.slice(0, 4)
  return `${long(e.start, !sameYear)} ${join} ${long(e.end)}`
}

/** Eid is the day itself, so read the end date; ranges collapse inside a month. */
function hijriRange(e) {
  if (e.start === e.end) return hijriLabel(e.start)
  if (e.kind === 'eid') return hijriLabel(e.end)
  const a = hijri(e.start)
  const b = hijri(e.end)
  if (a.month === b.month && a.year === b.year) return `${a.day} to ${b.day} ${a.month} ${a.year}`
  return `${hijriLabel(e.start)} to ${hijriLabel(e.end)}`
}

const FACTS = [
  { value: 'Sep 8, 2026', label: 'First day of classes' },
  { value: 'Jun 29, 2027', label: 'Last day of classes' },
  { value: '194 days', label: 'Minimum instructional days, per the Ontario school year' },
]

const PILL = {
  term: { cls: 'bg-teal text-white', text: 'Term' },
  break: { cls: 'bg-beige-dark text-teal-dark', text: 'Break' },
  holiday: { cls: 'bg-clay text-white', text: 'Holiday' },
  closed: { cls: 'bg-clay/80 text-white', text: 'Closed' },
  eid: { cls: 'bg-amber text-clay', text: 'Eid' },
}

// Only the Hijri months that begin during the school year.
const HIJRI_MONTHS = CALENDAR.hijriMonthStarts.filter(
  (m) => m.gregorian >= CALENDAR.firstDay && m.gregorian <= CALENDAR.lastDay,
)

const MoonIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
)

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-beige">
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">School Year</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-clay leading-tight">
            2026-27 School Calendar
          </h1>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-clay/80 leading-relaxed">
            Our year follows the Ontario school calendar, so your child breaks when their cousins and
            neighbours do. On top of that we close for Eid. Every date is shown in both the Gregorian
            and Hijri calendars.
          </p>
        </div>

        {/* At a glance */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {FACTS.map((f) => (
            <div key={f.label} className="bg-white rounded-2xl border border-beige-dark p-5 text-center">
              <p className="font-display text-2xl font-bold text-clay">{f.value}</p>
              <p className="mt-1.5 text-xs text-clay/80 leading-snug">{f.label}</p>
            </div>
          ))}
        </div>

        {/* Downloads */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="/Darul-Haya-Wall-Calendar-2026-27.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-teal text-white px-5 py-2.5 text-sm font-semibold hover:bg-teal-dark transition-colors"
          >
            Wall calendar
            <span className="text-white/80 font-normal">PDF</span>
          </a>
          <a
            href="/Darul-Haya-School-Calendar-2026-27.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-clay text-white px-5 py-2.5 text-sm font-semibold hover:bg-teal-dark transition-colors"
          >
            Key dates list
            <span className="text-white/80 font-normal">PDF</span>
          </a>
        </div>

        {/* Moon sighting, up front */}
        <div className="mt-8 rounded-2xl bg-white border border-amber/50 p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <span aria-hidden="true" className="shrink-0 grid h-11 w-11 place-items-center rounded-xl bg-amber/25 text-clay">
              <MoonIcon className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold text-clay">Every Hijri month begins with the moon</h2>
              <p className="mt-1.5 text-sm text-clay/80 leading-relaxed">
                All Hijri dates on this page, including both Eids and the start of Ramadan, are the
                expected ones. Each month begins only when the moon is sighted, so any of them can
                land a day either side of what is printed here. We confirm every Eid closure with
                families by email and WhatsApp as soon as it is announced, and we never expect a child
                in class on Eid.
              </p>
            </div>
          </div>
        </div>

        {/* Month by month, Monday to Sunday */}
        <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-clay">Month by month</h2>
        <p className="mt-3 mb-6 text-clay/80 leading-relaxed">
          The whole year laid out Monday to Sunday.
        </p>
        <MonthGrid />

        {/* Full year, in order */}
        <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-clay">The full year, in order</h2>
        <ul className="mt-5 space-y-3">
          {CALENDAR.events.map((e) => {
            const pill = PILL[e.kind]
            return (
              <li
                key={e.start}
                className="bg-white rounded-2xl border border-beige-dark p-5 sm:flex sm:items-start sm:gap-5"
              >
                <div className="sm:w-60 sm:shrink-0">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${pill.cls}`}>
                    {pill.text}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-clay leading-snug">{gregorianLabel(e)}</p>
                  <p className="mt-0.5 text-xs text-clay/80 leading-snug">{hijriRange(e)}</p>
                </div>
                <div className="mt-2 sm:mt-0 min-w-0">
                  <h3 className="font-semibold text-clay flex items-center gap-2">
                    {e.kind === 'eid' && <MoonIcon className="h-4 w-4 shrink-0 text-amber-dark" />}
                    {e.label}
                  </h3>
                  <p className="mt-1 text-sm text-clay/80 leading-relaxed">{e.note}</p>
                </div>
              </li>
            )
          })}
        </ul>

        {/* Hijri months across the school year */}
        <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-clay">Hijri months this school year</h2>
        <p className="mt-3 text-clay/80 leading-relaxed">
          {MOON_SIGHTING_NOTE} The dates below are what we expect, and we will tell you if a month
          starts a day later than printed.
        </p>
        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {HIJRI_MONTHS.map((m) => (
            <div
              key={`${m.name}-${m.year}`}
              className="flex items-center justify-between gap-4 rounded-xl bg-white border border-beige-dark px-4 py-3"
            >
              <span className="text-sm font-semibold text-clay">{m.name} {m.year}</span>
              <span className="text-sm text-clay/80 whitespace-nowrap">begins {shortDate(m.gregorian)}</span>
            </div>
          ))}
        </div>

        {/* Statutory holidays */}
        <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-clay">Ontario statutory holidays</h2>
        <p className="mt-3 text-clay/80 leading-relaxed">
          Ontario has nine public holidays under the Employment Standards Act. Here is where each one
          lands in the 2026-27 school year.
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-beige-dark bg-white">
          <table className="w-full text-[13px] sm:text-sm">
            <caption className="sr-only">Ontario statutory holidays during the 2026-27 school year</caption>
            <thead>
              <tr className="bg-beige-dark/60 text-left">
                <th scope="col" className="px-3 sm:px-5 py-3 font-semibold text-clay">Date</th>
                <th scope="col" className="px-3 sm:px-5 py-3 font-semibold text-clay">Hijri</th>
                <th scope="col" className="px-3 sm:px-5 py-3 font-semibold text-clay">For our students</th>
              </tr>
            </thead>
            <tbody>
              {CALENDAR.statutoryHolidays.map((h, i) => (
                <tr key={h.date} className={i % 2 ? 'bg-beige/40' : ''}>
                  <th scope="row" className="px-3 sm:px-5 py-3 text-left font-medium text-clay align-top">
                    {shortDate(h.date)}
                  </th>
                  <td className="px-3 sm:px-5 py-3 text-clay/80 align-top">{hijriLabel(h.date)}</td>
                  <td className="px-3 sm:px-5 py-3 text-clay/80 align-top">{h.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-clay/80 leading-relaxed">
          Two dates people often assume are days off are not public holidays in Ontario: September 30
          and November 11. Classes run as normal on both. March 29, 2027 is not a statutory holiday
          either, but Ontario schools close for it and so do we.
        </p>

        {/* Caveats */}
        <div className="mt-10 rounded-2xl bg-beige-dark/50 border border-beige-dark p-6">
          <h2 className="font-semibold text-clay">Before you book travel</h2>
          <ul className="mt-3 space-y-2 text-sm text-clay/80 leading-relaxed">
            <li>
              Professional activity days are set each year and announced to families in advance. They
              are not listed here yet.
            </li>
            <li>
              Class times follow Eastern Time. If you are travelling to another time zone, tell your
              child&rsquo;s teacher first so we can plan around it.
            </li>
            <li>
              Dates can change. Anything we move is emailed to parents and updated on this page.
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-teal text-white px-5 py-2.5 text-sm font-semibold hover:bg-teal-dark transition-colors"
            >
              Ask us about a date
              <span className="sr-only"> (opens WhatsApp in a new tab)</span>
            </a>
            <Link
              href="/register"
              className="inline-flex items-center rounded-full bg-amber text-clay px-5 py-2.5 text-sm font-semibold hover:bg-amber-dark transition-colors"
            >
              Apply for a seat
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
