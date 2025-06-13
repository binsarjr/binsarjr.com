<!-- ServiceLayout.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft, Mail, Clock, DollarSign, CheckCircle, Tag } from 'lucide-svelte';

	export let title: string;
	export let excerpt: string = '';
	export let category: string = '';
	export let features: string[] = [];
	export let technologies: string[] = [];
	export let pricing: {
		starting: string;
		description: string;
	} = { starting: '', description: '' };
	export let duration: string = '';
	export let deliverables: string[] = [];
	export const featured: boolean = false;
</script>

<svelte:head>
	<title>{title} - Service by Binsar Jr</title>
	<meta name="description" content={excerpt} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta property="og:type" content="website" />
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
				Back to Services
			</button>

			<div class="grid gap-8 lg:grid-cols-3">
				<!-- Service Info -->
				<div class="lg:col-span-2">
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

					<!-- Excerpt -->
					{#if excerpt}
						<p class="mb-6 text-lg text-gray-300">
							{excerpt}
						</p>
					{/if}

					<!-- Features -->
					{#if features.length > 0}
						<div class="mb-6">
							<h3 class="mb-3 text-lg font-semibold text-white">What's Included</h3>
							<div class="grid gap-2 sm:grid-cols-2">
								{#each features as feature}
									<div class="flex items-center text-gray-300">
										<CheckCircle class="mr-2 h-4 w-4 text-green-400" />
										<span>{feature}</span>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Technologies -->
					{#if technologies.length > 0}
						<div class="mb-6">
							<h3 class="mb-3 text-lg font-semibold text-white">Technologies</h3>
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
				</div>

				<!-- Service Details Sidebar -->
				<div class="lg:col-span-1">
					<div class="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
						<!-- Pricing -->
						{#if pricing.starting}
							<div class="mb-6">
								<h3 class="mb-2 text-lg font-semibold text-white">Pricing</h3>
								<div class="mb-2 text-3xl font-bold text-yellow-400">
									{pricing.starting}
								</div>
								{#if pricing.description}
									<p class="text-sm text-gray-400">{pricing.description}</p>
								{/if}
							</div>
						{/if}

						<!-- Duration -->
						{#if duration}
							<div class="mb-6">
								<h3 class="mb-2 flex items-center text-lg font-semibold text-white">
									<Clock class="mr-2 h-4 w-4" />
									Timeline
								</h3>
								<p class="text-gray-300">{duration}</p>
							</div>
						{/if}

						<!-- Deliverables -->
						{#if deliverables.length > 0}
							<div class="mb-6">
								<h3 class="mb-3 text-lg font-semibold text-white">Deliverables</h3>
								<ul class="space-y-2">
									{#each deliverables as deliverable}
										<li class="flex items-start text-sm text-gray-300">
											<CheckCircle class="mt-0.5 mr-2 h-3 w-3 flex-shrink-0 text-green-400" />
											<span>{deliverable}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						<!-- CTA Button -->
						<button
							onclick={() => {
								const element = document.getElementById('contact');
								if (element) element.scrollIntoView({ behavior: 'smooth' });
							}}
							class="w-full rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
						>
							<Mail class="mr-2 inline h-4 w-4" />
							Get Started
						</button>
					</div>
				</div>
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
