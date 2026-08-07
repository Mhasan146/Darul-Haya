import OpenHouseForm from '@/components/OpenHouseForm'

export const metadata = {
  title: 'Free Open House: Tour Our Live Online Islamic School',
  description:
    'Experience live classroom demos and meet our faculty. Zero commitment, 100 percent transparency. Reserve your free Open House spot today.',
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
    title: 'Meet Founding Faculty',
    body: 'Discover how our certified educators maintain high engagement and moral discipline in online classrooms.',
  },
  {
    title: 'Live System Tour',
    body: 'Watch a live demonstration of our classroom software, screen safety monitoring, and student portal.',
  },
  {
    title: 'Open Q&A Session',
    body: 'Get direct answers regarding tuition, curriculum, transferability, and daily schedules with zero sales pressure.',
  },
]

export default function OpenHousePage() {
  return (
    <div className="bg-beige min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-beige-dark/40 border-b border-clay/10">
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-16 text-center">
          <span className="inline-flex items-center gap-2 mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-dark bg-white ring-1 ring-teal/25 px-4 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" /> 100% Free · Zero Commitment
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-clay leading-[1.1] tracking-tight text-balance">
            Experience a Live Class at Our Free Open House
          </h1>
          <p className="mt-5 text-lg text-clay/80 max-w-xl mx-auto leading-relaxed">
            See how our live classroom software works, inspect our curriculum, meet our founding
            faculty, and ask your tough questions in a zero-pressure environment.
          </p>
        </div>
      </section>

      {/* Two ways to join */}
      <section className="max-w-5xl mx-auto px-6 pt-14">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-2">Two Flexible Options</p>
          <p className="text-clay/80">Attend online from home or join us in person to meet our leadership team.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {SESSIONS.map((s) => (
            <div key={s.type} className="bg-white rounded-2xl border border-beige-dark shadow-sm p-6">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 shrink-0 rounded-xl bg-teal/10 text-teal-dark flex items-center justify-center" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-5 w-5">
                    {s.icon}
                  </svg>
                </span>
                <p className="text-teal-dark text-xs font-semibold uppercase tracking-widest">{s.type}</p>
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
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">Agenda</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-clay">Inside our Open House event</h2>
          <div className="gold-rule mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <ul className="mt-8 flex flex-col gap-6">
            {AGENDA.map((a) => (
              <li key={a.title} className="flex items-start gap-4">
                <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-teal/10 text-teal-dark flex items-center justify-center" aria-hidden="true">
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
          <p className="mt-8 text-sm text-clay/80 bg-white rounded-xl border border-beige-dark p-4">
            Select your preferred session below. We will send full access links and reminders
            straight to your phone.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl border border-beige-dark shadow-xl shadow-clay/10 p-7 sm:p-8">
          <h2 className="text-xl font-bold text-clay mb-1">Reserve Your Spot (Limited Space)</h2>
          <p className="text-clay/80 text-sm mb-6">Choose your session and enter your details below.</p>
          <OpenHouseForm />
        </div>
      </section>
    </div>
  )
}
