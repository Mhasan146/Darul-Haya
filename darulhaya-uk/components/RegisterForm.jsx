'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const inputCls =
  'w-full border border-beige-dark rounded-lg px-4 py-2.5 text-clay text-sm focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal'

const GRADES = ['Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9']

function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

export default function RegisterForm() {
  const [form, setForm] = useState({
    'student-name': '',
    'guardian-name': '',
    email: '',
    phone: '',
    grade: '',
    program: 'Online School (Years 4–9)',
    message: '',
    'bot-field': '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | error
  const [error, setError] = useState('')
  const router = useRouter()

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'registration', ...form }),
      })
      if (!res.ok) throw new Error('Submit failed')
      router.push('/thank-you')
    } catch {
      setError('Sorry — we could not submit your application. Please try again, or email us at info@darulhaya.org.')
      setStatus('idle')
    }
  }

  return (
    <form
      name="registration"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="form-name" value="registration" />

      {/* Spam honeypot — hidden from real users */}
      <p className="hidden" aria-hidden="true">
        <label>
          Leave this empty:
          <input name="bot-field" value={form['bot-field']} onChange={update('bot-field')} tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor="student-name" className="text-sm font-medium text-clay/80 block mb-1">
          Student's full name <span className="text-teal">*</span>
        </label>
        <input id="student-name" name="student-name" className={inputCls} value={form['student-name']} onChange={update('student-name')} required placeholder="Student's name" />
      </div>

      <div>
        <label htmlFor="guardian-name" className="text-sm font-medium text-clay/80 block mb-1">
          Parent / guardian name <span className="text-teal">*</span>
        </label>
        <input id="guardian-name" name="guardian-name" className={inputCls} value={form['guardian-name']} onChange={update('guardian-name')} required placeholder="Your name" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-clay/80 block mb-1">
            Email <span className="text-teal">*</span>
          </label>
          <input id="email" type="email" name="email" className={inputCls} value={form.email} onChange={update('email')} required placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-clay/80 block mb-1">Phone</label>
          <input id="phone" type="tel" name="phone" className={inputCls} value={form.phone} onChange={update('phone')} placeholder="(optional)" />
        </div>
      </div>

      <div>
        <label htmlFor="grade" className="text-sm font-medium text-clay/80 block mb-1">Student's year group</label>
        <select id="grade" name="grade" className={inputCls} value={form.grade} onChange={update('grade')}>
          <option value="">Select…</option>
          {GRADES.map((g) => <option key={g}>{g}</option>)}
        </select>
      </div>
      {/* Program is fixed (online school only) — submitted as a hidden field for the notification email */}
      <input type="hidden" name="program" value={form.program} />

      <div>
        <label htmlFor="message" className="text-sm font-medium text-clay/80 block mb-1">Anything we should know?</label>
        <textarea id="message" name="message" rows={4} className={`${inputCls} resize-y`} value={form.message} onChange={update('message')} placeholder="Questions, your child's needs, anything helpful…" />
      </div>

      <div data-netlify-recaptcha="true" />

      {error && <p role="alert" className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-amber text-clay py-3 rounded-full font-semibold text-sm hover:bg-amber-dark transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Submitting…' : 'Submit application'}
      </button>
    </form>
  )
}
