import React, { useState, useEffect, useRef } from 'react'

interface NavigationProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Papers' },
  { id: 'contact', label: 'Contact' }
]

export const Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme }) => {
  const [activeId, setActiveId] = useState('about')
  const navRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [indicator, setIndicator] = useState({ x: 0, scaleX: 0 })

  // Observe which section is active
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i]
        const el = document.getElementById(item.id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(item.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update sliding indicator position using transform only
  useEffect(() => {
    const activeEl = itemRefs.current[activeId]
    const container = navRef.current
    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect()
      const itemRect = activeEl.getBoundingClientRect()
      const x = itemRect.left - containerRect.left
      const scaleX = itemRect.width
      setIndicator({ x, scaleX })
    }
  }, [activeId])

  return (
    <header
      role="banner"
      className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] transition-all duration-200"
      style={{
        boxShadow: 'var(--glass-bevel, none), 0 4px 20px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Anchor */}
        <a
          href="#about"
          className="target-hit-size group flex items-center gap-2.5 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors focus-visible:outline-offset-4"
          aria-label="Raf Matoza Portfolio Home"
        >
          <span className="w-2 h-2 bg-[var(--accent-primary)] group-hover:scale-125 transition-transform"></span>
          <span className="font-display font-extrabold tracking-tight text-base sm:text-lg">
            RAF MATOZA
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-[var(--text-muted)] border-l border-[var(--border-strong)] pl-2 tracking-wide">
            BS IT // CUM LAUDE
          </span>
        </a>

        {/* 4 Primary Navigation Anchors with Transform-Driven Sliding Indicator */}
        <nav
          ref={navRef}
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-1 lg:space-x-2 relative"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                ref={(el) => { itemRefs.current[item.id] = el }}
                className={`target-hit-size px-3 py-2 font-mono text-xs uppercase tracking-wider font-medium transition-colors ${
                  isActive
                    ? 'text-[var(--text-primary)] font-bold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </a>
            )
          })}

          {/* Sliding Lime Indicator (Animated exclusively via hardware-accelerated transform) */}
          <span
            className="absolute bottom-0 left-0 h-[2px] bg-[var(--accent-primary)] pointer-events-none transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: '1px',
              transform: `translate3d(${indicator.x}px, 0, 0) scaleX(${indicator.scaleX})`,
              transformOrigin: 'left center'
            }}
            aria-hidden="true"
          />
        </nav>

        {/* Right Action Utilities (Theme toggle, Resume) */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="motion-btn target-hit-size p-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors cursor-pointer rounded-lg"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} visual theme`}
          >
            {theme === 'light' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          {/* Resume Download */}
          <a
            href="/RafMatoza_RESUME_2026.pdf"
            download="RafMatoza_RESUME_2026.pdf"
            className="motion-btn target-hit-size px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:opacity-90 border border-[var(--accent-primary)] shadow-sm flex items-center gap-1.5 rounded-lg"
            aria-label="Download resume in PDF format"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <nav aria-label="Mobile Navigation" className="md:hidden flex items-center justify-around border-t border-[var(--border-subtle)] px-2 py-1 bg-[var(--bg-surface)]">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`target-hit-size px-2 font-mono text-xs uppercase tracking-wider ${
              activeId === item.id ? 'text-[var(--accent-primary)] font-bold' : 'text-[var(--text-secondary)]'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
