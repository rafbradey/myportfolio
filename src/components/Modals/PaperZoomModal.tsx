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
        className="max-w-5xl w-full bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] font-mono text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                {paper.conference}
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                // {paper.location} // {paper.date}
              </span>
            </div>
            <h2 id="modal-paper-title" className="font-display text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight">
              {paper.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="target-hit-size p-2.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors cursor-pointer"
            aria-label="Close enlarged paper poster"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Poster Presentation Image Frame */}
        <div className="p-4 sm:p-6 bg-[#060809] flex items-center justify-center max-h-[75vh] overflow-auto">
          <div className="border border-[var(--border-strong)] overflow-hidden">
            <ImageWithSkeleton
              src={paper.image}
              alt={paper.title}
              aspectRatioClass="aspect-[16/10]"
              imgClassName="w-full h-auto max-h-[70vh] object-contain shadow-2xl"
            />
          </div>
        </div>

        {/* Footer & Proceedings Details */}
        <div className="p-4 sm:p-5 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
          <div className="space-y-0.5 text-left">
            <p className="font-semibold text-[var(--text-primary)]">
              // ROLE: OFFICIAL PRESENTER // INTERNATIONAL SYMPOSIUM PROCEEDINGS
            </p>
            <p className="text-[var(--text-muted)] text-[11px] font-sans">
              Peer-reviewed conference research verified in official IEEE CCET / ISBM proceedings.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="target-hit-size px-5 py-2 font-mono text-xs uppercase tracking-wider font-bold text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:opacity-90 border border-[var(--accent-primary)] transition-all cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  )
}
