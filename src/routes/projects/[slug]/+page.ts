import { getAllContentOptimized, getContentBySlugOptimized } from '$lib';
import type { ProjectMeta } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

// Enable prerendering for this page
export const prerender = true;

// Generate all possible slugs at build time
export const entries: EntryGenerator = async () => {
	const projects = await getAllContentOptimized<ProjectMeta>('projects');
	return projects.map((project) => ({ slug: project.slug }));
};

export const load: PageLoad = async ({ params }) => {
	try {
		const result = await getContentBySlugOptimized<ProjectMeta>('projects', params.slug, true);

		if (!result) {
			throw error(404, `Could not find project "${params.slug}"`);
		}

		return {
			content: result.content,
			meta: result.meta
		};
	} catch (e) {
		if (e && typeof e === 'object' && 'status' in e) {
			throw e; // Re-throw SvelteKit errors
		}
		throw error(404, `Could not find project "${params.slug}"`);
	}
};
