import OpenHouseForm from '@/components/OpenHouseForm'

export const metadata = {
  title: 'Free Open House — Online & In Person',
  description:
    'Join a free open house for Darul Haya — an online Islamic school for Grades 3–8. Meet Principal Mohammad Haaris Siddiqui online or in person, see how our live classes work, and ask your questions. No commitment.',
  alternates: { canonical: '/open-house' },
}

// TODO: fill in date/time (and the in-person venue) before promoting widely.
// Leave a field empty and the card shows "to be announced".
const SESSIONS = [
  {
    type: 'Online',
    location: 'Live over WhatsApp video',
    date: '', // e.g. 'Thursday, September 4, 2026'
    time: '', // e.g. '7:00 PM ET'
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    ),
  },
  {
    type: 'In person',
    location: '', // venue, e.g. 'Main Hall, [Masjid name], [City]'
    date: '',
    time: '',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    ),
  },
]

const AGENDA = [
  {
    title: 'Meet the Principal',
    body: 'Hear directly from Principal Mohammad Haaris Siddiqui on the calm, respectful environment Darul Haya creates for your child.',
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
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" /> Free · No commitment
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight text-balance">
            Join our free open house
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Meet Principal Mohammad Haaris Siddiqui — online or in person — see exactly how our
            live classes work, and get your questions answered before you decide anything.
          </p>
        </div>
      </section>

      {/* Two ways to join */}
      <section className="max-w-5xl mx-auto px-6 pt-14">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">Two ways to join</p>
          <p className="text-clay/80">Come in person to meet us face to face, or join live online — whichever suits your family.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {SESSIONS.map((s) => (
            <div key={s.type} className="bg-white rounded-2xl border border-beige-dark shadow-sm p-6">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 shrink-0 rounded-xl bg-teal/10 text-teal flex items-center justify-center" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-5 w-5">
                    {s.icon}
                  </svg>
                </span>
                <p className="text-teal text-xs font-semibold uppercase tracking-widest">{s.type}</p>
              </div>
              <p className="font-bold text-clay mt-4">
                {s.date ? `${s.date}${s.time ? ` · ${s.time}` : ''}` : 'Date to be announced'}
              </p>
              <p className="text-clay/80 text-sm mt-1">{s.location || 'Details to be announced'}</p>
            </div>
          ))}
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
            Pick the session that suits you below. We&rsquo;ll follow up with the details — the join
            link for online, or the venue and time for in person — plus a reminder.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl border border-beige-dark shadow-xl shadow-clay/10 p-7 sm:p-8">
          <h2 className="text-xl font-bold text-clay mb-1">Save your spot</h2>
          <p className="text-clay/80 text-sm mb-6">Choose a session and leave your details — we&rsquo;ll send you what you need.</p>
          <OpenHouseForm />
        </div>
      </section>
    </div>
  )
}
