// "The real value" comparison.
// All figures are editable constants. The comparable-school range is based on
// published 2025–26 tuition at Ontario Islamic schools for one child in
// Grades 3–8, paid over 10 months (kept unnamed on purpose).

const DH_MONTHLY = '$249–$300'            // founding–regular Full-Live monthly
const SCHOOL_MONTHLY = '$840–$955'        // comparable Islamic day schools, per month
const SCHOOL_ANNUAL = '$8,400–$9,550'     // …per year
const MATERIAL_FEE = '$150'               // annual material fee
const TECH_FEE = '$100'                   // annual technology fee

const ROWS = [
  { label: 'Monthly tuition (1 child)', school: `~${SCHOOL_MONTHLY}`, dh: DH_MONTHLY },
  { label: 'Format', school: 'In-person, fixed hours', dh: 'Live online, every day' },
  { label: 'Class environment', school: 'Large classes', dh: 'Small, closely supervised' },
  { label: 'Books & materials', school: 'Often billed on top', dh: `Flat ${MATERIAL_FEE}/yr — no per-book fees` },
  { label: 'Technology', school: 'Device / tech fees common', dh: `Flat ${TECH_FEE}/yr` },
]

const SAVINGS = [
  'No daily commute — save on gas, time, and the school-run stress',
  'No separate tutoring fees — every subject and Arabic are included',
  'No surprise book bills — one flat material fee covers everything',
  'No uniforms, lunches, or before/after-care costs',
]

export default function ValueComparison() {
  return (
    <section id="value" className="bg-beige-dark border-y border-clay/5 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">The Real Value</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">A full education, for a fraction of the cost</h2>
          <p className="mt-4 text-clay/60 leading-relaxed">
            A traditional Islamic day school runs roughly {SCHOOL_ANNUAL} a year for one child.
            Darul Haya delivers a complete, faith-centered education — live, every day — for about a third of that.
          </p>
        </div>

        {/* Comparison card */}
        <div className="bg-white rounded-2xl border border-beige-dark shadow-sm overflow-hidden max-w-3xl mx-auto">
          <div className="grid grid-cols-3 text-sm">
            {/* Header row */}
            <div className="p-4 sm:p-5" />
            <div className="p-4 sm:p-5 text-center border-l border-beige-dark">
              <p className="text-xs font-semibold uppercase tracking-wider text-clay/40">Comparable Islamic school</p>
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
                  {r.school}
                </div>
                <div className={`p-4 sm:p-5 text-center font-medium text-clay border-l border-beige-dark bg-teal/5 ${i > 0 ? 'border-t' : ''}`}>
                  {r.dh}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-clay/40 mt-4 max-w-2xl mx-auto">
          Comparison based on published tuition at comparable Ontario Islamic schools for one child in Grades 3–8.
          Darul Haya also keeps it simple: a flat {MATERIAL_FEE} material fee and {TECH_FEE} technology fee at the start of each year.
        </p>

        {/* Tutoring callout */}
        <div className="max-w-3xl mx-auto mt-8 rounded-2xl bg-clay text-white p-6 sm:p-7 text-center">
          <p className="text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-amber">Even compared to tutoring:</span> a single subject at an
            after-school centre often costs ~$150–$200 a month for about an hour a week. Darul Haya is
            <span className="font-semibold"> every subject, taught live, all day.</span>
          </p>
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
