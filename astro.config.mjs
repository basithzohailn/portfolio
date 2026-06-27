// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://basithnijamudeen.github.io',
  base: '/portfolio',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
