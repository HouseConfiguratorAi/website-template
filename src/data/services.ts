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
    slug: 'zoekopdracht',
    title: 'Zoekopdracht',
    summary: 'Noem de auto. Wij vinden de juiste, niet de eerste.',
    body: [
      'De meeste mooie auto’s komen nooit in een openbare advertentie terecht. We zoeken in privécollecties, specialistische netwerken en veilingen, en keuren voordat we iets aanraden.',
      'U ontvangt een schriftelijk rapport met foto’s, historie en onze eerlijke mening — ook als we vinden dat u beter kunt afzien van de aankoop.',
    ],
    steps: ['Een gesprek over de auto en hoe u hem gaat gebruiken', 'Zoektocht via privé- en specialistische netwerken', 'Onafhankelijke keuring en historiecheck', 'Aankoop, transport en registratie geregeld'],
    image: 'svc-sourcing',
    imageAlt: 'Een leigrijze GT rijdt naar het licht aan het einde van een donkere hal',
  },
  {
    slug: 'inruil',
    title: 'Inruil',
    summary: 'Ruil uw huidige auto in tegen een auto uit de collectie.',
    body: [
      'We taxeren uw auto op wat hij is, niet op een algemene prijsgids. Staat, historie en uitvoering tellen allemaal mee.',
      'De taxatie krijgt u op papier en blijft veertien dagen geldig.',
    ],
    steps: ['Stuur foto’s en de onderhoudshistorie', 'Bezichtiging in de showroom of bij u thuis', 'Schriftelijke taxatie, veertien dagen geldig'],
    image: 'svc-tradein',
    imageAlt: 'Twee auto’s naast elkaar in de showroom',
  },
  {
    slug: 'financiering',
    title: 'Financiering',
    summary: 'Heldere financiering en lease via onafhankelijke partners.',
    body: [
      'We werken met onafhankelijke financiers die specialistische auto’s en hun restwaarde begrijpen. We leggen elke optie in gewone taal uit en rekenen nooit verborgen kosten.',
    ],
    steps: ['Kies financiering, private lease of een slottermijn', 'Aanvraag verzorgd door onze partner', 'Besluit, meestal binnen twee werkdagen'],
    image: 'svc-financing',
    imageAlt: 'Achtervleugel en wiel van een zwarte sportauto, met gloeiend achterlicht',
  },
  {
    slug: 'import',
    title: 'Import',
    summary: 'Auto’s uit het buitenland, geleverd en geregistreerd in Nederland.',
    body: [
      'Sommige uitvoeringen bestaan alleen in andere markten. We regelen de keuring ter plaatse, gesloten transport, BPM, de RDW-keuring en de Nederlandse kentekenregistratie.',
    ],
    steps: ['Aankoopkeuring ter plaatse', 'Gesloten transport, volledig verzekerd', 'BPM, RDW-keuring en kenteken'],
    image: 'svc-import',
    imageAlt: 'Een auto wacht in een donkere, lege logistieke hal',
  },
  {
    slug: 'consignatie',
    title: 'Consignatie',
    summary: 'Wij presenteren en verkopen uw auto alsof het de onze is.',
    body: [
      'Uw auto wordt geprepareerd, gefotografeerd en in de showroom gepresenteerd naast de collectie. Wij verzorgen bezichtigingen, vragen en papierwerk; u beslist over elk bod.',
    ],
    steps: ['Preparatie en detailing', 'Fotografie en een volledige advertentie', 'Bezichtigingen, onderhandeling en aflevering'],
    image: 'svc-consignment',
    imageAlt: 'Drie auto’s gepresenteerd in de showroom',
  },
];
