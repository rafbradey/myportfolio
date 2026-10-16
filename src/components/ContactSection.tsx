import React, { useState } from 'react'
import { CardMotionDecorations } from './CardMotionDecorations'

export const ContactSection: React.FC = () => {
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
    <section
      id="contact"
      data-reveal-section
      aria-labelledby="contact-heading"
      className="motion-card card-top-sweep glass-panel border border-[var(--border-subtle)] rounded-2xl overflow-hidden shadow-2xl divide-y divide-[var(--border-subtle)] relative"
    >
      <CardMotionDecorations />
      {/* Terminal Title Bar */}
      <div className="p-4 bg-[var(--bg-surface-elevated)] flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-pulse"></span>
          <span className="font-bold uppercase tracking-widest text-[var(--text-primary)] text-[11px]">
            // 08 DIRECT_COMMUNICATIONS_HUB
          </span>
        </div>
        <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider font-medium">
          MAKATI CITY, PH // UTC+8
        </span>
      </div>

      {/* Terminal Main Action Console */}
      <div className="p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent-primary)] block">
            &gt; INIT_COMMUNICATION // SELECT_INQUIRIES
            <span className="terminal-cursor" aria-hidden="true"></span>
          </span>
          <h2 id="contact-heading" className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Direct Engineering Inquiries
          </h2>
          <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Open to software engineering, application development, data technologies, and university instruction roles where I can contribute technical excellence and thoughtful engineering judgment.
          </p>
        </div>

        {/* Action Controls Cluster */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
          {/* Copy Email Action */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="motion-btn target-hit-size px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-bold text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:opacity-90 border border-[var(--accent-primary)] shadow-sm cursor-pointer flex items-center gap-2 rounded-lg"
            aria-label="Copy Raf Matoza's email address to clipboard"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-[var(--accent-contrast)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied: rafbradey.fm@gmail.com</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-[var(--accent-contrast)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Email Address</span>
              </>
            )}
          </button>

          {/* Upwork Profile */}
          <a
            href="https://www.upwork.com/freelancers/~01bde81847c276af40"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-btn target-hit-size px-5 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all flex items-center gap-2 rounded-lg backdrop-blur-md"
            aria-label="View Raf Matoza's Upwork Profile (opens in new tab)"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse"></span>
            <span>Upwork Profile</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rafbradey"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-btn target-hit-size px-5 py-3.5 font-mono text-xs uppercase tracking-wider font-medium text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex items-center gap-2 rounded-lg backdrop-blur-xs"
            aria-label="View Raf Matoza's GitHub Profile (opens in new tab)"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/raf-matoza"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-btn target-hit-size px-5 py-3.5 font-mono text-xs uppercase tracking-wider font-medium text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex items-center gap-2 rounded-lg backdrop-blur-xs"
            aria-label="View Raf Matoza's LinkedIn Profile (opens in new tab)"
          >
            <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Terminal Telemetry Footer Strip */}
      <div className="p-4 bg-[var(--bg-surface-elevated)] flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[var(--text-muted)]">
        <span>MAKATI CITY, PHILIPPINES // +63 992 707 3036</span>
        <span className="text-[var(--accent-primary)] font-semibold">
          DIRECT INQUIRIES ROUTED TO VERIFIED INBOX
        </span>
      </div>
    </section>
  )
}
