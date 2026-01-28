import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './Reveal'

const headline = 'One Year. One Journey. Countless Memories.'

export function Hero() {
  const reduce = useReducedMotion()
  const words = headline.split(' ')

  return (
    <section className="section" aria-label="Hero">
      <div className="heroBg" aria-hidden="true" />

      <div className="container">
        <div className="heroInner">
          <div>
            <Reveal>
              <div className="eyebrow">A cinematic recap • 12 months • 1 story</div>
            </Reveal>

            <h1 className="h1">
              {words.map((w, idx) => (
                <motion.span
                  key={`${w}-${idx}`}
                  className="heroWord"
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
                  animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.12 + idx * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {w}{' '}
                </motion.span>
              ))}
            </h1>

            <Reveal delay={0.25}>
              <p className="lead">
                Elegant, nostalgic, and quietly futuristic—built like a living album with motion,
                depth, and warm light.
              </p>
            </Reveal>

            <div className="heroActions">
              <a className="btn" href="#beginning">
                Start the story
              </a>
              <a className="btn btnGhost" href="#timeline">
                Jump to timeline
              </a>
            </div>
          </div>

          <Reveal delay={0.25}>
            <div className="heroCard glass">
              <div className="heroCardGlow" aria-hidden="true" />
              <div className="heroCardTop">
                <span className="chip">Beginning</span>
                <span className="chip">Growth</span>
                <span className="chip">Highlights</span>
                <span className="chip">Milestones</span>
              </div>
              <div className="heroCardTitle">A year, in chapters</div>
              <div className="heroCardBody">
                Scroll to reveal moments. Hover to feel depth. Pause to re-live.
              </div>
              <div className="heroCardFoot">
                <div className="sparkLine" aria-hidden="true" />
                <div className="mutedSmall">Made with love and a little stardust.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

