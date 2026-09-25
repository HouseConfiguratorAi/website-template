/**
 * VEHICLE INVENTORY — demo data
 * ------------------------------------------------------------------
 * Every vehicle page, card, filter and structured-data block is generated
 * from this list. To connect a real inventory feed, CMS or dealer system,
 * replace `getAllVehicles()` in src/lib/inventory.ts — components only
 * depend on the `Vehicle` type below, never on this file directly.
 *
 * Images reference keys in src/assets/media (file name without extension)
 * or absolute https:// URLs from a CMS / image CDN.
 */

export type VehicleStatus = 'available' | 'reserved' | 'incoming' | 'sold';
export type ImageKind = 'cover' | 'portrait' | 'profile' | 'rear' | 'detail' | 'wheel' | 'interior' | 'other';

export interface VehicleImage {
  src: string;
  alt: string;
  kind?: ImageKind;
  /** CSS object-position for art-directed crops, e.g. '40% 60%'. */
  focal?: string;
}

export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  variant?: string;
  year: number;
  /** Asking price in the site currency. `null` = price on request. */
  price: number | null;
  mileage: number;
  fuel: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  transmission: 'Manual' | 'Automatic' | 'Dual-clutch';
  bodyType: 'Coupé' | 'Spider' | 'Convertible' | 'Saloon' | 'Estate' | 'SUV';
  power: { hp: number; kw: number };
  engine?: string;
  drivetrain?: 'RWD' | 'AWD' | 'FWD';
  exteriorColor: string;
  interiorColor: string;
  firstRegistration?: string;
  owners?: number;
  /** One sentence used on cards and in meta descriptions. */
  summary: string;
  description: string[];
  highlights?: string[];
  features: { group: string; items: string[] }[];
  images: VehicleImage[];
  location: string;
  status: VehicleStatus;
  featured?: boolean;
}

const hall = 'in the Oberhall hall';

