import React, { useState } from 'react'
import esimul8Img from '../../assets/esimul8_preview.jpg'
import { ImageWithSkeleton } from '../ImageWithSkeleton'

interface VideoDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export const VideoDemoModal: React.FC<VideoDemoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeChapter, setActiveChapter] = useState(0)

  if (!isOpen) return null

  const chapters = [
    { title: 'Pre-Op Scrub & Sterile Gowning', timestamp: '0:00', duration: '1:15', status: 'Passed' },
    { title: 'Sterile Field Boundary Draping', timestamp: '1:15', duration: '2:05', status: 'Active Check' },
    { title: '6-DoF Surgical Grasp & Handover', timestamp: '2:05', duration: '2:55', status: 'Sub-Millimeter Tracking' },
    { title: 'Sterility Breach Debrief Telemetry', timestamp: '2:55', duration: '3:45', status: 'Instructor Score: 98%' }
  ]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-demo-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="max-w-4xl w-full bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <div>
              <h2 id="modal-demo-title" className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                e-Simul8: Standalone VR Surgical Training Simulation
              </h2>
              <p className="text-xs text-[var(--text-muted)] font-mono">
                Unity 6 • Meta Quest 3S &amp; Meta Quest 2 Standalone Deployment
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="target-hit-size p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
            aria-label="Close demo modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative bg-black aspect-video flex items-center justify-center overflow-hidden group">
          <ImageWithSkeleton
            src={esimul8Img}
            alt="e-Simul8 surgical operating room procedural training in Unity 6"
            aspectRatioClass="aspect-video"
            imgClassName={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-95' : 'opacity-85'}`}
          />

          {/* Player Interface Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 flex flex-col justify-between p-4 sm:p-6 pointer-events-none">
            {/* Header Telemetry Pill */}
            <div className="flex items-center justify-between text-xs text-white/90">
              <span className="font-mono bg-black/70 px-2.5 py-1 rounded backdrop-blur-xs border border-white/10">
                SNAPDRAGON XR2 GEN 2 • 72 FPS FIXED TIMESTEP
              </span>
              <span className="bg-emerald-600/90 text-white px-2 py-0.5 rounded font-mono text-[11px] font-semibold tracking-wider">
                SIMULATION WALKTHROUGH
              </span>
            </div>

            {/* Central Play/Pause Trigger */}
            <div className="self-center flex flex-col items-center gap-2 pointer-events-auto">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--accent-primary)]/90 hover:bg-[var(--accent-primary)] text-white flex items-center justify-center shadow-xl cursor-pointer transition-all transform hover:scale-105 active:scale-95"
                aria-label={isPlaying ? 'Pause interactive preview' : 'Play interactive preview'}
              >
                {isPlaying ? (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <span className="text-white text-xs font-semibold drop-shadow-md">
                {isPlaying ? 'Simulation Running • Click to Pause' : 'Click to Play Interactive Walkthrough'}
              </span>
            </div>

            {/* Bottom Scrubber & Time Bar */}
            <div className="space-y-2 pointer-events-auto">
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-[var(--accent-primary)] rounded-full transition-all duration-300"
                  style={{ width: `${(activeChapter + 1) * 25}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-xs text-white/80 font-mono">
                <span>{chapters[activeChapter].timestamp} / 3:45 • {chapters[activeChapter].title}</span>
                <span>1080p60 VR Stereoscopic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Selection & Debriefing Details */}
        <div className="p-4 sm:p-6 bg-[var(--bg-surface)] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-mono">
              Simulation Scenario Chapters
            </h3>
            <span className="text-xs text-[var(--accent-primary)] font-mono font-semibold">
              Select Phase to Inspect
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {chapters.map((ch, idx) => (
              <button
                key={ch.title}
                type="button"
                onClick={() => {
                  setActiveChapter(idx)
                  setIsPlaying(true)
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  activeChapter === idx
                    ? 'bg-[var(--accent-light)] border-[var(--accent-border)] text-[var(--accent-primary)]'
                    : 'bg-[var(--bg-surface-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span>{ch.timestamp}</span>
                  <span className="px-1.5 py-0.5 rounded bg-[var(--bg-surface)] font-semibold text-[10px]">
                    {ch.duration}
                  </span>
                </div>
                <p className="text-xs font-bold line-clamp-1">{ch.title}</p>
                <span className="text-[10px] text-[var(--text-muted)] font-mono mt-1 block">
                  {ch.status}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[var(--text-muted)]">
            <p>
              Mapúa University BS IT Thesis simulation. Standalone <code>.apk</code> packages and demonstration walkthroughs available upon inquiry.
            </p>
            <a
              href="mailto:rafbradey.fm@gmail.com?subject=e-Simul8 VR Demonstration Video Request"
              className="text-[var(--accent-primary)] hover:underline font-semibold font-mono whitespace-nowrap"
            >
              Request Full Video Walkthrough →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
