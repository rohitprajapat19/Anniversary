import { useEffect } from 'react'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function FilmOverlay() {
  useEffect(() => {
    // If user prefers reduced motion, keep the overlays but stop animated “jitter”.
    if (prefersReducedMotion()) {
      document.documentElement.classList.add('reduceMotion')
      return () => document.documentElement.classList.remove('reduceMotion')
    }
  }, [])

  return (
    <div className="filmOverlay" aria-hidden="true">
      <div className="filmVignette" />
      <div className="filmGrain" />
      <div className="filmScanlines" />
    </div>
  )
}

