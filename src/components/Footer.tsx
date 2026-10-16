import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--border-subtle)] py-12 mt-20 bg-[var(--bg-surface)] text-xs text-[var(--text-muted)] space-y-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6 font-mono">
          <p className="font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wider">
            © 2026 RAF BRADEY F. MATOZA // MAKATI CITY, PH
          </p>

          {/* Essential Navigation Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs uppercase tracking-wider">
            <a
              href="https://www.upwork.com/freelancers/~01bde81847c276af40"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
            >
              [Upwork]
            </a>
            <span className="text-[var(--border-strong)]">//</span>
            <a
              href="https://github.com/rafbradey"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] hover:underline transition-colors font-medium"
            >
              [GitHub]
            </a>
            <span className="text-[var(--border-strong)]">//</span>
            <a
              href="https://linkedin.com/in/raf-matoza"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] hover:underline transition-colors font-medium"
            >
              [LinkedIn]
            </a>
            <span className="text-[var(--border-strong)]">//</span>
            <a
              href="/RafMatoza_RESUME_2026.pdf"
              download="RafMatoza_RESUME_2026.pdf"
              className="text-[var(--accent-primary)] hover:underline font-bold"
            >
              [Resume PDF]
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-[var(--text-muted)]">
          <span>SPEC: CLIENT-SIDE VITE + REACT 19 + TAILWIND CSS v4</span>
          <span>EMPIRICAL HCI &amp; ACCESSIBILITY STANDARDS (WCAG 2.2 AA)</span>
        </div>
      </div>
    </footer>
  )
}
