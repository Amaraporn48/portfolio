import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'

export const navItems = [
  { href: '#top', label: 'หน้าแรก' },
  { href: '#about', label: 'เกี่ยวกับฉัน' },
  { href: '#projects', label: 'ผลงาน' },
  { href: '#contact', label: 'ติดต่อ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleScroll = (event, href) => {
    if (href === '#top') {
      return
    }

    event.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    window.history.replaceState(null, '', href)
  }

  return (
    <header id="top" className="sticky top-0 z-40 border-b border-line/70 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" onClick={() => setOpen(false)} className="font-display text-xl tracking-[0.04em] sm:text-2xl">
          {profile.nameEn}
        </Link>

        <nav aria-label="เมนูหลัก" className="hidden gap-10 md:flex">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} onClick={(event) => handleScroll(event, n.href)} className="link-underline pb-1 text-[0.85rem] tracking-[0.08em] text-stone hover:text-ink">
              {n.label}
            </a>
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
            <a
              key={n.href}
              href={n.href}
              onClick={(event) => {
                setOpen(false)
                handleScroll(event, n.href)
              }}
              className="border-b border-line py-5 font-serif text-2xl text-ink"
            >
              <span className="mr-4 font-sans text-xs tracking-widest text-stone">0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
