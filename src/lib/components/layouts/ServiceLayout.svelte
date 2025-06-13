<!-- ServiceLayout.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft, Mail, Clock, DollarSign, CheckCircle, Tag } from 'lucide-svelte';
	import { fadeUp, fadeRight, fadeLeft } from '$lib/animations';
	import { fade, fly } from 'svelte/transition';

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
	<!-- Enhanced Business-Style Background ornaments -->
	<div class="pointer-events-none fixed inset-0">
		<!-- Geometric shapes with business feel -->
		<div
			class="absolute top-10 left-5 h-40 w-40 rotate-45 animate-spin rounded-lg bg-gradient-to-br from-emerald-400/8 to-teal-400/8 blur-2xl"
			style="animation-duration: 30s;"
		></div>
		<div
			class="absolute top-1/4 right-10 h-32 w-32 -rotate-12 animate-pulse rounded-xl bg-gradient-to-br from-blue-400/10 to-indigo-400/10 blur-xl delay-1000"
		></div>
		<div
			class="absolute bottom-1/3 left-1/4 h-48 w-48 rotate-12 animate-bounce rounded-2xl bg-gradient-to-br from-purple-400/6 to-pink-400/6 blur-3xl delay-2000"
			style="animation-duration: 8s;"
		></div>

		<!-- Hexagonal patterns -->
		<div
			class="absolute top-1/2 left-10 h-24 w-24 animate-pulse bg-gradient-to-r from-cyan-400/12 to-blue-400/12 blur-lg delay-500"
			style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);"
		></div>
		<div
			class="absolute top-3/4 right-1/3 h-20 w-20 animate-ping bg-gradient-to-r from-green-400/15 to-emerald-400/15 blur-md delay-1500"
			style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); animation-duration: 4s;"
		></div>

		<!-- Business-like diamond shapes -->
		<div
			class="absolute top-1/5 right-1/4 h-16 w-16 rotate-45 animate-pulse bg-gradient-to-r from-amber-400/12 to-yellow-400/12 blur-lg delay-3000"
		></div>
		<div
			class="absolute right-1/5 bottom-1/5 h-12 w-12 rotate-45 animate-bounce bg-gradient-to-r from-orange-400/15 to-red-400/15 blur-md delay-4000"
			style="animation-duration: 6s;"
		></div>

		<!-- Professional grid overlay -->
		<div
			class="absolute inset-0 opacity-8"
			style="background-image: 
				linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
				linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
			background-size: 100px 100px;"
		></div>

		<!-- Subtle connecting lines -->
		<div
			class="absolute top-20 left-1/3 h-px w-32 animate-pulse bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent delay-1000"
		></div>
		<div
			class="absolute top-1/2 right-1/4 h-32 w-px animate-pulse bg-gradient-to-b from-transparent via-blue-400/20 to-transparent delay-2000"
		></div>
		<div
			class="absolute bottom-1/4 left-1/2 h-px w-24 animate-pulse bg-gradient-to-r from-transparent via-purple-400/20 to-transparent delay-3000"
		></div>

		<!-- Corporate-style accent elements -->
		<div
			class="absolute top-1/3 left-1/5 h-2 w-2 animate-ping rounded-full bg-emerald-400/30 delay-2500"
			style="animation-duration: 3s;"
		></div>
		<div
			class="absolute top-2/3 right-1/6 h-3 w-3 animate-pulse rounded-full bg-blue-400/25 delay-3500"
		></div>
		<div
			class="absolute bottom-1/6 left-2/3 h-1 w-1 animate-ping rounded-full bg-purple-400/35 delay-4500"
			style="animation-duration: 5s;"
		></div>

		<!-- Professional arc elements -->
		<div
			class="absolute top-0 right-0 h-32 w-32 animate-pulse border-b border-l border-emerald-400/10 delay-1000"
			style="border-radius: 0 0 0 100%;"
		></div>
		<div
			class="absolute bottom-0 left-0 h-28 w-28 animate-pulse border-t border-r border-blue-400/10 delay-2000"
			style="border-radius: 0 100% 0 0;"
		></div>

		<!-- Layered geometric patterns -->
		<div
			class="absolute inset-0 opacity-4"
			style="background-image: 
				radial-gradient(circle at 25% 25%, rgba(52, 211, 153, 0.1) 0%, transparent 50%),
				radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.08) 0%, transparent 50%);"
		></div>
	</div>

	<!-- Enhanced Header -->
	<header class="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
		<!-- Header ornaments -->
		<div class="pointer-events-none absolute inset-0">
			<!-- Professional header accents -->
			<div
				class="absolute top-4 left-1/4 h-12 w-px animate-pulse bg-gradient-to-b from-emerald-400/20 to-transparent delay-1000"
			></div>
			<div
				class="absolute top-4 right-1/4 h-12 w-px animate-pulse bg-gradient-to-b from-blue-400/20 to-transparent delay-2000"
			></div>

			<!-- Business corner elements -->
			<div class="absolute top-0 left-0 h-8 w-8 border-r border-b border-emerald-400/15"></div>
			<div class="absolute top-0 right-0 h-8 w-8 border-b border-l border-blue-400/15"></div>

			<!-- Corporate separator lines -->
			<div
				class="absolute bottom-0 left-1/3 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent"
			></div>
			<div
				class="absolute right-1/3 bottom-0 h-px w-32 bg-gradient-to-r from-transparent via-blue-400/25 to-transparent"
			></div>
		</div>

		<div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
			<button
				onclick={() => history.back()}
				class="group mb-6 inline-flex items-center text-sm text-gray-400 transition-all duration-300 hover:scale-105 hover:text-yellow-400"
				use:fadeRight
			>
				<ArrowLeft
					class="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
				/>
				Back to Services
			</button>

			<div class="grid gap-12 lg:grid-cols-3">
				<!-- Enhanced Service Info -->
				<div class="lg:col-span-2" use:fadeRight={{ delay: 200 }}>
					<!-- Enhanced Category Badge -->
					{#if category}
						<div class="mb-6" use:fadeUp={{ delay: 400 }}>
							<span
								class="inline-flex items-center rounded-xl border border-emerald-400/30 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 px-4 py-2 text-sm font-medium text-emerald-400 backdrop-blur-sm"
							>
								{category.charAt(0).toUpperCase() + category.slice(1)}
							</span>
						</div>
					{/if}

					<!-- Enhanced Title -->
					<h1 class="mb-6 text-4xl font-bold md:text-5xl" use:fadeUp={{ delay: 600 }}>
						<span
							class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
							>{title}</span
						>
					</h1>

					<!-- Enhanced Excerpt -->
					{#if excerpt}
						<p class="mb-8 text-lg leading-relaxed text-gray-300" use:fadeUp={{ delay: 800 }}>
							{excerpt}
						</p>
					{/if}

					<!-- Enhanced Features -->
					{#if features.length > 0}
						<div class="mb-8" use:fadeUp={{ delay: 1000 }}>
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
						<div class="mb-8" use:fadeUp={{ delay: 1200 }}>
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
				<div class="lg:col-span-1" use:fadeLeft={{ delay: 200 }}>
					<div
						class="sticky top-24 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
						use:fadeUp={{ delay: 400 }}
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
	<main class="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Professional content ornaments -->
		<div class="pointer-events-none absolute inset-0">
			<!-- Side accent lines -->
			<div
				class="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-emerald-400/15 to-transparent"
			></div>
			<div
				class="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-400/15 to-transparent"
			></div>

			<!-- Corner professional markers -->
			<div class="absolute top-4 left-4">
				<div class="h-6 w-6 border-t-2 border-l-2 border-emerald-400/20"></div>
			</div>
			<div class="absolute top-4 right-4">
				<div class="h-6 w-6 border-t-2 border-r-2 border-blue-400/20"></div>
			</div>
			<div class="absolute bottom-4 left-4">
				<div class="h-6 w-6 border-b-2 border-l-2 border-purple-400/20"></div>
			</div>
			<div class="absolute right-4 bottom-4">
				<div class="h-6 w-6 border-r-2 border-b-2 border-teal-400/20"></div>
			</div>

			<!-- Business-style divider elements -->
			<div class="absolute top-1/4 left-1/2 -translate-x-1/2">
				<div class="flex space-x-2">
					<div class="h-1 w-8 animate-pulse rounded-full bg-emerald-400/20 delay-500"></div>
					<div class="h-1 w-4 animate-pulse rounded-full bg-blue-400/25 delay-1000"></div>
					<div class="h-1 w-6 animate-pulse rounded-full bg-purple-400/20 delay-1500"></div>
				</div>
			</div>

			<!-- Professional geometric accents -->
			<div
				class="absolute top-1/3 -left-4 h-8 w-8 rotate-45 animate-pulse bg-gradient-to-br from-emerald-400/10 to-teal-400/10 delay-2000"
			></div>
			<div
				class="absolute top-2/3 -right-4 h-6 w-6 -rotate-45 animate-pulse bg-gradient-to-br from-blue-400/12 to-indigo-400/12 delay-3000"
			></div>
		</div>

		<article class="prose-enhanced" in:fly|global={{ delay: 1_400, y: '30', duration: 1000 }}>
			<slot />
		</article>

		<!-- Professional bottom ornaments -->
		<div class="pointer-events-none absolute right-0 bottom-0 left-0">
			<!-- Corporate-style footer accent -->
			<div class="mx-auto flex max-w-2xl justify-center space-x-6 pb-8">
				<div
					class="h-px w-16 animate-pulse bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent delay-1000"
				></div>
				<div
					class="h-2 w-2 animate-ping rounded-full bg-blue-400/30 delay-1500"
					style="animation-duration: 4s;"
				></div>
				<div
					class="h-px w-12 animate-pulse bg-gradient-to-r from-transparent via-purple-400/25 to-transparent delay-2000"
				></div>
				<div class="h-1 w-1 animate-pulse rounded-full bg-teal-400/35 delay-2500"></div>
				<div
					class="h-px w-20 animate-pulse bg-gradient-to-r from-transparent via-indigo-400/25 to-transparent delay-3000"
				></div>
			</div>
		</div>
	</main>
</div>

<style>
	/* Professional geometric animations */
	@keyframes professionalFloat {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		33% {
			transform: translateY(-10px) rotate(2deg);
		}
		66% {
			transform: translateY(5px) rotate(-1deg);
		}
	}

	@keyframes businessPulse {
		0%,
		100% {
			opacity: 0.1;
			transform: scale(1);
		}
		50% {
			opacity: 0.2;
			transform: scale(1.05);
		}
	}

	.animate-professional-float {
		animation: professionalFloat 8s ease-in-out infinite;
	}

	.animate-business-pulse {
		animation: businessPulse 6s ease-in-out infinite;
	}

	/* Corporate grid pattern */
	.corporate-grid {
		background-image:
			linear-gradient(rgba(52, 211, 153, 0.05) 1px, transparent 1px),
			linear-gradient(90deg, rgba(52, 211, 153, 0.05) 1px, transparent 1px);
		background-size: 50px 50px;
	}
</style>
