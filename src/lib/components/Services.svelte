<!-- Services.svelte -->
<script lang="ts">
	import { Code, Smartphone, Server, Palette, Wrench, Users } from 'lucide-svelte';

	const services = [
		{
			icon: Code,
			title: 'Web Development',
			description:
				'Custom web applications built with modern frameworks like React, Svelte, and Vue.js. Focus on performance, accessibility, and user experience.',
			features: [
				'Responsive Design',
				'SEO Optimization',
				'Performance Tuning',
				'Cross-browser Compatibility'
			]
		},
		{
			icon: Smartphone,
			title: 'Mobile Development',
			description:
				'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
			features: [
				'Native Performance',
				'Cross-platform',
				'App Store Deployment',
				'Push Notifications'
			]
		},
		{
			icon: Server,
			title: 'Backend Development',
			description:
				'Robust server-side applications with APIs, databases, and cloud infrastructure. Scalable and secure solutions.',
			features: ['REST APIs', 'Database Design', 'Cloud Deployment', 'Security Implementation']
		},
		{
			icon: Palette,
			title: 'UI/UX Design',
			description:
				'User-centered design approach to create intuitive and beautiful interfaces that enhance user experience.',
			features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
		},
		{
			icon: Wrench,
			title: 'DevOps & Deployment',
			description:
				'CI/CD pipelines, containerization, and cloud infrastructure setup for reliable and automated deployments.',
			features: ['Docker & Kubernetes', 'AWS/GCP Setup', 'Monitoring', 'Automated Testing']
		},
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
			{#each services as service, index}
				<div
					class="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-{service.icon ===
					Code
						? 'yellow'
						: service.icon === Smartphone
							? 'blue'
							: service.icon === Server
								? 'green'
								: service.icon === Palette
									? 'purple'
									: service.icon === Wrench
										? 'orange'
										: 'pink'}-400/30 hover:scale-105 hover:bg-white/10 hover:shadow-2xl hover:shadow-{service.icon ===
					Code
						? 'yellow'
						: service.icon === Smartphone
							? 'blue'
							: service.icon === Server
								? 'green'
								: service.icon === Palette
									? 'purple'
									: service.icon === Wrench
										? 'orange'
										: 'pink'}-400/10"
				>
					<!-- Enhanced Service Icon -->
					<div
						class="mb-8 flex h-18 w-18 items-center justify-center rounded-xl bg-gradient-to-r {service.icon ===
						Code
							? 'border-yellow-400/30 from-yellow-400/20 to-orange-400/20'
							: service.icon === Smartphone
								? 'border-blue-400/30 from-blue-400/20 to-cyan-400/20'
								: service.icon === Server
									? 'border-green-400/30 from-green-400/20 to-emerald-400/20'
									: service.icon === Palette
										? 'border-purple-400/30 from-purple-400/20 to-pink-400/20'
										: service.icon === Wrench
											? 'border-orange-400/30 from-orange-400/20 to-red-400/20'
											: 'border-pink-400/30 from-pink-400/20 to-rose-400/20'} border backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
					>
						<svelte:component
							this={service.icon}
							class="h-8 w-8 {service.icon === Code
								? 'text-yellow-400'
								: service.icon === Smartphone
									? 'text-blue-400'
									: service.icon === Server
										? 'text-green-400'
										: service.icon === Palette
											? 'text-purple-400'
											: service.icon === Wrench
												? 'text-orange-400'
												: 'text-pink-400'}"
						/>
					</div>

					<!-- Enhanced Service Content -->
					<h3
						class="mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-xl font-semibold text-transparent transition-all duration-300 group-hover:from-{service.icon ===
						Code
							? 'yellow'
							: service.icon === Smartphone
								? 'blue'
								: service.icon === Server
									? 'green'
									: service.icon === Palette
										? 'purple'
										: service.icon === Wrench
											? 'orange'
											: 'pink'}-400 group-hover:to-{service.icon === Code
							? 'orange'
							: service.icon === Smartphone
								? 'cyan'
								: service.icon === Server
									? 'emerald'
									: service.icon === Palette
										? 'pink'
										: service.icon === Wrench
											? 'red'
											: 'rose'}-400"
					>
						{service.title}
					</h3>
					<p class="mb-8 text-sm leading-relaxed text-gray-300">
						{service.description}
					</p>

					<!-- Enhanced Service Features -->
					<ul class="space-y-3">
						{#each service.features as feature}
							<li class="flex items-center text-sm text-gray-300">
								<div
									class="mr-3 h-2 w-2 rounded-full bg-gradient-to-r {service.icon === Code
										? 'from-yellow-400 to-orange-400'
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
