import './globals.css'
import Link from 'next/link'
import { Playfair_Display, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileApplyBar from '@/components/MobileApplyBar'
import LeadPopup from '@/components/LeadPopup'
import ScrollReveal from '@/components/ScrollReveal'

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

const SITE_URL = (process.env.NEXT_PUBLIC_APP_URL || 'https://darulhaya.org').replace(/\/+$/, '')
const TITLE = 'Darul Haya UK — Online School for Years 4–9 | Live Classes & Home Education'
const DESCRIPTION =
  'Darul Haya UK is an online Islamic school for boys and girls in Years 4–9 — live, teacher-led classes every day, Arabic, and a National Curriculum–aligned programme. A structured, faith-centred alternative to home education, all from the comfort of home. Enrolling now for September 2026.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Darul Haya Online School',
  },
  description: DESCRIPTION,
  keywords: [
    'online school UK',
    'online Islamic school UK',
    'home education',
    'home schooling UK',
    'online home education',
    'online home education programme',
    'Muslim home education',
    'home education alternative',
    'Muslim online school',
    'virtual school UK',
    'National Curriculum online school',
    'live online classes Years 4-9',
    'online school for Muslim kids UK',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Darul Haya UK',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Darul Haya UK' }],
    locale: 'en_GB',
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
  name: 'Darul Haya UK — Academy of Learning',
  alternateName: 'Darul Haya UK Online Islamic School',
  description: DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: 'info@darulhaya.org',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  educationalLevel: 'Years 4–9',
  keywords: 'online school UK, online Islamic school, home education, home schooling, online home education programme, Muslim home education, live online classes, Arabic classes, National Curriculum',
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
      </head>
      <body className="bg-beige dark:bg-[#1B1C21] min-h-screen">
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
      </body>
    </html>
  )
}
