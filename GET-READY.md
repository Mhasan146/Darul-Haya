# Darul Haya — Get‑Ready Checklist

Everything you need to gather, decide, and set up on your end to take Darul Haya
from "looks great locally" to "real, paying students enrolling."

This is written in plain English — no coding required from you. Your job is to
**create the accounts, copy a few keys, and make a handful of decisions**. The
code wiring is my job (see the last section).

---

## 📍 Where things stand today

**✅ Already built & working**
- The public website (home page, your logo, your color scheme)
- Sign‑up and log‑in screens
- The database design (accounts, roles, subscriptions)
- The admin "User Management" screen (layout)

**🛠️ Still needs to be built (my side — see last section)**
- The checkout flow ("Get Started" → Stripe payment)
- The automatic pipeline after payment: create the student's Moodle login,
  invite them to Skool, flip their account to active
- The member **Dashboard** page
- The data behind the Admin screen
- Automatic welcome / receipt emails

**📋 Needs you (this checklist)**
- Sign up for 5 services and copy their keys
- Build your actual course content in Moodle
- Pick a domain name and a few settings

> ⏱️ Realistically, gathering everything below is a few hours of account setup
> spread across a week (Moodle course content is the longest part).

---

## ✅ Your checklist

Do these roughly in order — each one builds on the last. Tick the boxes as you go.

### 1. Supabase — accounts & database  *(do this first)*
This is the foundation: it stores every user, their role, and subscription
status. **The login/sign‑up screens won't actually work until this is connected.**

- [ ] Go to **supabase.com** → create a free account → **New Project**
- [ ] Give it a name (e.g. "darul-haya"), set a strong database password, pick a region close to your students
- [ ] Once it's created, open **Project Settings → API** and copy these three values:

| What to copy | Goes into the setting named | Secret? |
|---|---|---|
| Project URL | `NEXT_PUBLIC_SUPABASE_URL` | No |
| `anon` / public key | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No |
| `service_role` key | `SUPABASE_SERVICE_ROLE_KEY` | **YES — keep secret** |

- [ ] Set up the database tables: open the Supabase **SQL Editor**, then run the
  two files in this project, in order:
  `supabase/migrations/001_schema.sql`, then `supabase/migrations/002_rls.sql`
  *(I can do this step with you in one click — just ask.)*

---

### 2. Stripe — payments
Handles the $67 and $300 monthly subscriptions.

- [ ] Go to **stripe.com** → create your business account
- [ ] **Start in Test Mode** (toggle, top‑right) so we can test without real money
- [ ] Create **two products** under **Products → Add product**, each as a
  **recurring / monthly** price:
  - [ ] "Homeschooling Portal" — **$67 / month** → copy its **Price ID** → `STRIPE_HOMESCHOOL_PRICE_ID`
  - [ ] "Full‑Live Schooling" — **$300 / month** → copy its **Price ID** → `STRIPE_FULL_PRICE_ID`
    *(a Price ID looks like `price_1Abc...`)*
- [ ] From **Developers → API keys**, copy the **Secret key** → `STRIPE_SECRET_KEY` **(secret!)**
- [ ] ⏳ `STRIPE_WEBHOOK_SECRET` — **leave this for later.** It can only be created
  after I've built the payment webhook and the site has a live address. We'll do it together then.

---

### 3. Moodle — the actual classes & curriculum
This is where your lessons, live classes, and materials live. Students get an
account here automatically after they pay.

- [ ] Get a Moodle site if you don't have one (e.g. **moodlecloud.com**, or self‑hosted)
- [ ] Build your two courses inside Moodle:
  - [ ] One for **Full‑Live** students
  - [ ] One for **Homeschooling** families
- [ ] Copy each course's **ID number** (it's in the course's URL, e.g. `id=4`):
  - [ ] Full‑Live course ID → `MOODLE_COURSE_FULL`
  - [ ] Homeschool course ID → `MOODLE_COURSE_HOMESCHOOL`
- [ ] Copy your Moodle web address → `MOODLE_BASE_URL` (e.g. `https://yourschool.moodlecloud.com`)
- [ ] Turn on the connection ("web services") and create an access token:
  *Site administration → Server → Web services → enable, then create a token.*
  The token needs permission for these actions (give this list to whoever sets up Moodle):
  `core_user_create_users`, `enrol_manual_enrol_users`, `core_user_update_users`
  - [ ] Token → `MOODLE_TOKEN` **(secret!)**

