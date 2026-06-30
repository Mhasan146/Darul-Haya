import Link from 'next/link'

export default function PricingCard({ name, price, plan, description, features, highlight }) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col gap-6 border-2 transition-all ${
        highlight
          ? 'bg-clay text-white border-clay shadow-xl shadow-clay/20'
          : 'bg-white border-beige-dark shadow-md'
      }`}
    >
      <div>
        <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${highlight ? 'text-amber' : 'text-teal'}`}>
          {name}
        </p>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold">${price}</span>
          <span className={`text-sm mb-1 ${highlight ? 'text-white/60' : 'text-clay/70'}`}>/month</span>
        </div>
        <p className={`mt-2 text-sm leading-relaxed ${highlight ? 'text-white/70' : 'text-clay/60'}`}>
          {description}
        </p>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className={`mt-0.5 ${highlight ? 'text-amber' : 'text-teal'}`}>✓</span>
            <span className={highlight ? 'text-white/80' : 'text-clay/70'}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/register?plan=${plan}`}
        className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-colors ${
          highlight ? 'bg-amber text-clay hover:bg-amber/90' : 'border-2 border-amber text-amber hover:bg-amber hover:text-clay'
        }`}
      >
        Apply Now
      </Link>
    </div>
  )
}
