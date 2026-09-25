import type { Vehicle } from '@/data/vehicles';
import { formatDecimal, formatNumber, toPk } from '@/lib/format';
import { site } from '@/config/site';

export type KeyFigure = {
  /** Numeric value (drives the count-up), or null for text-only figures. */
  value: number | null;
  /** Formatted value, shown as-is without JavaScript. */
  display: string;
  unit?: string;
  label: string;
  decimals?: number;
};

/**
 * The four headline figures of a car, presented large like a manufacturer's
 * model page: power, acceleration, top speed and mileage. Missing performance
 * data falls back to year and gearbox, so the strip always has four entries.
 */
export function keyFigures(v: Vehicle): KeyFigure[] {
  const figures: KeyFigure[] = [{ value: toPk(v.power), display: formatNumber(toPk(v.power)), unit: 'pk', label: 'Vermogen' }];
  if (v.performance?.accel) figures.push({ value: v.performance.accel, display: formatDecimal(v.performance.accel), unit: 's', label: '0–100 km/h', decimals: 1 });
  if (v.performance?.topSpeed) figures.push({ value: v.performance.topSpeed, display: formatNumber(v.performance.topSpeed), unit: 'km/h', label: 'Topsnelheid' });
  figures.push({ value: v.mileage, display: formatNumber(v.mileage), unit: site.distanceUnit, label: 'Kilometerstand' });
  if (figures.length < 4) figures.splice(1, 0, { value: null, display: String(v.year), label: 'Bouwjaar' });
  if (figures.length < 4) figures.push({ value: null, display: v.transmission, label: 'Transmissie' });
  return figures.slice(0, 4);
}
