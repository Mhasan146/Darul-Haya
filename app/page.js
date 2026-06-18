import Link from 'next/link'
import PricingCard from '@/components/PricingCard'
import Benefits from '@/components/Benefits'

const PLANS = [
  {
    name: 'Homeschooling Portal',
    price: '67',
    plan: 'homeschool',
    highlight: false,
    description:
      'A complete digital curriculum for families educating their children at home. Access structured lesson plans, worksheets, and video lessons through Moodle.',
    features: [
      'Full Moodle curriculum access',
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
    founding: { price: '249', note: 'Founding rate — first 50 families' },
    description:
      'A complete online school experience with daily live classes, recordings, and a structured faith-based curriculum.',
    features: [
      'Daily live classes via Moodle',
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
          <img
            src="/logo.png"
            alt="Darul Haya — Academy of Learning"
            className="w-60 sm:w-72 h-auto"
          />
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

      {/* Features */}
      <section id="features" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="text-3xl font-bold text-clay text-center mb-10">
          Everything in one place
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: '🎓', title: 'Live Classes', body: 'Daily instruction delivered through Moodle, with recordings available any time.' },
            { icon: '📋', title: 'Structured Curriculum', body: 'Age-appropriate lesson plans rooted in our values.' },
            { icon: '💻', title: 'LMS Access', body: 'Everything in one place — lessons, assignments, materials, and progress tracking through our learning platform.' },

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
