import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import mdsvexConfig from './mdsvex.config.js';

const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter(),
		prerender: {
			// Handle crawl errors gracefully
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404s for optional routes
				if (message.includes('404')) {
					return;
				}
				// Throw for other errors
				throw new Error(`${message} (${path})`);
			},
			// Ensure all content routes are prerendered
			entries: ['/', '/blog', '/projects', '/services']
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
