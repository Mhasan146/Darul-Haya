import './globals.css'
import Link from 'next/link'
import { Playfair_Display, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileApplyBar from '@/components/MobileApplyBar'
import LeadPopup from '@/components/LeadPopup'
import ScrollReveal from '@/components/ScrollReveal'
import CookieConsent from '@/components/CookieConsent'
import HijriDate from '@/components/HijriDate'

// Google Analytics 4 — set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) in your
// hosting env to enable. When unset, no GA script and no cookie banner load.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = (process.env.NEXT_PUBLIC_APP_URL || 'https://darulhaya.com').replace(/\/+$/, '')
const TITLE = 'Darul Haya — Online School for Grades 3–8 | Live Classes & Homeschooling'
const DESCRIPTION =
  'Darul Haya is an online Islamic school for boys and girls in Grades 3–8 — live, teacher-led classes every day, Arabic, and an Ontario-aligned curriculum. A structured, faith-centered alternative to homeschooling, all from the comfort of home. Enrolling now for September 2026.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Darul Haya Online School',
  },
  description: DESCRIPTION,
  keywords: [
    'online school',
    'online Islamic school',
    'homeschool',
    'homeschooling',
    'online homeschool',
    'online homeschool program',
    'Muslim homeschool',
    'homeschool alternative',
    'Muslim online school',
    'virtual school Canada',
    'Ontario online school',
    'live online classes Grades 3-8',
    'online school for Muslim kids',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Darul Haya',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Darul Haya' }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/logo.png'],
  },
}

// Structured data so search engines index Darul Haya as an online school.
const SCHOOL_LD = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'Darul Haya — Academy of Learning',
  alternateName: 'Darul Haya Online Islamic School',
  description: DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: 'info@darulhaya.com',
  areaServed: { '@type': 'Country', name: 'Canada' },
  educationalLevel: 'Grades 3–8',
  keywords: 'online school, online Islamic school, homeschool, homeschooling, online homeschool program, Muslim homeschool, live online classes, Arabic classes, Ontario curriculum',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Prevent flash of unstyled theme on load — runs before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('dh_theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch{}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHOOL_LD) }}
        />
        {/* Google Analytics 4 — starts with consent denied; the cookie banner
            grants analytics_storage only after the visitor accepts. */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});try{if(localStorage.getItem('dh_consent')==='granted'){gtag('consent','update',{analytics_storage:'granted'})}}catch(e){}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-beige dark:bg-[#0a1f1d] min-h-screen">
        {/* Skip navigation — visible on keyboard focus */}
        <nav
          aria-label="Skip navigation"
          className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:top-3 focus-within:left-3 focus-within:z-[100] focus-within:flex focus-within:gap-2"
        >
          {[
            { href: '#main-content', label: 'Skip to content' },
            { href: '#pricing',      label: 'Skip to pricing' },
            { href: '#faq',          label: 'Skip to FAQ' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="bg-clay text-white px-4 py-2 rounded-lg font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-amber"
            >
              {label}
            </a>
          ))}
        </nav>

        <header>
          {/* Today's date — Hijri + Gregorian, pinned at the very top on every screen */}
          <div className="bg-[#0b3a36] text-center text-[11px] sm:text-xs py-1.5 px-4">
            <HijriDate className="text-white/75" hijriClassName="text-white font-medium" />
          </div>
          {/* Announcement banner — update text + date each enrolment cycle */}
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="bg-clay text-white text-center text-xs sm:text-sm py-2 px-4"
          >
            {/* TODO: Update enrolment deadline before each intake — e.g. "September 2027" */}
            <span className="text-amber font-semibold">Enrolment open for September 2026</span>
            {' '}— seats fill quickly.{' '}
            <Link href="/register" className="underline underline-offset-2 hover:text-amber transition-colors">
              Apply Now <span aria-hidden="true">→</span>
            </Link>
          </div>

          <Navbar />
        </header>
        <main id="main-content">{children}</main>
        <ScrollReveal />
        <MobileApplyBar />
        <WhatsAppButton />
        <LeadPopup />
        {GA_ID && <CookieConsent />}
      </body>
    </html>
  )
}
