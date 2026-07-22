'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ThemeToggle'
import HijriDate from '@/components/HijriDate'

// Only render Student Login once the learning platform URL is configured.
// Set NEXT_PUBLIC_MOODLE_URL in Netlify and the link appears automatically.
const MOODLE = process.env.NEXT_PUBLIC_MOODLE_URL

const MENUS = [
  {
    label: 'Overview',
    items: [
      { label: 'About Darul Haya', href: '/about' },
      { label: 'Why Online Schooling', href: '/#benefits' },
      { label: "What's Included", href: '/#features' },
      { label: 'Pricing & Plans', href: '/#pricing' },
    ],
  },
  {
    label: 'Programs & Classes',
    items: [
      { label: 'Our Online School', href: '/programs/full-live' },
      { label: 'Grade Levels', href: '/curriculum#grades' },
      { label: 'Curriculum', href: '/curriculum#islamic' },
    ],
  },
  {
    label: 'Student Services',
    items: [
      ...(MOODLE ? [{ label: 'Student Login', href: MOODLE, external: true }] : []),
      { label: 'Help & Support', href: '/contact' },
    ],
  },
  {
    label: 'Contact Us',
    items: [
      { label: 'Contact & Info', href: '/contact' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Email Us', href: 'mailto:info@darulhaya.com', external: true },
      { label: 'Apply Now', href: '/register' },
    ],
  },
]

const ChevronDown = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.38a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
  </svg>
)

function MenuLink({ item, onClick }) {
  const pathname = usePathname()
  const basePath = item.href.split('#')[0]
  const isActive = !item.external &&
    !item.href.startsWith('/#') &&
    !item.href.startsWith('mailto:') &&
    (pathname === basePath || (basePath.length > 1 && pathname.startsWith(basePath)))
  const cls = `block px-4 py-2.5 text-sm transition-colors ${
    isActive ? 'text-teal font-semibold bg-beige/80' : 'text-clay hover:bg-beige-dark hover:text-teal'
  }`
  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
      {item.label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <Link href={item.href} className={cls} onClick={onClick} aria-current={isActive ? 'page' : undefined}>{item.label}</Link>
  )
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    if (!mobileOpen) return
    const close = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMobileOpen(false)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('touchstart', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('touchstart', close)
    }
  }, [mobileOpen])

  const actions = (stacked = false) => (
    <div className={stacked ? 'flex flex-col gap-2' : 'flex items-center gap-3'}>
      {!stacked && <ThemeToggle />}
      {MOODLE && (
        <a
          href={MOODLE}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="text-sm font-medium text-clay hover:text-teal transition-colors text-center dark:text-white/70 dark:hover:text-white"
        >
          Student Login
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
      <Link
        href="/register"
        onClick={() => setMobileOpen(false)}
        className="text-sm bg-clay text-white px-4 py-2 rounded-full font-semibold hover:bg-clay/80 transition-colors text-center whitespace-nowrap"
      >
        Apply Now
      </Link>
    </div>
  )

  return (
    <nav ref={navRef} aria-label="Main" className="sticky top-0 z-40 bg-beige/85 dark:bg-[#0e2826]/85 backdrop-blur-md border-b border-amber/30 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo + today's date beside it */}
        <div className="flex items-center gap-4 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileOpen(false)} aria-label="Darul Haya — home">
            {/* Teal mark on the light nav; cream (reversed) mark on the dark nav */}
            <Image src="/logo-mark.png" alt="" width={257} height={311} priority className="h-10 w-auto dark:hidden" />
            <Image src="/logo-mark-light.png" alt="" width={257} height={311} priority className="hidden h-10 w-auto dark:block" />
            <span className="font-display text-xl font-bold text-clay tracking-tight leading-none dark:text-white">Darul Haya</span>
          </Link>
          <HijriDate
            stacked
            showWeekday={false}
            className="flex lg:hidden xl:flex shrink-0 border-l border-clay/15 dark:border-white/15 pl-3 sm:pl-4 text-[10px] sm:text-[11px]"
            hijriClassName="text-clay dark:text-white font-semibold whitespace-nowrap"
            gregorianClassName="text-clay/45 dark:text-white/45 whitespace-nowrap"
          />
        </div>

        {/* Desktop menus */}
        <div className="hidden lg:flex items-center gap-1">
          {MENUS.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.label)}
              onMouseLeave={() => setOpenMenu(null)}
              onKeyDown={(e) => { if (e.key === 'Escape') setOpenMenu(null) }}
            >
              <button
                type="button"
                aria-expanded={openMenu === menu.label}
                aria-controls={`nav-${menu.label.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-clay hover:text-teal transition-colors whitespace-nowrap"
              >
                {menu.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === menu.label ? 'rotate-180' : ''}`} />
              </button>
              {/* Always in DOM so aria-controls target always exists */}
              <div
                id={`nav-${menu.label.replace(/\s+/g, '-').toLowerCase()}`}
                hidden={openMenu !== menu.label}
                className="absolute left-0 top-full pt-2 w-56"
              >
                <div className="bg-white rounded-xl shadow-lg ring-1 ring-clay/5 py-2 overflow-hidden">
                  {menu.items.map((item) => (
                    <MenuLink key={item.label} item={item} onClick={() => setOpenMenu(null)} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex">{actions()}</div>
          <button
            type="button"
            className="lg:hidden text-clay p-3 -m-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-panel"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel — always in DOM so aria-controls target always exists */}
      <div
        id="mobile-menu-panel"
        hidden={!mobileOpen}
        className="lg:hidden border-t border-beige-dark bg-beige px-6 py-2"
      >
        {MENUS.map((menu) => (
          <div key={menu.label} className="border-b border-beige-dark/60">
            <button
              type="button"
              aria-expanded={mobileSection === menu.label}
              aria-controls={`mobile-${menu.label.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setMobileSection(mobileSection === menu.label ? null : menu.label)}
              className="w-full flex items-center justify-between py-3 text-sm font-semibold text-clay"
            >
              {menu.label}
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === menu.label ? 'rotate-180' : ''}`} />
            </button>
            {/* Always in DOM so aria-controls target always exists */}
            <div
              id={`mobile-${menu.label.replace(/\s+/g, '-').toLowerCase()}`}
              hidden={mobileSection !== menu.label}
              className="pb-2 -mx-2"
            >
              {menu.items.map((item) => (
                <MenuLink key={item.label} item={item} onClick={() => setMobileOpen(false)} />
              ))}
            </div>
          </div>
        ))}
        <div className="pt-4 pb-2">{actions(true)}</div>
      </div>
    </nav>
  )
}
