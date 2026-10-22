import Link from 'next/link'
import Image from 'next/image'
import Benefits from '@/components/Benefits'
import SafetyTools from '@/components/SafetyTools'
import ValueComparison from '@/components/ValueComparison'
import TuitionCalculator from '@/components/TuitionCalculator'
import SubjectCards from '@/components/SubjectCards'
import EveryOpportunity from '@/components/EveryOpportunity'
import AcrossCanada from '@/components/AcrossCanada'
import HeroCrest from '@/components/HeroCrest'
import MinistryBadge from '@/components/MinistryBadge'
import HijriDate from '@/components/HijriDate'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { WHATSAPP_URL, BRAND_OF_LINE, MINISTRY } from '@/lib/siteConfig'

// Homepage video, paste your YouTube video ID (the part after "v=" or
// "youtu.be/"), e.g. 'dQw4w9WgXcQ'. Leave empty to hide the video section.
const HOMEPAGE_VIDEO_ID = ''

const INCLUDED = [
  'Daily live instruction by real teachers',
  'Complete Ontario curriculum + daily live Arabic',
  'Small classes where every student is known by name',
  'Physical textbooks & workbooks shipped home',
  'Parent real-time grade & attendance portal',
  'Direct access teacher support',
]

const FACTS = [
  { value: 'Grades 2-12', label: 'Complete Elementary to High School pathway' },
  { value: 'Live & Daily', label: 'Real teachers, zero pre-recorded boredom' },
  { value: 'Small Classes', label: '100% supervised, known by name, zero bullying' },
  { value: 'Ontario Aligned', label: 'Official curriculum standards guaranteed' },
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
    a: 'It is often vastly more effective. In a 30-student brick-and-mortar room, quiet kids get ignored and distracted kids fall behind. Our live classes are kept small so teachers actively engage every student. With daily attendance and live monitoring, gaps get caught the week they appear instead of at the report card.',
  },
  {
    q: 'Will my child lose social development?',
    a: 'They actually gain better social skills. Your child interacts live with teachers and peers daily in a controlled, respectful space free from toxic cliques, swearing, or bullying. They form healthy friendships based on shared values.',
  },
  {
    q: 'Will my child be at an academic disadvantage?',
    a: 'No, they gain an academic edge. Our curriculum follows Ontario standards strictly, allowing seamless transitions to any university or high school. Plus, the smaller class sizes yield far more direct teacher interaction than traditional schools offer.',
  },
  {
    q: 'Why should we trust a newer online school?',
    a: 'Our founders bring over 15 years of Ontario classroom experience. We teach the Ontario curriculum, monitor screens actively with Classroom.cloud, and give you full parent portal access so you can inspect the learning in real time.',
  },
  {
    q: 'What is the daily class schedule?',
    a: 'Classes run during standard school hours (Eastern Time) on weekdays. You receive a structured schedule prior to day one. If your child misses a session due to illness or travel, tell the teacher and they will let you know what was covered and what to work on.',
  },
  {
    q: 'Is this going to cause screen fatigue?',
    a: 'No. We intentionally balance screen time. Lessons are interactive discussions, and students complete their actual reading, problem solving, and writing on physical printed workbooks that we ship to your home.',
  },
  {
    q: 'How do I know if my child is actually paying attention?',
    a: 'Through your parent portal, you can inspect grades, assignment completion, and attendance live. Furthermore, our software allows teachers to view student screens in real time during class.',
  },
  {
    q: 'What if my child struggles with Math or English?',
    a: 'Because our class sizes are small, teachers give real-time individual help during class sessions. You also have direct messaging channels with instructors to resolve difficulties quickly.',
  },
  {
    q: 'Can my child transfer back to a public high school or university later?',
    a: 'Absolutely. Core courses map 1-to-1 with official Ontario curriculum codes, ensuring seamless grade transferability anywhere in Canada or internationally.',
  },
  {
    q: "What if we enroll and decide it isn't the right fit?",
    a: "Speak with us. We offer thorough consultation calls prior to start dates to ensure Darul Haya fits your family's exact needs before you commit long term.",
  },
]

