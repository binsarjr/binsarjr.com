// utils.ts
import type { BlogPost } from './data/blog';

/**
 * Smooth scroll to an element by ID
 */
export function scrollToSection(sectionId: string) {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
}

/**
 * Format date for display
 */
export function formatDate(date: Date, format: 'short' | 'long' = 'short'): string {
	if (format === 'long') {
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
	return date.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
}

/**
 * Calculate reading time for blog posts
 */
export function calculateReadingTime(content: string): string {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	const time = Math.ceil(words / wordsPerMinute);
	return `${time} min read`;
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number
): (...args: Parameters<T>) => void {
	let timeout: ReturnType<typeof setTimeout>;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
}

/**
 * Filter blog posts by search term
 */
export function filterBlogPosts(posts: BlogPost[], searchTerm: string): BlogPost[] {
	if (!searchTerm.trim()) return posts;

	const term = searchTerm.toLowerCase();
	return posts.filter(
		(post) =>
			post.title.toLowerCase().includes(term) ||
			post.excerpt.toLowerCase().includes(term) ||
			post.tags.some((tag) => tag.toLowerCase().includes(term)) ||
			post.category.toLowerCase().includes(term)
	);
}

/**
 * Get unique categories from blog posts
 */
export function getUniqueCategories(posts: BlogPost[]): string[] {
	return Array.from(new Set(posts.map((post) => post.category)));
}

/**
 * Get unique tags from blog posts
 */
export function getUniqueTags(posts: BlogPost[]): string[] {
	return Array.from(new Set(posts.flatMap((post) => post.tags)));
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number = 150): string {
	if (text.length <= length) return text;
	return text.slice(0, length).trim() + '...';
}

/**
 * Generate meta tags for SEO
 */
export function generateMetaTags(options: {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	type?: string;
}) {
	return {
		title: options.title || 'Binsar Jr - Full Stack Developer',
		description:
			options.description || 'Full Stack Developer specializing in modern web technologies',
		'og:title': options.title,
		'og:description': options.description,
		'og:image': options.image,
		'og:url': options.url,
		'og:type': options.type || 'website',
		'twitter:card': 'summary_large_image',
		'twitter:title': options.title,
		'twitter:description': options.description,
		'twitter:image': options.image
	};
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: Element): boolean {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch (error) {
		console.error('Failed to copy to clipboard:', error);
		return false;
	}
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
	return new Intl.NumberFormat().format(num);
}

/**
 * Get random items from array
 */
export function getRandomItems<T>(array: T[], count: number): T[] {
	const shuffled = [...array].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}

/**
 * Intersection Observer for lazy loading
 */
export function createIntersectionObserver(
	callback: (entry: IntersectionObserverEntry) => void,
	options: IntersectionObserverInit = {}
): IntersectionObserver {
	const defaultOptions = {
		root: null,
		rootMargin: '50px',
		threshold: 0.1,
		...options
	};

	return new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				callback(entry);
			}
		});
	}, defaultOptions);
}

/**
 * Lazy load action for Svelte components
 */
export function lazyLoad(node: HTMLElement, callback?: () => void) {
	const observer = createIntersectionObserver(() => {
		if (callback) callback();
		observer.unobserve(node);
	});

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
