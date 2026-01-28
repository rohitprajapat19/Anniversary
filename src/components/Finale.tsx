import confetti from 'canvas-confetti'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Reveal'

export function Finale() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement | null>(null)
  const [fired, setFired] = useState(false)

  useEffect(() => {
    if (reduce) return
    if (!ref.current) return

    const el = ref.current
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting)
        if (hit && !fired) setFired(true)
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [fired, reduce])

  useEffect(() => {
    if (!fired) return
    if (reduce) return
    // Gentle, premium “sparkle” burst (not chaotic).
    confetti({
      particleCount: 90,
      spread: 62,
      startVelocity: 28,
      gravity: 0.9,
      ticks: 220,
      scalar: 0.9,
      colors: ['#f5d08a', '#ffc7e8', '#9fd6ff', '#b8ffe6', '#ffffff'],
      origin: { x: 0.5, y: 0.7 },
    })
  }, [fired, reduce])

  const onCelebrate = () => {
    if (reduce) return
    confetti({
      particleCount: 140,
      spread: 78,
      startVelocity: 34,
      gravity: 0.85,
      ticks: 260,
      scalar: 1,
      colors: ['#f5d08a', '#ffc7e8', '#9fd6ff', '#b8ffe6', '#ffffff'],
      origin: { x: 0.5, y: 0.75 },
    })
  }

  return (
    <section id="finale" ref={ref} className="section" aria-label="Finale">
      <div className="finaleBg" aria-hidden="true" />
      <div className="container">
        <div className="finaleInner glass">
          <Reveal>
            <div className="eyebrow">Celebration</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h2">Thank you for being part of this year.</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead">
              For every quiet moment, every brave day, every laugh that stayed. Here’s to the next
              chapter—brighter, softer, and even more ours.
            </p>
          </Reveal>

          <div className="finaleActions">
            <button className="btn" onClick={onCelebrate} type="button">
              Here’s to the next chapter
            </button>
            <motion.a
              className="btn btnGhost"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              whileHover={reduce ? undefined : { y: -1 }}
              transition={{ duration: 0.25 }}
            >
              Back to the beginning
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

