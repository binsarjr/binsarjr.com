<script lang="ts">
	import { ArrowRight, Star, Clock, CheckCircle } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';

	const { data }: { data: PageData } = $props();

	let selectedCategory = $state('All');
	let services = $derived(data.services || []);
	let allCategories = $derived([
		'All',
		...Array.from(new Set(services.map((service) => service.meta.category || 'General')))
	]);
	let filteredServices = $derived(
		selectedCategory === 'All'
			? services
			: services.filter((service) => service.meta.category === selectedCategory)
	);
</script>

<svelte:head>
	<title>Services - Binsar Jr</title>
	<meta
		name="description"
		content="Professional web development, mobile app development, and consulting services to help grow your business."
	/>
</svelte:head>

<main class="relative min-h-screen overflow-hidden pt-20">
	<!-- Background decorations -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"></div>
	<div
		class="absolute top-1/4 left-1/3 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-indigo-400/5 to-purple-400/5 blur-3xl"
	></div>
	<div
		class="absolute right-1/3 bottom-1/3 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-rose-400/5 to-pink-400/5 blur-3xl delay-1000"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Enhanced Header -->
		<div class="mb-20 text-center" data-aos="fade-up">
			<h1 class="mb-6 text-5xl font-bold md:text-6xl" data-aos="fade-up" data-aos-delay="200">
				<span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My</span
				>
				<span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
					Services</span
				>
			</h1>
			<p
				class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300"
				data-aos="fade-up"
				data-aos-delay="400"
			>
				Professional development services to help bring your ideas to life with modern technologies
			</p>
		</div>

		<!-- Enhanced Category Filter -->
		<div class="mb-16" data-aos="fade-up" data-aos-delay="600">
			<div class="flex flex-wrap justify-center gap-3">
				{#each allCategories as category}
					<button
						onclick={() => (selectedCategory = category)}
						class="group relative rounded-full border px-6 py-3 text-sm font-medium backdrop-blur-sm transition-all duration-300 {selectedCategory ===
						category
							? 'border-yellow-400/50 bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-lg shadow-yellow-400/25'
							: 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10 hover:text-white'}"
					>
						{category}
						{#if selectedCategory === category}
							<div
								class="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-50"
							></div>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<!-- Services Grid -->
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-aos-delay="300" data-aos="fade-up">
			{#each filteredServices as service, index}
				{#key service.slug}
					<article
						class="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:border-yellow-400/50"
						data-aos="fade-up"
						data-aos-delay={800 + index * 100}
					>
						<!-- Featured Badge -->
						{#if service.meta.featured}
							<div
								class="border-b border-gray-800 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 p-4"
							>
								<span class="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
									Popular Service
								</span>
							</div>
						{/if}

						<!-- Service Content -->
						<div class="p-6">
							<!-- Service Title -->
							<h2
								class="mb-3 line-clamp-2 text-xl font-semibold text-white transition-colors group-hover:text-yellow-400"
							>
								{service.meta.title}
							</h2>

							<!-- Service Description -->
							<p class="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-300">
								{service.meta.excerpt || 'Professional service to help grow your business'}
							</p>

							<!-- Pricing -->
							{#if service.meta.pricing}
								<div class="mb-4 flex items-center gap-2">
									<span class="text-lg font-bold text-yellow-400">
										{service.meta.pricing.starting}
									</span>
									<span class="text-sm text-gray-400">starting from</span>
								</div>
							{/if}

							<!-- Duration -->
							{#if service.meta.duration}
								<div class="mb-4 flex items-center text-sm text-gray-400">
									<Clock class="mr-1 h-4 w-4" />
									{service.meta.duration}
								</div>
							{/if}

							<!-- Key Features -->
							{#if service.meta.features && service.meta.features.length > 0}
								<div class="mb-6">
									<h4 class="mb-2 text-sm font-semibold text-gray-300">Key Features:</h4>
									<ul class="space-y-1">
										{#each service.meta.features.slice(0, 3) as feature}
											<li class="flex items-center text-xs text-gray-400">
												<CheckCircle class="mr-2 h-3 w-3 text-green-400" />
												{feature}
											</li>
										{/each}
										{#if service.meta.features.length > 3}
											<li class="text-xs text-gray-500">
												+{service.meta.features.length - 3} more features
											</li>
										{/if}
									</ul>
								</div>
							{/if}

							<!-- Technologies -->
							{#if service.meta.technologies && service.meta.technologies.length > 0}
								<div class="mb-6 flex flex-wrap gap-2">
									{#each service.meta.technologies.slice(0, 4) as tech}
										<span
											class="rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-yellow-400"
										>
											{tech}
										</span>
									{/each}
									{#if service.meta.technologies.length > 4}
										<span
											class="rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-gray-400"
										>
											+{service.meta.technologies.length - 4} more
										</span>
									{/if}
								</div>
							{/if}

							<!-- Learn More Link -->
							<a
								href="/services/{service.slug}"
								class="inline-flex items-center font-medium text-yellow-400 transition-colors hover:text-yellow-300"
							>
								Learn More
								<ArrowRight class="ml-2 h-4 w-4" />
							</a>
						</div>
					</article>
				{/key}
			{/each}
		</div>

		<!-- No services message -->
		{#if filteredServices.length === 0}
			<div class="py-12 text-center">
				<p class="text-lg text-gray-400">No services found for the selected category.</p>
			</div>
		{/if}

		<!-- Consultation Section -->
		<div class="mt-16">
			<div
				class="rounded-2xl border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-center"
			>
				<h3 class="mb-4 text-2xl font-bold text-white">Need a Custom Solution?</h3>
				<p class="mx-auto mb-6 max-w-2xl text-gray-300">
					Every project is unique. Let's discuss your specific requirements and create a tailored
					solution for your needs.
				</p>
				<div class="flex justify-center gap-4">
					<a
						href="/contact"
						class="inline-block rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
					>
						Free Consultation
					</a>
					<a
						href="/projects"
						class="inline-block rounded-lg border border-gray-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
					>
						View My Work
					</a>
				</div>
			</div>
		</div>
	</div>
</main>
