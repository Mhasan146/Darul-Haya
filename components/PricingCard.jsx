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
        {highlight && (
          <span className="inline-block mb-2 text-[10px] font-bold uppercase tracking-widest text-white bg-white/20 px-2 py-0.5 rounded-full">
            Most Popular
          </span>
        )}
        <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${highlight ? 'text-white' : 'text-teal'}`}>
          {name}
        </p>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold">${price}</span>
          <span className={`text-sm mb-1 ${highlight ? 'text-white/80' : 'text-clay/80'}`}>/month</span>
        </div>
        <p className={`mt-2 text-sm leading-relaxed ${highlight ? 'text-white/80' : 'text-clay/80'}`}>
          {description}
        </p>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className={`mt-0.5 ${highlight ? 'text-amber' : 'text-teal'}`} aria-hidden="true">✓</span>
            <span className={highlight ? 'text-white/80' : 'text-clay/80'}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/register?plan=${plan}`}
        className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-colors ${
          highlight
            ? 'bg-white text-clay hover:bg-beige'
            : 'border-2 border-clay text-clay hover:bg-clay hover:text-white'
        }`}
      >
        Apply Now
      </Link>
    </div>
  )
}
