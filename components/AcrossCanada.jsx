import { WHATSAPP_URL } from '@/lib/siteConfig'

// Classes start at 8:30 a.m. Eastern. These are the equivalent local start
// times in provinces whose clocks move with Ontario's, so the gap is the same
// all year. Saskatchewan and Yukon keep one clock year-round and are handled
// in the note below the table instead.
const ZONES = [
  { zone: 'Newfoundland', where: 'Newfoundland', start: '10:00 a.m.' },
  { zone: 'Atlantic', where: 'New Brunswick, Nova Scotia, PEI, Labrador', start: '9:30 a.m.' },
  { zone: 'Eastern', where: 'Ontario, Quebec', start: '8:30 a.m.', home: true },
  { zone: 'Central', where: 'Manitoba', start: '7:30 a.m.' },
  { zone: 'Mountain', where: 'Alberta, Northwest Territories', start: '6:30 a.m.' },
  { zone: 'Pacific', where: 'British Columbia', start: '5:30 a.m.' },
]

const POINTS = [
  {
    title: 'The Ontario curriculum',
    body:
      'Your child works through the curriculum expectations the Province of Ontario publishes for their grade, so the material lines up with what schools teach across the country.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    ),
  },
  {
    title: 'Your postal code decides nothing',
    body:
      'Every class is live and online, so a family in Surrey and a family in Scarborough sit in the same small classroom. No catchment, no waiting list, no move required.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5-2.5 3.75-5.5 3.75-9S14.5 5.5 12 3m0 18c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3M3.6 9h16.8M3.6 15h16.8" />
    ),
  },
  {
    title: 'Books to your door',
    body:
      'Physical textbooks and workbooks are shipped to your home. What that costs depends on how far they travel, which is why we confirm material fees with you once we know your address and your child’s grade.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-8.25 4.5-8.25-4.5m16.5 0v9l-8.25 4.5-8.25-4.5v-9m16.5 0L12 3 3.75 7.5" />
    ),
  },
]

export default function AcrossCanada() {
  return (
    <section
      id="canada"
      aria-labelledby="canada-heading"
      className="bg-beige border-b border-clay/10 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">
            Across Canada
          </p>
          <h2 id="canada-heading" className="text-3xl sm:text-4xl font-bold text-clay">
            An Ontario school your child can attend from any province
          </h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-clay/80 leading-relaxed">
            We are based in Ontario and we teach the Ontario curriculum. Because every class is live
            and online, families join us from across the country without moving house or driving
            anywhere.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl border border-beige-dark p-6">
              <span
                aria-hidden="true"
                className="grid h-11 w-11 place-items-center rounded-xl bg-beige-dark text-teal-dark"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                  {p.icon}
                </svg>
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-clay">{p.title}</h3>
              <p className="mt-2 text-sm text-clay/80 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Time zones, so a family out west knows exactly what they are signing up for */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-clay">The school morning where you live</h3>
          <p className="mt-3 text-clay/80 leading-relaxed max-w-2xl">
            Classes run on Eastern Time and the school day begins at 8:30 a.m. That is an easy
            morning in Halifax and an early one in Vancouver, so here is what it looks like on your
            own clock before you decide.
          </p>

          <div className="mt-5 overflow-x-auto rounded-2xl border border-beige-dark bg-white">
            <table className="w-full text-[13px] sm:text-sm">
              <caption className="sr-only">
                Local start time of the school day in each Canadian time zone
              </caption>
              <thead>
                <tr className="bg-beige-dark/60 text-left">
                  <th scope="col" className="px-3 sm:px-5 py-3 font-semibold text-clay">Time zone</th>
                  <th scope="col" className="px-3 sm:px-5 py-3 font-semibold text-clay">Where</th>
                  <th scope="col" className="px-3 sm:px-5 py-3 font-semibold text-clay">Class starts</th>
                </tr>
              </thead>
              <tbody>
                {ZONES.map((z, i) => (
                  <tr key={z.zone} className={z.home ? 'bg-beige-dark/40' : i % 2 ? 'bg-beige/40' : ''}>
                    <th scope="row" className="px-3 sm:px-5 py-3 text-left font-medium text-clay align-top">
                      {z.zone}
                      {z.home && <span className="sr-only"> (our own time zone)</span>}
                    </th>
                    <td className="px-3 sm:px-5 py-3 text-clay/80 align-top">{z.where}</td>
                    <td className="px-3 sm:px-5 py-3 font-semibold text-clay align-top whitespace-nowrap">
                      {z.start}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-clay/80 leading-relaxed">
            Saskatchewan and Yukon keep the same clock all year while Ontario changes twice, so their
            start time moves. In Saskatchewan the day begins at 7:30 a.m. through the winter and 6:30
            a.m. the rest of the school year. In Yukon it is 6:30 a.m. through the winter and 5:30
            a.m. the rest of the year. If you are in Nunavut or anywhere else not listed here, ask us
            and we will work it out with you.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-teal text-white px-5 py-2.5 text-sm font-semibold hover:bg-teal-dark transition-colors"
          >
            Ask how the day would work for us
            <span className="sr-only"> (opens WhatsApp in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
