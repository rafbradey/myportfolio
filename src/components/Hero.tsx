import React, { useState } from 'react'
import { IdentityMarquee } from './IdentityMarquee'

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('rafbradey.fm@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <section id="about" aria-labelledby="hero-heading" className="pt-2 sm:pt-4 pb-12 sm:pb-16 space-y-8">
      {/* 1. Continuous Horizontal Identity Ticker Banner */}
      <div className="animate-reveal">
        <IdentityMarquee />
      </div>

      {/* 2. Main Hero Grid Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Core Identity and Direct Actions (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <div className="space-y-1.5 animate-reveal delay-50">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[var(--accent-primary)] font-semibold block">
                Software Developer
              </span>
              <h1 id="hero-heading" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                Raf Bradey F. Matoza
              </h1>
            </div>

            <p className="text-base sm:text-lg font-medium text-[var(--text-secondary)] leading-relaxed max-w-2xl animate-reveal delay-100">
              Information Technology graduate specializing in <strong className="text-[var(--text-primary)] font-semibold">Application Development</strong> with commercial React experience at USHER Technologies, university-level IT instruction at Mapúa University, and published international conference research.
            </p>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl animate-reveal delay-150">
              Based in Makati City, Philippines. Focused on building high-performance web applications with React and Vite, engineering relational schemas (MySQL, Supabase), and integrating generative AI APIs into practical desktop and web workflows.
            </p>
          </div>

          {/* Primary Action Button Cluster */}
          <div className="flex flex-wrap items-center gap-3 pt-2 animate-reveal delay-200">
            <a
              href="#projects"
              className="target-hit-size px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href="https://www.upwork.com/freelancers/~01bde81847c276af40"
              target="_blank"
              rel="noopener noreferrer"
              className="target-hit-size px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 shadow-2xs"
              aria-label="View Raf Matoza's Upwork Profile (opens in new tab)"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Upwork Profile</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="target-hit-size px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-2xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
              aria-label="Copy Raf Matoza's email address"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="font-mono text-xs">rafbradey.fm@gmail.com</span>
                </>
              )}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Email address copied to clipboard.' : ''}
            </span>
          </div>
        </div>

        {/* Right Column: Architectural Profile & Professional Overview (5 Cols) */}
        <div className="lg:col-span-5 animate-reveal delay-150">
          <div className="p-6 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-md space-y-5">
            {/* Overview Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                  Professional Focus
                </span>
              </div>
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                Makati City, PH
              </span>
            </div>

            {/* Core Experience Fields */}
            <div className="space-y-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors">
                <span className="text-[11px] font-mono text-[var(--accent-primary)] font-semibold block uppercase">
                  Academic Instruction
                </span>
                <p className="text-[var(--text-primary)] font-bold mt-1">
                  Part-Time Instructor @ Mapúa University
                </p>
                <p className="text-[var(--text-muted)] mt-0.5 text-[11px] leading-relaxed">
                  Lectures &amp; laboratory instruction in Data Structures, Relational Databases, Networking, and Computer Hardware
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold block uppercase">
                  Commercial Development
                </span>
                <p className="text-[var(--text-primary)] font-bold mt-1">
                  IT Stack Assistant • USHER Technologies Inc.
                </p>
                <p className="text-[var(--text-muted)] mt-0.5 text-[11px] leading-relaxed">
                  Production web application engineering with React and Vite in an active Scrum sprint cycle
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <span className="text-[11px] font-mono text-[var(--text-muted)] font-semibold block uppercase">
                  Core Programming Languages
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['Python', 'Java', 'JavaScript', 'TypeScript', 'C#', 'MySQL'].map(lang => (
                    <span
                      key={lang}
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Summary */}
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span></span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Open to Engineering Roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
