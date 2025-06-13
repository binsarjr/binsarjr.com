// content.ts

export interface ContentMeta {
	title: string;
	excerpt?: string;
	publishedAt?: string;
	updatedAt?: string;
	tags?: string[];
	category?: string;
	featured?: boolean;
	author?: {
		name: string;
		avatar: string;
		bio: string;
	};
}

export interface ProjectMeta extends ContentMeta {
	description: string;
	image?: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	completedAt?: string;
}

export interface ServiceMeta extends ContentMeta {
	features: string[];
	technologies: string[];
	pricing: {
		starting: string;
		description: string;
	};
	duration: string;
	deliverables: string[];
}

// Utility function to get all content of a specific type
export async function getAllContent<T extends ContentMeta>(
	contentType: 'blog' | 'projects' | 'services'
): Promise<Array<{ slug: string; meta: T }>> {
	const modules = import.meta.glob('/src/content/**/*.md');
	const content: Array<{ slug: string; meta: T }> = [];

	for (const path in modules) {
		if (path.includes(`/content/${contentType}/`)) {
			const mod = await modules[path]();
			const slug = path.split('/').pop()?.replace('.md', '') || '';

			if (mod && typeof mod === 'object' && 'metadata' in mod) {
				content.push({
					slug,
					meta: (mod as any).metadata as T
				});
			}
		}
	}

	return content.sort((a, b) => {
		// Sort by publishedAt date if available, otherwise by title
		if (a.meta.publishedAt && b.meta.publishedAt) {
			return new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime();
		}
		return a.meta.title.localeCompare(b.meta.title);
	});
}

// Utility function to get content by slug
export async function getContentBySlug<T extends ContentMeta>(
	contentType: 'blog' | 'projects' | 'services',
	slug: string
): Promise<{ content: any; meta: T } | null> {
	try {
		const mod = await import(`../content/${contentType}/${slug}.md`);
		return {
			content: mod.default,
			meta: mod.metadata as T
		};
	} catch {
		return null;
	}
}

// Utility function to filter content
export function filterContent<T extends ContentMeta>(
	content: Array<{ slug: string; meta: T }>,
	filters: {
		featured?: boolean;
		category?: string;
		tags?: string[];
		search?: string;
	}
): Array<{ slug: string; meta: T }> {
	return content.filter(({ meta }) => {
		// Filter by featured status
		if (filters.featured !== undefined && meta.featured !== filters.featured) {
			return false;
		}

		// Filter by category
		if (filters.category && meta.category !== filters.category) {
			return false;
		}

		// Filter by tags
		if (filters.tags && filters.tags.length > 0) {
			const metaTags = meta.tags || [];
			const hasMatchingTag = filters.tags.some((tag) =>
				metaTags.some((metaTag) => metaTag.toLowerCase().includes(tag.toLowerCase()))
			);
			if (!hasMatchingTag) return false;
		}

		// Filter by search term
		if (filters.search) {
			const searchLower = filters.search.toLowerCase();
			const titleMatch = meta.title.toLowerCase().includes(searchLower);
			const excerptMatch = meta.excerpt?.toLowerCase().includes(searchLower);
			const tagsMatch = meta.tags?.some((tag) => tag.toLowerCase().includes(searchLower));

			if (!titleMatch && !excerptMatch && !tagsMatch) {
				return false;
			}
		}

		return true;
	});
}

// Utility function to get related content
export function getRelatedContent<T extends ContentMeta>(
	allContent: Array<{ slug: string; meta: T }>,
	currentSlug: string,
	limit: number = 3
): Array<{ slug: string; meta: T }> {
	const current = allContent.find(({ slug }) => slug === currentSlug);
	if (!current) return [];

	const currentTags = current.meta.tags || [];
	const currentCategory = current.meta.category;

	// Score content by relevance
	const scored = allContent
		.filter(({ slug }) => slug !== currentSlug)
		.map((item) => {
			let score = 0;

			// Same category gets higher score
			if (item.meta.category === currentCategory) {
				score += 3;
			}

			// Shared tags get points
			const sharedTags = (item.meta.tags || []).filter((tag) => currentTags.includes(tag)).length;
			score += sharedTags * 2;

			// Featured content gets slight boost
			if (item.meta.featured) {
				score += 1;
			}

			return { ...item, score };
		})
		.sort((a, b) => b.score - a.score)
		.slice(0, limit);

	return scored.map(({ score, ...item }) => item);
}
