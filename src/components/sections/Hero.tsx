import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '@/data/resume'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-muted">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          {'{ status: "open to work" }'}
        </div>

        <p className="mb-3 font-mono text-sm text-accent">
          <span className="text-muted">const developer = </span>
          &#123;
        </p>

        <h1 className="text-glow text-4xl font-extrabold text-white sm:text-6xl">{profile.name}</h1>

        <p className="mt-4 font-mono text-lg text-accent-2 sm:text-xl">
          &gt; {profile.title}
          <span className="animate-blink">_</span>
        </p>

        <p className="mt-2 font-mono text-sm text-accent">&#125;</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-accent" /> {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 hover:text-accent"
          >
            <Mail size={14} className="text-accent" /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
            className="inline-flex items-center gap-1.5 hover:text-accent"
          >
            <Phone size={14} className="text-accent" /> {profile.phone}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-mono text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-mono text-sm text-white transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
