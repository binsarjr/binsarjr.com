#!/usr/bin/env node
// prebuild.js - Pre-generate content routes for optimal performance

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Colors for console output
const colors = {
	green: '\x1b[32m',
	blue: '\x1b[34m',
	yellow: '\x1b[33m',
	red: '\x1b[31m',
	reset: '\x1b[0m',
	dim: '\x1b[2m'
};

function log(message, color = colors.reset) {
	console.log(`${color}${message}${colors.reset}`);
}

async function extractMetadata(filePath) {
	try {
		const content = await readFile(filePath, 'utf-8');
		const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);

		if (!frontmatterMatch) {
			return null;
		}

		const frontmatter = frontmatterMatch[1];
		const metadata = {};

		// Simple YAML parser for frontmatter
		const lines = frontmatter.split('\n');
		let currentKey = null;
		let currentArray = null;
		let inObject = false;
		let currentObject = null;

		for (const line of lines) {
			const trimmed = line.trim();
			if (!trimmed || trimmed.startsWith('#')) continue;

			// Handle arrays
			if (trimmed.startsWith('- ')) {
				const value = trimmed.slice(2).replace(/^['"]|['"]$/g, '');
				if (currentArray) {
					currentArray.push(value);
				}
				continue;
			}

			// Handle key-value pairs
			const colonIndex = trimmed.indexOf(':');
			if (colonIndex > 0) {
				const key = trimmed.slice(0, colonIndex).trim();
				const value = trimmed.slice(colonIndex + 1).trim();

				// Check if this is a new top-level key (not indented)
				if (line.indexOf(key) === 0) {
					// Reset object context for new top-level keys
					inObject = false;
					currentObject = null;
					currentArray = null;
				}

				// Handle nested objects (like pricing)
				if (key === 'pricing' && !value) {
					inObject = true;
					currentObject = {};
					metadata[key] = currentObject;
					continue;
				}

				if (inObject && value && currentObject && line.startsWith('  ')) {
					// Only put in nested object if it's indented
					currentObject[key] = value.replace(/^['"]|['"]$/g, '');
					continue;
				}

				if (!value) {
					// Start of an array
					currentArray = [];
					metadata[key] = currentArray;
					currentKey = key;
				} else if (value === 'true' || value === 'false') {
					metadata[key] = value === 'true';
				} else if (value.startsWith('[') && value.endsWith(']')) {
					// Inline array
					const arrayContent = value.slice(1, -1);
					metadata[key] = arrayContent
						.split(',')
						.map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
						.filter(Boolean);
				} else {
					metadata[key] = value.replace(/^['"]|['"]$/g, '');
				}
			}
		}

		return metadata;
	} catch (error) {
		log(`Error extracting metadata from ${filePath}: ${error.message}`, colors.red);
		return null;
	}
}

async function generateContentManifest(contentType) {
	const contentDir = join(projectRoot, 'src', 'content', contentType);
	const outputDir = join(projectRoot, 'static', 'manifests');

	if (!existsSync(contentDir)) {
		log(`No ${contentType} directory found, skipping...`, colors.yellow);
		return [];
	}

	try {
		const files = await readdir(contentDir);
		const mdFiles = files.filter((file) => file.endsWith('.md'));
		const manifest = [];

		log(`Processing ${mdFiles.length} ${contentType} files...`, colors.blue);

		for (const file of mdFiles) {
			const filePath = join(contentDir, file);
			const slug = file.replace('.md', '');
			const metadata = await extractMetadata(filePath);

			if (metadata) {
				manifest.push({
					slug,
					meta: metadata,
					lastModified: Date.now() // Simple timestamp
				});
				log(`  ✓ ${slug}`, colors.dim);
			}
		}

		// Ensure output directory exists
		if (!existsSync(outputDir)) {
			await mkdir(outputDir, { recursive: true });
		}

		// Write manifest file
		const manifestPath = join(outputDir, `${contentType}.json`);
		await writeFile(manifestPath, JSON.stringify(manifest, null, 2));

		log(`Generated manifest for ${manifest.length} ${contentType} entries`, colors.green);
		return manifest;
	} catch (error) {
		log(`Error processing ${contentType}: ${error.message}`, colors.red);
		return [];
	}
}

async function generateSitemap(manifests) {
	const baseUrl = 'https://binsarjr.com'; // Update with your actual domain
	const currentDate = new Date().toISOString().split('T')[0];

	let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>1.0</priority>
  </url>
`;

	// Add content routes
	for (const [contentType, manifest] of Object.entries(manifests)) {
		// Add list page
		sitemap += `  <url>
    <loc>${baseUrl}/${contentType}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
  </url>
`;

		// Add individual content pages
		for (const item of manifest) {
			sitemap += `  <url>
    <loc>${baseUrl}/${contentType}/${item.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.7</priority>
  </url>
`;
		}
	}

	sitemap += '</urlset>';

	const outputPath = join(projectRoot, 'static', 'sitemap.xml');
	await writeFile(outputPath, sitemap);
	log('Generated sitemap.xml', colors.green);
}

async function main() {
	log('🚀 Starting prebuild process...', colors.blue);

	const startTime = Date.now();

	try {
		// Generate manifests for each content type
		const manifests = {
			blog: await generateContentManifest('blog'),
			projects: await generateContentManifest('projects'),
			services: await generateContentManifest('services')
		};

		// Generate sitemap
		await generateSitemap(manifests);

		const endTime = Date.now();
		const duration = endTime - startTime;

		log(`✅ Prebuild completed in ${duration}ms`, colors.green);

		// Summary
		const totalItems = Object.values(manifests).reduce((sum, manifest) => sum + manifest.length, 0);
		log(`📊 Generated manifests for ${totalItems} content items`, colors.blue);
	} catch (error) {
		log(`❌ Prebuild failed: ${error.message}`, colors.red);
		process.exit(1);
	}
}

// Run the main function
main().catch(console.error);
