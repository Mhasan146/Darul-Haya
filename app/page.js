import Link from 'next/link'
import PricingCard from '@/components/PricingCard'
import Benefits from '@/components/Benefits'
import SafetyTools from '@/components/SafetyTools'
import ValueComparison from '@/components/ValueComparison'
import { WHATSAPP_URL } from '@/lib/siteConfig'

const PLANS = [
  {
    name: 'Homeschooling Portal',
    price: '150',
    plan: 'homeschool',
    highlight: false,
    description:
      'A complete digital curriculum for families educating their children at home. Access structured lesson plans, worksheets, and video lessons through our learning platform.',
    features: [
      'Full curriculum access',
      'Downloadable worksheets and materials',
      'Weekly lesson roadmaps',
      'Elementary and Middle School',
      'Email support',
    ],
  },
  {
    name: 'Full-Live Schooling',
    price: '300',
    plan: 'full_live',
    highlight: true,
    description:
      'A complete online school experience with daily live classes, recordings, and a structured faith-based curriculum.',
    features: [
      'Daily live classes',
      'Full recording library',
      'Complete curriculum',
      'Elementary and Middle School tracks',
      'Priority support',
    ],
  },
]

const FACTS = [
  { value: 'Grades 3–8', label: 'Elementary & Middle School' },
  { value: 'Live, daily', label: 'Real teachers, set timetable' },
  { value: 'Small classes', label: 'Known by name, fully supervised' },
  { value: 'Ontario-aligned', label: 'On track with standards' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-beige">

      {/* Hero */}
      <section id="about" className="relative overflow-hidden scroll-mt-24 bg-clay">
        {/* Layered premium backdrop */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#10544e] via-clay to-[#0b3a36]" />
        <div aria-hidden className="absolute inset-0 bg-ornament-light opacity-[0.07]" />
        <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-teal-light/20 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-amber/10 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-20 text-center">
          <span className="inline-flex items-center gap-2 mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber bg-amber/15 ring-1 ring-amber/30 px-4 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" /> Now enrolling · Grades 3–8
          </span>

          {/* Framed cream crest */}
          <div className="mx-auto w-fit flex flex-col items-center bg-beige rounded-3xl px-8 pt-6 pb-5 shadow-2xl shadow-black/30">
            <div className="overflow-hidden aspect-[5/4] w-44 sm:w-52">
              <img
                src="/logo.png"
                alt="Darul Haya — Academy of Learning"
                className="w-full h-auto"
              />
            </div>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-clay/60 mt-1 uppercase">
              Knowledge · Character
            </p>
          </div>

          <h1 className="mt-9 text-4xl sm:text-5xl font-bold text-white leading-[1.1] max-w-3xl mx-auto">
            A smaller, safer school — taught live, every day.
          </h1>

          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Live, teacher-led classes for boys and girls in Grades 3–8 — small, closely
            supervised, Ontario-aligned, with physical books shipped to your door.
          </p>

          <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/register"
              className="bg-amber text-clay px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-black/20 hover:bg-amber-dark transition-all"
            >
              Apply Now
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium px-6 py-3.5 rounded-full border border-white/25 hover:bg-white/10 transition-colors"
            >
              Chat with us →
            </a>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section id="grades" className="bg-beige border-b border-clay/10 py-8 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 text-center md:divide-x divide-clay/10">
          {FACTS.map((f) => (
            <div key={f.value} className="md:px-4">
              <p className="text-lg font-bold text-clay">{f.value}</p>
              <p className="text-xs text-clay/70 mt-1.5 leading-snug">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-beige py-12 border-b border-clay/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-clay/60 mb-6">Curriculum aligned with</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <img src="/ontario-edu.png" alt="Ontario Ministry of Education" className="h-14 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/canada.png" alt="Government of Canada" className="h-10 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative overflow-hidden scroll-mt-24">
        <div aria-hidden className="absolute inset-0 bg-ornament opacity-[0.03]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">What's Included</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">Everything in one place</h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {[
            {
              title: 'Live Classes',
              body: 'Daily instruction delivered live, with recordings available any time.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />,
            },
            {
              title: 'Structured Curriculum',
              body: 'Age-appropriate lesson plans rooted in our values.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />,
            },
            {
              title: 'LMS Access',
              body: 'Lessons, assignments, materials, and progress tracking in one platform.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />,
            },
            {
              title: 'Pencil to Paper',
              body: 'Physical books and materials shipped directly to every enrolled student.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />,
            },
            {
              title: 'Arabic Language',
              body: 'Dedicated Arabic classes woven into the weekly schedule for all grades.',
              arabic: true,
            },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-beige-dark shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center flex flex-col items-center">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal to-teal-light text-white flex items-center justify-center mb-4 shadow-lg shadow-teal/30">
                {f.arabic ? (
                  <span className="font-display text-2xl leading-none">ج</span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                    {f.icon}
                  </svg>
                )}
              </div>
              <h3 className="font-bold text-clay mb-1 text-sm">{f.title}</h3>
              <p className="text-clay/70 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Benefits of Online Schooling */}
      <Benefits />

      {/* Safety tools */}
      <SafetyTools />

      {/* Value vs tutoring */}
      <ValueComparison />

      {/* Pricing */}
      <section id="pricing" className="relative overflow-hidden scroll-mt-4 bg-gradient-to-b from-beige to-beige-dark/50">
        <div aria-hidden className="absolute inset-0 bg-ornament opacity-[0.03]" />
        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Tuition</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-clay">Choose Your Program</h2>
            <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
            <p className="text-clay/70 mt-5">Pick a program, apply in minutes, and we will help you get enrolled.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {PLANS.map((p) => (
              <PricingCard key={p.plan} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-clay text-white">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#10544e] via-clay to-[#0b3a36]" />
        <div aria-hidden className="absolute inset-0 bg-ornament-light opacity-[0.06]" />
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-[36rem] rounded-full bg-teal-light/10 blur-3xl" />
        <div className="relative max-w-2xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Ready to give your child a better school day?
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-white/70 leading-relaxed">
            Apply in minutes and we'll personally help you get enrolled — or reach out on WhatsApp with any questions.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/register"
              className="bg-amber text-clay px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-black/20 hover:bg-amber-dark transition-all"
            >
              Apply Now
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium px-6 py-3.5 rounded-full border border-white/25 hover:bg-white/10 transition-colors"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b3a36] text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid gap-10 sm:grid-cols-3">
            {/* Brand */}
            <div>
              <p className="font-display text-2xl font-bold tracking-wide">Darul Haya</p>
              <p className="text-xs uppercase tracking-[0.25em] text-amber mt-1">Knowledge · Character</p>
              <p className="text-white/60 text-sm mt-4 leading-relaxed max-w-xs">
                A structured, values-driven online school for boys and girls in Grades 3–8.
              </p>
            </div>

            {/* Explore */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">Explore</p>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/about" className="text-white/80 hover:text-amber transition-colors">About</Link></li>
                <li><Link href="/programs/full-live" className="text-white/80 hover:text-amber transition-colors">Full-Live Schooling</Link></li>
                <li><Link href="/programs/homeschool" className="text-white/80 hover:text-amber transition-colors">Homeschooling Portal</Link></li>
                <li><Link href="/curriculum" className="text-white/80 hover:text-amber transition-colors">Curriculum</Link></li>
                <li><Link href="/faq" className="text-white/80 hover:text-amber transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">Get in Touch</p>
              <ul className="space-y-2.5 text-sm">
                <li><a href="mailto:info@darulhaya.com" className="text-white/80 hover:text-amber transition-colors">info@darulhaya.com</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-amber transition-colors">Chat on WhatsApp</a></li>
                <li><Link href="/contact" className="text-white/80 hover:text-amber transition-colors">Contact Us</Link></li>
                <li><Link href="/register" className="text-amber font-semibold hover:text-amber-dark transition-colors">Apply Now →</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/60">
            © {new Date().getFullYear()} Darul Haya. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}
