import { motion, type MotionValue, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useMemo } from 'react'
import type { Chapter } from '../data/recap'
import { abstractDataUri } from '../utils/abstractImage'

export function PhotoCard({
  idx,
  title,
  caption,
  hue,
  palette,
  scrollYProgress,
}: {
  idx: number
  title: string
  caption: string
  hue: string
  palette: Chapter['palette']
  scrollYProgress: MotionValue<number>
}) {
  const reduce = useReducedMotion()

  const img = useMemo(() => abstractDataUri(palette, idx + 17), [idx, palette])

  // Scroll parallax for the “photo” inside the card.
  const panY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [10 + idx * 2, -14 - idx * 2])
  const panX = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-8 + idx * 1.5, 10 - idx * 1.2])

  // Hover tilt (subtle, premium).
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.25 })
  const sy = useSpring(my, { stiffness: 180, damping: 22, mass: 0.25 })
  const rotX = useTransform(sy, [-0.5, 0.5], reduce ? [0, 0] : [6, -6])
  const rotY = useTransform(sx, [-0.5, 0.5], reduce ? [0, 0] : [-8, 8])

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    mx.set(x)
    my.set(y)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.article
      className="photoCard glass"
      whileHover={reduce ? undefined : { y: -4, scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        border: '1px solid rgba(255,255,255,0.12)',
        transformStyle: 'preserve-3d',
        rotateX: rotX,
        rotateY: rotY,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="photoMedia" aria-hidden="true">
        <motion.img
          className="photoImg"
          src={img}
          alt=""
          loading="lazy"
          style={{
            x: panX,
            y: panY,
            filter: 'saturate(1.08) contrast(1.05)',
          }}
        />
        <div className="photoGradient" aria-hidden="true" style={{ background: `radial-gradient(420px 320px at 30% 25%, ${hue}30, transparent 60%)` }} />
      </div>

      <div className="photoMeta">
        <div className="photoTitle">{title}</div>
        <div className="photoCaption">{caption}</div>
      </div>

      <div className="photoShine" aria-hidden="true" />
    </motion.article>
  )
}

