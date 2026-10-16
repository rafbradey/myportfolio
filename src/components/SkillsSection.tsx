import React from 'react'
import { skillsMatrix } from '../data/portfolioData'

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--accent-primary)]"></span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent-primary)]">
              // 06 CAPABILITIES &amp; COMPILER ARCHITECTURES
            </span>
          </div>
          <h2 id="skills-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Technical Stack Matrix
          </h2>
        </div>
        <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
          Languages, Frameworks, Relational Schemas &amp; Systems
        </p>
      </div>

      {/* Monolithic Telemetry Matrix Grid */}
      <div className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-xs">
        {skillsMatrix.map((cat, idx) => (
          <div
            key={cat.category}
            className="p-6 flex flex-col justify-between space-y-6 hover:bg-[var(--bg-surface-elevated)]/30 transition-colors"
          >
            <div className="space-y-4">
              <div className="space-y-1.5 border-b border-[var(--border-subtle)] pb-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[10px] font-bold text-[var(--accent-primary)] tracking-widest">
                    [CAT.0{idx + 1}]
                  </span>
                  <span className="w-1.5 h-1.5 bg-[var(--accent-primary)]"></span>
                </div>
                <h3 className="font-display text-base font-bold text-[var(--text-primary)] tracking-tight">
                  {cat.category}
                </h3>
                <p className="font-mono text-[11px] text-[var(--text-muted)] leading-snug">
                  {cat.note}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
              VERIFIED // GROUND TRUTH
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
