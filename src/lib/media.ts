/**
 * Media registry.
 * Local images live in src/assets/media and are referenced by file name
 * without extension ("f458-rosso-cover"). Absolute https:// URLs are passed
 * through untouched so a CMS or image CDN can be used instead.
 */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/media/*.{jpg,jpeg,png,webp,avif}', { eager: true });

const registry = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const key = path.split('/').pop()!.replace(/\.[a-z]+$/i, '');
  registry.set(key, mod.default);
}

export type ResolvedMedia = { type: 'local'; meta: ImageMetadata } | { type: 'remote'; src: string } | null;

export function resolveMedia(src: string | undefined | null): ResolvedMedia {
  if (!src) return null;
  if (/^https?:\/\//.test(src)) return { type: 'remote', src };
  const meta = registry.get(src);
  if (!meta) {
    if (import.meta.env.DEV) console.warn(`[media] Unknown image key "${src}" — rendering placeholder.`);
    return null;
  }
  return { type: 'local', meta };
}

export const hasMedia = (src?: string | null) => resolveMedia(src) !== null;
