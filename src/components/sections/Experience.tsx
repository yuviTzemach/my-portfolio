import { Briefcase } from 'lucide-react'
import { experience } from '@/data/resume'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="03" title="Experience" label="career log" />

        <div className="space-y-10">
          {experience.map((group) => (
            <div key={group.company}>
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                  <Briefcase size={16} className="text-accent" />
                  {group.company}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {group.location} · {group.period}
                </span>
              </div>

              <div className="relative ml-2 space-y-8 border-l border-border pl-8">
                {group.roles.map((role) => (
                  <div key={role.title} className="relative">
                    <span className="absolute -left-[2.30rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink" />
                    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="font-semibold text-white">{role.title}</h4>
                      <span className="font-mono text-xs text-accent-2">{role.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
