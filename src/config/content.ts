/**
 * PAGE COPY — demo content
 * ------------------------------------------------------------------
 * Headlines and short texts used across the homepage and about page.
 * Keep headlines short; the photography carries half the message.
 * Wrap a word in *asterisks* to set it as an emphasised (italic) accent.
 */

export const home = {
  seo: {
    title: 'Selected sports and grand touring cars',
    description:
      'A small showroom for selected sports and grand touring cars. Inspected, documented and photographed before they are offered.',
  },
  hero: {
    eyebrow: 'Antwerp — Selected automobiles',
    headline: 'Cars worth *stopping* for.',
    supporting: 'A small collection of sports and grand touring cars. Each one inspected, documented and chosen for a reason.',
    primary: { label: 'Explore collection', href: '/vehicles' },
    secondary: { label: 'Our story', href: '/about' },
    image: 'hero-wide',
    imageMobile: 'hero-tall',
    imageAlt: 'A red sports car in a dark architectural hall, lit from above',
    /** Optional caption linking the hero photograph to the car in it. */
    captionVehicle: 'ferrari-458-spider-2012',
  },
  statement: {
    eyebrow: 'The idea',
    lines: ['Some cars are transportation.', 'Some become *stories.*'],
    body: 'We only offer the second kind. Fewer cars, better cars, and everything we know about each one.',
  },
  featured: {
    eyebrow: 'Featured',
  },
  collection: {
    eyebrow: 'The collection',
    headline: 'On the floor *now.*',
    body: 'Every car is in the showroom and ready to view. Sold cars leave the list; the good ones rarely stay long.',
    cta: { label: 'View all vehicles', href: '/vehicles' },
  },
  philosophy: {
    eyebrow: 'Philosophy',
    headline: 'Selected *differently.*',
    body: [
      'We read a car’s history before we look at the car. We measure the paint, lift it, drive it cold and warm. Most cars we see do not make it into the collection.',
      'What remains is a small number of cars we would be happy to own ourselves — and a complete, honest account of each one.',
    ],
    cta: { label: 'How we work', href: '/about' },
    image: 'story-light',
    imageAlt: 'A single headlight glowing in the dark',
  },
  services: {
    eyebrow: 'Services',
    headline: 'Beyond the *showroom.*',
    cta: { label: 'All services', href: '/services' },
  },
  journal: {
    eyebrow: 'Journal',
    headline: 'Notes on *cars* worth knowing.',
    cta: { label: 'Read the journal', href: '/journal' },
  },
  location: {
    eyebrow: 'Visit',
    headline: 'A hall built for *looking.*',
    body: 'Cars are presented under daylight-balanced light in a former warehouse by the docks. Come by during opening hours, or book a private viewing.',
    image: 'location-hall',
    imageAlt: 'A long concrete hall with vertical slots of light',
  },
  contact: {
    eyebrow: 'Enquiries',
    headline: 'Looking for something *specific?*',
    body: 'Tell us what you have in mind. We reply personally, usually the same day.',
  },
  final: {
    headline: 'Find something worth *driving.*',
    cta: { label: 'Explore the collection', href: '/vehicles' },
    image: 'final-scene',
    imageAlt: 'A car driving towards a slot of light at the end of a dark hall, tail lights glowing',
  },
};

export const about = {
  seo: {
    title: 'About',
    description: 'A small showroom with a simple idea: fewer cars, better cars, and complete honesty about each one.',
  },
  eyebrow: 'About Oberhall',
  headline: 'Fewer cars. *Better* cars.',
  intro:
    'Oberhall is a fictional showroom created to demonstrate this template. Replace this text with the story of your business: who you are, why you started, and what you refuse to compromise on.',
  image: 'about-studio',
  imageAlt: 'A slate grand tourer in a dark studio',
  principles: [
    { title: 'History first', body: 'We read every document before we look at the car. A good story on paper is where a good car starts.' },
    { title: 'Nothing hidden', body: 'Inspection notes, photographs of the underside, paint readings — you see what we see.' },
    { title: 'Original over perfect', body: 'We prefer honest, well-maintained cars to restorations that erase their history.' },
    { title: 'No pressure', body: 'There is no sales target. If a car is not right for you, we will say so.' },
  ],
  space: {
    eyebrow: 'The space',
    headline: 'A former warehouse, *rebuilt* around light.',
    body: 'Concrete, steel and tall slots of daylight. The hall is designed so you can walk around every car and see it the way it will look on the road.',
    image: 'location-hall',
    imageAlt: 'The Oberhall hall with vertical slots of light',
  },
};
