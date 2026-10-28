import './globals.css'
import Link from 'next/link'
import { Playfair_Display, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileApplyBar from '@/components/MobileApplyBar'
import LeadPopup from '@/components/LeadPopup'
import ScrollReveal from '@/components/ScrollReveal'
import CookieConsent from '@/components/CookieConsent'

// Google Analytics 4, set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) in your
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
// over-long meta and writes its own snippet from page text instead, which
// is how a stale, outdated description ends up in the search result.
const TITLE = 'Darul Haya: Premier Online Islamic School (Grades 1-12)'
const SHARE_TITLE = 'Darul Haya: Live Online School for Grades 1 to 12'
const DESCRIPTION =
  'Is your child struggling in overcrowded schools? Darul Haya offers live Ontario curriculum, daily Arabic, and small classes from home. Apply now.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Darul Haya',
  },
  description: DESCRIPTION,
  // Note: Google ignores the keywords meta entirely; it carries no ranking
  // weight. Kept for other crawlers and for internal reference only, the
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
    'live online classes Grades 1-12',
    'online school for Muslim kids',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    // Deliberately not TITLE. This is the line WhatsApp and Facebook print
    // under the preview image, where the search phrasing would be visible
    // writing. The HTML <title> above keeps it for Google.
    title: SHARE_TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Darul Haya',
    // 1200x630 share card. WhatsApp, Facebook, LinkedIn, and iMessage all read
    // this. A square logo gets cropped or shown as a small thumbnail instead of
    // a full-width preview, which is why this is a purpose-built landscape card.
    images: [{ url: '/og-v5.jpg', width: 1200, height: 630, alt: 'Darul Haya, live online school for Grades 1 to 12, an Ontario inspected private school granting OSSD credits' }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SHARE_TITLE,
    description: DESCRIPTION,
    images: ['/og-v5.jpg'],
  },
}

// Structured data so search engines index Darul Haya as an online school.
// This is where the grade range is stated most explicitly, search engines and
// AI summaries read it directly, and unlike the meta description it isn't
// length-capped, so it can carry the full picture. Keep it in sync with the site.
const SCHOOL_LD = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'Darul Haya Academy of Learning',
  // Search engines read these name variants directly. This is where the
  // "Islamic school" phrasing lives, along with the page titles and meta
  // descriptions, so the site ranks for it without the words appearing in
  // the visible page copy. Do not blend these words into the page body:
  // hidden or disguised text breaks Google's spam policy and risks the
  // whole domain being demoted.
  alternateName: [
    'Darul Haya Online Islamic School',
    'Darul Haya Islamic School',
    'Online Islamic School Canada',
  ],
  description:
    'Darul Haya is an online Islamic school for boys and girls in Grades 1 through 12, operating as a brand of LearnHaven Ontario, an inspected private school approved by the Ontario Ministry of Education under school number 885538 and inspected to grant credits toward the Ontario Secondary School Diploma (OSSD). Students attend live, teacher-led classes every school day following an Ontario-aligned curriculum, with Arabic in the weekly timetable and physical books shipped to their home. Classes are small and closely supervised. Tuition is $225 per month for Grades 1-8 and $250 per month for Grades 9-12.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-v2.png`,
  // Darul Haya is a brand of LearnHaven Ontario, and the Ministry
  // registration belongs to LearnHaven, so the school number hangs off the
  // parent and not off Darul Haya. Search engines and AI summaries read
  // this directly, so the attribution has to be right here too.
  parentOrganization: {
    '@type': 'EducationalOrganization',
    name: 'LearnHaven Ontario',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Ontario Ministry of Education school number (BSID)',
      value: '885538',
    },
  },
  email: 'info@darulhaya.com',
  areaServed: { '@type': 'Country', name: 'Canada' },
  educationalLevel: 'Grades 1-12 (elementary, middle, and high school)',
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'student',
    audienceType: 'Students in Grades 1 to 12',
  },
  keywords: 'online school, online Islamic school, homeschool, homeschooling, online homeschool program, Muslim homeschool, live online classes, Arabic classes, Ontario curriculum, Grades 1-12',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHOOL_LD) }}
        />
        {/* Google Analytics 4, starts with consent denied; the cookie banner
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
        {/* Skip navigation, visible on keyboard focus */}
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

        {/* Announcement banner, update text + date each enrolment cycle. Sits
            above the header so it scrolls away while the nav stays pinned. */}
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="bg-beige-dark text-clay text-center text-xs sm:text-sm py-2 px-4 border-b border-teal/15"
          >
            {/* Worded as rolling admission with no fixed month so it cannot go stale
                mid-year. Only the school year needs changing each summer, e.g. "2027-28". */}
            <span className="text-teal-dark font-semibold">Now enrolling for 2026-27, mid-year starts welcome.</span>
            {' '}Protect your child&rsquo;s education today.{' '}
            <Link href="/register" className="font-semibold underline underline-offset-2 hover:text-teal-dark transition-colors">
              Claim Your Spot <span aria-hidden="true">→</span>
            </Link>
          </div>

        {/* The header is the sticky element. The nav used to be sticky inside a
            header that only wrapped itself and the banner, so it could never
            stick past its own parent and scrolled off with the page. */}
        <header className="sticky top-0 z-40">
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
