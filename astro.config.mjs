import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  outDir: '_mi_carpeta_de_salida_', // Reemplaza esto con el nombre de tu carpeta
});