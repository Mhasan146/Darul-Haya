'use client'
import { useState } from 'react'

// "The real value" comparison. Figures are editable constants.
// School tuition is each school's published fee for one child in the Grades
// 2-12 range, paid over 10 monthly installments (annual = monthly × 10).
const SCHOOLS = [
  {
    name: 'ISNA Schools',
    monthly: '~$843',
    annual: '~$8,427',
    detail: 'In-person · Grades 2-12',
    year: '2025-26 published rates',
  },
  {
    name: 'Olive Grove School',
    monthly: '~$955',
    annual: '~$9,550',
    detail: 'In-person · Grades 1-8',
    year: '2026-27 published rates',
  },
]

const DH = {
  monthly: '$225',
  annual: '$2,700',
  detail: 'Live online · Grades 2-12',
  note: 'Books & technology via flat annual fees',
}

const MATERIAL_FEE = '$150'
const TECH_FEE = '$100'

const SAVINGS = [
  'No daily commute, so you save on gas, time, and the school run',
  'No separate tutoring fees. Every subject and Arabic are included',
  'No surprise book bills. One flat material fee covers everything',
  'No uniforms, lunches, or before/after-care costs',
]

export default function ValueComparison() {
  const [view, setView] = useState('monthly')
  const isMonthly = view === 'monthly'
  const big = (o) => (isMonthly ? o.monthly : o.annual)
  const unit = isMonthly ? '/mo' : '/yr'
  const sub = (o) => (isMonthly ? `${o.annual}/yr` : `${o.monthly}/mo`)

  return (
    <section id="value" className="relative overflow-hidden bg-beige-dark/40 scroll-mt-24 border-y border-clay/10">
      <div aria-hidden className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-teal-light/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-amber/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">The Real Value</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">A full education, for a fraction of the cost</h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-clay/80 leading-relaxed">
            Comparable Islamic day schools run roughly $8,400-$9,550 a year. Darul Haya delivers a complete,
            faith-centered education, live every day, for less than half the cost.
          </p>
        </div>

        {/* Monthly / Annual toggle */}
        <div className="flex justify-center mb-8">
          <div role="group" aria-label="Show prices per month or per year" className="inline-flex rounded-full bg-white ring-1 ring-clay/10 p-1 shadow-sm">
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
                  view === opt.key ? 'bg-teal text-white shadow' : 'text-clay/80 hover:text-clay'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price comparison grid, comparable schools + Darul Haya */}
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 justify-center gap-5 sm:grid-cols-3">
          {SCHOOLS.map((s) => (
            <div key={s.name} className="bg-white ring-1 ring-clay/10 rounded-2xl p-6 text-center flex flex-col">
              <h3 className="font-bold text-clay text-base">{s.name}</h3>
              <div className="mt-3 flex items-end justify-center gap-1">
                <span className="text-3xl font-bold text-clay/80">{big(s)}</span>
                <span className="text-sm text-clay/80 mb-1">{unit}</span>
              </div>
              <p className="text-xs text-clay/80 mt-1">{sub(s)}</p>
              <p className="text-sm text-clay/80 mt-4">{s.detail}</p>
              <p className="text-[11px] text-clay/80 mt-auto pt-4">{s.year}</p>
            </div>
          ))}

          {/* Darul Haya, green highlight */}
          <div className="bg-teal-dark text-white rounded-2xl p-6 text-center flex flex-col ring-2 ring-amber shadow-xl shadow-teal/25">
            <h3 className="font-bold text-white text-base">Darul Haya</h3>
            <div className="mt-3 flex items-end justify-center gap-1">
              <span className="text-4xl font-bold text-white">{big(DH)}</span>
              <span className="text-sm text-white/80 mb-1">{unit}</span>
            </div>
            <p className="text-xs text-white/80 mt-1">{DH.note}</p>
            <p className="text-sm text-white/85 mt-4">{DH.detail}</p>
            <p className="text-[11px] text-white font-semibold mt-auto pt-4">★ Best value</p>
          </div>
        </div>

        <p className="text-center text-xs text-clay/80 mt-4 max-w-2xl mx-auto">
          School figures are each institution&rsquo;s published tuition for one child, paid over 10 monthly
          installments. Darul Haya tuition is {DH.monthly}/month for Grades 2-8 and $250/month for
          Grades 9-12 (the figure above is the Grades 2-8 rate), plus a flat {MATERIAL_FEE} material
          fee and {TECH_FEE} technology fee at the start of each year, with no per-book charges.
        </p>

        {/* Savings list */}
        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-center text-clay font-semibold mb-5">And the everyday savings add up:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {SAVINGS.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-white ring-1 ring-clay/10 rounded-xl p-4">
                <span className="text-teal-dark mt-0.5 shrink-0 font-bold" aria-hidden="true">✓</span>
                <span className="text-sm text-clay/80 leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
