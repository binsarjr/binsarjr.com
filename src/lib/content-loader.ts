// content-loader.ts - Optimized content loader using prebuilt manifests

import type { ContentMeta } from './content';

interface ContentManifestItem {
	slug: string;
	meta: any;
	lastModified: number;
}

// Cache for loaded manifests
const manifestCache = new Map<string, ContentManifestItem[]>();

/**
 * Load content manifest (prebuilt during build process)
 */
async function loadManifest(
	contentType: 'blog' | 'projects' | 'services'
): Promise<ContentManifestItem[]> {
	// Check cache first
	if (manifestCache.has(contentType)) {
		return manifestCache.get(contentType)!;
	}

	try {
		// Try to load prebuilt manifest first (in production)
		const manifestModule = await import(`../../.svelte-kit/generated/${contentType}-manifest.json`);
		const manifest = manifestModule.default || manifestModule;
		manifestCache.set(contentType, manifest);
		return manifest;
	} catch {
		// Fallback to dynamic loading (in development)
		console.warn(`No prebuilt manifest found for ${contentType}, falling back to dynamic loading`);
		return await loadContentDynamic(contentType);
	}
}

/**
 * Dynamic content loading (fallback for development)
 */
async function loadContentDynamic(
	contentType: 'blog' | 'projects' | 'services'
): Promise<ContentManifestItem[]> {
	const modules = import.meta.glob('/src/content/**/*.md');
	const content: ContentManifestItem[] = [];

	for (const path in modules) {
		if (path.includes(`/content/${contentType}/`)) {
			try {
				const mod = await modules[path]();
				const slug = path.split('/').pop()?.replace('.md', '') || '';

				if (mod && typeof mod === 'object' && 'metadata' in mod) {
					content.push({
						slug,
						meta: (mod as any).metadata,
						lastModified: Date.now()
					});
				}
			} catch (error) {
				console.warn(`Failed to load ${path}:`, error);
			}
		}
	}

	// Sort content appropriately
	content.sort((a, b) => {
		// Sort by publishedAt date if available, otherwise by title
		if (a.meta.publishedAt && b.meta.publishedAt) {
			return new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime();
		}
		if (a.meta.completedAt && b.meta.completedAt) {
			return new Date(b.meta.completedAt).getTime() - new Date(a.meta.completedAt).getTime();
		}
		return (a.meta.title || '').localeCompare(b.meta.title || '');
	});

	manifestCache.set(contentType, content);
	return content;
}

/**
 * Get all content of a specific type (optimized version)
 */
export async function getAllContentOptimized<T extends ContentMeta>(
	contentType: 'blog' | 'projects' | 'services'
): Promise<Array<{ slug: string; meta: T }>> {
	const manifest = await loadManifest(contentType);
	return manifest.map((item) => ({
		slug: item.slug,
		meta: item.meta as T
	}));
}

/**
 * Get content by slug (with optional content loading)
 */
export async function getContentBySlugOptimized<T extends ContentMeta>(
	contentType: 'blog' | 'projects' | 'services',
	slug: string,
	includeContent = false
): Promise<{ content?: any; meta: T } | null> {
	try {
		// First check if the slug exists in the manifest
		const manifest = await loadManifest(contentType);
		const manifestItem = manifest.find((item) => item.slug === slug);

		if (!manifestItem) {
			return null;
		}

		const result: { content?: any; meta: T } = {
			meta: manifestItem.meta as T
		};

		// Only load the actual content if requested
		if (includeContent) {
			try {
				const mod = await import(`../content/${contentType}/${slug}.md`);
				result.content = mod.default;
			} catch (error) {
				console.warn(`Failed to load content for ${contentType}/${slug}:`, error);
			}
		}

		return result;
	} catch (error) {
		console.error(`Error loading ${contentType}/${slug}:`, error);
		return null;
	}
}

/**
 * Get featured content
 */
export async function getFeaturedContent<T extends ContentMeta>(
	contentType: 'blog' | 'projects' | 'services',
	limit = 3
): Promise<Array<{ slug: string; meta: T }>> {
	const allContent = await getAllContentOptimized<T>(contentType);
	return allContent.filter((item) => item.meta.featured).slice(0, limit);
}

/**
 * Search content by query
 */
export async function searchContent<T extends ContentMeta>(
	contentType: 'blog' | 'projects' | 'services',
	query: string,
	limit = 10
): Promise<Array<{ slug: string; meta: T; score: number }>> {
	const allContent = await getAllContentOptimized<T>(contentType);
	const queryLower = query.toLowerCase();

	const results = allContent
		.map((item) => {
			let score = 0;
			const title = (item.meta.title || '').toLowerCase();
			const excerpt = (item.meta.excerpt || '').toLowerCase();
			const tags = (item.meta.tags || []).join(' ').toLowerCase();
			const category = (item.meta.category || '').toLowerCase();

			// Title matches get highest score
			if (title.includes(queryLower)) score += 10;
			if (title.startsWith(queryLower)) score += 5;

			// Excerpt matches
			if (excerpt.includes(queryLower)) score += 5;

			// Tag matches
			if (tags.includes(queryLower)) score += 7;

			// Category matches
			if (category.includes(queryLower)) score += 3;

			return { ...item, score };
		})
		.filter((item) => item.score > 0)
		.sort((a, b) => b.score - a.score)
		.slice(0, limit);

	return results;
}

/**
 * Get content statistics
 */
export async function getContentStats() {
	const [blog, projects, services] = await Promise.all([
		getAllContentOptimized('blog'),
		getAllContentOptimized('projects'),
		getAllContentOptimized('services')
	]);

	return {
		blog: {
			total: blog.length,
			featured: blog.filter((item) => item.meta.featured).length
		},
		projects: {
			total: projects.length,
			featured: projects.filter((item) => item.meta.featured).length
		},
		services: {
			total: services.length,
			featured: services.filter((item) => item.meta.featured).length
		}
	};
}
