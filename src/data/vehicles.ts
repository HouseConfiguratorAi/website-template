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
  /** Asking price in the site currency, incl. VAT. `null` = price on request. */
  price: number | null;
  mileage: number;
  fuel: 'Benzine' | 'Diesel' | 'Hybride' | 'Elektrisch';
  transmission: 'Handgeschakeld' | 'Automaat' | 'Dubbele koppeling';
  bodyType: 'Coupé' | 'Spider' | 'Cabriolet' | 'Sedan' | 'Stationwagen' | 'SUV';
  /** Engine output. Shown in pk (metric horsepower), derived from kW. */
  power: { hp: number; kw: number };
  /** Factory performance figures, shown in the large spec strip. */
  performance?: { accel?: number; topSpeed?: number };
  engine?: string;
  drivetrain?: 'Achterwiel' | 'Vierwiel' | 'Voorwiel';
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
  /** Date the listing was published (ISO, YYYY-MM-DD). */
  listed?: string;
  featured?: boolean;
}

const hall = 'in de hal van Oberhall';

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
    fuel: 'Benzine',
    transmission: 'Dubbele koppeling',
    bodyType: 'Spider',
    power: { hp: 562, kw: 419 },
    engine: '4,5 liter atmosferische V8',
    performance: { accel: 3.4, topSpeed: 320 },
    drivetrain: 'Achterwiel',
    exteriorColor: 'Champagne Metallic (speciale bestelling)',
    interiorColor: 'Nero leder',
    firstRegistration: '04/2013',
    owners: 2,
    summary: 'Een speciaal bestelde kleur op de laatste atmosferische V8 Spider met middenmotor.',
    description: [
      'Champagne is geen kleur die je vaak op een 458 ziet. De eerste eigenaar koos hem zelf, en hij verandert met het licht — brons onder een wolk, bijna zilver in de zon. Op een auto die zo gebeeldhouwd is, doet hij iets wat rood nooit kan: je leest elk vlak.',
      'De 4,5 liter V8 draait tot 9.000 toeren en is de reden dat mensen deze auto’s nog altijd zoeken. Het klapdak verdwijnt in veertien seconden en maakt van een beheerste GT iets veel theatralers.',
      'Deze auto heeft 18.900 km gereden met twee eigenaren. Hij wordt geleverd met onderhoudsboekjes, beide sleutels en een recente grote beurt, inclusief controle van het koppelingspakket.',
    ],
    highlights: ['Speciaal bestelde lak', 'Twee eigenaren', 'Grote beurt uitgevoerd', 'Beide sleutels en boekjes'],
    features: [
      { group: 'Prestaties', items: ['Carbon-keramische remmen', 'Magnetorheologische dempers', 'E-Diff 3', 'Launch control'] },
      { group: 'Exterieur', items: ['Opvouwbaar aluminium hardtop', '20″ gesmede velgen', 'Adaptieve bi-xenon koplampen', 'Carbon diffuser'] },
      { group: 'Interieur', items: ['Daytona-stoelen', 'Carbon stuur met LED-schakellampjes', 'Liftsysteem vooras', 'Navigatie'] },
      { group: 'Documentatie', items: ['Volledig onderhoudsboekje', 'Certificaat van overeenstemming', 'Twee sleutels', 'Instructieboekjes'] },
    ],
    images: [
      { src: 'f458-champagne-cover', kind: 'cover', alt: `Ferrari 458 Spider in champagne metallic, driekwart vooraanzicht ${hall}` },
      { src: 'f458-champagne-profile', kind: 'profile', alt: 'Ferrari 458 Spider in champagne metallic, zijaanzicht' },
      { src: 'f458-champagne-rear', kind: 'rear', alt: 'Driekwart achteraanzicht met brandende achterlichten' },
      { src: 'f458-champagne-wheel', kind: 'wheel', alt: 'Close-up van het gesmede voorwiel en spatbord' },
      { src: 'f458-champagne-detail', kind: 'detail', alt: 'Detail van koplamp en motorkap' },
      { src: 'f458-champagne-portrait', kind: 'portrait', alt: 'Ferrari 458 Spider, laag vooraanzicht' },
    ],
    location: 'Amsterdam',
    status: 'available',
    listed: '2026-09-12',
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
    fuel: 'Benzine',
    transmission: 'Dubbele koppeling',
    bodyType: 'Spider',
    power: { hp: 562, kw: 419 },
    engine: '4,5 liter atmosferische V8',
    performance: { accel: 3.4, topSpeed: 320 },
    drivetrain: 'Achterwiel',
    exteriorColor: 'Rosso Corsa',
    interiorColor: 'Nero leder, rood stiksel',
    firstRegistration: '09/2012',
    owners: 3,
    summary: 'De klassieke specificatie, gereden zoals bedoeld en zonder compromissen onderhouden.',
    featured: true,
    description: [
      'Rosso Corsa met zwart is de specificatie die de meeste mensen voor zich zien, en daar is een reden voor. Dit is een auto die gebruikt is — 31.200 km met drie eigenaren — en altijd goed verzorgd.',
      'We verkiezen auto’s als deze boven garagepronkstukken. Regelmatig rijden houdt afdichtingen soepel en systemen in conditie, en de historie toont elke beurt op tijd uitgevoerd bij een specialist.',
    ],
    highlights: ['Volledige specialistenhistorie', 'Nieuwe banden', 'Laklaagdikte gemeten'],
    features: [
      { group: 'Prestaties', items: ['Carbon-keramische remmen', 'E-Diff 3', 'Launch control'] },
      { group: 'Exterieur', items: ['Opvouwbaar aluminium hardtop', '20″ gesmede velgen', 'Gele remklauwen'] },
      { group: 'Interieur', items: ['Elektrisch verstelbare stoelen', 'Carbon stuur', 'Navigatie en parkeersensoren'] },
      { group: 'Documentatie', items: ['Volledig onderhoudsboekje', 'Twee sleutels'] },
    ],
    images: [
      { src: 'f458-rosso-cover', kind: 'cover', alt: `Ferrari 458 Spider in Rosso Corsa, driekwart vooraanzicht ${hall}` },
      { src: 'f458-rosso-profile', kind: 'profile', alt: 'Ferrari 458 Spider in Rosso Corsa, zijaanzicht' },
      { src: 'f458-rosso-rear', kind: 'rear', alt: 'Driekwart achteraanzicht met brandende achterlichten' },
      { src: 'f458-rosso-wheel', kind: 'wheel', alt: 'Close-up van voorwiel en spatbord' },
      { src: 'f458-rosso-detail', kind: 'detail', alt: 'Detail van de koplamp' },
      { src: 'f458-rosso-portrait', kind: 'portrait', alt: 'Rode Ferrari 458 Spider, laag vooraanzicht' },
    ],
    location: 'Amsterdam',
    status: 'available',
    listed: '2026-09-03',
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
    fuel: 'Hybride',
    transmission: 'Automaat',
    bodyType: 'Coupé',
    power: { hp: 710, kw: 522 },
    engine: '4,0 liter biturbo V8 met elektromotor op de achteras',
    performance: { accel: 3.1, topSpeed: 325 },
    drivetrain: 'Vierwiel',
    exteriorColor: 'Ardesia leigrijs metallic',
    interiorColor: 'Karmijnrood leder',
    firstRegistration: '06/2023',
    owners: 1,
    summary: 'Een GT in kleine oplage van een fictieve carrosseriebouwer, in leigrijs met karmijnrood.',
    description: [
      'Vessant is de fictieve carrosseriebouwer waarmee we deze template demonstreren. De GT-01 is een lange, lage coupé met een voormidden-motor en een interieur dat is afgewerkt als een meubelstuk.',
      'Vervang deze tekst door uw eigen beschrijving. Twee of drie korte alinea’s zijn genoeg: waarom deze auto het bekijken waard is, hoe hij gebruikt is en wat erbij hoort.',
    ],
    highlights: ['Eén eigenaar', 'Fabrieksgarantie tot 2027', 'Beschermfolie aangebracht'],
    features: [
      { group: 'Prestaties', items: ['Adaptieve luchtvering', 'Achterwielbesturing', 'Carbon-keramische remmen'] },
      { group: 'Exterieur', items: ['Matrix-LED koplampen', '21″ gesmede velgen', 'Volledige beschermfolie'] },
      { group: 'Interieur', items: ['Karmijnrood semi-aniline leder', 'Verwarmde en geventileerde stoelen', 'Surround-geluidssysteem'] },
      { group: 'Documentatie', items: ['Fabrieksgarantie', 'Twee sleutels', 'Autohoes'] },
    ],
    images: [
      { src: 'vessant-ardesia-cover', kind: 'cover', alt: `Vessant GT-01 in leigrijs metallic, driekwart vooraanzicht ${hall}` },
      { src: 'vessant-ardesia-profile', kind: 'profile', alt: 'Vessant GT-01, zijaanzicht' },
      { src: 'vessant-ardesia-rear', kind: 'rear', alt: 'Vessant GT-01, driekwart achteraanzicht' },
      { src: 'vessant-ardesia-wheel', kind: 'wheel', alt: 'Gesmede velg en rode remklauw' },
      { src: 'vessant-ardesia-detail', kind: 'detail', alt: 'LED-lichtsignatuur' },
      { src: 'vessant-ardesia-portrait', kind: 'portrait', alt: 'Vessant GT-01, laag vooraanzicht' },
    ],
    location: 'Amsterdam',
    status: 'available',
    listed: '2026-08-27',
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
    fuel: 'Benzine',
    transmission: 'Dubbele koppeling',
    bodyType: 'Spider',
    power: { hp: 562, kw: 419 },
    engine: '4,5 liter atmosferische V8',
    performance: { accel: 3.4, topSpeed: 320 },
    drivetrain: 'Achterwiel',
    exteriorColor: 'Bianco Avus',
    interiorColor: 'Cuoio leder',
    firstRegistration: '03/2014',
    owners: 1,
    summary: 'Een van de laatst gebouwde 458 Spiders, met minder dan 10.000 km sinds nieuw.',
    description: [
      'Een late auto, gebouwd in het laatste productiejaar, en een van de exemplaren met de laagste kilometerstand die we hebben gezien. Wit staat de 458 beter dan velen verwachten — het toont elke lijn van de carrosserie.',
      'Deze auto is momenteel gereserveerd. Vraag ons u te laten weten als hij weer beschikbaar komt, of om een vergelijkbare auto voor u te zoeken.',
    ],
    highlights: ['Eén eigenaar', '9.800 km', 'Late productie'],
    features: [
      { group: 'Prestaties', items: ['Carbon-keramische remmen', 'E-Diff 3'] },
      { group: 'Exterieur', items: ['Opvouwbaar hardtop', '20″ gesmede velgen in zilver'] },
      { group: 'Interieur', items: ['Cuoio leder', 'Carbon bestuurderszone'] },
      { group: 'Documentatie', items: ['Volledig onderhoudsboekje', 'Twee sleutels'] },
    ],
    images: [
      { src: 'f458-bianco-cover', kind: 'cover', alt: 'Witte Ferrari 458 Spider, driekwart vooraanzicht in een donkere studio' },
      { src: 'f458-bianco-profile', kind: 'profile', alt: 'Witte Ferrari 458 Spider, zijaanzicht' },
      { src: 'f458-bianco-rear', kind: 'rear', alt: 'Driekwart achteraanzicht' },
      { src: 'f458-bianco-wheel', kind: 'wheel', alt: 'Close-up van het voorwiel' },
      { src: 'f458-bianco-detail', kind: 'detail', alt: 'Detail van de koplamp' },
      { src: 'f458-bianco-portrait', kind: 'portrait', alt: 'Witte Ferrari 458 Spider, laag vooraanzicht' },
    ],
    location: 'Amsterdam',
    status: 'reserved',
    listed: '2026-08-19',
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
    fuel: 'Hybride',
    transmission: 'Automaat',
    bodyType: 'Coupé',
    power: { hp: 710, kw: 522 },
    engine: '4,0 liter biturbo V8 met elektromotor op de achteras',
    performance: { accel: 3.1, topSpeed: 325 },
    drivetrain: 'Vierwiel',
    exteriorColor: 'Verde Bosco metallic',
    interiorColor: 'Karmijnrood leder',
    firstRegistration: '11/2022',
    owners: 1,
    summary: 'Diep bosgroen met karmijnrood — aangeboden namens de eigenaar.',
    description: [
      'In consignatie aangeboden. Sommige eigenaren publiceren liever geen prijs; we delen die op aanvraag, samen met de volledige historie en een onafhankelijk keuringsrapport.',
      'Democontent — vervang dit door het verhaal van uw eigen auto.',
    ],
    highlights: ['Consignatie', 'Prijs op aanvraag', '2.100 km'],
    features: [
      { group: 'Prestaties', items: ['Adaptieve luchtvering', 'Achterwielbesturing'] },
      { group: 'Exterieur', items: ['Matrix-LED koplampen', '21″ gesmede velgen in satijnzwart'] },
      { group: 'Interieur', items: ['Karmijnrood semi-aniline leder', 'Surround-geluidssysteem'] },
      { group: 'Documentatie', items: ['Fabrieksgarantie', 'Onafhankelijk keuringsrapport'] },
    ],
    images: [
      { src: 'vessant-verde-cover', kind: 'cover', alt: `Vessant GT-01 in bosgroen, driekwart vooraanzicht ${hall}` },
      { src: 'vessant-verde-profile', kind: 'profile', alt: 'Groene Vessant GT-01, zijaanzicht' },
      { src: 'vessant-verde-rear', kind: 'rear', alt: 'Driekwart achteraanzicht' },
      { src: 'vessant-verde-wheel', kind: 'wheel', alt: 'Detail van velg en rem' },
      { src: 'vessant-verde-detail', kind: 'detail', alt: 'Lichtsignatuur van de koplamp' },
      { src: 'vessant-verde-portrait', kind: 'portrait', alt: 'Groene Vessant GT-01, laag vooraanzicht' },
    ],
    location: 'Amsterdam',
    status: 'available',
    listed: '2026-08-08',
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
    fuel: 'Benzine',
    transmission: 'Handgeschakeld',
    bodyType: 'Coupé',
    power: { hp: 285, kw: 210 },
    engine: '3,6 liter luchtgekoelde zescilinder boxer',
    performance: { accel: 5.4, topSpeed: 270 },
    drivetrain: 'Achterwiel',
    exteriorColor: 'Arenarot Metallic',
    interiorColor: 'Zwart leder',
    firstRegistration: '02/1996',
    summary: 'De laatste luchtgekoelde 911, binnenkort binnen. Foto’s volgen.',
    description: [
      'Deze auto is onderweg naar de showroom. Hij wordt gekeurd en gefotografeerd voordat we de volledige advertentie publiceren.',
      'Nu al interesse? Laat uw gegevens achter en u ontvangt als eerste het complete dossier.',
    ],
    features: [{ group: 'Specificatie', items: ['Handgeschakelde zesbak', 'Varioram-inlaat', 'Elektrisch schuifdak'] }],
    images: [],
    location: 'Onderweg',
    status: 'incoming',
    listed: '2026-09-21',
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
    fuel: 'Benzine',
    transmission: 'Dubbele koppeling',
    bodyType: 'Spider',
    power: { hp: 562, kw: 419 },
    engine: '4,5 liter atmosferische V8',
    performance: { accel: 3.4, topSpeed: 320 },
    drivetrain: 'Achterwiel',
    exteriorColor: 'Nero Daytona',
    interiorColor: 'Crema leder',
    firstRegistration: '12/2011',
    owners: 2,
    summary: 'Zwart op zwart is de moeilijkste lak om te presenteren. Deze is smetteloos.',
    description: ['Deze auto is verkocht. Hij blijft in het archief als voorbeeld van waar wij naar zoeken.'],
    features: [{ group: 'Specificatie', items: ['Carbon-keramische remmen', 'Opvouwbaar hardtop'] }],
    images: [
      { src: 'f458-nero-cover', kind: 'cover', alt: 'Zwarte Ferrari 458 Spider, driekwart vooraanzicht' },
      { src: 'f458-nero-profile', kind: 'profile', alt: 'Zwarte Ferrari 458 Spider, zijaanzicht' },
      { src: 'f458-nero-rear', kind: 'rear', alt: 'Driekwart achteraanzicht' },
      { src: 'f458-nero-wheel', kind: 'wheel', alt: 'Close-up van de velg' },
      { src: 'f458-nero-detail', kind: 'detail', alt: 'Detail van de koplamp' },
      { src: 'f458-nero-portrait', kind: 'portrait', alt: 'Zwarte Ferrari 458 Spider, laag vooraanzicht' },
    ],
    location: 'Amsterdam',
    status: 'sold',
    listed: '2026-06-14',
  },
];
