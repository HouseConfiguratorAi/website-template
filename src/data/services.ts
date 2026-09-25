/**
 * SERVICES — demo content.
 * Shown as an editorial list on the homepage and in full on /services.
 * `image` is a key from src/assets/media.
 */
export interface Service {
  slug: string;
  title: string;
  /** One line for the homepage list. */
  summary: string;
  /** Short paragraphs for the services page. */
  body: string[];
  /** What the client can expect, as short points. */
  steps: string[];
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    slug: 'sourcing',
    title: 'Vehicle sourcing',
    summary: 'Tell us the car. We find the right one, not the first one.',
    body: [
      'Most of the best cars never reach a public listing. We look through private collections, specialist networks and auctions, then inspect before we recommend anything.',
      'You receive a written report with photographs, history and our honest opinion — including when we think you should walk away.',
    ],
    steps: ['A conversation about the car and how you will use it', 'Search across private and specialist networks', 'Independent inspection and history check', 'Purchase, transport and registration handled for you'],
    image: 'svc-sourcing',
    imageAlt: 'A slate grand tourer driving towards a light at the end of a dark hall',
  },
  {
    slug: 'trade-in',
    title: 'Trade-in',
    summary: 'Part-exchange your current car against one from the collection.',
    body: [
      'We value your current car on what it is, not on a generic price guide. Condition, history and specification all count.',
      'The valuation is written down and holds for fourteen days.',
    ],
    steps: ['Send photographs and the service history', 'Viewing at the showroom or at your address', 'Written valuation, valid for fourteen days'],
    image: 'svc-tradein',
    imageAlt: 'Two cars side by side in the showroom',
  },
  {
    slug: 'financing',
    title: 'Financing',
    summary: 'Straightforward financing and leasing through independent partners.',
    body: [
      'We work with independent lenders who understand specialist cars and their residual values. We explain every option in plain language and never add hidden fees.',
    ],
    steps: ['Choose financing, leasing or a balloon structure', 'Application handled by our partner', 'Decision, usually within two working days'],
    image: 'svc-financing',
    imageAlt: 'Rear wing and wheel of a black sports car, tail light glowing',
  },
  {
    slug: 'import',
    title: 'Import',
    summary: 'Cars from abroad, delivered and registered at home.',
    body: [
      'Some specifications only exist in other markets. We arrange inspection at the source, enclosed transport, customs and local registration.',
    ],
    steps: ['Pre-purchase inspection at the source', 'Enclosed transport, fully insured', 'Customs, conformity and registration'],
    image: 'svc-import',
    imageAlt: 'A car waiting in a dark, empty logistics hall',
  },
  {
    slug: 'consignment',
    title: 'Consignment',
    summary: 'We present and sell your car as if it were our own.',
    body: [
      'Your car is prepared, photographed and presented in the showroom alongside the collection. We handle viewings, questions and paperwork; you decide on every offer.',
    ],
    steps: ['Preparation and detailing', 'Photography and a full listing', 'Viewings, negotiation and handover'],
    image: 'svc-consignment',
    imageAlt: 'Three cars presented in the showroom',
  },
];
