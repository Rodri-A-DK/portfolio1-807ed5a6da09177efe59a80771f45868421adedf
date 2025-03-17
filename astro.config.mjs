import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // or /edge

export default defineConfig({
  output: 'server', // or 'static' if you're prerendering everything
  adapter: vercel(), // or vercel({ mode: 'edge' })
});