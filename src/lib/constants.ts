// constants.ts
import { PERSONAL_CONFIG } from './config';

export const SITE_NAME = PERSONAL_CONFIG.website.name;
export const SITE_DESCRIPTION = PERSONAL_CONFIG.website.description;
export const SITE_URL = PERSONAL_CONFIG.website.url;

export const AUTHOR = {
	name: PERSONAL_CONFIG.nickname,
	fullName: PERSONAL_CONFIG.name,
	email: PERSONAL_CONFIG.email,
	phone: PERSONAL_CONFIG.phone,
	location: PERSONAL_CONFIG.location,
	bio: PERSONAL_CONFIG.bio,
	title: PERSONAL_CONFIG.title,
	subtitle: PERSONAL_CONFIG.subtitle,
	avatar: PERSONAL_CONFIG.avatar
};

export const SOCIAL_LINKS = {
	github: PERSONAL_CONFIG.social.github,
	linkedin: PERSONAL_CONFIG.social.linkedin,
	twitter: PERSONAL_CONFIG.social.twitter,
	instagram: PERSONAL_CONFIG.social.instagram,
	youtube: PERSONAL_CONFIG.social.youtube,
	portfolio: PERSONAL_CONFIG.social.portfolio,
	email: `mailto:${PERSONAL_CONFIG.email}`,
	phone: `tel:${PERSONAL_CONFIG.phone}`
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
