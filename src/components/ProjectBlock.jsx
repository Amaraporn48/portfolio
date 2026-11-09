export default function ProjectBlock({ project, no, onOpen }) {
  const { slug, title, category, year, parts, bullets, tags, images, link } = project
  const [first, ...rest] = images

  return (
    <article id={slug} className="scroll-mt-28 py-16 first:pt-0">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-5xl text-blush">{String(no).padStart(2, '0')}</p>
          <p className="eyebrow mt-4">{category}</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-2 text-xs tracking-[0.16em] text-stone">{year}</p>

          <div className="mt-8 space-y-6 text-stone">
            {parts.map((p) => (
              <div key={p.heading}>
                <h3 className="font-serif text-base text-ink">{p.heading}</h3>
                <p className="mt-2 text-[0.95rem]">{p.text}</p>
              </div>
            ))}
            {bullets && (
              <ul className="space-y-2 text-[0.95rem]">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-[0.85em] h-px w-4 shrink-0 bg-rose" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t} className="border border-line px-3 py-1 text-xs tracking-wide text-stone">
                {t}
              </li>
            ))}
          </ul>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-ink px-5 py-3 text-xs uppercase tracking-[0.14em] text-ink transition hover:border-rose hover:text-rose"
            >
              Visit website <span aria-hidden="true">→</span>
            </a>
          )}
        </div>

        <div className="lg:col-span-7">
          <button
            type="button"
            onClick={() => onOpen(images, 0)}
            className="group block w-full overflow-hidden bg-cream text-left"
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
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {rest.map((img, i) => (
                <li key={img.src}>
                  <button
                    type="button"
                    onClick={() => onOpen(images, i + 1)}
                    className="group block aspect-[4/3] w-full overflow-hidden bg-cream"
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
