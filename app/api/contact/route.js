import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
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
