type Palette = { a: string; b: string; c: string }

function esc(s: string) {
  return encodeURIComponent(s)
}

function hash(seed: number) {
  let t = seed + 0x6d2b79f5
  t = Math.imul(t ^ (t >>> 15), t | 1)
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

export function abstractDataUri(palette: Palette, seed: number) {
  const r1 = hash(seed * 11 + 3)
  const r2 = hash(seed * 17 + 9)
  const r3 = hash(seed * 23 + 7)

  const x1 = 20 + r1 * 60
  const y1 = 18 + r2 * 50
  const x2 = 25 + r3 * 55
  const y2 = 35 + r1 * 45

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="${palette.a}" stop-opacity="0.95"/>
      <stop offset="0.55" stop-color="${palette.b}" stop-opacity="0.75"/>
      <stop offset="1" stop-color="${palette.c}" stop-opacity="0.85"/>
    </linearGradient>
    <filter id="blur">
      <feGaussianBlur stdDeviation="22"/>
    </filter>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 .22 0"/>
    </filter>
  </defs>

  <rect width="1200" height="800" fill="url(#g)"/>

  <g filter="url(#blur)" opacity="0.85">
    <circle cx="${x1 * 12}" cy="${y1 * 12}" r="210" fill="#ffffff"/>
    <circle cx="${x2 * 12}" cy="${y2 * 12}" r="180" fill="${palette.a}"/>
    <circle cx="${(x1 + 18) * 12}" cy="${(y2 + 14) * 10}" r="240" fill="${palette.b}"/>
    <circle cx="${(x2 + 24) * 10}" cy="${(y1 + 18) * 10}" r="190" fill="${palette.c}"/>
  </g>

  <rect width="1200" height="800" filter="url(#noise)" opacity="0.55"/>

  <rect width="1200" height="800" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="4"/>
</svg>
`.trim()

  return `data:image/svg+xml;charset=utf-8,${esc(svg)}`
}

