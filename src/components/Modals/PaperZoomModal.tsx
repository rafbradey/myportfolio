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
        className="max-w-5xl w-full bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                {paper.conference}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {paper.location} • {paper.date}
              </span>
            </div>
            <h2 id="modal-paper-title" className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              {paper.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="target-hit-size p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
            aria-label="Close enlarged paper poster"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Poster Presentation Image */}
        <div className="p-4 sm:p-6 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-auto">
          <ImageWithSkeleton
            src={paper.image}
            alt={paper.title}
            aspectRatioClass="aspect-[16/10]"
            imgClassName="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Footer & Proceedings Details */}
        <div className="p-4 sm:p-5 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="space-y-0.5">
            <p>
              <strong className="text-[var(--text-primary)]">Conference Role:</strong> Official Presenter • International Symposium Proceedings
            </p>
            <p className="text-[var(--text-muted)] text-[11px]">
              Full peer-reviewed conference paper available in the official IEEE / ISBM proceedings.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="target-hit-size px-5 py-2 rounded-lg text-xs font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  )
}
