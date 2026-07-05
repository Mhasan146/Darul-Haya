# 🚀 Launch Checklist — darulhaya.com

Everything needed to take the site live. The **code is deploy-ready** (`npm run
build` passes); the remaining work is mostly account setup and DNS that only you
can do. Work top to bottom — the 🔴 items are hard blockers, 🟡 are strongly
recommended, 🟢 are optional polish.

---

## 🔴 Hard blockers — the site won't fully work without these

These are all done in dashboards, not in code.

### 1. DNS — point the domain at Netlify
- [ ] In Netlify: **Site settings → Domain management → Add custom domain** → `darulhaya.com`
- [ ] At your domain registrar, add the DNS records Netlify shows you
      (usually an `A` record to Netlify's load balancer + a `CNAME` for `www`)
- [ ] Wait for DNS to propagate, then let Netlify **provision the SSL certificate**
      (automatic — you just wait for the padlock)

### 2. Environment variables in Netlify
**Site settings → Environment variables.** Copy from `.env.local.example`:

| Variable | Value | Why it matters |
|----------|-------|----------------|
| `RESEND_API_KEY` | `re_...` from resend.com | Contact form emails **silently fail** without it |
| `FROM_EMAIL` | `noreply@darulhaya.com` | Must be on a Resend-verified domain |
| `CONTACT_EMAIL` | `info@darulhaya.com` | Where form submissions are emailed |
| `NEXT_PUBLIC_APP_URL` | `https://darulhaya.com` | Correct sitemap / social-share URLs |
| `NEXT_PUBLIC_MOODLE_URL` | your Moodle/LMS login URL | The "Student Login" button target |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Turns on Google Analytics (see 🟡 below) |

> After adding/changing env vars, **trigger a redeploy** — Netlify only picks
> them up on a new build.

### 3. Resend — verify the sending domain
- [ ] Create a free account at **resend.com**
- [ ] Add domain `darulhaya.com` and add the **SPF + DKIM DNS records** it gives you
- [ ] Wait for Resend to show the domain as **Verified**

Until verified, mail from `noreply@darulhaya.com` won't send (or lands in spam).

### 4. Email inboxes must exist and be monitored
- [ ] `info@darulhaya.com` — where enquiries land
- [ ] `noreply@darulhaya.com` — the "from" address

### 5. Netlify Forms + reCAPTCHA
- [ ] After the first deploy, confirm forms show as **detected** in
      Netlify → **Forms**
- [ ] Submit a real test through the **registration** and **contact** forms and
      confirm the email arrives
- [ ] Confirm the reCAPTCHA challenge appears and passes

---

## 🟡 Strongly recommended before launch

### 6. Google Analytics 4 (code is done — just needs the ID)
The site loads GA + a consent banner automatically once the ID is set.
- [ ] Create a free property at **analytics.google.com** for darulhaya.com
- [ ] Copy the **Measurement ID** (`G-XXXXXXXXXX`)
- [ ] Add it as `NEXT_PUBLIC_GA_ID` in Netlify (see table above) and redeploy
- [ ] Load the live site, click **Accept** on the cookie banner, and confirm a
      visit appears in GA4 **Realtime**

> If you leave `NEXT_PUBLIC_GA_ID` unset, no analytics and no cookie banner load —
> the site still works, you just have no traffic data.

### 7. Final content pass
- [ ] Confirm the announcement banner date (**"Enrolment open for September 2026"**)
      is still correct at launch time
- [ ] Confirm the **WhatsApp number** in `lib/siteConfig.js` (`14374234787`) is right
- [ ] Confirm the value-comparison school fees are current published rates

---

## 🟢 Optional — nice to have, not blockers

- [ ] **Testimonials** — the section auto-hides until a real review is added.
      Replace a placeholder in `app/page.js` (`TESTIMONIALS`) with a real quote
      to switch it on.
- [ ] **Unfinished conversion features** (not required to launch):
      founding-cohort spots bar, animated stat counters, gold-on-navy sticky CTA,
      testimonial carousel
- [ ] **WhatsApp click attribution** — the `siteConfig.js` TODO to route clicks
      through a redirect endpoint for server-side analytics

---

## ✅ Go-live smoke test (do this once, on the live domain)

- [ ] Homepage loads over **https** with a valid certificate
- [ ] `darulhaya.com` and `www.darulhaya.com` both resolve
- [ ] Registration form submits → email received
- [ ] Contact form submits → email received
- [ ] WhatsApp button opens a chat to the correct number
- [ ] Mobile: sticky bottom bar + cookie banner behave correctly
- [ ] `darulhaya.com/sitemap.xml` and `/robots.txt` load with correct URLs
- [ ] GA4 Realtime shows your visit after accepting cookies
