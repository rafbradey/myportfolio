import React from 'react'

const marqueeItems = [
  'Application Development',
  'Mapúa University • Cum Laude',
  'React & Vite Modern Web',
  'University IT Instructor',
  'Relational Database Systems (MySQL)',
  'Real-Time VR Simulation (Unity 6)',
  'Gemini API Integration',
  'IEEE CCET 2024 Presenter',
  '3rd ISBM 2024 Presenter'
]

export const IdentityMarquee: React.FC = () => {
  return (
    <div
      className="w-full overflow-hidden py-2 border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 backdrop-blur-xs select-none"
      role="region"
      aria-label="Professional highlights ticker"
    >
      <div className="relative w-full overflow-hidden">
        {/* Continuous Marquee Track */}
        <div className="animate-marquee-track flex items-center whitespace-nowrap">
          {/* Primary Sequence (Accessible to Screen Readers) */}
          <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8">
            {marqueeItems.map((item, index) => (
              <span key={`primary-${index}`} className="flex items-center text-xs font-mono tracking-wide text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                <span className="font-medium">{item}</span>
                <span className="ml-6 sm:ml-8 text-[var(--accent-primary)] opacity-60" aria-hidden="true">
                  /
                </span>
              </span>
            ))}
          </div>

          {/* Secondary Duplicate Sequence (for seamless infinite loop, hidden from screen readers) */}
          <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8" aria-hidden="true">
            {marqueeItems.map((item, index) => (
              <span key={`duplicate-${index}`} className="flex items-center text-xs font-mono tracking-wide text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                <span className="font-medium">{item}</span>
                <span className="ml-6 sm:ml-8 text-[var(--accent-primary)] opacity-60">
                  /
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
