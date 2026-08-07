// Conversion-focused "Benefits of Online Schooling" section.
// Server component (no client JS needed), uses the shared brand tokens
// (clay / teal / amber / beige) and the same card language as the rest of the site.

const BENEFITS = [
  {
    title: 'Reclaim 10+ Hours & $3,000+ Every Year',
    body:
      'Eliminate hazardous winter driving, stressful traffic runs, and hundreds in gas money. Reinvest those reclaimed hours directly back into family time.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    title: 'Guaranteed Safe Social Setting',
    body:
      'Zero toxic peer pressure, zero screen misconduct, and zero bullying. Your child learns in a moderated, respectful micro-environment.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286Z"
      />
    ),
  },
  {
    title: 'Accelerated Mastery Pace',
    body:
      'Never let your child get dragged down by slow classrooms or left behind when confused. Our small live sessions ensure instant feedback and steady pacing.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
      />
    ),
  },
  {
    title: 'Total Curriculum Control',
    body:
      'Know exactly what your child is learning every single day. No hidden agendas, no questionable materials, and full grade transparency.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    ),
  },
  {
    title: 'Unmatched Family Freedom',
    body:
      "Blended live and recorded lessons give your family its life back. Travel and manage schedules without damaging your child's GPA.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    ),
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-beige-dark border-y border-clay/5 scroll-mt-24">      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">
            The Darul Haya Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">
            The end of morning chaos and classroom peer pressure
          </h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-clay/80 leading-relaxed">
            The immediate lifestyle and academic upgrades your family experiences from day one:
          </p>
        </div>

        {/* Benefit grid: stacked on mobile, 2-up on tablet, 3-up on desktop */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-7 shadow-md ring-1 ring-clay/5 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal to-teal-dark text-white flex items-center justify-center shadow-lg shadow-teal/25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  {b.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-clay">{b.title}</h3>
              <p className="mt-2 text-sm text-clay/80 leading-relaxed">{b.body}</p>
            </div>
          ))}

          {/* Conversion CTA tile, also completes the 3×2 grid */}
          <div className="rounded-2xl p-7 bg-teal-dark text-white shadow-md shadow-teal/20 flex flex-col justify-center">
            <h3 className="text-xl font-bold leading-snug">
              Ready to experience stress-free, elite education?
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Secure your child&rsquo;s spot in our Fall 2026 intake before registration closes.
            </p>
            <a
              href="#pricing"
              className="mt-5 self-start inline-flex items-center gap-2 bg-white text-clay font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-beige transition-colors"
            >
              View Transparent Plans
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
