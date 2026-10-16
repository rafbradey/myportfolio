import React from 'react'

interface NavigationProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme }) => {
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

        {/* 4 Primary Navigation Anchors (Hick-Hyman Law) */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <a
            href="#about"
            className="target-hit-size px-3 py-2 font-mono text-xs uppercase tracking-wider font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border-b-2 border-transparent hover:border-[var(--accent-primary)] transition-all"
          >
            About
          </a>
          <a
            href="#experience"
            className="target-hit-size px-3 py-2 font-mono text-xs uppercase tracking-wider font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border-b-2 border-transparent hover:border-[var(--accent-primary)] transition-all"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="target-hit-size px-3 py-2 font-mono text-xs uppercase tracking-wider font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border-b-2 border-transparent hover:border-[var(--accent-primary)] transition-all"
          >
            Projects
          </a>
          <a
            href="#publications"
            className="target-hit-size px-3 py-2 font-mono text-xs uppercase tracking-wider font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border-b-2 border-transparent hover:border-[var(--accent-primary)] transition-all"
          >
            Papers
          </a>
          <a
            href="#contact"
            className="target-hit-size px-3 py-2 font-mono text-xs uppercase tracking-wider font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border-b-2 border-transparent hover:border-[var(--accent-primary)] transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Right Action Utilities (Theme toggle, Upwork, Resume) */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Upwork Profile Link */}
          <a
            href="https://www.upwork.com/freelancers/~01bde81847c276af40"
            target="_blank"
            rel="noopener noreferrer"
            className="target-hit-size px-3 py-1.5 font-mono text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 transition-colors hidden sm:inline-flex items-center gap-1.5"
            aria-label="View Raf Matoza's Upwork Profile (opens in new tab)"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse"></span>
            <span>Upwork</span>
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="target-hit-size p-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors cursor-pointer"
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
            className="target-hit-size px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:opacity-90 border border-[var(--accent-primary)] shadow-sm transition-all flex items-center gap-1.5"
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
        <a href="#about" className="target-hit-size px-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">About</a>
        <a href="#experience" className="target-hit-size px-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">Experience</a>
        <a href="#projects" className="target-hit-size px-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">Projects</a>
        <a href="#publications" className="target-hit-size px-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">Papers</a>
        <a href="#contact" className="target-hit-size px-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">Contact</a>
      </nav>
    </header>
  )
}
