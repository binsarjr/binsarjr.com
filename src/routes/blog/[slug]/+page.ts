import { getAllContentOptimized, getContentBySlugOptimized } from '$lib';
import type { ContentMeta } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

// Enable prerendering for this page
export const prerender = true;

// Generate all possible slugs at build time
export const entries: EntryGenerator = async () => {
	const posts = await getAllContentOptimized<ContentMeta>('blog');
	return posts.map((post) => ({ slug: post.slug }));
};

export const load: PageLoad = async ({ params }) => {
	try {
		const result = await getContentBySlugOptimized<ContentMeta>('blog', params.slug, true);

		if (!result) {
			throw error(404, `Could not find blog post "${params.slug}"`);
		}

		return {
			content: result.content,
			meta: result.meta
		};
	} catch (e) {
		if (e && typeof e === 'object' && 'status' in e) {
			throw e; // Re-throw SvelteKit errors
		}
		throw error(404, `Could not find blog post "${params.slug}"`);
	}
};
