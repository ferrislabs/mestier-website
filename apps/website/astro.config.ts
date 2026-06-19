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
      content: {
        type: 'static',
        pages: [
          {
            path: '/',
            title: 'Mestier',
            description: 'ERP & CRM open-source pour artisans et PME. Conçu en Rust.',
          },
          {
            path: '/thumbnails/en',
            title: 'Mestier',
            description: 'Open-source ERP & CRM for artisans and SMEs. Built in Rust.',
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
