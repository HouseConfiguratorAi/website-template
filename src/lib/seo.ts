import { site, contact } from '@/config/site';
import type { Vehicle } from '@/data/vehicles';
import { vehicleTitle, vehicleUrl } from '@/lib/inventory';

const abs = (path: string) => new URL(path, site.url).href;

/** AutoDealer is a schema.org LocalBusiness subtype. */
export function dealerLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    '@id': abs('/#dealer'),
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    email: contact.email,
    telephone: contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      postalCode: contact.address.postalCode,
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      addressCountry: contact.address.countryCode,
    },
    geo: { '@type': 'GeoCoordinates', latitude: contact.geo.lat, longitude: contact.geo.lng },
    openingHours: contact.hours.map((h) => h.schema).filter(Boolean),
    sameAs: site.social.map((s) => s.href),
  };
}

const availability = {
  available: 'https://schema.org/InStock',
  reserved: 'https://schema.org/LimitedAvailability',
  incoming: 'https://schema.org/PreOrder',
  sold: 'https://schema.org/SoldOut',
} as const;

export function vehicleLd(v: Vehicle, imageUrls: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: `${vehicleTitle(v)}${v.variant ? ` ${v.variant}` : ''}`,
    brand: { '@type': 'Brand', name: v.brand },
    model: v.model,
    vehicleModelDate: String(v.year),
    productionDate: String(v.year),
    sku: v.id,
    url: abs(vehicleUrl(v)),
    description: v.summary,
    image: imageUrls,
    color: v.exteriorColor,
    vehicleInteriorColor: v.interiorColor,
    bodyType: v.bodyType,
    fuelType: v.fuel,
    vehicleTransmission: v.transmission,
    driveWheelConfiguration: v.drivetrain,
    mileageFromOdometer: { '@type': 'QuantitativeValue', value: v.mileage, unitCode: site.distanceUnit === 'km' ? 'KMT' : 'SMI' },
    vehicleEngine: v.engine
      ? { '@type': 'EngineSpecification', name: v.engine, enginePower: { '@type': 'QuantitativeValue', value: v.power.hp, unitCode: 'BHP' } }
      : undefined,
    itemCondition: 'https://schema.org/UsedCondition',
    offers: {
      '@type': 'Offer',
      availability: availability[v.status],
      ...(v.price != null ? { price: v.price, priceCurrency: site.currency } : {}),
      seller: { '@id': abs('/#dealer') },
    },
  };
}

export function articleLd(a: { title: string; description: string; date: Date; url: string; image?: string; author: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    datePublished: a.date.toISOString(),
    mainEntityOfPage: abs(a.url),
    image: a.image ? [a.image] : undefined,
    author: { '@type': 'Organization', name: a.author },
    publisher: { '@type': 'Organization', name: site.name },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}
