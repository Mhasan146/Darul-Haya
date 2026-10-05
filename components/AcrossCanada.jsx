import Image from 'next/image'
import { WHATSAPP_URL } from '@/lib/siteConfig'

const POINTS = [
  {
    title: 'The Ontario curriculum',
    body:
      'Your child works through the curriculum expectations the Province of Ontario publishes for their grade, so the material lines up with what schools teach across the country.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    ),
  },
  {
    title: 'No catchment, no waiting list',
    body:
      'Every class is live and online, so getting a seat does not depend on which street you live on or how long the list is at the school down the road.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5-2.5 3.75-5.5 3.75-9S14.5 5.5 12 3m0 18c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3M3.6 9h16.8M3.6 15h16.8" />
    ),
  },
  {
    title: 'Books to your door',
    body:
      'Physical textbooks and workbooks are shipped to your home. What that costs depends on how far they travel, which is why we confirm material fees with you once we know your address and your child’s grade.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-8.25 4.5-8.25-4.5m16.5 0v9l-8.25 4.5-8.25-4.5v-9m16.5 0L12 3 3.75 7.5" />
    ),
  },
]

export default function AcrossCanada() {
  return (
    <section
      id="canada"
      aria-labelledby="canada-heading"
      className="bg-beige border-b border-clay/10 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">
            A Canadian school
          </p>
          <h2 id="canada-heading" className="text-3xl sm:text-4xl font-bold text-clay">
            Ontario curriculum, taught live from your own home
          </h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-clay/80 leading-relaxed">
            We are a Canadian school based in Ontario, teaching the Ontario curriculum on a real
            timetable. Classes run on Eastern Time and the school day begins at 8:00 a.m., so your
            child starts the morning at their own table instead of in traffic.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl border border-beige-dark p-6">
              <span
                aria-hidden="true"
                className="grid h-11 w-11 place-items-center rounded-xl bg-beige-dark text-teal-dark"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                  {p.icon}
                </svg>
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-clay">{p.title}</h3>
              <p className="mt-2 text-sm text-clay/80 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Caption states curriculum alignment only. These are official
            government identifiers, so nothing here should read as a claim of
            accreditation, endorsement or affiliation. */}
        <div className="mt-12 pt-10 border-t border-clay/10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-clay/80 mb-6">
            Teaching the curriculum of
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <Image
              src="/ontario-edu.png"
              alt="Ontario Ministry of Education"
              width={200}
              height={56}
              // Both files are opaque PNGs; multiply drops the white box into
              // the beige section instead of leaving a card floating on it.
              className="h-14 w-auto mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/canada.png"
              alt="Government of Canada"
              width={200}
              height={40}
              className="h-10 w-auto mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-teal text-white px-5 py-2.5 text-sm font-semibold hover:bg-teal-dark transition-colors"
          >
            Ask how the school day would work for us
            <span className="sr-only"> (opens WhatsApp in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
