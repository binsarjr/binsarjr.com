import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		// Get all markdown files in the blog directory
		const modules = import.meta.glob('/src/content/blog/*.md');
		const posts = [];

		for (const path in modules) {
			const mod = await modules[path]();
			const slug = path.split('/').pop()?.replace('.md', '') || '';

			if (mod && typeof mod === 'object' && 'metadata' in mod) {
				posts.push({
					slug,
					meta: (mod as any).metadata
				});
			}
		}

		// Sort posts by publishedAt date
		posts.sort((a, b) => {
			if (a.meta.publishedAt && b.meta.publishedAt) {
				return new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime();
			}
			if (a.meta.title && b.meta.title) {
				return a.meta.title.localeCompare(b.meta.title);
			}
			return 0;
		});

		return {
			posts
		};
	} catch (error) {
		console.error('Error loading blog posts:', error);
		return {
			posts: []
		};
	}
};
