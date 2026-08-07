// Answers the biggest silent objection: "Will a smaller, faith-centered,
// online school leave my child behind?" Reframes it from "same chances" to
// "a better chance", deen and future together.
const POINTS = [
  {
    title: 'Every Post-Secondary Door Open',
    body: 'Our curriculum strictly adheres to official Ontario requirements. Your child stays 100 percent on track for top university programs in STEM, business, or the arts.',
  },
  {
    title: 'Personalized Attention That Closes Gaps',
    body: 'In crowded 30-student classrooms, learning gaps go unnoticed until report cards arrive. In our small live groups, teachers catch and resolve confusion instantly.',
  },
  {
    title: 'Unshakable Personal Character',
    body: 'Technical skills get interviews, but character builds lifetime success. Our students graduate disciplined, articulate, and confident in who they are.',
  },
  {
    title: 'Faith and Academic Excellence Together',
    body: "You never have to choose between your child's Islamic identity and top-tier academics. At Darul Haya, they master both.",
  },
]

export default function EveryOpportunity() {
  return (
    <section id="opportunity" className="bg-beige-dark border-y border-clay/5 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">Future Preparedness</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">Will your child still get into top universities?</h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-clay/80 leading-relaxed">
            The biggest fear parents face: &ldquo;Am I sacrificing my child&rsquo;s career prospects by
            choosing a values-focused school?&rdquo; Here is why Darul Haya graduates hold a distinct
            competitive edge.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {POINTS.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-7 shadow-md ring-1 ring-clay/5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-teal/10 text-teal-dark flex items-center justify-center" aria-hidden="true">
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

        {/* Track record, proof band */}
        <div className="mt-6 rounded-2xl bg-white text-clay p-7 sm:p-8 text-center border border-teal/20 shadow-sm">
          <p className="text-teal-dark text-xs font-semibold uppercase tracking-widest mb-2">Proven Educational Leadership</p>
          <p className="text-lg sm:text-xl font-semibold leading-snug text-balance max-w-3xl mx-auto">
            Designed and led by veteran Ontario educators with over 15 years of classroom
            experience. We bring real-world academic rigor directly to your living room.
          </p>
        </div>

        <p className="mt-10 text-center font-display text-2xl sm:text-3xl font-semibold text-clay text-balance max-w-3xl mx-auto leading-snug">
          Stop choosing between your child’s faith and their future. Give them the platform to excel at both.
        </p>
      </div>
    </section>
  )
}
