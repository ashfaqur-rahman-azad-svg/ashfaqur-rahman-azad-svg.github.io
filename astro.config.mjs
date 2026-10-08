import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ashfaqur-rahman-azad-svg.github.io',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
});
