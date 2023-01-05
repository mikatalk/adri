import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // site: 'https://astro-blog-template.netlify.app',
  // integrations: [mdx(), svelte()],
  site: 'https://mikatalk.github.io',
  base: '/adri',
  integrations: [mdx(), , svelte(), sitemap()],
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    rehypePlugins: [
      [
        'rehype-external-links',
        {
          target: '_blank',
        },
      ],
    ],
  },
})
