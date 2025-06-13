#!/usr/bin/env bun

/**
 * Script untuk memperbarui konfigurasi personal
 * Usage: bun scripts/update-personal-config.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const configPath = path.join(__dirname, '..', 'src', 'lib', 'config', 'personal.ts');

function question(prompt) {
	return new Promise((resolve) => {
		rl.question(prompt, resolve);
	});
}

async function updateConfig() {
	console.log('=== Personal Configuration Updater ===\n');

	// Baca konfigurasi saat ini
	let currentConfig = {};
	try {
		const configContent = fs.readFileSync(configPath, 'utf8');
		// Extract current values (simplified parsing)
		console.log('Current config loaded.\n');
	} catch (error) {
		console.log('No existing config found, creating new one.\n');
	}

	// Prompt untuk informasi baru
	const name =
		(await question('Nama lengkap (current: Binsar Dwi Jasuma): ')) || 'Binsar Dwi Jasuma';
	const nickname = (await question('Nama panggilan (current: Binsar Jr): ')) || 'Binsar Jr';
	const email =
		(await question('Email (current: binsarjr121@gmail.com): ')) || 'binsarjr121@gmail.com';
	const location =
		(await question('Domisili (current: D.I Yogyakarta, Indonesia): ')) ||
		'D.I Yogyakarta, Indonesia';
	const phone =
		(await question('No. Telepon (current: +62 812-3456-7890): ')) || '+62 812-3456-7890';
	const bio =
		(await question('Bio singkat (current: Full Stack Developer...): ')) ||
		'Full Stack Developer with over 5 years of experience building modern web applications';
	const github =
		(await question('GitHub URL (current: https://github.com/binsarjr): ')) ||
		'https://github.com/binsarjr';
	const linkedin =
		(await question('LinkedIn URL (current: https://linkedin.com/in/binsarjr): ')) ||
		'https://linkedin.com/in/binsarjr';

	// Generate new config
	const newConfig = `// Personal Configuration
// Update this file to change personal information across the site

import type { PersonalConfig } from './types';

export const PERSONAL_CONFIG: PersonalConfig = {
	// Basic Information
	name: '${name}',
	nickname: '${nickname}', // Display name
	email: '${email}',
	phone: '${phone}',
	location: '${location}',
	
	// Professional Information
	bio: '${bio}',
	title: 'Full Stack Developer',
	subtitle: 'Crafting digital experiences with passion & precision',
	
	// Avatar/Profile
	avatar: '/avatar.jpg',
	
	// Website Information
	website: {
		name: '${nickname}',
		description: 'Full Stack Developer specializing in modern web technologies',
		url: 'https://binsarjr.com'
	},
	
	// Social Media Links
	social: {
		github: '${github}',
		linkedin: '${linkedin}',
		twitter: 'https://twitter.com/binsarjr',
		instagram: '', // Add if you have
		youtube: '', // Add if you have
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
} = PERSONAL_CONFIG;`;

	// Tulis konfigurasi baru
	fs.writeFileSync(configPath, newConfig);

	console.log('\n✅ Konfigurasi berhasil diperbarui!');
	console.log('📁 File location:', configPath);
	console.log('🔄 Restart development server untuk melihat perubahan.');

	rl.close();
}

updateConfig().catch(console.error);
