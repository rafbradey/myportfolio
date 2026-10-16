import React from 'react'

export interface TechSkill {
  name: string
  category: 'Programming Languages' | 'Web & Frameworks' | 'Databases & Storage' | 'Tools & Platforms'
  icon: string
  row: 1 | 2
}

// Single Source of Truth for both the marquee tiles and the telemetry text ledger below
const techSkills: TechSkill[] = [
  // Programming Languages (9)
  { name: 'Python', category: 'Programming Languages', icon: '/assets/icons/tech/python.svg', row: 1 },
  { name: 'TypeScript', category: 'Programming Languages', icon: '/assets/icons/tech/typescript.svg', row: 1 },
  { name: 'C#', category: 'Programming Languages', icon: '/assets/icons/tech/csharp.svg', row: 1 },
  { name: 'Godot / GDScript', category: 'Programming Languages', icon: '/assets/icons/tech/godot.svg', row: 1 },
  { name: 'Java', category: 'Programming Languages', icon: '/assets/icons/tech/java.svg', row: 2 },
  { name: 'JavaScript', category: 'Programming Languages', icon: '/assets/icons/tech/javascript.svg', row: 2 },
  { name: 'C++', category: 'Programming Languages', icon: '/assets/icons/tech/cplusplus.svg', row: 2 },
  { name: 'Kotlin', category: 'Programming Languages', icon: '/assets/icons/tech/kotlin.svg', row: 2 },
  { name: 'PHP', category: 'Programming Languages', icon: '/assets/icons/tech/php.svg', row: 2 },

  // Web & Frameworks (8)
  { name: 'React', category: 'Web & Frameworks', icon: '/assets/icons/tech/react.svg', row: 1 },
  { name: 'Angular', category: 'Web & Frameworks', icon: '/assets/icons/tech/angular.svg', row: 1 },
  { name: 'HTML5', category: 'Web & Frameworks', icon: '/assets/icons/tech/html5.svg', row: 1 },
  { name: 'Tailwind CSS', category: 'Web & Frameworks', icon: '/assets/icons/tech/tailwind.svg', row: 1 },
  { name: 'Vite', category: 'Web & Frameworks', icon: '/assets/icons/tech/vite.svg', row: 2 },
  { name: 'Spring Boot', category: 'Web & Frameworks', icon: '/assets/icons/tech/springboot.svg', row: 2 },
  { name: 'CSS3', category: 'Web & Frameworks', icon: '/assets/icons/tech/css3.svg', row: 2 },
  { name: 'Laravel', category: 'Web & Frameworks', icon: '/assets/icons/tech/laravel.svg', row: 2 },

  // Databases & Storage (2)
  { name: 'MySQL', category: 'Databases & Storage', icon: '/assets/icons/tech/mysql.svg', row: 1 },
  { name: 'Supabase', category: 'Databases & Storage', icon: '/assets/icons/tech/supabase.svg', row: 2 },

  // Tools & Platforms (5)
  { name: 'Docker', category: 'Tools & Platforms', icon: '/assets/icons/tech/docker.svg', row: 1 },
  { name: 'Unity', category: 'Tools & Platforms', icon: '/assets/icons/tech/unity.svg', row: 1 },
  { name: 'Git', category: 'Tools & Platforms', icon: '/assets/icons/tech/git.svg', row: 1 },
  { name: 'Android Studio', category: 'Tools & Platforms', icon: '/assets/icons/tech/androidstudio.svg', row: 2 },
  { name: 'GitHub', category: 'Tools & Platforms', icon: '/assets/icons/tech/github.svg', row: 2 }
]

const categories: Array<TechSkill['category']> = [
  'Programming Languages',
  'Web & Frameworks',
  'Databases & Storage',
  'Tools & Platforms'
]

interface TileProps {
  item: TechSkill
  isDuplicate?: boolean
}

