'use client'
import { useState, useRef } from 'react'

// "The Darul Haya Advantage" section.
// The heading promises the END of morning chaos, so the section is built as a
// before/after switch rather than a flat feature grid: the same five parts of a
// family's day, shown as they are now and as they are with Darul Haya.

const ICONS = {
  clock: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286Z" />,
  pace: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />,
  eye: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />,
  calendar: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />,
}

// One row per part of the day. The label stays fixed across both states so the
// before/after pairing is obvious; only the story underneath changes.
const ROWS = [
  {
    label: 'The morning run',
    icon: 'clock',
    now: '6:40am alarm. Lunches packed in a rush, boots and coats by the door, ice scraped off the windshield, then 25 minutes of traffic each way. Two hours of your day gone before work even starts.',
    dh: '8:20am. Breakfast at your own table. Logged in and learning by 8:30. The commute is a staircase, and the gas money stays in your account.',
  },
  {
    label: 'Who they sit with',
    icon: 'shield',
    now: 'You drop them off and hope. The name-calling, the group chat, the kid who shoves them in the hallway: you hear about it weeks later, if you hear about it at all.',
    dh: 'A small class, the same faces every day, and a teacher watching the whole room. No unmonitored chats, no hallways, no cliques forming out of sight.',
  },
  {
    label: 'Keeping up',
    icon: 'pace',
    now: 'Thirty children, one teacher. If your child gets lost in week two, you often find out at the report card in week ten.',
    dh: 'A group small enough that a teacher sees the confused face and stops right there. Gaps get closed the day they appear, not the term after.',
  },
  {
    label: 'What they are taught',
    icon: 'eye',
    now: 'A newsletter and a report card. What is actually taught, and what gets discussed in the room, happens behind a door you cannot open.',
    dh: 'Open the parent portal whenever you like. Every lesson, assignment, grade, and attendance mark is sitting there. Nothing behind a closed door.',
  },
  {
    label: 'Your family calendar',
    icon: 'calendar',
    now: 'The school bell owns your schedule. Travel means missed work and catch-up. A sick day means a lost day.',
    dh: 'Every live class is recorded. Travel, appointments, and sick days stop costing your child their place in the lesson.',
  },
]

const TABS = [
  { key: 'now', label: 'Your mornings now' },
  { key: 'dh', label: 'With Darul Haya' },
]

export default function Benefits() {
  const [view, setView] = useState('now')
  const isNow = view === 'now'
  const tabRefs = useRef([])

  // Left/right arrows move between the two tabs, per the tabs keyboard pattern.
  function onKeyDown(e, i) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (i + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length
    setView(TABS[next].key)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="benefits" className="relative overflow-hidden bg-beige-dark border-y border-clay/5 scroll-mt-24">
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-9">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">
            The Darul Haya Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-clay">
            The end of morning chaos and classroom peer pressure
          </h2>
          <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
          <p className="mt-5 text-clay/80 leading-relaxed">
            Same five parts of your day. Flip the switch and see what changes.
          </p>
        </div>

        {/* Before / after switch */}
        <div className="flex justify-center mb-10">
          <div
            role="tablist"
            aria-label="Compare a school day now with a school day at Darul Haya"
            className="inline-flex rounded-full bg-white ring-1 ring-clay/10 p-1 shadow-sm"
          >
            {TABS.map((t, i) => (
              <button
                key={t.key}
                ref={(el) => { tabRefs.current[i] = el }}
                role="tab"
                id={`benefits-tab-${t.key}`}
                aria-selected={view === t.key}
                aria-controls="benefits-panel"
                tabIndex={view === t.key ? 0 : -1}
                onClick={() => setView(t.key)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`px-5 sm:px-7 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  view === t.key
                    ? t.key === 'now'
                      ? 'bg-clay text-white shadow'
                      : 'bg-teal text-white shadow'
                    : 'text-clay/70 hover:text-clay'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards. Keyed on `view` so the swap animates on each change. */}
        <div
          role="tabpanel"
          id="benefits-panel"
          aria-labelledby={`benefits-tab-${view}`}
          tabIndex={0}
          key={view}
          className="swap-in grid gap-6 sm:grid-cols-2 lg:grid-cols-3 focus:outline-none"
        >
          {ROWS.map((r) => (
            <div
              key={r.label}
              className={`rounded-2xl p-7 transition-colors duration-200 ${
                isNow
                  ? 'bg-white/70 ring-1 ring-clay/10'
                  : 'bg-white ring-1 ring-teal/25 shadow-md'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`h-11 w-11 shrink-0 rounded-xl flex items-center justify-center ${
                    isNow
                      ? 'bg-clay/10 text-clay/45'
                      : 'bg-gradient-to-br from-teal to-teal-dark text-white shadow shadow-teal/25'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-5 w-5">
                    {ICONS[r.icon]}
                  </svg>
                </span>
                <h3 className={`text-xs font-semibold uppercase tracking-widest ${isNow ? 'text-clay/55' : 'text-teal-dark'}`}>
                  {r.label}
                </h3>
              </div>
              <p className={`mt-4 text-sm leading-relaxed ${isNow ? 'text-clay/70' : 'text-clay/80'}`}>
                {isNow ? r.now : r.dh}
              </p>
            </div>
          ))}

          {/* Conversion tile, also completes the 3x2 grid */}
          <div className="rounded-2xl p-7 bg-teal-dark text-white shadow-md shadow-teal/20 flex flex-col justify-center">
            <h3 className="text-xl font-bold leading-snug">
              Ready to experience stress-free, elite education?
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Secure your child&rsquo;s spot in our Fall 2026 intake before registration closes.
            </p>
            <a
              href="#pricing"
              className="mt-5 self-start inline-flex items-center gap-2 bg-white text-clay font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-beige transition-colors"
            >
              View Transparent Plans
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
