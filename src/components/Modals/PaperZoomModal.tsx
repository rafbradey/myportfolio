import React from 'react'
import type { PublicationData } from '../../data/portfolioData'
import { ImageWithSkeleton } from '../ImageWithSkeleton'

interface PaperZoomModalProps {
  paper: PublicationData | null
  onClose: () => void
}

export const PaperZoomModal: React.FC<PaperZoomModalProps> = ({ paper, onClose }) => {
  if (!paper) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-paper-title"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-panel max-w-5xl w-full border border-[var(--border-strong)] rounded-2xl shadow-2xl overflow-hidden my-8 backdrop-blur-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] font-mono text-xs gap-3">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] rounded-md backdrop-blur-xs">
                {paper.conference}
              </span>
              <span className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-md backdrop-blur-xs">
                ★ {paper.role}
              </span>
              {paper.publishedDate && (
                <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                  // Published: {paper.publishedDate}
                </span>
              )}
            </div>
            <h2 id="modal-paper-title" className="font-display text-lg sm:text-xl font-bold text-[var(--text-primary)] tracking-tight">
              {paper.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            {paper.doiUrl && (
              <a
                href={paper.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="target-hit-size px-3 py-1.5 font-mono text-xs uppercase tracking-wider font-bold text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:opacity-90 transition-all flex items-center gap-1.5 rounded-lg shadow-sm"
                aria-label={`Open publication via DOI on official portal: ${paper.doiUrl}`}
              >
                <span>DOI Portal</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="target-hit-size p-2.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors cursor-pointer rounded-lg backdrop-blur-xs"
              aria-label="Close enlarged paper poster"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Poster Presentation Image Frame */}
        <div className="p-4 sm:p-6 bg-[#060809] flex items-center justify-center max-h-[60vh] overflow-auto">
          <div className="border border-[var(--border-strong)] rounded-xl overflow-hidden shadow-2xl">
            <ImageWithSkeleton
              src={paper.image}
              alt={paper.title}
              aspectRatioClass="aspect-[16/10]"
              imgClassName="w-full h-auto max-h-[55vh] object-contain shadow-2xl"
            />
          </div>
        </div>

        {/* Research Dossier: Description & Deliverables */}
        <div className="p-5 sm:p-6 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent-primary)] block">
              // PROJECT_DESCRIPTION &amp; SUBSTANTIAL_CONTRIBUTION
            </span>
            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
              {paper.summary}
            </p>
          </div>

          {paper.abstractExcerpt && (
            <div className="p-3.5 bg-[var(--bg-surface-elevated)] border-l-2 border-[var(--accent-primary)] rounded-r-lg space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold block">
                [ABSTRACT_EXCERPT]:
              </span>
              <p className="font-sans text-xs text-[var(--text-muted)] italic leading-relaxed">
                &ldquo;{paper.abstractExcerpt}&rdquo;
              </p>
            </div>
          )}

          {paper.skills && paper.skills.length > 0 && (
            <div className="pt-2 border-t border-[var(--border-subtle)] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold block">
                [SKILLS_&amp;_DELIVERABLES]:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {paper.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium rounded-md text-[11px] backdrop-blur-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer & Proceedings Details */}
        <div className="p-4 sm:p-5 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
          <div className="space-y-0.5 text-left">
            <p className="font-semibold text-[var(--text-primary)]">
              // ROLE: {paper.role.toUpperCase()} // {paper.proceedings || 'INTERNATIONAL SYMPOSIUM PROCEEDINGS'}
            </p>
            {paper.doi && (
              <p className="text-[var(--text-muted)] text-[11px]">
                DOI: <code className="text-[var(--accent-primary)]">{paper.doi}</code>
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="target-hit-size px-5 py-2 font-mono text-xs uppercase tracking-wider font-bold text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:opacity-90 border border-[var(--accent-primary)] transition-all cursor-pointer rounded-lg shadow-sm"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  )
}
