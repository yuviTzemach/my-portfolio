import { profile } from '@/data/resume'
import SectionHeading from '@/components/ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading index="01" title="About Me" label="whoami" />

      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="mb-4 flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/60" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/60" />
          <span className="h-3 w-3 rounded-full bg-green-400/60" />
        </div>
        <p className="font-mono text-sm leading-relaxed text-muted sm:text-base">
          {profile.summary}
        </p>
      </div>
    </section>
  )
}
