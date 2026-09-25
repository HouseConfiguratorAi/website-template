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
  legalName: 'Oberhall Automobiles (demo)',
  /** One line that describes the business. Used as the default meta description. */
  description:
    'Oberhall is a small showroom for selected sports and grand touring cars. Every car is inspected, documented and photographed before it is offered.',
  /** Production URL, no trailing slash. Used for canonical URLs, sitemap and OpenGraph. */
  url: 'https://oberhall.example',
  locale: 'en-GB',
  /** BCP-47 language tag for <html lang>. */
  lang: 'en',
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
  email: 'hello@oberhall.example',
  phone: '+32 3 000 00 00',
  /** tel: link — digits only. */
  phoneHref: '+3230000000',
  address: {
    street: 'Havenlaan 00',
    postalCode: '2000',
    city: 'Antwerp',
    region: 'Antwerp',
    country: 'Belgium',
    countryCode: 'BE',
  },
  /** Latitude/longitude for structured data and the directions link. */
  geo: { lat: 51.2308, lng: 4.4089 },
  directionsUrl: 'https://www.openstreetmap.org/?mlat=51.2308&mlon=4.4089#map=16/51.2308/4.4089',
  hours: [
    { days: 'Tuesday – Friday', time: '10:00 – 18:00', schema: 'Tu-Fr 10:00-18:00' },
    { days: 'Saturday', time: '10:00 – 16:00', schema: 'Sa 10:00-16:00' },
    { days: 'Sunday – Monday', time: 'By appointment', schema: '' },
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
    { label: 'Vehicles', href: '/vehicles' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ] satisfies NavItem[],
  cta: { label: 'Explore collection', href: '/vehicles' },
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ] satisfies NavItem[],
};
