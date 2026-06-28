import Link from 'next/link'

// Reusable, on-brand page scaffold with clearly-marked placeholder content.
// Pass real headings/structure; the body copy is meant to be replaced later.
export default function PagePlaceholder({ eyebrow, title, intro, sections = [], cta, children }) {
  const btn =
    'inline-block bg-teal text-white px-7 py-3 rounded-full font-semibold hover:bg-teal-dark transition-colors'

  return (
    <div className="min-h-screen bg-beige">
      {/* Premium page header */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-beige-dark/60 via-beige to-beige" />
        <div aria-hidden className="absolute inset-0 bg-ornament opacity-[0.04]" />
        <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
          {eyebrow && (
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-clay leading-tight">{title}</h1>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          {intro && (
            <p className="mt-5 text-lg text-clay/60 max-w-2xl mx-auto leading-relaxed">{intro}</p>
          )}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        {sections.map((s, i) => (
          <div
            key={i}
            id={s.id}
            className={`bg-white rounded-2xl p-7 border border-beige-dark shadow-sm ${s.id ? 'scroll-mt-24' : ''}`}
          >
            <h2 className="text-2xl font-bold text-clay mb-3">{s.heading}</h2>
            <p className="text-clay/60 leading-relaxed whitespace-pre-line">{s.body}</p>
          </div>
        ))}

        {children}

        {cta && (
          <div className="text-center pt-2">
            {cta.href.startsWith('/') ? (
              <Link href={cta.href} className={btn}>{cta.label}</Link>
            ) : (
              <a href={cta.href} className={btn}>{cta.label}</a>
            )}
          </div>
        )}
      </section>
    </div>
  )
}
