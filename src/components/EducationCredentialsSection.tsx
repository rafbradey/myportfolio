import React from 'react'
import { educationData } from '../data/portfolioData'

export const EducationCredentialsSection: React.FC = () => {
  return (
    <section id="education" aria-labelledby="education-heading" className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--accent-primary)]"></span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent-primary)]">
              // 07 ACCREDITATION &amp; HONORS
            </span>
          </div>
          <h2 id="education-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Education &amp; Academic Honors
          </h2>
        </div>
        <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
          Mapúa University // Cum Laude (GWA 1.51)
        </p>
      </div>

      {/* Main Accreditation Ledger Container */}
      <div className="glass-panel border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all rounded-xl overflow-hidden shadow-xl divide-y divide-[var(--border-subtle)]">
        {/* Accreditation Top Plate */}
        <div className="p-6 sm:p-8 bg-[var(--bg-surface-elevated)] flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1 font-bold uppercase tracking-wider bg-[var(--academic-gold-bg)] text-[var(--academic-gold-text)] border border-[var(--academic-gold-border)] rounded-md backdrop-blur-xs">
                CUM LAUDE // GWA 1.51
              </span>
              <span className="px-2.5 py-1 font-medium uppercase tracking-wider bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] rounded-md backdrop-blur-xs">
                {educationData.campus}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              {educationData.degree}
            </h3>
            <p className="font-mono text-xs uppercase tracking-wider font-semibold text-[var(--accent-primary)]">
              Specialization in {educationData.specialization} // {educationData.institution}
            </p>
          </div>

          <div className="font-mono text-xs text-[var(--text-muted)] space-y-1 self-start sm:self-auto sm:text-right border-l-2 sm:border-l-0 sm:border-r-2 border-[var(--border-strong)] pl-3 sm:pl-0 sm:pr-3">
            <span className="block font-bold text-[var(--text-primary)] uppercase">{educationData.period}</span>
            <span className="block text-[11px]">CONFERRED: SEPTEMBER 19, 2025</span>
          </div>
        </div>

        {/* President's List Awards & Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]">
          {/* Left Column: Academic Merit Awards */}
          <div className="p-6 sm:p-8 space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent-primary)] block">
              // PRESIDENT&apos;S LIST HONORS &amp; MERIT AWARDS
            </span>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[var(--text-secondary)]">
              {educationData.awards.map((award, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-[var(--accent-primary)] font-bold shrink-0 mt-0.5">
                    —
                  </span>
                  <span className="leading-relaxed">{award}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Language Certification & Leadership */}
          <div className="p-6 sm:p-8 space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] block">
              // CERTIFICATIONS &amp; ENGAGEMENTS
            </span>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-4 bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] rounded-lg space-y-1">
                <span className="font-bold text-[var(--text-primary)] block uppercase text-[11px] tracking-wider">
                  [ENGLISH_LANGUAGE_PROFICIENCY]:
                </span>
                <p className="text-[var(--text-secondary)] font-sans leading-relaxed">
                  {educationData.englishCertification}
                </p>
              </div>

              <div className="p-4 bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] rounded-lg space-y-1">
                <span className="font-bold text-[var(--text-primary)] block uppercase text-[11px] tracking-wider">
                  [STUDENT_ORGANIZATION_LEADERSHIP]:
                </span>
                <p className="text-[var(--text-secondary)] font-sans leading-relaxed">
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
