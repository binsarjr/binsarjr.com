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
		title: 'Sistem Informasi Web Development',
		excerpt:
			'Pengembangan sistem informasi berbasis web yang lengkap dengan manajemen data, dashboard admin, dan fitur-fitur sesuai kebutuhan bisnis Anda.',
		icon: 'Code',
		category: 'web',
		features: [
			'Dashboard Admin',
			'Manajemen Database',
			'User Authentication',
			'Reporting System',
			'Responsive Design',
			'Real-time Updates'
		],
		technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'TypeScript', 'Tailwind CSS'],
		pricing: {
			starting: 'Rp 5.000.000',
			description: 'Harga mulai untuk sistem informasi dasar'
		},
		slug: 'sistem-informasi',
		featured: true,
		duration: '4-12 minggu',
		deliverables: [
			'Sistem informasi lengkap',
			'Dashboard admin',
			'Database & dokumentasi',
			'Training penggunaan',
			'Support 6 bulan'
		]
	},
	{
		id: 2,
		title: 'Bot Development (Telegram & WhatsApp)',
		excerpt:
			'Pembuatan bot otomatis untuk Telegram dan WhatsApp dengan fitur custom sesuai kebutuhan bisnis Anda.',
		icon: 'Bot',
		category: 'backend',
		features: [
			'Auto Reply Messages',
			'Webhook Integration',
			'Database Integration',
			'Custom Commands',
			'Scheduled Messages',
			'Analytics Dashboard'
		],
		technologies: ['Node.js', 'Telegram API', 'WhatsApp API', 'MongoDB', 'Express.js'],
		pricing: {
			starting: 'Rp 2.000.000',
			description: 'Harga mulai untuk bot dengan fitur dasar'
		},
		slug: 'bot-development',
		featured: true,
		duration: '2-6 minggu',
		deliverables: [
			'Bot Telegram/WhatsApp',
			'Admin panel',
			'Setup & konfigurasi',
			'Dokumentasi lengkap',
			'Support 3 bulan'
		]
	},
	{
		id: 3,
		title: 'Jasa Scraping Data',
		excerpt:
			'Layanan scraping dan ekstraksi data dari berbagai platform dan website dengan akurasi tinggi dan delivery tepat waktu.',
		icon: 'Database',
		category: 'backend',
		features: [
			'Multi-Platform Scraping',
			'Data Cleaning',
			'Scheduled Scraping',
			'API Integration',
			'Export Multiple Formats',
			'Anti-Detection Methods'
		],
		technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Scrapy', 'Pandas', 'MongoDB'],
		pricing: {
			starting: 'Rp 1.500.000',
			description: 'Harga mulai untuk scraping project sederhana'
		},
		slug: 'data-scraping',
		featured: true,
		duration: '1-4 minggu',
		deliverables: [
			'Data dalam format yang diinginkan',
			'Scraping script/tools',
			'Data cleaning & validation',
			'Documentation & tutorial',
			'Support 2 bulan'
		]
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
