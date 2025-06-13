<!-- Navbar.svelte -->
<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { scrollToSection } from '$lib/utils';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleNavigation(target: string) {
		// Close mobile menu
		isMenuOpen = false;

		// If we're on homepage, scroll to section
		if ($page.url.pathname === '/') {
			const element = document.getElementById(target);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			// If we're on other pages
			if (target === 'about' || target === 'contact') {
				// For about/contact, navigate to homepage with hash
				goto(`/#${target}`);
			} else {
				// For blog, projects, services - go to their listing pages
				goto(`/${target}`);
			}
		}
	}
</script>

<nav class="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo with enhanced design -->
			<div class="flex-shrink-0">
				<a
					href="/"
					class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 hover:scale-110"
				>
					BJ
				</a>
			</div>

			<!-- Desktop Navigation with glassmorphism -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-2">
					<button
						onclick={() => handleNavigation('about')}
						class="rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white hover:backdrop-blur-sm"
					>
						About
					</button>
					<button
						onclick={() => handleNavigation('projects')}
						class="rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white hover:backdrop-blur-sm"
					>
						Projects
					</button>
					<button
						onclick={() => handleNavigation('services')}
						class="rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white hover:backdrop-blur-sm"
					>
						Services
					</button>
					<button
						onclick={() => handleNavigation('blog')}
						class="rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white hover:backdrop-blur-sm"
					>
						Blog
					</button>
					<button
						onclick={() => handleNavigation('contact')}
						class="rounded-lg border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:border-yellow-400/50 hover:from-yellow-400/30 hover:to-orange-400/30"
					>
						Contact
					</button>
				</div>
			</div>

			<!-- Mobile menu button with modern design -->
			<div class="md:hidden">
				<button
					onclick={toggleMenu}
					class="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-gray-200 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/20 focus:outline-none"
				>
					{#if isMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Enhanced Mobile Navigation -->
	{#if isMenuOpen}
		<div class="md:hidden">
			<div
				class="space-y-1 border-t border-white/10 bg-black/30 px-2 pt-2 pb-3 backdrop-blur-md sm:px-3"
			>
				<button
					onclick={() => handleNavigation('about')}
					class="block w-full rounded-lg border border-transparent px-4 py-3 text-left text-base font-medium text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
				>
					About
				</button>
				<button
					onclick={() => handleNavigation('projects')}
					class="block w-full rounded-lg border border-transparent px-4 py-3 text-left text-base font-medium text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
				>
					Projects
				</button>
				<button
					onclick={() => handleNavigation('services')}
					class="block w-full rounded-lg border border-transparent px-4 py-3 text-left text-base font-medium text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
				>
					Services
				</button>
				<button
					onclick={() => handleNavigation('blog')}
					class="block w-full rounded-lg border border-transparent px-4 py-3 text-left text-base font-medium text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
				>
					Blog
				</button>
				<button
					onclick={() => handleNavigation('contact')}
					class="block w-full rounded-lg border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 px-4 py-3 text-left text-base font-medium text-white transition-all duration-300 hover:border-yellow-400/50 hover:from-yellow-400/30 hover:to-orange-400/30"
				>
					Contact
				</button>
			</div>
		</div>
	{/if}
</nav>
