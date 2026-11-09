import { useCallback, useState } from 'react'
import { internshipProjects, projects } from '../data/projects.js'
import Lightbox from '../components/Lightbox.jsx'
import ProjectBlock from '../components/ProjectBlock.jsx'

export default function Projects() {
  const [box, setBox] = useState({ images: [], index: null })
  const open = useCallback((images, index) => setBox({ images, index }), [])
  const close = useCallback(() => setBox((b) => ({ ...b, index: null })), [])
  const change = useCallback((index) => setBox((b) => ({ ...b, index })), [])

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
      <header className="fade-up max-w-2xl">
        <p className="eyebrow">Projects</p>
        <h1 className="mt-4 font-serif text-4xl font-light leading-snug sm:text-5xl">ผลงานของฉัน</h1>
        <p className="mt-5 text-stone">
          รวมผลงานด้านกลยุทธ์การตลาด การวิเคราะห์ข้อมูล และการสร้างเว็บไซต์ — คลิกที่ภาพเพื่อดูขนาดเต็ม
        </p>
      </header>

      <div className="mt-12 rounded-[2.5rem] border border-[#eed0d7] bg-gradient-to-br from-[#fbf2f4] via-[#f8e7ec] to-[#f4dde4] p-7 sm:p-10 shadow-[0_20px_50px_rgba(236,196,203,0.3)]">
        <p className="eyebrow text-rose">Internship Web Projects</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl text-ink">โปรเจกต์ฝึกงานและผลงานจริง</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {internshipProjects.map((p) => (
            <a
              key={p.slug}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-[1.5rem] border border-white/80 bg-white/95 p-3.5 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-rose/50 hover:bg-white hover:shadow-[0_16px_36px_rgba(181,104,122,0.18)]"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[1rem] border border-black/5 bg-cream/70">
                <img
                  src={p.cover.src}
                  alt={p.cover.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 px-1 pb-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-stone">{p.category}</span>
                  <span className="text-xs text-rose font-medium group-hover:underline">Visit Site →</span>
                </div>
                <h3 className="mt-2 font-serif text-xl text-ink group-hover:text-rose transition">{p.title}</h3>
                <p className="mt-2 text-sm text-stone line-clamp-2">{p.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <nav aria-label="ทางลัดไปยังผลงาน" className="mt-8 flex flex-wrap gap-2 text-xs text-stone">
        {projects.map((p, i) => (
          <a
            key={p.slug}
            href={`#${p.slug}`}
            className="rounded-full border border-line bg-white/70 px-4 py-2 font-thai transition hover:border-rose hover:bg-white hover:text-rose"
          >
            <span className="font-display font-medium text-rose mr-1">0{i + 1}</span> {p.title}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-12 sm:space-y-16">
        {projects.map((p, i) => (
          <ProjectBlock key={p.slug} project={p} no={i + 1} onOpen={open} />
        ))}
      </div>

      <Lightbox images={box.images} index={box.index} onClose={close} onChange={change} />
    </div>
  )
}
