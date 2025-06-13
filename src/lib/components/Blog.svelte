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

<section id="blog" class="relative overflow-hidden py-20">
	<!-- Background decorations -->
	<div
		class="absolute inset-0 bg-gradient-to-b from-transparent via-rose-900/10 to-transparent"
	></div>
	<div
		class="absolute top-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-rose-400/5 to-pink-400/5 blur-3xl"
	></div>
	<div
		class="absolute bottom-1/4 left-1/4 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-indigo-400/5 to-purple-400/5 blur-3xl delay-1000"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center" data-aos="fade-up">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl" data-aos="fade-up" data-aos-delay="200">
				<span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
					>Latest</span
				>
				<span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
					Blog Posts</span
				>
			</h2>
			<p class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300" data-aos="fade-up" data-aos-delay="400">
				Sharing my thoughts, experiences, and tutorials about web development and technology
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each displayedPosts as post, index}
				<article
					class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-yellow-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-yellow-400/10"
					data-aos="fade-up"
					data-aos-delay={600 + index * 100}
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
								{format(new Date(post.meta.publishedAt), 'MMM dd, yyyy')}
							</div>
							<div
								class="flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm"
							>
								<Clock class="mr-2 h-4 w-4 text-green-400" />
								{calculateReadTime(post.meta.excerpt)}
							</div>
						</div>

						<!-- Enhanced Post Title -->
						<h3
							class="mb-4 line-clamp-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-xl font-semibold text-transparent transition-all duration-300 group-hover:from-yellow-400 group-hover:to-orange-400"
						>
							{post.meta.title}
						</h3>

						<!-- Enhanced Post Excerpt -->
						<p class="mb-8 line-clamp-3 text-sm leading-relaxed text-gray-300">
							{post.meta.excerpt}
						</p>

						<!-- Enhanced Tags -->
						<div class="mb-8 flex flex-wrap gap-2">
							{#each post.meta.tags as tag}
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

		<!-- Enhanced Show More Button -->
		{#if !showAll && blogPosts.length > 3}
			<div class="mt-16 text-center">
				<button
					onclick={() => (showAll = true)}
					class="group relative mr-6 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-10 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-orange-300 hover:shadow-2xl hover:shadow-yellow-400/25"
				>
					<span class="relative z-10">Show More</span>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</button>
				<a
					href="/blog"
					class="group relative inline-block rounded-xl border-2 border-white/20 bg-white/5 px-10 py-4 font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
				>
					<span class="relative z-10">View All Posts</span>
				</a>
			</div>
		{:else if showAll}
			<div class="mt-16 text-center">
				<a
					href="/blog"
					class="group relative inline-block rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-10 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-orange-300 hover:shadow-2xl hover:shadow-yellow-400/25"
				>
					<span class="relative z-10">View All Posts</span>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</a>
			</div>
		{/if}

		<!-- Enhanced Blog CTA -->
		<div class="mt-20 text-center" data-aos="fade-up" data-aos-delay="1000">
			<div
				class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-sm"
				data-aos="zoom-in"
				data-aos-delay="1200"
			>
				<!-- Background decoration -->
				<div
					class="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-r from-rose-400/10 to-pink-400/10 blur-3xl"
				></div>
				<div
					class="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-gradient-to-r from-indigo-400/10 to-purple-400/10 blur-3xl"
				></div>

				<div class="relative z-10">
					<h3
						class="mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-3xl font-bold text-transparent"
					>
						Want to read more?
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
</section>
