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
  {
    // TODO: Confirm tutoring estimate with local provider rates before publishing
    name: 'Private Tutoring',
    monthly: '~$600',
    annual: '≈ $6,000+ / year',
    detail: '4 subjects · ~1 hr/wk each',
    year: 'Toronto area typical rates',
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
    <section id="value" className="relative overflow-hidden bg-clay text-white scroll-mt-24">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#10544e] via-clay to-[#0b3a36]" />
      <div aria-hidden className="absolute inset-0 bg-ornament-light opacity-[0.06]" />
      <div aria-hidden className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-teal-light/15 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-amber/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">The Real Value</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">A full education, for a fraction of the cost</h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-white/70 leading-relaxed">
            Traditional Islamic day schools run roughly $8,400–$9,550 a year. Even after-school tutoring for
            four subjects adds up to $6,000+. Darul Haya delivers a complete, faith-centered education —
            live, every day — for less than half the cost.
          </p>
        </div>

        {/* Price comparison grid — 3 competitors + Darul Haya */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {SCHOOLS.map((s) => (
            <div key={s.name} className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 text-center flex flex-col">
              <h3 className="font-bold text-white text-base">{s.name}</h3>
              <div className="mt-3 flex items-end justify-center gap-1">
                <span className="text-3xl font-bold text-white/85">{s.monthly}</span>
                <span className="text-sm text-white/60 mb-1">/mo</span>
              </div>
              <p className="text-xs text-white/60 mt-1">{s.annual}</p>
              <p className="text-sm text-white/60 mt-4">{s.detail}</p>
              <p className="text-[11px] text-white/50 mt-auto pt-4">{s.year}</p>
            </div>
          ))}

          {/* Darul Haya — cream highlight */}
          <div className="bg-beige text-clay rounded-2xl p-6 text-center flex flex-col ring-2 ring-amber shadow-2xl shadow-black/30">
            <h3 className="font-bold text-teal text-base">Darul Haya</h3>
            <div className="mt-3 flex items-end justify-center gap-1">
              <span className="text-4xl font-bold text-clay">{DH.monthly}</span>
              <span className="text-sm text-clay/70 mb-1">/mo</span>
            </div>
            <p className="text-xs text-clay/70 mt-1">{DH.note}</p>
            <p className="text-sm text-clay/70 mt-4">{DH.detail}</p>
            <p className="text-[11px] text-teal font-semibold mt-auto pt-4">★ Best value</p>
          </div>
        </div>

        <p className="text-center text-xs text-white/50 mt-4 max-w-2xl mx-auto">
          School figures are each institution's published tuition for one child, paid over 10 monthly
          installments. Darul Haya keeps it simple: a flat {MATERIAL_FEE} material fee and {TECH_FEE} technology
          fee at the start of each year — no per-book charges.
        </p>

        {/* Savings list */}
        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-center text-white font-semibold mb-5">And the everyday savings add up:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {SAVINGS.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-white/5 ring-1 ring-white/10 rounded-xl p-4">
                <span className="text-amber mt-0.5 shrink-0" aria-hidden="true">✓</span>
                <span className="text-sm text-white/75 leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
