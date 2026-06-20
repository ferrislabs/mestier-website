import type { SiteConfig } from './contracts'

export const defaultConfig: SiteConfig = {
  name: 'Mestier',
  titleTemplate: '%s · Mestier',
  favicon: '/favicon.svg',
  logo: '/logo.svg',
  thumbnail: '/thumbnail.png',
  twitterCard: 'summary_large_image',
  ogType: 'website',
  github: 'https://github.com/ferrislabs/mestier',
  sponsors: [],
  defaultLocale: 'fr',
  locales: ['fr', 'en'],
  footer: {
    description: 'footer.description',
    columns: {
      documentation: 'footer.columns.documentation',
      resources: 'footer.columns.resources',
      community: 'footer.columns.community',
    },
    copyright: 'footer.copyright',
    builtWith: 'footer.builtWith',
    links: {
      // "Produit" — anchors to landing sections (docs/blog not deployed yet)
      documentation: [
        { label: 'footer.links.platform', href: '#platform' },
        { label: 'footer.links.features', href: '#features' },
        { label: 'footer.links.pricing', href: '#pricing' },
      ],
      resources: [
        { label: 'footer.links.github', href: 'https://github.com/ferrislabs/mestier', external: true },
        { label: 'footer.links.changelog', href: 'https://github.com/ferrislabs/mestier/releases', external: true },
      ],
      community: [
        { label: 'footer.links.issues', href: 'https://github.com/ferrislabs/mestier/issues', external: true },
        { label: 'footer.links.discussions', href: 'https://github.com/ferrislabs/mestier/discussions', external: true },
        { label: 'footer.links.contributing', href: 'https://github.com/ferrislabs/mestier/blob/main/CONTRIBUTING.md', external: true },
      ],
    },
  },
}
