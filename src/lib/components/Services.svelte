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

<section id="services" class="bg-gradient-to-b from-gray-900 to-black py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white md:text-5xl">
				My <span class="text-yellow-400">Services</span>
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-300">
				I offer comprehensive development services to help bring your ideas to life
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service}
				<div
					class="group rounded-xl border border-gray-800 bg-gray-900 p-8 transition-all duration-300 hover:border-yellow-400/50"
				>
					<!-- Service Icon -->
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-400/10 transition-colors group-hover:bg-yellow-400/20"
					>
						<svelte:component this={service.icon} class="h-8 w-8 text-yellow-400" />
					</div>

					<!-- Service Content -->
					<h3
						class="mb-4 text-xl font-semibold text-white transition-colors group-hover:text-yellow-400"
					>
						{service.title}
					</h3>
					<p class="mb-6 text-sm leading-relaxed text-gray-300">
						{service.description}
					</p>

					<!-- Service Features -->
					<ul class="space-y-2">
						{#each service.features as feature}
							<li class="flex items-center text-sm text-gray-400">
								<div class="mr-3 h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- CTA Section -->
		<div class="mt-16 text-center">
			<!-- View All Services Button -->
			<div class="mb-8">
				<a
					href="/services"
					class="inline-block rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
				>
					View All Services
				</a>
			</div>

			<div
				class="rounded-2xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 p-8"
			>
				<h3 class="mb-4 text-2xl font-bold text-white">Ready to start your project?</h3>
				<p class="mx-auto mb-6 max-w-2xl text-gray-300">
					Let's discuss your ideas and create something amazing together. I'm always excited to work
					on new challenges.
				</p>
				<button
					onclick={() => {
						const element = document.getElementById('contact');
						if (element) element.scrollIntoView({ behavior: 'smooth' });
					}}
					class="rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
				>
					Get Started
				</button>
			</div>
		</div>
	</div>
</section>
