export default function SectionTitle({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl font-light leading-snug sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 max-w-2xl text-stone">{children}</p>}
    </div>
  )
}
