import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

// Best-effort, in-memory rate limit. Caps bursts on a warm serverless instance
// (not a hard guarantee across instances, but a cheap barrier against spam).
const RATE_LIMIT = 5 // submissions
const RATE_WINDOW_MS = 60 * 1000 // per minute, per IP
const hits = new Map()

function isRateLimited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > RATE_LIMIT
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: bots fill the hidden "company" field. Pretend success, send nothing.
  if (body.company) {
    return NextResponse.json({ ok: true })
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 })
  }

  const name = (body.name || '').trim()
  const email = (body.email || '').trim()
  const message = (body.message || '').trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Please fill in all fields.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 })
  }

  try {
    const { error } = await sendContactEmail({ name, email, message })
    if (error) {
      return NextResponse.json({ error: 'Could not send right now. Please try again.' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Could not send right now. Please try again.' }, { status: 500 })
  }
}
