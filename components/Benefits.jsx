// Conversion-focused "Benefits of Online Schooling" section.
// Server component (no client JS needed) — uses the shared brand tokens
// (clay / teal / amber / beige) and the same card language as the rest of the site.

const BENEFITS = [
  {
    title: 'Reclaim Your Time & Budget',
    body:
      'Cut the gas money, the chaotic school-zone runs, and the white-knuckle winter drives. With zero commute, those lost hours — and dollars — go straight back to your family.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    title: 'A Safe, Curated Social Circle',
    body:
      'Trade toxic peer pressure and bullying for a calm, moderated community — where your child connects with peers who genuinely value respect, kindness, and character.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286Z"
      />
    ),
  },
  {
    title: 'Mastery-Based Learning Pace',
    body:
      'Our learning platform lets your child pause, rewind, or race ahead through the Ontario-standard curriculum — so they are never bored waiting, and never left behind.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
      />
    ),
  },
  {
    title: 'Total Curriculum Transparency',
    body:
      'You see exactly what is being taught — no hidden agendas, ever. Grades and teacher feedback are always one click away, so you are never left in the dark.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    ),
  },
  {
    title: 'Lifestyle & Family Flexibility',
    body:
      'Live classes blend with recorded lessons, so your family sets the schedule. Travel, holidays, and activities fit around your life — not a rigid school bell.',
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
    <section id="benefits" className="bg-beige-dark border-y border-clay/5 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            The Darul Haya Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">
            Benefits of Online Schooling
          </h2>
          <p className="mt-4 text-clay/60 leading-relaxed">
            A better school day for your child — and a calmer, more connected life for
            your whole family.
          </p>
        </div>

        {/* Benefit grid: stacked on mobile, 2-up on tablet, 3-up on desktop */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-7 shadow-sm ring-1 ring-clay/5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
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
              <p className="mt-2 text-sm text-clay/60 leading-relaxed">{b.body}</p>
            </div>
          ))}

          {/* Conversion CTA tile — also completes the 3×2 grid */}
          <div className="rounded-2xl p-7 bg-clay text-white shadow-md flex flex-col justify-center">
            <h3 className="text-xl font-bold leading-snug">
              Ready for a better school day?
            </h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Pick the plan that fits your family and enroll in minutes.
            </p>
            <a
              href="#pricing"
              className="mt-5 self-start inline-flex items-center gap-2 bg-amber text-clay font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-amber/90 transition-colors"
            >
              View Plans
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
