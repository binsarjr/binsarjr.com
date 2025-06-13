import { getAllContentOptimized } from '$lib';
import type { ContentMeta } from '$lib/content';
import type { PageLoad } from './$types';

// Enable prerendering for this page
export const prerender = true;

export const load: PageLoad = async () => {
	try {
		const posts = await getAllContentOptimized<ContentMeta>('blog');

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
