import React from 'react'
import { skillsMatrix } from '../data/portfolioData'

interface TechItem {
  name: string
  category: string
  icon: string
}

// 14 items per row, balanced alternating distribution across all 4 categories
const row1Items: TechItem[] = [
  { name: 'Python', category: 'Programming Languages', icon: '/assets/icons/tech/python.svg' },
  { name: 'TypeScript', category: 'Programming Languages', icon: '/assets/icons/tech/typescript.svg' },
  { name: 'React', category: 'Web & Frameworks', icon: '/assets/icons/tech/react.svg' },
  { name: 'Angular', category: 'Web & Frameworks', icon: '/assets/icons/tech/angular.svg' },
  { name: 'MySQL', category: 'Databases & Storage', icon: '/assets/icons/tech/mysql.svg' },
  { name: 'Docker', category: 'Systems & Infrastructure', icon: '/assets/icons/tech/docker.svg' },
  { name: 'C#', category: 'Programming Languages', icon: '/assets/icons/tech/csharp.svg' },
  { name: 'Kotlin', category: 'Programming Languages', icon: '/assets/icons/tech/kotlin.svg' },
  { name: 'HTML5', category: 'Web & Frameworks', icon: '/assets/icons/tech/html5.svg' },
  { name: 'Supabase', category: 'Databases & Storage', icon: '/assets/icons/tech/supabase.svg' },
  { name: 'Unity 6', category: 'Systems & Infrastructure', icon: '/assets/icons/tech/unity.svg' },
  { name: 'Git & GitHub', category: 'Systems & Infrastructure', icon: '/assets/icons/tech/git.svg' },
  { name: 'Networking', category: 'Systems & Infrastructure', icon: '/assets/icons/tech/networking.svg' },
  { name: 'GDScript', category: 'Programming Languages', icon: '/assets/icons/tech/gdscript.svg' }
]

const row2Items: TechItem[] = [
  { name: 'Java', category: 'Programming Languages', icon: '/assets/icons/tech/java.svg' },
  { name: 'JavaScript', category: 'Programming Languages', icon: '/assets/icons/tech/javascript.svg' },
  { name: 'Vite', category: 'Web & Frameworks', icon: '/assets/icons/tech/vite.svg' },
  { name: 'Spring Boot', category: 'Web & Frameworks', icon: '/assets/icons/tech/springboot.svg' },
  { name: 'SQL', category: 'Databases & Storage', icon: '/assets/icons/tech/sql.svg' },
  { name: 'Android Studio', category: 'Systems & Infrastructure', icon: '/assets/icons/tech/androidstudio.svg' },
  { name: 'C++', category: 'Programming Languages', icon: '/assets/icons/tech/cplusplus.svg' },
  { name: 'PHP', category: 'Programming Languages', icon: '/assets/icons/tech/php.svg' },
  { name: 'CSS3 / Tailwind', category: 'Web & Frameworks', icon: '/assets/icons/tech/tailwind.svg' },
  { name: 'Laravel', category: 'Web & Frameworks', icon: '/assets/icons/tech/laravel.svg' },
  { name: 'JavaFX', category: 'Web & Frameworks', icon: '/assets/icons/tech/javafx.svg' },
  { name: 'Data Warehousing', category: 'Databases & Storage', icon: '/assets/icons/tech/data-warehouse.svg' },
  { name: 'Computer Hardware', category: 'Systems & Infrastructure', icon: '/assets/icons/tech/hardware.svg' },
  { name: 'VBA', category: 'Programming Languages', icon: '/assets/icons/tech/vba.svg' }
]

interface TileProps {
  item: TechItem
  isDuplicate?: boolean
}

