import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://abigael-berrebi.github.io',
  base: '/portfolio', 
  
  integrations: [react(), vue()],
  
  vite: {
    plugins: [tailwind()],
  },
});