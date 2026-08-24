type SectionHeadingProps = {
  index: string
  title: string
  label: string
}

export default function SectionHeading({ index, title, label }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-end gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <div>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
      </div>
      <div className="ml-4 h-px flex-1 bg-border" />
    </div>
  )
}
