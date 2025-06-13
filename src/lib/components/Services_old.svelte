<!-- Services.svelte -->
<script lang="ts">
	import { Code, Bot, Database, Smartphone, Server, Palette, Wrench, Users } from 'lucide-svelte';
	import { services } from '$lib/data/services';
	
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
	
	// Get featured services for homepage
	const featuredServices = services.filter(service => service.featured);
		{
			icon: Users,
			title: 'Consulting & Mentoring',
			description:
				'Technical consultation for your projects and mentoring for developers looking to improve their skills.',
			features: ['Code Review', 'Architecture Planning', 'Team Training', 'Best Practices']
		}
	];
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
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">
				<span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My</span
				>
				<span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
					Services</span
				>
			</h2>
			<p class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">
				I offer comprehensive development services to help bring your ideas to life
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredServices as service, index}
				<div
					class="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/30 hover:scale-105 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-400/10"
				>
					<!-- Service Icon -->
					<div
						class="mb-8 flex h-18 w-18 items-center justify-center rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 border border-blue-400/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
					>
						<svelte:component
							this={iconMap[service.icon]}
							class="h-8 w-8 text-blue-400"
						/>
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
								<div class="mr-3 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
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
						<svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
						</svg>
					</a>
				</div>
			{/each}
		</div>
										: service.icon === Smartphone
											? 'from-blue-400 to-cyan-400'
											: service.icon === Server
												? 'from-green-400 to-emerald-400'
												: service.icon === Palette
													? 'from-purple-400 to-pink-400'
													: service.icon === Wrench
														? 'from-orange-400 to-red-400'
														: 'from-pink-400 to-rose-400'} animate-pulse"
								></div>
								{feature}
							</li>
						{/each}
					</ul>

					<!-- Decorative elements -->
					<div
						class="absolute top-4 right-4 h-2 w-2 bg-{service.icon === Code
							? 'yellow'
							: service.icon === Smartphone
								? 'blue'
								: service.icon === Server
									? 'green'
									: service.icon === Palette
										? 'purple'
										: service.icon === Wrench
											? 'orange'
											: 'pink'}-400/30 animate-pulse rounded-full"
						style="animation-delay: {index * 200}ms"
					></div>
					<div
						class="absolute bottom-4 left-4 h-1 w-1 bg-{service.icon === Code
							? 'yellow'
							: service.icon === Smartphone
								? 'blue'
								: service.icon === Server
									? 'green'
									: service.icon === Palette
										? 'purple'
										: service.icon === Wrench
											? 'orange'
											: 'pink'}-400/20 animate-pulse rounded-full"
						style="animation-delay: {index * 300}ms"
					></div>
				</div>
			{/each}
		</div>

		<!-- Enhanced CTA Section -->
		<div class="mt-20 text-center">
			<!-- View All Services Button with modern design -->
			<div class="mb-12">
				<a
					href="/services"
					class="group relative inline-block rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-10 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-orange-300 hover:shadow-2xl hover:shadow-yellow-400/25"
				>
					<span class="relative z-10">View All Services</span>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</a>
			</div>

			<div
				class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-sm"
			>
				<!-- Background decoration -->
				<div
					class="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-r from-yellow-400/10 to-orange-400/10 blur-3xl"
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
						<div
							class="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-300 to-teal-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
