'use client'
import { useState } from 'react'

// "The real value" comparison. Figures are editable constants.
// TODO(UK): all comparison figures below are PLACEHOLDERS. Replace with real,
// verifiable UK figures (e.g. from published independent-school fee pages and
// local tutor rates) before publishing — do not present these as fact until confirmed.
// School tuition is each school's published fee for one child in the Years 4–9
// range, paid over 10 monthly instalments (annual = monthly × 10).
const SCHOOLS = [
  {
    name: 'Independent Islamic school',
    monthly: '~£420',
    annual: '~£4,200',
    detail: 'In-person · Years 4–9',
    year: 'Typical UK day-school fees',
  },
  {
    name: 'Independent faith school',
    monthly: '~£480',
    annual: '~£4,800',
    detail: 'In-person · Years 3–9',
    year: 'Typical UK day-school fees',
  },
  {
    // TODO: Confirm tutoring estimate with real UK provider rates before publishing
    name: 'Private tutoring',
    monthly: '~£520',
    annual: '~£5,200',
    detail: '4 subjects · ~1 hr/wk each',
    year: 'UK average tutor rates',
  },
]

const DH = {
  monthly: '£300',
  annual: '£3,600',
  detail: 'Live online · Years 4–9',
  note: 'Books & technology via flat annual fees',
}

const MATERIAL_FEE = '£150'
const TECH_FEE = '£100'

const SAVINGS = [
  'No daily commute — save on gas, time, and the school-run stress',
  'No separate tutoring fees — every subject and Arabic are included',
  'No surprise book bills — one flat material fee covers everything',
  'No uniforms, lunches, or before/after-care costs',
]

export default function ValueComparison() {
  const [view, setView] = useState('monthly')
  const isMonthly = view === 'monthly'
  const big = (o) => (isMonthly ? o.monthly : o.annual)
  const unit = isMonthly ? '/mo' : '/yr'
  const sub = (o) => (isMonthly ? `${o.annual}/yr` : `${o.monthly}/mo`)

  return (
    <section id="value" className="relative overflow-hidden bg-clay text-white scroll-mt-24">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#34373F] via-clay to-[#1F2126]" />
      <div aria-hidden className="absolute inset-0 bg-ornament-light opacity-[0.06]" />
      <div aria-hidden className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-teal-light/15 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-amber/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-white text-sm font-semibold uppercase tracking-widest mb-3">The Real Value</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">A full education, for a fraction of the cost</h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-white/70 leading-relaxed">
            Independent Islamic day schools in the UK often run several thousand pounds a year. Even weekly
            tutoring across four subjects adds up fast. Darul Haya UK delivers a complete, faith-centred
            education — live, every day — for a fraction of the cost.
          </p>
        </div>

        {/* Monthly / Annual toggle */}
        <div className="flex justify-center mb-8">
          <div role="group" aria-label="Show prices per month or per year" className="inline-flex rounded-full bg-white/10 ring-1 ring-white/15 p-1">
            {[
              { key: 'monthly', label: 'Monthly' },
              { key: 'annual', label: 'Annual' },
            ].map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setView(opt.key)}
                aria-pressed={view === opt.key}
                className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  view === opt.key ? 'bg-white text-clay shadow' : 'text-white/70 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price comparison grid — 3 competitors + Darul Haya */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {SCHOOLS.map((s) => (
            <div key={s.name} className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 text-center flex flex-col">
              <h3 className="font-bold text-white text-base">{s.name}</h3>
              <div className="mt-3 flex items-end justify-center gap-1">
                <span className="text-3xl font-bold text-white/85">{big(s)}</span>
                <span className="text-sm text-white/60 mb-1">{unit}</span>
              </div>
              <p className="text-xs text-white/60 mt-1">{sub(s)}</p>
              <p className="text-sm text-white/60 mt-4">{s.detail}</p>
              <p className="text-[11px] text-white/70 mt-auto pt-4">{s.year}</p>
            </div>
          ))}

          {/* Darul Haya — cream highlight */}
          <div className="bg-beige text-clay rounded-2xl p-6 text-center flex flex-col ring-2 ring-amber shadow-2xl shadow-black/30">
            <h3 className="font-bold text-teal text-base">Darul Haya</h3>
            <div className="mt-3 flex items-end justify-center gap-1">
              <span className="text-4xl font-bold text-clay">{big(DH)}</span>
              <span className="text-sm text-clay/80 mb-1">{unit}</span>
            </div>
            <p className="text-xs text-clay/80 mt-1">{DH.note}</p>
            <p className="text-sm text-clay/80 mt-4">{DH.detail}</p>
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
