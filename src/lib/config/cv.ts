// CV / Resume data — sourced from Binsar's LinkedIn PDF + CV English PDF (May 2026).
// Update this file to keep both /cv and /resume pages in sync.

export interface ExperienceItem {
	company: string;
	url?: string;
	roles: Array<{
		title: string;
		period: string;
		location?: string;
		summary?: string;
		bullets?: string[];
		current?: boolean;
	}>;
	description?: string;
}

export interface EducationItem {
	institution: string;
	degree: string;
	field?: string;
	period: string;
}

export interface OrgItem {
	name: string;
	division: string;
	period: string;
	url?: string;
}

export interface ProjectItem {
	year: string;
	name: string;
	description: string;
	url?: string;
}

export interface CertItem {
	name: string;
	issuer?: string;
	year?: string;
}

export interface CVConfig {
	headline: string;
	subheadline: string;
	summary: string[];
	contact: {
		email: string;
		linkedin: string;
		github: string;
		website: string;
		location: string;
	};
	tools: Array<{ label: string; items: string[] }>;
	experience: ExperienceItem[];
	openSource: ProjectItem[];
	organizations: OrgItem[];
	certifications: CertItem[];
	awards: CertItem[];
	education: EducationItem[];
	languages: Array<{ name: string; level: string }>;
}

