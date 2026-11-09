import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { navItems } from './Header.jsx'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl">{profile.nameEn}</p>
          <p className="mt-1 text-sm text-stone">{profile.nameTh}</p>
        </div>
        <nav aria-label="เมนูท้ายหน้า" className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone">
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="hairline" />
      <p className="py-6 text-center text-xs tracking-[0.2em] text-stone">
        © {new Date().getFullYear()} {profile.nameEn.toUpperCase()} · ALL RIGHTS RESERVED
      </p>
    </footer>
  )
}
