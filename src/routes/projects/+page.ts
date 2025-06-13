import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		// Get all markdown files in the projects directory
		const modules = import.meta.glob('/src/content/projects/*.md');
		const projects = [];

		for (const path in modules) {
			const mod = await modules[path]();
			const slug = path.split('/').pop()?.replace('.md', '') || '';

			if (mod && typeof mod === 'object' && 'metadata' in mod) {
				projects.push({
					slug,
					meta: (mod as any).metadata
				});
			}
		}

		// Sort projects by completedAt date if available, otherwise by title
		projects.sort((a, b) => {
			if (a.meta.completedAt && b.meta.completedAt) {
				return new Date(b.meta.completedAt).getTime() - new Date(a.meta.completedAt).getTime();
			}
			if (a.meta.title && b.meta.title) {
				return a.meta.title.localeCompare(b.meta.title);
			}
			return 0;
		});

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
