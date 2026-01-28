export type Chapter = {
  key: string
  eyebrow: string
  title: string
  body: string
  chips: string[]
  palette: {
    a: string
    b: string
    c: string
  }
  cards: Array<{
    title: string
    caption: string
    hue: string
  }>
}

export type Milestone = {
  date: string
  title: string
  caption: string
  accent: string
}

export const chapters: Chapter[] = [
  {
    key: 'beginning',
    eyebrow: 'Chapter I',
    title: 'Beginning',
    body:
      'A first step that felt small in the moment—yet it quietly redrew the map of everything that followed.',
    chips: ['First photos', 'New routines', 'Little rituals', 'Late-night talks'],
    palette: { a: '#f5d08a', b: '#ffc7e8', c: '#9fd6ff' },
    cards: [
      { title: 'The first spark', caption: 'A simple day that turned iconic.', hue: '#f5d08a' },
      { title: 'Soft mornings', caption: 'Light, laughter, and slow time.', hue: '#ffc7e8' },
      { title: 'New places', caption: 'We kept choosing “yes.”', hue: '#9fd6ff' },
      { title: 'Quiet proof', caption: 'The comfort that stayed.', hue: '#b8ffe6' },
    ],
  },
  {
    key: 'growth',
    eyebrow: 'Chapter II',
    title: 'Growth',
    body:
      'Not louder—deeper. The year taught us how to hold the ordinary with tenderness and turn it into art.',
    chips: ['Learning', 'Trust', 'Support', 'Inside jokes'],
    palette: { a: '#b8ffe6', b: '#f5d08a', c: '#9fd6ff' },
    cards: [
      { title: 'Tiny wins', caption: 'The kind that build a life.', hue: '#b8ffe6' },
      { title: 'Hard days, softer hands', caption: 'We didn’t let go.', hue: '#f5d08a' },
      { title: 'New rhythms', caption: 'A shared pace.', hue: '#9fd6ff' },
      { title: 'Glimmer moments', caption: 'The magic in-between.', hue: '#ffc7e8' },
    ],
  },
  {
    key: 'highlights',
    eyebrow: 'Chapter III',
    title: 'Highlights',
    body:
      'The cinematic part: the days that looked like postcards—yet felt even better than they photographed.',
    chips: ['Trips', 'Celebrations', 'Spontaneity', 'Golden hour'],
    palette: { a: '#ffc7e8', b: '#9fd6ff', c: '#f5d08a' },
    cards: [
      { title: 'Golden hour', caption: 'Everything glowing, including us.', hue: '#f5d08a' },
      { title: 'City lights', caption: 'A night we’ll replay forever.', hue: '#9fd6ff' },
      { title: 'The best surprise', caption: 'Joy, unplanned.', hue: '#ffc7e8' },
      { title: 'The look', caption: 'The one that says “home.”', hue: '#b8ffe6' },
    ],
  },
  {
    key: 'milestones',
    eyebrow: 'Chapter IV',
    title: 'Milestones',
    body:
      'The moments that became anchors—proof that we kept showing up, choosing each other, and growing forward.',
    chips: ['Firsts', 'Traditions', 'Promises', 'Future plans'],
    palette: { a: '#9fd6ff', b: '#b8ffe6', c: '#f5d08a' },
    cards: [
      { title: 'A promise made', caption: 'Not perfect—real.', hue: '#f5d08a' },
      { title: 'A tradition born', caption: 'We’ll do this every year.', hue: '#b8ffe6' },
      { title: 'A brave conversation', caption: 'Where we leveled up.', hue: '#9fd6ff' },
      { title: 'A future outlined', caption: 'Softly, confidently.', hue: '#ffc7e8' },
    ],
  },
]

export const milestones: Milestone[] = [
  {
    date: 'Month 01',
    title: 'The first “we”',
    caption: 'A beginning that felt like destiny and discipline at once.',
    accent: '#f5d08a',
  },
  {
    date: 'Month 03',
    title: 'A new routine',
    caption: 'Small habits turned into a shared life.',
    accent: '#9fd6ff',
  },
  {
    date: 'Month 06',
    title: 'The summer highlight',
    caption: 'Golden hour, big laughter, and no rush to leave.',
    accent: '#ffc7e8',
  },
  {
    date: 'Month 09',
    title: 'The hard week',
    caption: 'Where we learned to be gentle and brave together.',
    accent: '#b8ffe6',
  },
  {
    date: 'Month 12',
    title: 'One year',
    caption: 'A chapter completed. A bigger one opening.',
    accent: '#f5d08a',
  },
]

