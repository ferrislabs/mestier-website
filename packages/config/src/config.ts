import type { SiteConfig } from './contracts'

export const defaultConfig: SiteConfig = {
  name: 'Mestier',
  titleTemplate: '%s — Mestier',
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
      documentation: [
        { label: 'footer.links.gettingStarted', href: '/{locale}/mestier/getting-started' },
        { label: 'footer.links.crm', href: '/{locale}/mestier/features/crm' },
        { label: 'footer.links.invoicing', href: '/{locale}/mestier/features/invoicing' },
        { label: 'footer.links.deployment', href: '/{locale}/mestier/deployment/docker' },
      ],
      resources: [
        { label: 'footer.links.github', href: 'https://github.com/ferrislabs/mestier', external: true },
        { label: 'footer.links.blog', href: '', appId: 'blog' },
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
