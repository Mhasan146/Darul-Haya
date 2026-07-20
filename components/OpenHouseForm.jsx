'use client'
import { useState } from 'react'

const inputCls =
  'w-full border border-clay/20 rounded-lg px-3 py-2.5 text-sm text-clay bg-white focus:outline-none focus:ring-2 focus:ring-teal/30'

const GRADES = ['Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Not sure']

// Open house RSVP. Posts to /api/open-house, which emails the school via Resend
// (the reliable pipeline) — the same one the contact form uses.
export default function OpenHouseForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', grade: '', company: '' })
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
        <p className="text-teal font-bold text-lg">You&rsquo;re on the list</p>
        <p className="text-clay/80 text-sm mt-1">
          We&rsquo;ll message you on WhatsApp with the join link and a reminder before the session.
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
        <label htmlFor="oh-name" className="block text-xs font-semibold text-clay/80 mb-1">Your name *</label>
        <input id="oh-name" type="text" required value={form.name} onChange={set('name')} placeholder="Your name" className={inputCls} />
      </div>
      <div>
        <label htmlFor="oh-email" className="block text-xs font-semibold text-clay/80 mb-1">Email *</label>
        <input id="oh-email" type="email" required value={form.email} onChange={set('email')} placeholder="you@email.com" className={inputCls} />
      </div>
      <div>
        <label htmlFor="oh-phone" className="block text-xs font-semibold text-clay/80 mb-1">WhatsApp number *</label>
        <input id="oh-phone" type="tel" required value={form.phone} onChange={set('phone')} placeholder="+1 (416) 555-1234" className={inputCls} />
        <p className="text-[11px] text-clay/60 mt-1">We&rsquo;ll send the join link here — the open house is held over WhatsApp video.</p>
      </div>
      <div>
        <label htmlFor="oh-grade" className="block text-xs font-semibold text-clay/80 mb-1">Child&rsquo;s grade <span className="font-normal">(optional)</span></label>
        <select id="oh-grade" value={form.grade} onChange={set('grade')} className={inputCls}>
          <option value="">Select a grade</option>
          {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      {error && <p role="alert" className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-1 w-full py-3 rounded-xl bg-clay text-white font-semibold text-sm hover:bg-clay/90 transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Saving your spot…' : 'Save my spot'}
      </button>
      <p className="text-center text-[10px] text-clay/60">Free · no commitment · we&rsquo;ll only use your details for the open house.</p>
    </form>
  )
}
