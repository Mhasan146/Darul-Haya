import { Resend } from 'resend'

const DEFAULT_FROM = process.env.FROM_EMAIL || 'noreply@darulhaya.com'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export async function sendEmail({ to, subject, html, from = DEFAULT_FROM }) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  return resend.emails.send({
    from: `Darul Haya <${from}>`,
    to,
    subject,
    html,
  })
}

/**
 * Branded welcome email — sent when a family joins Darul Haya.
 */
export async function sendWelcomeEmail({ to, name, from }) {
  const firstName = (name || '').trim().split(/\s+/)[0] || 'there'
  return sendEmail({
    to,
    from,
    subject: 'Welcome to Darul Haya 🌙',
    html: welcomeEmailHtml({ firstName }),
  })
}

/**
 * Sends a contact-form submission to the school inbox (CONTACT_EMAIL).
 */
export async function sendContactEmail({ name, email, message }) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_EMAIL || DEFAULT_FROM
  return resend.emails.send({
    from: `Darul Haya Website <${DEFAULT_FROM}>`,
    to,
    replyTo: email,
    subject: `New website message from ${name}`,
    html: `<div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;color:#134E4A">
      <h2 style="color:#0D9488">New message from the website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin-top:16px"><strong>Message:</strong></p>
      <p style="white-space:pre-line;background:#FCF8F4;border-radius:8px;padding:16px">${escapeHtml(message)}</p>
    </div>`,
  })
}

/**
 * Sends an online open house RSVP to the school inbox (CONTACT_EMAIL).
 */
export async function sendOpenHouseEmail({ name, email, phone, grade, session }) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_EMAIL || DEFAULT_FROM
  return resend.emails.send({
    from: `Darul Haya Website <${DEFAULT_FROM}>`,
    to,
    replyTo: email,
    subject: `New open house RSVP from ${name}${session ? ` (${session})` : ''}`,
    html: `<div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;color:#134E4A">
      <h2 style="color:#0D9488">New open house RSVP</h2>
      <p><strong>Session:</strong> ${escapeHtml(session || '—')}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone || '—')}</p>
      <p><strong>Child&rsquo;s grade:</strong> ${escapeHtml(grade || '—')}</p>
      <p style="margin-top:16px;color:#475a57">Send this family the details for their chosen session.</p>
    </div>`,
  })
}

function escapeHtml(str = '') {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  )
}

// ─── Templates ───────────────────────────────────────────────────────────────

function welcomeEmailHtml({ firstName }) {
  const aqua = '#0D9488'
  const ink = '#134E4A'
  const cream = '#FCF8F4'
  const year = new Date().getFullYear()

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:${cream};font-family:Arial,Helvetica,sans-serif;color:${ink};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${cream};padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
            <tr>
              <td style="background:${aqua};padding:28px 32px;text-align:center;">
                <div style="color:#ffffff;font-size:22px;font-weight:bold;letter-spacing:2px;">DARUL HAYA</div>
                <div style="color:rgba(255,255,255,0.85);font-size:11px;letter-spacing:3px;text-transform:uppercase;margin-top:4px;">Academy of Learning</div>
              </td>
            </tr>
            <tr>
              <td style="padding:36px 32px;">
                <h1 style="margin:0 0 16px;font-size:22px;color:${ink};">Welcome, ${firstName}! 🌙</h1>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#475a57;">
                  We're so glad your family is joining Darul Haya. You've taken a
                  wonderful step toward a structured, faith-centered education for your child.
                </p>
                <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#475a57;">
                  Here's what's next: choose your plan, and we'll get your child set up with their
                  classes and materials.
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border-radius:999px;background:${aqua};">
                      <a href="${APP_URL}/#pricing" style="display:inline-block;padding:12px 28px;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:999px;">View Plans &rarr;</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;border-top:1px solid #eeeeee;text-align:center;">
                <p style="margin:0;font-size:12px;color:#9aa6a4;">Faith &bull; Knowledge &bull; Character</p>
                <p style="margin:6px 0 0;font-size:12px;color:#9aa6a4;">&copy; ${year} Darul Haya. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
