import React from 'react'
import { flagshipProject, type ProjectData } from '../data/portfolioData'
import { ImageWithSkeleton } from './ImageWithSkeleton'

interface FeaturedProjectSectionProps {
  onOpenArchitecture: (project: ProjectData) => void
  onOpenDemo: () => void
}

export const FeaturedProjectSection: React.FC<FeaturedProjectSectionProps> = ({
  onOpenArchitecture,
  onOpenDemo
}) => {
  return (
    <section id="projects" aria-labelledby="featured-project-heading" className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
            Flagship Thesis
          </span>
          <h2 id="featured-project-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mt-1">
            Featured Engineering Project
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
          Interactive Standalone Virtual Reality Simulation
        </p>
      </div>

      {/* Main Showcase Magazine Card */}
      <article className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Media Preview with Zero-CLS Skeleton & Demo Trigger (7 Cols) */}
        <div className="lg:col-span-7 relative bg-slate-950 flex flex-col justify-center">
          <ImageWithSkeleton
            src={flagshipProject.image!}
            alt="e-Simul8 Standalone VR Surgical Training Simulation in Unity 6 for Meta Quest"
            aspectRatioClass="aspect-video"
            interactive={true}
            onClick={onOpenDemo}
            badge={
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-600/90 text-white shadow-md backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse"></span>
                Meta Quest 3S / 2 Standalone
              </span>
            }
          />

          {/* Quick Floating Demo Action Pill */}
          <div className="absolute bottom-4 right-4 z-20">
            <button
              type="button"
              onClick={onOpenDemo}
              className="target-hit-size px-4 py-2 rounded-xl bg-black/75 hover:bg-[var(--accent-primary)] text-white text-xs font-mono font-semibold backdrop-blur-md transition-all shadow-lg flex items-center gap-2 cursor-pointer border border-white/20 active:scale-95"
              aria-label="Open e-Simul8 interactive video demonstration walkthrough"
            >
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>View Demo</span>
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Spec Sheet & Direct Actions (5 Cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                {flagshipProject.category}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                {flagshipProject.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-snug">
              {flagshipProject.title}
            </h3>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {flagshipProject.summary}
            </p>

            {/* Architecture Overview Highlight */}
            <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-1.5 text-xs text-[var(--text-secondary)]">
              <span className="font-mono font-semibold text-[var(--text-primary)] block uppercase text-[11px]">
                Architecture Highlights:
              </span>
              <p className="leading-relaxed font-sans">{flagshipProject.architecture.overview}</p>
            </div>

            {/* Technology Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {flagshipProject.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons: View Demo & View Architecture */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={onOpenDemo}
              className="target-hit-size flex-1 py-3 px-4 text-xs sm:text-sm font-semibold rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm active:scale-95"
              aria-label="View e-Simul8 interactive demo walkthrough"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>View Demo</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenArchitecture(flagshipProject)}
              className="target-hit-size flex-1 py-3 px-4 text-xs sm:text-sm font-semibold rounded-xl text-[var(--accent-primary)] bg-[var(--accent-light)] hover:bg-[var(--accent-primary)] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-[var(--accent-border)] active:scale-95"
              aria-label={`View architecture flow diagram for ${flagshipProject.title}`}
            >
              <span>View Architecture</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </section>
  )
}