const TechTile: React.FC<TileProps> = ({ item, isDuplicate = false }) => {
  return (
    <div
      role={isDuplicate ? undefined : 'img'}
      aria-label={isDuplicate ? undefined : `${item.name} (${item.category})`}
      aria-hidden={isDuplicate ? true : undefined}
      tabIndex={isDuplicate ? -1 : 0}
      className="group relative flex-shrink-0 w-[84px] h-[86px] sm:w-[90px] sm:h-[92px] rounded-[6px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] focus-visible:border-[var(--accent-primary)] focus-visible:outline-none transition-all duration-200 flex flex-col items-center justify-between p-2.5 shadow-xs hover:shadow-[0_0_16px_var(--accent-border)] focus-visible:shadow-[0_0_16px_var(--accent-border)] hover:-translate-y-0.5 cursor-default backdrop-blur-md"
    >
      {/* Centered Icon Container with Normalized Visual Weight */}
      <div className="flex-1 w-full flex items-center justify-center">
        <img
          src={item.icon}
          alt=""
          aria-hidden="true"
          className="w-9 h-9 sm:w-10 sm:h-10 object-contain tech-tile-icon select-none pointer-events-none"
          loading="lazy"
        />
      </div>

      {/* Terminal Mono Uppercase Label */}
      <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] group-focus-visible:text-[var(--accent-primary)] transition-colors truncate max-w-full px-0.5 text-center leading-none select-none">
        {item.name}
      </span>
    </div>
  )
}

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="space-y-0">
      {/* Section Header */}
      <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--accent-primary)]"></span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent-primary)]">
              // 06 CAPABILITIES &amp; COMPILER ARCHITECTURES
            </span>
          </div>
          <h2 id="skills-heading" className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Technical Stack Matrix
          </h2>
        </div>
        <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
          Languages, Frameworks, Relational Schemas &amp; Systems
        </p>
      </div>

      {/* Screen Reader Semantic Hierarchy */}
      <div className="sr-only">
        <h3>Verified Ground Truth Technical Matrix</h3>
        {skillsMatrix.map(cat => (
          <div key={cat.category}>
            <h4>{cat.category} — {cat.note}</h4>
            <ul>
              {cat.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Dual Auto-Scrolling Marquee Viewport with Edge Fade (Aligned to Grid Bounds) */}
      <div className="pt-8 pb-8 relative w-full overflow-hidden tech-marquee-mask space-y-3.5">
        {/* Row 1: Left to Right Marquee */}
        <div className="flex overflow-hidden">
          <div className="animate-tech-marquee-ltr flex items-center gap-3.5 pr-3.5">
            {/* Primary Set */}
            {row1Items.map(item => (
              <TechTile key={`r1-p-${item.name}`} item={item} />
            ))}
            {/* Seamless Loop Duplicate Set */}
            {row1Items.map(item => (
              <TechTile key={`r1-d-${item.name}`} item={item} isDuplicate={true} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left Marquee (Staggered Offset) */}
        <div className="flex overflow-hidden pl-6 sm:pl-10">
          <div className="animate-tech-marquee-rtl flex items-center gap-3.5 pr-3.5">
            {/* Primary Set */}
            {row2Items.map(item => (
              <TechTile key={`r2-p-${item.name}`} item={item} />
            ))}
            {/* Seamless Loop Duplicate Set */}
            {row2Items.map(item => (
              <TechTile key={`r2-d-${item.name}`} item={item} isDuplicate={true} />
            ))}
          </div>
        </div>
      </div>

      {/* Closing Caption Row: Categorized Ground Truth Matrix Footer */}
      <div className="pt-8 border-t border-[var(--border-subtle)]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 font-mono text-[11px] text-[var(--text-muted)]">
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-5 gap-y-2 uppercase tracking-wider leading-relaxed">
            {skillsMatrix.map((cat, idx) => (
              <div key={cat.category} className="flex items-center gap-1.5 flex-wrap">
                <span className="font-bold text-[var(--accent-primary)]">
                  [{cat.category.toUpperCase()}]:
                </span>
                <span className="text-[var(--text-secondary)]">
                  {cat.skills.join(' • ')}
                </span>
                {idx < skillsMatrix.length - 1 && (
                  <span className="text-[var(--border-strong)] hidden sm:inline ml-2" aria-hidden="true">//</span>
                )}
              </div>
            ))}
          </div>
          <div className="shrink-0 text-[10px] uppercase tracking-widest text-[var(--text-faint)] font-bold self-start lg:self-auto">
            VERIFIED // GROUND TRUTH
          </div>
        </div>
      </div>
    </section>
  )
}
