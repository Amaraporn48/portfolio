import { Link } from 'react-router-dom'
import { profile, skills, process } from '../data/profile.js'
import SectionTitle from '../components/SectionTitle.jsx'

export default function About() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-14 px-6 pt-16 md:grid-cols-12 md:pt-24">
        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -left-4 -bottom-4 h-full w-full border border-blush" aria-hidden="true" />
            <img
              src={profile.photo}
              alt={`ภาพถ่ายของ ${profile.nameTh}`}
              className="relative aspect-[6/7] w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="fade-up md:col-span-7 md:pt-6">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-snug sm:text-5xl">เกี่ยวกับฉัน</h1>
          <p className="mt-2 font-display text-2xl italic text-rose">{profile.nameEn}</p>
          <div className="hairline mt-8 w-24" />
          <div className="mt-8 space-y-5 text-stone">
            <p>
              สวัสดีค่ะ ฉันชื่อ <span className="text-ink">{profile.nameTh}</span> {profile.intro}
            </p>
            <p>
              ผลงานในพอร์ตโฟลิโอนี้ครอบคลุมการออกแบบกลยุทธ์การตลาดด้วยเครื่องมืออย่าง PEST, Porter’s Five Forces,
              6Ws &amp; 1H, SWOT, STP และ 4Ps การวิเคราะห์ข้อมูลและพยากรณ์ด้วย Minitab การสร้างเว็บไซต์ด้วย WordPress
              และ HTML รวมถึงการนำเสนอแนวคิดนวัตกรรมในรูปแบบ Pitch Presentation และการศึกษาดูงานในโรงงานจริง
            </p>
            <p>
              ฉันให้ความสำคัญกับการตัดสินใจบนพื้นฐานของข้อมูล และการสร้างคุณค่าให้กับผู้บริโภค
              เพื่อให้กลยุทธ์ที่ออกแบบสามารถนำไปประยุกต์ใช้ได้ในทางปฏิบัติ
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-28">
        <SectionTitle eyebrow="Skills & Tools" title="ทักษะและเครื่องมือ" />
        <div className="mt-12 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.title} className="border-t border-line pt-6">
              <h3 className="font-serif text-xl">{s.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li key={it} className="border border-line px-3 py-1 text-sm text-stone">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 bg-ink py-24 text-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow !text-blush">Approach</p>
          <h2 className="mt-4 font-serif text-3xl font-light sm:text-4xl">วิธีการทำงาน</h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.no}>
                <p className="font-display text-5xl text-blush">{p.no}</p>
                <h3 className="mt-4 font-serif text-xl">{p.title}</h3>
                <p className="mt-3 text-sm text-ivory/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-24 text-center">
        <Link
          to="/projects"
          className="inline-block border border-ink px-10 py-4 text-sm tracking-[0.12em] transition hover:border-rose hover:text-rose"
        >
          ดูผลงานของฉัน
        </Link>
      </section>
    </>
  )
}
