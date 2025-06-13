<script lang="ts">
	import { Calendar, Clock, ArrowRight } from 'lucide-svelte';
	import { format } from 'date-fns';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	let selectedTag = $state('All');
	let posts = $derived(data.posts || []);
	let allTags = $derived([
		'All',
		...Array.from(new Set(posts.flatMap((post) => post.meta.tags || [])))
	]);
	let filteredPosts = $derived(
		selectedTag === 'All' ? posts : posts.filter((post) => post.meta.tags?.includes(selectedTag))
	);
</script>

<svelte:head>
	<title>Blog - Binsar Jr</title>
	<meta
		name="description"
		content="Read articles about web development, programming tutorials, and technology insights."
	/>
</svelte:head>

<main class="min-h-screen bg-black pt-20 text-white">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mb-16 text-center">
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">
				My <span class="text-yellow-400">Blog</span>
			</h1>
			<p class="mx-auto max-w-3xl text-lg text-gray-300">
				Thoughts, tutorials, and insights about web development and technology
			</p>
		</div>

		<!-- Tag Filter -->
		<div class="mb-12">
			<div class="flex flex-wrap justify-center gap-3">
				{#each allTags as tag}
					<button
						onclick={() => (selectedTag = tag)}
						class="rounded-full px-4 py-2 text-sm font-medium transition-colors {selectedTag === tag
							? 'bg-yellow-400 text-black'
							: 'border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700'}"
					>
						{tag}
					</button>
				{/each}
			</div>
		</div>

		<!-- Blog Posts Grid -->
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredPosts as post}
				<article
					class="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:border-yellow-400/50"
				>
					<!-- Featured Badge -->
					{#if post.meta.featured}
						<div
							class="border-b border-gray-800 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 p-4"
						>
							<span class="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
								Featured Post
							</span>
						</div>
					{/if}

					<!-- Post Content -->
					<div class="p-6">
						<!-- Post Meta -->
						<div class="mb-4 flex items-center space-x-4 text-sm text-gray-400">
							<div class="flex items-center">
								<Calendar class="mr-1 h-4 w-4" />
								{post.meta.publishedAt
									? format(new Date(post.meta.publishedAt), 'MMM dd, yyyy')
									: 'No date'}
							</div>
							{#if post.meta.readingTime}
								<div class="flex items-center">
									<Clock class="mr-1 h-4 w-4" />
									{post.meta.readingTime}
								</div>
							{/if}
						</div>

						<!-- Post Title -->
						<h2
							class="mb-3 line-clamp-2 text-xl font-semibold text-white transition-colors group-hover:text-yellow-400"
						>
							{post.meta.title}
						</h2>

						<!-- Post Excerpt -->
						<p class="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-300">
							{post.meta.excerpt || 'No excerpt available'}
						</p>

						<!-- Tags -->
						<div class="mb-6 flex flex-wrap gap-2">
							{#each post.meta.tags || [] as tag}
								<span
									class="rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-yellow-400"
								>
									{tag}
								</span>
							{/each}
						</div>

						<!-- Read More Link -->
						<a
							href="/blog/{post.slug}"
							class="inline-flex items-center font-medium text-yellow-400 transition-colors hover:text-yellow-300"
						>
							Read More
							<ArrowRight class="ml-2 h-4 w-4" />
						</a>
					</div>
				</article>
			{/each}
		</div>

		<!-- No posts message -->
		{#if filteredPosts.length === 0}
			<div class="py-12 text-center">
				<p class="text-lg text-gray-400">No posts found for the selected tag.</p>
			</div>
		{/if}

		<!-- Newsletter Subscription -->
		<div class="mt-16">
			<div
				class="rounded-2xl border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-center"
			>
				<h3 class="mb-4 text-2xl font-bold text-white">Stay Updated</h3>
				<p class="mx-auto mb-6 max-w-2xl text-gray-300">
					Subscribe to my newsletter to get the latest articles and tutorials delivered to your
					inbox.
				</p>
				<div class="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
					<input
						type="email"
						placeholder="Enter your email"
						class="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
					/>
					<button
						class="rounded-lg bg-yellow-400 px-6 py-3 font-semibold whitespace-nowrap text-black transition-colors hover:bg-yellow-300"
					>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	</div>
</main>
