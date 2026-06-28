'use client'
import { useState } from 'react'

const inputCls =
  'w-full border border-beige-dark rounded-lg px-4 py-2.5 text-clay text-sm focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
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
      <div className="rounded-xl border border-teal/30 bg-teal/5 p-6 text-center">
        <p className="text-teal font-semibold">Thank you for reaching out! 🌙</p>
        <p className="text-clay/60 text-sm mt-1">We've received your message and will get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot — hidden from real users; bots that fill it are rejected */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={update('company')}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div>
        <label className="text-sm font-medium text-clay/70 block mb-1">Name</label>
        <input className={inputCls} value={form.name} onChange={update('name')} required placeholder="Your name" />
      </div>
      <div>
        <label className="text-sm font-medium text-clay/70 block mb-1">Email</label>
        <input type="email" className={inputCls} value={form.email} onChange={update('email')} required placeholder="you@example.com" />
      </div>
      <div>
        <label className="text-sm font-medium text-clay/70 block mb-1">Message</label>
        <textarea className={`${inputCls} min-h-[130px] resize-y`} value={form.message} onChange={update('message')} required placeholder="How can we help your family?" />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-teal text-white py-2.5 rounded-full font-semibold text-sm hover:bg-teal-dark transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
