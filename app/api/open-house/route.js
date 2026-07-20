import { NextResponse } from 'next/server'
import { sendOpenHouseEmail } from '@/lib/email'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

// Best-effort, in-memory rate limit (per warm serverless instance).
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60 * 1000
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
  const phone = (body.phone || '').trim()
  const grade = (body.grade || '').trim()
  const session = (body.session || '').trim().slice(0, 60)

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Please add your name, email, and WhatsApp number.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (name.length > 120 || phone.length > 40 || grade.length > 40) {
    return NextResponse.json({ error: 'That doesn’t look right — please check your details.' }, { status: 400 })
  }

  try {
    const { error } = await sendOpenHouseEmail({ name, email, phone, grade, session })
    if (error) {
      return NextResponse.json({ error: 'Could not save your spot right now. Please try again.' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Could not save your spot right now. Please try again.' }, { status: 500 })
  }
}
