import AssessmentForm from '@/components/AssessmentForm'

export const metadata = {
  title: 'Book a Free Assessment',
  description:
    'Book a free, no-commitment assessment for your child (Grades 3–8). We help place your child at the right level, check schedule fit, and answer your questions about Darul Haya.',
  alternates: { canonical: '/assessment' },
}

const COVERS = [
  {
    title: 'Right level',
    body: 'A quick, friendly check of where your child is, so they start in the right place.',
  },
  {
    title: 'Schedule fit',
    body: 'We walk you through the daily timetable and make sure it works for your family.',
  },
  {
    title: 'Your questions',
    body: 'Ask anything about classes, Arabic, safety, or how the platform works — no pressure.',
  },
]

export default function AssessmentPage() {
  return (
    <div className="bg-beige min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-clay">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#10544e] via-clay to-[#0b3a36]" />
        <div aria-hidden className="absolute inset-0 bg-ornament-light opacity-[0.07]" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-16 text-center">
          <span className="inline-flex items-center gap-2 mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white bg-white/15 ring-1 ring-white/30 px-4 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" /> Free · No commitment
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight text-balance">
            Book a free assessment
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            The easiest first step. A short, friendly call to see if Darul Haya is the
            right fit for your child — before you decide anything.
          </p>
        </div>
      </section>

      {/* What it covers + form */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
        {/* What the assessment covers */}
        <div>
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">What we&rsquo;ll cover</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-clay">A no-pressure conversation</h2>
          <div className="gold-rule mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <ul className="mt-8 flex flex-col gap-6">
            {COVERS.map((c) => (
              <li key={c.title} className="flex items-start gap-4">
                <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-teal/10 text-teal flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-clay text-sm">{c.title}</h3>
                  <p className="text-clay/80 text-sm mt-1 leading-relaxed">{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl border border-beige-dark shadow-xl shadow-clay/10 p-7 sm:p-8">
          <h2 className="text-xl font-bold text-clay mb-1">Request your assessment</h2>
          <p className="text-clay/80 text-sm mb-6">Book instantly on WhatsApp, or leave your details and we&rsquo;ll reach out.</p>
          <AssessmentForm />
        </div>
      </section>
    </div>
  )
}
