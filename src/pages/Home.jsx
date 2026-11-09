import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, skills } from '../data/profile.js'
import { internshipProjects, projects } from '../data/projects.js'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectBlock from '../components/ProjectBlock.jsx'
import Lightbox from '../components/Lightbox.jsx'

const showcase = internshipProjects

export default function Home() {
  const [box, setBox] = useState({ images: [], index: null })
  const open = useCallback((images, index) => setBox({ images, index }), [])
  const close = useCallback(() => setBox((b) => ({ ...b, index: null })), [])
  const change = useCallback((index) => setBox((b) => ({ ...b, index })), [])

  return (
    <>
      <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-12 md:pt-24">
        <div className="fade-up order-2 md:order-1 md:col-span-7">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl">
            {profile.nameEn.split(' ')[0]}
            <br />
            <em className="font-normal text-rose">{profile.nameEn.split(' ')[1]}</em>
          </h1>
          <p className="mt-6 font-thai text-xl text-ink">{profile.nameTh}</p>
          <div className="hairline mt-8 w-24" />
          <p className="mt-8 max-w-xl font-thai text-stone">{profile.intro}</p>
          <p className="mt-6 font-thai text-xs tracking-[0.18em] text-stone">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-stone">
            <span className="rounded-full border border-line bg-ivory px-3 py-2">Web Design</span>
            <span className="rounded-full border border-line bg-ivory px-3 py-2">UI/UX</span>
            <span className="rounded-full border border-line bg-ivory px-3 py-2">Data Analysis</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="border border-ink px-8 py-3.5 text-sm tracking-[0.12em] transition hover:border-rose hover:text-rose"
            >
              ติดต่อ
            </Link>
          </div>
        </div>

        <div className="fade-up order-1 mx-auto w-64 md:order-2 md:col-span-5 md:w-full md:max-w-sm" style={{ animationDelay: '0.15s' }}>
          <div className="relative rounded-[2rem] border border-line bg-ivory p-3 shadow-[0_24px_60px_rgba(28,25,23,0.08)]">
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-[2rem] border border-blush" aria-hidden="true" />
            <img
              src={profile.photo}
              alt={`ภาพถ่ายของ ${profile.nameTh}`}
              className="relative aspect-[6/7] w-full rounded-[1.5rem] object-cover object-top"
            />
          </div>
        </div>
      </section>

      <div className="hairline mx-auto max-w-6xl" />

      {/* รายการผลงานทั้งหมดแบบละเอียด (รูปหลัก + รูปย่อย + คำอธิบายครบทุกชิ้น) */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Projects & Case Studies" title="ผลงาน" />
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
      </section>

      <section id="internships" className="bg-ink py-24 text-ivory scroll-mt-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="font-thai">
              <p className="eyebrow text-blush">Internship Projects</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl text-ivory">โปรเจกต์ฝึกงานและผลงานจริง</h2>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {showcase.map((p) => (
              <a key={p.slug} href={p.link} target="_blank" rel="noreferrer" className="group block rounded-[1.5rem] border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-blush/60">
                <div className="aspect-[4/3] overflow-hidden rounded-[1rem] bg-cream">
                  <img
                    src={p.cover.src}
                    alt={p.cover.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 px-2 pb-2 font-thai">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-blush">{p.year}</p>
                  <h3 className="mt-2 font-display text-2xl text-ivory">{p.title}</h3>
                  <p className="mt-2 text-sm text-ivory/70">{p.summary}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-blush">
                    Visit Site <span aria-hidden="true">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Expertise" title="ความถนัด" />
          <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s, i) => (
              <div key={s.title} className="bg-ivory p-8">
                <p className="font-display text-3xl text-blush">0{i + 1}</p>
                <h3 className="mt-4 font-thai font-serif text-lg">{s.title}</h3>
                <p className="mt-3 font-thai text-sm text-stone">{s.items.slice(0, 3).join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Contacts</p>
          <h2 className="mt-6 font-thai font-serif text-4xl font-light leading-snug sm:text-5xl">
            ติดต่อ
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-left text-stone">
          <div className="flex items-center gap-4 border-b border-line pb-4">
            <span className="text-lg text-ink" aria-hidden="true">✉</span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone">Email</p>
              <p className="mt-2 font-thai text-lg text-ink">suepwongchai@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-line pb-4">
            <span className="text-lg text-ink" aria-hidden="true">☎</span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone">Phone</p>
              <p className="mt-2 font-thai text-lg text-ink">080-053-9005</p>
            </div>
          </div>
        </div>
      </section>

      <Lightbox images={box.images} index={box.index} onClose={close} onChange={change} />
    </>
  )
}
