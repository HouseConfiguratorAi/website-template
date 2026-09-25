/**
 * PAGE COPY — demo content
 * ------------------------------------------------------------------
 * Headlines and short texts used across the homepage and about page.
 * Keep headlines short; the photography carries half the message.
 * Wrap a word in *asterisks* to set it as an emphasised accent (a lighter weight in
 * the default theme, italic in the serif themes).
 */

export const home = {
  seo: {
    title: 'Geselecteerde sport- en GT-auto’s in Amsterdam',
    description:
      'Een kleine showroom voor geselecteerde sport- en GT-auto’s. Gekeurd, gedocumenteerd en gefotografeerd voordat we ze aanbieden.',
  },
  hero: {
    eyebrow: 'Amsterdam — Geselecteerde automobielen',
    headline: 'Het wachten *waard.*',
    supporting: 'Een kleine collectie sport- en GT-auto’s. Elke auto gekeurd, gedocumenteerd en met een reden gekozen.',
    primary: { label: 'Ontdek het aanbod', href: '/aanbod' },
    secondary: { label: 'Ons verhaal', href: '/over-ons' },
    image: 'hero-wide',
    imageMobile: 'hero-tall',
    imageAlt: 'Een rode sportauto in een donkere hal, van bovenaf belicht',
    /** Optional caption linking the hero photograph to the car in it. */
    captionVehicle: 'ferrari-458-spider-2012',
  },
  statement: {
    eyebrow: 'Het idee',
    lines: ['Sommige auto’s brengen je ergens.', 'Andere worden *een verhaal.*'],
    body: 'Wij bieden alleen die tweede soort aan. Minder auto’s, betere auto’s — en alles wat we over elk ervan weten.',
  },
  featured: {
    eyebrow: 'Uitgelicht',
  },
  collection: {
    eyebrow: 'De collectie',
    headline: 'Nu in de *showroom.*',
    body: 'Elke auto staat in de showroom en is klaar om te bezichtigen. Verkochte auto’s verdwijnen van de lijst — de goede blijven zelden lang.',
    cta: { label: 'Bekijk het volledige aanbod', href: '/aanbod' },
  },
  philosophy: {
    eyebrow: 'Filosofie',
    headline: 'Anders *geselecteerd.*',
    body: [
      'We lezen de geschiedenis van een auto voordat we naar de auto zelf kijken. We meten de lak, zetten hem op de brug en rijden hem koud en warm. De meeste auto’s die we zien, halen de collectie niet.',
      'Wat overblijft is een klein aantal auto’s die we zelf graag zouden bezitten — met een volledig en eerlijk verslag van elk ervan.',
    ],
    cta: { label: 'Zo werken wij', href: '/over-ons' },
    image: 'story-light',
    imageAlt: 'Eén koplamp die oplicht in het donker',
  },
  services: {
    eyebrow: 'Diensten',
    headline: 'Meer dan een *showroom.*',
    cta: { label: 'Alle diensten', href: '/diensten' },
  },
  journal: {
    eyebrow: 'Magazine',
    headline: 'Over auto’s die het *kennen waard* zijn.',
    cta: { label: 'Lees het magazine', href: '/magazine' },
  },
  location: {
    eyebrow: 'Bezoek',
    headline: 'Een hal gebouwd om te *kijken.*',
    body: 'De auto’s staan onder daglichtgebalanceerd licht in een voormalig pakhuis aan het IJ. Kom langs tijdens de openingstijden of plan een privébezichtiging.',
    image: 'location-hall',
    imageAlt: 'Een lange betonnen hal met verticale lichtstroken',
  },
  contact: {
    eyebrow: 'Contact',
    headline: 'Op zoek naar iets *bijzonders?*',
    body: 'Vertel ons wat u zoekt. We antwoorden persoonlijk, meestal dezelfde dag nog.',
  },
  final: {
    headline: 'Vind een auto die het *rijden waard* is.',
    cta: { label: 'Ontdek de collectie', href: '/aanbod' },
    image: 'final-scene',
    imageAlt: 'Een auto rijdt naar een lichtspleet aan het einde van een donkere hal, achterlichten gloeiend',
  },
};

export const about = {
  seo: {
    title: 'Over ons',
    description: 'Een kleine showroom met een eenvoudig idee: minder auto’s, betere auto’s en volledige eerlijkheid over elk ervan.',
  },
  eyebrow: 'Over Oberhall',
  headline: 'Minder auto’s. *Betere* auto’s.',
  intro:
    'Oberhall is een fictieve showroom, gemaakt om deze template te demonstreren. Vervang deze tekst door het verhaal van uw bedrijf: wie u bent, waarom u begon en waar u nooit concessies aan doet.',
  image: 'about-studio',
  imageAlt: 'Een leigrijze GT in een donkere studio',
  principles: [
    { title: 'Eerst de historie', body: 'We lezen elk document voordat we naar de auto kijken. Een goed verhaal op papier is waar een goede auto begint.' },
    { title: 'Niets verborgen', body: 'Keuringsnotities, foto’s van de onderkant, laklaagdiktes — u ziet wat wij zien.' },
    { title: 'Origineel boven perfect', body: 'We verkiezen eerlijke, goed onderhouden auto’s boven restauraties die hun geschiedenis uitwissen.' },
    { title: 'Geen druk', body: 'Er is geen verkooptarget. Als een auto niet bij u past, zeggen we dat eerlijk.' },
  ],
  space: {
    eyebrow: 'De ruimte',
    headline: 'Een voormalig pakhuis, *herbouwd* rond licht.',
    body: 'Beton, staal en hoge stroken daglicht. De hal is zo ontworpen dat u om elke auto heen kunt lopen en hem ziet zoals hij er op de weg uitziet.',
    image: 'location-hall',
    imageAlt: 'De hal van Oberhall met verticale lichtstroken',
  },
};
