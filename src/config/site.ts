/**
 * SITE CONFIGURATION
 * ------------------------------------------------------------------
 * The one file to edit when this template becomes a real business:
 * identity, contact details, navigation and defaults for SEO.
 *
 * Everything below is DEMO CONTENT for the fictional brand "Oberhall".
 * The address, phone number and e-mail are placeholders and do not
 * belong to a real company. Replace them before going live.
 */

export const site = {
  /** Short brand name — used in the header, titles and structured data. */
  name: 'Oberhall',
  /** Registered / legal name — used in the footer and legal pages. */
  legalName: 'Oberhall Automobielen B.V. (demo)',
  /** One line that describes the business. Used as the default meta description. */
  description:
    'Oberhall is een kleine showroom voor geselecteerde sport- en GT-auto’s in Amsterdam. Elke auto wordt gekeurd, gedocumenteerd en gefotografeerd voordat we hem aanbieden.',
  /** Production URL, no trailing slash. Used for canonical URLs, sitemap and OpenGraph. */
  url: 'https://oberhall.example',
  locale: 'nl-NL',
  /** BCP-47 language tag for <html lang>. */
  lang: 'nl',
  currency: 'EUR',
  distanceUnit: 'km' as 'km' | 'mi',

  /**
   * Logo. Either a typeset wordmark (default) or an image file placed in /public.
   * An image logo is sized by height, so any aspect ratio works in the header.
   */
  logo: {
    type: 'wordmark' as 'wordmark' | 'image',
    text: 'Oberhall',
    /** Used when type is 'image', e.g. '/brand/logo.svg'. Provide a light version for dark sections. */
    src: '',
    srcOnLight: '',
    alt: 'Oberhall',
  },

  /** Default social sharing image (1200×630), key from src/assets/media. */
  ogImage: 'hero-wide',

  social: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'YouTube', href: 'https://youtube.com/' },
  ],
} as const;

export const contact = {
  email: 'hallo@oberhall.example',
  phone: '+31 20 000 00 00',
  /** tel: link — digits only. */
  phoneHref: '+31200000000',
  address: {
    street: 'Danzigerkade 00',
    postalCode: '1013 AP',
    city: 'Amsterdam',
    region: 'Noord-Holland',
    country: 'Nederland',
    countryCode: 'NL',
  },
  /** Chamber of Commerce and VAT numbers, shown in the footer (placeholders). */
  registration: { kvk: '00000000', vat: 'NL000000000B01' },
  /** Latitude/longitude for structured data and the directions link. */
  geo: { lat: 52.3925, lng: 4.8836 },
  directionsUrl: 'https://www.openstreetmap.org/?mlat=52.3925&mlon=4.8836#map=16/52.3925/4.8836',
  /** IANA timezone of the showroom — used for the live local time and open/closed status. */
  timezone: 'Europe/Amsterdam',
  /**
   * Machine-readable weekly schedule (0 = Sunday … 6 = Saturday), 24h "HH:MM".
   * Drives the "Open now / Closed" indicator. Days without an entry are closed.
   */
  schedule: {
    2: ['10:00', '18:00'],
    3: ['10:00', '18:00'],
    4: ['10:00', '18:00'],
    5: ['10:00', '18:00'],
    6: ['10:00', '16:00'],
  } as Record<number, [string, string]>,
  hours: [
    { days: 'Dinsdag – vrijdag', time: '10:00 – 18:00', schema: 'Tu-Fr 10:00-18:00' },
    { days: 'Zaterdag', time: '10:00 – 16:00', schema: 'Sa 10:00-16:00' },
    { days: 'Zondag – maandag', time: 'Op afspraak', schema: '' },
  ],
  /**
   * Where the contact form posts to. Leave empty to run the form in demo mode
   * (it validates, but nothing is sent). Use any endpoint that accepts
   * multipart/form-data — e.g. your own API route, Formspree, Basin or a CRM webhook.
   * Never put secret keys here: this value is public.
   */
  formEndpoint: '',
} as const;

export type NavItem = { label: string; href: string };

export const navigation = {
  primary: [
    { label: 'Voorraad', href: '/voorraad' },
    { label: 'Diensten', href: '/diensten' },
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Magazine', href: '/magazine' },
    { label: 'Contact', href: '/contact' },
  ] satisfies NavItem[],
  cta: { label: 'Bekijk voorraad', href: '/voorraad' },
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Voorwaarden', href: '/voorwaarden' },
  ] satisfies NavItem[],
};
