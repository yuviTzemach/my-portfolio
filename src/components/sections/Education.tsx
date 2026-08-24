import { GraduationCap, Languages as LanguagesIcon } from 'lucide-react'
import { education, languages } from '@/data/resume'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Education() {
  return (
    <section id="education" className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading index="04" title="Education" label="background" />

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-6">
            <GraduationCap size={20} className="mb-3 text-accent" />
            <h3 className="font-semibold text-white">{education.degree}</h3>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-3 font-mono text-xs text-accent-2">{education.period}</p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <LanguagesIcon size={20} className="mb-3 text-accent" />
            <h3 className="font-semibold text-white">Languages</h3>
            <div className="mt-3 space-y-2">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-sm">
                  <span className="text-white">{lang.name}</span>
                  <span className="font-mono text-xs text-muted">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
