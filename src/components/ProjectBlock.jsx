export default function ProjectBlock({ project, no, onOpen }) {
  const { slug, title, category, year, parts, bullets, tags, images, link } = project
  const [first, ...rest] = images

  // สลับโทนสี: เลขคี่ (01, 03, 05) เป็นโทนชมพูพาสเทลละมุน, เลขคู่ (02, 04, 06) เป็นโทนขาวนวลสะอาดตา
  const isPink = no % 2 !== 0

  return (
    <article
      id={slug}
      className={`scroll-mt-28 rounded-[2.5rem] p-7 sm:p-10 lg:p-12 transition-all duration-500 ${
        isPink
          ? 'bg-gradient-to-br from-[#fdf2f4] via-[#faeaee] to-[#f8e3e7] border border-[#f2ccd4] shadow-[0_20px_50px_rgba(236,196,203,0.28)]'
          : 'bg-gradient-to-br from-white via-[#fcfbf9] to-[#f8f3ec] border border-[#e8ded3] shadow-[0_20px_50px_rgba(28,25,23,0.05)]'
      }`}
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-display text-5xl sm:text-6xl font-light text-rose">
                {String(no).padStart(2, '0')}
              </span>
              <span
                className={`rounded-full px-3.5 py-1 text-[11px] font-medium tracking-[0.16em] uppercase ${
                  isPink
                    ? 'bg-white/80 text-rose border border-rose/20'
                    : 'bg-cream text-stone border border-line'
                }`}
              >
                {year}
              </span>
            </div>

            <p className="eyebrow mt-4 text-stone">{category}</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl text-ink">{title}</h2>

            <div className="mt-8 space-y-6 text-stone font-thai">
              {parts.map((p) => (
                <div key={p.heading}>
                  <h3 className="font-serif text-base font-medium text-ink">{p.heading}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed">{p.text}</p>
                </div>
              ))}
              {bullets && (
                <ul className="space-y-2 text-[0.95rem]">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[0.85em] h-px w-4 shrink-0 bg-rose" aria-hidden="true" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-line/60">
            <ul className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <li
                  key={t}
                  className={`rounded-full px-3 py-1 text-xs tracking-wide transition ${
                    isPink
                      ? 'bg-white/90 border border-rose/20 text-stone'
                      : 'bg-white border border-line text-stone'
                  }`}
                >
                  {t}
                </li>
              ))}
            </ul>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-6 py-2.5 text-xs uppercase tracking-[0.14em] text-ivory transition hover:bg-rose hover:border-rose hover:text-white"
              >
                Visit website <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>

        <div className="lg:col-span-7">
          <button
            type="button"
            onClick={() => onOpen(images, 0)}
            className="group block w-full overflow-hidden rounded-[1.75rem] border border-black/5 bg-cream/70 text-left shadow-sm transition hover:shadow-md"
            aria-label={`ขยายภาพ: ${first.alt}`}
          >
            <img
              src={first.src}
              alt={first.alt}
              loading="lazy"
              className="w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />
          </button>
          {rest.length > 0 && (
            <ul className="mt-3.5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {rest.map((img, i) => (
                <li key={img.src}>
                  <button
                    type="button"
                    onClick={() => onOpen(images, i + 1)}
                    className="group block aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] border border-black/5 bg-cream/70 shadow-xs transition hover:shadow-md hover:border-rose/40"
                    aria-label={`ขยายภาพ: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  )
}
