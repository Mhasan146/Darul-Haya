// Answers the biggest silent objection: "Will a smaller, faith-centered,
// online school leave my child behind?" Reframes it from "same chances" to
// "a better chance" — deen and future together.
const POINTS = [
  {
    title: 'Every door stays open',
    body: 'Our curriculum is fully Ontario-aligned, so your child stays exactly on grade level and can move to any school — or any path — whenever you choose. No university asks how a child did in Grade 5; it asks who they became.',
  },
  {
    title: 'Known by name',
    body: 'In a small class, nothing is missed and nothing is faked. Gaps close the day they appear — the kind of attention a crowded classroom can’t give at any price.',
  },
  {
    title: 'Character is the advantage',
    body: 'In a generation of distracted, anxious children, one who is focused, grounded, and sure of who they are isn’t behind — they’re ahead. That’s the edge that lasts in university, in work, and in life.',
  },
  {
    title: 'Faith and future, together',
    body: 'You’re not choosing between your child’s deen and their success. Darul Haya is built so they keep both — a real education and a strong sense of who they are.',
  },
]

export default function EveryOpportunity() {
  return (
    <section id="opportunity" className="bg-beige-dark border-y border-clay/5 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Your child’s future</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">Will they still have every opportunity?</h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-clay/80 leading-relaxed">
            It’s the honest worry behind every school decision: does a smaller, faith-centered
            school mean your child gives something up? No — here’s why they gain an edge, not a
            handicap.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {POINTS.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-7 shadow-md ring-1 ring-clay/5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-teal/10 text-teal flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-bold text-clay leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-clay/80 leading-relaxed">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-display text-2xl sm:text-3xl font-semibold text-clay text-balance max-w-3xl mx-auto leading-snug">
          You’re not choosing between your child’s faith and their future — this is how they keep both.
        </p>
      </div>
    </section>
  )
}
