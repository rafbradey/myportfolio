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
    <section id="about" aria-labelledby="hero-heading" className="pt-2 sm:pt-4 pb-12 sm:pb-16 space-y-10">
      {/* 1. Continuous Horizontal Identity Ticker Banner */}
      <div className="animate-reveal">
        <IdentityMarquee />
      </div>

      {/* 2. Main Experimental Dossier Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Asymmetric Editorial Header & Direct Actions (7 Cols) */}
        <div className="lg:col-span-7 space-y-7">
          <div className="space-y-5">
            <div className="space-y-2 animate-reveal delay-50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--accent-primary)]"></span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--accent-primary)] font-bold">
                  [SPEC: APP_DEV // 2026 // ARCHIVE: REF_01]
                </span>
              </div>

              <h1 id="hero-heading" className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[0.98]">
                <span className="block">RAF BRADEY F.</span>
                <span className="block text-[var(--text-secondary)]">MATOZA</span>
              </h1>
            </div>

            <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl border-l-2 border-[var(--accent-primary)] pl-4 py-0.5 animate-reveal delay-100">
              Information Technology graduate specializing in <strong className="text-[var(--text-primary)] font-bold">Application Development</strong> with commercial React experience at USHER Technologies, university-level IT instruction at Mapúa University, and published international conference research.
            </p>

            <p className="font-mono text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl animate-reveal delay-150">
              MAKATI CITY, PHILIPPINES // Focused on building high-performance web applications with React and Vite, engineering relational schemas (MySQL, Supabase), and integrating generative AI APIs into practical desktop and web workflows.
            </p>
          </div>

          {/* Primary Action Button Cluster */}
          <div className="flex flex-wrap items-center gap-3 pt-1 animate-reveal delay-200">
            <a
              href="#projects"
              className="target-hit-size px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-bold text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:opacity-90 border border-[var(--accent-primary)] shadow-sm transition-all flex items-center gap-2 rounded-lg"
            >
              <span>Explore Projects</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href="https://www.upwork.com/freelancers/~01bde81847c276af40"
              target="_blank"
              rel="noopener noreferrer"
              className="target-hit-size px-5 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all flex items-center gap-2 rounded-lg backdrop-blur-md"
              aria-label="View Raf Matoza's Upwork Profile (opens in new tab)"
            >
              <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse"></span>
              <span>Upwork Profile</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="target-hit-size px-5 py-3.5 font-mono text-xs text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] transition-all cursor-pointer flex items-center gap-2 rounded-lg backdrop-blur-md"
              aria-label="Copy Raf Matoza's email address"
            >
              {copied ? (
                <>
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Copied Email</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="tracking-wide">rafbradey.fm@gmail.com</span>
                </>
              )}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Email address copied to clipboard.' : ''}
            </span>
          </div>
        </div>

        {/* Right Column: Architectural Dossier Spec Sheet (5 Cols) */}
        <div className="lg:col-span-5 animate-reveal delay-150">
          <div className="glass-panel border border-[var(--border-subtle)] divide-y divide-[var(--border-subtle)] rounded-xl overflow-hidden shadow-xl">
            {/* Top Telemetry Header */}
            <div className="p-4 bg-[var(--bg-surface-elevated)] flex items-center justify-between font-mono text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="font-bold uppercase tracking-wider text-[var(--text-primary)]">
                  // PROFESSIONAL DOSSIER
                </span>
              </div>
              <span className="text-[var(--text-muted)]">
                14°33&apos;N 121°01&apos;E
              </span>
            </div>

            {/* Spec Row 1: Academic Instruction */}
            <div className="p-5 space-y-1.5 hover:bg-[var(--bg-surface-elevated)]/50 transition-colors">
              <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold uppercase tracking-widest block">
                [ROLE_01 // INSTRUCTION]
              </span>
              <p className="font-sans text-sm font-bold text-[var(--text-primary)]">
                Part-Time Instructor @ Mapúa University
              </p>
              <p className="font-mono text-xs text-[var(--text-muted)] leading-relaxed">
                Lectures &amp; laboratory instruction in Data Structures, Relational Databases, Networking, and Computer Hardware
              </p>
            </div>

            {/* Spec Row 2: Commercial Frontend */}
            <div className="p-5 space-y-1.5 hover:bg-[var(--bg-surface-elevated)]/50 transition-colors">
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest block">
                [ROLE_02 // COMMERCIAL]
              </span>
              <p className="font-sans text-sm font-bold text-[var(--text-primary)]">
                IT Stack Assistant • USHER Technologies Inc.
              </p>
              <p className="font-mono text-xs text-[var(--text-muted)] leading-relaxed">
                Production web application engineering with React and Vite in an active Scrum sprint cycle
              </p>
            </div>

            {/* Spec Row 3: Programming Stack Telemetry */}
            <div className="p-5 space-y-2">
              <span className="text-[10px] font-mono text-[var(--text-muted)] font-bold uppercase tracking-widest block">
                [CORE_COMPILERS &amp; SCHEMAS]
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {['Python', 'Java', 'JavaScript', 'TypeScript', 'C#', 'MySQL'].map(lang => (
                  <span
                    key={lang}
                    className="px-2.5 py-1 bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium rounded-md backdrop-blur-xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Status Ribbon */}
            <div className="p-4 bg-[var(--bg-surface-elevated)] flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
              <span>STATUS: READY</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                AVAILABLE FOR ENGAGEMENTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
