import React from 'react'
import { flagshipProject, type ProjectData } from '../data/portfolioData'
import { ImageWithSkeleton } from './ImageWithSkeleton'
import { CardMotionDecorations } from './CardMotionDecorations'

interface FeaturedProjectSectionProps {
  onOpenArchitecture: (project: ProjectData) => void
  onOpenDemo: () => void
}

export const FeaturedProjectSection: React.FC<FeaturedProjectSectionProps> = ({
  onOpenArchitecture,
  onOpenDemo
}) => {
  return (
    <section id="projects" data-reveal-section aria-labelledby="featured-project-heading" className="space-y-8">
      {/* Section Header */}
      <div className="section-divider-line border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--accent-primary)]"></span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent-primary)]">
              // 03 DISSECTIONS &amp; THESIS // FLAGSHIP
            </span>
          </div>
          <h2 id="featured-project-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Featured Engineering Project
          </h2>
        </div>
        <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
          Interactive Standalone Virtual Reality Simulation
        </p>
      </div>

      {/* Outer Scroll Entrance & View Timeline Wrapper (Transforms & Clip-Path) */}
      <div className="card-scroll-reveal card-reveal-clip scroll-parallax-fast scroll-edge-fade">
        {/* Main Specimen Dossier Frame (3D Tilt & Viewfinder Brackets) */}
        <article
          data-tilt
          className="motion-card card-top-sweep glass-panel border border-[var(--border-subtle)] rounded-2xl overflow-hidden shadow-2xl relative"
        >
          <CardMotionDecorations />

        {/* Dossier Top Ledger Bar */}
        <div className="card-part-badge p-4 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-[var(--accent-primary)] tracking-widest">
              [THESIS // SPEC_01]
            </span>
            <span className="text-[var(--text-secondary)] font-semibold uppercase tracking-wider">
              {flagshipProject.category}
            </span>
          </div>
          <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider font-medium">
            {flagshipProject.date} // STANDALONE_XR2
          </div>
        </div>

        {/* 12-Column Technical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-subtle)]">
          {/* Left Column: Media Viewport Frame with Telemetry Overlay (7 Cols) */}
          <div className="lg:col-span-7 relative bg-[#060809] flex flex-col justify-center p-3 sm:p-5">
            <div className="relative border border-[var(--border-strong)] rounded-xl overflow-hidden">
              <ImageWithSkeleton
                src={flagshipProject.image!}
                alt="e-Simul8 Standalone VR Surgical Training Simulation in Unity 6 for Meta Quest"
                aspectRatioClass="aspect-video"
                interactive={true}
                onClick={onOpenDemo}
                badge={
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider bg-black/85 text-white border border-white/20 rounded-md">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                    Meta Quest 3S / 2 Standalone
                  </span>
                }
              />

              {/* Viewport Floating Demo Action Trigger */}
              <div className="absolute bottom-3 right-3 z-20">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="motion-btn target-hit-size px-4 py-2 bg-black/80 hover:bg-[var(--accent-primary)] text-white hover:text-[var(--accent-contrast)] font-mono text-xs uppercase tracking-wider font-bold shadow-lg flex items-center gap-2 cursor-pointer border border-white/20 rounded-lg backdrop-blur-md"
                  aria-label="Open e-Simul8 interactive video demonstration walkthrough"
                >
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span>Launch Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Spec Sheet & Direct Controls (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent-primary)] block">
                  // DECOUPLED_SIMULATION_SYSTEM
                </span>
                <h3 className="card-part-title motion-heading font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
                  {flagshipProject.title}
                </h3>
              </div>

              <p className="card-part-subtitle font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                {flagshipProject.summary}
              </p>

              {/* Architecture Specification Highlight */}
              <div className="p-4 bg-[var(--bg-surface-elevated)] border-l-2 border-[var(--accent-primary)] rounded-r-lg space-y-1.5 text-xs text-[var(--text-secondary)]">
                <span className="font-mono font-bold text-[var(--text-primary)] block uppercase text-[10px] tracking-wider">
                  [SYSTEM_PIPELINE]:
                </span>
                <p className="font-sans leading-relaxed">{flagshipProject.architecture.overview}</p>
              </div>

              {/* Technology Tags Matrix */}
              <div className="space-y-2 pt-1 font-mono text-xs">
                <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold block">
                  [VALIDATED_HARDWARE_&amp;_SDK]:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {flagshipProject.technologies.map(tech => (
                    <span
                      key={tech}
                      className="motion-tag px-2.5 py-1 bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium rounded-md backdrop-blur-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons: View Demo & View Architecture */}
            <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={onOpenDemo}
                className="motion-btn target-hit-size flex-1 py-3 px-4 font-mono text-xs uppercase tracking-wider font-bold text-white bg-emerald-600 hover:bg-emerald-700 cursor-pointer flex items-center justify-center gap-2 border border-emerald-500 shadow-sm rounded-lg"
                aria-label="View e-Simul8 interactive demo walkthrough"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>Launch Demo</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenArchitecture(flagshipProject)}
                className="motion-btn target-hit-size flex-1 py-3 px-4 font-mono text-xs uppercase tracking-wider font-bold text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-strong)] cursor-pointer flex items-center justify-center gap-1.5 border border-[var(--border-subtle)] rounded-lg backdrop-blur-xs"
                aria-label={`View architecture flow diagram for ${flagshipProject.title}`}
              >
                <span>System Architecture</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
      </div>
    </section>
  )
}
