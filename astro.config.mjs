import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://claudiourdaneta.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
