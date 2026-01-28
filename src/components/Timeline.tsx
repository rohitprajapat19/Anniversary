import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { Milestone } from '../data/recap'
import { Reveal } from './Reveal'

export function Timeline({ milestones }: { milestones: Milestone[] }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const lineScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.2, 1])

  return (
    <section id="timeline" ref={ref} className="section" aria-label="Timeline">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Timeline</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="h2">Moments that shaped the year</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="lead">As you scroll, each milestone arrives like a scene—softly, then all at once.</p>
        </Reveal>

        <div className="timelineWrap">
          <motion.div className="timelineLine" style={{ scaleY: lineScale }} aria-hidden="true" />

          <div className="timelineList" role="list">
            {milestones.map((m, idx) => (
              <motion.div
                key={`${m.date}-${m.title}`}
                className="timelineItem"
                role="listitem"
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18, filter: 'blur(10px)' }}
                whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
              >
                <div className="timelineDot" aria-hidden="true" style={{ background: m.accent }} />
                <div className="timelineCard glass">
                  <div className="timelineDate">{m.date}</div>
                  <div className="timelineTitle">{m.title}</div>
                  <div className="timelineCaption">{m.caption}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

