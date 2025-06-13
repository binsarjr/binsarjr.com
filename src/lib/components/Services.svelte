<!-- Services.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { Code, Bot, Database, Smartphone, Server, Palette, Wrench, Users } from 'lucide-svelte';
	import { getFeaturedContent } from '$lib';
	import type { ServiceMeta } from '$lib/content';
	import type { Service } from '$lib/data/services';
	import { fadeUp, zoomIn } from '$lib/animations';

	// Map icon names to actual icon components
	const iconMap: Record<string, any> = {
		Code,
		Bot,
		Database,
		Smartphone,
		Server,
		Palette,
		Wrench,
		Users
	};

	// Transform content loader data to Service interface
	function transformToService(item: { slug: string; meta: ServiceMeta }, index: number): Service {
		const getServiceIcon = (slug: string, category: string): string => {
			const iconMap: Record<string, string> = {
				'sistem-informasi': 'Code',
				'bot-development': 'Bot',
				'data-scraping': 'Database',
				'ui-ux-design': 'Palette',
				'devops-deployment': 'Wrench',
				'consulting-mentoring': 'Users'
			};

			if (iconMap[slug]) {
				return iconMap[slug];
			}

			const categoryIcons: Record<string, string> = {
				web: 'Code',
				mobile: 'Smartphone',
				backend: 'Server',
				design: 'Palette',
				devops: 'Wrench',
				consulting: 'Users'
			};

			return categoryIcons[category] || 'Code';
		};

		return {
			id: index + 1,
			title: item.meta.title,
			excerpt: item.meta.excerpt || '',
			icon: getServiceIcon(item.slug, item.meta.category || 'web'),
			category: (item.meta.category as Service['category']) || 'web',
			features: item.meta.features || [],
			technologies: item.meta.technologies || [],
			pricing: item.meta.pricing || { starting: 'Contact for pricing', description: '' },
			slug: item.slug,
			featured: item.meta.featured || false,
			duration: item.meta.duration || '',
			deliverables: item.meta.deliverables || []
		};
	}

	// State management
	let featuredServices: Service[] = [];
	let loading = true;
	let error = '';

	// Load featured services on component mount
	onMount(async () => {
		try {
			const servicesData = await getFeaturedContent<ServiceMeta>('services', 6);
			featuredServices = servicesData.map(transformToService);
			loading = false;
		} catch (err) {
			console.error('Error loading services:', err);
			error = 'Failed to load services';
			loading = false;
		}
	});
</script>

<section id="services" class="relative overflow-hidden py-20">
	<!-- Background decorations -->
	<div
		class="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"
	></div>
	<div
		class="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-indigo-400/5 to-purple-400/5 blur-3xl"
	></div>
	<div
		class="absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-cyan-400/5 to-blue-400/5 blur-3xl delay-1000"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center" use:fadeUp>
			<h2 class="mb-6 text-4xl font-bold md:text-5xl" use:fadeUp={{ delay: 200 }}>
				<span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My</span
				>
				<span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
					Services</span
				>
			</h2>
			<p
				class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300"
				data-aos="fade-up"
				data-aos-delay="400"
			>
				I offer comprehensive development services to help bring your ideas to life
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#if loading}
				<!-- Loading state -->
				{#each Array(3) as _, index}
					<div
						class="group relative animate-pulse rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
					>
						<div class="mb-8 h-18 w-18 rounded-xl bg-white/10"></div>
						<div class="mb-4 h-6 w-3/4 rounded bg-white/10"></div>
						<div class="mb-6 space-y-2">
							<div class="h-4 w-full rounded bg-white/5"></div>
							<div class="h-4 w-5/6 rounded bg-white/5"></div>
						</div>
						<div class="mb-6">
							<div class="mb-2 h-5 w-24 rounded bg-white/10"></div>
							<div class="h-3 w-32 rounded bg-white/5"></div>
						</div>
						<div class="mb-8 space-y-2">
							{#each Array(4) as _}
								<div class="flex items-center">
									<div class="mr-3 h-2 w-2 rounded-full bg-white/10"></div>
									<div class="h-3 w-20 rounded bg-white/5"></div>
								</div>
							{/each}
						</div>
						<div class="h-4 w-20 rounded bg-white/10"></div>
					</div>
				{/each}
			{:else if error}
				<!-- Error state -->
				<div class="col-span-full py-12 text-center">
					<div class="mb-4 text-red-400">⚠️ {error}</div>
					<p class="text-gray-400">Please try refreshing the page</p>
				</div>
			{:else if featuredServices.length === 0}
				<!-- No services state -->
				<div class="col-span-full py-12 text-center">
					<div class="mb-4 text-gray-400">No featured services available</div>
					<a href="/services" class="text-blue-400 hover:text-blue-300">View all services</a>
				</div>
			{:else}
				<!-- Services content -->
				{#each featuredServices as service, index}
					<div
						class="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-400/10"
						data-aos="fade-up"
						data-aos-delay={600 + index * 100}
					>
						<!-- Service Icon -->
						<div
							class="mb-8 flex h-18 w-18 items-center justify-center rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
						>
							<svelte:component this={iconMap[service.icon]} class="h-8 w-8 text-blue-400" />
						</div>

						<!-- Service Content -->
						<h3
							class="mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-xl font-semibold text-transparent transition-all duration-300 group-hover:from-blue-400 group-hover:to-purple-400"
						>
							{service.title}
						</h3>
						<p class="mb-6 text-sm leading-relaxed text-gray-300">
							{service.excerpt}
						</p>

						<!-- Pricing -->
						<div class="mb-6">
							<div class="text-lg font-semibold text-blue-400">{service.pricing.starting}</div>
							<div class="text-xs text-gray-400">{service.pricing.description}</div>
						</div>

						<!-- Service Features -->
						<ul class="mb-8 space-y-2">
							{#each service.features.slice(0, 4) as feature}
								<li class="flex items-center text-sm text-gray-300">
									<div
										class="mr-3 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
									></div>
									{feature}
								</li>
							{/each}
						</ul>

						<!-- Action Button -->
						<a
							href="/services/{service.slug}"
							class="inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
						>
							Learn More
							<svg
								class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</a>
					</div>
				{/each}
			{/if}
		</div>

		<!-- Enhanced CTA Section -->
		<div class="mt-20 text-center" data-aos="fade-up" data-aos-delay="900">
			<!-- View All Services Button with modern design -->
			<div class="mb-12" data-aos="zoom-in" data-aos-delay="1100">
				<a
					href="/services"
					class="group relative inline-block rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-300 hover:to-purple-300 hover:shadow-2xl hover:shadow-blue-400/25"
				>
					<span class="relative z-10">View All Services</span>
				</a>
			</div>

			<div
				class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-sm"
			>
				<!-- Background decoration -->
				<div
					class="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl"
				></div>
				<div
					class="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl"
				></div>

				<div class="relative z-10">
					<h3
						class="mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-3xl font-bold text-transparent"
					>
						Ready to start your project?
					</h3>
					<p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
						Let's discuss your ideas and create something amazing together. I'm always excited to
						work on new challenges.
					</p>
					<button
						onclick={() => {
							const element = document.getElementById('contact');
							if (element) element.scrollIntoView({ behavior: 'smooth' });
						}}
						class="group relative rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-10 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-300 hover:to-teal-300 hover:shadow-2xl hover:shadow-emerald-400/25"
					>
						<span class="relative z-10">Get Started</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
