import OpenHouseForm from '@/components/OpenHouseForm'

export const metadata = {
  title: 'Free Online Open House',
  description:
    'Join a free online open house for Darul Haya — an online Islamic school for Grades 3–8. Meet Principal Mohammad Haaris Siddiqui, see how our live classes work, and ask your questions. No commitment.',
  alternates: { canonical: '/open-house' },
}

// TODO: set the real date & time before going live.
const OPEN_HOUSE = {
  date: 'Date to be confirmed',
  time: '',
}

const AGENDA = [
  {
    title: 'Meet the Principal',
    body: 'Hear directly from Mohammad Haaris Siddiqui — 15+ years in the classroom — on why Darul Haya exists and how it teaches.',
  },
  {
    title: 'See how a school day works',
    body: 'Live daily classes, the timetable, Arabic, the platform, and how progress and safety are handled.',
  },
  {
    title: 'Ask anything',
    body: 'Fees, fit for your child, schedules, how to enrol — bring your questions, no pressure to sign up.',
  },
]

export default function OpenHousePage() {
  return (
    <div className="bg-beige min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-clay">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#10544e] via-clay to-[#0b3a36]" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-16 text-center">
          <span className="inline-flex items-center gap-2 mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white bg-white/15 ring-1 ring-white/30 px-4 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" /> Free · Online · No commitment
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight text-balance">
            Join our free online open house
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Meet Principal Mohammad Haaris Siddiqui, see exactly how our live classes work, and
            get your questions answered — before you decide anything.
          </p>
          {OPEN_HOUSE.date !== 'Date to be confirmed' && (
            <p className="mt-6 inline-block rounded-xl bg-white/10 ring-1 ring-white/20 px-5 py-2.5 text-white font-semibold">
              {OPEN_HOUSE.date}{OPEN_HOUSE.time ? ` · ${OPEN_HOUSE.time}` : ''}
            </p>
          )}
        </div>
      </section>

      {/* Agenda + RSVP */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
        <div>
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">What to expect</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-clay">A relaxed, honest look inside</h2>
          <div className="gold-rule mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <ul className="mt-8 flex flex-col gap-6">
            {AGENDA.map((a) => (
              <li key={a.title} className="flex items-start gap-4">
                <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-teal/10 text-teal flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-clay text-sm">{a.title}</h3>
                  <p className="text-clay/80 text-sm mt-1 leading-relaxed">{a.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-clay/70 bg-white rounded-xl border border-beige-dark p-4">
            The open house is held live over <strong>WhatsApp video</strong>. RSVP below and we&rsquo;ll
            message you the join link and a reminder.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl border border-beige-dark shadow-xl shadow-clay/10 p-7 sm:p-8">
          <h2 className="text-xl font-bold text-clay mb-1">Save your spot</h2>
          <p className="text-clay/80 text-sm mb-6">Leave your details and we&rsquo;ll send you the WhatsApp join link.</p>
          <OpenHouseForm />
        </div>
      </section>
    </div>
  )
}
