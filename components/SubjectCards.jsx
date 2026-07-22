'use client'
import { useState } from 'react'

// Front = subject; back = what it covers. Descriptions reflect the public
// Ontario curriculum strands — kept general and accurate.
const SUBJECTS = [
  { name: 'Mathematics', tag: 'Core Subject', back: 'Number sense, algebra, data, and spatial reasoning — aligned to the Ontario curriculum.' },
  { name: 'English Language Arts', tag: 'Core Subject', back: 'Reading, writing, grammar, and oral communication, built on the Ontario language curriculum.' },
  { name: 'Science', tag: 'Core Subject', back: 'Life systems, matter and energy, structures, and earth and space — following Ontario expectations.' },
  { name: 'Social Studies', tag: 'Core Subject', back: 'History, geography, and citizenship through the Ontario social studies curriculum.' },
  { name: 'Arabic', tag: 'Language', back: 'Reading, writing, and conversational Arabic — taught live and woven into the weekly timetable.' },
  { name: 'Character & Values', tag: 'Every Day', back: 'Good character, manners, and values reinforced gently throughout the school day.' },
]

function SubjectCard({ subject }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <button
      type="button"
      // Hover handles desktop; tap toggles on touch (no-hover) devices.
      onClick={() => { if (window.matchMedia('(hover: none)').matches) setFlipped((f) => !f) }}
      aria-label={`${subject.name}. ${subject.back}`}
      className={`flip-card group h-44 w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 ${flipped ? 'is-flipped' : ''}`}
    >
      <div className="flip-inner h-full w-full">
        {/* Front */}
        <div className="flip-face rounded-2xl bg-white border border-beige-dark shadow-md p-6 flex flex-col justify-between text-left">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-teal">{subject.tag}</span>
          <h3 className="font-display text-2xl font-bold text-clay leading-tight">{subject.name}</h3>
          <span className="text-xs text-clay/50 inline-flex items-center gap-1.5">
            What&rsquo;s covered
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 9a8 8 0 0114-3M20 15a8 8 0 01-14 3" />
            </svg>
          </span>
        </div>
        {/* Back */}
        <div className="flip-face flip-back rounded-2xl bg-clay text-white p-6 flex flex-col justify-center text-left">
          <p className="text-sm leading-relaxed text-white/85">{subject.back}</p>
          <span className="mt-3 text-[11px] text-amber font-semibold">Grades 2–9 · Ontario-aligned</span>
        </div>
      </div>
    </button>
  )
}

export default function SubjectCards() {
  return (
    <section id="subjects" className="relative overflow-hidden bg-beige py-20 border-b border-clay/10 scroll-mt-24">
      {/* Curriculum photo backdrop — prominent, with a light wash so the heading
          stays readable and the white subject cards still pop */}
      <div aria-hidden className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: "url('/curriculum.jpg')" }} />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-beige/45 via-beige/30 to-beige/65" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">The Curriculum</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">What your child studies</h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-clay/80 leading-relaxed">A full course load — hover or tap each subject to see what&rsquo;s covered.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SUBJECTS.map((s) => (
            <SubjectCard key={s.name} subject={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
