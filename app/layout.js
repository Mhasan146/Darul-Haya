import './globals.css'
import Link from 'next/link'
import { Playfair_Display, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileApplyBar from '@/components/MobileApplyBar'
import LeadPopup from '@/components/LeadPopup'
import ScrollReveal from '@/components/ScrollReveal'
import CookieConsent from '@/components/CookieConsent'

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
// Keep TITLE under ~60 chars and DESCRIPTION under ~155. Google discards
// over-long meta and writes its own snippet from page text instead — which
// is how a stale, outdated description ends up in the search result.
const TITLE = 'Darul Haya — Online Islamic School for Grades 2–12'
const DESCRIPTION =
  'Online Islamic school for Grades 2–12. Live, teacher-led classes every day, Arabic, and an Ontario-aligned curriculum — all from home.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Darul Haya',
  },
  description: DESCRIPTION,
  // Note: Google ignores the keywords meta entirely; it carries no ranking
  // weight. Kept for other crawlers and for internal reference only — the
  // real signals are the title, description, headings, and structured data.
  keywords: [
    'Islamic school',
    'online Islamic school',
    'Islamic school online',
    'Islamic school Canada',
    'Islamic school Ontario',
    'online school',
    'homeschool',
    'homeschooling',
    'online homeschool program',
    'Muslim homeschool',
    'Muslim online school',
    'virtual school Canada',
    'Ontario online school',
    'live online classes Grades 2-12',
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
// This is where the grade range is stated most explicitly — search engines and
// AI summaries read it directly, and unlike the meta description it isn't
// length-capped, so it can carry the full picture. Keep it in sync with the site.
const SCHOOL_LD = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'Darul Haya — Academy of Learning',
  // Search engines read these name variants directly. Keeping the "Islamic
  // school" phrasing here (and in the page metadata) means the site ranks for
  // it without the words having to appear in the visible page design.
  alternateName: [
    'Darul Haya Online Islamic School',
    'Darul Haya Islamic School',
    'Online Islamic School Canada',
  ],
  description:
    'Darul Haya is an online Islamic school for boys and girls in Grades 2 through 12. Students attend live, teacher-led classes every school day following an Ontario-aligned curriculum, with Arabic in the weekly timetable and physical books shipped to their home. Classes are small and closely supervised. Tuition is $225 per month for Grades 2–8 and $250 per month for Grades 9–12.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: 'info@darulhaya.com',
  areaServed: { '@type': 'Country', name: 'Canada' },
  educationalLevel: 'Grades 2–12 (elementary, middle, and high school)',
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'student',
    audienceType: 'Students in Grades 2 to 12',
  },
  keywords: 'online school, online Islamic school, homeschool, homeschooling, online homeschool program, Muslim homeschool, live online classes, Arabic classes, Ontario curriculum, Grades 2-12',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
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
      <body className="bg-beige min-h-screen">
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
            className="bg-beige-dark text-clay text-center text-xs sm:text-sm py-2 px-4 border-b border-teal/15"
          >
            {/* TODO: Update enrolment deadline before each intake — e.g. "September 2027" */}
            <span className="text-teal-dark font-semibold">Enrolment open for September 2026</span>
            {' '}— seats fill quickly.{' '}
            <Link href="/register" className="font-semibold underline underline-offset-2 hover:text-teal-dark transition-colors">
              Apply Now <span aria-hidden="true">→</span>
            </Link>
          </div>

          <Navbar />
        </header>
        {/* Bottom padding clears the fixed mobile apply bar so the end of the
            page (footer links, copyright) is never hidden behind it. */}
        <main id="main-content" className="pb-20 lg:pb-0">{children}</main>
        <ScrollReveal />
        <MobileApplyBar />
        <WhatsAppButton />
        <LeadPopup />
        {GA_ID && <CookieConsent />}
      </body>
    </html>
  )
}
