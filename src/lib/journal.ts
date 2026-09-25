import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'journal'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('journal');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** The featured article first, then the rest by date. */
export async function getJournalLayout() {
  const posts = await getPosts();
  const feature = posts.find((p) => p.data.featured) ?? posts[0];
  return { feature, rest: posts.filter((p) => p !== feature) };
}

export const postUrl = (p: Post) => `/magazine/${p.id}`;
