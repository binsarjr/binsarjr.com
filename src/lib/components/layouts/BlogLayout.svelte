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

<div class="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 text-white">
	<!-- Header -->
	<header class="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
		<div class="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
			<button
				onclick={() => history.back()}
				class="mb-4 inline-flex items-center text-sm text-gray-400 transition-colors hover:text-yellow-400"
			>
				<ArrowLeft class="mr-2 h-4 w-4" />
				Back to Blog
			</button>

			<!-- Category Badge -->
			{#if category}
				<div class="mb-4">
					<span
						class="inline-flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-400 ring-1 ring-yellow-400/20"
					>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</span>
				</div>
			{/if}

			<!-- Title -->
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
				{title}
			</h1>

			<!-- Excerpt -->
			{#if excerpt}
				<p class="mb-6 text-lg text-gray-300 md:text-xl">
					{excerpt}
				</p>
			{/if}

			<!-- Meta Information -->
			<div class="flex flex-wrap items-center gap-4 text-sm text-gray-400">
				<!-- Author -->
				<div class="flex items-center">
					<img src={author.avatar} alt={author.name} class="mr-2 h-8 w-8 rounded-full" />
					<User class="mr-1 h-4 w-4" />
					<span>{author.name}</span>
				</div>

				<!-- Published Date -->
				<div class="flex items-center">
					<Calendar class="mr-1 h-4 w-4" />
					<span>{formatDate(publishDate, 'long')}</span>
				</div>

				<!-- Reading Time -->
				{#if readingTime}
					<div class="flex items-center">
						<Clock class="mr-1 h-4 w-4" />
						<span>{readingTime}</span>
					</div>
				{/if}
			</div>

			<!-- Tags -->
			{#if tags.length > 0}
				<div class="mt-4 flex flex-wrap gap-2">
					{#each tags as tag}
						<span
							class="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
						>
							<Tag class="mr-1 h-3 w-3" />
							{tag}
						</span>
					{/each}
				</div>
			{/if}

			<!-- Updated Date -->
			{#if updateDate}
				<div class="mt-4 text-xs text-gray-500">
					Last updated: {formatDate(updateDate, 'long')}
				</div>
			{/if}
		</div>
	</header>

	<!-- Content -->
	<main class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
		<article
			class="prose prose-invert prose-lg prose-headings:text-white prose-a:text-yellow-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-yellow-400 prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700 max-w-none"
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
