// mdsvex.config.js
import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import { visit } from 'unist-util-visit';

// Custom remark plugin for reading time calculation
function remarkReadingTime() {
	return function (tree, { data }) {
		let textContent = '';

		visit(tree, 'text', (node) => {
			textContent += node.value;
		});

		const words = textContent.trim().split(/\s+/).length;
		const readingTime = Math.ceil(words / 200); // Assuming 200 words per minute

		data.fm = data.fm || {};
		data.fm.readingTime = `${readingTime} min read`;
	};
}

// Custom remark plugin for extracting excerpt
function remarkExcerpt() {
	return function (tree, { data }) {
		let excerpt = '';
		let extractedLength = 0;
		const maxLength = 160;

		visit(tree, 'text', (node) => {
			if (extractedLength < maxLength) {
				const remainingLength = maxLength - extractedLength;
				const text = node.value.slice(0, remainingLength);
				excerpt += text;
				extractedLength += text.length;
			}
		});

		data.fm = data.fm || {};
		data.fm.excerpt =
			data.fm.excerpt || excerpt.trim() + (extractedLength >= maxLength ? '...' : '');
	};
}

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [remarkGfm, [remarkToc, { tight: true }], remarkReadingTime, remarkExcerpt],

	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap',
				properties: {
					className: ['heading-link']
				}
			}
		]
	],

	layout: {
		// Note: Layout paths cause build issues with mdsvex path resolution
		// Using dynamic content loading approach instead in route components
		// blog: 'src/lib/components/layouts/BlogLayout.svelte',
		// project: 'src/lib/components/layouts/ProjectLayout.svelte',
		// service: 'src/lib/components/layouts/ServiceLayout.svelte',
		// _: 'src/lib/components/layouts/DefaultLayout.svelte'
	}
});

export default config;
