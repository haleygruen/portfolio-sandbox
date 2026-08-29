import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://haleygruensfelder.github.io',
  base: '/portfolio-sandbox/',
  server: {
    host: true,
    port: 4321,
  },
});
