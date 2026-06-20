import react from '@astrojs/react'
import { thumbnailIntegration } from '@explainer/thumbnail/integration'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: process.env.PUBLIC_WEBSITE_URL || undefined,
  integrations: [
    react(),
    thumbnailIntegration({
      appName: 'Mestier',
      primaryColor: '#3fa38a',
      content: {
        type: 'static',
        pages: [
          {
            path: '/',
            title: 'Votre entreprise, connectée.',
            description:
              'La suite open-source qui réunit gestion, communication, projets, support et RH. Pour startups, agences, PME et artisans.',
          },
          {
            path: '/thumbnails/en',
            title: 'Your business, connected.',
            description:
              'The open-source suite that brings operations, communication, projects, support and HR together. For startups, agencies, SMEs and artisans.',
          },
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    envDir: '../../',
  },
})
