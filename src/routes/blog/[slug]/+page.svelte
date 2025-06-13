<script lang="ts">
	import { Calendar, Clock, ArrowLeft, Share } from 'lucide-svelte';
	import { format } from 'date-fns';
	import { page } from '$app/stores';

	// This would normally come from your data loading function
	const post = {
		title: 'Getting Started with SvelteKit: A Complete Guide',
		content: `
			<p>SvelteKit is a powerful framework for building web applications. In this comprehensive guide, we'll explore everything you need to know to get started.</p>
			
			<h2>What is SvelteKit?</h2>
			<p>SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.</p>
			
			<h2>Getting Started</h2>
			<p>To create a new SvelteKit project, run the following command:</p>
			<pre><code>npm create svelte@latest my-app</code></pre>
			
			<h2>Key Features</h2>
			<ul>
				<li>Server-side rendering (SSR)</li>
				<li>Static site generation (SSG)</li>
				<li>Client-side routing</li>
				<li>Hot module replacement</li>
			</ul>
		`,
		publishedAt: new Date('2024-01-15'),
		readTime: '8 min read',
		tags: ['SvelteKit', 'JavaScript', 'Tutorial'],
		author: {
			name: 'Binsar Jr',
			avatar: '/api/placeholder/40/40'
		}
	};
</script>

<svelte:head>
	<title>{post.title} - Binsar Jr Blog</title>
	<meta
		name="description"
		content="Learn how to build modern web applications with SvelteKit in this comprehensive guide."
	/>
</svelte:head>

<main class="min-h-screen bg-black pt-20 text-white">
	<div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Back Button -->
		<button
			onclick={() => history.back()}
			class="mb-8 flex items-center text-yellow-400 transition-colors hover:text-yellow-300"
		>
			<ArrowLeft class="mr-2 h-4 w-4" />
			Back to Blog
		</button>

		<!-- Article Header -->
		<header class="mb-12">
			<h1 class="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl">
				{post.title}
			</h1>

			<!-- Article Meta -->
			<div class="mb-6 flex flex-wrap items-center gap-6 text-gray-400">
				<div class="flex items-center">
					<Calendar class="mr-2 h-4 w-4" />
					{format(post.publishedAt, 'MMMM dd, yyyy')}
				</div>
				<div class="flex items-center">
					<Clock class="mr-2 h-4 w-4" />
					{post.readTime}
				</div>
				<button class="flex items-center transition-colors hover:text-yellow-400">
					<Share class="mr-2 h-4 w-4" />
					Share
				</button>
			</div>

			<!-- Tags -->
			<div class="flex flex-wrap gap-2">
				{#each post.tags as tag}
					<span
						class="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-sm text-yellow-400"
					>
						{tag}
					</span>
				{/each}
			</div>
		</header>

		<!-- Article Content -->
		<article class="prose prose-invert prose-yellow max-w-none">
			<div class="leading-relaxed text-gray-300">
				{@html post.content}
			</div>
		</article>

		<!-- Author Info -->
		<div class="mt-16 rounded-xl border border-gray-800 bg-gray-900 p-6">
			<div class="flex items-center">
				<div class="mr-4 h-16 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1">
					<div class="flex h-full w-full items-center justify-center rounded-full bg-black">
						<span class="font-bold text-yellow-400">BJ</span>
					</div>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-white">{post.author.name}</h3>
					<p class="text-gray-400">Full Stack Developer & Technical Writer</p>
				</div>
			</div>
		</div>

		<!-- Related Posts -->
		<div class="mt-16">
			<h3 class="mb-8 text-2xl font-bold text-white">Related Posts</h3>
			<div class="grid gap-6 md:grid-cols-2">
				<a
					href="/blog/scalable-apis-nodejs-express"
					class="group rounded-xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-yellow-400/50"
				>
					<h4 class="mb-2 font-semibold text-white transition-colors group-hover:text-yellow-400">
						Building Scalable APIs with Node.js and Express
					</h4>
					<p class="text-sm text-gray-400">
						Best practices for creating robust and scalable REST APIs...
					</p>
				</a>
				<a
					href="/blog/modern-css-techniques"
					class="group rounded-xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-yellow-400/50"
				>
					<h4 class="mb-2 font-semibold text-white transition-colors group-hover:text-yellow-400">
						Modern CSS Techniques for Better UI
					</h4>
					<p class="text-sm text-gray-400">
						Explore advanced CSS features like Grid, Flexbox, and CSS Variables...
					</p>
				</a>
			</div>
		</div>
	</div>
</main>

<style>
	:global(.prose h2) {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
	}

	:global(.prose h3) {
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		font-size: 1.25rem;
		font-weight: 700;
		color: white;
	}

	:global(.prose p) {
		margin-bottom: 1rem;
		line-height: 1.625;
		color: #d1d5db;
	}

	:global(.prose ul) {
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	:global(.prose li) {
		margin-bottom: 0.5rem;
		color: #d1d5db;
	}

	:global(.prose pre) {
		margin-bottom: 1rem;
		overflow-x: auto;
		border-radius: 0.5rem;
		background-color: #1f2937;
		padding: 1rem;
	}

	:global(.prose code) {
		border-radius: 0.25rem;
		background-color: #1f2937;
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		color: #facc15;
	}
</style>
