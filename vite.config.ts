import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	build: {
		target: 'es2020',
		minify: 'esbuild',
		sourcemap: false
	},
	optimizeDeps: {
		include: ['date-fns', 'lucide-svelte']
	}
});
