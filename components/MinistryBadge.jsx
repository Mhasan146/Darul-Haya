import Image from 'next/image'
import { MINISTRY } from '@/lib/siteConfig'

// Ministry registration band. Everything stated here comes straight off the
// OnSIS approval: the school number, the board it sits under, and the open
// date. Nothing is phrased as the Ministry endorsing or recommending the
// school, which it does not do for any private school.
export default function MinistryBadge() {
  return (
    <section
      aria-labelledby="ministry-heading"
      className="bg-beige-dark/50 border-y border-clay/10"
    >
      <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-amber to-transparent" />
      <div className="max-w-5xl mx-auto px-6 py-10 sm:py-12">
        <div className="bg-white rounded-2xl border border-beige-dark shadow-sm p-7 sm:p-9">
          <div className="sm:flex sm:items-center sm:gap-9">
            {/* Ontario mark */}
            <div className="shrink-0 flex sm:block justify-center">
              <Image
                src="/ontario-edu.png"
                alt="Ontario Ministry of Education"
                width={202}
                height={134}
                priority
                className="h-16 sm:h-20 w-auto mix-blend-multiply"
              />
            </div>

            <div className="mt-6 sm:mt-0 sm:border-l sm:border-beige-dark sm:pl-9 text-center sm:text-left">
              <p className="text-teal-dark text-[11px] font-semibold uppercase tracking-widest">
                Ontario Ministry of Education
              </p>
              <h2 id="ministry-heading" className="mt-2 font-display text-2xl sm:text-3xl font-bold text-clay leading-tight">
                Inspected to grant OSSD credits
              </h2>
              <p className="mt-3 text-sm sm:text-base text-clay/80 leading-relaxed">
                Darul Haya operates as a brand of <strong className="font-semibold text-clay">{MINISTRY.registeredName}</strong>,
                an inspected private school on the provincial register with its own Ministry school
                number. Inspected status is what lets us grant credits toward the Ontario Secondary
                School Diploma, so the work your child does in Grades 9 to 12 counts toward the
                diploma itself.
              </p>

              <dl className="stagger mt-7 grid gap-4 grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
                <div className="rounded-xl bg-beige px-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-clay/80">
                    Registered as
                  </dt>
                  <dd className="mt-1 font-display text-base font-bold text-clay leading-snug">
                    {MINISTRY.registeredName}
                  </dd>
                </div>
                <div className="rounded-xl bg-beige px-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-clay/80">
                    School number (BSID)
                  </dt>
                  <dd className="mt-1 font-display text-xl font-bold text-clay tabular-nums">
                    {MINISTRY.bsid}
                  </dd>
                </div>
                <div className="rounded-xl bg-beige px-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-clay/80">
                    Board
                  </dt>
                  <dd className="mt-1 font-display text-xl font-bold text-clay">
                    {MINISTRY.boardNumber}
                  </dd>
                  <dd className="text-[11px] text-clay/80 leading-snug">{MINISTRY.boardName}</dd>
                </div>
                <div className="rounded-xl bg-beige px-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-clay/80">
                    Opened
                  </dt>
                  <dd className="mt-1 font-display text-xl font-bold text-clay">
                    {MINISTRY.openDateLabel}
                  </dd>
                </div>
              </dl>

              <p className="mt-5 text-xs text-clay/80 leading-relaxed">
                Quote the school number when you ask the Ministry about us. The diploma also
                requires the provincial literacy test and 40 hours of community involvement, which
                every Ontario student completes. Registration and inspection are not an
                endorsement, and the Ministry does not recommend private schools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
