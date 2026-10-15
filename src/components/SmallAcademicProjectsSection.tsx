import React from 'react'
import { smallAcademicProjects, type ProjectData } from '../data/portfolioData'

interface SmallAcademicProjectsSectionProps {
  onOpenArchitecture: (project: ProjectData) => void
}

export const SmallAcademicProjectsSection: React.FC<SmallAcademicProjectsSectionProps> = ({
  onOpenArchitecture
}) => {
  return (
    <section id="small-academic-projects" aria-labelledby="small-projects-heading" className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
            Academic Coursework &amp; Research Platforms
          </span>
          <h2 id="small-projects-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mt-1">
            Small Academic Projects
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
          Decoupled Desktop Clients &amp; Containerized Web Architectures
        </p>
      </div>

      {/* Grid of Spec-Sheet Projects (Strictly without images per directive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {smallAcademicProjects.map(project => (
          <article
            key={project.id}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all shadow-sm group space-y-5"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">{project.date}</span>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug">
                {project.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.summary}
              </p>

              {/* Architectural Pipeline Summary */}
              <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-1.5 text-xs text-[var(--text-secondary)]">
                <span className="font-mono font-semibold text-[var(--text-primary)] block uppercase text-[11px]">
                  Pipeline Architecture:
                </span>
                <p className="leading-relaxed line-clamp-3">{project.architecture.overview}</p>
              </div>
            </div>

            <div className="space-y-4 pt-3 border-t border-[var(--border-subtle)]">
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Architecture Modal Trigger */}
              <button
                type="button"
                onClick={() => onOpenArchitecture(project)}
                className="target-hit-size w-full py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl text-[var(--accent-primary)] bg-[var(--accent-light)] hover:bg-[var(--accent-primary)] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-[var(--accent-border)] active:scale-95"
                aria-label={`View architecture diagram and details for ${project.title}`}
              >
                <span>View Architecture &amp; Details</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
