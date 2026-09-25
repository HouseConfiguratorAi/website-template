import { site } from '@/config/site';

const priceFormatter = new Intl.NumberFormat(site.locale, {
  style: 'currency',
  currency: site.currency,
  maximumFractionDigits: 0,
});
const numberFormatter = new Intl.NumberFormat(site.locale);
const dateFormatter = new Intl.DateTimeFormat(site.locale, { day: 'numeric', month: 'long', year: 'numeric' });

export const formatPrice = (value: number | null | undefined) => (value == null ? 'Price on request' : priceFormatter.format(value));
export const formatNumber = (value: number) => numberFormatter.format(value);
export const formatMileage = (value: number) => `${numberFormatter.format(value)} ${site.distanceUnit}`;
export const formatDate = (date: Date) => dateFormatter.format(date);
export const formatPower = (p: { hp: number; kw: number }) => `${p.hp} hp · ${p.kw} kW`;
/** Two-digit index: 1 → "01". */
export const pad = (n: number) => String(n).padStart(2, '0');
