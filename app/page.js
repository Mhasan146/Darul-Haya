import Link from 'next/link'
import PricingCard from '@/components/PricingCard'
import Benefits from '@/components/Benefits'
import SafetyTools from '@/components/SafetyTools'

// ── FOUNDING SPOTS ───────────────────────────────────────────────
// Update this number as families enroll at the founding rate (out of 50).
// e.g. once 12 families have joined, change to 12.
const FOUNDING_CLAIMED = 0
const FOUNDING_TOTAL = 50
// ─────────────────────────────────────────────────────────────────

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
    founding: { price: '249', note: 'Founding rate — first 50 families', claimed: FOUNDING_CLAIMED, total: FOUNDING_TOTAL },
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

const STATS = [
  { value: '3 – 5', label: 'Elementary' },
  { value: '6 – 8', label: 'Middle School' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-beige">

      {/* Hero */}
      <section id="about" className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center scroll-mt-24">
        <h1 className="flex justify-center">
          <div className="flex flex-col items-center">
            <img
              src="/logo.png"
              alt="Darul Haya — Academy of Learning"
              className="w-60 sm:w-72 h-auto"
              style={{ clipPath: 'inset(0 0 20% 0)' }}
            />
            <p className="text-[10px] font-semibold tracking-[0.25em] text-clay/60 -mt-12 uppercase">
              Knowledge · Character
            </p>
          </div>
        </h1>
        <p className="mt-5 text-lg text-clay/60 max-w-2xl mx-auto leading-relaxed">
          A structured, values-driven education for boys and girls in Grades 3–8 — live,
          teacher-led instruction and a complete curriculum, all in one safe online classroom.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/register"
            className="bg-teal text-white px-7 py-3 rounded-full font-semibold hover:bg-teal-dark transition-colors"
          >
            Apply Now
          </Link>
          <a href="#pricing" className="text-clay font-medium hover:text-teal transition-colors">
            View Plans →
          </a>
        </div>
      </section>

      {/* Grade stats banner */}
      <section id="grades" className="bg-clay/5 border-y border-clay/10 py-8 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 gap-6 text-center max-w-sm mx-auto">
          {STATS.map((s) => (
            <div key={s.value}>
              <p className="text-2xl font-bold text-teal">{s.value}</p>
              <p className="text-sm text-clay/50 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 border-b border-clay/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-clay/40 mb-6">Curriculum aligned with</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <img src="/ontario-edu.png" alt="Ontario Ministry of Education" className="h-14 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/canada.png" alt="Government of Canada" className="h-10 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="text-3xl font-bold text-clay text-center mb-10">
          Everything in one place
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: '🎓', title: 'Live Classes', body: 'Daily instruction delivered through our learning platform, with recordings available any time.' },
            { icon: '📋', title: 'Structured Curriculum', body: 'Age-appropriate lesson plans rooted in our values.' },
            { icon: '💻', title: 'LMS Access', body: 'Everything in one place — lessons, assignments, materials, and progress tracking through our learning platform.' },
            { icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="1" width="14" height="18" rx="2" fill="#E6F4F1" stroke="#0D9488" strokeWidth="1.5"/>
                  <line x1="5" y1="6" x2="13" y2="6" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                  <line x1="5" y1="9" x2="13" y2="9" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                  <line x1="5" y1="12" x2="13" y2="12" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                  <line x1="5" y1="15" x2="9" y2="15" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                  <g transform="translate(18,17) rotate(225)">
                    <rect x="-1.5" y="-7" width="3" height="8" rx="0.5" fill="#C99A33"/>
                    <polygon points="-1.5,1 1.5,1 0,4" fill="#134E4A"/>
                    <rect x="-1.5" y="-9" width="3" height="2" rx="0.5" fill="#999"/>
                  </g>
                </svg>
              ), title: 'Pencil to Paper', body: 'Physical books and materials shipped directly to every enrolled student.' },
            { icon: (
                <svg viewBox="0 0 32 32" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                  <text x="16" y="25" textAnchor="middle" fontSize="26" fill="#0D9488" fontFamily="serif">ج</text>
                </svg>
              ), title: 'Arabic Language', body: 'Dedicated Arabic language classes woven into the weekly schedule for all grade levels.' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-beige-dark shadow-sm">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-clay mb-1">{f.title}</h3>
              <p className="text-clay/50 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of Online Schooling */}
      <Benefits />

      {/* Safety tools */}
      <SafetyTools />

      {/* Pricing */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-20 scroll-mt-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-clay">Choose Your Program</h2>
          <p className="text-clay/50 mt-2">Pick a program, apply in minutes, and we will help you get enrolled.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {PLANS.map((p) => (
            <PricingCard key={p.plan} {...p} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-clay/10 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-clay/40">
          <p>© {new Date().getFullYear()} Darul Haya. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}
