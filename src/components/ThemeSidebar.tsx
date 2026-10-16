import React, { useState, useEffect, useRef } from 'react'

interface ThemeOption {
  id: string
  name: string
  tagline: string
  swatches: {
    bg: string
    surface: string
    accent: string
    text: string
  }
  fontDisplay: string
  fontSans: string
}

const THEMES: ThemeOption[] = [
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    tagline: 'Frosted refraction & specular glow (Default)',
    swatches: {
      bg: '#070a13',
      surface: 'rgba(30, 41, 59, 0.7)',
      accent: '#38bdf8',
      text: '#f8fafc'
    },
    fontDisplay: 'Outfit',
    fontSans: 'Plus Jakarta Sans'
  },
  {
    id: 'current',
    name: 'Current',
    tagline: 'Original editorial dossier look verbatim',
    swatches: {
      bg: '#0b0d0e',
      surface: '#181c1f',
      accent: '#d8ff38',
      text: '#f4f6f4'
    },
    fontDisplay: 'Syne',
    fontSans: 'Space Grotesk'
  },
  {
    id: 'obsidian',
    name: 'Obsidian Tech',
    tagline: 'OLED pitch black & high-contrast terminal',
    swatches: {
      bg: '#000000',
      surface: '#121316',
      accent: '#10b981',
      text: '#ffffff'
    },
    fontDisplay: 'JetBrains Mono',
    fontSans: 'Plus Jakarta Sans'
  },
  {
    id: 'aurora',
    name: 'Aurora Frost',
    tagline: 'Polar twilight & radiant boreal sheen',
    swatches: {
      bg: '#0b0f19',
      surface: 'rgba(22, 33, 58, 0.8)',
      accent: '#2dd4bf',
      text: '#f0fdf4'
    },
    fontDisplay: 'Outfit',
    fontSans: 'Space Grotesk'
  }
]

interface ThemeSidebarProps {
  currentThemeId: string
  onSelectTheme: (themeId: string) => void
}

export const ThemeSidebar: React.FC<ThemeSidebarProps> = ({
  currentThemeId,
  onSelectTheme
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const handleButtonRef = useRef<HTMLButtonElement>(null)

  const isExpanded = isOpen || isHovered

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsOpen(false)
        setIsHovered(false)
        handleButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isExpanded])

  // Click outside to close when tapped on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isOpen])

  const activeThemeObj = THEMES.find(t => t.id === currentThemeId) || THEMES[0]

  return (
    <aside
      ref={sidebarRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={(e) => {
        // If focus moves outside the sidebar container, collapse hover state
        if (!sidebarRef.current?.contains(e.relatedTarget as Node)) {
          setIsHovered(false)
        }
      }}
      aria-label="Visual Theme Switcher"
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-stretch transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExpanded ? 'translate-x-0' : '-translate-x-[calc(100%-36px)]'
      }`}
    >
      {/* 1. Main Drawer Panel (Glass Treatment) */}
      <div
        id="theme-sidebar-panel"
        className="w-72 sm:w-80 p-5 rounded-r-2xl border border-l-0 border-[var(--border-strong)] bg-[var(--bg-surface)] backdrop-blur-2xl shadow-2xl flex flex-col gap-4 text-[var(--text-primary)]"
        style={{
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), var(--glass-bevel, inset 0 1px 0 rgba(255,255,255,0.2))'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full shadow-xs"
              style={{ backgroundColor: activeThemeObj.swatches.accent }}
            />
            <h2 className="font-display font-bold text-sm tracking-wide uppercase text-[var(--text-primary)]">
              Visual Themes
            </h2>
          </div>
          <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
            {THEMES.length} Available
          </span>
        </div>

        {/* Theme List / Swatches */}
        <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
          {THEMES.map((theme) => {
            const isSelected = theme.id === currentThemeId
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => {
                  onSelectTheme(theme.id)
                  // On mobile touch, close after selection
                  if (window.innerWidth < 768) {
                    setIsOpen(false)
                  }
                }}
                className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer relative group flex flex-col gap-2 ${
                  isSelected
                    ? 'border-[var(--accent-primary)] bg-[var(--bg-surface-elevated)] shadow-md ring-1 ring-[var(--accent-primary)]'
                    : 'border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-hover)]'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-display text-xs sm:text-sm font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                    {theme.name}
                    {theme.id === 'glassmorphism' && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 bg-[var(--badge-bg)] text-[var(--badge-text)] rounded-full">
                        Default
                      </span>
                    )}
                  </span>
                  {isSelected && (
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold text-[var(--accent-contrast)]"
                      style={{ backgroundColor: theme.swatches.accent }}
                      aria-label="Active theme"
                    >
                      ✓
                    </span>
                  )}
                </div>

                <p className="font-sans text-[11px] text-[var(--text-muted)] leading-tight">
                  {theme.tagline}
                </p>

                {/* Swatches preview bar & Font badge */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center -space-x-1">
                    <span
                      className="w-4 h-4 rounded-full border border-white/20 shadow-xs"
                      style={{ backgroundColor: theme.swatches.bg }}
                      title={`Background: ${theme.swatches.bg}`}
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-white/20 shadow-xs"
                      style={{ backgroundColor: theme.swatches.surface }}
                      title={`Surface: ${theme.swatches.surface}`}
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-white/20 shadow-xs"
                      style={{ backgroundColor: theme.swatches.accent }}
                      title={`Accent: ${theme.swatches.accent}`}
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-white/20 shadow-xs"
                      style={{ backgroundColor: theme.swatches.text }}
                      title={`Text: ${theme.swatches.text}`}
                    />
                  </div>

                  <span className="font-mono text-[10px] text-[var(--text-faint)] tracking-tight">
                    {theme.fontDisplay} + {theme.fontSans}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Footer tip */}
        <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
          <span>Esc to close</span>
          <span className="text-[9px] uppercase tracking-wider">Persisted</span>
        </div>
      </div>

      {/* 2. Persistent Handle Tab Sliver (Always visible on left screen edge) */}
      <button
        ref={handleButtonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isExpanded}
        aria-controls="theme-sidebar-panel"
        aria-label="Open or close visual theme switcher sidebar"
        className="w-9 self-center py-4 bg-[var(--bg-surface)] backdrop-blur-2xl border border-l-0 border-[var(--border-strong)] rounded-r-xl shadow-xl flex flex-col items-center justify-center gap-3 cursor-pointer text-[var(--text-primary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{
          boxShadow: '4px 0 20px rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Palette Icon */}
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>

        {/* Vertical Label */}
        <span
          className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] select-none"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          THEMES
        </span>

        {/* Theme Accent Dot indicator */}
        <span
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: activeThemeObj.swatches.accent }}
        />
      </button>
    </aside>
  )
}