export const vehicles: Vehicle[] = [
  {
    id: 'OB-0142',
    slug: 'ferrari-458-spider-2013',
    brand: 'Ferrari',
    model: '458 Spider',
    variant: 'Champagne Metallic',
    year: 2013,
    price: 214500,
    mileage: 18900,
    fuel: 'Petrol',
    transmission: 'Dual-clutch',
    bodyType: 'Spider',
    power: { hp: 562, kw: 419 },
    engine: '4.5 L naturally aspirated V8',
    drivetrain: 'RWD',
    exteriorColor: 'Champagne Metallic (special order)',
    interiorColor: 'Nero leather',
    firstRegistration: '04/2013',
    owners: 2,
    summary: 'A special-order colour on the last naturally aspirated mid-engine V8 Spider.',
    description: [
      'Champagne is not a colour you see on a 458. It was specified by the first owner and it changes with the light — bronze under a cloud, almost silver in the sun. On a car this sculptural, it does something red never could: it lets you read the surfaces.',
      'The 4.5-litre V8 revs to 9,000 rpm and is the reason people still seek these cars out. The folding hard top stows in fourteen seconds and turns a composed grand tourer into something far more theatrical.',
      'This car has covered 18,900 km with two owners. It arrives with its books, both keys and a recent major service, including the gearbox clutch-pack check.',
    ],
    highlights: ['Special-order paint', 'Two owners', 'Major service completed', 'Both keys and books'],
    features: [
      { group: 'Performance', items: ['Carbon-ceramic brakes', 'Magnetorheological dampers', 'E-Diff 3', 'Launch control'] },
      { group: 'Exterior', items: ['Retractable aluminium hard top', '20″ forged wheels', 'Bi-xenon adaptive headlights', 'Carbon rear diffuser'] },
      { group: 'Interior', items: ['Daytona-style seats', 'Carbon steering wheel with LED shift lights', 'Front-axle lift', 'Satellite navigation'] },
      { group: 'Documentation', items: ['Complete service book', 'Certificate of conformity', 'Two keys', 'Owner’s manuals'] },
    ],
    images: [
      { src: 'f458-champagne-cover', kind: 'cover', alt: `Ferrari 458 Spider in champagne metallic, front three-quarter ${hall}` },
      { src: 'f458-champagne-profile', kind: 'profile', alt: 'Ferrari 458 Spider in champagne metallic, side profile' },
      { src: 'f458-champagne-rear', kind: 'rear', alt: 'Rear three-quarter view with the tail lights on' },
      { src: 'f458-champagne-wheel', kind: 'wheel', alt: 'Close-up of the front forged wheel and wing' },
      { src: 'f458-champagne-detail', kind: 'detail', alt: 'Headlight and bonnet detail' },
      { src: 'f458-champagne-portrait', kind: 'portrait', alt: 'Ferrari 458 Spider, low front view' },
    ],
    location: 'Antwerp',
    status: 'available',
  },
  {
    id: 'OB-0139',
    slug: 'ferrari-458-spider-2012',
    brand: 'Ferrari',
    model: '458 Spider',
    variant: 'Rosso Corsa',
    year: 2012,
    price: 189900,
    mileage: 31200,
    fuel: 'Petrol',
    transmission: 'Dual-clutch',
    bodyType: 'Spider',
    power: { hp: 562, kw: 419 },
    engine: '4.5 L naturally aspirated V8',
    drivetrain: 'RWD',
    exteriorColor: 'Rosso Corsa',
    interiorColor: 'Nero leather, red stitching',
    firstRegistration: '09/2012',
    owners: 3,
    summary: 'The classic specification, driven as intended and maintained without compromise.',
    featured: true,
    description: [
      'Rosso Corsa over black is the specification most people picture, and there is a reason it endures. This is a car that has been used — 31,200 km across three owners — and looked after properly throughout.',
      'We prefer cars like this to garage queens. Regular use keeps seals supple and systems exercised, and the history shows every service carried out on time at a specialist.',
    ],
    highlights: ['Full specialist history', 'New tyres', 'Paint depth measured'],
    features: [
      { group: 'Performance', items: ['Carbon-ceramic brakes', 'E-Diff 3', 'Launch control'] },
      { group: 'Exterior', items: ['Retractable aluminium hard top', '20″ forged wheels', 'Yellow brake callipers'] },
      { group: 'Interior', items: ['Electric seats', 'Carbon steering wheel', 'Sat-nav and parking sensors'] },
      { group: 'Documentation', items: ['Complete service book', 'Two keys'] },
    ],
    images: [
      { src: 'f458-rosso-cover', kind: 'cover', alt: `Ferrari 458 Spider in Rosso Corsa, front three-quarter ${hall}` },
      { src: 'f458-rosso-profile', kind: 'profile', alt: 'Ferrari 458 Spider in Rosso Corsa, side profile' },
      { src: 'f458-rosso-rear', kind: 'rear', alt: 'Rear three-quarter view with tail lights on' },
      { src: 'f458-rosso-wheel', kind: 'wheel', alt: 'Front wheel and wing close-up' },
      { src: 'f458-rosso-detail', kind: 'detail', alt: 'Headlight detail' },
      { src: 'f458-rosso-portrait', kind: 'portrait', alt: 'Ferrari 458 Spider in red, low front view' },
    ],
    location: 'Antwerp',
    status: 'available',
  },
  {
    id: 'OB-0145',
    slug: 'vessant-gt-01-2023',
    brand: 'Vessant',
    model: 'GT-01',
    variant: 'Ardesia',
    year: 2023,
    price: 318000,
    mileage: 4400,
    fuel: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'Coupé',
    power: { hp: 710, kw: 522 },
    engine: '4.0 L twin-turbo V8 with rear-axle e-motor',
    drivetrain: 'AWD',
    exteriorColor: 'Ardesia slate metallic',
    interiorColor: 'Carmine leather',
    firstRegistration: '06/2023',
    owners: 1,
    summary: 'A low-volume grand tourer from a fictional coachbuilder, in slate over carmine.',
    description: [
      'Vessant is the fictional coachbuilder we use to demonstrate this template. Its GT-01 is a long, low coupé with a front-mid engine and a cabin trimmed like a piece of furniture.',
      'Replace this text with your own vehicle description. Two or three short paragraphs are enough: what makes this car worth looking at, how it has been used, and what comes with it.',
    ],
    highlights: ['One owner', 'Factory warranty to 2026', 'Protective film fitted'],
    features: [
      { group: 'Performance', items: ['Adaptive air suspension', 'Rear-wheel steering', 'Carbon-ceramic brakes'] },
      { group: 'Exterior', items: ['Matrix LED headlights', '21″ forged wheels', 'Full-body protective film'] },
      { group: 'Interior', items: ['Carmine semi-aniline leather', 'Heated and ventilated seats', 'Surround sound'] },
      { group: 'Documentation', items: ['Factory warranty', 'Two keys', 'Car cover'] },
    ],
    images: [
      { src: 'vessant-ardesia-cover', kind: 'cover', alt: `Vessant GT-01 in slate metallic, front three-quarter ${hall}` },
      { src: 'vessant-ardesia-profile', kind: 'profile', alt: 'Vessant GT-01 side profile' },
      { src: 'vessant-ardesia-rear', kind: 'rear', alt: 'Vessant GT-01 rear three-quarter view' },
      { src: 'vessant-ardesia-wheel', kind: 'wheel', alt: 'Forged wheel and red brake calliper' },
      { src: 'vessant-ardesia-detail', kind: 'detail', alt: 'LED headlight signature' },
      { src: 'vessant-ardesia-portrait', kind: 'portrait', alt: 'Vessant GT-01, low front view' },
    ],
    location: 'Antwerp',
    status: 'available',
  },
  {
    id: 'OB-0147',
    slug: 'ferrari-458-spider-2014',
    brand: 'Ferrari',
    model: '458 Spider',
    variant: 'Bianco Avus',
    year: 2014,
    price: 224000,
    mileage: 9800,
    fuel: 'Petrol',
    transmission: 'Dual-clutch',
    bodyType: 'Spider',
    power: { hp: 562, kw: 419 },
    engine: '4.5 L naturally aspirated V8',
    drivetrain: 'RWD',
    exteriorColor: 'Bianco Avus',
    interiorColor: 'Cuoio leather',
    firstRegistration: '03/2014',
    owners: 1,
    summary: 'One of the last 458 Spiders built, with under 10,000 km from new.',
    description: [
      'A late car, built in the final year of production, and one of the lowest-mileage examples we have seen. White suits the 458 better than many expect — it shows every line of the bodywork.',
      'This vehicle is currently reserved. Ask us to notify you if it becomes available again, or to look for a comparable car on your behalf.',
    ],
    highlights: ['One owner', '9,800 km', 'Late production'],
    features: [
      { group: 'Performance', items: ['Carbon-ceramic brakes', 'E-Diff 3'] },
      { group: 'Exterior', items: ['Retractable hard top', '20″ forged wheels in silver'] },
      { group: 'Interior', items: ['Cuoio leather', 'Carbon driver zone'] },
      { group: 'Documentation', items: ['Complete service book', 'Two keys'] },
    ],
    images: [
      { src: 'f458-bianco-cover', kind: 'cover', alt: 'Ferrari 458 Spider in white, front three-quarter in a dark studio' },
      { src: 'f458-bianco-profile', kind: 'profile', alt: 'Ferrari 458 Spider in white, side profile' },
      { src: 'f458-bianco-rear', kind: 'rear', alt: 'Rear three-quarter view' },
      { src: 'f458-bianco-wheel', kind: 'wheel', alt: 'Front wheel close-up' },
      { src: 'f458-bianco-detail', kind: 'detail', alt: 'Headlight detail' },
      { src: 'f458-bianco-portrait', kind: 'portrait', alt: 'White Ferrari 458 Spider, low front view' },
    ],
    location: 'Antwerp',
    status: 'reserved',
  },
  {
    id: 'OB-0144',
    slug: 'vessant-gt-01-2022',
    brand: 'Vessant',
    model: 'GT-01',
    variant: 'Verde Bosco',
    year: 2022,
    price: null,
    mileage: 2100,
    fuel: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'Coupé',
    power: { hp: 710, kw: 522 },
    engine: '4.0 L twin-turbo V8 with rear-axle e-motor',
    drivetrain: 'AWD',
    exteriorColor: 'Verde Bosco metallic',
    interiorColor: 'Carmine leather',
    firstRegistration: '11/2022',
    owners: 1,
    summary: 'Deep forest green over carmine — offered on behalf of its owner.',
    description: [
      'Offered on consignment. Some owners prefer not to publish a price; we share it on request, together with the full history and an independent inspection report.',
      'Demo content — replace with the story of your own vehicle.',
    ],
    highlights: ['Consignment', 'Price on request', '2,100 km'],
    features: [
      { group: 'Performance', items: ['Adaptive air suspension', 'Rear-wheel steering'] },
      { group: 'Exterior', items: ['Matrix LED headlights', '21″ forged wheels in satin black'] },
      { group: 'Interior', items: ['Carmine semi-aniline leather', 'Surround sound'] },
      { group: 'Documentation', items: ['Factory warranty', 'Independent inspection report'] },
    ],
    images: [
      { src: 'vessant-verde-cover', kind: 'cover', alt: `Vessant GT-01 in forest green, front three-quarter ${hall}` },
      { src: 'vessant-verde-profile', kind: 'profile', alt: 'Vessant GT-01 in green, side profile' },
      { src: 'vessant-verde-rear', kind: 'rear', alt: 'Rear three-quarter view' },
      { src: 'vessant-verde-wheel', kind: 'wheel', alt: 'Wheel and brake detail' },
      { src: 'vessant-verde-detail', kind: 'detail', alt: 'Headlight signature' },
      { src: 'vessant-verde-portrait', kind: 'portrait', alt: 'Vessant GT-01 in green, low front view' },
    ],
    location: 'Antwerp',
    status: 'available',
  },
  {
    id: 'OB-0148',
    slug: 'porsche-911-carrera-993-1996',
    brand: 'Porsche',
    model: '911 Carrera',
    variant: '993',
    year: 1996,
    price: null,
    mileage: 88400,
    fuel: 'Petrol',
    transmission: 'Manual',
    bodyType: 'Coupé',
    power: { hp: 285, kw: 210 },
    engine: '3.6 L air-cooled flat-six',
    drivetrain: 'RWD',
    exteriorColor: 'Arena Red Metallic',
    interiorColor: 'Black leather',
    firstRegistration: '02/1996',
    summary: 'The last air-cooled 911, arriving shortly. Photography to follow.',
    description: [
      'This car is on its way to the showroom. It will be inspected and photographed before we publish the full listing.',
      'Interested already? Leave your details and we will send you the complete file first.',
    ],
    features: [{ group: 'Specification', items: ['Six-speed manual gearbox', 'Varioram induction', 'Electric sunroof'] }],
    images: [],
    location: 'In transit',
    status: 'incoming',
  },
  {
    id: 'OB-0131',
    slug: 'ferrari-458-spider-2011',
    brand: 'Ferrari',
    model: '458 Spider',
    variant: 'Nero Daytona',
    year: 2011,
    price: 176000,
    mileage: 41500,
    fuel: 'Petrol',
    transmission: 'Dual-clutch',
    bodyType: 'Spider',
    power: { hp: 562, kw: 419 },
    engine: '4.5 L naturally aspirated V8',
    drivetrain: 'RWD',
    exteriorColor: 'Nero Daytona',
    interiorColor: 'Crema leather',
    firstRegistration: '12/2011',
    owners: 2,
    summary: 'Black on black is the hardest paint to present. This one is flawless.',
    description: ['This vehicle has been sold. It stays in the archive as a record of what we look for.'],
    features: [{ group: 'Specification', items: ['Carbon-ceramic brakes', 'Retractable hard top'] }],
    images: [
      { src: 'f458-nero-cover', kind: 'cover', alt: 'Ferrari 458 Spider in black, front three-quarter' },
      { src: 'f458-nero-profile', kind: 'profile', alt: 'Black Ferrari 458 Spider, side profile' },
      { src: 'f458-nero-rear', kind: 'rear', alt: 'Rear three-quarter view' },
      { src: 'f458-nero-wheel', kind: 'wheel', alt: 'Wheel close-up' },
      { src: 'f458-nero-detail', kind: 'detail', alt: 'Headlight detail' },
      { src: 'f458-nero-portrait', kind: 'portrait', alt: 'Black Ferrari 458 Spider, low front view' },
    ],
    location: 'Antwerp',
    status: 'sold',
  },
];
