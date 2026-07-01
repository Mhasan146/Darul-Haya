'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { WHATSAPP_URL } from '@/lib/siteConfig'

const STORAGE_KEY = 'dh_lead_popup'
const SUPPRESS_DAYS = 14
const GRADES = ['Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Not sure']

function shouldShow() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return true
    const { ts } = JSON.parse(raw)
    return Date.now() - ts > SUPPRESS_DAYS * 24 * 60 * 60 * 1000
  } catch { return true }
}

function suppress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now() })) } catch {}
}

export default function LeadPopup() {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', grade: '', honeypot: '' })
  const triggered = useRef(false)
  const dialogRef = useRef(null)

  const trigger = useCallback(() => {
    if (triggered.current || !shouldShow()) return
    triggered.current = true
    setVisible(true)
  }, [])

  // Triggers: 30s, 50% scroll, exit-intent (desktop only)
  useEffect(() => {
    const timer = setTimeout(trigger, 30_000)

    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (pct >= 0.5) trigger()
    }

    const onMouseLeave = (e) => { if (e.clientY <= 0) trigger() }

    window.addEventListener('scroll', onScroll, { passive: true })
    if (window.innerWidth >= 1024) document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [trigger])

  // ESC to close + Tab focus trap (keeps keyboard focus inside the dialog)
  useEffect(() => {
    if (!visible) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        close()
        return
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [visible])

  // Focus dialog on open
  useEffect(() => {
    if (visible) dialogRef.current?.focus()
  }, [visible])

  // Lock body scroll on desktop modal
  useEffect(() => {
    if (visible && window.innerWidth >= 1024) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [visible])

  function close() { setVisible(false); suppress() }

  function set(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (form.honeypot) return
    if (!form.name.trim() || !form.email.trim()) return setError('Please fill in your name and email.')
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return setError('Please enter a valid email address.')

    setError('')
    setLoading(true)
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'darul-haya-lead',
          'bot-field': form.honeypot,
          name: form.name,
          email: form.email,
          phone: form.phone,
          grade: form.grade,
          source: 'popup',
          page_url: window.location.href.slice(0, 500).replace(/[<>"']/g, ''),
        }).toString(),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      suppress()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop — dimmed on desktop, invisible on mobile */}
      <div
        className="fixed inset-0 z-50 lg:bg-black/40"
        onClick={close}
        aria-hidden="true"
      />

      {/* Panel — slide-up banner on mobile, centered modal on desktop */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Questions about enrolment?"
        tabIndex={-1}
        className="fixed z-50 outline-none focus:outline-none
          bottom-0 left-0 right-0 rounded-t-2xl
          lg:inset-auto lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-2xl lg:w-full lg:max-w-md
          bg-beige shadow-2xl border border-clay/10 p-6"
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-clay/60 hover:text-clay text-lg leading-none"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <p className="text-3xl mb-3">🤍</p>
            <p className="font-bold text-clay text-lg">Jazak Allahu khairan</p>
            <p className="text-clay/60 text-sm mt-1">We'll be in touch shortly.</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-clay mb-1 pr-6">Questions about enrolment?</h2>
            <p className="text-clay/60 text-sm mb-5">
              Reach us on WhatsApp, or leave your details and we'll be in touch.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-teal text-white font-semibold text-sm mb-4 hover:bg-teal-dark transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.345.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Chat on WhatsApp
            </a>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-clay/10" />
              <span className="text-clay/60 text-xs">or leave your details</span>
              <div className="flex-1 h-px bg-clay/10" />
            </div>

            <form onSubmit={handleSubmit} noValidate data-netlify="true" data-netlify-recaptcha="true" name="darul-haya-lead">
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                name="bot-field"
                value={form.honeypot}
                onChange={set('honeypot')}
                className="hidden"
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="flex flex-col gap-3">
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-semibold text-clay/60 mb-1">Name *</label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Your name"
                    className="w-full border border-clay/20 rounded-lg px-3 py-2 text-sm text-clay bg-white focus:outline-none focus:ring-2 focus:ring-teal/30"
                  />
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-xs font-semibold text-clay/60 mb-1">Email *</label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    placeholder="your@email.com"
                    className="w-full border border-clay/20 rounded-lg px-3 py-2 text-sm text-clay bg-white focus:outline-none focus:ring-2 focus:ring-teal/30"
                  />
                </div>

                <div>
                  <label htmlFor="lead-phone" className="block text-xs font-semibold text-clay/60 mb-1">Phone / WhatsApp <span className="font-normal">(optional)</span></label>
                  <input
                    id="lead-phone"
                    type="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="+1 (416) 555-1234"
                    className="w-full border border-clay/20 rounded-lg px-3 py-2 text-sm text-clay bg-white focus:outline-none focus:ring-2 focus:ring-teal/30"
                  />
                </div>

                <div>
                  <label htmlFor="lead-grade" className="block text-xs font-semibold text-clay/60 mb-1">Child's Grade <span className="font-normal">(optional)</span></label>
                  <select
                    id="lead-grade"
                    value={form.grade}
                    onChange={set('grade')}
                    className="w-full border border-clay/20 rounded-lg px-3 py-2 text-sm text-clay bg-white focus:outline-none focus:ring-2 focus:ring-teal/30"
                  >
                    <option value="">Select a grade</option>
                    {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              </div>

              <div data-netlify-recaptcha="true" className="mt-3" />

              {error && <p className="text-red-500 text-xs mt-3" role="alert">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full py-2.5 rounded-xl bg-amber text-clay font-semibold text-sm hover:bg-amber/90 transition-colors disabled:opacity-50"
              >
                {loading ? 'Sending…' : 'Send my details'}
              </button>

              <p className="text-center text-[10px] text-clay/60 mt-3">
                We'll only use this to contact you about admissions.
              </p>
            </form>
          </>
        )}
      </div>
    </>
  )
}
