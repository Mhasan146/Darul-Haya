// Homepage "learning platform" preview — a calm, brand-styled mock of the
// student dashboard: subject tiles with line icons + weekly progress bars.
// Design cues (rounded cards, soft shapes, subject tiles, progress) are drawn
// from common learning-app patterns and rebuilt in the Darul Haya palette
// (charcoal / ivory / saffron). Server component — no client JS, no avatars.

// Icons kept simple and reused from the site's heroicon set.
const ICONS = {
  book: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
  chart: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  beaker: 'M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.3 24.3 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.066 9.066 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
}

const SUBJECTS = [
  { name: 'English', meta: '3h 10m this week', active: true, icon: ICONS.book },
  { name: 'Mathematics', meta: 'Number & algebra', icon: ICONS.chart },
  { name: 'Science', meta: 'Working scientifically', icon: ICONS.beaker },
  { name: 'Arabic', meta: 'Live, every week', arabic: true },
]

const PROGRESS = [
  { name: 'English', pct: 82, accent: false },
  { name: 'Mathematics', pct: 64, accent: false },
  { name: 'Science', pct: 90, accent: true },
  { name: 'Arabic', pct: 48, accent: false },
]

function SubjectIcon({ subject }) {
  if (subject.arabic) {
    return <span className="font-display text-xl leading-none -translate-y-0.5" aria-hidden="true">ج</span>
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={subject.icon} />
    </svg>
  )
}

export default function StudentDashboard() {
  return (
    <section id="platform" className="relative overflow-hidden bg-beige py-20 border-b border-clay/10 scroll-mt-24">
      {/* Soft organic background shapes — subtle, in-brand tints */}
      <div aria-hidden className="absolute -top-20 -left-24 h-72 w-72 rounded-[42%_58%_60%_40%/45%_45%_55%_55%] bg-amber/10 blur-2xl" />
      <div aria-hidden className="absolute -bottom-24 -right-20 h-80 w-80 rounded-[60%_40%_40%_60%/50%_60%_40%_50%] bg-clay/[0.06] blur-2xl" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">The Learning Platform</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">Everything in one calm dashboard</h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-clay/80 leading-relaxed">
            Your child logs in to a single, distraction-free space — today&rsquo;s live lessons, their
            subjects, and clear progress at a glance. No noise, no clutter.
          </p>
        </div>

        {/* Dashboard mock card */}
        <div className="rounded-3xl bg-white border border-beige-dark shadow-xl shadow-clay/5 overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center gap-3 px-5 sm:px-6 py-4 border-b border-beige-dark bg-beige/50">
            <span className="h-9 w-9 rounded-xl bg-clay text-amber font-display font-bold flex items-center justify-center text-sm shrink-0" aria-hidden="true">DH</span>
            <div className="h-8 flex-1 max-w-xs rounded-lg bg-beige-dark/60 flex items-center px-3 text-xs text-clay/45">Search lessons…</div>
            <span className="ml-auto text-xs font-medium text-clay/55 hidden sm:block">Autumn term</span>
          </div>

          <div className="grid md:grid-cols-5">
            {/* Subject tiles */}
            <div className="md:col-span-3 p-5 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-clay/55 mb-4">Choose a lesson</p>
              <div className="grid grid-cols-2 gap-4">
                {SUBJECTS.map((s) => (
                  <div
                    key={s.name}
                    className={`rounded-2xl border p-4 flex flex-col gap-3 transition-colors ${
                      s.active ? 'border-amber ring-1 ring-amber bg-amber/[0.06]' : 'border-beige-dark bg-white'
                    }`}
                  >
                    <span
                      className={`h-11 w-11 rounded-xl flex items-center justify-center ${
                        s.active ? 'bg-amber/15 text-amber' : 'bg-beige-dark/60 text-clay'
                      }`}
                    >
                      <SubjectIcon subject={s} />
                    </span>
                    <div>
                      <p className="font-semibold text-clay text-sm">{s.name}</p>
                      <p className="text-[11px] text-clay/55 mt-0.5">{s.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress panel */}
            <div className="md:col-span-2 p-5 sm:p-6 bg-beige/40 border-t md:border-t-0 md:border-l border-beige-dark">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-clay/55 mb-4">This week&rsquo;s progress</p>
              <div className="space-y-4">
                {PROGRESS.map((p) => (
                  <div key={p.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium text-clay/80">{p.name}</span>
                      <span className="text-clay/50">{p.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-beige-dark overflow-hidden">
                      <div
                        className={`h-full rounded-full ${p.accent ? 'bg-amber' : 'bg-clay'}`}
                        style={{ width: `${p.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[11px] text-clay/45 leading-relaxed">Illustrative preview of the student dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
