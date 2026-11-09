import { profile } from '../data/profile.js'

export default function Contact() {
  const { email, phone } = profile.contact

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
      <header className="fade-up max-w-2xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 font-serif text-4xl font-light leading-snug sm:text-5xl">ติดต่อ</h1>
        <p className="mt-5 text-stone">
          สนใจร่วมงาน หรืออยากพูดคุยเกี่ยวกับผลงาน ติดต่อ {profile.nameTh} ได้ตามข้อมูลด้านล่าง
        </p>
      </header>

      <div className="mt-16 max-w-3xl space-y-10">
        <div className="border-b border-line pb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-stone">อีเมล</p>
          <p className="mt-3 font-serif text-2xl text-ink">{email}</p>
        </div>

        <div className="border-b border-line pb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-stone">โทรศัพท์</p>
          <p className="mt-3 font-serif text-2xl text-ink">{phone}</p>
        </div>
      </div>
    </div>
  )
}