const HERO_HEADLINE = 'Stop watching your child get lost in crowded classrooms. Give them a safer, higher-performing school day.'

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

      {/* Hero. One photograph, one wash, one crest: no decorative blobs. The
          content plays in on load (.hero-seq) and the crest tilts toward the
          pointer on its own perspective stage (HeroCrest). */}
      <section id="about" className="relative overflow-hidden scroll-mt-24 bg-beige">
        <div
          aria-hidden
          className="hero-photo absolute inset-0 bg-cover bg-[center_38%]"
          style={{ backgroundImage: "url('/hero-v2.jpg')" }}
        />
        {/* Single cream wash, heavier toward the bottom where the copy sits */}
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(238,248,240,0.55)_0%,rgba(238,248,240,0.62)_45%,rgba(238,248,240,0.92)_100%)]" />

        <div className="hero-seq relative max-w-4xl mx-auto px-6 pt-16 sm:pt-20 pb-24 sm:pb-28 text-center">
          {/* One text run so it wraps as a sentence on phones; the framing
              ticks only appear once there is room for them. */}
          <p className="eyebrow justify-center">
            <span>
              Fall 2026 registration open
              <span aria-hidden="true" className="mx-2 text-clay/40">&middot;</span>
              <span className="whitespace-nowrap">Grades 2-12</span>
            </span>
          </p>

          <div className="mt-10">
            <HeroCrest />
          </div>

          <h1 className="mt-10 text-[2.1rem] sm:text-6xl lg:text-[4.25rem] font-bold text-clay leading-[1.06] sm:leading-[1.04] max-w-3xl mx-auto">
            {HERO_HEADLINE}
          </h1>

          <p className="mt-7 text-[1.075rem] sm:text-lg text-clay/80 max-w-prose mx-auto leading-[1.7]">
            Protect your child&rsquo;s values without sacrificing their academic future. Live, expert-led
            online classes for Grades 2-12 featuring small group sizes, total screen supervision, full
            Ontario curriculum alignment, and physical textbooks shipped straight to your door.
          </p>

          <div className="mt-11 flex items-center justify-center gap-x-8 gap-y-5 flex-wrap">
            <Link href="/register" className="btn btn-primary">
              Enroll Your Child Today
              <span aria-hidden="true" className="btn-arrow">&rarr;</span>
            </Link>
            <Link href="/open-house" className="link-underline text-sm font-medium text-clay/80 hover:text-clay">
              or reserve a free open house spot
            </Link>
          </div>

          {/* How it works: three numbered steps on a hairline */}
          <ol className="mt-14 mx-auto max-w-3xl grid sm:grid-cols-3 border-t border-clay/15 text-left">
            {[
              'Submit 5-minute application',
              '1-on-1 strategy call with our team',
              'Start live classes with physical books in hand',
            ].map((step, i) => (
              <li key={step} className="flex items-baseline gap-3 pt-5 pb-1 sm:px-5 first:sm:pl-0 last:sm:pr-0">
                <span className="font-display text-sm font-bold text-amber-dark tabular-nums" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="text-[13px] leading-snug text-clay/80">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ministry registration, placed directly under the hero */}
      <MinistryBadge />

      {/* Facts strip */}
      <section id="grades" aria-label="School at a glance" className="bg-beige border-b border-clay/10 py-14 sm:py-16 scroll-mt-24">
        <div className="stagger max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 text-center md:divide-x divide-clay/10">
          {FACTS.map((f) => (
            <div key={f.value} className="md:px-3">
              <p className="font-display text-[1.45rem] sm:text-[1.75rem] font-bold text-clay leading-none md:whitespace-nowrap">{f.value}</p>
              <p className="text-[13px] text-clay/80 mt-3 leading-snug max-w-[22ch] mx-auto">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Canadian reach, time zones and curriculum */}
      <AcrossCanada />

      {/* Features */}
      <section id="features" className="relative overflow-hidden scroll-mt-24">
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Total Value Package</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">Everything your child needs to succeed (Zero hidden fees)</h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-4 text-clay/80 leading-relaxed">Complete curriculum, premium educational software, and physical textbooks delivered to your doorstep from day one.</p>
        </div>
        <div className="stagger grid grid-cols-2 lg:grid-cols-5 gap-px bg-beige-dark border border-beige-dark rounded-2xl overflow-hidden">
          {[
            {
              title: 'Live Classes',
              body: 'Daily instruction delivered live by real teachers.',
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
            <div key={f.title} className="group bg-white px-6 py-9 text-center flex flex-col items-center transition-colors duration-300 hover:bg-[#FBFDFB] last:col-span-2 lg:last:col-span-1">
              <div className="icon-tile h-12 w-12 rounded-full bg-beige text-teal-dark flex items-center justify-center mb-5">
                {f.arabic ? (
                  <span className="font-display text-2xl leading-none -translate-y-1" aria-hidden="true">ج</span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
                    {f.icon}
                  </svg>
                )}
              </div>
              <h3 className="font-display font-bold text-clay mb-2 text-[1.05rem]">{f.title}</h3>
              <p className="text-clay/80 text-[13px] leading-relaxed">{f.body}</p>
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
              <p className="eyebrow mb-4">Watch</p>
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
        <div className="relative max-w-4xl mx-auto px-6 py-24 lg:py-32 text-center">
          <p className="eyebrow mb-8">Our Educational Philosophy</p>
          <span aria-hidden="true" className="block font-display text-[5.5rem] leading-[0.6] text-amber-dark/80 select-none">&ldquo;</span>
          <blockquote className="font-display text-[1.7rem] sm:text-[2.35rem] font-medium text-clay leading-[1.28] tracking-[-0.015em] mt-6">
            An anxious or distracted child cannot learn. By creating a calm, highly supervised,
            and morally protective environment, we unlock a student&rsquo;s natural desire to excel.
          </blockquote>
          <div className="gold-rule mx-auto mt-7 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-sm font-semibold text-clay">The Darul Haya Faculty</p>
        </div>
      </section>

      {/* Testimonials, only shown once real reviews exist */}
      {REAL_TESTIMONIALS.length > 0 && (
        <section id="testimonials" className="bg-beige py-24 lg:py-32 border-b border-clay/10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="eyebrow mb-4">Parent Voices</p>
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
      <section id="pricing" className="relative overflow-hidden scroll-mt-24 bg-beige-dark/40 border-y border-clay/10">
        <div className="relative max-w-4xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="eyebrow mb-4">Simple Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-clay">All-inclusive tuition. Zero surprises.</h2>
            <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
            <p className="text-clay/80 mt-5">Complete live schooling, Ontario curriculum, live Arabic, software access, and physical books bundled into one transparent monthly rate.</p>
          </div>

          <div className="max-w-md mx-auto rounded-2xl bg-white text-clay p-8 sm:p-10 border border-beige-dark shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-dark mb-4">Live Online School · Grades 2-12</p>
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
                <p className="mt-1.5 text-[11px] font-semibold text-teal-dark leading-snug">Earns OSSD credits</p>
              </div>
            </div>
            <p className="text-clay/80 text-sm mt-4 leading-relaxed">
              Lock in your rate for the full 2026 school year.
            </p>

            <ul className="mt-7 flex flex-col gap-3.5 text-sm border-t border-beige-dark pt-7">
              {INCLUDED.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-teal-dark mt-0.5 font-bold" aria-hidden="true">✓</span>
                  <span className="text-clay/80">{f}</span>
                </li>
              ))}
            </ul>

            <Link href="/register" className="btn btn-primary mt-9 w-full">
              Apply Now (Takes 5 Mins)
              <span aria-hidden="true" className="btn-arrow">&rarr;</span>
            </Link>
            <p className="text-clay/80 text-xs text-center mt-4 leading-relaxed">
              Material fees confirmed once book &amp; shipping costs are set · 15% automatic sibling discount
            </p>
          </div>

          <TuitionCalculator />
        </div>
      </section>

      {/* Decision summary strip */}
      <section aria-label="Program highlights" className="bg-beige border-y border-clay/10 py-5">
        <ul className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13.5px] text-clay/80 list-none">
          {['Grades 2-12', 'From $225 / month', '100% Live Daily Classes', 'Ontario Aligned', 'Textbooks Included'].map((item) => (
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
        <div aria-hidden className="parallax-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/cta.jpg')" }} />
        <div aria-hidden className="absolute inset-0 bg-clay/80" />
        <div className="relative max-w-2xl mx-auto px-6 py-28 lg:py-36 text-center">
          <h2 className="text-[2.1rem] sm:text-5xl font-bold text-white leading-[1.1]">
            Give your child the education they deserve this September.
          </h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-6 text-white/80 leading-relaxed max-w-prose mx-auto">
            Application takes under 5 minutes. Secure your child&rsquo;s seat today before classes reach maximum capacity.
          </p>
          <div className="mt-11 flex items-center justify-center gap-x-8 gap-y-5 flex-wrap">
            <Link href="/register" className="btn btn-light">
              Apply Now
              <span aria-hidden="true" className="btn-arrow">&rarr;</span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-white/85 text-sm font-medium hover:text-white"
            >
              Chat on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-beige py-24 lg:py-32 border-b border-clay/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Parent Reassurance</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-clay">Frequently asked questions about Darul Haya</h2>
            <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          </div>
          <div className="stagger border-t border-clay/15">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group border-b border-clay/15">
                <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer font-display font-semibold text-clay text-[1.08rem] leading-snug select-none transition-colors duration-200 hover:text-teal-dark [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>{faq.q}</span>
                  <span aria-hidden="true" className="relative h-4 w-4 shrink-0 text-teal-dark">
                    <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-500 ease-out group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="pb-7 pr-10 text-clay/80 text-[15px] leading-[1.75] max-w-prose">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="link-arrow link-underline text-teal-dark text-sm font-medium">
              See all questions <span aria-hidden="true" className="btn-arrow">&rarr;</span>
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
                <Image src="/logo-mark-v2.png" alt="" width={526} height={622} className="h-10 w-auto" />
                <h2 className="font-display text-2xl font-bold tracking-wide text-clay">Darul Haya</h2>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-teal-dark font-semibold mt-2">Knowledge, Character, Leadership</p>
              <p className="text-clay/80 text-sm mt-4 leading-relaxed max-w-xs">
                Stop compromising between academic excellence and your family’s values. A structured, live online school for boys and girls in Grades 2-12.
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
                <li><Link href="/calendar" className="inline-block py-1 text-clay/80 hover:text-teal-dark transition-colors">School Calendar</Link></li>
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
            <HijriDate className="block mb-2 text-clay/80" showNote noteClassName="block text-[11px] text-clay/80 mt-0.5" />
            <span className="block mb-2">
              {BRAND_OF_LINE} Ontario Ministry of Education school number {MINISTRY.bsid}.
            </span>
            © {new Date().getFullYear()} Darul Haya. All rights reserved.
            {' · '}
            <Link href="/privacy" className="inline-block py-1 hover:text-teal-dark transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
