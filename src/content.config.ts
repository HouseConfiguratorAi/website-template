import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Journal articles live in src/content/journal as Markdown.
 * `cover` is a key from src/assets/media.
 */
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Oberhall'),
    cover: z.string(),
    coverAlt: z.string(),
    readingTime: z.number().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { journal };
