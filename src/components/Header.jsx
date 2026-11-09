import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'

export const navItems = [
  { to: '/', label: 'หน้าแรก' },
  { to: '/about', label: 'เกี่ยวกับฉัน' },
  { to: '/projects', label: 'ผลงาน' },
  { to: '/contact', label: 'ติดต่อ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = (to) => {
    setOpen(false)
    if (location.pathname === to) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={() => handleNavClick('/')}
          className="font-display text-xl tracking-[0.04em] sm:text-2xl"
        >
          {profile.nameEn}
        </Link>

        <nav aria-label="เมนูหลัก" className="hidden gap-10 md:flex">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              onClick={() => handleNavClick(n.to)}
              className={({ isActive }) =>
                `link-underline pb-1 text-[0.85rem] tracking-[0.08em] transition ${
                  isActive ? 'text-ink font-medium' : 'text-stone hover:text-ink'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[6px] md:hidden"
          aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-ink transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-ink transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-ink transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav
          aria-label="เมนูมือถือ"
          className="fixed inset-x-0 top-20 bottom-0 z-30 flex flex-col gap-2 bg-ivory px-6 pt-10 md:hidden"
        >
          {navItems.map((n, i) => (
            <NavLink
              key={n.to}
              to={n.to}
              onClick={() => handleNavClick(n.to)}
              className={({ isActive }) =>
                `border-b border-line py-5 font-serif text-2xl transition ${
                  isActive ? 'text-rose font-medium' : 'text-ink'
                }`
              }
            >
              <span className="mr-4 font-sans text-xs tracking-widest text-stone">0{i + 1}</span>
              {n.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
