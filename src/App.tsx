import { CursorGlow } from './components/CursorGlow'
import { AmbientBackdrops } from './components/AmbientBackdrops'
import { Finale } from './components/Finale'
import { FilmOverlay } from './components/FilmOverlay'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { LenisProvider } from './components/LenisProvider'
import { ScrollProgress } from './components/ScrollProgress'
import { Timeline } from './components/Timeline'
import { chapters, milestones } from './data/recap'

export default function App() {
  return (
    <LenisProvider>
      <div className="progressWrap" aria-hidden="true">
        <ScrollProgress />
      </div>

      <AmbientBackdrops />
      <CursorGlow />
      <FilmOverlay />

      <header className="topBar">
        <div className="topBarInner">
          <div className="brand" aria-label="Anniversary recap">
            <span className="brandDot" aria-hidden="true" />
            <span className="brandTitle">Anniversary Recap</span>
          </div>
          <a className="btn" href="#finale">
            Here’s to the next chapter
          </a>
        </div>
      </header>

      <main>
        <Hero />

        {chapters.map((c) => (
          <Gallery key={c.key} chapter={c} />
        ))}

        <Timeline milestones={milestones} />

        <Finale />
      </main>
    </LenisProvider>
  )
}
