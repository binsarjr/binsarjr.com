import { getAllContentOptimized } from '$lib';
import type { ProjectMeta } from '$lib/content';
import type { PageLoad } from './$types';

// Enable prerendering for this page
export const prerender = true;

export const load: PageLoad = async () => {
	try {
		const projects = await getAllContentOptimized<ProjectMeta>('projects');

		return {
			projects
		};
	} catch (error) {
		console.error('Error loading projects:', error);
		return {
			projects: []
		};
	}
};
