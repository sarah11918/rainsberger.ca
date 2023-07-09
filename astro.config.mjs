import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import remarkExpressiveCode from 'remark-expressive-code';

/** @type {import('remark-expressive-code').RemarkExpressiveCodeOptions} */
const remarkExpressiveCodeOptions = {
  // You can add configuration options here,
  // see the API section for more information
}

// https://astro.build/config
export default defineConfig({
  site: 'https://rainsberger.ca',
  integrations: [react(), svelte(), vue(),],
  experimental: {
    assets: true
   },
   markdown: {
    remarkPlugins: [
      // The nested array structure below is used
      // to pass options to the remark plugin
      [remarkExpressiveCode, remarkExpressiveCodeOptions],
    ],
  }
});