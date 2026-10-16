import React from 'react'
import { smallAcademicProjects, type ProjectData } from '../data/portfolioData'

interface SmallAcademicProjectsSectionProps {
  onOpenArchitecture: (project: ProjectData) => void
}

export const SmallAcademicProjectsSection: React.FC<SmallAcademicProjectsSectionProps> = ({
  onOpenArchitecture
}) => {
  return (
    <section id="small-academic-projects" aria-labelledby="small-projects-heading" className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--accent-primary)]"></span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent-primary)]">
              // 04 ARCHIVES &amp; VERIFIED COURSEWORK
            </span>
          </div>
          <h2 id="small-projects-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Academic Engineering Projects
          </h2>
        </div>
        <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
          Decoupled Desktop Clients &amp; Containerized Web Architectures
        </p>
      </div>

      {/* Grid of Spec-Sheet Projects (Strictly without images per directive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {smallAcademicProjects.map((project, idx) => (
          <article
            key={project.id}
            className="glass-card flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Spec Sheet Header Strip */}
            <div className="p-4 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs">
              <span className="text-[11px] font-bold text-[var(--accent-primary)] tracking-widest">
                [ACAD_SPEC.0{idx + 1}]
              </span>
              <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider font-medium">
                {project.date}
              </span>
            </div>

            {/* Spec Sheet Core Body */}
            <div className="p-6 sm:p-7 space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] block">
                  {project.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug">
                  {project.title}
                </h3>
              </div>

              <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.summary}
              </p>

              {/* Architectural Pipeline Summary */}
              <div className="p-4 bg-[var(--bg-surface-elevated)] border-l-2 border-[var(--accent-primary)] rounded-r-lg space-y-1.5 text-xs text-[var(--text-secondary)]">
                <span className="font-mono font-bold text-[var(--text-primary)] block uppercase text-[10px] tracking-wider">
                  [PIPELINE_ARCHITECTURE]:
                </span>
                <p className="font-sans leading-relaxed line-clamp-3">{project.architecture.overview}</p>
              </div>
            </div>

            {/* Bottom Actions and Stack */}
            <div className="p-6 sm:p-7 pt-0 space-y-5 border-t border-[var(--border-subtle)] mt-auto">
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-4">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium rounded-md backdrop-blur-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Architecture Modal Trigger */}
              <button
                type="button"
                onClick={() => onOpenArchitecture(project)}
                className="target-hit-size w-full py-3 px-4 font-mono text-xs uppercase tracking-wider font-bold text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-strong)] transition-all cursor-pointer flex items-center justify-center gap-2 border border-[var(--border-subtle)] rounded-lg backdrop-blur-xs"
                aria-label={`View architecture diagram and details for ${project.title}`}
              >
                <span>System Architecture &amp; Details</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
