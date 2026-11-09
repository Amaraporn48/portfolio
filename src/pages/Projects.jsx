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

      <div className="mt-12 rounded-[2rem] border border-line bg-ivory p-6 shadow-[0_18px_40px_rgba(28,25,23,0.04)]">
        <p className="eyebrow">Internship Web Projects</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {internshipProjects.map((p) => (
            <a key={p.slug} href={p.link} target="_blank" rel="noreferrer" className="group rounded-[1.25rem] border border-line bg-white p-3 transition hover:-translate-y-1 hover:border-rose">
              <div className="aspect-[16/10] overflow-hidden rounded-[0.9rem] bg-cream">
                <img src={p.cover.src} alt={p.cover.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-stone">{p.category}</p>
                <h3 className="mt-2 font-serif text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-stone">{p.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <nav aria-label="ทางลัดไปยังผลงาน" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone">
        {projects.map((p) => (
          <a key={p.slug} href={`#${p.slug}`} className="link-underline pb-0.5 hover:text-ink">
            {p.title}
          </a>
        ))}
      </nav>

      <div className="mt-16 divide-y divide-line border-t border-line pt-16">
        {projects.map((p, i) => (
          <ProjectBlock key={p.slug} project={p} no={i + 1} onOpen={open} />
        ))}
      </div>

      <Lightbox images={box.images} index={box.index} onClose={close} onChange={change} />
    </div>
  )
}
