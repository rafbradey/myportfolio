import React from 'react'
import type { ProjectData } from '../../data/portfolioData'

interface ArchitectureModalProps {
  project: ProjectData | null
  onClose: () => void
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="max-w-3xl w-full bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl p-6 sm:p-8 space-y-6 my-8 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                {project.category}
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                // {project.date}
              </span>
            </div>
            <h2 id="modal-project-title" className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="target-hit-size p-2.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors cursor-pointer"
            aria-label="Close project architecture modal"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Architecture Pipeline Overview */}
        <div className="space-y-3">
          <div className="flex items-center justify-between font-mono text-xs">
            <h3 className="font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              // SYSTEM_ARCHITECTURE &amp; DATA_PIPELINE
            </h3>
            <span className="text-[var(--text-muted)]">
              {project.architecture.layers.length} Pipeline Stages
            </span>
          </div>

          <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.architecture.overview}
          </p>

          {/* Sequential Layer Cards */}
          <div className="space-y-3 pt-2">
            {project.architecture.layers.map((layer, idx) => (
              <div key={layer.title} className="relative">
                <div className="p-4 bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-[var(--border-strong)] transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 bg-[var(--accent-primary)] text-[var(--accent-contrast)] text-xs font-bold font-mono inline-flex items-center justify-center">
                        {layer.step}
                      </span>
                      <h4 className="font-sans text-sm font-bold text-[var(--text-primary)]">
                        {layer.title}
                      </h4>
                    </div>
                    <p className="font-mono text-xs text-[var(--accent-primary)] pl-7.5">
                      {layer.subtitle}
                    </p>
                    <p className="font-sans text-xs text-[var(--text-secondary)] pl-7.5 leading-relaxed">
                      {layer.details}
                    </p>
                  </div>
                  <span className="self-start sm:self-center px-2.5 py-1 text-xs font-semibold font-mono bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] whitespace-nowrap">
                    {layer.techBadge}
                  </span>
                </div>

                {/* Connecting Indicator */}
                {idx < project.architecture.layers.length - 1 && (
                  <div className="flex justify-center my-1.5" aria-hidden="true">
                    <svg className="w-3.5 h-3.5 text-[var(--accent-primary)] opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Contributions */}
        <div className="space-y-2.5 border-t border-[var(--border-subtle)] pt-4 font-mono text-xs">
          <h3 className="font-bold uppercase tracking-wider text-[var(--accent-primary)]">
            // KEY_ENGINEERING_CONTRIBUTIONS
          </h3>
          <ul className="space-y-2 font-sans text-xs sm:text-sm text-[var(--text-secondary)]">
            {project.contributions.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                <span className="font-mono text-xs text-[var(--accent-primary)] font-bold shrink-0 mt-0.5">
                  —
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Academic Project Attribution */}
        <div className="p-3.5 bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono text-[var(--text-muted)]">
          <span>
            <strong className="text-[var(--text-primary)]">ACADEMIC CONTEXT:</strong> {project.evidenceName}
          </span>
          <a
            href={project.evidenceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-primary)] hover:underline font-semibold whitespace-nowrap"
          >
            [View Academic Evidence →]
          </a>
        </div>
      </div>
    </div>
  )
}
