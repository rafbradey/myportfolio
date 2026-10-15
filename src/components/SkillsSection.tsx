import React from 'react'
import { skillsMatrix } from '../data/portfolioData'

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
            Technical Matrix
          </span>
          <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mt-1">
            Technical Capabilities &amp; Stack
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
          Languages, Frameworks, Relational Schemas &amp; Systems
        </p>
      </div>

      {/* 4 Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsMatrix.map(cat => (
          <div
            key={cat.category}
            className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all shadow-sm flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  {cat.category}
                </h3>
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></span>
              </div>
              <p className="text-xs font-mono text-[var(--text-muted)] mb-3">
                {cat.note}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
              Core Competency
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
