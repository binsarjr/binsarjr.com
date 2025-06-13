// blog.ts
export interface BlogPost {
	id: number;
	title: string;
	excerpt: string;
	content?: string;
	publishedAt: Date;
	updatedAt?: Date;
	readTime: string;
	tags: string[];
	slug: string;
	featured: boolean;
	category: 'tutorial' | 'insights' | 'news' | 'opinion' | 'guide';
	author: {
		name: string;
		avatar: string;
		bio: string;
	};
}

export const blogPosts: BlogPost[] = [
	{
		id: 1,
		title: 'Getting Started with SvelteKit: A Complete Guide',
		excerpt:
			'Learn how to build modern web applications with SvelteKit, from setup to deployment. This comprehensive guide covers everything you need to know.',
		publishedAt: new Date('2024-01-15'),
		readTime: '8 min read',
		tags: ['SvelteKit', 'JavaScript', 'Tutorial'],
		slug: 'getting-started-with-sveltekit',
		featured: true,
		category: 'tutorial',
		author: {
			name: 'Binsar Jr',
			avatar: '/api/placeholder/40/40',
			bio: 'Full Stack Developer & Technical Writer'
		}
	},
	{
		id: 2,
		title: 'Building Scalable APIs with Node.js and Express',
		excerpt:
			'Best practices for creating robust and scalable REST APIs. Covers authentication, error handling, and performance optimization.',
		publishedAt: new Date('2024-01-10'),
		readTime: '12 min read',
		tags: ['Node.js', 'Express', 'API'],
		slug: 'scalable-apis-nodejs-express',
		featured: true,
		category: 'guide',
		author: {
			name: 'Binsar Jr',
			avatar: '/api/placeholder/40/40',
			bio: 'Full Stack Developer & Technical Writer'
		}
	},
	{
		id: 3,
		title: 'Modern CSS Techniques for Better UI',
		excerpt:
			'Explore advanced CSS features like Grid, Flexbox, and CSS Variables to create beautiful and responsive user interfaces.',
		publishedAt: new Date('2024-01-05'),
		readTime: '6 min read',
		tags: ['CSS', 'UI/UX', 'Frontend'],
		slug: 'modern-css-techniques',
		featured: false,
		category: 'tutorial',
		author: {
			name: 'Binsar Jr',
			avatar: '/api/placeholder/40/40',
			bio: 'Full Stack Developer & Technical Writer'
		}
	},
	{
		id: 4,
		title: 'TypeScript Best Practices for Large Applications',
		excerpt:
			'Learn how to structure and organize TypeScript code for maintainable large-scale applications.',
		publishedAt: new Date('2023-12-28'),
		readTime: '10 min read',
		tags: ['TypeScript', 'Best Practices', 'Architecture'],
		slug: 'typescript-best-practices',
		featured: false,
		category: 'guide',
		author: {
			name: 'Binsar Jr',
			avatar: '/api/placeholder/40/40',
			bio: 'Full Stack Developer & Technical Writer'
		}
	},
	{
		id: 5,
		title: 'The Future of Web Development in 2024',
		excerpt:
			'Exploring emerging trends and technologies that will shape the future of web development.',
		publishedAt: new Date('2023-12-20'),
		readTime: '7 min read',
		tags: ['Web Development', 'Trends', '2024'],
		slug: 'future-of-web-development-2024',
		featured: false,
		category: 'insights',
		author: {
			name: 'Binsar Jr',
			avatar: '/api/placeholder/40/40',
			bio: 'Full Stack Developer & Technical Writer'
		}
	},
	{
		id: 6,
		title: 'Optimizing React Performance: A Deep Dive',
		excerpt:
			'Advanced techniques for optimizing React applications, including memoization, lazy loading, and bundle splitting.',
		publishedAt: new Date('2023-12-15'),
		readTime: '15 min read',
		tags: ['React', 'Performance', 'Optimization'],
		slug: 'optimizing-react-performance',
		featured: false,
		category: 'tutorial',
		author: {
			name: 'Binsar Jr',
			avatar: '/api/placeholder/40/40',
			bio: 'Full Stack Developer & Technical Writer'
		}
	}
];
