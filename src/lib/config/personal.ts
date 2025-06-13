// Personal Configuration
// Update this file to change personal information across the site

import type { PersonalConfig } from './types';

export const PERSONAL_CONFIG: PersonalConfig = {
	// Basic Information
	name: 'Binsar Dwi Jasuma',
	nickname: 'Binsar', // Display name
	email: 'binsarjr121@gmail.com',
	phone: 'Prefer Not to Say',
	location: 'D.I Yogyakarta, Indonesia',

	// Professional Information
	bio: 'Full Stack Developer with over 5 years of experience building modern web applications',
	title: 'Full Stack Developer',
	subtitle: 'Crafting digital experiences with passion & precision',

	// Avatar/Profile
	avatar: '/favicon.jpeg',

	// Website Information
	website: {
		name: 'Binsar',
		description: 'Full Stack Developer specializing in modern web technologies',
		url: 'https://binsarjr.com'
	},

	// Social Media Links
	social: {
		github: 'https://github.com/binsarjr',
		linkedin: 'https://linkedin.com/in/binsarjr',
		twitter: 'https://twitter.com/_binsarjr',
		instagram: 'https://www.instagram.com/binsardj/', // Add if you have
		youtube: 'https://www.youtube.com/@BinsarDwiJasuma', // Add if you have
		portfolio: '' // Add if you have separate portfolio
	}
};

// Export individual values for backward compatibility
export const {
	name: FULL_NAME,
	nickname: DISPLAY_NAME,
	email: EMAIL,
	phone: PHONE,
	location: LOCATION,
	bio: BIO,
	title: JOB_TITLE,
	subtitle: TAGLINE,
	avatar: AVATAR,
	website: WEBSITE_CONFIG,
	social: SOCIAL_CONFIG
} = PERSONAL_CONFIG;