---

### 4. Skool — parent/student community
Members get invited to your private Skool group automatically.

- [ ] Create your Skool group at **skool.com**
- [ ] Copy the public group link (e.g. `https://www.skool.com/your-group`) → `NEXT_PUBLIC_SKOOL_GROUP_URL`
- [ ] Find your **Group ID** → `SKOOL_GROUP_ID`
- [ ] Get an **API key** → `SKOOL_API_KEY` **(secret!)**
- [ ] ⚠️ **Please confirm Skool gives you API access.** Skool's official public API
  is limited and may not be available on every plan. If it isn't, tell me — the
  community link still works on the site; only the *automatic* invitations would
  need a different approach (e.g. a manual invite or a Zapier step).

---

### 5. Resend — automatic emails
Sends welcome emails, receipts, and Moodle login details.

- [ ] Sign up at **resend.com** (free tier is plenty to start)
- [ ] Copy your **API key** → `RESEND_API_KEY` **(secret!)**
- [ ] Decide the "from" address emails are sent from → `FROM_EMAIL`
  (e.g. `noreply@darulhaya.com`)
- [ ] To send from your own domain, Resend will ask you to add a few DNS records
  at your domain registrar — they walk you through it. *(For early testing we can
  use Resend's built‑in test domain.)*

---

### 6. Domain name & going live
- [ ] Decide your web address (e.g. **darulhaya.com**) and buy it if you haven't
  (Namecheap, Cloudflare, GoDaddy, etc.)
- [ ] We'll deploy the site (I recommend **Vercel** — free to start, made for this kind of site)
- [ ] Your final web address → `NEXT_PUBLIC_APP_URL` (e.g. `https://darulhaya.com`)
  *(it stays `http://localhost:3000` while we build/test)*

---

## 🧩 Decisions I need from you

- [ ] **Pricing** — confirm **$67/mo** (Homeschool) and **$300/mo** (Full‑Live), or tell me new numbers
- [ ] **Free trial?** Do you want a free trial period or discount codes? (Stripe supports both)
- [ ] **Sender email & business name** for emails and receipts
- [ ] **Who are the admins?** Which email addresses should have admin access to manage users
- [ ] **Refund / cancellation policy** wording (we should add a short page for this)
- [ ] **Test first, then go live?** I recommend we get the whole flow working in
  Stripe *test mode* with fake cards before switching on real payments. 👍

---

## 🔐 Where the keys go (and keeping them safe)

All of these values live in **one file** in the project:

```
C:\Users\hasan\darul-haya\.env.local
```

It already exists with placeholder values. As you collect each real value, it
replaces the matching placeholder.

**About the "secret!" items above** (service_role key, Stripe secret key, Moodle
token, Skool & Resend keys): treat these like passwords.
- The safest way to hand them to me is to **paste them straight into that
  `.env.local` file** yourself, rather than into the chat.
- Never post them publicly or commit them to GitHub (this file is already set up
  to be ignored by version control).
- The values marked **"No"** in the secret column (the `NEXT_PUBLIC_…` ones) are
  safe to share normally — they're meant to be visible in the browser.

> Tip: you don't need everything at once. Even just **Supabase (#1)** makes
> sign‑up and login fully functional. We can switch the rest on one at a time.

---

## 🛠️ What I'll build once you've gathered these

So you know exactly what "my side" covers:

1. **Checkout** — the "Get Started" buttons create a real Stripe payment page
2. **Payment webhook** — when someone pays, automatically:
   - create their Moodle login and enroll them in the right course
   - invite them to the Skool community
   - mark their account active and set their role (Full‑Live vs Homeschool)
   - email them a welcome message with their login details
3. **Member Dashboard** — the page students/parents see after logging in
   (links to Moodle, recordings, community, billing)
4. **Admin data** — make the User Management screen actually load and edit users
5. **Cancellations** — when a subscription ends, suspend their Moodle/Skool access
6. **A few extras** — refund/cancellation policy page, shrink the logo file for faster loading, set the logo as the browser‑tab icon

---

### 👉 Suggested first step
Knock out **#1 (Supabase)** and tell me when the keys are in `.env.local` — I'll
run the database setup with you and you'll have a fully working sign‑up/login the
same day. Then we'll move down the list together.
