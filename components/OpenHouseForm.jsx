'use client'
import { useState } from 'react'

const inputCls =
  'w-full border border-clay/20 rounded-lg px-3 py-2.5 text-sm text-clay bg-white focus:outline-none focus:ring-2 focus:ring-teal/30'

const GRADES = ['Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'Not sure']
const SESSIONS = ['Online (WhatsApp video)', 'In person', 'Either works']

// Open house RSVP. Posts to /api/open-house, which emails the school via Resend
// (the reliable pipeline), the same one the contact form uses.
export default function OpenHouseForm() {
  const [form, setForm] = useState({ session: SESSIONS[0], name: '', email: '', phone: '', grade: '', company: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (form.company) return
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      return setError('Please add your name, email, and WhatsApp number.')
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      return setError('Please enter a valid email address.')
    }
    setError('')
    setStatus('sending')
    try {
      const res = await fetch('/api/open-house', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }
      setStatus('sent')
    } catch {
      setError('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 text-center">
        <p className="text-3xl mb-2" aria-hidden="true">🤍</p>
        <p className="text-teal-dark font-bold text-lg">You are registered!</p>
        <p className="text-clay/80 text-sm mt-1">
          Check your email and WhatsApp for session access links.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={set('company')}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="oh-session" className="block text-xs font-semibold text-clay/80 mb-1">Select Session *</label>
        <select id="oh-session" value={form.session} onChange={set('session')} className={inputCls}>
          {SESSIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="oh-name" className="block text-xs font-semibold text-clay/80 mb-1">Your Name *</label>
        <input id="oh-name" type="text" required value={form.name} onChange={set('name')} placeholder="Your name" className={inputCls} />
      </div>
      <div>
        <label htmlFor="oh-email" className="block text-xs font-semibold text-clay/80 mb-1">Email *</label>
        <input id="oh-email" type="email" required value={form.email} onChange={set('email')} placeholder="you@email.com" className={inputCls} />
      </div>
      <div>
        <label htmlFor="oh-phone" className="block text-xs font-semibold text-clay/80 mb-1">WhatsApp Number *</label>
        <input id="oh-phone" type="tel" required value={form.phone} onChange={set('phone')} placeholder="+1 (416) 555-1234" className={inputCls} />
        <p className="text-[11px] text-clay/80 mt-1">We will send meeting links and calendar reminders to this number.</p>
      </div>
      <div>
        <label htmlFor="oh-grade" className="block text-xs font-semibold text-clay/80 mb-1">Child&rsquo;s Grade <span className="font-normal">(optional)</span></label>
        <select id="oh-grade" value={form.grade} onChange={set('grade')} className={inputCls}>
          <option value="">Select a grade</option>
          {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      {error && <p role="alert" className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-1 w-full py-3 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal-dark transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Saving your spot…' : 'Reserve My Free Spot Now'}
      </button>
      <p className="text-center text-[10px] text-clay/80">100% free with zero obligation. Your information remains completely private.</p>
    </form>
  )
}
