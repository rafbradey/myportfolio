import React from 'react'

const marqueeItems = [
  { index: '01', label: 'APPLICATION DEVELOPMENT' },
  { index: '02', label: 'MAPÚA UNIVERSITY — CUM LAUDE' },
  { index: '03', label: 'REACT & VITE PRODUCTION WEB' },
  { index: '04', label: 'UNIVERSITY IT INSTRUCTOR' },
  { index: '05', label: 'RELATIONAL SCHEMAS & MYSQL' },
  { index: '06', label: 'VR SIMULATION & UNITY 6' },
  { index: '07', label: 'GEMINI API INTEGRATION' },
  { index: '08', label: 'IEEE CCET 2024 PRESENTER' },
  { index: '09', label: '3RD ISBM 2024 PRESENTER' }
]

export const IdentityMarquee: React.FC = () => {
  return (
    <div
      className="w-full overflow-hidden py-2.5 border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] backdrop-blur-md select-none transition-colors"
      role="region"
      aria-label="Professional highlights ticker"
    >
      <div className="relative w-full overflow-hidden">
        {/* Continuous Marquee Track */}
        <div className="animate-marquee-track flex items-center whitespace-nowrap">
          {/* Primary Sequence (Accessible to Screen Readers) */}
          <div className="flex items-center space-x-8 pr-8">
            {marqueeItems.map((item, idx) => (
              <span key={`primary-${idx}`} className="flex items-center gap-2 text-xs font-mono tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <span className="text-[10px] text-[var(--accent-primary)] font-bold">[{item.index}]</span>
                <span className="font-semibold">{item.label}</span>
                <span className="ml-6 text-[var(--border-strong)] font-light" aria-hidden="true">
                  //
                </span>
              </span>
            ))}
          </div>

          {/* Secondary Duplicate Sequence (for seamless infinite loop, hidden from screen readers) */}
          <div className="flex items-center space-x-8 pr-8" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <span key={`duplicate-${idx}`} className="flex items-center gap-2 text-xs font-mono tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <span className="text-[10px] text-[var(--accent-primary)] font-bold">[{item.index}]</span>
                <span className="font-semibold">{item.label}</span>
                <span className="ml-6 text-[var(--border-strong)] font-light">
                  //
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
