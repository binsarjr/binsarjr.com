<!-- Blog.svelte -->
<script lang="ts">
	import { Calendar, Clock, ArrowRight } from 'lucide-svelte';
	import { format } from 'date-fns';
	import { onMount } from 'svelte';

	interface BlogPost {
		slug: string;
		meta: {
			title: string;
			excerpt: string;
			publishedAt: string;
			tags: string[];
			featured?: boolean;
			category: string;
			author: {
				name: string;
				avatar: string;
				bio: string;
			};
		};
	}

	let blogPosts: BlogPost[] = $state([]);
	let showAll = $state(false);
	let displayedPosts = $derived(showAll ? blogPosts : blogPosts.slice(0, 3));

	// Calculate read time based on excerpt length
	function calculateReadTime(text: string): string {
		const wordsPerMinute = 200;
		const words = text.split(' ').length;
		const minutes = Math.ceil(words / wordsPerMinute);
		return `${minutes} min read`;
	}

	onMount(async () => {
		try {
			// Get all markdown files in the blog directory
			const modules = import.meta.glob('/src/content/blog/*.md');
			const posts = [];

			for (const path in modules) {
				const mod = await modules[path]();
				const slug = path.split('/').pop()?.replace('.md', '') || '';

				if (mod && typeof mod === 'object' && 'metadata' in mod) {
					posts.push({
						slug,
						meta: (mod as any).metadata
					});
				}
			}

			// Sort posts by publishedAt date (newest first)
			posts.sort((a, b) => {
				if (a.meta.publishedAt && b.meta.publishedAt) {
					return new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime();
				}
				return 0;
			});

			blogPosts = posts;
		} catch (error) {
			console.error('Error loading blog posts:', error);
		}
	});
</script>

<section id="blog" class="bg-black py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white md:text-5xl">
				Latest <span class="text-yellow-400">Blog Posts</span>
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-300">
				Sharing my thoughts, experiences, and tutorials about web development and technology
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each displayedPosts as post}
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
								{format(new Date(post.meta.publishedAt), 'MMM dd, yyyy')}
							</div>
							<div class="flex items-center">
								<Clock class="mr-1 h-4 w-4" />
								{calculateReadTime(post.meta.excerpt)}
							</div>
						</div>

						<!-- Post Title -->
						<h3
							class="mb-3 line-clamp-2 text-xl font-semibold text-white transition-colors group-hover:text-yellow-400"
						>
							{post.meta.title}
						</h3>

						<!-- Post Excerpt -->
						<p class="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-300">
							{post.meta.excerpt}
						</p>

						<!-- Tags -->
						<div class="mb-6 flex flex-wrap gap-2">
							{#each post.meta.tags as tag}
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

		<!-- Loading State -->
		{#if blogPosts.length === 0}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each Array(3) as _}
					<div class="animate-pulse">
						<div class="overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
							<div class="p-6">
								<div class="mb-4 flex items-center space-x-4">
									<div class="h-4 w-20 rounded bg-gray-700"></div>
									<div class="h-4 w-16 rounded bg-gray-700"></div>
								</div>
								<div class="mb-3 h-6 w-3/4 rounded bg-gray-700"></div>
								<div class="mb-6 space-y-2">
									<div class="h-4 w-full rounded bg-gray-700"></div>
									<div class="h-4 w-5/6 rounded bg-gray-700"></div>
									<div class="h-4 w-4/5 rounded bg-gray-700"></div>
								</div>
								<div class="flex gap-2">
									<div class="h-6 w-16 rounded bg-gray-700"></div>
									<div class="h-6 w-20 rounded bg-gray-700"></div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}

		<!-- Show More Button -->
		{#if !showAll && blogPosts.length > 3}
			<div class="mt-12 text-center">
				<button
					onclick={() => (showAll = true)}
					class="mr-4 rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
				>
					Show More
				</button>
				<a
					href="/blog"
					class="inline-block rounded-lg border border-yellow-400 px-8 py-3 font-semibold text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-black"
				>
					View All Posts
				</a>
			</div>
		{:else if showAll}
			<div class="mt-12 text-center">
				<a
					href="/blog"
					class="inline-block rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
				>
					View All Posts
				</a>
			</div>
		{/if}

		<!-- Blog CTA -->
		<div class="mt-16 text-center">
			<div
				class="rounded-2xl border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-8"
			>
				<h3 class="mb-4 text-2xl font-bold text-white">Want to read more?</h3>
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
</section>
