import Link from 'next/link'
import { WHATSAPP_URL, MOON_SIGHTING_NOTE } from '@/lib/siteConfig'

export const metadata = {
  title: 'School Calendar 2026-27 | Darul Haya Online School',
  description:
    'Darul Haya 2026-27 school year calendar, aligned to the Ontario school year. First day, last day, winter break, March Break, statutory holidays and Eid closures.',
  alternates: { canonical: '/calendar' },
}

// Every closure and milestone in the 2026-27 year, in order.
// kind drives the colour of the pill beside each row. Hijri readings are
// Umm al-Qura adjusted to local sighting (see HIJRI_OFFSET_DAYS in siteConfig).
const DATES = [
  {
    kind: 'holiday',
    date: 'Monday, September 7, 2026',
    hijri: '24 Rabi al-Awwal 1448',
    label: 'Labour Day',
    note: 'Statutory holiday. Classes begin the next morning.',
  },
  {
    kind: 'term',
    date: 'Tuesday, September 8, 2026',
    hijri: '25 Rabi al-Awwal 1448',
    label: 'First day of classes',
    note: 'Live classes start for every grade.',
  },
  {
    kind: 'holiday',
    date: 'Monday, October 12, 2026',
    hijri: '30 Rabi al-Thani 1448',
    label: 'Thanksgiving Day',
    note: 'Statutory holiday. School closed.',
  },
  {
    kind: 'term',
    date: 'Friday, December 18, 2026',
    hijri: '8 Rajab 1448',
    label: 'Last day before the winter break',
    note: 'Classes run as normal.',
  },
  {
    kind: 'break',
    date: 'Monday, December 21, 2026 to Friday, January 1, 2027',
    hijri: '11 to 22 Rajab 1448',
    label: 'Winter break',
    note: 'Two weeks off. Christmas Day, Boxing Day and New Year’s Day all fall inside the break.',
  },
  {
    kind: 'term',
    date: 'Monday, January 4, 2027',
    hijri: '25 Rajab 1448',
    label: 'Classes resume',
    note: 'Back to the normal timetable.',
  },
  {
    kind: 'holiday',
    date: 'Monday, February 15, 2027',
    hijri: '7 Ramadan 1448',
    label: 'Family Day',
    note: 'Statutory holiday. School closed, in the first week of Ramadan.',
  },
  {
    kind: 'eid',
    date: 'Tuesday, March 9 or Wednesday, March 10, 2027',
    hijri: '1 Shawwal 1448',
    label: 'Eid al-Fitr',
    note: 'School closed on the day Eid falls. Which of the two days it is depends on the sighting of the Shawwal moon, and we confirm it with families as soon as it is announced.',
  },
  {
    kind: 'break',
    date: 'Monday, March 15 to Friday, March 19, 2027',
    hijri: '6 to 10 Shawwal 1448',
    label: 'March Break',
    note: 'One full week off, matching the Ontario March Break.',
  },
  {
    kind: 'holiday',
    date: 'Friday, March 26, 2027',
    hijri: '17 Shawwal 1448',
    label: 'Good Friday',
    note: 'Statutory holiday. School closed.',
  },
  {
    kind: 'holiday',
    date: 'Monday, March 29, 2027',
    hijri: '20 Shawwal 1448',
    label: 'Easter Monday',
    note: 'Not a statutory holiday in Ontario, but schools close and so do we.',
  },
  {
    kind: 'eid',
    date: 'Sunday, May 16 or Monday, May 17, 2027',
    hijri: '10 Dhul Hijjah 1448',
    label: 'Eid al-Adha',
    note: 'If Eid falls on the Sunday, no class day is affected. If the moon sighting puts it on the Monday, that Monday is closed.',
  },
  {
    kind: 'holiday',
    date: 'Monday, May 24, 2027',
    hijri: '17 Dhul Hijjah 1448',
    label: 'Victoria Day',
    note: 'Statutory holiday. School closed.',
  },
  {
    kind: 'term',
    date: 'Tuesday, June 29, 2027',
    hijri: '23 Muharram 1449',
    label: 'Last day of classes',
    note: 'Final reports go home to parents.',
  },
  {
    kind: 'holiday',
    date: 'Thursday, July 1, 2027',
    hijri: '25 Muharram 1449',
    label: 'Canada Day',
    note: 'Statutory holiday, after the school year has ended.',
  },
]

// When each Hijri month of the school year begins. Expected dates: the moon
// decides, so any of these can land a day either side.
const HIJRI_MONTHS = [
  ['Rabi al-Thani 1448', 'Sun, Sep 13, 2026'],
  ['Jumada al-Ula 1448', 'Tue, Oct 13, 2026'],
  ['Jumada al-Akhirah 1448', 'Thu, Nov 12, 2026'],
  ['Rajab 1448', 'Fri, Dec 11, 2026'],
  ['Shaban 1448', 'Sun, Jan 10, 2027'],
  ['Ramadan 1448', 'Tue, Feb 9, 2027'],
  ['Shawwal 1448', 'Wed, Mar 10, 2027'],
  ['Dhul Qadah 1448', 'Fri, Apr 9, 2027'],
  ['Dhul Hijjah 1448', 'Sat, May 8, 2027'],
  ['Muharram 1449', 'Mon, Jun 7, 2027'],
]

