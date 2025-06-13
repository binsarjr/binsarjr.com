// +server.ts
import { SITE_URL } from '$lib/constants';

export function GET() {
	const robotsTxt = `
User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl delay
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /api/
Disallow: /_app/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /blog/
Allow: /blog/*
	`.trim();

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
