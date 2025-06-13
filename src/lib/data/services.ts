// services.ts
import { getAllContent, type ServiceMeta } from '../content';

export interface Service {
	id: number;
	title: string;
	excerpt: string;
	content?: string;
	icon: string;
	category: 'web' | 'mobile' | 'backend' | 'design' | 'devops' | 'consulting';
	features: string[];
	technologies: string[];
	pricing: {
		starting: string;
		description: string;
	};
	slug: string;
	featured: boolean;
	duration: string;
	deliverables: string[];
}

// Icon mapping based on category or specific service
const getServiceIcon = (slug: string, category: string): string => {
	const iconMap: Record<string, string> = {
		'sistem-informasi': 'Code',
		'bot-development': 'Bot',
		'data-scraping': 'Database',
		'ui-ux-design': 'Palette',
		'devops-deployment': 'Wrench',
		'consulting-mentoring': 'Users'
	};

	// Return specific icon if found, otherwise fallback to category-based icons
	if (iconMap[slug]) {
		return iconMap[slug];
	}

	const categoryIcons: Record<string, string> = {
		web: 'Code',
		mobile: 'Smartphone',
		backend: 'Server',
		design: 'Palette',
		devops: 'Wrench',
		consulting: 'Users'
	};

	return categoryIcons[category] || 'Code';
};

// Load services from markdown files
export async function loadServices(): Promise<Service[]> {
	const servicesContent = await getAllContent<ServiceMeta>('services');

	return servicesContent.map((service, index) => ({
		id: index + 1,
		title: service.meta.title,
		excerpt: service.meta.excerpt || '',
		icon: getServiceIcon(service.slug, service.meta.category || 'web'),
		category: (service.meta.category as Service['category']) || 'web',
		features: service.meta.features || [],
		technologies: service.meta.technologies || [],
		pricing: service.meta.pricing || { starting: 'Contact for pricing', description: '' },
		slug: service.slug,
		featured: service.meta.featured || false,
		duration: service.meta.duration || '',
		deliverables: service.meta.deliverables || []
	}));
}

// Export empty array by default - data will be loaded dynamically
export const services: Service[] = [];