export const CV: CVConfig = {
	headline: 'Full-Stack Engineer',
	subheadline:
		'Backend craftsman by night. Specialising in APIs, scrapers & automation, with the quiet patience to ship things that last.',

	summary: [
		'Software engineer with 5+ years building production web applications, APIs, scraping pipelines and automation tools for startups, agencies, government clients and event organisers across Indonesia.',
		'My focus is the backend: REST API design with Laravel, NestJS and Fastify; relational and document data layers (PostgreSQL, MySQL, MongoDB); container deployment; and the unglamorous infrastructure that holds it all together. On the frontend I work primarily in SvelteKit, with React/Next.js when the engagement calls for it.',
		'I work calmly, prefer reversible decisions, and treat code as something a teammate will need to read six months from now. Open to selective client engagements and long-form collaborations — especially around web scraping, automation, and AI-assisted workflows.'
	],

	contact: {
		email: 'connect@binsarjr.com',
		linkedin: 'https://linkedin.com/in/binsarjr',
		github: 'https://github.com/binsarjr',
		website: 'https://binsarjr.com',
		location: 'Sleman, D.I. Yogyakarta, Indonesia'
	},

	tools: [
		{
			label: 'Languages',
			items: ['TypeScript', 'JavaScript', 'PHP', 'Python', 'Go', 'SQL']
		},
		{
			label: 'Backend',
			items: ['NestJS', 'Laravel', 'Fastify', 'Express', 'Flask', 'Prisma']
		},
		{
			label: 'Frontend',
			items: ['Svelte', 'SvelteKit', 'React', 'Next.js', 'Tailwind CSS']
		},
		{
			label: 'Data',
			items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
		},
		{
			label: 'Scraping & Automation',
			items: ['Scrapy', 'Selenium', 'Puppeteer', 'Telegram Bot API', 'WhatsApp automation']
		},
		{
			label: 'Infra & Tooling',
			items: ['Docker', 'Linux (Debian/Ubuntu)', 'Git & GitHub', 'CI/CD', 'Bun', 'Claude Code']
		},
		{
			label: 'AI / LLM',
			items: ['LLM integrations (OpenAI / Anthropic / local)', 'AI-assisted workflows']
		}
	],

	experience: [
		{
			company: 'Prambanan Jazz NFT',
			url: 'https://nft.prambananjazz.com',
			roles: [
				{
					title: 'Software Engineer',
					period: 'Aug 2023 — Present',
					current: true,
					bullets: [
						'Configured a dynamic RSVP issuance system with yearly-adaptable terms & conditions for one of Indonesia’s largest jazz festivals.',
						'Focused on Web2 infrastructure development and integration — auth, ticket issuance, and event lifecycle.',
						'Collaborated on Web3 components for the NFT-claim flow.',
						'Implemented flexible configuration management to handle yearly event variations.'
					]
				}
			]
		},
		{
			company: 'Neuversity School of Software Engineering',
			roles: [
				{
					title: 'Software Developer',
					period: 'Jul 2022 — Present',
					location: 'Sleman, D.I. Yogyakarta',
					current: true,
					bullets: [
						'Build and maintain the school’s internal platforms and student-facing tooling.',
						'Contribute across the stack — backend APIs, frontend interfaces, and supporting automation.'
					]
				},
				{
					title: 'Student Mentor',
					period: 'Aug 2022 — Present',
					current: true,
					bullets: [
						'Mentor students working through full-stack web engineering coursework.',
						'Code-review submissions and run small-group workshops on Git, TypeScript and modern web frameworks.'
					]
				}
			]
		},
		{
			company: 'Fastiket',
			url: 'https://fasticket.id',
			roles: [
				{
					title: 'Full-Stack Web Developer',
					period: 'Aug 2022 — Present',
					current: true,
					bullets: [
						'Led end-to-end development and system architecture for the ticketing platform.',
						'Implemented scalable backend APIs and intuitive frontend interfaces.',
						'Managed database design, deployment and performance optimisation.',
						'Integrated real-time features for high-traffic ticketing operations.'
					]
				}
			]
		},
		{
			company: 'Siskader (NU)',
			url: 'https://siskader.nu.id',
			roles: [
				{
					title: 'Maintainer',
					period: 'Dec 2024 — Dec 2025',
					bullets: [
						'Debugged and resolved critical system errors on an active project.',
						'Collaborated on ongoing development and maintenance tasks.'
					]
				}
			]
		},
		{
			company: 'Forum Asisten',
			roles: [
				{
					title: 'Asisten Praktikum — Mobile Game Creative Design',
					period: 'Mar 2024 — Jul 2024',
					location: 'D.I. Yogyakarta',
					bullets: [
						'Teaching-assistant for the mobile game creative design practicum.',
						'Supported students through hands-on labs and project reviews.'
					]
				}
			]
		},
		{
			company: 'PT Global Intermedia Nusantara',
			roles: [
				{
					title: 'Back End Developer',
					period: 'Dec 2020 — Apr 2022',
					location: 'Yogyakarta',
					bullets: [
						'Developed backend systems and APIs for government and enterprise clients.',
						'Built custom software solutions for business and governmental requirements.',
						'Integrated backend services with hardware systems and computer networks.',
						'Collaborated on IT service delivery for specialised business applications.'
					]
				},
				{
					title: 'Junior Web Developer',
					period: 'Sep 2020 — Dec 2020',
					location: 'Yogyakarta'
				}
			],
			description:
				'IT services company designing and manufacturing hardware systems, computer networks and specialised software for businesses and government.'
		}
	],

	openSource: [
		{
			year: '2024',
			name: 'sveltekit-form-protection',
			description: 'Form-protection helpers (rate-limiting, honeypot, CSRF) for SvelteKit endpoints.',
			url: 'https://npmjs.com/package/sveltekit-form-protection'
		},
		{
			year: '2023',
			name: 'sveltekit-sitemap',
			description: 'Automatic sitemap.xml generator for SvelteKit projects.',
			url: 'https://github.com/binsarjr/sveltekit-sitemap'
		},
		{
			year: '2023',
			name: 'svelte-qrcode-action',
			description: 'Svelte action for rendering QR codes inside any DOM node.',
			url: 'https://github.com/binsarjr/svelte-qrcode-action'
		},
		{
			year: '2023',
			name: 'apiliburnasional',
			description: 'Public REST API for Indonesian national holidays.',
			url: 'https://github.com/binsarjr/apiliburnasional'
		},
		{
			year: '2022',
			name: 'svelte-taphold',
			description: 'Tap-and-hold gesture action for Svelte components.',
			url: 'https://github.com/binsarjr/svelte-taphold'
		},
		{
			year: '2022',
			name: 'svelte-lazyimage-cache',
			description: 'Lazy-loading image component with local cache for Svelte.',
			url: 'https://github.com/binsarjr/svelte-lazyimage-cache'
		}
	],

	organizations: [
		{
			name: 'Indosec',
			division: 'Blue Team Division',
			period: 'Nov 2019 — 2023'
		}
	],

	certifications: [
		{ name: 'Sertifikat LSP — Software Development' },
		{ name: 'Lomba LKS — Web Design (Sertifikasi)' },
		{
			name: 'Sehari Membangun Website Sekolah dengan CodeIgniter & Bootstrap'
		}
	],

	awards: [
		{
			name: 'Juara 1 — Web Design, Lomba Kompetensi Siswa (Swasta)'
		},
		{
			name: 'Juara 3 — Web Design, Lomba Kompetensi Siswa (Negeri)'
		}
	],

	education: [
		{
			institution: 'Universitas AMIKOM Yogyakarta',
			degree: 'S1 (Bachelor)',
			field: 'Informatika',
			period: '2021 — 2025'
		},
		{
			institution: 'SMK Muhammadiyah 1 Bantul',
			degree: 'Vocational High School',
			field: 'Rekayasa Perangkat Lunak (Software Engineering)',
			period: '2018 — 2021'
		}
	],

	languages: [
		{ name: 'Bahasa Indonesia', level: 'Native' },
		{ name: 'English', level: 'Professional working' }
	]
};
