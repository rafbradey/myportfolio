import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { ExperienceSection } from './components/ExperienceSection'
import { FeaturedProjectSection } from './components/FeaturedProjectSection'
import { SmallAcademicProjectsSection } from './components/SmallAcademicProjectsSection'
import { PublicationsSection } from './components/PublicationsSection'
import { SkillsSection } from './components/SkillsSection'
import { EducationCredentialsSection } from './components/EducationCredentialsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { ThemeSidebar } from './components/ThemeSidebar'
import { ArchitectureModal } from './components/Modals/ArchitectureModal'
import { VideoDemoModal } from './components/Modals/VideoDemoModal'
import { PaperZoomModal } from './components/Modals/PaperZoomModal'
import type { ProjectData, PublicationData } from './data/portfolioData'

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme')
      if (saved === 'dark' || saved === 'light') return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'dark'
  })

  const [visualTheme, setVisualTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-visual-theme')
      if (saved === 'current') return 'editorial-dossier'
      if (saved) return saved
    }
    return 'editorial-dossier'
  })

  const [activeArchitectureProject, setActiveArchitectureProject] = useState<ProjectData | null>(null)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [selectedPaper, setSelectedPaper] = useState<PublicationData | null>(null)

  // Sync color mode (light / dark) with HTML document root
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

  // Sync visual aesthetic theme (glassmorphism / current / obsidian / aurora) with HTML root
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', visualTheme)
    localStorage.setItem('portfolio-visual-theme', visualTheme)
  }, [visualTheme])

  // Global Escape key listener & background scroll lock for open modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeArchitectureProject) setActiveArchitectureProject(null)
        if (isDemoOpen) setIsDemoOpen(false)
        if (selectedPaper) setSelectedPaper(null)
      }
    }

    if (activeArchitectureProject || isDemoOpen || selectedPaper) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeArchitectureProject, isDemoOpen, selectedPaper])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  // Top Scroll Progress Bar (scaleX based on scroll depth)
  useEffect(() => {
    const bar = document.getElementById('scroll-progress-bar')
    if (!bar) return

    let ticking = false
    const updateProgress = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight
          if (totalHeight > 0) {
            const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight))
            bar.style.transform = `scaleX(${progress})`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  // Section Scroll Reveals IntersectionObserver (trigger once per section)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal-section]').forEach(el => el.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      }
    )

    const sections = document.querySelectorAll('[data-reveal-section]')
    sections.forEach(sec => observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200 relative overflow-x-hidden">
      {/* Top Hairline Scroll Progress Bar */}
      <div id="scroll-progress-bar" aria-hidden="true" />

      {/* Ambient Hairline Terminal Grid Pattern */}
      <div className="ambient-terminal-grid" aria-hidden="true" />

      {/* Ambient Luminous Refraction Orbs (Provides real light content for Glassmorphism & Aurora themes) */}
      <div
        className="glass-glow-ambient w-96 h-96 -top-24 -left-20 bg-sky-400/25 dark:bg-sky-500/20"
        aria-hidden="true"
      />
      <div
        className="glass-glow-ambient w-[32rem] h-[32rem] top-1/3 -right-32 bg-indigo-400/20 dark:bg-indigo-600/15"
        aria-hidden="true"
      />
      <div
        className="glass-glow-ambient w-96 h-96 bottom-1/4 left-1/4 bg-teal-400/20 dark:bg-teal-500/15"
        aria-hidden="true"
      />

      {/* Slide-out Visual Themes Switcher Sidebar on the Left Edge */}
      <ThemeSidebar
        currentThemeId={visualTheme}
        onSelectTheme={(themeId) => setVisualTheme(themeId)}
      />

      {/* Skip to Main Content Link (WCAG 2.2 Level A SC 2.4.1 Bypass Blocks) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[var(--accent-primary)] focus:text-[var(--accent-contrast)] focus:outline-none focus:ring-2 focus:ring-[var(--border-strong)] font-mono text-xs uppercase tracking-wider font-bold shadow-2xl"
      >
        [Skip to main content]
      </a>

      {/* Header & Primary Navigation */}
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Landmark */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* Hero & Identity */}
        <Hero />

        {/* Professional Experience Section */}
        <ExperienceSection />

        {/* Flagship Featured Project: e-Simul8 */}
        <FeaturedProjectSection
          onOpenArchitecture={project => setActiveArchitectureProject(project)}
          onOpenDemo={() => setIsDemoOpen(true)}
        />

        {/* Small Academic Projects: Budget Buddy & Full-Stack E-Commerce (Strictly No Images) */}
        <SmallAcademicProjectsSection
          onOpenArchitecture={project => setActiveArchitectureProject(project)}
        />

        {/* Peer-Reviewed Publications: IEEE CCET 2024 & ISBM 2024 */}
        <PublicationsSection
          onOpenPaper={paper => setSelectedPaper(paper)}
        />

        {/* Technical Capabilities Matrix */}
        <SkillsSection />

        {/* Education, Cum Laude & President's List Awards */}
        <EducationCredentialsSection />

        {/* Contact & Professional Channels Hub */}
        <ContactSection />
      </main>

      {/* Footer Landmark */}
      <Footer />

      {/* Accessible Modals */}
      <ArchitectureModal
        project={activeArchitectureProject}
        onClose={() => setActiveArchitectureProject(null)}
      />

      <VideoDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />

      <PaperZoomModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
      />
    </div>
  )
}
