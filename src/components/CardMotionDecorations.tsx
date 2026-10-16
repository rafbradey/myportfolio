import React from 'react'

interface CardMotionDecorationsProps {
  /** If true, renders the 4 clockwise edge drawing lines on entrance. Default true. */
  borderDraw?: boolean
  /** If true, renders the 4 viewfinder corner brackets on hover/focus. Default true. */
  cornerBrackets?: boolean
  /** If true, renders the hairline top sweep line on hover. Default true. */
  topSweep?: boolean
}

export const CardMotionDecorations: React.FC<CardMotionDecorationsProps> = ({
  borderDraw = true,
  cornerBrackets = true,
  topSweep = true
}) => {
  return (
    <div className="card-motion-decorations pointer-events-none select-none" aria-hidden="true">
      {/* Top Edge Accent Sweep */}
      {topSweep && <span className="card-top-sweep-line" />}

      {/* Tech-Style Corner Viewfinder Brackets */}
      {cornerBrackets && (
        <>
          <span className="corner-bracket corner-tl" />
          <span className="corner-bracket corner-tr" />
          <span className="corner-bracket corner-bl" />
          <span className="corner-bracket corner-br" />
        </>
      )}

      {/* Clockwise Perimeter Edge Tracing Lines (Starts top-left on reveal) */}
      {borderDraw && (
        <>
          <span className="card-edge-line edge-top" />
          <span className="card-edge-line edge-right" />
          <span className="card-edge-line edge-bottom" />
          <span className="card-edge-line edge-left" />
        </>
      )}
    </div>
  )
}
