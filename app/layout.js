import './globals.css'
import Link from 'next/link'
import { Playfair_Display, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import LeadPopup from '@/components/LeadPopup'

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

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://darulhaya.com'
const TITLE = 'Darul Haya — Online School (Grades 3–8)'
const DESCRIPTION =
  'A structured, values-driven education for boys and girls in Grades 3–8 — live, teacher-led classes and a complete curriculum in one safe online classroom.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Darul Haya',
    images: [{ url: '/logo.png', width: 1200, height: 1200, alt: 'Darul Haya' }],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-beige min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:bg-clay focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to content
        </a>
        <div className="bg-clay text-white text-center text-xs sm:text-sm py-2 px-4">
          <span className="text-amber font-semibold">Now enrolling</span> for Grades 3–8 — spaces are limited.{' '}
          <Link href="/register" className="underline underline-offset-2 hover:text-amber transition-colors">Apply today →</Link>
        </div>
        <Navbar />
        <main id="main-content">{children}</main>
        <WhatsAppButton />
        <LeadPopup />
      </body>
    </html>
  )
}
