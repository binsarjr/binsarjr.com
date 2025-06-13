// Types for Personal Configuration

export interface SocialLinks {
	github: string;
	linkedin: string;
	twitter: string;
	instagram?: string;
	youtube?: string;
	portfolio?: string;
}

export interface WebsiteConfig {
	name: string;
	description: string;
	url: string;
}

export interface PersonalConfig {
	// Basic Information
	name: string;
	nickname: string;
	email: string;
	phone: string;
	location: string;

	// Professional Information
	bio: string;
	title: string;
	subtitle: string;

	// Avatar/Profile
	avatar: string;

	// Website Information
	website: WebsiteConfig;

	// Social Media Links
	social: SocialLinks;
}

export interface AuthorInfo {
	name: string;
	fullName: string;
	email: string;
	phone: string;
	location: string;
	bio: string;
	title: string;
	subtitle: string;
	avatar: string;
}

export interface SocialLinksWithActions {
	github: string;
	linkedin: string;
	twitter: string;
	instagram: string;
	youtube: string;
	portfolio: string;
	email: string;
	phone: string;
}
