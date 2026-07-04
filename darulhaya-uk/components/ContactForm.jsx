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
        <p className="text-clay/80 text-sm mt-1">We've received your message and will get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-describedby="contact-required-note">
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
      <p id="contact-required-note" className="text-xs text-clay/80 -mb-1">
        Fields marked <span aria-hidden="true" className="text-teal">*</span>
        <span className="sr-only"> with an asterisk</span> are required.
      </p>
      <div>
        <label htmlFor="contact-name" className="text-sm font-medium text-clay/80 block mb-1">
          Name <span aria-hidden="true" className="text-teal">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          className={inputCls}
          value={form.name}
          onChange={update('name')}
          required
          aria-required="true"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-clay/80 block mb-1">
          Email <span aria-hidden="true" className="text-teal">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className={inputCls}
          value={form.email}
          onChange={update('email')}
          required
          aria-required="true"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-clay/80 block mb-1">
          Message <span aria-hidden="true" className="text-teal">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          className={`${inputCls} min-h-[130px] resize-y`}
          value={form.message}
          onChange={update('message')}
          required
          aria-required="true"
          placeholder="How can we help your family?"
        />
      </div>

      {error && (
        <p id="contact-error" role="alert" aria-live="assertive" className="text-red-600 text-sm">
          {error}
        </p>
      )}

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
