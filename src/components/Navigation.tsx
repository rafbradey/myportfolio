import React from 'react'

interface NavigationProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme }) => {
  return (
    <header
      role="banner"
      className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--bg-surface)]/90 border-b border-[var(--border-subtle)] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Name Anchor */}
        <a
          href="#about"
          className="target-hit-size text-base sm:text-lg font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors rounded-md px-2 flex items-center gap-2"
          aria-label="Raf Matoza Portfolio Home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
          <span className="font-extrabold">Raf Matoza</span>
          <span className="hidden sm:inline text-xs font-mono font-normal text-[var(--text-muted)] border-l border-[var(--border-strong)] pl-2">
            BS IT • Cum Laude
          </span>
        </a>

        {/* 4 Primary Navigation Anchors (Hick-Hyman Law) */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <a
            href="#about"
            className="target-hit-size px-3 py-2 text-xs lg:text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-lg transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="target-hit-size px-3 py-2 text-xs lg:text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-lg transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="target-hit-size px-3 py-2 text-xs lg:text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-lg transition-colors"
          >
            Projects
          </a>
          <a
            href="#publications"
            className="target-hit-size px-3 py-2 text-xs lg:text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-lg transition-colors"
          >
            Publications
          </a>
          <a
            href="#contact"
            className="target-hit-size px-3 py-2 text-xs lg:text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-lg transition-colors"
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
            className="target-hit-size px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 transition-colors hidden sm:inline-flex items-center gap-1.5 shadow-2xs"
            aria-label="View Raf Matoza's Upwork Profile (opens in new tab)"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Upwork</span>
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="target-hit-size p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} visual theme`}
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          {/* Resume Download */}
          <a
            href="/RafMatoza_RESUME_2026.pdf"
            download="RafMatoza_RESUME_2026.pdf"
            className="target-hit-size px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-offset-2 flex items-center gap-1.5"
            aria-label="Download resume in PDF format"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <nav aria-label="Mobile Navigation" className="md:hidden flex items-center justify-around border-t border-[var(--border-subtle)] px-2 py-1 bg-[var(--bg-surface)]">
        <a href="#about" className="target-hit-size px-2 text-xs font-semibold text-[var(--text-secondary)]">About</a>
        <a href="#experience" className="target-hit-size px-2 text-xs font-semibold text-[var(--text-secondary)]">Experience</a>
        <a href="#projects" className="target-hit-size px-2 text-xs font-semibold text-[var(--text-secondary)]">Projects</a>
        <a href="#publications" className="target-hit-size px-2 text-xs font-semibold text-[var(--text-secondary)]">Papers</a>
        <a href="#contact" className="target-hit-size px-2 text-xs font-semibold text-[var(--text-secondary)]">Contact</a>
      </nav>
    </header>
  )
}
