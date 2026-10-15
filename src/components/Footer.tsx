import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--border-subtle)] py-12 mt-20 bg-[var(--bg-surface)] text-center text-xs text-[var(--text-muted)] space-y-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <p className="font-medium text-[var(--text-secondary)]">
          © 2026 Raf Bradey F. Matoza • Makati City, Philippines
        </p>

        {/* Essential Navigation Links */}
        <p className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono">
          <a
            href="https://www.upwork.com/freelancers/~01bde81847c276af40"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
          >
            Upwork Profile
          </a>
          <span>•</span>
          <a
            href="https://github.com/rafbradey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] hover:underline transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://linkedin.com/in/raf-matoza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] hover:underline transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="/RafMatoza_RESUME_2026.pdf"
            download="RafMatoza_RESUME_2026.pdf"
            className="text-[var(--accent-primary)] hover:underline font-semibold"
          >
            Resume PDF
          </a>
        </p>

        <p className="text-[11px] text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed pt-2">
          Designed and built by Raf Bradey F. Matoza. Built with modern web standards and responsive interaction design.
        </p>
      </div>
    </footer>
  )
}
