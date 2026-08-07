import Link from 'next/link'
import Image from 'next/image'
import Benefits from '@/components/Benefits'
import SafetyTools from '@/components/SafetyTools'
import ValueComparison from '@/components/ValueComparison'
import TuitionCalculator from '@/components/TuitionCalculator'
import SubjectCards from '@/components/SubjectCards'
import EveryOpportunity from '@/components/EveryOpportunity'
import HijriDate from '@/components/HijriDate'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { WHATSAPP_URL } from '@/lib/siteConfig'

// Homepage video, paste your YouTube video ID (the part after "v=" or
// "youtu.be/"), e.g. 'dQw4w9WgXcQ'. Leave empty to hide the video section.
const HOMEPAGE_VIDEO_ID = ''

const INCLUDED = [
  'Daily live classes with real teachers',
  'Complete Ontario-aligned curriculum, plus Arabic',
  'Full recording library so no one misses a lesson',
  'Physical books shipped to your door',
  'Student dashboard & progress tracking',
  'Priority teacher support',
]

const FACTS = [
  { value: 'Grades 2-12', label: 'Elementary to High School' },
  { value: 'Live, daily', label: 'Real teachers, set timetable' },
  { value: 'Small classes', label: 'Known by name, fully supervised' },
  { value: 'Ontario-aligned', label: 'On track with standards' },
]

// Swap the placeholder bodies below for real parent reviews as founding families
// share feedback. The "What families are saying" section stays hidden until at
// least one real review (a body without the [ Placeholder ] marker) exists.
const TESTIMONIALS = [
  {
    body: '[ Placeholder ] A real review from one of our founding families will appear here.',
    author: 'Founding parent',
    role: 'Elementary (Grades 2-5)',
  },
  {
    body: '[ Placeholder ] A real review from one of our founding families will appear here.',
    author: 'Founding parent',
    role: 'Middle School (Grades 6-8)',
  },
  {
    body: '[ Placeholder ] A real review from one of our founding families will appear here.',
    author: 'Founding parent',
    role: 'Elementary (Grades 2-5)',
  },
]

const REAL_TESTIMONIALS = TESTIMONIALS.filter((t) => !t.body.startsWith('[ Placeholder ]'))

const FAQS = [
  {
    q: 'Is online school really as effective as in-person?',
    a: 'For a lot of children it works better. Classes are live and small, so a teacher notices right away when someone is stuck. That is hard to do in a room of thirty. We take attendance daily, track participation, and record every lesson so nothing gets missed.',
  },
  {
    q: 'Will my child be socially isolated?',
    a: 'No. Your child is in class with the same group every day, seeing and speaking with their teacher and classmates throughout the lesson. The circle is smaller and calmer than a big school, without the cliques and bullying that worry most parents.',
  },
  {
    q: 'Will my child be at a disadvantage compared to children in regular school?',
    a: 'We think it is the other way around. Our program is accredited and follows the Ontario curriculum, so your child stays on grade level and can move to another school whenever you choose. In a class this small they also get far more of the teacher’s time than they would in a full classroom.',
  },
  {
    q: 'Why should we trust a brand-new school with our child?',
    a: 'That is a fair thing to ask. Our program is accredited and follows the Ontario curriculum, and the teachers here have a track record: their students finish their work and go on to high school ready. Classes are small and closely supervised, and the whole day is open to you, so you can see what is being taught and how your child is doing. Come to a free open house and ask us whatever you want.',
  },
  {
    q: 'What time are the classes held each day?',
    a: 'Classes run on a set weekday timetable during regular school hours (Eastern Time), mirroring a traditional school day. The finalized daily schedule is shared with enrolled families before the school year begins, and all lessons are recorded for families who need flexibility.',
  },
  {
    q: "Isn't this too much screen time?",
    a: 'Less than parents expect, and the time on screen is spent working rather than scrolling. Lessons are guided and active, so your child is using the screen to think and produce something. A good part of the day is off the screen anyway. Every student gets physical books and materials shipped home, so reading, writing, and assignments happen on paper.',
  },
  {
    q: "How is my child's progress tracked and reported?",
    a: "Parents can view grades, assignments, and attendance through the student dashboard at any time, and teachers are reachable by email whenever questions come up.",
  },
  {
    q: 'What if my child needs extra support in a subject?',
    a: "Because classes are small, teachers can give each student individual attention during lessons and work with parents whenever a child needs extra help in a subject.",
  },
  {
    q: 'Do you follow the Ontario curriculum, and can my child return to a regular school later?',
    a: 'Yes. Core academic subjects follow the Ontario curriculum, so your child stays on track with provincial expectations and can move to any Ontario school at their grade level. Arabic sits in the timetable alongside the core subjects.',
  },
  {
    q: "What if it's not the right fit for us?",
    a: 'Talk to us before you enrol. We are happy to go through whether Darul Haya suits your child, answer your questions, and walk you through a normal school day so you can decide properly.',
  },
]

