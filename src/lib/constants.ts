// constants.ts
export const SITE_NAME = 'Binsar Jr';
export const SITE_DESCRIPTION = 'Full Stack Developer specializing in modern web technologies';
export const SITE_URL = 'https://binsarjr.com';

export const AUTHOR = {
	name: 'Binsar Jr',
	email: 'binsar@example.com',
	phone: '+1 (234) 567-890',
	location: 'Jakarta, Indonesia',
	bio: 'Full Stack Developer with over 5 years of experience building modern web applications',
	avatar: '/api/placeholder/150/150'
};

export const SOCIAL_LINKS = {
	github: 'https://github.com/binsarjr',
	linkedin: 'https://linkedin.com/in/binsarjr',
	twitter: 'https://twitter.com/binsarjr',
	email: `mailto:${AUTHOR.email}`,
	phone: `tel:${AUTHOR.phone}`
};

export const SKILLS = {
	frontend: [
		'React',
		'Svelte',
		'Vue.js',
		'TypeScript',
		'JavaScript',
		'HTML5',
		'CSS3',
		'Tailwind CSS'
	],
	backend: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
	tools: ['Docker', 'AWS', 'GCP', 'Git', 'Linux', 'Figma', 'VS Code'],
	concepts: ['REST APIs', 'GraphQL', 'Microservices', 'CI/CD', 'Test-Driven Development', 'Agile']
};

export const EXPERIENCE = [
	{
		title: 'Senior Full Stack Developer',
		company: 'Tech Startup',
		period: '2022 - Present',
		description: 'Leading development of scalable web applications using React, Node.js, and AWS.'
	},
	{
		title: 'Full Stack Developer',
		company: 'Digital Agency',
		period: '2020 - 2022',
		description: 'Built custom web solutions for clients using various modern technologies.'
	},
	{
		title: 'Frontend Developer',
		company: 'Software Company',
		period: '2019 - 2020',
		description: 'Developed responsive user interfaces and improved application performance.'
	}
];

export const EDUCATION = [
	{
		degree: 'Bachelor of Computer Science',
		institution: 'University of Technology',
		period: '2015 - 2019',
		description: 'Focused on software engineering and web development technologies.'
	}
];

export const NAVIGATION_ITEMS = [
	{ id: 'about', label: 'About', href: '#about' },
	{ id: 'projects', label: 'Projects', href: '#projects' },
	{ id: 'services', label: 'Services', href: '#services' },
	{ id: 'blog', label: 'Blog', href: '#blog' },
	{ id: 'contact', label: 'Contact', href: '#contact' }
];

export const META_DEFAULTS = {
	title: SITE_NAME,
	description: SITE_DESCRIPTION,
	url: SITE_URL,
	image: `${SITE_URL}/og-image.jpg`,
	type: 'website'
};
