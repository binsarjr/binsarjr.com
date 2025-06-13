<!-- Blog.svelte -->
<script lang="ts">
	import { Calendar, Clock, ArrowRight } from 'lucide-svelte';
	import { format } from 'date-fns';
	import { blogPosts } from '$lib/data/blog';

	let showAll = $state(false);
	let displayedPosts = $derived(showAll ? blogPosts : blogPosts.slice(0, 3));
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
					{#if post.featured}
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
								{format(post.publishedAt, 'MMM dd, yyyy')}
							</div>
							<div class="flex items-center">
								<Clock class="mr-1 h-4 w-4" />
								{post.readTime}
							</div>
						</div>

						<!-- Post Title -->
						<h3
							class="mb-3 line-clamp-2 text-xl font-semibold text-white transition-colors group-hover:text-yellow-400"
						>
							{post.title}
						</h3>

						<!-- Post Excerpt -->
						<p class="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-300">
							{post.excerpt}
						</p>

						<!-- Tags -->
						<div class="mb-6 flex flex-wrap gap-2">
							{#each post.tags as tag}
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
