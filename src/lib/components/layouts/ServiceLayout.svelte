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

<div
	class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 pt-20 text-white"
>
	<!-- Background ornaments -->
	<div class="pointer-events-none fixed inset-0">
		<div
			class="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-gradient-to-r from-emerald-400/5 to-teal-400/5 blur-3xl"
		></div>
		<div
			class="absolute top-1/3 right-20 h-48 w-48 animate-pulse rounded-full bg-gradient-to-r from-purple-400/5 to-pink-400/5 blur-3xl delay-1000"
		></div>
		<div
			class="absolute bottom-1/4 left-1/3 h-64 w-64 animate-pulse rounded-full bg-gradient-to-r from-yellow-400/3 to-orange-400/3 blur-3xl delay-2000"
		></div>
		<div
			class="absolute inset-0 opacity-10"
			style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 60px 60px;"
		></div>
	</div>

	<!-- Enhanced Header -->
	<header class="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
		<div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
			<button
				onclick={() => history.back()}
				class="group mb-6 inline-flex items-center text-sm text-gray-400 transition-all duration-300 hover:scale-105 hover:text-yellow-400"
				data-aos="fade-right"
			>
				<ArrowLeft
					class="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
				/>
				Back to Services
			</button>

			<div class="grid gap-12 lg:grid-cols-3">
				<!-- Enhanced Service Info -->
				<div class="lg:col-span-2" data-aos="fade-right" data-aos-delay="200">
					<!-- Enhanced Category Badge -->
					{#if category}
						<div class="mb-6" data-aos="fade-up" data-aos-delay="400">
							<span
								class="inline-flex items-center rounded-xl border border-emerald-400/30 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 px-4 py-2 text-sm font-medium text-emerald-400 backdrop-blur-sm"
							>
								{category.charAt(0).toUpperCase() + category.slice(1)}
							</span>
						</div>
					{/if}

					<!-- Enhanced Title -->
					<h1 class="mb-6 text-4xl font-bold md:text-5xl" data-aos="fade-up" data-aos-delay="600">
						<span
							class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
							>{title}</span
						>
					</h1>

					<!-- Enhanced Excerpt -->
					{#if excerpt}
						<p
							class="mb-8 text-lg leading-relaxed text-gray-300"
							data-aos="fade-up"
							data-aos-delay="800"
						>
							{excerpt}
						</p>
					{/if}

					<!-- Enhanced Features -->
					{#if features.length > 0}
						<div class="mb-8" data-aos="fade-up" data-aos-delay="1000">
							<h3
								class="mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-lg font-semibold text-transparent"
							>
								What's Included
							</h3>
							<div class="grid gap-4 sm:grid-cols-2">
								{#each features as feature}
									<div
										class="flex items-center rounded-xl border border-white/10 bg-white/5 p-3 text-gray-200 backdrop-blur-sm"
									>
										<CheckCircle class="mr-3 h-5 w-5 flex-shrink-0 text-green-400" />
										<span>{feature}</span>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Enhanced Technologies -->
					{#if technologies.length > 0}
						<div class="mb-8" data-aos="fade-up" data-aos-delay="1200">
							<h3
								class="mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-lg font-semibold text-transparent"
							>
								Technologies
							</h3>
							<div class="flex flex-wrap gap-3">
								{#each technologies as tech}
									<span
										class="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
									>
										<Tag class="mr-2 h-3 w-3" />
										{tech}
									</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				<!-- Enhanced Service Details Sidebar -->
				<div class="lg:col-span-1" data-aos="fade-left" data-aos-delay="200">
					<div
						class="sticky top-24 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
						data-aos="fade-up"
						data-aos-delay="400"
					>
						<!-- Enhanced Pricing -->
						{#if pricing.starting}
							<div class="mb-8">
								<h3
									class="mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-lg font-semibold text-transparent"
								>
									Pricing
								</h3>
								<div
									class="mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-4xl font-bold text-transparent"
								>
									{pricing.starting}
								</div>
								{#if pricing.description}
									<p class="text-sm text-gray-300">{pricing.description}</p>
								{/if}
							</div>
						{/if}

						<!-- Enhanced Duration -->
						{#if duration}
							<div class="mb-8">
								<h3
									class="mb-4 flex items-center bg-gradient-to-r from-white to-gray-200 bg-clip-text text-lg font-semibold text-transparent"
								>
									<Clock class="mr-2 h-5 w-5 text-blue-400" />
									Timeline
								</h3>
								<p
									class="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200 backdrop-blur-sm"
								>
									{duration}
								</p>
							</div>
						{/if}

						<!-- Enhanced Deliverables -->
						{#if deliverables.length > 0}
							<div class="mb-8">
								<h3
									class="mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-lg font-semibold text-transparent"
								>
									Deliverables
								</h3>
								<ul class="space-y-3">
									{#each deliverables as deliverable}
										<li
											class="flex items-start rounded-xl border border-white/10 bg-white/5 p-3 text-sm backdrop-blur-sm"
										>
											<CheckCircle class="mt-0.5 mr-3 h-4 w-4 flex-shrink-0 text-green-400" />
											<span class="text-gray-200">{deliverable}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						<!-- Enhanced CTA Button -->
						<button
							onclick={() => {
								const element = document.getElementById('contact');
								if (element) element.scrollIntoView({ behavior: 'smooth' });
							}}
							class="group relative w-full rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-300 hover:to-teal-300 hover:shadow-2xl hover:shadow-emerald-400/25"
						>
							<Mail
								class="mr-2 inline h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
							/>
							<span class="relative z-10">Get Started</span>
							<div
								class="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-300 to-teal-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>
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
			data-aos="fade-up"
			data-aos-delay="1400"
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
