import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		// Dynamic import of the markdown file
		const service = await import(`../../../content/services/${params.slug}.md`);

		return {
			content: service.default,
			meta: service.metadata
		};
	} catch (e) {
		throw error(404, `Could not find service "${params.slug}"`);
	}
};
