import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://rainsberger.ca',
  integrations: [react(), svelte(), vue(), 
    
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  
  ],
});