// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://shasitomoontaka.github.io',
	base: '/apu-army-2',
	integrations: [mdx(), sitemap()],
});

