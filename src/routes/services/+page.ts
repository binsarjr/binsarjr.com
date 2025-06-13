import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		// Get all markdown files in the services directory
		const modules = import.meta.glob('/src/content/services/*.md');
		const services = [];

		for (const path in modules) {
			const mod = await modules[path]();
			const slug = path.split('/').pop()?.replace('.md', '') || '';

			if (mod && typeof mod === 'object' && 'metadata' in mod) {
				services.push({
					slug,
					meta: (mod as any).metadata
				});
			}
		}

		// Sort services by title
		services.sort((a, b) => {
			if (a.meta.title && b.meta.title) {
				return a.meta.title.localeCompare(b.meta.title);
			}
			return 0;
		});

		return {
			services
		};
	} catch (error) {
		console.error('Error loading services:', error);
		return {
			services: []
		};
	}
};
