import Link from 'next/link'

export default function PricingCard({ name, price, description, features, highlight, founding }) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col gap-6 border-2 transition-all ${
        highlight
          ? 'bg-clay text-white border-clay shadow-xl shadow-clay/20'
          : 'bg-white border-beige-dark shadow-md'
      }`}
    >
      <div>
        {founding && (
          <span className="inline-block mb-2 text-[11px] font-bold uppercase tracking-wider bg-amber text-clay px-2.5 py-1 rounded-full">
            ★ Founding Member · First 50 families
          </span>
        )}
        <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${highlight ? 'text-amber' : 'text-teal'}`}>
          {name}
        </p>
        {founding ? (
          <>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">${founding.price}</span>
              <span className={`text-xl font-semibold line-through ${highlight ? 'text-white/40' : 'text-clay/30'}`}>
                ${price}
              </span>
              <span className={`text-sm mb-1 ${highlight ? 'text-white/60' : 'text-clay/50'}`}>/month</span>
            </div>
            <p className={`mt-1 text-xs font-semibold ${highlight ? 'text-amber' : 'text-teal'}`}>{founding.note}</p>
            {founding.total != null && (
              <div className="mt-3">
                <div className={`h-1.5 w-full rounded-full overflow-hidden ${highlight ? 'bg-white/15' : 'bg-clay/10'}`}>
                  <div
                    className="h-full rounded-full bg-amber transition-all"
                    style={{ width: `${Math.min(100, Math.round((founding.claimed / founding.total) * 100))}%` }}
                  />
                </div>
                <p className={`mt-1.5 text-[11px] ${highlight ? 'text-white/60' : 'text-clay/50'}`}>
                  {founding.claimed} of {founding.total} spots claimed
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold">${price}</span>
            <span className={`text-sm mb-1 ${highlight ? 'text-white/60' : 'text-clay/50'}`}>/month</span>
          </div>
        )}
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
        href="/register"
        className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-colors ${
          highlight ? 'bg-amber text-clay hover:bg-amber/90' : 'bg-teal text-white hover:bg-teal-dark'
        }`}
      >
        Apply Now
      </Link>
    </div>
  )
}
