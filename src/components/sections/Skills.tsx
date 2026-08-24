import { Braces, Webhook } from 'lucide-react'
import { coreStack, skillCategories } from '@/data/resume'
import { skillIcons } from '@/data/skillIcons'
import SectionHeading from '@/components/ui/SectionHeading'

const conceptIcons: Partial<Record<string, typeof Webhook>> = {
  'REST APIs': Webhook,
}

function SkillIcon({ name, size }: { name: string; size: number }) {
  const Icon = skillIcons[name] ?? conceptIcons[name]
  return Icon ? <Icon size={size} /> : <Braces size={size} className="opacity-70" />
}

export default function Skills() {
  return (
    <section id="skills" className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="02" title="Skills" label="tech stack" />

        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">Core Stack</p>
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-7">
          {coreStack.map((skill) => (
            <div
              key={skill}
              className="flex flex-col items-center gap-2 rounded-xl border border-accent/30 bg-accent/5 px-3 py-5 text-center transition-colors hover:border-accent/70 hover:bg-accent/10"
            >
              <span className="text-accent-2">
                <SkillIcon name={skill} size={26} />
              </span>
              <span className="text-xs font-medium text-white">{skill}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-muted"
                  >
                    <SkillIcon name={skill} size={13} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
