import React from 'react'
import { publications, type PublicationData } from '../data/portfolioData'
import { ImageWithSkeleton } from './ImageWithSkeleton'

interface PublicationsSectionProps {
  onOpenPaper: (paper: PublicationData) => void
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ onOpenPaper }) => {
  return (
    <section id="publications" aria-labelledby="publications-heading" className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
            Peer-Reviewed Research
          </span>
          <h2 id="publications-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mt-1">
            Publications &amp; International Presentations
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
          IEEE CCET 2024 (Beijing) &amp; 3rd ISBM 2024 (Bangkok)
        </p>
      </div>

      {/* Publications Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {publications.map(paper => (
          <article
            key={paper.id}
            className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm overflow-hidden flex flex-col justify-between hover:border-[var(--border-strong)] transition-all"
          >
            <div>
              {/* Interactive Poster Image with Skeleton */}
              <div
                className="relative group cursor-pointer overflow-hidden bg-slate-950"
                onClick={() => onOpenPaper(paper)}
              >
                <ImageWithSkeleton
                  src={paper.image}
                  alt={`Presentation poster for: ${paper.title}`}
                  aspectRatioClass="aspect-[16/10]"
                  interactive={true}
                  badge={
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-black/75 text-white backdrop-blur-xs border border-white/20">
                      {paper.role} • {paper.location}
                    </span>
                  }
                />

                {/* Hover Click to Enlarge Badge */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-xl bg-black/80 text-white text-xs font-mono font-semibold backdrop-blur-xs flex items-center gap-2 border border-white/20 shadow-lg">
                    <svg className="w-4 h-4 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span>Click to Enlarge Poster</span>
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 sm:p-7 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                    {paper.conference}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {paper.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-snug">
                  {paper.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {paper.summary}
                </p>
              </div>
            </div>

            {/* Modal Drawer Trigger */}
            <div className="p-6 sm:p-7 pt-0">
              <button
                type="button"
                onClick={() => onOpenPaper(paper)}
                className="target-hit-size w-full py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl text-[var(--accent-primary)] bg-[var(--accent-light)] hover:bg-[var(--accent-primary)] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2 border border-[var(--accent-border)] active:scale-95"
                aria-label={`View full poster and details for ${paper.title}`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>View Conference Poster &amp; Diagram</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
