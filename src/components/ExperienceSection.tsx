import React from 'react'
import { experiences } from '../data/portfolioData'

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
            Career Timeline
          </span>
          <h2 id="experience-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mt-1">
            Professional Experience
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
          Commercial Frontend Engineering &amp; University IT Instruction
        </p>
      </div>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 gap-6">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all shadow-sm space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold font-mono bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                    {exp.badgeText}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {exp.location}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-[var(--accent-primary)] font-mono">
                  {exp.organization}
                </p>
              </div>

              <span className="self-start sm:self-auto px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                {exp.period}
              </span>
            </div>

            {/* Bullet Points */}
            <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="leading-relaxed">
                  {resp}
                </li>
              ))}
            </ul>

            {/* Technologies & Competencies */}
            <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[var(--text-muted)] mr-1">Technologies &amp; Scope:</span>
              {exp.skills.map(skill => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
