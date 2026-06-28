// "The real value" comparison. Figures are editable constants.
// School tuition is taken from each school's published fee schedule for one
// child in the Grades 3–8 range, paid over 10 monthly installments.

const SCHOOLS = [
  {
    name: 'ISNA Schools',
    monthly: '~$843',
    annual: '≈ $8,427 / year',
    detail: 'In-person · Grades 3–8',
    year: '2025–26 published rates',
  },
  {
    name: 'Olive Grove School',
    monthly: '~$955',
    annual: '≈ $9,550 / year',
    detail: 'In-person · Grades 1–8',
    year: '2026–27 published rates',
  },
]

const DH = {
  monthly: '$300',
  detail: 'Live online · Grades 3–8',
  note: 'Books & technology via flat annual fees',
}

const MATERIAL_FEE = '$150'
const TECH_FEE = '$100'

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
            Traditional Islamic day schools run roughly $8,400–$9,550 a year for one child. Darul Haya
            delivers a complete, faith-centered education — live, every day — for about a third of that.
          </p>
        </div>

        {/* Price comparison cards */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {SCHOOLS.map((s) => (
            <div key={s.name} className="bg-white rounded-2xl p-6 border border-beige-dark shadow-sm text-center flex flex-col">
              <h3 className="font-bold text-clay text-lg">{s.name}</h3>
              <div className="mt-3 flex items-end justify-center gap-1">
                <span className="text-3xl font-bold text-clay/70">{s.monthly}</span>
                <span className="text-sm text-clay/40 mb-1">/mo</span>
              </div>
              <p className="text-xs text-clay/40 mt-1">{s.annual}</p>
              <p className="text-sm text-clay/60 mt-4">{s.detail}</p>
              <p className="text-[11px] text-clay/40 mt-auto pt-4">{s.year}</p>
            </div>
          ))}

          {/* Darul Haya — highlighted */}
          <div className="bg-clay text-white rounded-2xl p-6 shadow-xl shadow-clay/20 text-center flex flex-col ring-2 ring-amber">
            <h3 className="font-bold text-amber text-lg">Darul Haya</h3>
            <div className="mt-3 flex items-end justify-center gap-1">
              <span className="text-4xl font-bold">{DH.monthly}</span>
              <span className="text-sm text-white/60 mb-1">/mo</span>
            </div>
            <p className="text-xs text-white/50 mt-1">{DH.note}</p>
            <p className="text-sm text-white/80 mt-4">{DH.detail}</p>
            <p className="text-[11px] text-amber font-semibold mt-auto pt-4">Best value</p>
          </div>
        </div>

        <p className="text-center text-xs text-clay/40 mt-4 max-w-2xl mx-auto">
          School figures are each institution's published tuition for one child, paid over 10 monthly
          installments. Darul Haya keeps it simple: a flat {MATERIAL_FEE} material fee and {TECH_FEE} technology
          fee at the start of each year — no per-book charges.
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
