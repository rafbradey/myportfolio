import React from 'react'
import { publications, type PublicationData } from '../data/portfolioData'
import { ImageWithSkeleton } from './ImageWithSkeleton'
import { CardMotionDecorations } from './CardMotionDecorations'

interface PublicationsSectionProps {
  onOpenPaper: (paper: PublicationData) => void
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ onOpenPaper }) => {
  return (
    <section id="publications" data-reveal-section aria-labelledby="publications-heading" className="space-y-8">
      {/* Section Header */}
      <div className="section-divider-line border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--accent-primary)]"></span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent-primary)]">
              // 05 RESEARCH &amp; PEER-REVIEWED PROCEEDINGS
            </span>
          </div>
          <h2 id="publications-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            International Publications
          </h2>
        </div>
        <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
          IEEE CCET 2024 (Beijing) &amp; 3rd ISBM 2024 (Bangkok)
        </p>
      </div>

      {/* Publications Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publications.map((paper, idx) => (
          <article
            key={paper.id}
            className={`motion-card card-top-sweep card-scroll-reveal ${idx % 2 === 0 ? 'card-reveal-left scroll-parallax-slow' : 'card-reveal-right scroll-parallax-fast'} scroll-edge-fade glass-card border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-lg flex flex-col justify-between relative`}
          >
            <CardMotionDecorations />

            <div>
              {/* Archive Plate Catalog Header */}
              <div className="card-part-badge p-4 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs">
                <span className="text-[11px] font-bold text-[var(--accent-primary)] tracking-widest">
                  [PROCEEDING.0{idx + 1}]
                </span>
                <span className="card-part-date text-[11px] text-[var(--text-muted)] uppercase tracking-wider font-medium">
                  {paper.date} // {paper.location}
                </span>
              </div>

              {/* Interactive Poster Image with Architectural Framing */}
              <div
                className="relative group cursor-pointer overflow-hidden bg-[#070908] p-3 border-b border-[var(--border-subtle)]"
                onClick={() => onOpenPaper(paper)}
              >
                <div className="relative border border-[var(--border-strong)] rounded-lg overflow-hidden">
                  <ImageWithSkeleton
                    src={paper.image}
                    alt={`Presentation poster for: ${paper.title}`}
                    aspectRatioClass="aspect-[16/10]"
                    interactive={true}
                    badge={
                      <span className="px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider bg-black/85 text-white border border-white/20 rounded-md">
                        {paper.role} // {paper.conference}
                      </span>
                    }
                  />

                  {/* Hover Click to Enlarge Badge */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 bg-black/90 text-white font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 border border-white/30 rounded-lg shadow-lg backdrop-blur-md">
                      <svg className="w-3.5 h-3.5 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      <span>[+] ENLARGE_EXHIBIT_PLATE</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
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

                <div className="space-y-1">
                  <h3 className="card-part-title font-display text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-snug">
                    {paper.title}
                  </h3>
                  {paper.proceedings && (
                    <p className="font-mono text-xs text-[var(--accent-primary)] font-semibold">
                      Proceedings: {paper.proceedings}
                    </p>
                  )}
                </div>

                <p className="card-part-subtitle font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                  {paper.summary}
                </p>

                {/* Skills & Deliverables */}
                {paper.skills && paper.skills.length > 0 && (
                  <div className="card-part-divider pt-2 border-t border-[var(--border-subtle)] space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold block">
                      [SKILLS &amp; DELIVERABLES]:
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {paper.skills.map(skill => (
                        <span
                          key={skill}
                          className="motion-tag px-2.5 py-0.5 bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium rounded-md text-[11px] backdrop-blur-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Actions: View DOI & Enlarge Poster */}
            <div className="p-6 sm:p-7 pt-0 border-t border-[var(--border-subtle)] mt-4 flex flex-col sm:flex-row gap-2.5">
              {paper.doiUrl && (
                <a
                  href={paper.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="motion-btn target-hit-size flex-1 py-2.5 px-3 font-mono text-xs uppercase tracking-wider font-bold text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:opacity-90 flex items-center justify-center gap-1.5 rounded-lg shadow-sm"
                  aria-label={`Open published paper on official journal: ${paper.title} (opens in new tab)`}
                >
                  <span>Read Paper [DOI]</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              <button
                type="button"
                onClick={() => onOpenPaper(paper)}
                className="motion-btn target-hit-size flex-1 py-2.5 px-3 font-mono text-xs uppercase tracking-wider font-bold text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-strong)] cursor-pointer flex items-center justify-center gap-1.5 border border-[var(--border-subtle)] rounded-lg backdrop-blur-xs"
                aria-label={`View full poster and details for ${paper.title}`}
              >
                <svg className="w-3.5 h-3.5 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Inspect Poster</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
