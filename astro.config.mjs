// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  build: { format: 'directory' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [sitemap()],
  // Old English URLs keep working after the move to Dutch routes.
  redirects: {
    '/vehicles': '/aanbod',
    '/vehicles/[slug]': '/aanbod/[slug]',
    '/about': '/over-ons',
    '/services': '/diensten',
    '/journal': '/magazine',
    '/journal/behind-the-collection': '/magazine/achter-de-collectie',
    '/journal/five-details-worth-noticing': '/magazine/vijf-details-om-op-te-letten',
    '/journal/inside-the-workshop': '/magazine/in-de-werkplaats',
    '/journal/why-some-cars-become-icons': '/magazine/waarom-sommige-autos-iconen-worden',
    '/terms': '/voorwaarden',
  },
  image: {
    // Allow remote images from a CMS / inventory feed by adding its host here.
    domains: [],
  },
});
