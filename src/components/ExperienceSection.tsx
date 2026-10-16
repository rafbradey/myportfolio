import React from 'react'
import { experiences } from '../data/portfolioData'

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--accent-primary)]"></span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent-primary)]">
              // 02 CHRONOLOGY &amp; COMMERCIAL ROLES
            </span>
          </div>
          <h2 id="experience-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Professional Experience
          </h2>
        </div>
        <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
          Commercial Frontend Engineering &amp; University IT Instruction
        </p>
      </div>

      {/* Architectural Ledger Entries */}
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <article
            key={exp.id}
            className="glass-panel border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all rounded-xl overflow-hidden shadow-lg"
          >
            {/* Ledger Top Data Strip */}
            <div className="p-5 sm:p-6 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-[11px] font-bold text-[var(--accent-primary)] tracking-widest">
                    [EXP.0{idx + 1}]
                  </span>
                  <span className="px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] rounded-md backdrop-blur-xs">
                    {exp.badgeText}
                  </span>
                  <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                    // {exp.location}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                  {exp.role}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider font-semibold text-[var(--text-secondary)]">
                  {exp.organization}
                </p>
              </div>

              <div className="self-start sm:self-auto font-mono text-xs uppercase tracking-wider font-semibold px-3 py-1.5 bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] rounded-lg backdrop-blur-xs">
                {exp.period}
              </div>
            </div>

            {/* Ledger Content Body */}
            <div className="p-5 sm:p-6 space-y-5">
              <ul className="space-y-2.5 font-sans text-sm text-[var(--text-secondary)]">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3 leading-relaxed">
                    <span className="font-mono text-xs text-[var(--accent-primary)] font-bold mt-0.5 shrink-0 select-none">
                      —
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies & Competencies Strip */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5 font-mono text-xs">
                <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] mr-2 font-semibold">
                  [STACK]:
                </span>
                {exp.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium rounded-md backdrop-blur-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
