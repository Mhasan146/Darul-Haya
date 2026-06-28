// "The real value" comparison — Darul Haya vs typical after-school tutoring.
// Figures are illustrative and easy to edit. Tutoring numbers are approximate
// (a single subject at centres like Kumon commonly runs ~$150–200/month for
// roughly an hour a week); phrased as "typical" to stay accurate.

const ROWS = [
  { label: 'Time with teachers', tutoring: '~1 hour / week', dh: 'A full school day, every day' },
  { label: 'Subjects covered', tutoring: 'One (math or reading)', dh: 'Every subject — plus Arabic' },
  { label: 'Books & materials', tutoring: 'Extra cost', dh: 'Shipped to your door, included' },
  { label: 'Typical monthly cost', tutoring: '~$150–200 (one subject)', dh: '$249 founding · $300 after' },
]

const SAVINGS = [
  'No daily commute — save on gas, time, and the school-run stress',
  'No separate tutoring fees — every subject and Arabic are included',
  'No supply-list shopping — physical books arrive at your door',
  'No uniforms, lunches, or before/after-care costs',
]

export default function ValueComparison() {
  return (
    <section id="value" className="bg-beige-dark border-y border-clay/5 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">The Real Value</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">More school, for less than tutoring</h2>
          <p className="mt-4 text-clay/60 leading-relaxed">
            Families often pay as much for a single after-school subject as a full day of real
            school costs here. Here's how it compares.
          </p>
        </div>

        {/* Comparison card */}
        <div className="bg-white rounded-2xl border border-beige-dark shadow-sm overflow-hidden max-w-3xl mx-auto">
          <div className="grid grid-cols-3 text-sm">
            {/* Header row */}
            <div className="p-4 sm:p-5" />
            <div className="p-4 sm:p-5 text-center border-l border-beige-dark">
              <p className="text-xs font-semibold uppercase tracking-wider text-clay/40">Typical tutoring</p>
            </div>
            <div className="p-4 sm:p-5 text-center border-l border-beige-dark bg-teal/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal">Darul Haya</p>
            </div>

            {/* Data rows */}
            {ROWS.map((r, i) => (
              <div key={r.label} className="contents">
                <div className={`p-4 sm:p-5 font-semibold text-clay ${i > 0 ? 'border-t border-beige-dark' : ''}`}>
                  {r.label}
                </div>
                <div className={`p-4 sm:p-5 text-center text-clay/50 border-l border-beige-dark ${i > 0 ? 'border-t' : ''}`}>
                  {r.tutoring}
                </div>
                <div className={`p-4 sm:p-5 text-center font-medium text-clay border-l border-beige-dark bg-teal/5 ${i > 0 ? 'border-t' : ''}`}>
                  {r.dh}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Savings list */}
        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-center text-clay font-semibold mb-5">And the everyday savings add up:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {SAVINGS.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-beige-dark shadow-sm">
                <span className="text-teal mt-0.5 shrink-0" aria-hidden="true">✓</span>
                <span className="text-sm text-clay/70 leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
