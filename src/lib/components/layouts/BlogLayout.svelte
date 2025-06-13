<!-- BlogLayout.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { formatDate } from '$lib/utils';
	import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-svelte';

	export let title: string;
	export let excerpt: string = '';
	export let publishedAt: string;
	export let updatedAt: string = '';
	export let readingTime: string = '';
	export let tags: string[] = [];
	export let category: string = '';
	export let author: {
		name: string;
		avatar: string;
		bio: string;
	} = {
		name: 'Binsar Jr',
		avatar: '/avatar.jpg',
		bio: 'Full Stack Developer & Technical Writer'
	};
	export const featured: boolean = false;

	const publishDate = new Date(publishedAt);
	const updateDate = updatedAt ? new Date(updatedAt) : null;
</script>

<svelte:head>
	<title>{title} - Binsar Jr Blog</title>
	<meta name="description" content={excerpt} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={publishedAt} />
	{#if updatedAt}
		<meta property="article:modified_time" content={updatedAt} />
	{/if}
	{#each tags as tag}
		<meta property="article:tag" content={tag} />
	{/each}
</svelte:head>

<div
	class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 pt-20 text-white"
>
	<!-- Background ornaments -->
	<div class="pointer-events-none fixed inset-0">
		<div
			class="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-gradient-to-r from-yellow-400/5 to-orange-400/5 blur-3xl"
		></div>
		<div
			class="absolute top-1/3 right-20 h-48 w-48 animate-pulse rounded-full bg-gradient-to-r from-blue-400/5 to-purple-400/5 blur-3xl delay-1000"
		></div>
		<div
			class="absolute bottom-1/4 left-1/3 h-64 w-64 animate-pulse rounded-full bg-gradient-to-r from-emerald-400/3 to-teal-400/3 blur-3xl delay-2000"
		></div>
		<div
			class="absolute inset-0 opacity-10"
			style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 60px 60px;"
		></div>
	</div>

	<!-- Enhanced Header -->
	<header class="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
		<div class="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
			<button
				onclick={() => history.back()}
				class="group mb-6 inline-flex items-center text-sm text-gray-400 transition-all duration-300 hover:scale-105 hover:text-yellow-400"
			>
				<ArrowLeft
					class="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
				/>
				Back to Blog
			</button>

			<!-- Enhanced Category Badge -->
			{#if category}
				<div class="mb-6">
					<span
						class="inline-flex items-center rounded-xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 px-4 py-2 text-sm font-medium text-yellow-400 backdrop-blur-sm"
					>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</span>
				</div>
			{/if}

			<!-- Enhanced Title -->
			<h1 class="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
				<span
					class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
					>{title}</span
				>
			</h1>

			<!-- Enhanced Excerpt -->
			{#if excerpt}
				<p class="mb-8 text-lg leading-relaxed text-gray-300 md:text-xl">
					{excerpt}
				</p>
			{/if}

			<!-- Enhanced Meta Information -->
			<div class="flex flex-wrap items-center gap-6 text-sm">
				<!-- Enhanced Author -->
				<div
					class="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
				>
					<img
						src={author.avatar}
						alt={author.name}
						class="mr-3 h-8 w-8 rounded-full border border-white/20"
					/>
					<User class="mr-2 h-4 w-4 text-blue-400" />
					<span class="text-gray-200">{author.name}</span>
				</div>

				<!-- Enhanced Published Date -->
				<div
					class="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
				>
					<Calendar class="mr-2 h-4 w-4 text-green-400" />
					<span class="text-gray-200">{formatDate(publishDate, 'long')}</span>
				</div>

				<!-- Enhanced Reading Time -->
				{#if readingTime}
					<div
						class="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
					>
						<Clock class="mr-2 h-4 w-4 text-purple-400" />
						<span class="text-gray-200">{readingTime}</span>
					</div>
				{/if}
			</div>

			<!-- Enhanced Tags -->
			{#if tags.length > 0}
				<div class="mt-6 flex flex-wrap gap-3">
					{#each tags as tag}
						<span
							class="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
						>
							<Tag class="mr-2 h-3 w-3" />
							{tag}
						</span>
					{/each}
				</div>
			{/if}

			<!-- Enhanced Updated Date -->
			{#if updateDate}
				<div
					class="mt-6 inline-block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400 backdrop-blur-sm"
				>
					Last updated: {formatDate(updateDate, 'long')}
				</div>
			{/if}
		</div>
	</header>

	<!-- Enhanced Content -->
	<main class="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
		<article
			class="prose prose-invert prose-lg prose-headings:text-white prose-a:text-yellow-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-yellow-400 prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:backdrop-blur-sm prose-blockquote:border-l-yellow-400 max-w-none"
		>
			<slot />
		</article>
	</main>
</div>

<style>
	:global(.heading-link) {
		text-decoration: none;
	}

	:global(.heading-link:hover) {
		color: rgb(250 204 21); /* yellow-400 */
	}

	:global(.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
		position: relative;
	}

	:global(
		.prose h1:hover .heading-link::after,
		.prose h2:hover .heading-link::after,
		.prose h3:hover .heading-link::after,
		.prose h4:hover .heading-link::after,
		.prose h5:hover .heading-link::after,
		.prose h6:hover .heading-link::after
	) {
		content: '#';
		position: absolute;
		left: -1.5rem;
		color: rgb(250 204 21); /* yellow-400 */
		opacity: 0.5;
	}
</style>
