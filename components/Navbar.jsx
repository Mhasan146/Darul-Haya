'use client'
import { useState } from 'react'
import Link from 'next/link'

const MOODLE = process.env.NEXT_PUBLIC_MOODLE_URL || 'https://learn.darulhaya.com'

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
      { label: 'Full-Live Schooling', href: '/programs/full-live' },
      { label: 'Homeschooling Portal', href: '/programs/homeschool' },
      { label: 'Grade Levels', href: '/curriculum#grades' },
      { label: 'Curriculum', href: '/curriculum#islamic' },
    ],
  },
  {
    label: 'Student Services',
    items: [
      { label: 'Student Login (Moodle)', href: MOODLE, external: true },
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
  const cls = 'block px-4 py-2.5 text-sm text-clay hover:bg-beige-dark hover:text-teal transition-colors'
  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>{item.label}</a>
  ) : (
    <Link href={item.href} className={cls} onClick={onClick}>{item.label}</Link>
  )
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)

  const actions = (stacked = false) => (
    <div className={stacked ? 'flex flex-col gap-2' : 'flex items-center gap-3'}>
      <a
        href={MOODLE}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMobileOpen(false)}
        className="text-sm font-medium text-clay hover:text-teal transition-colors text-center"
      >
        Student Login
      </a>
      <Link
        href="/register"
        onClick={() => setMobileOpen(false)}
        className="text-sm bg-teal text-white px-4 py-1.5 rounded-full hover:bg-teal-dark transition-colors text-center"
      >
        Apply Now
      </Link>
    </div>
  )

  return (
    <nav className="bg-beige border-b border-amber/30 relative z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Darul Haya — Academy of Learning" className="h-12 w-auto" style={{ clipPath: 'inset(0 0 20% 0)' }} />
        </Link>

        {/* Desktop menus */}
        <div className="hidden lg:flex items-center gap-1">
          {MENUS.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-clay hover:text-teal transition-colors"
              >
                {menu.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === menu.label ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === menu.label && (
                <div className="absolute left-0 top-full pt-2 w-56">
                  <div className="bg-white rounded-xl shadow-lg ring-1 ring-clay/5 py-2 overflow-hidden">
                    {menu.items.map((item) => (
                      <MenuLink key={item.label} item={item} onClick={() => setOpenMenu(null)} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex">{actions()}</div>
          <button
            className="lg:hidden text-clay p-1"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-beige-dark bg-beige px-6 py-2">
          {MENUS.map((menu) => (
            <div key={menu.label} className="border-b border-beige-dark/60">
              <button
                onClick={() => setMobileSection(mobileSection === menu.label ? null : menu.label)}
                className="w-full flex items-center justify-between py-3 text-sm font-semibold text-clay"
              >
                {menu.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === menu.label ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === menu.label && (
                <div className="pb-2 -mx-2">
                  {menu.items.map((item) => (
                    <MenuLink key={item.label} item={item} onClick={() => setMobileOpen(false)} />
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 pb-2">{actions(true)}</div>
        </div>
      )}
    </nav>
  )
}
