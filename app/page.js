import Link from 'next/link'
import Image from 'next/image'
import PricingCard from '@/components/PricingCard'
import Benefits from '@/components/Benefits'
import SafetyTools from '@/components/SafetyTools'
import ValueComparison from '@/components/ValueComparison'
import { WHATSAPP_URL } from '@/lib/siteConfig'

const PLANS = [
  {
    name: 'Self-Paced Homeschool',
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
    name: 'Daily Live School',
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
  { value: '≤ 15 / class', label: 'Known by name, fully supervised' },
  { value: 'Ontario-aligned', label: 'On track with standards' },
]

const TESTIMONIALS = [
  {
    body: "We were worried online school wouldn't give our daughter the structure she needed. Within two weeks she had a routine, real friendships with her classmates, and was genuinely excited about school for the first time.",
    author: 'Fatima A.',
    role: 'Mother of a Grade 5 student',
  },
  {
    body: "The teachers know our son by name. In his previous school of 30 kids per class, he was invisible. Here he's called on, challenged, and growing — and the Arabic classes are exactly what we'd been looking for.",
    author: 'Ibrahim K.',
    role: 'Father of a Grade 6 student',
  },
  {
    body: "Real books shipped to our door, Ontario-aligned, and actual live teachers — this is a real school, not just recorded videos. We wish we'd found Darul Haya two years earlier.",
    author: 'Aisha M.',
    role: 'Mother of two — Grades 4 and 7',
  },
]

const FAQS = [
  {
    q: 'What time are the classes held each day?',
    a: 'Classes run Monday through Friday from 8:30 AM to 2:30 PM Eastern Time, following a structured timetable that mirrors a traditional school day. All lessons are recorded and available by end of day for families who need flexibility.',
  },
  {
    q: "How is my child's progress tracked and reported?",
    a: "Parents receive regular progress reports and can view grades, assignments, and attendance through the student dashboard at any time. Teachers are reachable by email, and we schedule a one-on-one check-in call each term.",
  },
  {
    q: 'What if my child needs extra support in a subject?',
    a: "Because classes are small, teachers can provide differentiated support during lessons and flag any student who needs more help. Catch-up sessions are available and our team will reach out proactively if we spot a gap.",
  },
  {
    q: 'Do you follow the Ontario curriculum?',
    a: 'Yes — Mathematics, Language Arts, and Science are fully Ontario-aligned, so students can transition to any Ontario school at their grade level. Islamic Studies and Arabic are integrated into the timetable alongside the core curriculum.',
  },
]

const HERO_HEADLINE_A = 'A smaller, safer school — taught live, every day.'
const HERO_HEADLINE_B = 'A complete Islamic education. Live, every day.'
const HERO_HEADLINE = process.env.NEXT_PUBLIC_HERO_VARIANT === 'B' ? HERO_HEADLINE_B : HERO_HEADLINE_A

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
              <Image
                src="/logo.png"
                alt="Darul Haya — Academy of Learning"
                width={208}
                height={166}
                priority
                className="w-full h-auto"
              />
            </div>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-clay/60 mt-1 uppercase">
              Knowledge · Character
            </p>
          </div>

          <h1 className="mt-9 text-4xl sm:text-5xl font-bold text-white leading-[1.1] max-w-3xl mx-auto">
            {HERO_HEADLINE}
          </h1>

          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Live, teacher-led classes for boys and girls in Grades 3–8 — small, closely
            supervised, Ontario-aligned, with physical books shipped to your door.
          </p>

          <div className="mt-9 flex items-center justify-center gap-6 flex-wrap">
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
              className="text-white/80 text-sm font-medium hover:text-white transition-colors"
            >
              Chat on WhatsApp →
            </a>
          </div>

          {/* How it works — 3-step process */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-white/70 text-xs">
            {[
              'Apply online (5 min)',
              'Personal call from our team',
              'Start your first class',
            ].map((step, i) => (
              <span key={step} className="flex items-center gap-1.5 sm:gap-2">
                {i > 0 && <span aria-hidden className="text-white/25 hidden sm:inline">→</span>}
                <span className="h-4 w-4 rounded-full bg-amber/20 text-amber text-[9px] font-bold inline-flex items-center justify-center shrink-0">{i + 1}</span>
                <span>{step}</span>
              </span>
            ))}
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
            <Image src="/ontario-edu.png" alt="Ontario Ministry of Education" width={200} height={56} className="h-14 w-auto opacity-90 hover:opacity-100 transition-all" />
            <Image src="/canada.png" alt="Government of Canada" width={200} height={40} className="h-10 w-auto opacity-90 hover:opacity-100 transition-all" />
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
          <p className="mt-4 text-clay/70 leading-relaxed">Curriculum, technology, and physical materials — all included from day one.</p>
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
              title: 'Student Dashboard',
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

      {/* Testimonials */}
      <section id="testimonials" className="bg-beige py-20 border-b border-clay/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Parent Voices</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-clay">What families are saying</h2>
            <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure key={t.author} className="bg-white rounded-2xl p-7 border border-beige-dark shadow-md flex flex-col gap-4">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber text-lg leading-none" aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="text-clay/75 text-sm leading-relaxed flex-1">"{t.body}"</blockquote>
                <figcaption>
                  <p className="font-semibold text-clay text-sm">{t.author}</p>
                  <p className="text-xs text-clay/50 mt-0.5">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Value vs tutoring */}
      <ValueComparison />

      {/* Pricing */}
      <section id="pricing" className="relative overflow-hidden scroll-mt-24 bg-gradient-to-b from-beige to-beige-dark/50">
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

      {/* Decision summary strip */}
      <section aria-label="Program highlights" className="bg-beige border-y border-clay/10 py-5">
        <ul className="max-w-3xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-clay/70 list-none">
          {['Grades 3–8', '$300 / month', 'Live daily classes', 'Ontario-aligned', 'Books included'].map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <span className="text-teal font-bold" aria-hidden>✓</span>
              {item}
            </li>
          ))}
        </ul>
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
          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
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
              className="text-white/80 text-sm font-medium hover:text-white transition-colors"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-beige py-16 border-b border-clay/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-clay">Quick answers for curious parents</h2>
            <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-2xl border border-beige-dark shadow-sm">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-clay text-sm select-none [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>{faq.q}</span>
                  <svg className="h-5 w-5 text-teal shrink-0 ml-3 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.38a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
                  </svg>
                </summary>
                <p className="px-6 pt-4 pb-5 text-clay/70 text-sm leading-relaxed border-t border-beige-dark/40">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-teal text-sm font-medium hover:text-teal-dark transition-colors">
              See all questions →
            </Link>
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
                <li><Link href="/programs/full-live" className="text-white/80 hover:text-amber transition-colors">Daily Live School</Link></li>
                <li><Link href="/programs/homeschool" className="text-white/80 hover:text-amber transition-colors">Self-Paced Homeschool</Link></li>
                <li><Link href="/curriculum" className="text-white/80 hover:text-amber transition-colors">Curriculum</Link></li>
                <li><Link href="/faq" className="text-white/80 hover:text-amber transition-colors">FAQ</Link></li>
                <li><Link href="/register" className="text-amber font-semibold hover:text-amber-dark transition-colors">Apply Now →</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">Get in Touch</p>
              <ul className="space-y-2.5 text-sm">
                <li><a href="mailto:info@darulhaya.com" className="text-white/80 hover:text-amber transition-colors">info@darulhaya.com</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-amber transition-colors">Chat on WhatsApp</a></li>
                <li><Link href="/contact" className="text-white/80 hover:text-amber transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/60">
            © {new Date().getFullYear()} Darul Haya. All rights reserved.
            {' · '}
            <Link href="/privacy" className="hover:text-amber transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
