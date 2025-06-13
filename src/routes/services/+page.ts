import { getAllContentOptimized } from '$lib';
import type { ServiceMeta } from '$lib/content';
import type { PageLoad } from './$types';

// Enable prerendering for this page
export const prerender = true;

export const load: PageLoad = async () => {
	try {
		const services = await getAllContentOptimized<ServiceMeta>('services');

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
