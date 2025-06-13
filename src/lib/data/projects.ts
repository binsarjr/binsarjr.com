// projects.ts
export interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	githubUrl: string;
	liveUrl: string;
	featured: boolean;
	category: 'web' | 'mobile' | 'api' | 'tool' | 'other';
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description:
			'Modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.',
		image: '/api/placeholder/400/300',
		technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
		githubUrl: 'https://github.com/binsarjr',
		liveUrl: 'https://example.com',
		featured: true,
		category: 'web'
	},
	{
		id: 2,
		title: 'Task Management App',
		description:
			'Collaborative task management application with real-time updates, file sharing, and team collaboration features.',
		image: '/api/placeholder/400/300',
		technologies: ['Svelte', 'Socket.io', 'MongoDB', 'Express'],
		githubUrl: 'https://github.com/binsarjr',
		liveUrl: 'https://example.com',
		featured: true,
		category: 'web'
	},
	{
		id: 3,
		title: 'Weather Dashboard',
		description:
			'Beautiful weather dashboard with forecasts, maps, and location-based weather alerts using modern APIs.',
		image: '/api/placeholder/400/300',
		technologies: ['Vue.js', 'TypeScript', 'Weather API', 'Chart.js'],
		githubUrl: 'https://github.com/binsarjr',
		liveUrl: 'https://example.com',
		featured: false,
		category: 'web'
	},
	{
		id: 4,
		title: 'AI Chat Bot',
		description:
			'Intelligent chatbot powered by OpenAI API with context awareness and natural language processing.',
		image: '/api/placeholder/400/300',
		technologies: ['Python', 'FastAPI', 'OpenAI', 'React'],
		githubUrl: 'https://github.com/binsarjr',
		liveUrl: 'https://example.com',
		featured: false,
		category: 'api'
	},
	{
		id: 5,
		title: 'Portfolio Website',
		description:
			'Responsive portfolio website with modern animations, dark mode, and optimized performance.',
		image: '/api/placeholder/400/300',
		technologies: ['SvelteKit', 'Tailwind CSS', 'Vercel'],
		githubUrl: 'https://github.com/binsarjr',
		liveUrl: 'https://binsarjr.com',
		featured: false,
		category: 'web'
	},
	{
		id: 6,
		title: 'Data Visualization Tool',
		description:
			'Interactive data visualization dashboard for analyzing business metrics with charts and graphs.',
		image: '/api/placeholder/400/300',
		technologies: ['D3.js', 'React', 'Python', 'Pandas'],
		githubUrl: 'https://github.com/binsarjr',
		liveUrl: 'https://example.com',
		featured: false,
		category: 'tool'
	},
	{
		id: 7,
		title: 'Mobile Banking App',
		description:
			'Secure mobile banking application with biometric authentication and real-time transactions.',
		image: '/api/placeholder/400/300',
		technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js'],
		githubUrl: 'https://github.com/binsarjr',
		liveUrl: 'https://example.com',
		featured: false,
		category: 'mobile'
	},
	{
		id: 8,
		title: 'REST API Framework',
		description:
			'Lightweight and fast REST API framework with built-in authentication, validation, and documentation.',
		image: '/api/placeholder/400/300',
		technologies: ['Node.js', 'TypeScript', 'Express', 'JWT', 'Swagger'],
		githubUrl: 'https://github.com/binsarjr',
		liveUrl: 'https://example.com',
		featured: false,
		category: 'api'
	}
];
