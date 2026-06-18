import Link from 'next/link'

// Reusable, on-brand page scaffold with clearly-marked placeholder content.
// Pass real headings/structure; the body copy is meant to be replaced later.
export default function PagePlaceholder({ eyebrow, title, intro, sections = [], cta, children }) {
  const btn =
    'inline-block bg-teal text-white px-7 py-3 rounded-full font-semibold hover:bg-teal-dark transition-colors'

  return (
    <div className="min-h-screen bg-beige">
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
        {eyebrow && (
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold text-clay leading-tight">{title}</h1>
        {intro && (
          <p className="mt-4 text-lg text-clay/60 max-w-2xl mx-auto leading-relaxed">{intro}</p>
        )}
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16 space-y-10">
        {sections.map((s, i) => (
          <div key={i} id={s.id} className={s.id ? 'scroll-mt-24' : undefined}>
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
