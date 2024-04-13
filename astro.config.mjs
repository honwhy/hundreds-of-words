import { defineConfig, passthroughImageService } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService()
  },
  compressHTML: true,
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false,
  }), compress()],
})
