<!-- Footer.svelte -->
<script lang="ts">
	import { Github, Linkedin, Mail, Heart, MapPin, Calendar } from 'lucide-svelte';
	import { scrollToSection } from '$lib/utils';
	import { AUTHOR, SOCIAL_LINKS } from '$lib/constants';

	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ name: 'About', href: '#about' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Services', href: '#services' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contact', href: '#contact' }
	];

	const services = [
		{ name: 'Web Development', href: '/services/web-development' },
		{ name: 'Mobile Development', href: '/services/mobile-development' },
		{ name: 'UI/UX Design', href: '#services' },
		{ name: 'DevOps & Deployment', href: '#services' },
		{ name: 'Consulting', href: '#contact' }
	];

	const handleLinkClick = (href: string) => {
		if (href.startsWith('#')) {
			scrollToSection(href.slice(1));
		} else {
			window.location.href = href;
		}
	};
</script>

<footer
	class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white"
>
	<!-- Background ornaments -->
	<div class="pointer-events-none absolute inset-0">
		<div
			class="absolute top-20 left-20 h-64 w-64 animate-pulse rounded-full bg-gradient-to-r from-yellow-400/5 to-orange-400/5 blur-3xl"
		></div>
		<div
			class="absolute right-20 bottom-20 h-48 w-48 animate-pulse rounded-full bg-gradient-to-r from-blue-400/5 to-purple-400/5 blur-3xl delay-1000"
		></div>
		<div
			class="absolute inset-0 opacity-5"
			style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 60px 60px;"
		></div>
	</div>

	<div class="relative z-10">
		<!-- Main Footer Content -->
		<div class="border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl">
				<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
					<!-- Brand Section -->
					<div class="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
						<div class="mb-6" data-aos="fade-right" data-aos-delay="400">
							<div class="mb-4 flex items-center">
								<div
									class="h-12 w-12 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-0.5 shadow-lg shadow-yellow-400/20"
								>
									<div
										class="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900"
									>
										<span
											class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-lg font-bold text-transparent"
											>BJ</span
										>
									</div>
								</div>
								<span class="ml-3 text-2xl font-bold text-white">{AUTHOR.name}</span>
							</div>
							<p class="mb-6 max-w-md leading-relaxed text-gray-300">
								{AUTHOR.bio}
							</p>
							<p class="mb-6 text-sm text-gray-400">
								Crafting digital experiences with passion & precision. Let's build something amazing
								together.
							</p>
						</div>

						<!-- Contact Info -->
						<div class="space-y-3" data-aos="fade-up" data-aos-delay="600">
							<div class="flex items-center text-sm text-gray-300">
								<MapPin class="mr-3 h-4 w-4 text-yellow-400" />
								<span>Based in Indonesia</span>
							</div>
							<div class="flex items-center text-sm text-gray-300">
								<Mail class="mr-3 h-4 w-4 text-yellow-400" />
								<a href={SOCIAL_LINKS.email} class="transition-colors hover:text-yellow-400">
									{SOCIAL_LINKS.email.replace('mailto:', '')}
								</a>
							</div>
							<div class="flex items-center text-sm text-gray-300">
								<Calendar class="mr-3 h-4 w-4 text-yellow-400" />
								<span>Available for new projects</span>
							</div>
						</div>

						<!-- Social Links -->
						<div class="mt-8 flex space-x-4" data-aos="fade-up" data-aos-delay="800">
							<a
								href={SOCIAL_LINKS.github}
								target="_blank"
								rel="noopener noreferrer"
								class="footer-social"
							>
								<Github class="h-5 w-5" />
							</a>
							<a
								href={SOCIAL_LINKS.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								class="footer-social"
							>
								<Linkedin class="h-5 w-5" />
							</a>
							<a href={SOCIAL_LINKS.email} class="footer-social">
								<Mail class="h-5 w-5" />
							</a>
						</div>
					</div>

					<!-- Quick Links -->
					<div data-aos="fade-up" data-aos-delay="400">
						<h3
							class="mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-lg font-semibold text-transparent"
						>
							Quick Links
						</h3>
						<ul class="space-y-4">
							{#each quickLinks as link}
								<li>
									<button
										onclick={() => handleLinkClick(link.href)}
										class="transform text-gray-300 transition-colors duration-300 hover:translate-x-2 hover:text-yellow-400"
									>
										{link.name}
									</button>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Services -->
					<div>
						<h3
							class="mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-lg font-semibold text-transparent"
						>
							Services
						</h3>
						<ul class="space-y-4">
							{#each services as service}
								<li>
									<button
										onclick={() => handleLinkClick(service.href)}
										class="transform text-gray-300 transition-colors duration-300 hover:translate-x-2 hover:text-yellow-400"
									>
										{service.name}
									</button>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="bg-black/20 px-4 py-6 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl">
				<div
					class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0"
					data-aos="fade-up"
					data-aos-delay="800"
				>
					<div class="flex items-center text-sm text-gray-400">
						<span>© {currentYear} {AUTHOR.name}. Made with</span>
						<Heart class="mx-2 h-4 w-4 animate-pulse text-red-400" />
						<span>using SvelteKit & Tailwind CSS</span>
					</div>
					<div class="flex items-center space-x-6 text-sm">
						<button
							onclick={() => handleLinkClick('#about')}
							class="text-gray-400 transition-colors hover:text-yellow-400"
						>
							Privacy Policy
						</button>
						<button
							onclick={() => handleLinkClick('#contact')}
							class="text-gray-400 transition-colors hover:text-yellow-400"
						>
							Terms of Service
						</button>
						<a
							href="/sitemap.xml"
							target="_blank"
							class="text-gray-400 transition-colors hover:text-yellow-400"
						>
							Sitemap
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Decorative elements -->
	<div
		class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
	></div>
</footer>
