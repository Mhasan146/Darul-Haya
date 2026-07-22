'use client'
import { useState } from 'react'
import Link from 'next/link'

// Real pricing: flat $300/month per child, 15% sibling discount on each
// additional child. Same price for every grade (2–9).
const BASE = 300
const SIBLING_RATE = 0.15
const additionalChildPrice = Math.round(BASE * (1 - SIBLING_RATE)) // $255

function monthlyTotal(children) {
  if (children <= 0) return 0
  return BASE + (children - 1) * additionalChildPrice
}

export default function TuitionCalculator() {
  const [children, setChildren] = useState(1)
  const total = monthlyTotal(children)
  const saved = children > 1 ? children * BASE - total : 0

  return (
    <div className="max-w-md mx-auto mt-8 rounded-3xl bg-white border border-beige-dark shadow-md p-7 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal mb-1">Estimate your tuition</p>
      <p className="text-clay/70 text-sm mb-5">Same price for every grade (2–9). Add siblings to see the discount applied live.</p>

      <label className="block text-sm font-medium text-clay/80 mb-2">How many children?</label>
      <div className="flex gap-2" role="group" aria-label="Number of children">
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setChildren(n)}
            aria-pressed={children === n}
            className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.97] ${
              children === n
                ? 'bg-clay text-white shadow-md'
                : 'bg-beige text-clay hover:bg-beige-dark'
            }`}
          >
            {n}
            {n === 4 && '+'}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-beige-dark/50 p-5 text-center" aria-live="polite">
        <div className="flex items-end justify-center gap-1.5">
          <span className="font-display text-5xl font-bold text-clay">${total.toLocaleString()}</span>
          <span className="text-clay/70 mb-1.5">/month</span>
        </div>
        {saved > 0 ? (
          <p className="text-sm font-semibold text-teal mt-1">You save ${saved}/month with the sibling discount</p>
        ) : (
          <p className="text-sm text-clay/60 mt-1">One child · Grades 2–9</p>
        )}
      </div>

      {children > 1 && (
        <ul className="mt-4 text-xs text-clay/70 space-y-1">
          <li className="flex justify-between"><span>First child</span><span>${BASE}/mo</span></li>
          <li className="flex justify-between">
            <span>{children - 1} sibling{children - 1 > 1 ? 's' : ''} (15% off each)</span>
            <span>${additionalChildPrice}/mo each</span>
          </li>
        </ul>
      )}

      <p className="text-[11px] text-clay/50 mt-4 leading-relaxed text-center">
        Estimate only. Plus a one-time $150 material fee &amp; $100 technology fee per child each year.
      </p>

      <Link
        href="/register"
        className="mt-5 block w-full bg-amber text-clay py-3 rounded-xl font-semibold text-sm text-center hover:bg-amber-dark active:scale-[0.98] transition-all duration-200"
      >
        Apply Now
      </Link>
    </div>
  )
}
