<!-- ProjectLayout.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-svelte';

	export let title: string;
	export let description: string = '';
	export let image: string = '';
	export let technologies: string[] = [];
	export let githubUrl: string = '';
	export let liveUrl: string = '';
	export let category: string = '';
	export const featured: boolean = false;
	export let completedAt: string = '';
</script>

<svelte:head>
	<title>{title} - Project by Binsar Jr</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 text-white">
	<!-- Header -->
	<header class="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
		<div class="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
			<button
				onclick={() => history.back()}
				class="mb-4 inline-flex items-center text-sm text-gray-400 transition-colors hover:text-yellow-400"
			>
				<ArrowLeft class="mr-2 h-4 w-4" />
				Back to Projects
			</button>

			<div class="grid gap-8 lg:grid-cols-2">
				<!-- Project Info -->
				<div>
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
					<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">
						{title}
					</h1>

					<!-- Description -->
					{#if description}
						<p class="mb-6 text-lg text-gray-300">
							{description}
						</p>
					{/if}

					<!-- Action Buttons -->
					<div class="mb-6 flex flex-wrap gap-4">
						{#if liveUrl}
							<a
								href={liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
							>
								<ExternalLink class="mr-2 h-4 w-4" />
								View Live
							</a>
						{/if}
						{#if githubUrl}
							<a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center rounded-lg border border-gray-700 bg-gray-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-700"
							>
								<Github class="mr-2 h-4 w-4" />
								View Code
							</a>
						{/if}
					</div>

					<!-- Technologies -->
					{#if technologies.length > 0}
						<div class="mb-4">
							<h3 class="mb-2 text-sm font-semibold text-gray-300">Technologies Used</h3>
							<div class="flex flex-wrap gap-2">
								{#each technologies as tech}
									<span
										class="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
									>
										<Tag class="mr-1 h-3 w-3" />
										{tech}
									</span>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Completion Date -->
					{#if completedAt}
						<div class="flex items-center text-sm text-gray-400">
							<Calendar class="mr-1 h-4 w-4" />
							<span>Completed: {new Date(completedAt).toLocaleDateString()}</span>
						</div>
					{/if}
				</div>

				<!-- Project Image -->
				{#if image}
					<div class="flex items-center justify-center">
						<img
							src={image}
							alt={title}
							class="max-w-full rounded-lg border border-gray-700 shadow-2xl"
							loading="lazy"
						/>
					</div>
				{/if}
			</div>
		</div>
	</header>

	<!-- Content -->
	<main class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
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