// The nine public holidays under Ontario's Employment Standards Act,
// listed in calendar order across the school year.
const STAT_HOLIDAYS = [
  ['Labour Day', 'Mon, Sep 7, 2026', 'Day before classes begin'],
  ['Thanksgiving Day', 'Mon, Oct 12, 2026', 'School closed'],
  ['Christmas Day', 'Fri, Dec 25, 2026', 'Inside the winter break'],
  ['Boxing Day', 'Sat, Dec 26, 2026', 'Inside the winter break'],
  ['New Year’s Day', 'Fri, Jan 1, 2027', 'Inside the winter break'],
  ['Family Day', 'Mon, Feb 15, 2027', 'School closed'],
  ['Good Friday', 'Fri, Mar 26, 2027', 'School closed'],
  ['Victoria Day', 'Mon, May 24, 2027', 'School closed'],
  ['Canada Day', 'Thu, Jul 1, 2027', 'After the school year ends'],
]

const FACTS = [
  { value: 'Sep 8, 2026', label: 'First day of classes' },
  { value: 'Jun 29, 2027', label: 'Last day of classes' },
  { value: '194 days', label: 'Minimum instructional days, per the Ontario school year' },
]

const PILL = {
  term: { cls: 'bg-teal text-white', text: 'Term' },
  break: { cls: 'bg-beige-dark text-teal-dark', text: 'Break' },
  holiday: { cls: 'bg-clay text-white', text: 'Holiday' },
  eid: { cls: 'bg-amber text-clay', text: 'Eid' },
}

const MoonIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
)

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-beige">
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">School Year</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-clay leading-tight">
            2026-27 School Calendar
          </h1>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-clay/80 leading-relaxed">
            Our year follows the Ontario school calendar, so your child breaks when their cousins and
            neighbours do. On top of that we close for Eid. Print it, or check back before you book
            anything.
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

        {/* Eid note, up front because it is the question parents ask */}
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

        {/* Full year, in order */}
        <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-clay">The full year, in order</h2>
        <ul className="mt-5 space-y-3">
          {DATES.map((d) => {
            const pill = PILL[d.kind]
            return (
              <li
                key={d.label}
                className="bg-white rounded-2xl border border-beige-dark p-5 sm:flex sm:items-start sm:gap-5"
              >
                <div className="sm:w-56 sm:shrink-0">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${pill.cls}`}>
                    {pill.text}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-clay leading-snug">{d.date}</p>
                  <p className="mt-0.5 text-xs text-clay/80 leading-snug">{d.hijri}</p>
                </div>
                <div className="mt-2 sm:mt-0 min-w-0">
                  <h3 className="font-semibold text-clay flex items-center gap-2">
                    {d.kind === 'eid' && <MoonIcon className="h-4 w-4 shrink-0 text-amber-dark" />}
                    {d.label}
                  </h3>
                  <p className="mt-1 text-sm text-clay/80 leading-relaxed">{d.note}</p>
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
          {HIJRI_MONTHS.map(([name, when]) => (
            <div
              key={name}
              className="flex items-center justify-between gap-4 rounded-xl bg-white border border-beige-dark px-4 py-3"
            >
              <span className="text-sm font-semibold text-clay">{name}</span>
              <span className="text-sm text-clay/80 whitespace-nowrap">begins {when}</span>
            </div>
          ))}
        </div>

        {/* Statutory holidays */}
        <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-clay">Ontario statutory holidays</h2>
        <p className="mt-3 text-clay/80 leading-relaxed">
          Ontario has nine public holidays under the Employment Standards Act. Here is where each one
          lands in the 2026-27 school year.
        </p>
        {/* overflow-x-auto keeps the third column reachable on narrow phones */}
        <div className="mt-5 overflow-x-auto rounded-2xl border border-beige-dark bg-white">
          <table className="w-full text-[13px] sm:text-sm">
            <caption className="sr-only">Ontario statutory holidays during the 2026-27 school year</caption>
            <thead>
              <tr className="bg-beige-dark/60 text-left">
                <th scope="col" className="px-3 sm:px-5 py-3 font-semibold text-clay">Holiday</th>
                <th scope="col" className="px-3 sm:px-5 py-3 font-semibold text-clay">Date</th>
                <th scope="col" className="px-3 sm:px-5 py-3 font-semibold text-clay">For our students</th>
              </tr>
            </thead>
            <tbody>
              {STAT_HOLIDAYS.map(([name, when, effect], i) => (
                <tr key={name} className={i % 2 ? 'bg-beige/40' : ''}>
                  <th scope="row" className="px-3 sm:px-5 py-3 text-left font-medium text-clay align-top">{name}</th>
                  <td className="px-3 sm:px-5 py-3 text-clay/80 align-top">{when}</td>
                  <td className="px-3 sm:px-5 py-3 text-clay/80 align-top">{effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-clay/80 leading-relaxed">
          Two days people often ask about are not public holidays in Ontario: the National Day for
          Truth and Reconciliation on September 30 and Remembrance Day on November 11. Classes run as
          normal on both. Easter Monday is not a statutory holiday either, but Ontario schools close
          for it and so do we.
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
              href="/Darul-Haya-School-Calendar-2026-27.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-clay text-white px-5 py-2.5 text-sm font-semibold hover:bg-teal-dark transition-colors"
            >
              Print the calendar
              <span className="text-white/80 font-normal">PDF</span>
            </a>
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