const TechTile: React.FC<TileProps> = ({ item, isDuplicate = false }) => {
  return (
    <div
      role={isDuplicate ? undefined : 'img'}
      aria-label={isDuplicate ? undefined : `${item.name} (${item.category})`}
      aria-hidden={isDuplicate ? true : undefined}
      tabIndex={isDuplicate ? -1 : 0}
      className="group relative flex-shrink-0 w-[82px] h-[82px] sm:w-[88px] sm:h-[88px] rounded-[7px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] focus-visible:border-[var(--accent-primary)] focus-visible:outline-none transition-all duration-200 flex items-center justify-center p-3.5 shadow-xs hover:shadow-[0_0_16px_var(--accent-border)] focus-visible:shadow-[0_0_16px_var(--accent-border)] hover:-translate-y-0.5 cursor-default backdrop-blur-md"
    >
      {/* Full-Color Brand Logo with optical balance */}
      <img
        src={item.icon}
        alt=""
        aria-hidden="true"
        className="w-11 h-11 sm:w-12 sm:h-12 object-contain select-none pointer-events-none tech-tile-icon"
        loading="lazy"
      />

      {/* Accessible Micro Tooltip on Hover / Focus */}
      {!isDuplicate && (
        <span
          role="tooltip"
          className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-200 z-30 px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent-contrast)] bg-[var(--accent-primary)] rounded shadow-xl whitespace-nowrap"
        >
          {item.name}
        </span>
      )}
    </div>
  )
}

export const SkillsSection: React.FC = () => {
  const row1 = techSkills.filter(s => s.row === 1)
  const row2 = techSkills.filter(s => s.row === 2)

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

      {/* Screen Reader Semantic Fallback */}
      <div className="sr-only">
        <h3>Verified Ground Truth Technical Matrix</h3>
        {categories.map(cat => (
          <div key={cat}>
            <h4>{cat}</h4>
            <ul>
              {techSkills
                .filter(s => s.category === cat)
                .map(s => (
                  <li key={s.name}>{s.name}</li>
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
            {row1.map(item => (
              <TechTile key={`r1-p-${item.name}`} item={item} />
            ))}
            {/* Seamless Loop Duplicate Set */}
            {row1.map(item => (
              <TechTile key={`r1-d-${item.name}`} item={item} isDuplicate={true} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left Marquee (Staggered Offset) */}
        <div className="flex overflow-hidden pl-6 sm:pl-10">
          <div className="animate-tech-marquee-rtl flex items-center gap-3.5 pr-3.5">
            {/* Primary Set */}
            {row2.map(item => (
              <TechTile key={`r2-p-${item.name}`} item={item} />
            ))}
            {/* Seamless Loop Duplicate Set */}
            {row2.map(item => (
              <TechTile key={`r2-d-${item.name}`} item={item} isDuplicate={true} />
            ))}
          </div>
        </div>
      </div>

      {/* Categorized Telemetry Ledger (Two-Column Fixed Grid) */}
      <div className="pt-8 space-y-0">
        <div className="border-t border-[var(--border-subtle)] divide-y divide-[var(--border-subtle)]">
          {categories.map(cat => {
            const skillsInCat = techSkills.filter(s => s.category === cat)
            return (
              <div
                key={cat}
                className="py-3.5 sm:py-4 grid grid-cols-1 md:grid-cols-[210px_1fr] items-baseline gap-2 md:gap-6"
              >
                {/* Left Column: Lime Uppercase Mono Category (No square brackets) */}
                <span className="font-mono text-xs uppercase font-bold tracking-widest text-[var(--accent-primary)] select-none">
                  {cat}
                </span>

                {/* Right Column: High-contrast light neutral mono items separated by thin middle dots */}
                <p className="font-mono text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed tracking-wide">
                  {skillsInCat.map((s, idx) => (
                    <React.Fragment key={s.name}>
                      <span className="hover:text-[var(--text-primary)] transition-colors">
                        {s.name}
                      </span>
                      {idx < skillsInCat.length - 1 && (
                        <span className="mx-2.5 text-[var(--border-strong)] select-none" aria-hidden="true">
                          •
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            )
          })}
        </div>

        {/* Baseline Footer Line aligned to right edge of divider */}
        <div className="pt-3 flex justify-end">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-semibold select-none">
            VERIFIED // GROUND TRUTH
          </span>
        </div>
      </div>
    </section>
  )
}
