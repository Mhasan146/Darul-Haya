import Link from 'next/link'

// Reusable on-brand page scaffold for content pages (about, FAQ, curriculum,
// programmes, privacy). Laid out editorially: a generous header, then each
// section on a hairline with its number and heading set beside the body,
// rather than a stack of identical white cards. Section ids are kept so deep
// links such as /curriculum#character still land.
export default function PagePlaceholder({ eyebrow, title, intro, sections = [], cta, children }) {
  const Cta = cta && (cta.href.startsWith('/') ? Link : 'a')

  return (
    <div className="min-h-screen bg-beige">
      <section className="relative border-b border-clay/10">
        <div className="relative max-w-5xl mx-auto px-6 pt-20 sm:pt-28 pb-16 sm:pb-20">
          {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
          <h1 className="text-[2.6rem] sm:text-6xl font-bold text-clay leading-[1.05] max-w-[20ch]">{title}</h1>
          {intro && (
            <p className="mt-8 text-lg sm:text-xl text-clay/80 max-w-[58ch] leading-[1.65]">{intro}</p>
          )}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
        <div className="stagger">
          {sections.map((s, i) => (
            <article
              key={i}
              id={s.id}
              className={`grid lg:grid-cols-12 gap-x-10 gap-y-4 border-t border-clay/15 py-10 sm:py-12 first:border-t-0 first:pt-0 ${s.id ? 'scroll-mt-28' : ''}`}
            >
              <div className="lg:col-span-5 flex gap-5">
                <span aria-hidden="true" className="font-display text-sm font-bold text-amber-dark tabular-nums pt-1.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-[1.55rem] sm:text-[1.8rem] font-bold text-clay leading-[1.18]">{s.heading}</h2>
              </div>
              <p className="lg:col-span-7 text-clay/80 text-[1.02rem] leading-[1.8] whitespace-pre-line max-w-prose">
                {s.body}
              </p>
            </article>
          ))}
        </div>

        {children && <div className="mt-12">{children}</div>}

        {cta && (
          <div className="border-t border-clay/15 pt-14 mt-2 flex">
            <Cta href={cta.href} className="btn btn-primary">
              {cta.label}
              <span aria-hidden="true" className="btn-arrow">&rarr;</span>
            </Cta>
          </div>
        )}
      </section>
    </div>
  )
}
