/**
 * Inventory access layer.
 * Pages and components only talk to these functions. To connect a CMS,
 * inventory feed or dealer management system, make `getAllVehicles()`
 * fetch and map your data to the `Vehicle` type — nothing else changes.
 */
import { vehicles, type Vehicle, type VehicleStatus } from '@/data/vehicles';

export type { Vehicle, VehicleStatus };

const statusOrder: Record<VehicleStatus, number> = { available: 0, reserved: 1, incoming: 2, sold: 3 };

export async function getAllVehicles(): Promise<Vehicle[]> {
  return [...vehicles].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
}

/** Vehicles shown in the collection (sold cars stay reachable by URL but are not listed). */
export async function getListedVehicles(): Promise<Vehicle[]> {
  return (await getAllVehicles()).filter((v) => v.status !== 'sold');
}

export async function getVehicle(slug: string): Promise<Vehicle | undefined> {
  return (await getAllVehicles()).find((v) => v.slug === slug);
}

export async function getFeaturedVehicle(): Promise<Vehicle> {
  const all = await getListedVehicles();
  return all.find((v) => v.featured && v.images.length) ?? all.find((v) => v.images.length) ?? all[0];
}

/** Similar vehicles: same brand or body type first, never the vehicle itself or sold cars. */
export async function getRelatedVehicles(v: Vehicle, limit = 3): Promise<Vehicle[]> {
  const others = (await getListedVehicles()).filter((o) => o.slug !== v.slug);
  const score = (o: Vehicle) => (o.brand === v.brand ? 2 : 0) + (o.bodyType === v.bodyType ? 1 : 0) + (o.images.length ? 0.5 : 0);
  return others.sort((a, b) => score(b) - score(a)).slice(0, limit);
}

export function vehicleTitle(v: Vehicle) {
  return `${v.brand} ${v.model}`;
}

export function vehicleUrl(v: Pick<Vehicle, 'slug'>) {
  return `/voorraad/${v.slug}`;
}

export function coverImage(v: Vehicle) {
  return v.images.find((i) => i.kind === 'cover') ?? v.images[0];
}

export function imageOfKind(v: Vehicle, kind: string) {
  return v.images.find((i) => i.kind === kind);
}

export const statusLabel: Record<VehicleStatus, string> = {
  available: 'Beschikbaar',
  reserved: 'Gereserveerd',
  incoming: 'Binnenkort binnen',
  sold: 'Verkocht',
};
