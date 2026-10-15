import { useState, useEffect } from 'react'

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme')
      if (saved === 'dark' || saved === 'light') return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('rafbradey.fm@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Skip to Content for Screen Readers & Keyboard Navigation (WCAG 2.2) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent-primary)] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Header & Primary Navigation (Hick-Hyman Law: strictly 4 primary destinations) */}
      <header
        role="banner"
        className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--bg-surface)]/85 border-b border-[var(--border-subtle)] transition-colors"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <a
            href="#about"
            className="target-hit-size text-lg font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors rounded-md px-2"
            aria-label="Raf Matoza Portfolio Home"
          >
            Raf Matoza
          </a>

          {/* 4 Navigation Anchors (Hick-Hyman Law) */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a
              href="#about"
              className="target-hit-size px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-md transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="target-hit-size px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-md transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="target-hit-size px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-md transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="target-hit-size px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-md transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Utilities (Theme toggle & Resume download, min 48x48 hit zone) */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="target-hit-size p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} visual theme`}
            >
              {theme === 'light' ? (
                // Moon icon
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                // Sun icon
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <a
              href="/RafMatoza_RESUME_2026.pdf"
              download="RafMatoza_RESUME_2026.pdf"
              className="target-hit-size px-4 py-2 text-sm font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-lg shadow-sm transition-colors focus:ring-2 focus:ring-offset-2"
              aria-label="Download verified resume in PDF format"
            >
              <svg className="w-4 h-4 mr-1.5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <nav aria-label="Mobile Navigation" className="md:hidden flex items-center justify-around border-t border-[var(--border-subtle)] px-2 py-1 bg-[var(--bg-surface)]">
          <a href="#about" className="target-hit-size px-2 text-xs font-medium text-[var(--text-secondary)]">About</a>
          <a href="#experience" className="target-hit-size px-2 text-xs font-medium text-[var(--text-secondary)]">Experience</a>
          <a href="#projects" className="target-hit-size px-2 text-xs font-medium text-[var(--text-secondary)]">Projects</a>
          <a href="#contact" className="target-hit-size px-2 text-xs font-medium text-[var(--text-secondary)]">Contact</a>
        </nav>
      </header>

      {/* Main Content Landmark */}
      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">

        {/* Hero & Professional Identity Section */}
        <section id="about" aria-labelledby="hero-heading" className="space-y-6 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)]">
              Mapúa University • Cum Laude (GWA 1.51)
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              President’s Lister
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              IEEE Published Presenter
            </span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 id="hero-heading" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
              Raf Bradey F. Matoza
            </h1>
            <p className="text-lg sm:text-xl font-medium text-[var(--text-secondary)] leading-relaxed">
              Information Technology graduate specializing in <strong className="text-[var(--text-primary)]">Application Development</strong> with commercial React development experience, university-level IT instruction, and published international conference research.
            </p>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              Based in Makati City, Philippines. Experienced in building responsive web applications with React and Vite, managing relational databases (MySQL, Supabase), and integrating generative AI APIs into practical desktop and web workflows.
            </p>
          </div>

          {/* Primary Action Buttons (Fitts's Law Target Size: min 48x48 px hit zone) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="target-hit-size px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] shadow-sm transition-all transform active:scale-95"
            >
              View Verified Projects
              <svg className="w-4 h-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="target-hit-size px-5 py-3 rounded-lg text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-sm transition-all"
              aria-label="Copy Raf Matoza's email address"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 mr-2 text-green-500 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-600 dark:text-green-400 font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2 text-[var(--text-muted)] inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>rafbradey.fm@gmail.com</span>
                </>
              )}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Email address copied to clipboard.' : ''}
            </span>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" aria-labelledby="experience-heading" className="space-y-6">
          <div className="border-b border-[var(--border-subtle)] pb-3">
            <h2 id="experience-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Professional Experience
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Commercial software development and university-level technical instruction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* USHER Technologies Inc. */}
            <article className="p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    IT Stack Assistant
                  </h3>
                  <p className="text-sm font-semibold text-[var(--accent-primary)]">
                    USHER Technologies Inc. • Quezon City, Philippines
                  </p>
                </div>
                <div className="text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                  Jan 2025 – Apr 2025 (Onsite Academic Internship, 3 days/week)
                </div>
              </div>
              <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
                <li>
                  Developed responsive web application features for the commercial USHER product using <strong className="text-[var(--text-primary)]">React and Vite</strong> within an active Scrum workflow.
                </li>
                <li>
                  Collaborated in sprint planning, task estimations, and modular component implementation, gaining structured exposure to professional development practices.
                </li>
                <li>
                  Translated product requirements into clean, maintainable frontend components, ensuring responsive UI behavior and adherence to team standards.
                </li>
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-4">
                <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">React</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Vite</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">JavaScript / TypeScript</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Scrum Workflow</span>
              </div>
            </article>

            {/* Mapúa University */}
            <article className="p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    Part-Time Instructor
                  </h3>
                  <p className="text-sm font-semibold text-[var(--accent-primary)]">
                    Mapúa University – School of Information Technology • Makati City, Philippines
                  </p>
                </div>
                <div className="text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                  Aug 18, 2025 – Aug 18, 2026
                </div>
              </div>
              <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
                <li>
                  Delivered technical lectures and hands-on laboratory instruction across core IT subjects: <strong className="text-[var(--text-primary)]">Programming Fundamentals, Data Structures, Relational Databases (MySQL), Data Warehousing, Networking, Information Systems, and Computer Hardware</strong>.
                </li>
                <li>
                  Communicated complex software and computational concepts into practical, structured programming exercises for students of diverse skill levels.
                </li>
                <li>
                  Led hands-on diagnostic sessions, troubleshooting student software logic errors, relational query issues, network setups, and hardware diagnostics.
                </li>
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-4">
                <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Data Structures</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">MySQL &amp; Relational Databases</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Data Warehousing</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Computer Hardware</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Networking</span>
              </div>
            </article>
          </div>
        </section>

        {/* Technical Projects Section (Verified Ground Truth) */}
        <section id="projects" aria-labelledby="projects-heading" className="space-y-6">
          <div className="border-b border-[var(--border-subtle)] pb-3">
            <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Verified Technical Projects
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Academic thesis, group engineering, and coursework projects verified against ground truth records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1: e-Simul8 */}
            <article className="flex flex-col justify-between p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                    Academic Thesis
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">Aug 2025</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  e-Simul8: VR Operating Room Simulation
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Standalone virtual reality surgical training simulation for nursing students, translating standardized operating room protocols into interactive 3D simulations.
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Engineered motion-controlled interactions, procedural verification modules, and real-time assessment logic in Unity 6 optimized for Meta Quest 3S and Meta Quest 2.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Unity 6</span>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">C#</span>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Meta Quest 3S/2</span>
              </div>
            </article>

            {/* Project 2: Budget Buddy */}
            <article className="flex flex-col justify-between p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                    Group Project
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">Nov 2024</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Budget Buddy: Financial Client with AI
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Cross-platform desktop budgeting client in Java and JavaFX for structured personal expense and savings tracking.
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Integrated the Gemini API to deliver contextual, real-time conversational assistance for user budgeting inquiries; coordinated development milestones.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Java</span>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">JavaFX</span>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Gemini API</span>
              </div>
            </article>

            {/* Project 3: Full-Stack E-Commerce */}
            <article className="flex flex-col justify-between p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                    Course Project
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">Nov 2024</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Full-Stack E-Commerce Platform
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Multi-tier web application featuring product catalogs, cart workflows, and decoupled RESTful services with Spring Boot and MySQL.
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Configured Docker containerization across frontend and backend services for reproducible local testing. Testbed for published ISBM 2024 e-commerce security research.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Angular</span>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Spring Boot</span>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">Docker</span>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">MySQL</span>
              </div>
            </article>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" aria-labelledby="skills-heading" className="space-y-6">
          <div className="border-b border-[var(--border-subtle)] pb-3">
            <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Technical Skills Matrix
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Verified technical proficiencies across programming languages, frameworks, and infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] mr-2"></span>
                Languages
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">Assessment Focus: Python, Java</p>
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'Java', 'JavaScript', 'TypeScript', 'C#', 'C++', 'Kotlin', 'PHP', 'VBA', 'GDScript'].map(skill => (
                  <span key={skill} className="px-2 py-1 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2"></span>
                Web &amp; Frameworks
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">Modern UI &amp; REST Services</p>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Vite', 'Angular', 'Spring Boot', 'JavaFX', 'Laravel', 'HTML5', 'CSS3 / Tailwind'].map(skill => (
                  <span key={skill} className="px-2 py-1 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 mr-2"></span>
                Databases
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">Relational &amp; Warehousing</p>
              <div className="flex flex-wrap gap-1.5">
                {['SQL', 'MySQL', 'Supabase', 'Data Warehousing'].map(skill => (
                  <span key={skill} className="px-2 py-1 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mr-2"></span>
                Tools &amp; Systems
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">DevOps &amp; Hardware</p>
              <div className="flex flex-wrap gap-1.5">
                {['Docker', 'Unity 6', 'Android Studio', 'Git & GitHub', 'Computer Hardware', 'Networking'].map(skill => (
                  <span key={skill} className="px-2 py-1 rounded text-xs font-medium bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications & Presentations Section */}
        <section id="publications" aria-labelledby="publications-heading" className="space-y-6">
          <div className="border-b border-[var(--border-subtle)] pb-3">
            <h2 id="publications-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Publications &amp; International Presentations
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Peer-reviewed conference research presented at international engineering symposia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 mb-2">
                2024 IEEE 7th CCET • Beijing, China
              </span>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                Evaluating the Effectiveness of AI in Integrated System Architectures to Combat Cybersecurity Threats
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Published August 2024. Researched machine learning and deep learning integration within threat-detection frameworks, examining telemetry-based automated mitigation models.
              </p>
            </article>

            <article className="p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 mb-2">
                3rd ISBM • Bangkok, Thailand
              </span>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                A Secure E-commerce Shopping Cart Design with MFA, Tokenized Payments, and Open-Source Integration
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Published September 2024. Analyzed transaction security mechanisms in decoupled web systems, focusing on multi-factor authentication (MFA) and tokenized payment architectures.
              </p>
            </article>
          </div>
        </section>

        {/* Contact & Inquiries Section */}
        <section id="contact" aria-labelledby="contact-heading" className="p-8 sm:p-12 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 id="contact-heading" className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
              Get in Touch
            </h2>
            <p className="text-base text-[var(--text-secondary)]">
              Interested in software engineering, application development, data technologies, or university instruction roles where I can contribute and grow.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="target-hit-size px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] shadow-sm transition-all transform active:scale-95"
              aria-label="Copy Raf Matoza's email address to clipboard"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
            </button>

            <a
              href="https://github.com/rafbradey"
              target="_blank"
              rel="noopener noreferrer"
              className="target-hit-size px-5 py-3 rounded-lg text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-primary)] border border-[var(--border-subtle)] transition-colors"
              aria-label="View Raf Matoza's GitHub Profile (opens in new tab)"
            >
              GitHub Profile
            </a>

            <a
              href="https://linkedin.com/in/raf-matoza"
              target="_blank"
              rel="noopener noreferrer"
              className="target-hit-size px-5 py-3 rounded-lg text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-primary)] border border-[var(--border-subtle)] transition-colors"
              aria-label="View Raf Matoza's LinkedIn Profile (opens in new tab)"
            >
              LinkedIn Profile
            </a>
          </div>
        </section>
      </main>

      {/* Footer Landmark */}
      <footer role="contentinfo" className="border-t border-[var(--border-subtle)] py-8 mt-16 bg-[var(--bg-surface)] text-center text-xs text-[var(--text-muted)] space-y-2">
        <p>
          © 2026 Raf Bradey F. Matoza • Makati City, Philippines
        </p>
        <p>
          Engineered with React 19, Vite 8, TypeScript, and Tailwind CSS v4. Grounded in empirical HCI research and WCAG 2.2 AA accessibility standards.
        </p>
      </footer>
    </div>
  )
}
