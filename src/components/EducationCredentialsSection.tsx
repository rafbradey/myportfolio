import React from 'react'
import { educationData } from '../data/portfolioData'

export const EducationCredentialsSection: React.FC = () => {
  return (
    <section id="education" aria-labelledby="education-heading" className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
            Academic Background
          </span>
          <h2 id="education-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mt-1">
            Education &amp; Academic Honors
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
          Mapúa University • Cum Laude (GWA 1.51)
        </p>
      </div>

      {/* Main Education Showcase Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-b border-[var(--border-subtle)] pb-5">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--academic-gold-bg)] text-[var(--academic-gold-text)] border border-[var(--academic-gold-border)]">
                Cum Laude (GWA 1.51)
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                {educationData.campus}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              {educationData.degree}
            </h3>
            <p className="text-sm font-semibold text-[var(--accent-primary)] font-mono">
              Specialization in {educationData.specialization} • {educationData.institution}
            </p>
          </div>

          <div className="text-left sm:text-right font-mono text-xs text-[var(--text-muted)] space-y-1">
            <span className="block font-semibold text-[var(--text-secondary)]">{educationData.period}</span>
            <span className="block">Graduated September 19, 2025</span>
          </div>
        </div>

        {/* President's List Awards & Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              Academic Honors &amp; Merit Awards
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
              {educationData.awards.map((award, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0"></span>
                  <span className="leading-relaxed">{award}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Extracurricular &amp; Language Certifications
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)]">
              <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <span className="font-mono font-semibold text-[var(--text-primary)] block text-xs">
                  English Language Proficiency
                </span>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  {educationData.englishCertification}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <span className="font-mono font-semibold text-[var(--text-primary)] block text-xs">
                  Student Organization Leadership
                </span>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  {educationData.organizations[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
