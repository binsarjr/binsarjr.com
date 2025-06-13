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

<main class="relative min-h-screen overflow-hidden pt-20">
	<!-- Background decorations -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"></div>
	<div
		class="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-purple-400/5 to-pink-400/5 blur-3xl"
	></div>
	<div
		class="absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-blue-400/5 to-cyan-400/5 blur-3xl delay-1000"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Enhanced Header -->
		<div class="mb-20 text-center" data-aos="fade-up">
			<h1 class="mb-6 text-5xl font-bold md:text-6xl" data-aos="fade-up" data-aos-delay="200">
				<span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My</span
				>
				<span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
					Blog</span
				>
			</h1>
			<p
				class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300"
				data-aos="fade-up"
				data-aos-delay="400"
			>
				Thoughts, tutorials, and insights about web development and technology
			</p>
		</div>

		<!-- Enhanced Tag Filter -->
		<div class="mb-16" data-aos="fade-up" data-aos-delay="600">
			<div class="flex flex-wrap justify-center gap-3">
				{#each allTags as tag}
					<button
						onclick={() => (selectedTag = tag)}
						class="group relative rounded-full border px-6 py-3 text-sm font-medium backdrop-blur-sm transition-all duration-300 {selectedTag ===
						tag
							? 'border-yellow-400/50 bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-lg shadow-yellow-400/25'
							: 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10 hover:text-white'}"
					>
						{tag}
						{#if selectedTag === tag}
							<div
								class="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-50"
							></div>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<!-- Enhanced Blog Posts Grid -->
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredPosts as post, index}
				<article
					class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-yellow-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-yellow-400/10"
					data-aos="fade-up"
					data-aos-delay={800 + index * 100}
				>
					<!-- Enhanced Featured Badge -->
					{#if post.meta.featured}
						<div
							class="border-b border-white/10 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 p-6 backdrop-blur-sm"
						>
							<span
								class="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 text-xs font-semibold text-black shadow-lg"
							>
								✨ Featured Post
							</span>
						</div>
					{/if}

					<!-- Enhanced Post Content -->
					<div class="p-8">
						<!-- Enhanced Post Meta -->
						<div class="mb-6 flex items-center space-x-4 text-sm text-gray-400">
							<div
								class="flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm"
							>
								<Calendar class="mr-2 h-4 w-4 text-blue-400" />
								{post.meta.publishedAt
									? format(new Date(post.meta.publishedAt), 'MMM dd, yyyy')
									: 'No date'}
							</div>
							{#if post.meta.readingTime}
								<div
									class="flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm"
								>
									<Clock class="mr-2 h-4 w-4 text-green-400" />
									{post.meta.readingTime}
								</div>
							{/if}
						</div>

						<!-- Enhanced Post Title -->
						<h2
							class="mb-4 line-clamp-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-xl font-semibold text-transparent transition-all duration-300 group-hover:from-yellow-400 group-hover:to-orange-400"
						>
							{post.meta.title}
						</h2>

						<!-- Enhanced Post Excerpt -->
						<p class="mb-8 line-clamp-3 text-sm leading-relaxed text-gray-300">
							{post.meta.excerpt || 'No excerpt available'}
						</p>

						<!-- Enhanced Tags -->
						<div class="mb-8 flex flex-wrap gap-2">
							{#each post.meta.tags || [] as tag}
								<span
									class="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
								>
									{tag}
								</span>
							{/each}
						</div>

						<!-- Enhanced Read More Link -->
						<a
							href="/blog/{post.slug}"
							class="group/link inline-flex items-center font-medium text-yellow-400 transition-all duration-300 hover:scale-105 hover:text-yellow-300"
						>
							Read More
							<ArrowRight
								class="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
							/>
						</a>
					</div>

					<!-- Decorative elements -->
					<div
						class="absolute top-4 right-4 h-2 w-2 animate-pulse rounded-full bg-yellow-400/30"
					></div>
					<div
						class="absolute bottom-4 left-4 h-1 w-1 animate-pulse rounded-full bg-purple-400/30 delay-700"
					></div>
				</article>
			{/each}
		</div>

		<!-- Enhanced No posts message -->
		{#if filteredPosts.length === 0}
			<div class="py-20 text-center">
				<div
					class="relative inline-block rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
				>
					<div class="mb-4 text-6xl">📝</div>
					<p class="mb-2 text-xl text-gray-300">No posts found for the selected tag.</p>
					<p class="text-gray-400">Try selecting a different tag or check back later.</p>
				</div>
			</div>
		{/if}

		<!-- Enhanced Newsletter Subscription -->
		<div class="mt-24">
			<div
				class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm"
			>
				<!-- Background decoration -->
				<div
					class="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl"
				></div>
				<div
					class="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl"
				></div>

				<div class="relative z-10">
					<h3
						class="mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-3xl font-bold text-transparent"
					>
						Stay Updated
					</h3>
					<p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
						Subscribe to my newsletter to get the latest articles and tutorials delivered to your
						inbox.
					</p>
					<div class="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
						<input
							type="email"
							placeholder="Enter your email"
							class="flex-1 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-yellow-400/50 focus:bg-white/10 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none"
						/>
						<button
							class="group relative rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-8 py-4 font-semibold whitespace-nowrap text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-300 hover:to-teal-300 hover:shadow-2xl hover:shadow-emerald-400/25"
						>
							<span class="relative z-10">Subscribe</span>
							<div
								class="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-300 to-teal-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
