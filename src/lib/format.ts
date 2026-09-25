import { site } from '@/config/site';

const priceFormatter = new Intl.NumberFormat(site.locale, {
  style: 'currency',
  currency: site.currency,
  maximumFractionDigits: 0,
});
const numberFormatter = new Intl.NumberFormat(site.locale);
const dateFormatter = new Intl.DateTimeFormat(site.locale, { day: 'numeric', month: 'long', year: 'numeric' });

export const formatPrice = (value: number | null | undefined) => (value == null ? 'Prijs op aanvraag' : priceFormatter.format(value));
export const formatNumber = (value: number) => numberFormatter.format(value);
export const formatMileage = (value: number) => `${numberFormatter.format(value)} ${site.distanceUnit}`;
export const formatDate = (date: Date) => dateFormatter.format(date);
/** Metric horsepower (pk / PS), derived from kW so it always matches the registration papers. */
export const toPk = (p: { kw: number }) => Math.round(p.kw * 1.35962);
export const formatPower = (p: { hp: number; kw: number }) => `${toPk(p)} pk · ${p.kw} kW`;
/** Decimal with the site locale: 3.4 → "3,4". */
export const formatDecimal = (value: number, digits = 1) =>
  new Intl.NumberFormat(site.locale, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
/** Two-digit index: 1 → "01". */
export const pad = (n: number) => String(n).padStart(2, '0');
