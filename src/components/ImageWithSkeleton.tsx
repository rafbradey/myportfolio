import React, { useState } from 'react'

interface ImageWithSkeletonProps {
  src: string
  alt: string
  aspectRatioClass?: string // e.g. 'aspect-video' or 'aspect-[16/10]'
  className?: string
  imgClassName?: string
  fetchPriority?: 'high' | 'low' | 'auto'
  loading?: 'lazy' | 'eager'
  onClick?: () => void
  interactive?: boolean
  badge?: React.ReactNode
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  aspectRatioClass = 'aspect-video',
  className = '',
  imgClassName = '',
  fetchPriority,
  loading = 'lazy',
  onClick,
  interactive = false,
  badge
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div
      className={`relative w-full overflow-hidden bg-[var(--bg-surface-elevated)] ${aspectRatioClass} ${className} ${
        interactive ? 'cursor-pointer group' : ''
      }`}
      onClick={onClick}
    >
      {/* Skeleton Shimmer Placeholder: Displayed until image fires onLoad or on error */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 skeleton-shimmer flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2 text-[var(--text-muted)] opacity-60">
            <svg
              className="w-8 h-8 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-[11px] font-mono tracking-wider uppercase">Loading Media</span>
          </div>
        </div>
      )}

      {/* Error Fallback State */}
      {hasError ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[var(--bg-surface-elevated)] text-[var(--text-muted)]"
          role="alert"
        >
          <svg className="w-8 h-8 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-xs font-semibold text-[var(--text-primary)]">Media preview unavailable</p>
          <p className="text-[11px] text-[var(--text-muted)] mt-1">Project documentation available upon request</p>
        </div>
      ) : (
        /* Real Image with smooth opacity transition */
        <img
          src={src}
          alt={alt}
          loading={loading}
          // @ts-expect-error fetchpriority is a valid modern HTML attribute
          fetchpriority={fetchPriority}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${interactive ? 'group-hover:scale-105' : ''} ${imgClassName}`}
        />
      )}

      {/* Optional Badge Overlay */}
      {badge && <div className="absolute top-3 left-3 z-10 pointer-events-none">{badge}</div>}
    </div>
  )
}
