import { Download, Mail, Phone } from 'lucide-react'
import { profile } from '@/data/resume'
import LinkedinIcon from '@/components/ui/icons/LinkedinIcon'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-sm text-accent">console.log(</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Let's build something together.</h2>
        <p className="font-mono text-sm text-accent">)</p>

        <p className="mx-auto mt-4 max-w-md text-sm text-muted">
          Open to new opportunities and interesting projects. Reach out through any of the channels below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-white transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-white transition-colors hover:border-accent hover:text-accent"
          >
            <Phone size={16} />
            Call
          </a>
        </div>

        <a
          href={profile.resumeFile}
          download
          className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          <Download size={14} />
          Download Resume (PDF)
        </a>
      </div>

      <footer className="mx-auto mt-24 max-w-5xl border-t border-border pt-8 text-center font-mono text-xs text-muted">
        <p>
          Built with React, TypeScript &amp; Tailwind CSS ·{' '}
          <span className="text-accent">{new Date().getFullYear()}</span>
        </p>
      </footer>
    </section>
  )
}
