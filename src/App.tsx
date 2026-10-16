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
    return 'dark' // Default to our intentional dark obsidian palette
  })

  const [activeArchitectureProject, setActiveArchitectureProject] = useState<ProjectData | null>(null)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [selectedPaper, setSelectedPaper] = useState<PublicationData | null>(null)

  // Sync theme class with HTML document root
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

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Skip to Main Content Link (WCAG 2.2 Level A SC 2.4.1 Bypass Blocks) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent-primary)] focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white font-mono text-xs"
      >
        Skip to main content
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
