// +server.ts
import { SITE_URL } from '$lib/constants';
import { blogPosts } from '$lib/data/blog';

export function GET() {
	const pages = [
		{
			loc: SITE_URL,
			lastmod: new Date().toISOString().split('T')[0],
			changefreq: 'weekly',
			priority: '1.0'
		},
		{
			loc: `${SITE_URL}/blog`,
			lastmod: new Date().toISOString().split('T')[0],
			changefreq: 'weekly',
			priority: '0.8'
		}
	];

	// Add blog posts
	const blogPages = blogPosts.map((post) => ({
		loc: `${SITE_URL}/blog/${post.slug}`,
		lastmod: post.publishedAt.toISOString().split('T')[0],
		changefreq: 'monthly',
		priority: '0.7'
	}));

	const allPages = [...pages, ...blogPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(page) => `
	<url>
		<loc>${page.loc}</loc>
		<lastmod>${page.lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
