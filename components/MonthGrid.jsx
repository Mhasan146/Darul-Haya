import {
  CALENDAR, dayMap, hijri, hijriLabel, monthGrid, schoolMonths,
  WEEKDAYS, MONTH_NAMES,
} from '@/lib/schoolCalendar'

// Monday-to-Sunday wall calendar for the school year. Each cell carries the
// Gregorian day and, beneath it, the Hijri day. Colour marks what the day is.
const CELL = {
  holiday: 'bg-clay text-white',
  closed: 'bg-clay/80 text-white',
  break: 'bg-beige-dark text-clay',
  eid: 'bg-amber text-clay font-bold',
  term: 'bg-teal text-white',
}

const LEGEND = [
  ['bg-teal', 'First and last day'],
  ['bg-clay', 'Statutory holiday'],
  ['bg-beige-dark border border-clay/15', 'Break'],
  ['bg-amber', 'Eid, subject to moon sighting'],
  ['bg-white border border-clay/15', 'Class day'],
]

function Month({ year, month, map, firstDay, lastDay }) {
  const weeks = monthGrid(year, month)
  const days = weeks.flat().filter(Boolean)
  const spanFrom = hijri(days[0])
  const spanTo = hijri(days[days.length - 1])
  const span =
    spanFrom.month === spanTo.month
      ? `${spanFrom.month} ${spanFrom.year}`
      : `${spanFrom.month} to ${spanTo.month} ${spanTo.year}`

  return (
    <div className="rounded-2xl border border-beige-dark bg-white overflow-hidden">
      <div className="bg-beige-dark/60 px-4 py-2.5">
        <h3 className="font-display text-lg font-bold text-clay leading-none">
          {MONTH_NAMES[month]} {year}
        </h3>
        <p className="mt-1 text-[11px] text-clay/80 leading-none">{span}</p>
      </div>
      <table className="w-full table-fixed border-collapse">
        <caption className="sr-only">
          {MONTH_NAMES[month]} {year}, Monday to Sunday
        </caption>
        <thead>
          <tr>
            {WEEKDAYS.map((w) => (
              <th
                key={w}
                scope="col"
                className="px-0 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-clay/80"
              >
                <span aria-hidden="true">{w[0]}</span>
                <span className="sr-only">{w}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi}>
              {week.map((d, di) => {
                if (!d) return <td key={di} className="p-0.5" />
                const ev = map.get(d)
                const outside = d < firstDay || d > lastDay
                const num = Number(d.slice(8))
                const h = hijri(d)
                const tone = ev && CELL[ev.kind]
                  ? CELL[ev.kind]
                  : outside
                    ? 'bg-beige/60 text-clay/80'
                    : 'bg-white text-clay'
                return (
                  <td key={di} className="p-0.5">
                    <div
                      className={`rounded-md leading-none py-1.5 text-center ${tone}`}
                      title={ev ? `${ev.label} · ${hijriLabel(d)}` : hijriLabel(d)}
                    >
                      <span className="block text-[12px] font-semibold">{num}</span>
                      <span className="block text-[9px] opacity-75 mt-0.5">{h.day}</span>
                    </div>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function MonthGrid() {
  const map = dayMap()
  const months = schoolMonths()
  const { firstDay, lastDay } = CALENDAR

  return (
    <div>
      <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-5">
        {LEGEND.map(([cls, label]) => (
          <li key={label} className="flex items-center gap-2 text-xs text-clay/80">
            <span aria-hidden="true" className={`h-3.5 w-3.5 rounded ${cls}`} />
            {label}
          </li>
        ))}
      </ul>
      <p className="mb-5 text-sm text-clay/80 leading-relaxed">
        Each square shows the Gregorian date on top and the Hijri date underneath.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {months.map(({ year, month }) => (
          <Month
            key={`${year}-${month}`}
            year={year}
            month={month}
            map={map}
            firstDay={firstDay}
            lastDay={lastDay}
          />
        ))}
      </div>
    </div>
  )
}