const HERO_HEADLINE = 'A smaller, safer school. Taught live, every day.'

// FAQ rich-result markup, mirrors the on-page FAQ section below.
const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-beige">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />

      {/* Hidden forms, required for Netlify to detect and process form submissions.
          These are never visible; the real forms are in RegisterForm.jsx and LeadPopup.jsx. */}
      <form name="registration" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true" hidden>
        <input type="hidden" name="form-name" value="registration" />
        <input name="bot-field" />
        <input name="student-name" />
        <input name="guardian-name" />
        <input name="email" />
        <input name="phone" />
        <input name="grade" />
        <input name="program" />
        <textarea name="message" />
      </form>
      <form name="darul-haya-lead" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true" hidden>
        <input type="hidden" name="form-name" value="darul-haya-lead" />
        <input name="bot-field" />
        <input name="name" />
        <input name="email" />
        <input name="phone" />
        <input name="grade" />
        <input name="source" />
        <input name="page_url" />
      </form>

      {/* Hero, light & photo-led (public/hero.jpg). */}
      <section id="about" className="relative overflow-hidden scroll-mt-24 bg-beige">
        {/* Warm light base, beige so the logo's transparent background blends */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-beige via-beige to-beige-dark/40" />
        {/* Background photo (no people), prominent, with a lighter wash for legibility */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-75"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        {/* Cream wash so dark text stays readable over the photo */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-beige/45 via-beige/30 to-beige/65" />
        <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-amber/15 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-20 text-center">
          <span className="inline-flex items-center gap-2 mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-dark bg-teal/10 ring-1 ring-teal/20 px-4 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" /> Now enrolling · Grades 2-12
          </span>

          {/* Full crest (transparent bg) on a soft cream halo, so it reads
              cleanly over the photo without a hard square box. /logo.png stays
              the boxed version used by the nav and social share. */}
          <div className="relative mx-auto w-60 sm:w-72">
            <div
              aria-hidden
              className="absolute inset-0 -m-8 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(252,248,244,0.94)_40%,rgba(252,248,244,0)_72%)]"
            />
            <Image
              src="/hero-logo.png"
              alt="Darul Haya Academy of Learning"
              width={512}
              height={512}
              priority
              className="relative w-full h-auto"
            />
          </div>

          <h1 className="mt-9 text-4xl sm:text-5xl lg:text-6xl font-bold text-clay leading-[1.08] tracking-tight text-balance max-w-3xl mx-auto">
            {HERO_HEADLINE}
          </h1>

          <p className="mt-5 text-lg text-clay/80 max-w-2xl mx-auto leading-relaxed">
            Live, teacher-led classes for boys and girls in Grades 2-12. Small classes, close
            supervision, the Ontario curriculum, and physical books shipped to your door.
          </p>

          <div className="mt-9 flex items-center justify-center gap-6 flex-wrap">
            <Link
              href="/register"
              className="bg-teal text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-teal/25 hover:bg-teal-dark hover:shadow-xl active:scale-[0.98] transition-all duration-200"
            >
              Apply Now
            </Link>
            <Link
              href="/open-house"
              className="text-clay/80 text-sm font-medium hover:text-clay transition-colors"
            >
              or join a free open house
              <span aria-hidden="true"> →</span>
            </Link>
          </div>

          {/* How it works, 3-step process */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-clay/80 text-xs">
            {[
              'Apply online (5 min)',
              'Personal call from our team',
              'Start your first class',
            ].map((step, i) => (
              <span key={step} className="flex items-center gap-1.5 sm:gap-2">
                {i > 0 && <span aria-hidden="true" className="text-clay/25 hidden sm:inline">→</span>}
                <span className="h-4 w-4 rounded-full bg-clay/10 text-clay text-[9px] font-bold inline-flex items-center justify-center shrink-0" aria-hidden="true">{i + 1}</span>
                <span>{step}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section id="grades" aria-label="School at a glance" className="bg-beige border-b border-clay/10 py-8 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 text-center md:divide-x divide-clay/10">
          {FACTS.map((f) => (
            <div key={f.value} className="md:px-4">
              <p className="font-display text-xl sm:text-2xl font-bold text-clay">{f.value}</p>
              <p className="text-xs text-clay/80 mt-1.5 leading-snug">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section aria-label="Curriculum alignment" className="bg-beige py-12 border-b border-clay/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-clay/80 mb-6">Curriculum aligned with</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <Image src="/ontario-edu.png" alt="Ontario Ministry of Education" width={200} height={56} className="h-14 w-auto opacity-90 hover:opacity-100 transition-all" />
            <Image src="/canada.png" alt="Government of Canada" width={200} height={40} className="h-10 w-auto opacity-90 hover:opacity-100 transition-all" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative overflow-hidden scroll-mt-24">        <div className="relative max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">What&rsquo;s Included</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">Everything in one place</h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-4 text-clay/80 leading-relaxed">Curriculum, technology, and physical materials, all included from day one.</p>
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
                  <span className="font-display text-2xl leading-none -translate-y-1" aria-hidden="true">ج</span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                    {f.icon}
                  </svg>
                )}
              </div>
              <h3 className="font-bold text-clay mb-1 text-sm">{f.title}</h3>
              <p className="text-clay/80 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Video, only rendered once HOMEPAGE_VIDEO_ID is set */}
      {HOMEPAGE_VIDEO_ID && (
        <section id="video" className="bg-beige py-16 sm:py-20 border-b border-clay/10">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">Watch</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-clay">See Darul Haya for yourself</h2>
              <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
            </div>
            <YouTubeEmbed id={HOMEPAGE_VIDEO_ID} title="Welcome to Darul Haya" />
          </div>
        </section>
      )}

      {/* Subject cards */}
      <SubjectCards />

      {/* Benefits of Online Schooling */}
      <Benefits />

      {/* Objection killer: "will my child fall behind / get the same chances?" */}
      <EveryOpportunity />

      {/* Safety tools */}
      <SafetyTools />

      {/* Our classrooms, school voice (no named principal) */}
      <section aria-label="Our classrooms" className="relative overflow-hidden bg-beige-dark/60 border-y border-clay/10">
        <div className="relative max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-6">Inside Our Classrooms</p>
          <span aria-hidden="true" className="block font-display text-6xl leading-none text-amber select-none">&ldquo;</span>
          <blockquote className="font-display text-2xl sm:text-3xl font-semibold text-clay leading-snug text-balance -mt-4">
            A calm, respectful classroom changes everything. At Darul Haya we keep classes
            small and closely supervised, so every child feels safe, settled, and free to
            focus and actually learn.
          </blockquote>
          <div className="gold-rule mx-auto mt-7 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-sm font-semibold text-clay">The Darul Haya Team</p>
        </div>
      </section>

      {/* Testimonials, only shown once real reviews exist */}
      {REAL_TESTIMONIALS.length > 0 && (
        <section id="testimonials" className="bg-beige py-20 border-b border-clay/10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">Parent Voices</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-clay">What families are saying</h2>
              <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {REAL_TESTIMONIALS.map((t, i) => (
                <figure key={i} className="bg-white rounded-2xl p-7 border border-beige-dark shadow-md flex flex-col gap-4">
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-amber text-lg leading-none" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <blockquote className="text-clay/80 text-sm leading-relaxed flex-1">&ldquo;{t.body}&rdquo;</blockquote>
                  <figcaption>
                    <p className="font-semibold text-clay text-sm">{t.author}</p>
                    <p className="text-xs text-clay/80 mt-0.5">{t.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Value vs tutoring */}
      <ValueComparison />

      {/* Pricing */}
      <section id="pricing" className="relative overflow-hidden scroll-mt-24 bg-gradient-to-b from-beige to-beige-dark/50">        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">Tuition</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-clay">One school. Straightforward pricing.</h2>
            <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
            <p className="text-clay/80 mt-5">A complete online school for Grades 2-12. Everything included, at one flat monthly price by grade level.</p>
          </div>

          <div className="max-w-md mx-auto rounded-3xl bg-white text-clay p-8 sm:p-10 border border-beige-dark shadow-xl shadow-clay/10">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-dark mb-4">Online School · Grades 2-12</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-beige ring-1 ring-teal/15 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-clay/80">Grades 2-8</p>
                <div className="flex items-end gap-1 mt-1">
                  <span className="font-display text-4xl font-bold text-teal-dark">$225</span>
                  <span className="text-clay/80 text-sm mb-1">/mo</span>
                </div>
              </div>
              <div className="rounded-2xl bg-beige ring-1 ring-teal/15 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-clay/80">Grades 9-12</p>
                <div className="flex items-end gap-1 mt-1">
                  <span className="font-display text-4xl font-bold text-teal-dark">$250</span>
                  <span className="text-clay/80 text-sm mb-1">/mo</span>
                </div>
              </div>
            </div>
            <p className="text-clay/80 text-sm mt-4 leading-relaxed">
              Daily live, teacher-led classes with a complete Ontario-aligned curriculum, Arabic, recordings, and physical books shipped to your door.
            </p>

            <ul className="mt-6 flex flex-col gap-3 text-sm">
              {INCLUDED.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-teal-dark mt-0.5 font-bold" aria-hidden="true">✓</span>
                  <span className="text-clay/80">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/register"
              className="mt-8 block w-full bg-teal text-white py-3.5 rounded-xl font-semibold text-center hover:bg-teal-dark active:scale-[0.98] transition-all duration-200"
            >
              Apply Now
            </Link>
            <p className="text-clay/80 text-xs text-center mt-4 leading-relaxed">
              Plus a one-time $150 material fee &amp; $100 technology fee each year · 15% sibling discount
            </p>
          </div>

          <TuitionCalculator />
        </div>
      </section>

      {/* Decision summary strip */}
      <section aria-label="Program highlights" className="bg-beige border-y border-clay/10 py-5">
        <ul className="max-w-3xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-clay/80 list-none">
          {['Grades 2-12', '$225-$250 / month', 'Live daily classes', 'Ontario-aligned', 'Books included'].map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <span className="text-teal-dark font-bold" aria-hidden>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA band */}
      <section aria-label="Enrolment call to action" className="relative overflow-hidden bg-clay text-white">
        {/* Warm classroom photo, prominent, with a deep-teal overlay kept strong
            enough that the white text stays readable */}
        <div aria-hidden className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: "url('/cta.jpg')" }} />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#25714C]/55 via-clay/50 to-[#123020]/60" />        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-[36rem] rounded-full bg-teal-light/10 blur-3xl" />
        <div className="relative max-w-2xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight text-balance">
            Ready to give your child a better school day?
          </h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-white/70 leading-relaxed">
            Apply in minutes and we&rsquo;ll personally help you get enrolled. Or message us on WhatsApp if you have questions first.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
            <Link
              href="/register"
              className="bg-white text-clay px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-black/20 hover:bg-beige hover:shadow-xl active:scale-[0.98] transition-all duration-200"
            >
              Apply Now
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 text-sm font-medium hover:text-white transition-colors"
            >
              Chat on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-beige py-16 border-b border-clay/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-clay">Quick answers for curious parents</h2>
            <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-2xl border border-beige-dark shadow-sm">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-clay text-sm select-none [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>{faq.q}</span>
                  <svg className="h-5 w-5 text-teal-dark shrink-0 ml-3 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.38a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
                  </svg>
                </summary>
                <p className="px-6 pt-4 pb-5 text-clay/80 text-sm leading-relaxed border-t border-beige-dark/40">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-teal-dark text-sm font-medium hover:text-teal-dark transition-colors">
              See all questions <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-beige-dark/50 text-clay border-t border-clay/10">
        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-amber to-transparent" />
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid gap-10 sm:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5">
                <Image src="/logo-mark.png" alt="" width={257} height={311} className="h-10 w-auto" />
                <h2 className="font-display text-2xl font-bold tracking-wide text-clay">Darul Haya</h2>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-teal-dark font-semibold mt-2">Knowledge · Character</p>
              <p className="text-clay/80 text-sm mt-4 leading-relaxed max-w-xs">
                A structured, values-driven online school for boys and girls in Grades 2-12.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-clay/80 mb-4">Explore</h2>
              {/* inline-block + py-1 gives each link a >=24px tap target (WCAG 2.5.8) */}
              <ul className="space-y-1 text-sm">
                <li><Link href="/about" className="inline-block py-1 text-clay/80 hover:text-teal-dark transition-colors">About</Link></li>
                <li><Link href="/programs/full-live" className="inline-block py-1 text-clay/80 hover:text-teal-dark transition-colors">Our Online School</Link></li>
                <li><Link href="/curriculum" className="inline-block py-1 text-clay/80 hover:text-teal-dark transition-colors">Curriculum</Link></li>
                <li><Link href="/faq" className="inline-block py-1 text-clay/80 hover:text-teal-dark transition-colors">FAQ</Link></li>
                <li><Link href="/register" className="inline-block py-1 text-teal-dark font-semibold hover:underline transition-colors">Apply Now <span aria-hidden="true">→</span></Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-clay/80 mb-4">Get in Touch</h2>
              <ul className="space-y-1 text-sm">
                <li><a href="mailto:info@darulhaya.com" className="inline-block py-1 text-clay/80 hover:text-teal-dark transition-colors">info@darulhaya.com</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block py-1 text-clay/80 hover:text-teal-dark transition-colors">Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span></a></li>
                <li><Link href="/contact" className="inline-block py-1 text-clay/80 hover:text-teal-dark transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-clay/10 mt-10 pt-6 text-center text-xs text-clay/80">
            <HijriDate className="block mb-2 text-clay/80" />
            © {new Date().getFullYear()} Darul Haya. All rights reserved.
            {' · '}
            <Link href="/privacy" className="inline-block py-1 hover:text-teal-dark transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
