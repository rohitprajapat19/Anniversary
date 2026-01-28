import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'
import type { Chapter } from '../data/recap'
import { PhotoCard } from './PhotoCard'
import { Reveal } from './Reveal'

export function Gallery({ chapter }: { chapter: Chapter }) {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [22, -22])
  const titleY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [10, -10])

  const palette = useMemo(() => chapter.palette, [chapter.palette])

  return (
    <section id={chapter.key} ref={sectionRef} className="section" aria-label={chapter.title}>
      <div
        className="chapterWash"
        aria-hidden="true"
        style={{
          background: `radial-gradient(900px 700px at 20% 20%, ${palette.a}16, transparent 58%),
radial-gradient(900px 700px at 85% 25%, ${palette.b}14, transparent 60%),
radial-gradient(900px 700px at 55% 85%, ${palette.c}14, transparent 62%)`,
        }}
      />

      <div className="container">
        <div className="grid2">
          <div>
            <Reveal>
              <div className="eyebrow">{chapter.eyebrow}</div>
            </Reveal>

            <motion.h2 className="h2" style={{ y: titleY }}>
              {chapter.title}
            </motion.h2>

            <Reveal delay={0.08}>
              <p className="lead">{chapter.body}</p>
            </Reveal>

            <div className="chipRow">
              {chapter.chips.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <motion.div className="galleryWrap" style={{ y }}>
            <div className="galleryHint" aria-hidden="true">
              <span className="mutedSmall">Scroll</span>
              <span className="hintLine" />
              <span className="mutedSmall">Drag</span>
            </div>

            <div className="gallery" role="region" aria-label={`${chapter.title} gallery`}>
              {chapter.cards.map((card, idx) => (
                <PhotoCard
                  key={`${card.title}-${idx}`}
                  idx={idx}
                  title={card.title}
                  caption={card.caption}
                  hue={card.hue}
                  palette={palette}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

