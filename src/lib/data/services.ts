// services.ts
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

export const services: Service[] = [
	{
		id: 1,
		title: 'Web Development',
		excerpt:
			'Custom web applications built with modern frameworks like React, Svelte, and Vue.js. Focus on performance, accessibility, and user experience.',
		icon: 'Code',
		category: 'web',
		features: [
			'Responsive Design',
			'SEO Optimization',
			'Performance Tuning',
			'Cross-browser Compatibility'
		],
		technologies: ['React', 'Svelte', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
		pricing: {
			starting: '$2,000',
			description: 'Starting price for basic web applications'
		},
		slug: 'web-development',
		featured: true,
		duration: '2-8 weeks',
		deliverables: [
			'Fully responsive website',
			'Source code documentation',
			'Deployment setup',
			'3 months support'
		]
	},
	{
		id: 2,
		title: 'Mobile Development',
		excerpt:
			'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
		icon: 'Smartphone',
		category: 'mobile',
		features: [
			'Native Performance',
			'Cross-platform',
			'App Store Deployment',
			'Push Notifications'
		],
		technologies: ['React Native', 'Flutter', 'Firebase', 'TypeScript'],
		pricing: {
			starting: '$5,000',
			description: 'Starting price for mobile applications'
		},
		slug: 'mobile-development',
		featured: true,
		duration: '4-12 weeks',
		deliverables: [
			'iOS and Android apps',
			'App store deployment',
			'Backend integration',
			'6 months support'
		]
	},
	{
		id: 3,
		title: 'Backend Development',
		excerpt:
			'Robust server-side applications with APIs, databases, and cloud infrastructure. Scalable and secure solutions.',
		icon: 'Server',
		category: 'backend',
		features: ['REST APIs', 'Database Design', 'Cloud Deployment', 'Security Implementation'],
		technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
		pricing: {
			starting: '$3,000',
			description: 'Starting price for backend systems'
		},
		slug: 'backend-development',
		featured: true,
		duration: '3-10 weeks',
		deliverables: ['RESTful API', 'Database schema', 'Documentation', 'Cloud deployment']
	},
	{
		id: 4,
		title: 'UI/UX Design',
		excerpt:
			'User-centered design approach to create intuitive and beautiful interfaces that enhance user experience.',
		icon: 'Palette',
		category: 'design',
		features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
		technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
		pricing: {
			starting: '$1,500',
			description: 'Starting price for UI/UX design'
		},
		slug: 'ui-ux-design',
		featured: false,
		duration: '2-6 weeks',
		deliverables: ['Design mockups', 'Interactive prototypes', 'Design system', 'Asset files']
	},
	{
		id: 5,
		title: 'DevOps & Deployment',
		excerpt:
			'CI/CD pipelines, containerization, and cloud infrastructure setup for reliable and automated deployments.',
		icon: 'Wrench',
		category: 'devops',
		features: ['Docker & Kubernetes', 'AWS/GCP Setup', 'Monitoring', 'Automated Testing'],
		technologies: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Jenkins'],
		pricing: {
			starting: '$2,500',
			description: 'Starting price for DevOps setup'
		},
		slug: 'devops-deployment',
		featured: false,
		duration: '1-4 weeks',
		deliverables: [
			'CI/CD pipeline',
			'Infrastructure setup',
			'Monitoring dashboard',
			'Documentation'
		]
	},
	{
		id: 6,
		title: 'Consulting & Mentoring',
		excerpt:
			'Technical consultation for your projects and mentoring for developers looking to improve their skills.',
		icon: 'Users',
		category: 'consulting',
		features: ['Code Review', 'Architecture Planning', 'Team Training', 'Best Practices'],
		technologies: ['Various based on needs'],
		pricing: {
			starting: '$150/hour',
			description: 'Hourly consulting rate'
		},
		slug: 'consulting-mentoring',
		featured: false,
		duration: 'Flexible',
		deliverables: ['Consultation report', 'Action plan', 'Training materials', 'Follow-up sessions']
	}
];
