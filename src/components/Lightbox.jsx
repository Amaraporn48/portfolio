import { useEffect } from 'react'

export default function Lightbox({ images, index, onClose, onChange }) {
  const open = index !== null && images[index]
  const count = images.length

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % count)
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, index, count, onClose, onChange])

  if (!open) return null
  const img = images[index]

  const btn =
    'absolute flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:bg-white/10'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 sm:p-10"
      onClick={onClose}
    >
      <button type="button" aria-label="ปิด" className={`${btn} top-4 right-4`} onClick={onClose}>
        ×
      </button>
      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="ภาพก่อนหน้า"
            className={`${btn} left-3 top-1/2 -translate-y-1/2`}
            onClick={(e) => {
              e.stopPropagation()
              onChange((index - 1 + count) % count)
            }}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="ภาพถัดไป"
            className={`${btn} right-3 top-1/2 -translate-y-1/2`}
            onClick={(e) => {
              e.stopPropagation()
              onChange((index + 1) % count)
            }}
          >
            ›
          </button>
        </>
      )}
      <figure className="flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="max-h-[80vh] w-auto max-w-full rounded-sm object-contain" />
        <figcaption className="mt-4 text-center text-sm text-white/70">
          {img.alt} · {index + 1}/{count}
        </figcaption>
      </figure>
    </div>
  )
}
